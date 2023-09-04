import styled from 'styled-components';

export const FooterCon = styled.div`
  background-color: #202020;
  padding-top: 60px;
  padding-bottom: 60px;
`;

export const FooterWrap = styled.div`
  width: 100px;
  @media screen and (min-width: 768px) {
    width: 280px;
  }
  @media screen and (min-width: 1440px) {
    width: 280px;
  }
`;

export const Wrap = styled.div`
  width: 140px;
  @media screen and (min-width: 768px) {
    width: 280px;
  }
  @media screen and (min-width: 1440px) {
    width: 280px;
  }
`;

export const FooterText = styled.p`
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0px;
  text-align: left;
  color: #dddddd;

  @media screen and (min-width: 768px) {
    font-family: Montserrat;
    font-size: 15px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0px;
    text-align: left;
    color: #dddddd;
  }
  @media screen and (min-width: 1440px) {
    font-family: Montserrat;
    font-size: 15px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0px;
    text-align: left;
    color: #dddddd;
  }
`;
export const FooterTextInfo = styled.p`
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0px;
  text-align: right;
  color: #dddddd;
  @media screen and (min-width: 768px) {
    font-family: Montserrat;
    font-size: 15px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0px;
    text-align: right;
    color: #dddddd;
  }
  @media screen and (min-width: 1440px) {
    font-family: Montserrat;
    font-size: 15px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0px;
    text-align: right;
    color: #dddddd;
  }
`;

export const LogoFooter = styled.img`
  width: 74px;
  height: 61px;
  margin: 0;
  @media screen and (min-width: 768px) {
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
    font-family: Montserrat;
    font-size: 15px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0px;
    text-align: left;
    color: #797276;
    outline: none;
    text-decoration: none;
  }
  @media screen and (min-width: 1440px) {
    font-family: Montserrat;
    font-size: 15px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0px;
    text-align: left;
    color: #797276;
    outline: none;
    text-decoration: none;
  }
  &:hover {
    color: #fff;
  }
`;

export const InfoList = styled.ul`
  text-align: right;
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
    margin: 0;
    font-family: Montserrat;
    font-size: 15px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0px;

    color: #797276;
  }
  @media screen and (min-width: 1440px) {
    margin: 0;
    font-family: Montserrat;
    font-size: 15px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0px;

    color: #797276;
  }
  &:hover {
    color: #fff;
  }
`;
