// import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';

import {
  Container,
  NameService,
  TextService,
  WrapSlider,
  ButtonServices,

  WrapService,
  WrapImages,
  MobButtonServices,
  ImgText,
  DescriptionService,
  SeerviceImages,
  // DivPhoto,
} from './ChimneyCleaning.styled';

import after from 'images/ChimneyAfter.jpg';
import before from 'images/ChimneyBefore.jpg';
import BeforeAfterText from 'images/before-after.png';
import Clock from 'images/icon_clock.png';
import Photo from 'images/icon_camera.png';

// import arr from "images/services/PhotoObject";
// import { SliderServices } from 'helper/SliderServices';

// const photo = arr.chimneyCleaning;

const FIRST_IMAGE = {
  imageUrl: before,
};
const SECOND_IMAGE = {
  imageUrl: after,
};
const delimiterIconStyles = {
  width: '50px',
  height: '50px',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
  borderRadius: 'none',
  backgroundImage: `url(${BeforeAfterText})`,
};
export const ChimneyCleaningP = () => {
  // const [isSliderOpen, setIsSliderOpen] = useState(false);

  // const openSlider = () => {
  //   setIsSliderOpen(true);
  // };

  // const closeSlider = () => {
  //   setIsSliderOpen(false);
  // };
  return (
    <>
      <Container>
        <WrapService>
          <NameService>CHIMNEY CLEANING</NameService>
          <TextService>
          Soot regularly accumulates on chimney’s walls. It is necessary to clean it in order to prevent the occurrence of a fire in the house and the carbon monoxide poisoning.
          </TextService>
          
          <NavLink to="contact_us"><ButtonServices>BOOK THIS SERVICE</ButtonServices></NavLink>
         
        </WrapService>

        <WrapSlider>
        <DescriptionService>*Price is an accurate estimate
based on standard scope of work</DescriptionService>
          <ReactBeforeSliderComponent
            firstImage={SECOND_IMAGE}
            secondImage={FIRST_IMAGE}
            delimiterColor={'#F8821E'}
            delimiterIconStyles={delimiterIconStyles}
            width={345}
            height={500}
          />
        </WrapSlider>
        <WrapImages>
          <SeerviceImages src={Clock} alt="Logo" />
          <ImgText>3 HOURS FOR FULL PROCESS</ImgText>
          {/* <DivPhoto onClick={openSlider}>
            {isSliderOpen && (
              <SliderServices images={photo} onClose={closeSlider} />
            )} */}
            <SeerviceImages src={Photo} alt="Logo" />
            <ImgText>FULL PHOTO REPORT</ImgText>
          {/* </DivPhoto> */}
        </WrapImages>
        <div>
          <NavLink to="book_us">
            <MobButtonServices>BOOK THIS SERVICE</MobButtonServices>
          </NavLink>

        </div>
      </Container>
    </>
  );
};
