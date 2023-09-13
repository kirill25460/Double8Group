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
        <BookUsTxt>Trust us your air duct cleaning</BookUsTxt>
        <BookUsPar>
          THE MANAGER WILL CONTACT YOU TO CLARIFY YOUR ORDER IN NO MORE THAN 5
          MINUTES!
        </BookUsPar>
        <ButPicContainer>
          <PicToolsL src={Left} alt="Logo" />
          <StyledLink to="/contact_us">
            <BookUsBtn>Work with us</BookUsBtn>
          </StyledLink>
          <PicToolsR src={Right} alt="Logo" />
        </ButPicContainer>
      </Container>
    </>
  );
};
