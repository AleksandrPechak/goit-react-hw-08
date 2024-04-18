import axios from "axios";

const API_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ODE3Y2JkYTJjYzcxOGJkMzgzODQwOGQzNDVkYTViMCIsInN1YiI6IjY2MWU5MDFiNmEzMDBiMDE3ZTMyN2Y2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3u7x7Jz-6QwdR5iIyKzkTpm3QiVSzJt13KtQWghHxqw";

const BASE_URL = "https://api.themoviedb.org/";

const options = {
  headers: {
    Authorization: "Bearer " + API_TOKEN,
  },
};

export const fetchMoviesTrending = async () => {
  const url = BASE_URL + "3/trending/movie/day";
  const response = await axios.get(url, options);
  return response;
};

export const fetchMoviesSearch = async (query) => {
  const url = BASE_URL + `3/search/movie?query=${query}`;
  const response = await axios.get(url, options);
  return response;
};

export const fetchMoviesDetails = async (movieId) => {
  const url = BASE_URL + `3/movie/${movieId}`;
  const response = await axios.get(url, options);
  return response;
};

export const fetchMoviesCredits = async (movieId) => {
  const url = BASE_URL + `3/movie/${movieId}/credits`;
  const response = await axios.get(url, options);
  return response;
};

export const fetchMoviesReviews = async (movieId) => {
  const url = BASE_URL + `3/movie/${movieId}/reviews`;
  const response = await axios.get(url, options);
  return response;
};