import styled from 'styled-components';
import { TfiClip } from 'react-icons/tfi';
import { PiTelegramLogo } from 'react-icons/pi';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: normal;
  flex-wrap: wrap;
  
  margin: 0 auto;

  @media screen and (min-width: 768px) {
   
  }
  @media screen and (min-width: 1440px) {
    
   
  }
`;

const TxtExp = styled.h2`
font-family: Montserrat;
font-size: 46px;
font-style: normal;
font-weight: 800;
line-height: 43px; 
  color: #f8821e;
  @media screen and (min-width: 768px) {
    font-family: Montserrat;
    font-size: 46px;
    font-style: normal;
    font-weight: 800;
    line-height: 43px; 
  }
  @media screen and (min-width: 1440px) {
    width: 497px;
    font-family: Montserrat;
    font-size: 56px;
    font-weight: 800;
    line-height: 61px;
    letter-spacing: 0px;
    text-align: left;
  }
`;

const Wrap = styled.div`

`;

const WrapInput = styled.div``;

const WrapFor3Inputs = styled.form``;

const InputName = styled.input`
  width: 266px;
  height: 29px;
  border-radius: 2px;
  border: 2px solid #f8821e;
  color: #c5c5c5;
  margin-bottom: 20px;
  margin-right: 31px;
`;

const SelectType = styled.select`
  width: 196px;
  height: 35px;
  border-radius: 2px;
  border: 2px solid #f8821e;
  color: #c5c5c5;
`;

const InputReview = styled.input`
  width: 497px;
  height: 32px;
  padding-bottom: 320px;
  border-radius: 2px solid #f8821e;
  border: 2px solid #f8821e;
  color: #c5c5c5;
`;

const SharePic = styled.img`
  height: 749px;
`;

const MainInput = styled.div`
  position: relative;
`;

const InputFileReview = styled.input`
  flex: 1;
  position: relative;
  cursor: pointer;
  width: 22px;
  height: 22px;
  display: none;
`;

const InputContainer = styled.div`
  position: absolute;
  display: inline-flex;
  flex-direction: column;
  right: 10px;
  bottom: 5px;
  align-items: center;
`;

const SubBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
`

const SvgClip = styled(TfiClip)`
  width: 22px;
  height: 22px;
  padding: 7px;
  fill: #f8821e;
  background-color: white;
  margin: 0 13px 13px 0;
  border: 2px solid #f8821e;
  border-radius: 2px;
  cursor: pointer;
`;
const SvgTg = styled(PiTelegramLogo)`
  width: 22px;
  height: 22px;
  padding: 7px;
  fill: white;
  background-color: #f8821e;
  margin: 0 13px 13px 0;
  border: 2px solid #f8821e;
  border-radius: 2px;
  cursor: pointer;
`;


export {
  WrapInput,
  WrapFor3Inputs,
  Wrap,
  TxtExp,
  InputName,
  SelectType,
  InputReview,
  SharePic,
  InputFileReview,
  MainInput,
  InputContainer,
  SvgClip,
  SvgTg,
  SubBtn
};
