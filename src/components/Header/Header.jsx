// import { useState, useEffect } from 'react';
// import { HiMenuAlt2 } from 'react-icons/hi';
// import { IoClose } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
import HeaderLogo from 'images/D8Logo.jpeg';
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
  PhoneSvg,
  SvgMail,
  SvgInst,
  SvgFacebook,
  Link,
} from './Header.styled';
import { useState } from 'react';

export const Header = () => {
  // const navItems = [
  //   { href: `home`, text: 'Home' },
  //   { href: 'about_us', text: 'About us' },
  //   { href: 'advantages', text: 'Advantages' },
  //   { href: 'contact_us', text: 'Contact us' },
  // ];

  const navSideItems = [
    { href: `/`, text: 'Home', svg: <HomeSvg /> },

    // { href: '/contact_us', text: 'Contact us', svg: <BookSvg /> },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const scrollToSection = sectionId => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
      });
      setIsOpen(false);
    }
  };
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
            
              <NavItem>
                <StyledLink  onClick={() =>
                setTimeout(() => {
                  scrollToSection('home');
                }, 5)
              }>
                  <span>Home</span>
                </StyledLink>
              </NavItem>
              <NavItem>
                <StyledLink  onClick={() =>
                setTimeout(() => {
                  scrollToSection('about_us');
                }, 5)
              }>
                  <span>About Us</span>
                </StyledLink>
              </NavItem>
              <NavItem>
                <StyledLink  onClick={() =>
                setTimeout(() => {
                  scrollToSection('advantages');
                }, 5)
              }>
                  <span>Advantages</span>
                </StyledLink>
              </NavItem>
              <NavItem>
                <StyledLink  onClick={() =>
                setTimeout(() => {
                  scrollToSection('contact_us');
                }, 5)
              }>
                  <span>Contact us</span>
                </StyledLink>
              </NavItem>
              </NavList>
          <SideMenu className={isOpen ? 'open' : ''}>
            <CloseBtn onClick={toggleMenu} />
            {navSideItems.map(({ href, text, svg }) => {
              return (
                <StyledLink to={href}>
                  <SideItems onClick={toggleMenu}>
                    {svg}
                    {text}
                  </SideItems>
                </StyledLink>
              );
            })}
          </SideMenu>
        </Wrap>
        <ContactWrap>
              <Link href="tel:+1 908-463-5087">
                <PhoneSvg />
              </Link>
              <Link href="mailto:Cleanairduck@gmail.com">
                <SvgMail />
              </Link>
              <Link href="https://instagram.com/double8group?igshid=MzRlODBiNWFlZA==">
                <SvgInst />
              </Link>
              <Link href="https://www.facebook.com/profile.php?id=61555019787880&mibextid=LQQJ4d">
                <SvgFacebook />
              </Link>
            </ContactWrap>
      </Container>
    </AppBar>
  );
};
