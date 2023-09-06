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
  ContactWrap,
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
  PhoneSvg,
  SvgMail,
  SvgInst,
  SvgFacebook,
} from './Header.styled';
import { useState } from 'react';



export const Header = () => {

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
            <ContactWrap>
              <a href="tel:+48 517-974-8830">
                <PhoneSvg />
              </a>
              <a href="mailto:d8gllc@gmail.com">
                <SvgMail />
              </a>
              <a href="https://instagram.com/double8group?igshid=MzRlODBiNWFlZA==">
                <SvgInst />
              </a>
              <a href="https://www.facebook.com/double8group?mibextid=b06tZ0">
                <SvgFacebook />
              </a>
            </ContactWrap>
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
