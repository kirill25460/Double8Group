// import {MainText,Container,HomeText,MainPar,WhyUsText,HomePar,WhyWrap,WhyUsTop,WhyPictures,WhyTextWrap,WhyWrapPictures,PicturesItem,PicturesList, MainPage,HomeList,HomeItem,HomeItemButton,PhoneButton, Wrap, MainPicture} from './HomePage.styled'
// import mainPicture from "images/main.PNG";
import {Container,HomeWrap,HomeText,HomePar,AboutUsPic,Wrap} from "./HomePage.styled";
import man from "images/Untitled-3-removebg-preview 1.png"
// import firstUS from "images/first.jpg";
// import secondUS from "images/second.jpg";
// import thirdUS from "images/third.jpg"
// import { BsFillTelephoneFill} from "react-icons/bs";

export const HomePage = () => {
    return(
    <HomeWrap>
    <Container>
        <Wrap>
        <HomeText>ABOUT US</HomeText>
    <HomePar>Optional text about itOptional text about itOptional text about itOptional text about itOptional text about it
        Optional text about Opbout itOptional text about itOptional text about itOptional text about itOptio\
        text about itOptional text about Optional text about itOptional text about itOptional text about itOptional text about it
        Optio\Optional text about itOptional text about itOptional text abtional text about itOptional text about Optional text about it
        Optional text abouonal text about itOptional text about</HomePar>
        </Wrap>
   
    <AboutUsPic src={man} alt="Man"/>




    </Container>
    </HomeWrap>
    )
}