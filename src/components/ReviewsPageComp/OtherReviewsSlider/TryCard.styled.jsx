import styled from 'styled-components';

export const Container = styled.div`

  width: 375px;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    width: 768px;
    
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
   padding-bottom: 100px;
  }
`;

export const TryCardPhoto = styled.img`
width:260px;
height:230px;
`;

export const WrapAvatar = styled.div`
padding-bottom:21px;
`;



export const WrapCard = styled.div`
margin-left:120px;
height: 530px;
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
  bottom: 18px;
  left: 50%;
  transform: translateX(-50%);
  display: none;
`;

export const CardContainerHover = styled(WrapCard)`
  &:hover ${CardButton} {

    display: block;
  }
`;


export const ReviewName = styled.h3`
margin:0;
padding-bottom:2px;
color: #222021;
font-family: DM Sans;
font-size: 17px;
font-style: normal;
font-weight: 400;
line-height: 18px; /* 105.882% */
text-transform: capitalize;
`;

export const ReviewType = styled.p`
margin:0;
color: #2C2C2C;
font-family: DM Sans;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 12.5px; /* 104.167% */
`;

export const ReviewText = styled.p`
overflow: hidden;
padding:13px 16px;
text-align: start;
width: 235px;
height: 103px;
margin:0;
padding-bottom:23px;
padding-top:12px;
color: #2C2C2C;
font-family: DM Sans;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 12.5px; /* 89.286% */
`;