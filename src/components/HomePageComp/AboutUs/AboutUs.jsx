
import {
  Container,
  HomeWrap,
  HomeText,
  HomePar,
  AboutUsPic,
  AbUs,
  Wrap,
} from './AboutUs.styled';
import man from 'images/worker.png';

export const AboutUs = () => {
  return (
    <HomeWrap>
      <Container>
        <Wrap>
          <HomeText>ABOUT US</HomeText>
          <HomePar>
            We are a trusted air duct cleaning company dedicated to improving
            the air quality and comfort of your indoor spaces. With a wealth of
            experience, our expert team utilizes state-of-the-art equipment and
            proven techniques to remove dust, allergens, and contaminants from
            your HVAC system. Our thorough and meticulous approach ensures that
            your air ducts are cleaned effectively, promoting better respiratory
            health and energy efficiency. As a customer-focused company, we
            prioritize your well-being and take pride in delivering top-notch
            service that leaves your home with fresher, cleaner air. Choose us
            to breathe easier and enjoy a healthier living environment.
          </HomePar>
          <AbUs>We offer service in NJ and NYC.</AbUs>
        </Wrap>

        <AboutUsPic src={man} alt="Man" />
      </Container>
    </HomeWrap>
  );
};
