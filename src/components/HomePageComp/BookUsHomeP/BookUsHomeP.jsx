import {
  Container,
  BookUsTxt,
  BookUsList,
  BookUsItem,
  ItemText,
  ContactWrap,
  DiscountTxt,
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
} from './BookUsHomeP.styled';
import man from 'images/BookUsMan.png';
import Notiflix from 'notiflix';

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
export const BookUsHomeP = () => {
  return (
    <>
      <Container id="contact_us">
        <BookUsTxt>Trust us your air duct cleaning</BookUsTxt>
        <BookUsList>
          <BookUsItem><ItemText>Affordable prices</ItemText></BookUsItem>
          <BookUsItem><ItemText>No hidden fees</ItemText></BookUsItem>
          <BookUsItem><ItemText>On-time and reliable</ItemText></BookUsItem>
          <BookUsItem><ItemText>Highest Quality work</ItemText></BookUsItem>
        </BookUsList>
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
      <DiscountTxt>*Order two services at once and receive a 15% discount</DiscountTxt>
      </Container>
    </>
  );
};
