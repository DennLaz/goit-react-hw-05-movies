import { Link } from 'react-router-dom';

const MovieList = ({ items }) => {
  const elements = items.map(({ id, title }) => (
    <li key={id}>
      <Link to={`/movie/${id}`}>{title}</Link>
    </li>
  ));

  return <ul>{elements}</ul>;
};

export default MovieList;
