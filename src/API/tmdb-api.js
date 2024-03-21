import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const options = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNmY4MWM5MTA5N2VmYmU4MjBkOGEzMTEwNDMwNTQyNCIsInN1YiI6IjY1ZjlhOTQ4NTQ5ZGRhMDE4NjdkZTY2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wEPJQ6x4pzigLr_V-5s1b0zLMt-PSk7xyTlKmxD9jSQ',
  },
};

export const fetchTrendingMovies = async () => {
  const { data } = await axios.get(
    'trending/movie/day?language=en-US',
    options
  );
  return data.results;
};

export const fetchMoviesSearch = async (query, page = 1) => {
  const { data } = await axios.get('search/movie', {
    ...options,
    params: {
      query,
      include_adult: false,
      language: 'en-US',
      page,
    },
  });
  return data;
};

export const fetchMovieDetails = async (movieId) => {
  const { data } = await axios.get(`movie/${movieId}?language=en-US`, options);
  return data;
};

export const fetchCast = async (movieId) => {
  const { data } = await axios.get(
    `movie/${movieId}/credits?language=en-US`,
    options
  );
  return data.cast;
};

export const fetchReviews = async (movieId) => {
  const { data } = await axios.get(
    `movie/${movieId}/reviews?language=en-US`,
    options
  );
  return data.results;
};
