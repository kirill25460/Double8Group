import MySlider from "components/Slider/Slider";
import { AboutUs } from "components/HomePageComp/AboutUs/AboutUs";
import {Experience} from "components/HomePageComp/Experience/Experience";
import {BookUsHomeP} from "components/BookUsHomeP/BookUsHomeP";


export const HomePage = () => {
    return(
    <>
      <MySlider/>
      <AboutUs/>
      <Experience/>
      <BookUsHomeP/>
    </>
    )
}