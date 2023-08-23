import {Header} from "components/Header/Header";
import {Footer} from "components/Footer/Footer";
import { HomePage } from "pages/HomePage/HomePage";
import { ReviewsPage } from "pages/Reviews/ReviewsPage";
import { ContactsPage } from "pages/Contacts/ContactsPage";
import { BookUsPage } from "pages/BookUs/BookUsPage";
import { AirDuctPage } from "pages/ServicesPages/AirDuctPage";
import { PowerWashingPage } from "pages/ServicesPages/PowerWashingPage";
import { BathroomFanCleaningPage } from "pages/ServicesPages/BathroomFanCleaningPage";
import { ChimneyCleaningPage } from "pages/ServicesPages/ChimneyCleaningPage";
import { ReviewsDetails } from "../components/ReviewsPageComp/ReviewDetails/ReviewDetails";
import { useLocation } from "react-router-dom";


const SharedLayout = () => {
    const location = useLocation()

  return (
    <div>
      <Header />
      {location.pathname === '/' && <HomePage />}
      {location.pathname === '/reviews' && <ReviewsPage/>}
      {location.pathname === '/contacts' && <ContactsPage/>}
      {location.pathname === '/book_us' && <BookUsPage/>}
      {location.pathname === '/air_duct' && <AirDuctPage/>}
      {location.pathname === '/chimney_cleaning' && <ChimneyCleaningPage/>}
      {location.pathname === '/bathroom_fan_cleaning' && <BathroomFanCleaningPage/>}
      {location.pathname === '/power_washing' && <PowerWashingPage/>}
      {location.pathname === '/reviews/:id' && <ReviewsDetails/>}
      <Footer />
    </div>
  );
};

export default SharedLayout;