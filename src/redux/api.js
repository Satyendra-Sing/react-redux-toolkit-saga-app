import axios from 'axios';

const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

export const fetchMovies = async (moviesName) => await axios.get(`${API_ENDPOINT}&s=${moviesName}`);
export const fetchMovie = async (movieId) => await axios.get(`${API_ENDPOINT}&i=${movieId}`);
