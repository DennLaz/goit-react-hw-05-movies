import { useState, useEffect } from 'react';
import { useSearchParams} from 'react-router-dom'

import SearchMovieForm from './SearchMovieForm';
import MovieList from 'shared/components/MovieList';
import { searchMovie } from '../../shared/api/movies';

import styles from './searchMovies.module.css';

const SearchMovies = () => {
  const [state, setState] = useState({
    items: [],
    loading: false,
    error: null,
  });

  const { items, loading, error } = state;

    const [searchParams, setSearchParams] = useSearchParams();
    const search = searchParams.get("query");

  useEffect(() => {
    const fetchMovie = async () => {
      setState(prevState => ({
        ...prevState,
        loading: true,
        error: false,
      }));

      try {
        const {results} = await searchMovie(search);
        setState(prevState => ({
          ...prevState,
          loading: false,
          items: results,
        }));
      } catch (error) {
        setState(prevState => ({
          ...prevState,
          loading: false,
          error,
        }));
      }
    };
    if (search) {
      fetchMovie();
    }
  }, [search]);

  const changeSerch = ({ search }) => setSearchParams({query: search});

  return (
    <div className="container">
      <SearchMovieForm onSubmit={changeSerch} />
      <MovieList items={items} />
    </div>
  );
};

export default SearchMovies;
