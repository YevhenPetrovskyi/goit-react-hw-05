import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../../API/tmdb-api';

import MovieList from '../../components/MovieList/MovieList';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loader from '../../components/Loader/Loader';

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchTrendingMovies();
        setMovies(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <section>
      <div className="container">
        <h1>Trending today</h1>
        {error && <ErrorMessage message={error} />}
        {movies && <MovieList movies={movies} />}
        {loading && <Loader />}
      </div>
    </section>
  );
};

export default HomePage;
