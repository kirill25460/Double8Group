import {FooterCon,FooterButton,FooterWrap,FooterText,FooterSpan,LogoFooter} from "./Footer.styled"
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import logo from "images/first-logo.PNG"

export const Footer = () => {
    return  (
<FooterCon>

    <FooterText>We service NJ and NY 
    <FooterSpan>517-974-8830   908-463-5087</FooterSpan>
    </FooterText>
    <LogoFooter src={logo} alt="Logo" /> 
    <FooterWrap>
    <FooterButton>
    <BsFacebook size={30} />
    </FooterButton>

    <FooterButton>
    <BsInstagram size={30} />
    </FooterButton>

    <FooterButton>
    <BsLinkedin size={30} />
    </FooterButton>
    </FooterWrap>
    

</FooterCon>
    )
}