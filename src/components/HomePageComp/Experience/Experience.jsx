import {
  Container,
  ExpPic,
  ExpTtl,
  ExpTtl2,
  ExpTtl3,
  ExpList,
  ExpItem,
  ExpItTtl1,
  ExpItText1,
  ExpItTtl2,
  ExpItText2,
  ExpItTtl3,
  ExpItText3,
  UnderLane,
} from './Experience.styled';
import Exp1 from 'images/Experience1.png';
import Exp2 from 'images/Experience2.png';
import Exp3 from 'images/Experience3.png';

export const Experience = () => {
  return (
    <>
      <Container>
        <ExpTtl>Improve your homes air quality</ExpTtl>
        <ExpTtl2>Call us to schedule service or request a free estimate</ExpTtl2>
        <ExpTtl3>We speak English, Russian, Ukrainian and Romanian</ExpTtl3>
        <ExpList>
          <ExpItem>
            <ExpPic src={Exp1} alt="Exp1" />
            <ExpItTtl1>Why choose us?</ExpItTtl1>
            <ExpItText1>
              We are a fully insured and licensed company. We have affordable
              prices, provide high-quality service, and use the best industrial
              tools. Call us today to book our services and start breathing
              fresher air.
            </ExpItText1>
          </ExpItem>
          <ExpItem>
            <ExpPic src={Exp2} alt="Exp2" />
            <ExpItTtl2>Working together</ExpItTtl2>
            <ExpItText2>
              Our service starts with a dialog between the client and our tech.
              We discuss the working process, budgeting, and on-site
              organization before proceeding to work.
            </ExpItText2>
          </ExpItem>
          <ExpItem>
            <ExpPic src={Exp3} alt="Exp3" />
            <ExpItTtl3>Our professionals</ExpItTtl3>
            <ExpItText3>
              We care about our customers and the services we provide. Our team
              consists of trustworthy professionals who will get the job done on
              time and at the highest quality.
            </ExpItText3>
          </ExpItem>
        </ExpList>

        <UnderLane> </UnderLane>
      </Container>
    </>
  );
};
