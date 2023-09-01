import Slider from 'react-slick';

import { ReviewCard } from './OtherReviewsCard';
import example from 'example.json';

// AiOutlineLeft , AiOutlineRight
import React, { Component } from 'react';
import "./slick.css";
import "./slick-theme.css";

import { Container } from './OtherReviewsCard.styled';

import NextArr from "images/ArrowNext.svg";
import PrevArr from "images/ArrowPrev.svg";

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
        width: '40px',
        height: '40px',
        right: '-40px'
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
        width: '40px',
        height: '40px',
        left: '-40px'
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
          <ReviewCard id={ex.id} user={ex.user} body={ex.body} type={ex.type} photomessage={ex.photomessage} />
        ))}
        </Slider>
      </Container>
    );
  }
}
