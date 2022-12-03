import React, { useState, useContext } from "react";
import ContextMovies from "../context/ContextMovies";
import ReactPlayer from "react-player";
import {url_youtube} from "../../../utils/constants.js";

const Banner = () => {
    const { movieKey } = useContext(ContextMovies);

    const url=url_youtube + movieKey;

    console.log(url);

  return (
    <div>
    
      {/* <img src={movieUrl} alt="" style={{width: "40%",
                margin: "auto",
                display: "block"}} /> */}

      <ReactPlayer
          style={{width: "40%",
                margin: "auto",
                display: "block"}}
          url={url}
          className="react-player"
          playing
          width="100%"
          height="100%"
          muted={false}
          autoPlay={true}
        />
      
    </div>
  );
};

export default Banner;
