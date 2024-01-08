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
import { ButtonSlider, TopText, Container } from './Slider.styled';
// import Slide1 from 'images/Group1.png';
import Slide1 from 'images/main-slider-residential.png'
import Slide2 from 'images/main-slider-dryer.png'
import Slide3 from 'images/main-slider-chimney.png'
import Slide4 from 'images/main-slider-bathroom.png'
import Slide5 from 'images/main-slider-power.png'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function MySlider() {
  return (
    <>
      <Swiper
      id="home"
        spaceBetween={40}
        centeredSlides={true}
        autoplay={{
          delay: 18000,
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
            <TopText>RESIDENTIAL AND COMMERCIAL AIR DUCT CLEANING</TopText>
            <NavLink to="air_duct">
              <ButtonSlider>Details</ButtonSlider>
            </NavLink>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Slide2} alt="Slide2" />
            <TopText>DRYER VENT CLEANING</TopText>
            <NavLink to="dry_vent">
              <ButtonSlider>Details</ButtonSlider>
            </NavLink>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Slide3} alt="Slide3" />
            <TopText>CHIMNEY CLEANING</TopText>
            <NavLink to="chimney_cleaning">
              <ButtonSlider>Details</ButtonSlider>
            </NavLink>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Slide4} alt="Slide4" />
            <TopText>BATHROOM FAN CLEANING</TopText>
            <NavLink to="bathroom_fan_cleaning">
              <ButtonSlider>Details</ButtonSlider>
            </NavLink>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Slide5} alt="Slide5" />
            <TopText>POWER WASHING</TopText>
            <NavLink to="power_washing">
              <ButtonSlider>Details</ButtonSlider>
            </NavLink>
          </SwiperSlide>
        </Container>
      </Swiper>
    </>
  );
}
