import { createContext,useState } from "react";
import Slider_infinite from "../Sliders/Slider_infinite";

const ContextMovies = createContext();

export default ContextMovies;

export const MoviesProvider = ({children}) => {
    const [movieId, setMovieId] = useState(0);
    const [movieUrl, setMovieUrl] = useState("/");
  
    return (
      <ContextMovies.Provider
        value={{ movieId, setMovieId, movieUrl, setMovieUrl }}
      >
        {children}
      </ContextMovies.Provider>
    );
  };