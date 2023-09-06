import { useMediaQuery } from '@mui/material';
import {
  FooterCon,
  FooterWrap,
  FooterText,
  LogoFooter,
  Container,
  Wrap,
  ContactsList,
  ContactsItem,
  FooterLink,
  InfoList,
  InfoLinks,
  FooterTextInfo,
  SvgContainer,
  SvgMail,
  SvgInst,
  SvgFacebook,
  SvgContainerMobile,
} from './Footer.styled';

import logo from 'images/LogoFooter.png';

export const Footer = () => {
  const smallDesc = useMediaQuery('(max-width: 767px)');

  return (
    <FooterCon>
      <Container>
        <Wrap>
          <FooterText>CONTACTS</FooterText>
          <ContactsList>
            <ContactsItem>
              <FooterLink href="tel:+48 517-974-8830">
                Phone: +48 517-974-8830
              </FooterLink>
            </ContactsItem>
            <ContactsItem>
              <FooterLink href="tel:+48 908-463-5087">
                Phone: +48 908-463-5087
              </FooterLink>
            </ContactsItem>
            {/* <ContactsItem>
              <FooterLink href="mailto:email@example.com">
                {' '}
                email@example.com{' '}
              </FooterLink>
            </ContactsItem> */}
            {smallDesc === false ? (
              <SvgContainer>
                <a href="mailto:d8gllc@gmail.com">
                  <SvgMail />
                </a>
                <a href="https://instagram.com/double8group?igshid=MzRlODBiNWFlZA==">
                  <SvgInst />
                </a>
                <a href="https://www.facebook.com/double8group?mibextid=b06tZ0">
                  <SvgFacebook />
                </a>
              </SvgContainer>
            ) : (
              <></>
            )}
          </ContactsList>
        </Wrap>

        <LogoFooter src={logo} alt="Logo" />
        <FooterWrap>
          <FooterTextInfo>RULES&TERMS</FooterTextInfo>
          <InfoList>
            <li>
              <InfoLinks>Return policy</InfoLinks>
            </li>
            <li>
              <InfoLinks>Fair payment & job</InfoLinks>
            </li>
            <li>
              <InfoLinks>something other</InfoLinks>
            </li>
            <li>
              <InfoLinks>something other</InfoLinks>
            </li>
          </InfoList>
        </FooterWrap>
      </Container>
      {smallDesc === true ? (
        <SvgContainerMobile>
          <SvgMail />
          <SvgInst />
          <SvgFacebook />
        </SvgContainerMobile>
      ) : (
        <></>
      )}
    </FooterCon>
  );
};
