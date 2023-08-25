import Slider from "react-slick";
// import { useState, useEffect, useRef } from 'react';
import {ReviewCard} from "./TryCard"
// import data from 'example.json';
// import { OtherReviewsCard } from "./OtherReviewsCard";

import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
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
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  return ( <div>

    <Slider {...settings}>
      <div>
        <ReviewCard/>
      </div>
      <div>
      <ReviewCard/>
      </div>
      <div>
      <ReviewCard/>
      </div>
      <div>
      <ReviewCard/>
      </div>
      <div>
      <ReviewCard/>
      </div>
      <div>
      <ReviewCard/>
      </div>
    </Slider>
  </div>
);
}
}