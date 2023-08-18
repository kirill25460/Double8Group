import styled from 'styled-components';


export const Container = styled.div`

  width: 375px;
  margin: 0 auto;
  padding: 0 16px;
  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 32px;
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 0 100px;
  }
`;

export const OtherText = styled.h2`
padding-top:145px;
padding-bottom:60px;
padding-left:450px;
margin:0;
width:747px;
font-family: Montserrat;
font-size: 56px;
font-weight: 800;
line-height: 61px;
letter-spacing: 0px;
text-align: right;
color:#222021;

`;

export const OtherSpan = styled.span`
color:#F8821E;
`;