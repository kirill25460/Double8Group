import {Container,BookUsTxt,BookUsPar,BookUsBtn,PicToolsL,PicToolsR} from "./BookUsHomeP.styled";
import Left from "images/HammerL.png";
import Right from "images/HammerR.png";




export const BookUsHomeP = () => {
    return(
    <>
    <Container>
   
      <BookUsTxt>
      Let’s Start Your New Project!
      </BookUsTxt>
      <BookUsPar>
      THE MANAGER WILL CONTACT YOU TO CLARIFY YOUR ORDER IN NO MORE THAN 5 MINUTES!
      </BookUsPar>
      <div>
      <PicToolsL src={Left} alt="Logo" />
      <BookUsBtn>Book Us</BookUsBtn>
      <PicToolsR src={Right} alt="Logo" />
      </div>
      
    </Container>
    </>
    )
}