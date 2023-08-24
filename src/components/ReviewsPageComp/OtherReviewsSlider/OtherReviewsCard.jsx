import {
  Container,
  Avatar,
  ListWrap,
  ItemWrap,
  UserWrap,
  ButtonReview,
} from './OtherReviews.styled';

export const OtherReviewsCard = ({ body, type,photomessage, user: { username, avatar } }) => {
  return (
    <>
      <Container>
        
        <ListWrap>
          <ItemWrap>
            <Avatar src={avatar} alt="User avatar" width="48" />
            <UserWrap>
              <p> {username}</p>
              <p> {type}</p>
            </UserWrap>
          </ItemWrap>
          <img src={photomessage} alt="user p review"/>
          <p> {body}</p>
          <ButtonReview>Read Full Review</ButtonReview>
        </ListWrap>
      </Container>
    </>
  );
};
