// import { useState, useEffect } from 'react';
// import { HiMenuAlt2 } from 'react-icons/hi';
// import { IoClose } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

import { NavLink } from 'react-router-dom';
import HeaderLogo from 'images/D8Logo.jpeg';
import {
  LogoHeader,
  HeaderContainer,
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
  PersonSvg,
  BookSvg,
  SideItems,
  AdvantagesSvg,
  PhoneSvg,
  SvgMail,
  SvgInst,
  SvgFacebook,
  Link,
} from './Header.styled';
import { useEffect, useRef, useState } from 'react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const handleClickOutside = event => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const scrollToSection = sectionId => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
      });
      setIsOpen(false);
    }
  };
  const toggleMenu = event => {
    event.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <HeaderContainer>
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
        <SideMenu ref={menuRef} className={isOpen ? 'open' : ''}>
          <CloseBtn onClick={toggleMenu} />

          <div
            onClick={() => {
              navigate('/');
              setTimeout(() => {
                scrollToSection('home');
                toggleMenu();
              }, 5);
            }}
          >
            <SideItems>
              <HomeSvg />
              <span>Home</span>
            </SideItems>
          </div>
          <div
            onClick={() => {
              navigate('/');
              setTimeout(() => {
                scrollToSection('about_us');
                toggleMenu();
              }, 5);
            }}
          >
            <SideItems>
              <PersonSvg />
              <span>About Us</span>
            </SideItems>
          </div>

          <div
            onClick={() => {
              navigate('/');
              setTimeout(() => {
                scrollToSection('advantages');
                toggleMenu();
              }, 5);
            }}
          >
            <SideItems>
              <AdvantagesSvg />
              <span>Advantages</span>
            </SideItems>
          </div>

          <div
            onClick={() => {
              navigate('/');
              setTimeout(() => {
                scrollToSection('contact_us');
                toggleMenu();
              }, 5);
            }}
          >
            <SideItems>
              <BookSvg />
              <span>Contact us</span>
            </SideItems>
          </div>
        </SideMenu>

        <NavList>
          <NavItem>
            <StyledLink
              to="/"
              onClick={() =>
                setTimeout(() => {
                  scrollToSection('home');
                }, 5)
              }
            >
              <span>Home</span>
            </StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink
              to="/"
              onClick={() =>
                setTimeout(() => {
                  scrollToSection('about_us');
                }, 5)
              }
            >
              <span>About Us</span>
            </StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink
              to="/"
              onClick={() =>
                setTimeout(() => {
                  scrollToSection('advantages');
                }, 5)
              }
            >
              <span>Advantages</span>
            </StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink
              to="/"
              onClick={() =>
                setTimeout(() => {
                  scrollToSection('contact_us');
                }, 5)
              }
            >
              <span>Contact us</span>
            </StyledLink>
          </NavItem>
        </NavList>
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
    </HeaderContainer>
  );
};
