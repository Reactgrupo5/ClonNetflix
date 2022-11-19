import React from "react";

const MovieCard = ({ movie, key }) => {
  const mostraAlgo = (id, path) => {
    console.log("Movie-Id ahora:", id);
    sessionStorage.setItem("movieID", id + "***" + path);
  };

  return (
    <div key={key}>
      <h5
        className="SwiperImage"
        style={{ textAlign: "center", color: "white" }}
      >
        {movie.title}
      </h5>
      <img
        src={movie.backdrop_path}
        style={{ width: "90%" }}
        alt=""
        onClick={() => {
          mostraAlgo(movie.id, movie.backdrop_path);
        }}
      ></img>
    </div>
  );
};

export default MovieCard;
