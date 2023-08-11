// import { useState, useEffect } from 'react';
// import { HiMenuAlt2 } from 'react-icons/hi';
// import { IoClose } from 'react-icons/io5';



import HeaderLogo from "images/firstLogo.png"
import {LogoHeader,Container, AppBar,LogoWrap,Wrap,NavList,NavItem,StyledLink,} from "./Header.styled";
// MobileOpenHeader,BurgerButton,MobileMenu,MobileCloseHeader,CrossButton
import {BookUsSelector} from "../Navigation/Selector/BookUsSelector";


export const Header = () => {
   // const [toggleMenu, setToggleMenu] = useState(false);


 
   // useEffect(() => {
   //   const bodyEl = document.getElementById('body');
 
   //   bodyEl.style.overflow = toggleMenu ? 'hidden' : 'visible';
   // }, [toggleMenu]);
 
   // const toggleMenuHandler = () => {
   //   return setToggleMenu(prevState => !prevState);
   // };
 

 
   // const mobileMenuHandler = e => {
   //   if (e.target.closest('li') && window.innerWidth < 1439) {
   //     return setToggleMenu(prevState => !prevState);
   //   }
   // };
  const navItems = [
      { href: `/Home`, text: 'Home' },
      { href: '/Reviews', text: 'Reviews' },
      // { href: '/Book us', text: 'Book us' },
      // { href: '/Contacts', text: 'Contacts' },
       ];

    return  (
 <AppBar>
    <Container>
    {/* <MobileOpenHeader>
         
          
          <BurgerButton type="button" onClick={toggleMenuHandler}>
            <HiMenuAlt2 size={28} />
          </BurgerButton>
        </MobileOpenHeader>
        <MobileMenu status={toggleMenu} onClick={mobileMenuHandler}>
          <MobileCloseHeader>
            
            <CrossButton type="button" onClick={toggleMenuHandler}>
              <IoClose size={32} />
            </CrossButton>
          </MobileCloseHeader>
          {/* <Navigation /> */}
          
        {/* </MobileMenu> */} 
      
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