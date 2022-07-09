import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

const APIKEY = 'a4558d71f5b7095b04316fd2e31fa3af';

export const getTrending = async (page = 1) => {
  const {
    data: { results },
  } = await instance.get('trending/movie/day', {
    params: {
      api_key: APIKEY,
      page,
    },
  });
  return results;
};

export const getMovieDetailsById = async id => {
  const { data } = await instance.get(`/movie/${id}`, {
    params: {
      api_key: APIKEY,
    },
  });
  return data;
};

export const searchMovie = async query => {
  const { data } = await instance.get('search/movie', {
    params: {
      api_key: APIKEY,
      query,
    },
  });
  return data;
};
