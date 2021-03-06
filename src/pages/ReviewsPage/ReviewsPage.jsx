import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieDetailsByIdReviews } from '../../shared/api/movies';

import styles from './reviewsPage.module.css';

const ReviewsPage = () => {
  const [state, setState] = useState({
    items: [],
    loading: false,
    error: null,
  });

  const { items } = state;

  const { id } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      setState(prevState => ({
        ...prevState,
        loading: true,
        error: false,
      }));
      try {
        const { results } = await getMovieDetailsByIdReviews(id);
        setState(prevState => ({
          ...prevState,
          items: results,
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
    fetchReviews();
  }, [id]);

  const elements = items.map(({ author, content, id }) => (
    <li key={id}>
      <h5 className={styles.el}>Author: {author}</h5>
      <p className={styles.text}>{content}</p>
    </li>
  ));

  return(
    <ul>
      {elements.length > 0 ? elements : <p>We don`t have any reviews for this movie</p>}
  </ul>);
};

export default ReviewsPage;
