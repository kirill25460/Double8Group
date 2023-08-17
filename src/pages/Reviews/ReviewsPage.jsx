import example from 'example.json';
import { Container } from 'components/Global.styled';
import { ShareExperience } from 'components/ShareExperience/ShareExperience';
import { OtherReviews } from 'components/OtherReviews/OtherReviews';
// import {MySlider} from "components/OtherReviews/TryExampleSlide"
export const ReviewsPage = () => {
  return (
    <>
      <ShareExperience />
      <Container>
        {example.comments.map(ex => (
          <OtherReviews user={ex.user} body={ex.body} type={ex.type} />
        ))}
      </Container>
    </>
  );
};
