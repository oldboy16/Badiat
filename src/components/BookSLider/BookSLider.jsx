import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./BookSlider.scss";

// import required modules
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

function BookSLider({ data }) {
  return (
    <>
      <Swiper
        slidesPerView={6}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {data?.map((item, index) => (
          <SwiperSlide key={index}>
            <li  className="books__item">
              <Link to={`/book-detail/${item.id}`}>
                <img src={item.img} alt="" />
                <h3>{item.name}</h3>
                <span>4.1 • 3400 ta fikrlar</span>
              </Link>
            </li>
          </SwiperSlide>
        ))}
       
      </Swiper>
    </>
  );
}
export default BookSLider;
