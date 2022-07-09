import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieDetailsByIdCredits } from '../../shared/api/movies';

import styles from './castPage.module.css';

const CastPage = () => {
  const [state, setState] = useState({
    items: [],
    loading: false,
    error: null,
  });
    
    const {items} = state;

  const { id } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      setState(prevState => ({
        ...prevState,
        loading: true,
        error: false,
      }));
      try {
        const {cast} = await getMovieDetailsByIdCredits(id);
        setState(prevState => ({
          ...prevState,
          items: cast,
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
      fetchReviews()
  }, [id]);

  const elements = items.map(({ id, original_name, character, profile_path }) => {
        const profilePhoto = `https://image.tmdb.org/t/p/w500${profile_path}`;
        return (
            <li key={id}>
                <img src={profilePhoto} alt={original_name} />
                <p>Name: {original_name}</p>
                <p>Character: { character}</p>
            </li>
        )
    })

    return <ul>
      {elements}
  </ul>;
};

export default CastPage;
