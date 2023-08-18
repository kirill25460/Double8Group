import example from 'example.json';
import { Container } from 'components/Global.styled';
import { ShareExperience } from 'components/ShareExperience/ShareExperience';
import { OtherReviewsSlider } from 'components/OtherReviewsSlider/OtherReviewsSlider';
import {OtherReviewsText} from 'components/OtherReviewsText/OtherReviewsText'
// import {MySlider} from "components/OtherReviews/TryExampleSlide"
export const ReviewsPage = () => {
  return (
    <>
      <ShareExperience />
      <OtherReviewsText/>
      <Container>
        {example.comments.map(ex => (
          <OtherReviewsSlider user={ex.user} body={ex.body} type={ex.type} />
        ))}
      </Container>
    </>
  );
};
