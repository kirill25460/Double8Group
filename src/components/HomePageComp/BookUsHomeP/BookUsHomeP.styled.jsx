import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 375px;
  margin: 0 auto;
  padding: 0 16px;
  padding-bottom: 63px;
  @media screen and (min-width: 768px) {
    width: 740px;
    padding: 0 auto;
    padding-bottom: 63px;
  }
  @media screen and (min-width: 1440px) {
    padding: 0 100px;
    padding-bottom: 63px;
  }
`;

export const BookUsTxt = styled.h2`
  padding-top: 46px;
  margin: 0;
  font-family: Montserrat;
  font-size: 42px;
  font-weight: 500;
  line-height: 39.5px;
  letter-spacing: 0px;
  text-align: center;
  color: #f8821f;
  margin-bottom: 55px;
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    padding-top: 46px;
    margin: 0;
    font-family: Montserrat;
    font-size: 46px;
    font-weight: 500;
    line-height: 80px;
    letter-spacing: 0px;
    text-align: center;
    color: #f8821f;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 0;
    width: 777px;
    padding-top: 46px;
    margin: 0;
    font-family: Montserrat;
    font-size: 54px;
    font-weight: 500;
    line-height: 80px;
    letter-spacing: 0px;
    text-align: center;
    color: #f8821f;
  }
`;

export const BookUsPar = styled.p`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    margin: 0;
    width: 347px;
    font-family: DM Sans;
    font-size: 17px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0px;
    text-align: center;
    color: #f8821f;
    margin-bottom: 52px;
  }
  @media screen and (min-width: 1440px) {
    display: block;
    margin: 0;
    width: 347px;
    font-family: DM Sans;
    font-size: 17px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0px;
    text-align: center;
    color: #f8821f;
    margin-bottom: 52px;
  }
`;

export const BookUsBtn = styled.button`
  cursor: pointer;
  width: 188px;
  height: 67px;
  color: #fff;
  border: none;
  background-color: #f8821f;
  font-family: 'DM Sans';
  font-size: 23px;
  text-align: center;
  letter-spacing: 3px;
  font-weight: 500;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
  margin: 0 20px;
  &:hover {
    box-shadow: 0 15px 20px rgba(32, 32, 32, 0.4);

    transform: translateY(-7px);
  }

  @media screen and (min-width: 768px) {
    cursor: pointer;
    width: 210px;
    height: 75px;
    color: #fff;
    border: none;
    background-color: #f8821f;
    font-family: 'DM Sans';
    font-size: 23px;
    text-align: center;
    letter-spacing: 3px;
    font-weight: 500;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
    transition: 0.3s;
    margin: 0 44px;
    &:hover {
      box-shadow: 0 15px 20px rgba(32, 32, 32, 0.4);

      transform: translateY(-7px);
    }
  }
  @media screen and (min-width: 1440px) {
    cursor: pointer;
    width: 210px;
    height: 75px;
    color: #fff;
    border: none;
    background-color: #f8821f;
    font-family: 'DM Sans';
    font-size: 23px;
    text-align: center;
    letter-spacing: 3px;
    font-weight: 500;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
    transition: 0.3s;
    margin: 0 44px;
    &:hover {
      box-shadow: 0 15px 20px rgba(32, 32, 32, 0.4);

      transform: translateY(-7px);
    }
  }
`;

export const PicToolsL = styled.img`
  width: 90px;
  height: 90px;
  @media screen and (min-width: 768px) {
    vertical-align: bottom;
    margin-bottom: -63px;
    width: 174px;
    height: 173px;
  }
  @media screen and (min-width: 1440px) {
    vertical-align: bottom;
    margin-bottom: -63px;
    width: 174px;
    height: 173px;
  }
`;

export const PicToolsR = styled.img`

  width: 90px;
  height: 90px;
  @media screen and (min-width: 768px) {
    vertical-align: bottom;
    margin-bottom: -63px;
    width: 174px;
    height: 173px;
  }
  @media screen and (min-width: 1440px) {
    vertical-align: bottom;
    margin-bottom: -63px;
    width: 174px;
    height: 173px;
  }
`;

export const ButPicContainer = styled.div`
  display: flex;

  margin-bottom: -63px;
  @media screen and (min-width: 768px) {

    margin-bottom: 0;
  }
  @media screen and (min-width: 1440px) {

  }
`;
