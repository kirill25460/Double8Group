import React from 'react';
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';

import { Container, NameService, TextService,WrapSlider,ButtonServices,AnotherButtonServ,WrapService,WrapImages,ImgText,SeerviceImages } from './BathroomFanCleaningP.styled';

import after from 'images/bathFanAfter.jpg';
import before from 'images/bathFanBefore.jpg';
import BeforeAfterText from "images/before-after.png";
import Clock from "images/icon_clock.png";
import Photo from "images/icon_camera.png";
 
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

  
}
export const BathroomFanCleaningP = () => {
  return (
    <>
      <Container>
        <WrapService>
        <NameService>BATHROOM FAN CLEANING</NameService>
        <TextService>
          Usually people don`t care about dryer cleaning, but it is very
          important thing. If your dryer has a problem with air flow , full of
          lint , moldy smell , birdnest inside or clothes taking longer to dry –
          we can help you If your dryer clean – you stay safe , cause dryer vent
          cleaning can prevent the fire of your pipe. Wich services include?
          Vent cleaning , clean the dryer inside ,fan cleaning , filter and back
          panel cleaning.
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
        <SeerviceImages src={Photo} alt="Logo" />
        <ImgText>FULL PHOTO REPORT</ImgText>
        </WrapImages>
        
      </Container>
    </>
  );
};