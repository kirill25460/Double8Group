
import {Container,TryCardPhoto,WrapAvatar,AvatarCard,WrapCard,TryButtonReview} from "./TryCard.styled";
import avatar from "images/avatar1.png";
import CardPhoto from "images/Rectangle.png";

export const ReviewCard = () => {
  return (
 <>
<Container>
  <WrapCard>
  <WrapAvatar>
  <AvatarCard src={avatar} alt="av"/>
  <div>
  <p>Marcus, 45</p>
  <p>Type of service</p>
  </div>
  </WrapAvatar>
<TryCardPhoto src={CardPhoto} alt="ph"/>
<p>An open feedback system and an honest evaluation of work are, in our opinion, the main tools for growth and development. 
  Text text Text text Text text Text text Text text Text Text text Text Text text Text Text text Text Text text 
  Text Text text Text ... Text text Text Text text Text ... Text text Text Text text Text ...</p>
  <TryButtonReview>Read Full Review</TryButtonReview>
  </WrapCard>
  
</Container>

 </>
  );
}