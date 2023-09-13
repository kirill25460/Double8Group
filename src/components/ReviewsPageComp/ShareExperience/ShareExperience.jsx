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
  // InputFileReview,
  LabelCheckbox,
  MainInput,
  // InputContainer,
  // SvgClip,
  SvgTg,
  SubBtn,
  OtherText,
  OtherSpan,
} from './ShareExperience.styled';
import woman from 'images/ShareWoman.png';
import Notiflix from 'notiflix';

export const ShareExperience = ({ onInput, inputs }) => {
  const types = [
    { id: 0, type: 'Air duct cleaning' },
    { id: 1, type: 'Dryer vent cleaning' },
    { id: 2, type: 'Chimney cleaning' },
    { id: 3, type: 'Bathroom fan cleaning' },
    { id: 4, type: 'Power washing' },
  ];

  // const inputRef = useRef(null);

  // const handleArrowClick = () => {
  //   inputRef.current.click();
  // };

  // const handleFileChange = (event) => {
  //   const selectedFile = event.target.files[0];
  //   if (selectedFile) {
  //     Notiflix.Notify.success('Photos added');
  //   } else {
  //     Notiflix.Notify.failure('Photos didn`t added');
  //   }
  // };

  // const sendData = ({title, type, review, photo}) => {

  // }

  const handleSubmit = evt => {
    evt.preventDefault();

    const form = evt.currentTarget;
    const title = form.elements.title.value;
    const type = form.elements.type.value;
    const review = form.elements.review.value;
    const photo = form.elements.photo.value;

    if (title !== '' && type !== '' && review !== '' && photo !== '') {
      Notiflix.Notify.success('Rewiew send');
    } else {
      Notiflix.Notify.failure('Rewiew didn`t send');
    }
    console.log(title, type, review, photo);

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
                type="text"
                name="title"
                id="title"
                placeholder="Full Name"
                required
              ></InputName>
              <SelectType
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
              rows="15"
              type="text"
              name="review"
              id="review"
              required
              placeholder="We’d love to hear from you"
            ></InputReview>
            <MainInput>
            <input
              type="checkbox"
              id="subscribeReview"
              name="subscribe"
              required
            />
            <LabelCheckbox for="subscribeReview">
              This review is based on my own experience
            </LabelCheckbox>
            
              {/* <InputFileReview
                ref={inputRef}
                type="file"
                name="photo"
                id="photo"
                placeholder="Write your review here..."
                onChange={handleFileChange}
              />
              <SvgClip onClick={handleArrowClick} /> */}
              <SubBtn type="submit">
                <SvgTg />
              </SubBtn>
            </MainInput>
          </WrapFor3Inputs>
        </Wrap>
        <OtherText>
          CHECK OTHER CUSTOMERS <OtherSpan>REVIEW</OtherSpan>
        </OtherText>
        <SharePic src={woman} alt="woman" />
      </Container>
    </>
  );
};
