const API_KEY = "a9c4272f";
const BASE_URL = "https://www.omdbapi.com/";

export const searchMovies = async (query, page = 1, type = "") => {
  const res = await fetch(
    `${BASE_URL}?apikey=${API_KEY}&s=${query}&page=${page}&type=${type}`
  );
  return res.json();
};

export const getMovieDetails = async (id) => {
  const res = await fetch(
    `${BASE_URL}?apikey=${API_KEY}&i=${id}&plot=full`
  );
  return res.json();
};
