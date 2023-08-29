import React, { useRef } from 'react';
import {
  Container,
  WrapInput,
  WrapFor3Inputs,
  Wrap,
  TxtExp,
  InputName,

  InputReview,
  SharePic,
  InputFileReview,
  MainInput,
  InputContainer,
  SvgClip,
  SvgTg,
  SubBtn
} from './BookUsForm.styled';
import man from 'images/BookUsMan.png';

export const BookUsForm = ({ onInput, inputs }) => {

  const inputRef = useRef(null);

  const handleArrowClick = () => {
    inputRef.current.click();
  };

  // const sendData = ({title, type, review, photo}) => {
    
  // }

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const title = form.elements.title.value;
    const type = form.elements.type.value;
    const review = form.elements.review.value;
    const photo = form.elements.photo.value;
    console.log(title,type, review, photo);
    form.reset();
  };

  return (
    <>
      <Container>
        <Wrap>
          <TxtExp>LEAVE YOUR TASK AND WE WILL CALL YOU</TxtExp>
          <WrapFor3Inputs onSubmit={handleSubmit}>
            <WrapInput>
              <InputName
                required
                type="text"
                name="title"
                id="title"
                // value={inputs.title}
                placeholder="Name"
              ></InputName>
            
            </WrapInput>

            <InputReview
              required
              type="text"
              name="bookus"
              id="bookus"
              // value={inputs.review}
              placeholder="Write your task here..."
            ></InputReview>
            <MainInput>
              <InputContainer>
                <InputFileReview
                  required
                  ref={inputRef}
                  type="file"
                  name="photo"
                  id="photo"
                  // value={inputs.review}
                 
                />
                <SvgClip onClick={handleArrowClick} />
                <SubBtn type="submit">
                  <SvgTg />
                </SubBtn>
              </InputContainer>
            </MainInput>
          </WrapFor3Inputs>
        </Wrap>
        <SharePic src={man} alt="man" />
      </Container>
    </>
  );
};
