import { createContext,useState } from "react";

const ContextMovies = createContext();

export default ContextMovies;

export const MoviesProvider = ({children}) => {
    const [movieKey, setMovieKey] = useState(0);
  
    return (
      <ContextMovies.Provider
        value={{ movieKey, setMovieKey }}
      >
        {children}
      </ContextMovies.Provider>
    );
  };