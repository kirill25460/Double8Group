import {Container,BookUsTxt,BookUsPar,BookUsBtn,PicToolsL,PicToolsR} from "./BookUsHomeP.styled";
import Left from "images/HammerL.png";
import Right from "images/HammerR.png";




export const BookUsHomeP = () => {
    return(
    <>
    <Container>
        <PicToolsL src={Left} alt="Logo" />
      <BookUsTxt>
      Let’s Start Your New Project!
      </BookUsTxt>
      <BookUsPar>
      THE MANAGER WILL CONTACT YOU TO CLARIFY YOUR ORDER IN NO MORE THAN 5 MINUTES!
      </BookUsPar>
      <BookUsBtn>Book Us</BookUsBtn>
      <PicToolsR src={Right} alt="Logo" />
    </Container>
    </>
    )
}