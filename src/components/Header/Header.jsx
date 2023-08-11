import HeaderLogo from "images/firstLogo.png"
import {LogoHeader,Container, AppBar,LogoWrap,Wrap,NavList,NavItem,StyledLink} from "./Header.styled";
// HeaderSpan,HeaderText,HeaderWrap,HeaderButton
import {BookUsSelector} from "../Navigation/Selector/BookUsSelector";


export const Header = () => {

  const navItems = [
      { href: `/Home`, text: 'Home' },
      { href: '/Reviews', text: 'Reviews' },
      // { href: '/Book us', text: 'Book us' },
      // { href: '/Contacts', text: 'Contacts' },
       ];

    return  (
 <AppBar>
    <Container>
    
      
   <LogoWrap>
   <LogoHeader src={HeaderLogo} alt="Logo" /> 
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

<NavItem>
   <StyledLink>
   <BookUsSelector/>
   </StyledLink>

</NavItem>
</NavList>
    </Wrap>
  
    
   
    </Container>

 </AppBar>

    )
}