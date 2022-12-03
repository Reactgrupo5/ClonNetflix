import axios from "axios";

import {
  API_KEY,
  url_base,
  url_video,
  url_image,
} from "../../utils/constants.js";

const Services = {
  getMovies: {
    Popular: async (page) => {
      const url = `${url_base}/movie/popular?api_key=${API_KEY}&language=en-US&page=`;
      const { data } = await axios.get(url + page);
      //const total = data.total_pages; //habria que agregarlo como punto máximo de páginas
      const movieAdapter = data.results.map((movie) => {
        return {
          id: movie.id,
          backdrop_path: `${url_video}/w500/${movie.backdrop_path}`,
          overview: movie.overview,
          poster_path: `${url_video}/w500/${movie.poster_path}`,
          title: movie.title,
        };
      });
      return movieAdapter;
    },
    TopRank: async (page) => {
      const url = `${url_base}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=`;
      const { data } = await axios.get(url + page);
      const movieAdapter = data.results.map((movie) => {
        return {
          id: movie.id,
          backdrop_path: `${url_image}/w500/${movie.backdrop_path}`,
          overview: movie.overview,
          poster_path: `${url_image}/w500/${movie.poster_path}`,
          title: movie.original_title,
        };
      });

      return movieAdapter;
    },
  },
  getSeries: {
    Popular: () => {},
    TopRank: () => {},
  },
  getVideo:{
    advance: async (video_id) => {
    const url = `https://api.themoviedb.org/3/movie/${video_id}/videos?api_key=${API_KEY}&language=en-US`;
    const data = await axios.get(url);
    const dato= await data.data.results

    const key=dato.filter(word => word.key!="")[0].key

    console.log("KEY:",key)
    return key
  
    }}
};

export default Services;
