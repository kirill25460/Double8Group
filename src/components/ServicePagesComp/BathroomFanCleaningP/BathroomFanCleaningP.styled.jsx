import styled from 'styled-components';
import { MdPriceCheck } from "react-icons/md";

export const Container = styled.div`

display:flex;
align-items: center;
  margin: 0 auto;
  flex-direction: column;
 padding-top:25px;
 padding-bottom:30px;

  @media screen and (min-width: 768px) {
    display:flex;
    flex-direction: row;
    align-items: center;
    padding-top: 120px;
    padding-bottom: 65px;
    justify-content: center;
  }
  @media screen and (min-width: 1440px) {

    justify-content: center;
    padding-top: 200px;
    padding-bottom: 145px;
  }
`;

export const NameService = styled.h2`
margin:0;
width:350px;
font-family: Montserrat;
font-size: 56px;
font-weight: 800;
line-height: 61px;
letter-spacing: 0px;
text-align: left;
color:#F8821E;
@media screen and (min-width: 768px) {
  width:415px;
}
@media screen and (min-width: 1440px) {
  width:415px;
}

`;

export const TextService = styled.p`
width:350px;
font-family: DM Sans;
font-size: 15px;
font-weight: 500;
line-height: 17px;
letter-spacing: 0px;
text-align: left;
color:#2C2C2C;
@media screen and (min-width: 768px) {
  width:398px;
}
@media screen and (min-width: 1440px) {

}

`;

export const DescriptionService = styled.p`
color:#2C2C2C;
font-family: DM Sans;
font-size: 15px;
font-weight: 500;
line-height: 17px;
letter-spacing: 0px;
text-align: left;
@media screen and (min-width: 768px) {
  position:absolute;
  right:20px;
  top:80px;
}
@media screen and (min-width: 1440px) {
  top:115px;
    right:190px;
}
`;

export const WrapSlider = styled.div`
max-width: 345px; 
margin-bottom:20px;
@media screen and (min-width: 768px) {
  
}
@media screen and (min-width: 1440px) {

}

`;

export const WrapService = styled.div`

@media screen and (min-width: 768px) {

}
@media screen and (min-width: 1440px) {
  padding-right:105px;
}

`;

export const WrapImages = styled.div`
display:flex;
gap: 15px;
@media screen and (min-width: 768px) {
 
align-items: center;
flex-direction: column;
justify-content: center;

}
@media screen and (min-width: 1440px) {
  padding-left:105px;
}


`;

export const ButtonServices = styled.button`
display:none;
@media screen and (min-width: 768px) {
  display: inline-block;
}
@media screen and (min-width: 1440px) {

}
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
display:none;

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
@media screen and (min-width: 768px) {
  display: inline-block;
  margin-top:70px;
margin-left:20px;
}
@media screen and (min-width: 1440px) {

}

`;

export const SeerviceImages = styled.img`
@media screen and (min-width: 768px) {

}
@media screen and (min-width: 1440px) {

}

width:61px;
height:61px;
`;

export const ImgText = styled.p`
@media screen and (min-width: 768px) {

}
@media screen and (min-width: 1440px) {

}
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


export const MobButtonServices = styled.button`
margin-right: 25px;
width: 158px;
height: 45px;
color: #fff;
border:none;
background-color:#F8821F;
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
@media screen and (min-width: 768px) {
  display: none;

}
@media screen and (min-width: 1440px) {

}

`;



export const AnotherMobButton = styled.button`


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
@media screen and (min-width: 768px) {
  display:none;
}


`;

export const DivPhoto = styled.div`
display: flex;
cursor:pointer;

  @media screen and (min-width: 768px) {
    display:flex;
    flex-direction:column;
    align-items:center;
  }
  @media screen and (min-width: 1440px) {
    display:flex;
    flex-direction:column;
    align-items:center;
  }
`

export const PriceSvg = styled(MdPriceCheck)`
width:65px;
height:70px;
color: #F8821F;
`;