// import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';

import {
  Container,
  NameService,
  TextService,
  WrapSlider,
  DescriptionService,
  MobButtonServices,
  ButtonServices,
  WrapService,
  WrapImages,
  ImgText,
  SeerviceImages,

} from './PowerWashing.styled';

import after from 'images/powerwashingAfter.png';
import before from 'images/powerWashingBefore.jpg';
import BeforeAfterText from 'images/before-after.png';
import Clock from 'images/icon_clock.png';
import Money from 'images/money.svg'


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

  return (
    <>
      <Container>
        <WrapService>
          <NameService>POWER WASHING </NameService>
          <TextService>
          Power wash takes off residue like salt, destructive mold, mildew, algae from outdoor patios, driveways, decks and more.  All these build-ups can destroy the paint and eat away at the exterior of home or business.
          </TextService>
          
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
        <DescriptionService>*Price is an accurate estimate
based on standard scope of work</DescriptionService>
        <WrapImages>
          <SeerviceImages src={Clock} alt="Logo" />
          <ImgText>3 HOURS FOR FULL PROCESS</ImgText>
     
          <img src={Money} width="61" height="61" alt='Money'/>
          <ImgText>FROM 250$</ImgText>
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
