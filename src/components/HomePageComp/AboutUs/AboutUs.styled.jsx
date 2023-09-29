import styled from 'styled-components';

export const Container = styled.div`
  width: 325px;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    width: 700px;
    text-align: center;
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
    display: flex;
    justify-content: space-between;
  }
`;

export const Wrap = styled.div``;

export const AbUs = styled.p`
margin: 0;
color: #ffffff;
font-family: Montserrat;
font-size: 14px;
font-weight: 400;
line-height: 19.5px;
letter-spacing: 0px;
text-align: right;
padding-top:30px;
@media screen and (min-width: 768px) {

font-size: 22px;
font-weight: 300;
line-height: 29px;
text-align: center;
}
@media screen and (min-width: 1440px) {
text-align: left;
}`;

export const HomeWrap = styled.div`
    height: 780px;
    background-color: #222021;
  @media screen and (min-width: 768px) {
    height: 1200px;
    background-color: #222021;
  }
  @media screen and (min-width: 1440px) {
    height: 794px;
    background-color: #222021;
  }
`;
export const HomeText = styled.h2`
    margin: 0;
    padding-top: 20px;
    font-family: Montserrat;
    font-size: 51px;
    font-weight: 400;
    line-height: 86px;
    letter-spacing: 0px;
    text-align: right;
    color: #f8821e;
    text-shadow: 4px 4px 31px rgba(248, 130, 30, 0.65);

  @media screen and (min-width: 768px) {
    padding-top: 40px;
    font-size: 75px;
    font-weight: 600;
    line-height: 61px;
    text-align: center;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 155px;
    text-align: left;
  }
`;

export const HomePar = styled.p`
    margin: 0;
    color: #ffffff;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 400;
    line-height: 19.5px;
    letter-spacing: 0px;
    text-align: right;


  @media screen and (min-width: 768px) {
    padding-top: 32px;
    font-size: 22px;
    font-weight: 300;
    line-height: 29px;
    text-align: center;

  }
  @media screen and (min-width: 1440px) {
    width: 611px;
    text-align: left;
  }
`;
export const AboutUsPic = styled.img`
    width: 330px;
    height: 318px;
    align-items: center;
  @media screen and (min-width: 768px) {
    margin-top: 76px;
    width: 654px;
    height: 613px;
    align-items: center;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 0;
    padding-top: 90px;
    padding-left: auto;
    width: 764px;
    height: 703px;
  }
`;

export const MainPage = styled.div`
  margin-top: 5px;

  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`;

export const MainPicture = styled.img`
  width: 70%;
  padding-top: 15px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

export const MainText = styled.h2`
  padding-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;
export const MainPar = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

export const HomeList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  list-style: none;
`;

export const HomeItem = styled.li`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  background: transparent;
  align-items: stretch;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  width: calc((100% - 0px) / 1);
  &:hover {
    box-shadow: 0 15px 20px rgba(32, 32, 32, 0.4);
  }
  @media screen and (min-width: 768px) {
    width: calc((100% - 30px) / 2);
  }
  @media screen and (min-width: 1200px) {
    width: calc((100% - 60px) / 3);
  }
`;





