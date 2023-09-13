import React, { useState } from 'react';
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
  DescriptionService,
  ImgText,
  SeerviceImages,
  DivPhoto
} from './DrVentCl.styled';

import before from 'images/AirDuct1.jpg';
import after from 'images/AirDuct2.jpg';
import BeforeAfterText from 'images/before-after.png';
import Clock from 'images/icon_clock.png';
import Photo from 'images/icon_camera.png';

import arr from "images/services/PhotoObject";
import { SliderServices } from 'helper/SliderServices';

const photo = arr.dryerVent;

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
export const DrVentCl = () => {
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  const openSlider = () => {
    setIsSliderOpen(true);
  };

  const closeSlider = () => {
    setIsSliderOpen(false);
  };

  return (
    <>
      <Container>
        <WrapService>
          <NameService>DRYER VENT CLEANING</NameService>
          <TextService>
          If your dryer has a problem with air flow, full of lint, moldy smell, clothes takes longer to dry then is time to clean it. Why? Because clogged dryer vent can also be a fire hazard.
          </TextService>
          <DescriptionService>*Price is an accurate estimate
based on standard scope of work</DescriptionService>
          <NavLink to="contact_us"><ButtonServices>BOOK THIS SERVICE</ButtonServices></NavLink>
         
        </WrapService>

        <WrapSlider>
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
          <DivPhoto onClick={openSlider}>
            {isSliderOpen && (
              <SliderServices images={photo} onClose={closeSlider} />
            )}
            <SeerviceImages src={Photo} alt="Logo" />
            <ImgText>FULL PHOTO REPORT</ImgText>
          </DivPhoto>
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
