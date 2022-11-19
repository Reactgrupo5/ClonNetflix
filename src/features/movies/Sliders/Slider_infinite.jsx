import React, { useContext, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ContextMovies from "../context/ContextMovies";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Slider.css";
// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import MovieCard from "./MovieCard";

const Slider = (props) => {
  //   const { movieId, setMovieId, movieUrl, setMovieUrl } =
  //     useContext(ContextMovies);

  return (
    <>
      <Swiper
        slidesPerView={7}
        spaceBetween={0}
        slidesPerGroup={7}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {props.movies.map((movie) => {
          return (
            <div id="swip">
              <SwiperSlide>
                <MovieCard movie={movie} key={movie.id} />
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
    </>
  );
};

export default Slider;
