import React,{Children, useContext} from "react";
import ContextMovies from "../context/ContextMovies"

const MovieCard = ({ movie }) => {

  const {setMovieId,setMovieUrl}=useContext(ContextMovies)

  const mostraAlgo = () => {
    console.log("Url:",movie.backdrop_path)
    setMovieId(movie.id)
    setMovieUrl(movie.backdrop_path)
  };
 
  return (
    <>
    <div>
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
          mostraAlgo;
        }}
      ></img>
    </div>
    </>
  );
};

export default MovieCard;
