
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
  FooterLogoBg,
  SvgContainer,
  SvgMail,
  SvgInst,
  SvgFacebook,

} from './Footer.styled';

import logo from 'images/LogoFooter.png';
import MobLog from 'images/MobFooterLogo.png';

export const Footer = () => {
  return (
    <FooterCon>
      <Container>
        <Wrap>
          <FooterText>CONTACTS</FooterText>
          <ContactsList>
            <ContactsItem>
              <FooterLink href="tel:+1 517-974-8830">
                Phone: +1 517-974-8830
              </FooterLink>
            </ContactsItem>
            <ContactsItem>
              <FooterLink href="tel:+1 908-463-5087">
                Phone: +1 908-463-5087
              </FooterLink>
            </ContactsItem>
           <ContactsItem>
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
           </ContactsItem>
          </ContactsList>
        </Wrap>
<FooterLogoBg src={MobLog} alt='MobLog'/>
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
      
    </FooterCon>
  );
};
