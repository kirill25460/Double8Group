import styled from 'styled-components';

export const FooterCon = styled.div`
display: flex;
justify-content: space-around;
background-color: #202020;
padding-top: 60px;
padding-bottom: 60px;
`

export const FooterWrap = styled.div`
display: flex;

`

export const FooterText = styled.p`
color:#ffffff;
`
export const FooterSpan = styled.span`
color:#ffffff;
display:flex;
`
export const FooterButton = styled.button`
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
    fill: #ffffff;
    &:hover{fill: #FF8C00;}
  }
`
export const LogoFooter = styled.img`
width:75px;
height:50px;
@media screen and (min-width: 1440px) {
} 
`;