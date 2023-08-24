import Slider from "react-slick";
// import { useState, useEffect, useRef } from 'react';
import {ReviewCard} from "./TryCard"
// import data from 'example.json';
// import { OtherReviewsCard } from "./OtherReviewsCard";

import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
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