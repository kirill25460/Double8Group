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
    padding: 0 100px;
    padding-bottom: 63px;
  }
`;

export const BookUsTxt = styled.h2`
width: 777px;
padding-top:46px;
margin:0;
font-family: Montserrat;
font-size: 54px;
font-weight: 500;
line-height: 80px;
letter-spacing: 0px;
text-align: center;
color:#F8821F;
`;

export const BookUsPar = styled.p`
margin:0;
width:347px;
font-family: DM Sans;
font-size: 17px;
font-weight: 400;
line-height: 18px;
letter-spacing: 0px;
text-align: center;
color:#F8821F;
`;

export const BookUsBtn = styled.button`
cursor: pointer;
width: 210px;
height: 75px;
color: #fff;
border:none;
background-color:#F8821F;
font-family: 'DM Sans';
font-size: 23px;
text-align: center;
letter-spacing: 3px;
font-weight: 500;
box-shadow: 0 8px 15px rgba(0, 0, 0, .1);
transition: .3s;
margin: 0 44px;
&:hover{
   
    box-shadow: 0 15px 20px rgba(32, 32, 32, .4);
    
    transform: translateY(-7px);}
`;

export const PicToolsL = styled.img`
vertical-align: bottom;
margin-bottom: -63px;
`;

export const PicToolsR = styled.img`
vertical-align: bottom;
margin-bottom: -63px;
margin-right: 46px;
`;


