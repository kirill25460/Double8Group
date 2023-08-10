import styled from 'styled-components';
import { NavLink } from 'react-router-dom'; 


export const LogoHeader = styled.img`
width:89px;
height:67px;
@media screen and (min-width: 1440px) {
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

width: 375px;
margin: 0 auto;
padding: 0 10px;
  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 32px;
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 0 100px;
  }
`;

export const HeaderText = styled.p`
color:#202020;
`
export const HeaderSpan = styled.span`
color:#202020;
display:flex;
`
export const LogoWrap = styled.div`


`

export const Nav = styled.div`

border-top:2px solid #FF8C00;

padding-bottom:5px;

`;
export const NavList = styled.ul`
display:flex;
align-items: center;
justify-content: center;
gap: 36px;
list-style: none;
`;

export const NavItem = styled.li`

`;

export const StyledLink = styled(NavLink)`
display: flex;
align-items: center;

color: #F8821E;

text-decoration: none;
span {
  
 
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


`
export const Wrap = styled.div`
display: flex;
`

export const HeaderButton = styled.button`
display: flex;
justify-content: center;
align-items: center;
margin-left: 24px;
padding: 0;
background-color: transparent;
border: none;
outline: none;
cursor: pointer;
svg {
    fill: #202020;
    &:hover{fill: #FF8C00;}
  }
`