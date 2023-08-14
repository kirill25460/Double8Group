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

export const BookUsTxt = styled.h2`
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
padding-bottom:52px;
font-family: DM Sans;
font-size: 17px;
font-weight: 400;
line-height: 18px;
letter-spacing: 0px;
text-align: center;
color:#F8821F;
`;

export const BookUsBtn = styled.button`
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
&:hover{
   
    box-shadow: 0 15px 20px rgba(32, 32, 32, .4);
    
    transform: translateY(-7px);}
`;

export const PicToolsL = styled.img`
position:absolute;
top:2594px;
left:585px;
width:220px;
height:201px;
margin:0 ;
@media screen and (min-width: 1440px) {
} 
`;

export const PicToolsR = styled.img`
position:absolute;
top:2622px;
left:1100px;
width:174px;
height:173px;
margin:0 ;
@media screen and (min-width: 1440px) {
} 
`;