import styled from 'styled-components';

export const LogoHeader = styled.img`
width:75px;
height:50px;
@media screen and (min-width: 1440px) {
} 
`;

export const AppBar = styled.header`
  width: 100%;
  padding-top: 18px;
`;

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
  width: 375px;
  margin: 0 auto;
  padding: 0 16px;
  // display: flex;
  // align-items: center;
  // justify-content: center;
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
display: flex;
margin: 0 auto;

`

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