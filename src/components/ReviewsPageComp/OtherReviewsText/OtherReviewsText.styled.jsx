import styled from 'styled-components';


export const Container = styled.div`
  margin: 0 auto;
  
  @media screen and (min-width: 768px) {

  }
  @media screen and (min-width: 1440px) {
  
  }
`;

export const OtherText = styled.h2`
display: none;
@media screen and (min-width: 768px) {
  display: block;
  margin:0;
  color:#222021;
  font-family: Montserrat;
  font-size: 42px;
  font-style: normal;
  font-weight: 800;
  line-height: 42px;
  text-align: center;
}
@media screen and (min-width: 1440px) {
  display: block;
  padding-top:105px;
padding-bottom:60px;
padding-left:450px;
margin:0;
width:747px;
  font-size: 56px;
  line-height: 61px;
  letter-spacing: 0px;
  text-align: right;
}
`;



export const OtherSpan = styled.span`
color:#F8821E;
`;