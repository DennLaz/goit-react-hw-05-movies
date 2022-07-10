import { useState, useEffect } from 'react';

import { getTrending } from '../../shared/api/movies';
import MovieList from 'shared/components/MovieList';


const Movies = () => {
  const [state, setState] = useState({
    items: [],
    loading: false,
    error: null,
  });

  const { items, loading, error } = state;

  useEffect(() => {
    const fetchMovie = async () => {
      setState(prevState => ({
        ...prevState,
        loading: true,
        error: false,
      }));
      try {
        const results = await getTrending();
        setState(prevState => ({
          ...prevState,
          items: [...results],
          loading: false,
        }));
      } catch (error) {
        setState(prevState => ({
          ...prevState,
          loading: false,
          error,
        }));
      }
    };

    fetchMovie();
  }, []);

  return (
    <>
     {loading && <p>...Loading</p>}
      {error && <p>Movie not found, try again</p>}
      <MovieList items={items} />
    </>
  );
};

export default Movies;
