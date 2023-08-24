import Slider from "react-slick";
import { useState, useEffect, useRef } from 'react';
import {ReviewCard} from "./TryCard"
// import data from 'example.json';
// import { OtherReviewsCard } from "./OtherReviewsCard";

export const SimpleSlider = ({ initialSlide = 0 }) => {

  const [hasSetPosition, setHasSetPosition] = useState(false);
  const slider = useRef();

  useEffect(() => {
    if (slider.current && !hasSetPosition) {
      slider.current.slickGoTo(initialSlide);
      setHasSetPosition(true);
    }
  }, [initialSlide, hasSetPosition, slider]);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide,
  };

  return (
    <Slider ref={slider} {...settings}>
      <ReviewCard/>
    </Slider>
  )
}