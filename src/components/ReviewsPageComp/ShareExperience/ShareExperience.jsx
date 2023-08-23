import React, { useRef } from 'react';
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
  SubBtn
} from './ShareExperience.styled';
import woman from 'images/ShareWoman.png';

export const ShareExperience = ({ onInput, inputs }) => {
  const types = [
    { id: 0, type: 'Air duct cleaning' },
    { id: 1, type: 'Dryer vent cleaning' },
    { id: 2, type: 'Chimney cleaning' },
    { id: 3, type: 'Bathroom fan cleaning' },
    { id: 4, type: 'Power washing' },
  ];

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
          <TxtExp>SHARE YOUR EXPERIENCE WITH OTHERS!</TxtExp>
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
              <SelectType
                required
                name="type"
                id="type"
                // value={inputs.email}
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

            <InputReview
              required
              type="text"
              name="review"
              id="review"
              // value={inputs.review}
              placeholder="Write your review here..."
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
                  placeholder="Write your review here..."
                />
                <SvgClip onClick={handleArrowClick} />
                <SubBtn type="submit">
                  <SvgTg />
                </SubBtn>
              </InputContainer>
            </MainInput>
          </WrapFor3Inputs>
        </Wrap>
        <SharePic src={woman} alt="woman" />
      </Container>
    </>
  );
};
