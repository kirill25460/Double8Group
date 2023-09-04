import Slider from 'react-slick';

import { ReviewCard } from './OtherReviewsCard';
import example from 'example.json';

// AiOutlineLeft , AiOutlineRight
import React, { Component } from 'react';
import "./slick.css";
import "./slick-theme.css";

import { Container } from './OtherReviewsCard.styled';

import NextArr from "images/ArrowNext.png";
import PrevArr from "images/ArrowPrev.png";
import { useMediaQuery } from '@mui/material';

function SampleNextArrow(props) {
  const SmallDisp = useMediaQuery('(max-width: 767px)')

  if(SmallDisp){
    return null;
  }

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
        width: '35px',
        height: '35px',
        right: '-25px'
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {

  const SmallDisp = useMediaQuery('(max-width: 767px)')

  if(SmallDisp){
    return null;
  }
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
        width: '35px',
        height: '35px',
        left: '-25px'
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
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 768,
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
