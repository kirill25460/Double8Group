import styled from 'styled-components';


export const Container = styled.div`
display:flex;
flex-direction: row;
justify-content: center;
align-items: normal;
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