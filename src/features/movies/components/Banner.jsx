import React, { useState, useContext } from "react";
import ContextMovies from "../context/ContextMovies";

const Banner = () => {
    const { movieId, setMovieId, movieUrl, setMovieUrl } =
      useContext(ContextMovies);

console.log("movieUrl:",movieUrl)

  return (
    <div>
      <img src={movieUrl} alt="" />
      <h1>BANNER</h1>
    </div>
  );
};

export default Banner;
