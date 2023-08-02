import logo from "images/first-logo.PNG"
import {LogoHeader,Container, AppBar,HeaderSpan,HeaderText,HeaderWrap,LogoWrap,Wrap,HeaderButton} from "./Header.styled";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

export const Header = () => {
    return  (
 <AppBar>
  
    <Container>
      {/* <Wrap> */}
      <HeaderWrap>
      <HeaderText>We service NJ and NY 
    <HeaderSpan>517-974-8830   908-463-5087</HeaderSpan>
    </HeaderText>
      </HeaderWrap>
   <LogoWrap>
   <LogoHeader src={logo} alt="Logo" /> 
   </LogoWrap>
   <Wrap>
    <HeaderButton>
    <BsFacebook size={30} />
    </HeaderButton>

    <HeaderButton>
    <BsInstagram size={30} />
    </HeaderButton>

    <HeaderButton>
    <BsLinkedin size={30} />
    </HeaderButton>
    </Wrap>
      {/* </Wrap> */}
    
   
    </Container>

 </AppBar>

    )
}