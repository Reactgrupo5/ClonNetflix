// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./Slider.css";

const Slider = (props) => {
  let prev = document.getElementsByClassName("swiper-button-prev");
  let next = document.getElementsByClassName("swiper-button-next");
  let page = props.page;

  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={7}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => {
          let page = props.page;
          console.log(swiper);
          console.log("page:", page);
        }}
        onSlideChange={(e) => {
          console.log("e:", e);
        }}
      >
        {props.movies.map((movie) => {
          return (
            <div id="swip">
              <SwiperSlide key={movie.id}>
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
      <div id="buttons" style={{ textAlign: "center" }}>
        <button onClick={props.retorno} id="retorno">
          Pagina Anterior
        </button>
        <button onClick={props.avance} id="avance">
          Pagina Siguiente
        </button>
      </div>
    </>
  );
};

export default Slider;
