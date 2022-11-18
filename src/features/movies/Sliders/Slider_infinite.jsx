import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Slider.css";
// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";

const Slider = (props) => {
  return (
    <>
      <Swiper
        slidesPerView={7}
        spaceBetween={1}
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
        {props.movies.map((movie, index) => {
          return (
            <div id="swip">
              <SwiperSlide key={index}>
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
                  ></img>
                </div>
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
    </>
  );
};

export default Slider;
