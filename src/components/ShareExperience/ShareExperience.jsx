import React from 'react';

import {
  Container,
  WrapInput,
  WrapFor3Inputs,
  Wrap,
  TxtExp,
  InputName,
  InputEmail,
  InputReview,
  ButtonAdd,
  SharePic,
  InputFileReview,
} from './ShareExperience.styled';
import woman from 'images/ShareWoman.png';

export const ShareExperience = ({ onInput, inputs }) => {
  const handleInputChange = e => {
    onInput(e);
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
              <InputEmail
                required
                type="email"
                name="email"
                id="email"
                // value={inputs.email}
                placeholder="Email"
                onChange={handleInputChange}
              ></InputEmail>
            </WrapInput>
            <InputReview
              required
              type="text"
              name="review"
              id="review"
              // value={inputs.review}
              placeholder="Write your review here..."
              onChange={handleInputChange}
            ></InputReview>

            <InputFileReview
              required
              type="file"
              name="review"
              id="review"
              // value={inputs.review}
              placeholder="Write your review here..."
              onChange={handleInputChange}
            ></InputFileReview>

            <ButtonAdd type="submit"><svg class="footer-soc-icon" width="20" height="20"><use ></use></svg></ButtonAdd>
          </WrapFor3Inputs>
        </Wrap>
        <SharePic src={woman} alt="woman" />
      </Container>
    </>
  );
};
