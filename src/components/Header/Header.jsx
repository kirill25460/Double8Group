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
  CloseBtn,
  HomeSvg,
  SideItems,
  PersonSvg,
  BookSvg,
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
     
       ];

  const navSideItems = [
    { href: `/`, text: 'Home', svg: <HomeSvg /> },
    { href: '/reviews', text: 'Reviews', svg: <PersonSvg /> },
    { href: '/book_us', text: 'Book us', svg: <BookSvg /> },
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
          <BurgerMenu>
            <div onClick={toggleMenu}>
              <BurgerIcon />
            </div>
          </BurgerMenu>
          <NavLink to="/">
            {' '}
            <LogoHeader src={HeaderLogo} alt="Logo" />{' '}
          </NavLink>
        </LogoWrap>
        <Wrap>
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
            {navSideItems.map(({ href, text, svg }) => {
              return (
                <StyledLink to={href}>
                  <SideItems>
                    {svg}
                    {text}
                  </SideItems>
                </StyledLink>
              );
            })}
          </SideMenu>
        </Wrap>
      </Container>
    </AppBar>
  );
};
