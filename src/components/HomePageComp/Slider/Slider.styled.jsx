import styled from 'styled-components';

export const Container = styled.div`
  width: 375px;
  margin: 0 auto;
  padding: 0 10px;
  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 32px;
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 0 100px;
  }
`;

export const ButtonSlider = styled.button`
  position: absolute;
  text-decoration: none;
  display: inline-block;
  width: 228px;
  height: 83px;
  line-height: 18px;
  cursor: pointer;
  border: none;
  left: 95px;
  top: 530px;
  font-family: 'DM Sans';
  font-size: 23px;

  text-align: center;
  letter-spacing: 3px;
  font-weight: 500;
  color: #ff8c00;
  background: white;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
  &:hover {
    background: #ff8c00;
    box-shadow: 0 15px 20px rgba(32, 32, 32, 0.4);
    color: white;
    transform: translateY(-7px);
  }

  @media screen and (min-width: 768px) {
    position: absolute;
    text-decoration: none;
    display: inline-block;
    width: 228px;
    height: 83px;
    line-height: 18px;
    cursor: pointer;
    border: none;
    left: 245px;
    top: 572px;
    font-family: 'DM Sans';
    font-size: 23px;

    text-align: center;
    letter-spacing: 3px;
    font-weight: 500;
    color: #ff8c00;
    background: white;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
    transition: 0.3s;
    &:hover {
      background: #ff8c00;
      box-shadow: 0 15px 20px rgba(32, 32, 32, 0.4);
      color: white;
      transform: translateY(-7px);
    }
  }
  @media screen and (min-width: 1440px) {
    position: absolute;
    text-decoration: none;
    display: inline-block;
    width: 228px;
    height: 83px;
    line-height: 18px;
    cursor: pointer;
    border: none;
    left: 245px;
    top: 572px;
    font-family: 'DM Sans';
    font-size: 23px;

    text-align: center;
    letter-spacing: 3px;
    font-weight: 500;
    color: #ff8c00;
    background: white;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
    transition: 0.3s;
    &:hover {
      background: #ff8c00;
      box-shadow: 0 15px 20px rgba(32, 32, 32, 0.4);
      color: white;
      transform: translateY(-7px);
    }
  }
`;

export const TopText = styled.h2`
  position: absolute;
  left: 95px;
  top: 80px;
  font-family: Montserrat;
  font-size: 55px;
  font-weight: 800;
  line-height: 61px;
  letter-spacing: 0px;
  text-align: start;
  height: 212px;
  color: #ffffff;
  @media screen and (min-width: 768px) {
    position: absolute;
    left: 245px;
    top: 45px;
    font-family: Montserrat;
    font-size: 65px;
    font-weight: 800;
    line-height: 61px;
    letter-spacing: 0px;
    text-align: left;
    width: 500px;
    height: 212px;
    color: #ffffff;
  }
  @media screen and (min-width: 1440px) {
    position: absolute;
    left: 245px;
    top: 109px;
    font-family: Montserrat;
    font-size: 65px;
    font-weight: 800;
    line-height: 61px;
    letter-spacing: 0px;
    text-align: left;
    width: 786px;
    height: 212px;
    color: #ffffff;
  }
`;

export const TextSlider = styled.p`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    color: #ffffff;
    position: absolute;
    left: 245px;
    font-family: Montserrat;
    font-size: 26px;
    font-weight: 400;
    line-height: 29px;
    letter-spacing: 0px;
    text-align: left;
    width: 395px;
    height: 140px;
    top: 327px;
  }
  @media screen and (min-width: 1440px) {
    display: block;
    color: #ffffff;
    position: absolute;
    left: 245px;
    font-family: Montserrat;
    font-size: 26px;
    font-weight: 400;
    line-height: 29px;
    letter-spacing: 0px;
    text-align: left;
    width: 395px;
    height: 140px;
    top: 327px;
  }
`;
