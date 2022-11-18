import React from "react";

import MoviesCommon from "../../common/MoviesCommon";
import Logonetflix from "../../common/components/Logonetflix";
import InicButton from "../../common/components/InicButton";
import "../../css/movies.css";
import Banner from "./components/Banner";

const Movies = () => {
  const username = sessionStorage.getItem("username");

  return (
    <div id="container">
      <div id="header">
        <Logonetflix />
        <div id="user-logout">
          <h4 style={{ color: "white", marginRight: "5px" }}>
            Usuario : {username}
          </h4>
          <InicButton texto="Cerrar sesión" nav="/logout" />
        </div>
      </div>
      <div>
        <Banner />
      </div>
      <div id="movies">
        <MoviesCommon type={"Popular"} title={"POPULAR MOVIES"} />
        <MoviesCommon type={"TopRank"} title={"TOP RANK MOVIES"} />
      </div>
    </div>
  );
};

export default Movies;
