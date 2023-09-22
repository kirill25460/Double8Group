// import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';

import {
  Container,
  NameService,
  TextService,
  MobButtonServices,
  WrapSlider,
  ButtonServices,
  DescriptionService,
  WrapService,
  WrapImages,
  ImgText,
  SeerviceImages,
} from './BathroomFanCleaningP.styled';

import after from 'images/bathFanAfter.jpg';
import before from 'images/bathFanBefore.jpg';
import BeforeAfterText from 'images/before-after.png';
import Clock from 'images/icon_clock.png';
import Money from 'images/money.svg'
// import Photo from 'images/icon_camera.png';

// import arr from "images/services/PhotoObject";
// import { SliderServices } from 'helper/SliderServices';

// const photo = arr.bathroomFan;

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
export const BathroomFanCleaningP = () => {
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
          <NameService>BATHROOM FAN CLEANING</NameService>
          <TextService>
          Bathroom is the most humid place in the house and exhaust pipe can be 
full with mold, germs and bacteria. Cleaning it will prevent you from allergies and breathing problems.
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
          {/* <DivPhoto onClick={openSlider}>
            {isSliderOpen && (
              <SliderServices images={photo} onClose={closeSlider} />
            )} */}
           <img src={Money} width="61" height="61" alt='Money'/>
          <ImgText>FROM 180$</ImgText>
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
