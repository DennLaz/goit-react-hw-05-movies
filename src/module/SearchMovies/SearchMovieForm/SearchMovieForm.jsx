import PropTypes from 'prop-types';

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
    <form className={styles.form} onSubmit={headleSubmit}>
      <label className={styles.lable}>
        <input
          className={styles.input}
          onChange={headleChange}
          type="text"
          name="search"
          value={state.search}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
          placeholder="Serch movie"
        />
      </label>
      <button className={styles.button} type="submit">Search</button>
    </form>
  );
};

SearchMoviesForm.defaultProps = {
  onSubmit: () => { }, 
}

SearchMoviesForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default SearchMoviesForm;
