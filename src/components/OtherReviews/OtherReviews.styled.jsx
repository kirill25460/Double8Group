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


export const ORText = styled.h2`
font-family: Montserrat;
font-size: 56px;
font-weight: 800;
line-height: 61px;
letter-spacing: 0px;
text-align: right;

`;

export const Avatar = styled.img`
 
`;

export const UserName = styled.p`

`;

export const ListWrap = styled.div`
width:268px;


`;

export const ItemWrap = styled.div`

align-items: center;
display:flex;
`;

export const UserWrap =  styled.div`

`;