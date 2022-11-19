import { useState } from "react";
import ContextMovies from "./ContextMovies";

import Slider_infinite from "../Sliders/Slider_infinite";
import Banner from "../components/Banner";

const MoviesProvider = () => {
  const [movieId, setMovieId] = useState(0);
  const [movieUrl, setMovieUrl] = useState("/");

  return (
    <ContextMovies.Provider
      value={{ movieId, setMovieId, movieUrl, setMovieUrl }}
    >
      {/* {children} */}
      <Slider_infinite />
      <Banner />
    </ContextMovies.Provider>
  );
};

export default MoviesProvider;
