import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

export const StyledLink = styled(NavLink)`
  color: #2C2C2C;
  text-decoration: none;
  }
`;

export const ReviewButton = styled.button`

display:none;

@media screen and (min-width: 768px) {
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 158px;
  height: 44px;
  color: #2c2c2c;
  border-radius: 2px;
  border: 2px solid #f8821e;
  background-color: #ffffff;
  font-family: DM Sans;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0px;
  text-align: center;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
  &:hover {
    box-shadow: 0 15px 20px rgba(32, 32, 32, 0.4);
    transform: translateY(-7px);
    
}
  @media screen and (min-width: 1440px) {
    
    }
   
  }
`;

export const ReviewButtonMob = styled.button`

text-decoration: none;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
width: 158px;
height: 44px;
color: #2c2c2c;
border-radius: 2px;
border: 2px solid #f8821e;
background-color: #ffffff;
font-family: DM Sans;
font-size: 12px;
font-weight: 500;
line-height: 16px;
letter-spacing: 0px;
text-align: center;
box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
transition: 0.3s;
&:hover {
  box-shadow: 0 15px 20px rgba(32, 32, 32, 0.4);
  transform: translateY(-7px);
}
@media screen and (min-width: 768px) {
    display:none;
}
`;

export const ButtonWrap = styled.div`
padding-bottom:35px;
`;

export const ReviewName = styled.h3`
  margin: 0;
  padding-bottom: 2px;
  color: #222021;
  font-family: DM Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  @media screen and (min-width: 768px) {
   
    
  }
  @media screen and (min-width: 1440px) {
 
   
  }
`;

export const ReviewType = styled.p`
  margin: 0;
  color: #2c2c2c;
  font-family: DM Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 12.5px; /* 104.167% */
`;

export const ReviewText = styled.p`
text-align: start;
width: 336px;


  margin: 0;
  color: #2c2c2c;
  font-family: DM Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 12.5px; 
  @media screen and (min-width: 768px) {
    padding-right: 91px;
  }
  @media screen and (min-width: 1440px) {
    width: 460px;
  }
`;

export const ArrowButton = styled(BsArrowLeft)`
  margin-right: 8px;
  width: 20px;
  height: 20px;
  fill: #f8821e;
  background-color: white;
  cursor: pointer;
`;

export const WrapAvatar = styled.div`
padding-top: 30px;
padding-bottom:20px;
  @media screen and (min-width: 768px) {
    padding-top: 60px;
    padding-bottom:40px;
  }
  @media screen and (min-width: 1440px) {
    padding-bottom:60px;
   
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  text-align: center;
  align-items: center;

  flex-direction: column;
  display: flex;
  @media screen and (min-width: 768px) {
    width: 768px;
    text-align: center;
    align-items: center;
      padding-top: 30px;
  padding-bottom: 52px;
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
    justify-content: center;
    padding-top: 45px;
    padding-bottom: 65px;
    flex-direction: row;
  }
`;

export const FotoWrap = styled.div`
display:flex;
gap:13px;
padding-bottom:35px;
@media screen and (min-width: 768px) {
  gap:28px;
}
@media screen and (min-width: 1440px) {

}
`;

export const WrapWrap = styled.div`
flex-direction: column;
display:flex;
gap:13px;

@media screen and (min-width: 768px) {
  gap:30px;
}
@media screen and (min-width: 1440px) {

}
`;
export const ReviewPic1 = styled.img`
width: 191px;
height: 295px;
@media screen and (min-width: 768px) {
  width: 228px;
  height: 486px;
}
@media screen and (min-width: 1440px) {

}
`;

export const ReviewPic2 = styled.img`

width: 124px;
height: 160px;

@media screen and (min-width: 768px) {
  width: 228px;
  height: 224px;
}
@media screen and (min-width: 1440px) {
 
}
`;

export const ReviewPic3 = styled.img`

width: 124px;
height: 122px;

@media screen and (min-width: 768px) {
  width: 228px;
  height: 224px;
}
@media screen and (min-width: 1440px) {
 
}
`;




export const MainWrap = styled.div`
padding-bottom:25px;
`;

export const MobText = styled.p`
margin:0;
padding-bottom:15px;
color: #F8821E;
font-family: DM Sans;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: 18px; 


@media screen and (min-width: 768px) {
display:none;
}
@media screen and (min-width: 1440px) {
 
}
`;