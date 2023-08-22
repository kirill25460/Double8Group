import styled from 'styled-components';


export const Container = styled.div`
display:flex;

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
    justify-content: center;
    padding-top: 90px;
    padding-bottom: 135px;
  }
`;

export const NameService = styled.h2`
width:415px;
font-family: Montserrat;
font-size: 56px;
font-weight: 800;
line-height: 61px;
letter-spacing: 0px;
text-align: left;
color:#F8821E;
`;

export const TextService = styled.p`
width:398px;
font-family: DM Sans;
font-size: 15px;
font-weight: 500;
line-height: 17px;
letter-spacing: 0px;
text-align: left;
color:#2C2C2C;
`;

export const WrapSlider = styled.div`
max-width: 345px; 
height: 458px;
`;

export const WrapService = styled.div`
padding-right:105px;
`;

export const WrapImages = styled.div`
display:flex;
align-items: center;
flex-direction: column;
justify-content: center;
padding-left:105px;
`;

export const ButtonServices = styled.button`
margin-top:70px;
width: 158px;
height: 45px;
color: #fff;
border:none;
background-color:#F8821F;
font-family: 'DM Sans';
font-size: 12px;
text-align: center;
letter-spacing: 0px;
font-weight: 700;
box-shadow: 0 8px 15px rgba(0, 0, 0, .1);
transition: .3s;
&:hover{
   
    box-shadow: 0 15px 20px rgba(32, 32, 32, .4);
    
    transform: translateY(-7px);}
`;

export const AnotherButtonServ = styled.button`
margin-top:70px;
margin-left:20px;
width: 158px;
height: 45px;
color: #2C2C2C;
border:2px solid #F8821F;
background-color:#FFF;
font-family: 'DM Sans';
font-size: 12px;
text-align: center;
letter-spacing: 0px;
font-weight: 500;
box-shadow: 0 8px 15px rgba(0, 0, 0, .1);
transition: .3s;
&:hover{
   
    box-shadow: 0 15px 20px rgba(32, 32, 32, .4);
    
    transform: translateY(-7px);}
`;

export const SeerviceImages = styled.img`

width:61px;
height:61px;
`;

export const ImgText = styled.p`
margin:0;
width:93px;
font-family: DM Sans;
font-size: 20px;
font-weight: 700;
line-height: 17px;
letter-spacing: 0px;
text-align: center;
color:#F8821E;
padding-bottom:50px;
padding-top:8px;
`;