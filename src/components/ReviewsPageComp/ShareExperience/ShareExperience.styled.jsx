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
  width: 324px;
  font-family: Montserrat;
  font-size: 46px;
  font-style: normal;
  font-weight: 800;
  letter-spacing: 0px;
  line-height: 43px;
  color: #f8821e;
  @media screen and (min-width: 768px) {
    font-size: 46px;
    line-height: 43px;
  }
  @media screen and (min-width: 1440px) {
    width: 497px;
    font-size: 56px;
    line-height: 61px;
    text-align: left;
  }
`;

const Wrap = styled.div`
  width: 370px;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    width: 505px;
    margin: 0 auto;
  }
  @media screen and (min-width: 1440px) {
    margin: 0;
  }
`;

const WrapInput = styled.div``;

const WrapFor3Inputs = styled.form`
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    width: 505px;
    margin: 0 auto;
  }
  @media screen and (min-width: 1440px) {
    margin: 0;
  }
`;

const InputName = styled.input`
  width: 140px;
  height: 29px;
  border-radius: 2px;
  border: 2px solid #f8821e;
  color: #c5c5c5;
  margin-bottom: 20px;
  margin-right: 15px;
  @media screen and (min-width: 768px) {
    width: 266px;
    margin-right: 31px;
  }
  @media screen and (min-width: 1440px) {

  }
`;

const SelectType = styled.select`
  width: 170px;
  height: 35px;
  border-radius: 2px;
  border: 2px solid #f8821e;
  color: #c5c5c5;
  @media screen and (min-width: 768px) {
    width: 196px;
    height: 35px;
  }
  @media screen and (min-width: 1440px) {
  }
`;

const InputReview = styled.input`
  width: 327px;
  height: 32px;
  padding-bottom: 320px;
  border-radius: 2px solid #f8821e;
  border: 2px solid #f8821e;
  color: #c5c5c5;
  @media screen and (min-width: 768px) {
    width: 497px;
    height: 32px;
  }
  @media screen and (min-width: 1440px) {
  }
`;

const SharePic = styled.img`
  width: 326px;
  height: 520px;
  margin-top:-150px;
  @media screen and (min-width: 768px) {
    height: 749px;
    width: 550px;
    margin-top:0;
  }
  @media screen and (min-width: 1440px) {
  }
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
  right:5px;
  bottom: 5px;
  align-items: center;
  @media screen and (min-width: 768px) {

    right: 10px;
    bottom: 5px;
    align-items: center;
  }
  @media screen and (min-width: 1440px) {

  }
`;

const SubBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
`;

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

const OtherText = styled.h2`
    display: block;
    margin: 0;
    width: 370px;
    color: #222021;
    font-family: Montserrat;
    font-size: 42px;
    font-style: normal;
    font-weight: 800;
    line-height: 42px;
    text-align: left;
    margin-top: 50px;
  @media screen and (min-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

const OtherSpan = styled.span`
color:#F8821E;
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
  SubBtn,
  OtherText,
  OtherSpan
};
