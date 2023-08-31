import styled from 'styled-components';

import { BsArrowLeft } from "react-icons/bs";

export const ReviewButton = styled.button`
text-decoration: none;
display:flex;
justify-content: center;
align-items: center;
cursor: pointer;
width: 158px;
height: 44px;
color: #2C2C2C;
border-radius: 2px;
border: 2px solid #F8821E;
background-color:#FFFFFF;
font-family: DM Sans;
font-size: 12px;
font-weight: 500;
line-height: 16px;
letter-spacing: 0px;
text-align: center;
box-shadow: 0 8px 15px rgba(0, 0, 0, .1);
transition: .3s;

&:hover{
    box-shadow: 0 15px 20px rgba(32, 32, 32, .4);
    transform: translateY(-7px);}
`;

export const ReviewName = styled.h3`
color: #222021;
font-family: DM Sans;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: 18px; /* 90% */
`;

export const ReviewType = styled.p`
color: #2C2C2C;
font-family: DM Sans;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 12.5px; /* 104.167% */
`;

export const ReviewText = styled.p`
color: #2C2C2C;
font-family: DM Sans;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 12.5px; /* 89.286% */
`;

export const ArrowButton = styled(BsArrowLeft)`
margin:0;
  width: 20px;
  height: 20px;
  fill: #F8821E;
  background-color: white;
  cursor: pointer;
`;