import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import { BiArrowBack } from 'react-icons/bi';
import { AiOutlineHome } from 'react-icons/ai';
import { IoPersonSharp } from 'react-icons/io5';
import { MdMenuBook } from 'react-icons/md'


export const LogoHeader = styled.img`
  width: 89px;
  height: 67px;
  @media screen and (min-width: 1440px) {
    text-align: center;
  }
`;

export const AppBar = styled.header`
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 110px;
  box-shadow: 0px 4px 21px 0px #00000008;
  width: 375px;
  margin: 0 auto;
  padding: 0 10px;
  @media screen and (min-width: 768px) {
    display: flex;
    width: 768px;
    padding: 0 32px;
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 0 100px;
  }
`;

export const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Nav = styled.div`
  border-top: 2px solid #ff8c00;

  padding-bottom: 5px;
`;
export const NavList = styled.ul`
  
  @media screen and (min-width: 768px) {
    display: flex;
  align-items: center;
  justify-content: center;
  gap: 36px;
  list-style: none;
  }

  @media (max-width: 768px) {
    display: none; /* Показываем бургер-меню на экранах <= 768px */
  }
`;

export const NavItem = styled.li``;

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;

  color: #f8821e;

  text-decoration: none;
  span {
  }

  &.active {
    // border-bottom:3px solid #FF8C00;
  }

  &:hover:not(.active),
  &:focus-visible:not(.active) {
    color: #222021;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    // border-bottom:3px solid #FF8C00;
  }
`;
// margin: left 100px;
export const HeaderWrap = styled.div`
  display: flex;
`;
export const Wrap = styled.div`
  display: flex;
`;

export const MobileOpenHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  transform: translateY(-100%);

  z-index: 3;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 100%;

  padding: 18px 16px;

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (max-width: 767px) {
    background-image: url();
    background-repeat: no-repeat;
    background-position: bottom right;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    background-image: url();
    background-repeat: no-repeat;
    background-position: bottom right;
  }

  @media screen and (min-width: 768px) {
    padding: 18px 32px 32px;
  }

  @media screen and (min-width: 1440px) {
    position: static;

    width: auto;
    height: auto;
    margin-left: auto;
    padding: 0;

    background-color: transparent;

    transform: none;
  }

  ${({ status }) => {
    return status
      ? 'transform: translateY(0);'
      : 'transform: translateY(-100%);';
  }}
`;

export const MobileCloseHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;


  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const CrossButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0;

  background-color: transparent;

  border: none;
  outline: none;

  cursor: pointer;

`;

export const BurgerMenu = styled.div`
  /* Стили для бургер-меню на планшете и телефоне */
  display: none; /* Начинаем с скрытого бургер-меню */

  @media (max-width: 768px) {
    margin-right: 138px;
    display: block; 
  }
  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const BurgerIcon = styled(RxHamburgerMenu)`
  width: 30px;
  height: 30px;
  color: #F8821E;
`;

export const SideMenu = styled.div`
  position: fixed;
  top: 0;
  left: -100%; /* Выезжает за пределы экрана */
  width: 100%;
  max-width: 110px;
  height: 100%;
  background-color: #ffffff;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
  transition: left 0.3s ease-in-out;
  z-index: 9999; /* Отображать поверх всех элементов *//* Добавить скролл, если контент больше экрана */

  &.open {
    left: 0; /* Показывает меню */
  }

  @media (min-width: 768px) {
    display: none ;
  }
`;

export const SideItems = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto 35px;

`

export const CloseBtn = styled(BiArrowBack)`
  width: 20px;
  height: 20px;
  margin-top: 25px;
  margin-left: 45px;
  margin-bottom: 60px;
  fill:#F8821E;
  cursor: pointer;
`

export const HomeSvg = styled(AiOutlineHome)`
  width: 29px;
  height: 22px;
  fill: #F8821E;
`
export const PersonSvg = styled(IoPersonSharp)`
  width: 22px;
  height: 24px;
  fill: #F8821E;
`

export const BookSvg = styled(MdMenuBook)`
  width: 23px;
  height: 22px;
  fill: #F8821E;
`
