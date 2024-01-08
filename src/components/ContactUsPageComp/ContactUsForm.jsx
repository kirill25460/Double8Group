import React from 'react';
import {
  ContactWrap,
  WrapInput,
  WrapFor3Inputs,
  Wrap,
  WrapForMobPhoto,
  TxtExp,
  InputName,
  InputReview,
  SharePic,
  InputEmail,
  SvgTg,
  SubBtn,
  InputPhone,
  SharePicDesc,
  BlackSpan,
} from './ContactUsForm.styled';
import man from 'images/BookUsMan.png';
import Notiflix from 'notiflix';

export const ContactUsForm = ({ onInput, inputs }) => {
  // const inputRef = useRef(null);

  // const handleArrowClick = () => {
  //   inputRef.current.click();
  // };

  // const handleFileChange = event => {
  //   const selectedFile = event.target.files[0];
  //   if (selectedFile) {
  //     Notiflix.Notify.success('Photos added');
  //   } else {
  //     Notiflix.Notify.failure('Photos didn`t added');
  //   }
  // };

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const title = form.elements.title.value;
    const email = form.elements.email.value;
    const number = form.elements.number.value;
    const bookus = form.elements.bookus.value;
    if (title !== '' && number !== '' && bookus !== '' && email !== '') {
      Notiflix.Notify.success('Rewiew send');
    } else {
      Notiflix.Notify.failure('Rewiew didn`t send');
    }

    console.log(title, email, number, bookus);
    form.reset();
  };

  return (
    <>
      <ContactWrap>
        <Wrap>
          <WrapForMobPhoto>
            <TxtExp>
              LEAVE YOUR TASK <BlackSpan>AND WE WILL CALL YOU</BlackSpan>
            </TxtExp>
            <SharePic src={man} alt="man" />
          </WrapForMobPhoto>
          <WrapFor3Inputs onSubmit={handleSubmit}>
            <InputName
              type="text"
              name="title"
              id="title"
              // value={inputs.title}
              placeholder="Name"
            ></InputName>
            <WrapInput>
              <InputEmail
                type="email"
                name="email"
                id="email"
                placeholder="Email"
              ></InputEmail>
              <InputPhone
                type="tel"
                name="number"
                id="number"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                // value={inputs.title}
                placeholder="Phone number"
              />
            </WrapInput>

            <InputReview
              rows="15"
              type="text"
              name="bookus"
              id="bookus"
              // value={inputs.review}
              placeholder="Let us know which day/time is convenient for you and we will give a call to confirm all details"
            ></InputReview>
            <SubBtn type="submit">
              <SvgTg />
            </SubBtn>
         
          </WrapFor3Inputs>
        </Wrap>

        <SharePicDesc src={man} alt="desc" />
      </ContactWrap>
    </>
  );
};
