import {
  Container,
  BookUsTxt,
  BookUsBtn,
  PicToolsL,
  PicToolsR,
  StyledLink,
  BookUsList,
  BookUsItem,
  ItemText,
  ButPicContainer,
} from './BookUsHomeP.styled';
import Left from 'images/HammerL.png';
import Right from 'images/HammerR.png';

export const BookUsHomeP = () => {
  return (
    <>
      <Container>
        <BookUsTxt>Trust us your air duct cleaning</BookUsTxt>
        <BookUsList>
          <BookUsItem><ItemText>Affordable prices</ItemText></BookUsItem>
          <BookUsItem><ItemText>No hidden fees</ItemText></BookUsItem>
          <BookUsItem><ItemText>On-time and reliable</ItemText></BookUsItem>
          <BookUsItem><ItemText>Highest Quality work</ItemText></BookUsItem>
        </BookUsList>
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
