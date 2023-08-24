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
 margin-right:12px;
`;

export const UserName = styled.p`

`;

export const ListWrap = styled.div`
width:268px;
margin-bottom:100px;

`;

export const ItemWrap = styled.div`

align-items: center;
display:flex;
`;

export const UserWrap =  styled.div`

`;

export const ButtonReview = styled.button`

width: 125px;
height: 30px;
color: #fff;
border:none;
background-color:#F8821F;
font-family: DM Sans;
font-size: 12px;
font-weight: 500;
line-height: 16px;
letter-spacing: 0px;
text-align: center;
box-shadow: 0 8px 15px rgba(0, 0, 0, .1);
transition: .3s;
margin: 0 44px;
&:hover{
    box-shadow: 0 15px 20px rgba(32, 32, 32, .4);
    transform: translateY(-7px);}
`;