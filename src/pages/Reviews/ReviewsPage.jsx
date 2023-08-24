// import example from 'example.json';
// import { Container } from 'components/Global.styled';
import { ShareExperience } from 'components/ReviewsPageComp/ShareExperience/ShareExperience';
// import { OtherReviewsCard } from 'components/ReviewsPageComp/OtherReviewsSlider/OtherReviewsCard';
import {OtherReviewsText} from 'components/ReviewsPageComp/OtherReviewsText/OtherReviewsText';
// import {ReviewCard} from "components/ReviewsPageComp/OtherReviewsSlider/TryCard";
import SimpleSlider from "components/ReviewsPageComp/OtherReviewsSlider/TrySlider";

export const ReviewsPage = () => {
  
  return (
    <>
      <ShareExperience />
      <OtherReviewsText/>
      {/* <ReviewCard/> */}
      <SimpleSlider/>
      {/* <Container>
        {example.comments.map(ex => (
          <OtherReviewsCard key={ex.id} user={ex.user} body={ex.body} type={ex.type} />
        ))}
      </Container> */}
    </>
  );
};
