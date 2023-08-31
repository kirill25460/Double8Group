import {
  Container,
  BookUsTxt,
  BookUsPar,
  BookUsBtn,
  PicToolsL,
  PicToolsR,
  ButPicContainer
} from './BookUsHomeP.styled';
import Left from 'images/HammerL.png';
import Right from 'images/HammerR.png';
import { NavLink } from 'react-router-dom';

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
          <NavLink to="/book_us">
            <BookUsBtn>Book Us</BookUsBtn>
          </NavLink>
          <PicToolsR src={Right} alt="Logo" />
        </ButPicContainer>
      </Container>
    </>
  );
};
