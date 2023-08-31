import styled from 'styled-components';

export const Container = styled.div`

  width: 375px;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    width: 768px;
    
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
   
  }
`;

export const TryCardPhoto = styled.img`
width:267px;
height:238px;
`;

export const WrapAvatar = styled.div`

`;

export const AvatarCard = styled.img`
width:50px;
height:50px;
`;

export const WrapCard = styled.div`
margin-right:50px;
height:600px;
position: relative;
width: 267px;
display:flex;
flex-direction: column;
justify-content: center;

`;

export const TryButtonReview = styled.button`
cursor: pointer;
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

export const CardButton = styled.div`
  position: absolute;
  display: none;
`;

export const CardContainerHover = styled(WrapCard)`
  &:hover ${CardButton} {
    display: block;
  }
`;