import styled from 'styled-components';

export const FooterCon = styled.div`
  background-color: #202020;
  padding-top: 60px;
  padding-bottom: 60px;
`;

export const FooterWrap = styled.div`
  width: 280px;
`;

export const Wrap = styled.div`
  width: 280px;
`;

export const FooterText = styled.p`
  font-family: Montserrat;
  font-size: 15px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0px;
  text-align: left;
  color: #dddddd;
`;
export const FooterTextInfo = styled.p`
  font-family: Montserrat;
  font-size: 15px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0px;
  text-align: right;
  color: #dddddd;
`;

export const LogoFooter = styled.img`
  width: 134px;
  height: 101px;
  margin: 0 auto;
  @media screen and (min-width: 1440px) {
  }
`;

export const Container = styled.div`
  width: 375px;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 32px;
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 0 100px;
  }
`;

export const ContactsList = styled.ul`
  padding: 0;
  list-style: none;
`;

export const ContactsItem = styled.li``;

export const FooterLink = styled.a`
  font-family: Montserrat;
  font-size: 15px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0px;
  text-align: left;
  color: #797276;
  outline: none;
  text-decoration: none;
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
  font-size: 15px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0px;

  color: #797276;
  &:hover {
    color: #fff;
  }
`;
