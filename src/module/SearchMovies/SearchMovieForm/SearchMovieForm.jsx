import { useState } from 'react';

import styles from './searchMovieForm.module.css';

const SearchMoviesForm = ({ onSubmit }) => {
  const [state, setState] = useState({
    search: '',
  });

  const headleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const headleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    setState({ search: '' });
  };

  return (
    <form onSubmit={headleSubmit}>
      <label>
        <input
          onChange={headleChange}
          type="text"
          name="search"
          value={state.search}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
          placeholder="Serch movie"
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchMoviesForm;
