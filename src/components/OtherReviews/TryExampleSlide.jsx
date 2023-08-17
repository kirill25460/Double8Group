import React from 'react';
// useRef, useState 
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Slider.css';
// import{ButtonSlider,Container} from './Slider.styled';
import {Avatar,ListWrap,Container,ItemWrap,UserWrap} from "./OtherReviews.styled"
// Container,,TopText,TextSlider

// import Avatar21 from "images/avatar2.png";
// import Avatar31 from "images/avatar3.png";


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';




export const MySlider = ({ body,type, user:{username, avatar} }) =>  {
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
         
          <ListWrap>
        <ItemWrap>
    <Avatar src={avatar} alt="User avatar" width="48" />
    <UserWrap>
    <p>  {username}</p>
    <p>  {type}</p>
    </UserWrap>
    </ItemWrap>
    <p> Message : {body}</p>
    </ListWrap>
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src={Avatar21} alt='Slide2'/>
        <ButtonSlider>Details</ButtonSlider>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Avatar31} alt='Slide3'/>
        <ButtonSlider>Details</ButtonSlider>
        </SwiperSlide> */}

   
        </Container>
      </Swiper>
      
    </>
  );
}