import { useSearchParams } from 'react-router-dom';
import { fetchMoviesSearch } from '../../API/tmdb-api';
import { useEffect, useMemo, useState } from 'react';

import SearchBar from '../../components/SearchBar/SearchBar';
import Loader from '../../components/Loader/Loader';
import MoviesList from '../../components/MoviesList/MoviesList';
import PaginationList from '../../components/PaginationList/PaginationList';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );

  const { query, page } = params;

  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState(null);

  const handleSearch = (query) => {
    setSearchParams({ query, page: !page ? 1 : page });
  };

  useEffect(() => {
    if (query && page) {
      const fetchData = async () => {
        try {
          setError(null);
          setLoading(true);
          const data = await fetchMoviesSearch(query, page);
          setMovies(data.results);
          setTotalPages(data.total_pages);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }
  }, [query, page]);

  const loadSelectedPage = ({ selected }) => {
    setSearchParams({
      query: !query ? '' : query,
      page: parseInt(selected + 1),
    });
  };

  return (
    <section>
      <div className="container">
        <SearchBar onSearch={handleSearch} />
        {loading && <Loader />}
        {!error && !loading && movies && (
          <>
            <MoviesList movies={movies} />
            {totalPages > 1 && (
              <PaginationList
                onClick={loadSelectedPage}
                pageCount={totalPages}
                forcePage={page}
              />
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default MoviesPage;
