import styled from 'styled-components';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaFacebookSquare } from 'react-icons/fa';

export const FooterCon = styled.div`
  background-color: #202020;
  padding-top: 60px;
  padding-bottom: 60px;
  margin-top: auto;
`;

export const FooterWrap = styled.div`
  width: 100px;
  z-index: 3;
  @media screen and (min-width: 768px) {
    width: 280px;
  }
`;

export const Wrap = styled.div`
  width: 140px;
  z-index: 3;
  @media screen and (min-width: 768px) {
    width: 280px;
  }
  @media screen and (min-width: 1440px) {
    width: 280px;
  }
`;

export const FooterText = styled.p`
margin:0;
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0px;
  text-align: left;
  color: #dddddd;

  @media screen and (min-width: 768px) {
    font-size: 15px;
  }

`;
export const FooterTextInfo = styled.p`
margin:0;
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0px;
  text-align: right;
  color: #dddddd;
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`;

export const LogoFooter = styled.img`
display:none;
  @media screen and (min-width: 768px) {
    display:block;
    width: 114px;
    height: 81px;
    margin: 0 auto;
  }
  @media screen and (min-width: 1440px) {
    width: 134px;
    height: 101px;
    margin: 0 auto;
  }
`;

export const FooterLogoBg = styled.img`
position:absolute;
@media screen and (min-width: 768px) {
display:none;

}
`;

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    width: 700px;
  }
  @media screen and (min-width: 1440px) {
    width: 1200px;
  }
`;

export const ContactsList = styled.ul`
  padding: 0;
  list-style: none;
`;

export const ContactsItem = styled.li``;

export const FooterLink = styled.a`
  font-family: Montserrat;
  font-size: 10px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0px;
  text-align: left;
  color: #797276;
  outline: none;
  text-decoration: none;
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
  &:hover {
    color: #fff;
  }
`;

export const InfoList = styled.ul`
  text-align: right;
  height:85px;
  padding: 0;
  list-style: none;
`;

export const InfoLinks = styled.p`
  margin: 0;
  font-family: Montserrat;
  font-size: 10px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0px;
  color: #797276;
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
  &:hover {
    color: #fff;
  }
`;

export const SvgContainer = styled.div`
  display: flex;
  z-index: 3;
  width: 100px;
  @media screen and (min-width: 768px) {
    width: 280px;
    justify-content: end;
  }
`;



export const SvgMail = styled(HiOutlineMailOpen)`
  width: 15px;
  height: 15px;
  padding: 5px;
  border-radius: 25px;
  color: #202020;
  background-color: #797276;
  text-decoration: none;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    width: 25px;
    height: 25px;
  }

  &:hover {
    color: #f8821e;
    background-color: #fff;
  }
`;

export const SvgInst = styled(AiOutlineInstagram)`
  width: 15px;
  height: 15px;
  padding: 5px;
  border-radius: 25px;
  fill: #202020;
  background-color: #797276;
  margin: 0 10px;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    width: 25px;
    height: 25px;
  }
  &:hover {
    fill: #f8821e;
    background-color: #fff;
  }
`;

export const SvgFacebook = styled(FaFacebookSquare)`
  width: 15px;
  height: 15px;
  padding: 5px;
  border-radius: 25px;
  fill: #202020;
  background-color: #797276;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    width: 25px;
    height: 25px;
  }
  &:hover {
    fill: #f8821e;
    background-color: #fff;
  }
`;
