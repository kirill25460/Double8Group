import {FooterCon,FooterWrap,FooterText,LogoFooter,Container,Wrap,ContactsList,ContactsItem,FooterLink,InfoList,InfoLinks,FooterTextInfo} from "./Footer.styled"

import logo from "images/LogoFooter.png"

export const Footer = () => {
    return  (
<FooterCon>
<Container>
    <Wrap>
    <FooterText>CONTACTS</FooterText>
<ContactsList>
    <ContactsItem><FooterLink href="tel:+48 517-974-8830">Phone: +48 517-974-8830</FooterLink></ContactsItem>
    <ContactsItem><FooterLink href="tel:+48 908-463-5087">Phone: +48 908-463-5087</FooterLink></ContactsItem>
    <ContactsItem><FooterLink href="mailto:email@example.com"> email@example.com </FooterLink></ContactsItem>
    
</ContactsList>
    </Wrap>

    <LogoFooter src={logo} alt="Logo" /> 
    <FooterWrap>

    <FooterTextInfo>RULES&TERMS</FooterTextInfo>
<InfoList>
    <li><InfoLinks>Return policy</InfoLinks></li>
    <li><InfoLinks>Fair payment & job</InfoLinks></li>
    <li><InfoLinks>something other</InfoLinks></li>
    <li><InfoLinks>something other</InfoLinks></li>
</InfoList>
    </FooterWrap>
</Container>
 
    

</FooterCon>
    )
}