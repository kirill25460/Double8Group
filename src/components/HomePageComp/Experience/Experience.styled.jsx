import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 375px;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1440px) {
    padding: 0 100px;
  }
`;

export const ExpPic = styled.img`
  width: 340px;
  height: 241px;
`;

export const ExpTtl = styled.h2`
  font-family: Montserrat;
  font-size: 40px;
  font-weight: 600;
  line-height: 40px;
  letter-spacing: 0px;
  text-align: center;
  color: #f8821e;

  @media screen and (min-width: 768px) {
    font-family: Montserrat;
    font-size: 72px;
    font-weight: 600;
    line-height: 67px;
    letter-spacing: 0px;
    text-align: center;
    color: #f8821e;
    width: 605px;
  }
  @media screen and (min-width: 1440px) {
    font-family: Montserrat;
    font-size: 72px;
    font-weight: 600;
    line-height: 67px;
    letter-spacing: 0px;
    text-align: center;
    color: #f8821e;
    width: 605px;
  }
`;

export const ExpList = styled.ul`
  margin: 0;
  padding: 0;
  gap: 56px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  list-style: none;
  padding-bottom: 58px;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    align-items: normal;
  }
`;

export const ExpItem = styled.li`
  width: 340px;
`;

export const ExpItTtl1 = styled.h3`
  margin: 0;
  padding-top: 16px;
  padding-bottom: 11px;
  font-family: DM Sans;
  font-size: 23px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0px;
  text-align: center;
  color: #f8821e;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
    padding-right: 30px;
    text-align: left;
  }
`;

export const ExpItText1 = styled.p`
  margin: 0;
  font-family: Montserrat;
  font-size: 15px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0px;
  text-align: left;

  height: 106px;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
    text-align: left;
  }
`;
export const ExpItTtl2 = styled.h3`
  padding-left: 25px;
  padding-right: 25px;
  padding-bottom: 11px;
  margin: 0;
  padding-top: 16px;
  font-family: DM Sans;
  font-size: 23px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0px;
  text-align: center;
  color: #f8821e;
`;

export const ExpItText2 = styled.p`
  margin: 0;
  font-family: Montserrat;
  font-size: 15px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0px;
  text-align: center;

  height: 106px;
`;

export const ExpItTtl3 = styled.h3`
  padding-bottom: 11px;
  padding-top: 16px;
  margin: 0;
  font-family: DM Sans;
  font-size: 23px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0px;
  text-align: center;
  color: #f8821e;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
    text-align: right;
  }
`;

export const ExpItText3 = styled.p`
  margin: 0;
  font-family: Montserrat;
  font-size: 15px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0px;
  text-align: center;

  height: 106px;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
    text-align: right;
  }
`;

export const UnderLane = styled.div`
  border: none;
  border-bottom: 2px solid #f8821e;
  width: 243px;
`;
