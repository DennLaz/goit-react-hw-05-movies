import PropTypes from 'prop-types';

import { Link, useLocation } from 'react-router-dom';

import styles from './movieList.module.css'

const MovieList = ({ items }) => {
const location =useLocation()

  const elements = items.map(({ id, title }) => (
    <li className={styles.item} key={id} >
      <Link className={styles.list} to={`/movie/${id}`} state={{from: location}}>{title}</Link>
    </li>
  ));

  return <ul>{elements}</ul>;
};

MovieList.defaultProps = {
  items: [],
}

MovieList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })),
}

export default MovieList;
