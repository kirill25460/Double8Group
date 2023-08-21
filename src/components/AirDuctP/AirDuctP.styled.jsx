import styled from 'styled-components';


export const Container = styled.div`
display:flex;
flex-direction: column;
align-items: center;
  width: 375px;
  margin: 0 auto;
  padding: 0 16px;
padding-bottom: 63px;
  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 32px;
    padding-bottom: 63px;
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 0 100px;
    padding-bottom: 63px;
  }
`;

export const NameService = styled.h2`
font-family: Montserrat;
font-size: 56px;
font-weight: 800;
line-height: 61px;
letter-spacing: 0px;
text-align: left;
`;

export const TextService = styled.p`
font-family: DM Sans;
font-size: 15px;
font-weight: 500;
line-height: 17px;
letter-spacing: 0px;
text-align: left;
`;