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
  // DivPhoto
} from './PowerWashing.styled';

import after from 'images/powerwashingAfter.png';
import before from 'images/powerWashingBefore.jpg';
import BeforeAfterText from 'images/before-after.png';
import Clock from 'images/icon_clock.png';
import Photo from 'images/icon_camera.png';

// import arr from "images/services/PhotoObject";
// import { SliderServices } from 'helper/SliderServices';

// const photo = arr.powerWashing;

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
          <NameService>POWER WASHING </NameService>
          <TextService>
          Power wash takes off residue like salt, destructive mold, mildew, algae from outdoor patios, driveways, decks and more.  All these build-ups can destroy the paint and eat away at the exterior of home or business.
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
