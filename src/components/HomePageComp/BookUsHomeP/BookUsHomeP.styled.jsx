import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding-top: 45px;
  padding-bottom: 40px;
  @media screen and (min-width: 768px) {

    padding: 0 auto;
    padding-bottom: 60px;
  }
  @media screen and (min-width: 1440px) {
    padding: 0 100px;
    padding-bottom: 60px;
  }
`;

export const BookUsTxt = styled.h2`
font-family: Montserrat;
  font-size: 45px;
  font-weight: 800;
  line-height: 61px;
  letter-spacing: 0px;
  margin: 0;
  text-align: center;
  color: #f8821f;
  margin-bottom: 55px;
  @media screen and (min-width: 768px) {
    margin-bottom: 15px;
    margin-top:50px;
    font-size: 46px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 65px;
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
`;

export const BookUsBtn = styled.button`

  cursor: pointer;
  width: 188px;
  height: 67px;
  color: #202020;
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
    width: 210px;
    height: 75px;
    margin: 0 44px;
  }
  
`;

export const PicToolsL = styled.img`
  width: 50px;
  height: 70px;
  @media screen and (min-width: 768px) {
    vertical-align: bottom;
    margin-bottom: -63px;
    width: 174px;
    height: 173px;
  }
`;

export const PicToolsR = styled.img`

  width: 50px;
  height: 70px;
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

`;


export const StyledLink = styled(NavLink)`
margin:0;
`;

export const BookUsList = styled.ul`
display:none;
@media screen and (min-width: 768px) {
margin:0 0 45px;
display:block;
padding:0;
list-style:none;
display:flex;
gap:30px;}
`;

export const BookUsItem = styled.li`

`;

export const ItemText = styled.p`
color: black;

`;