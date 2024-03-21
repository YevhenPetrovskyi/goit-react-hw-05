import css from './SearchBar.module.css';
import toast, { Toaster } from 'react-hot-toast';

const SearchBar = ({ onSearch }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const query = form.elements.query.value.trim();

    if (!query.trim()) {
      toast.error('Please enter search term!', { position: 'top right' });
      return;
    }

    onSearch(query);
    form.reset();
  };

  return (
    <>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <input
          className={css.searchInput}
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
        />

        <button className={css.searchBtn} type="submit">
          Search
        </button>
      </form>
      <Toaster />
    </>
  );
};

export default SearchBar;
