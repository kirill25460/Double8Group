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
  PriceSvg,
} from './ChimneyCleaning.styled';

import after from 'images/ChimneyAfter.jpg';
import before from 'images/ChimneyBefore.jpg';
import BeforeAfterText from 'images/before-after.png';
import Clock from 'images/icon_clock.png';

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
  return (
    <>
      <Container>
        <WrapService>
          <NameService>CHIMNEY CLEANING</NameService>
          <TextService>
            Soot regularly accumulates on chimney’s walls. It is necessary to
            clean it in order to prevent the occurrence of a fire in the house
            and the carbon monoxide poisoning.
          </TextService>

          <NavLink to="contact_us">
            <ButtonServices>BOOK THIS SERVICE</ButtonServices>
          </NavLink>
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
        <DescriptionService>
          *Price is an accurate estimate based on standard scope of work
        </DescriptionService>
        <WrapImages>
          <SeerviceImages src={Clock} alt="Logo" />
          <ImgText>3 HOURS FOR FULL PROCESS</ImgText>
          <PriceSvg />
          <ImgText>FROM 180$</ImgText>
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
