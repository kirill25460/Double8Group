import React from 'react';

import {
  Container,
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
} from './ShareExperience.styled';
import woman from 'images/ShareWoman.png';

export const ShareExperience = ({ onInput, inputs }) => {
  const types = [
    { id: 0, type: 'Air duct cleaning photos before and after' },
    { id: 1, type: 'Dryer vent cleaning' },
    { id: 2, type: 'Chimney cleaning' },
    { id: 3, type: 'Bathroom fan cleaning' },
    { id: 4, type: 'Power washing' },
  ];

  const handleInputChange = e => {
    onInput(e);
    console.log(e);
  };
  return (
    <>
      <Container>
        <Wrap>
          <TxtExp>SHARE YOUR EXPERIENCE WITH OTHERS!</TxtExp>
          <WrapFor3Inputs>
            <WrapInput>
              <InputName
                required
                type="text"
                name="title"
                id="title"
                // value={inputs.title}
                placeholder="Name"
                onChange={handleInputChange}
              ></InputName>
              <SelectType
                required
                name="type"
                id="type"
                // value={inputs.email}
                onChange={handleInputChange}
                defaultValue="Type of Service"
              >
                <option value="Type of Service">Type of Service</option>
                {types.map(({ id, type }) => {
                  return (
                    <option key={id} value={type}>
                      {type}
                    </option>
                  );
                })}
              </SelectType>
            </WrapInput>
            <MainInput>
              <InputReview
                required
                type="text"
                name="review"
                id="review"
                // value={inputs.review}
                placeholder="Write your review here..."
                onChange={handleInputChange}
              ></InputReview>
              <InputContainer>
                <InputFileReview
                  required
                  type="file"
                  name="review"
                  id="review"
                  // value={inputs.review}
                  placeholder="Write your review here..."
                  onChange={handleInputChange}
                />
                <SvgClip />
                <SvgTg />
              </InputContainer>
            </MainInput>
          </WrapFor3Inputs>
        </Wrap>
        <SharePic src={woman} alt="woman" />
      </Container>
    </>
  );
};
