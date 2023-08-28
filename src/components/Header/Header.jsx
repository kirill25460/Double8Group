// import { useState, useEffect } from 'react';
// import { HiMenuAlt2 } from 'react-icons/hi';
// import { IoClose } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
import HeaderLogo from 'images/firstLogo.png';
import {
  LogoHeader,
  Container,
  AppBar,
  LogoWrap,
  Wrap,
  NavList,
  NavItem,
  StyledLink,
  BurgerMenu,
  BurgerIcon,
  SideMenu,
  CloseBtn
} from './Header.styled';
import { useState } from 'react';
// MobileOpenHeader,BurgerButton,MobileMenu,MobileCloseHeader,CrossButton
// import {BookUsSelector} from "../Navigation/Selector/BookUsSelector";

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
    { href: `/`, text: 'Home' },
    { href: '/reviews', text: 'Reviews' },
    { href: '/book_us', text: 'Book us' },
    { href: '/contacts', text: 'Contacts' },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <AppBar>
      <Container>
        <LogoWrap>
          <NavLink to="/">
            {' '}
            <LogoHeader src={HeaderLogo} alt="Logo" />{' '}
          </NavLink>
        </LogoWrap>
        <Wrap>
          <BurgerMenu>
            <div onClick={toggleMenu}>
              <BurgerIcon />
            </div>
          </BurgerMenu>
          <NavList>
              {navItems.map(({ href, text }) => (
                <NavItem>
                  <StyledLink to={href}>
                    <span>{text}</span>
                  </StyledLink>
                </NavItem>
              ))}
            </NavList>
          <SideMenu className={isOpen ? 'open' : ''}>
            <CloseBtn onClick={toggleMenu} />
            
          </SideMenu>
        </Wrap>
      </Container>
    </AppBar>
  );
};
