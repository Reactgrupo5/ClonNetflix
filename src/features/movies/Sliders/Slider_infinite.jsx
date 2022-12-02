import React, { useContext, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Slider.css";
import { Pagination, Navigation } from "swiper";
import MovieCard from "./MovieCard";
import uniqid from 'uniqid';

const Slider = (props) => {

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
            
              <SwiperSlide  key={movie.id} >
                <MovieCard movie={movie} />
              </SwiperSlide>
            
          );
        })}
      </Swiper>
    </>
  );
};

export default Slider;
