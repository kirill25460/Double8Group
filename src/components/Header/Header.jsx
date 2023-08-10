import logo from "images/first-logo.PNG"
import {LogoHeader,Container, AppBar,LogoWrap,Wrap,NavList,NavItem,StyledLink} from "./Header.styled";
// HeaderSpan,HeaderText,HeaderWrap,HeaderButton



export const Header = () => {

  const navItems = [
      { href: `/Home`, text: 'Home' },
      { href: '/Reviews', text: 'Reviews' },
      { href: '/Book us online', text: 'Book us online' },
      { href: '/Contact us', text: 'Contact us' },
       ];

    return  (
 <AppBar>
  
    <Container>
    
      
   <LogoWrap>
   <LogoHeader src={logo} alt="Logo" /> 
   </LogoWrap>
   <Wrap>
   <NavList>
{navItems.map(({ href, text }) =>( 
<NavItem>
        <StyledLink to={href}>
              <span>{text}</span>
            </StyledLink>
</NavItem>)
)}
</NavList>
    </Wrap>
  
    
   
    </Container>

 </AppBar>

    )
}