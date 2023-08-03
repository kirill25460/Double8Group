import {HomePage} from "./HomePage/HomePage"
import { Header } from "./Header/Header";
import { Navigation } from "./Navigation/Navigation";
import {Footer} from "./Footer/Footer"
import {Global} from "./Global.styled"
import background from '../images/fon1.jpg'


export const App = () => {
  return (
  <div>  
    
    <Header/>
    <Global style={{ backgroundImage: `url(${background})`, }}>
      <div style={{}}>
      <Navigation/>
    <HomePage/>
      </div>
    </Global>
    <Footer/>
  
  </div>

  );
};
