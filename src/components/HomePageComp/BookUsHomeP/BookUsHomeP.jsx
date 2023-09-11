import {
  Container,
  BookUsTxt,
  BookUsPar,
  BookUsBtn,
  PicToolsL,
  PicToolsR,
  StyledLink,
  ButPicContainer,
} from './BookUsHomeP.styled';
import Left from 'images/HammerL.png';
import Right from 'images/HammerR.png';


export const BookUsHomeP = () => {
  return (
    <>
      <Container>
        <BookUsTxt>Let’s Start Your New Project!</BookUsTxt>
        <BookUsPar>
          THE MANAGER WILL CONTACT YOU TO CLARIFY YOUR ORDER IN NO MORE THAN 5
          MINUTES!
        </BookUsPar>
        <ButPicContainer>
          <PicToolsL src={Left} alt="Logo" />
          <StyledLink to="/book_us">
            <BookUsBtn>Book Us</BookUsBtn>
          </StyledLink>
          <PicToolsR src={Right} alt="Logo" />
        </ButPicContainer>
      </Container>
    </>
  );
};
