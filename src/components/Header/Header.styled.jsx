import styled from 'styled-components';


export const LogoHeader = styled.img`
width:75px;
height:50px;
@media screen and (min-width: 1440px) {
} 
`;

export const AppBar = styled.header`
//   position: absolute;

  width: 100%;
  padding-top: 18px;
`;

export const Container = styled.div`
  width: 375px;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1440px) {
   

    width: 1440px;
    padding: 0 100px;
  }
`;