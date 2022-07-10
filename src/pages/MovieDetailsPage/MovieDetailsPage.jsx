import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {Link, Outlet, useLocation} from 'react-router-dom'

import { getMovieDetailsById } from '../../shared/api/movies';
import MovieDetails from 'module/MovieDetails';

import styles from './movieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const [state, setState] = useState({
    movie: {},
    loading: false,
    error: null,
  });

  const { id } = useParams();
  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from || '/'

  const { movie, loading, error } = state;

  useEffect(() => {
    const fetchMovie = async () => {
      setState(prevState => ({
        ...prevState,
        loading: true,
        error: false,
      }));
      try {
        const data = await getMovieDetailsById(id);
        setState(prevState => ({
          ...prevState,
          movie: { ...data },
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
  }, [id]);

    const isMovie = Object.keys(movie).length > 0;
    const goBack = () => navigate(from);

  return (
    <div className="container">
      {loading && <p className={styles.text}>...Loading</p>}
      {error && <p className={styles.text}>Movie not found</p>}
      {isMovie && <button className={styles.button} onClick={goBack}>Go Back</button>}
      {isMovie && <MovieDetails {...movie} />}
      <div> 
        <h4>Additional information</h4>
        {isMovie && <Link to={`cast`} state={{from}}>Cast</Link>}
        {isMovie && <Link to={`reviews`} state={{from}}>Reviews</Link>}
        <Outlet />
      </div>

    </div>
  );
};

export default MovieDetailsPage;
