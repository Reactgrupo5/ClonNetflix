import React,{useContext} from "react";
import ContextMovies from "../context/ContextMovies"
import Services from "../../../common/services/Services";

const MovieCard = ({ movie }) => {

  const {setMovieKey}=useContext(ContextMovies)

  const mostraAlgo = async () => {
    
    const  data= await Services.getVideo.advance(movie.id)
    console.log("movie.id:",movie.id)
    setMovieKey(data)
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
          mostraAlgo();
        }}
      ></img>
    </div>
    </>
  );
};

export default MovieCard;
