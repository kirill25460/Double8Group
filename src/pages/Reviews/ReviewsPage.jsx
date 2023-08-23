import example from 'example.json';
import { Container } from 'components/Global.styled';
import { ShareExperience } from 'components/ReviewsPageComp/ShareExperience/ShareExperience';
import { OtherReviewsSlider } from 'components/ReviewsPageComp/OtherReviewsSlider/OtherReviewsSlider';
import {OtherReviewsText} from 'components/ReviewsPageComp/OtherReviewsText/OtherReviewsText';
// import {SimpleSlider} from "components/ReviewsPageComp/OtherReviewsSlider/TrySlider";
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
