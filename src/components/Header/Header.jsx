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
  Link,
} from './Header.styled';
import { useState } from 'react';
import { useMediaQuery } from '@mui/material';

export const Header = () => {
  const navItems = [
    { href: `/`, text: 'Home' },
    { href: '/reviews', text: 'Reviews' },
    { href: '/contact_us', text: 'Contact us' },
  ];

  const navSideItems = [
    { href: `/`, text: 'Home', svg: <HomeSvg /> },
    { href: '/reviews', text: 'Reviews', svg: <PersonSvg /> },
    { href: '/contact_us', text: 'Contact us', svg: <BookSvg /> },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  const smallDest = useMediaQuery('(max-width: 767px)');

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
          {!smallDest && (
            <ContactWrap>
              <Link href="tel:+1 517-974-8830">
                <PhoneSvg />
              </Link>

              <Link href="mailto:d8gllc@gmail.com">
                <SvgMail />
              </Link>
            </ContactWrap>
          )}
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
              <Link href="https://instagram.com/double8group?igshid=MzRlODBiNWFlZA==">
                <SvgInst />
              </Link>
              <Link href="https://www.facebook.com/double8group?mibextid=b06tZ0">
                <SvgFacebook />
              </Link>
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
