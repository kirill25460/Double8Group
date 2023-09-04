import styled from 'styled-components';
import { TfiClip } from 'react-icons/tfi';
import { PiTelegramLogo } from 'react-icons/pi';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: normal;
  margin: 0 auto;

  @media screen and (min-width: 768px) {

    padding: 0 32px;
  }
  @media screen and (min-width: 1440px) {

    padding-bottom: 140px;
  }
`;

const TxtExp = styled.h2`
  width: 324px;
  font-family: Montserrat;
  font-size: 46px;
  font-weight: 800;
  line-height: 43px;
  letter-spacing: 0px;
  text-align: left;
  color: #f8821e;
  margin-bottom: 305px;
  @media screen and (min-width: 768px) {
    width: 264px;
    font-size: 46px;
    line-height: 43px;
    margin-bottom: 100px;
  }
  @media screen and (min-width: 1440px) {
    width: 497px;
    font-size: 56px;
    line-height: 61px;
    margin-bottom:44px;
  }
`;

const Wrap = styled.div``;

const WrapInput = styled.div`
display: flex;`;

const WrapFor3Inputs = styled.form`
  margin-bottom: 65px;
  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 0;
  }
`;

const InputName = styled.input`
  width: 140px;
  height: 33px;
  border-radius: 2px;
  border: 2px solid #f8821e;
  color: #c5c5c5;
  margin-bottom: 20px;
  margin-right: 15px;
  @media screen and (min-width: 768px) {
    width: 266px;
    height: 29px;
    margin-right: 27px;
  }
  @media screen and (min-width: 1440px) {

  }
`;

const SelectType = styled.select`
  width: 196px;
  height: 35px;
  border-radius: 2px;
  border: 2px solid #f8821e;
  color: #c5c5c5;
`;

const InputReview = styled.input`
  width: 327px;
  height: 32px;
  padding-bottom: 320px;
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
  display: block;
  position: absolute;
  height: 356px;
  width: 366px;
  top: 240px;
  left: 40px;
  @media screen and (min-width: 768px) {
    display: block;
    position: absolute;
    height: 356px;
    width: 366px;
    top: 90px;
    left: 640px;
  }
  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

const SharePicDesc = styled.img`
  display: none;
  @media screen and (min-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 1440px) {
    display: block;
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
  right: 5px;
  bottom: 5px;
  align-items: center;
  @media screen and (min-width: 768px) {
    right: 10px;
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

const InputPhone = styled.input`
  width: 163px;
  height: 33px;
  border-radius: 2px;
  border: 2px solid #f8821e;
  color: #c5c5c5;
  @media screen and (min-width: 768px) {
    width: 196px;
    height: 29px;
  }
  @media screen and (min-width: 1440px) {
  }
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
  InputPhone,
  SharePicDesc,
};
