import PropTypes from 'prop-types';
import css from './Searchbar.module.css';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Searchbar({ onHandleSubmit }) {

  const [query, setQuery] = useState('');

  const onSubmit = evt => {
    evt.preventDefault();
    if (query.trim() === '') {
      return toast.info('Please, use search field!');
    }
    onHandleSubmit(query);
    setQuery('');
  };
  return (
    <header className={css.searchbar}>
      <form className={css.form} onSubmit={onSubmit}>
        <button type="submit" className={css.button}>
          <span className={css.label}>Search</span></button>
        <input
          className={css.input}
          type="text"
          value={query}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={({ target }) => setQuery(target.value)} />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onHandleSubmit: PropTypes.func.isRequired,
};

export default Searchbar;