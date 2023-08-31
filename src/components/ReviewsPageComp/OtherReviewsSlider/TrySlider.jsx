import Slider from 'react-slick';
// import { useState, useEffect, useRef } from 'react';
import { ReviewCard } from './TryCard';
import example from 'example.json';
// import { OtherReviewsCard } from "./OtherReviewsCard";

import React, { Component } from 'react';
import "./slick.css";
import "./slick-theme.css";

import { Container } from './TryCard.styled';

import NextArr from "images/Next.png";
import PrevArr from "images/Prev.png";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        borderRadius: '123px',
        border: '3px solid #F8821E',
        opacity: '0.76',
        backgroundImage: `url(${NextArr})`,
        width: '50px',
        height: '50px',
        
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        borderRadius: '123px',
        border: '3px solid #F8821E',
        opacity: '0.76',
        backgroundImage: `url(${PrevArr})`,
        width: '50px',
        height: '50px',
      }}
      onClick={onClick}
    />
  );
}
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <Container>
        <Slider {...settings}>
        {example.comments.map(ex => (
          <ReviewCard id={ex.id} user={ex.user} body={ex.body} type={ex.type} />
        ))}
        </Slider>
      </Container>
    );
  }
}
