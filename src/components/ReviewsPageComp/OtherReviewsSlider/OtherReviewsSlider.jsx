import { getReviews, getReviewsById } from 'helper/api';
import {
  Container,
  Avatar,
  ListWrap,
  ItemWrap,
  UserWrap,
} from './OtherReviews.styled';

export const OtherReviewsSlider = ({ body, type, user: { username, avatar } }) => {

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
          <p> Message : {body}</p>
        </ListWrap>
      </Container>
    </>
  );
};
