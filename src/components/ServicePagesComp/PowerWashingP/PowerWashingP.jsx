import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';

import {
  Container,
  NameService,
  TextService,
  WrapSlider,
  AnotherMobButton,
  MobButtonServices,
  ButtonServices,
  AnotherButtonServ,
  WrapService,
  WrapImages,
  ImgText,
  SeerviceImages,
  DivPhoto
} from './PowerWashing.styled';

import after from 'images/powerwashingAfter.jpg';
import before from 'images/powerWashingBefore.jpg';
import BeforeAfterText from 'images/before-after.png';
import Clock from 'images/icon_clock.png';
import Photo from 'images/icon_camera.png';

import arr from "images/services/PhotoObject";
import { SliderServices } from 'helper/SliderServices';

const photo = arr.powerWashing;

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
export const PowerWashingP = () => {
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
          <NameService>POWER WASHING </NameService>
          <TextService>
            Usually people don`t care about dryer cleaning, but it is very
            important thing. If your dryer has a problem with air flow , full of
            lint , moldy smell , birdnest inside or clothes taking longer to dry
            – we can help you If your dryer clean – you stay safe , cause dryer
            vent cleaning can prevent the fire of your pipe. Wich services
            include? Vent cleaning , clean the dryer inside ,fan cleaning ,
            filter and back panel cleaning.
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
