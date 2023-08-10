import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Slider.css';




// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function MySlider() {
  return (
    <>
      <Swiper
        spaceBetween={40}
        centeredSlides={true}
        autoplay={{
          delay: 30000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide> <img src="public/images/first.jpg" alt='Slide1'/></SwiperSlide>
        <SwiperSlide><img src="public/images/second.jpg" alt='Slide2'/></SwiperSlide>
        <SwiperSlide><img src="public/images/third.jpg" alt='Slide3'/></SwiperSlide>
        <SwiperSlide><img src="public/images/naruto.png" alt='Slide4'/></SwiperSlide>
   
    
      </Swiper>
    </>
  );
}
