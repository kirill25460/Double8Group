import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

export const StyledLink = styled(NavLink)`
  color: #2C2C2C;
  text-decoration: none;
  }
`;

export const ReviewButton = styled.button`
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
`;

export const ReviewName = styled.h3`
margin:0;
padding-bottom:2px;
  color: #222021;
  font-family: DM Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 90% */
`;

export const ReviewType = styled.p`
margin:0;
  color: #2c2c2c;
  font-family: DM Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 12.5px; /* 104.167% */
`;

export const ReviewText = styled.p`
width: 460px;
padding-right:91px;
margin:0;
  color: #2c2c2c;
  font-family: DM Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 12.5px; /* 89.286% */
`;

export const ArrowButton = styled(BsArrowLeft)`
  margin-right:8px;
  width: 20px;
  height: 20px;
  fill: #f8821e;
  background-color: white;
  cursor: pointer;
`;


export const WrapAvatar = styled.div`
padding-top:60px;
`;

export const Wrap = styled.div`
padding-top:45px;
padding-bottom:65px;
display:flex;
`;