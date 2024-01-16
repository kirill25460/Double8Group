
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

import after from 'images/BathFanAfter.jpeg';
import before from 'images/BathFanBefore.jpeg';
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
export const BathroomFanCleaningP = () => {
  const scrollToSection = sectionId => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
      });
   
    }
  };
  return (
    <>
      <Container>
        <WrapService>
          <NameService>BATHROOM FAN CLEANING</NameService>
          <TextService>
          Bathroom is the most humid place in the house and exhaust pipe can be 
full with mold, germs and bacteria. Cleaning it will prevent you from allergies and breathing problems.
          </TextService>
         
          <NavLink to="/"
              onClick={() =>
                setTimeout(() => {
                  scrollToSection('contact_us');
                }, 5)
              } ><ButtonServices>BOOK THIS SERVICE</ButtonServices></NavLink>
      
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
          <NavLink to="/"
              onClick={() =>
                setTimeout(() => {
                  scrollToSection('contact_us');
                }, 5)
              } >
            <MobButtonServices>BOOK THIS SERVICE</MobButtonServices>
          </NavLink>
  
        </div>
      </Container>
    </>
  );
};
