import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./Slider.scss";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import ibSino from '../../assets/img/ibn-sino.png'

function Slider() {
  return (
    <div className="slider">
      <Swiper 
      pagination={true} 
      loop={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay,Pagination]} 
      className="mySwiper">
        <SwiperSlide>
          <h2>Temuriylar <br /> davri adabiyoti</h2>
          <img src={ibSino} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <h2>Temuriylar <br /> davri adabiyoti</h2>
          <img src={ibSino} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <h2>Temuriylar <br /> davri adabiyoti</h2>
          <img src={ibSino} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <h2>Temuriylar <br /> davri adabiyoti</h2>
          <img src={ibSino} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
export default Slider;
