
import {
  FooterCon,
  FooterText,
  LogoFooter,
  Container,
  Wrap,
  ContactsList,
  ContactsItem,
  FooterLink,
  FooterLogoBg,
  SvgContainer,
  SvgMail,
  SvgInst,
  SvgFacebook,

} from './Footer.styled';

import logo from 'images/D8Logo.jpeg';
import MobLog from 'images/MobFooterLogo.png';

export const Footer = () => {
  return (
    <FooterCon>
      <Container>
        <Wrap>
          <FooterText>CONTACTS</FooterText>
          <ContactsList>
            <ContactsItem>
              <FooterLink href="tel:+1 908-463-5087">
                Phone: +1 908-463-50 87
              </FooterLink>
            </ContactsItem>
           <ContactsItem>
          
           </ContactsItem>
          </ContactsList>
        </Wrap>
<FooterLogoBg src={MobLog} alt='MobLog'/>
        <LogoFooter src={logo} alt="Logo" />
        
        <SvgContainer>
                <a href="mailto:Cleanairduck@gmail.com">
                  <SvgMail />
                </a>
                <a href="https://instagram.com/double8group?igshid=MzRlODBiNWFlZA==">
                  <SvgInst />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61555019787880&mibextid=LQQJ4d">
                  <SvgFacebook />
                </a>
              </SvgContainer>
       
      </Container>
      
    </FooterCon>
  );
};
