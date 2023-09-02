import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';

import { SliderServices } from 'helper/SliderServices';

import {
  Container,
  NameService,
  TextService,
  WrapSlider,
  ButtonServices,
  AnotherButtonServ,
  WrapService,
  WrapImages,
  MobButtonServices,
  AnotherMobButton,
  ImgText,
  SeerviceImages,
  DivPhoto
} from './AirDuctP.styled';

import before from 'images/AirDuct1.jpg';
import after from 'images/AirDuct2.jpg';
import BeforeAfterText from 'images/before-after.png';
import Clock from 'images/icon_clock.png';
import Photo from 'images/icon_camera.png';
import arr from "images/services/PhotoObject";

const photo = arr.airDuct;

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


export const AirDuctP = () => {
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
          <NameService>AIR DUCT CLEANING</NameService>
          <TextService>
            Air duct wanted to be in clean condition .Why you have to clean your air duct? Because environment is very polluted – dust ,dirt , bacteries in a ducts can trigger allergies and problems with health , usually people forget about ventilation system for a long time and it can have a mold inside and lots of dirt . If you want breathe easy just call us , we will come , expect your system and do very properly cleaning . Also we can deodorize to kill all mold and bacterial.
          </TextService>
          <ButtonServices>BOOK THIS SERVICE</ButtonServices>
          <AnotherButtonServ>ANOTHER BUTTON</AnotherButtonServ>
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

          <AnotherMobButton>ANOTHER BUTTON</AnotherMobButton>
        </div>
      </Container>
    </>
  );
};
