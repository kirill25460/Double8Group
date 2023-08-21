import React from 'react';
// useRef, useState
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { NavLink } from 'react-router-dom';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Slider.css';
import { ButtonSlider, TopText, TextSlider, Container } from './Slider.styled';
import Slide1 from 'images/Group1.png';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function MySlider() {
  return (
    <>
      <Swiper
        spaceBetween={40}
        centeredSlides={true}
        autoplay={{
          delay: 20000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <Container>
          <SwiperSlide>
            <img src={Slide1} alt="Slide1" />
            <TopText>AIR DUCT & DRYER VENT CLEANING SERVICE</TopText>
            <TextSlider>
              Optional text about itOptional text about itOptional text about
              itOptional text about itOptional text about itOptional text about{' '}
            </TextSlider>
            <NavLink to="air_duct">
              <ButtonSlider>Details</ButtonSlider>
            </NavLink>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Slide1} alt="Slide2" />
            <ButtonSlider>Details</ButtonSlider>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Slide1} alt="Slide3" />
            <ButtonSlider>Details</ButtonSlider>
          </SwiperSlide>
        </Container>
      </Swiper>
    </>
  );
}
