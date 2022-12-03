import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import axios from "axios";
// import VerVideo from "./VerVideo";

const api_key = "8723eaa98c81b66c186f2daaa6f1b156";
const video_id = 792775;
const url = `https://api.themoviedb.org/3/movie/${video_id}/videos?api_key=${api_key}&language=en-US`;

const url2 = `https://www.youtube.com/watch?v=`;

const Otro = () => {
  const [key, setKey] = useState(0);

  const getData = async () => {
    const data = await axios.get(url);
    
    const dato= await data.data.results

    // const key=dato.filter(word => word.name=="Trailer")[0].key

    key=await data.data.results[0].key

    

    console.log("KEY:",key)

  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div>
        hola.
        <ReactPlayer
          url={[url2 + key]}
          className="react-player"
          playing
          width="100%"
          height="100%"
          muted={true}
          autoPlay={true}
        />
        <div></div>
      </div>
    </div>
  );
};

export default Otro;
