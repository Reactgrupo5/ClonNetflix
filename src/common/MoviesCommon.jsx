import { useEffect, useState } from "react";
import Services from "./services/Services";
import Slider from "../features/movies/Sliders/Slider_infinite";
// import SwiperInfinite from "../features/movies/components/Sliders/SwiperInfinite";

const Movies = (props) => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState([]);
  const [page, setPage] = useState(1);

  const IsgetMovies = async () => {
    setIsLoading(true);

    try {
      //   const { data } = await axios.get(url + page);

      const tipo = props.type;

      let data = "";

      switch (tipo) {
        case "Popular":
          data = await Services.getMovies.Popular(page);
          break;
        case "TopRank":
          data = await Services.getMovies.TopRank(page);
          break;
        default:
          break;
      }

      setMovie(data);

      setError("");
    } catch (error) {
      console.log(error);
      setError("Error desconocido");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    IsgetMovies();
  }, [page]);

  const PageAdvance = (e) => {
    e.preventDefault();
    page < 5 ? setPage(page + 1) : setPage(page);
  };

  const PageReturn = (e) => {
    e.preventDefault();
    page > 1 ? setPage(page - 1) : setPage(page);
  };

  return (
    <div>
      <h2
        style={{
          textAlign: "center",
          color: "white",
        }}
      >
        {props.title}
      </h2>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <Slider
        movies={movie}
        avance={PageAdvance}
        retorno={PageReturn}
        page={page}
      />
    </div>
  );
};

export default Movies;
