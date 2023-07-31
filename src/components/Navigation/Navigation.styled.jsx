import styled from 'styled-components';
import { NavLink } from 'react-router-dom'; 
export const Nav = styled.div`
margin-top:5px;
border-top:2px solid #FF8C00;
padding-bottom:5px;
margin-bottom:10px;
`;
export const NavList = styled.ul`
display:flex;
align-items: center;
justify-content: center;
gap: 32px;
list-style: none;
`;

export const NavItem = styled.li`

`;

export const StyledLink = styled(NavLink)`
display: flex;
align-items: center;

color: #000;
text-decoration: none;
span {
  
 
&.active {
    
    border-bottom:3px solid #FF8C00;
}

&:hover:not(.active),
&:focus-visible:not(.active) {
    border-bottom:3px solid #FF8C00;
}
`;