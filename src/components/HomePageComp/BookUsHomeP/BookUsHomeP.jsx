import {
  Container,
  BookUsTxt,
  BookUsBtn,
  StyledLink,
  BookUsList,
  BookUsItem,
  ItemText,
} from './BookUsHomeP.styled';


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
          <StyledLink to="/contact_us">
            <BookUsBtn>Work with us</BookUsBtn>
          </StyledLink>


      </Container>
    </>
  );
};
