import {Header} from "components/Header/Header";
import {Footer} from "components/Footer/Footer";
import { HomePage } from "pages/HomePage/HomePage";
import { ReviewsPage } from "pages/Reviews/ReviewsPage";

// import { ContactUsPage } from "pages/BookUs/ContactUsPage";
import { AirDuctPage } from "pages/ServicesPages/AirDuctPage";
import { PowerWashingPage } from "pages/ServicesPages/PowerWashingPage";
import { BathroomFanCleaningPage } from "pages/ServicesPages/BathroomFanCleaningPage";
import { ChimneyCleaningPage } from "pages/ServicesPages/ChimneyCleaningPage";
import { ReviewDetails } from "pages/ReviewDetails/ReviewDetails";
import { useLocation, useParams } from "react-router-dom";
import { DryerVentCleaningPage } from "pages/ServicesPages/DryerVentCleaningPage";


const SharedLayout = () => {
    const { id } = useParams();
    const location = useLocation()

  return (
    <div>
      <Header />
      {location.pathname === '/' && <HomePage />}
      {location.pathname === '/reviews' && <ReviewsPage/>}
      {/* {location.pathname === '/contact_us' && <ContactUsPage/>} */}
      {location.pathname === '/air_duct' && <AirDuctPage/>}
      {location.pathname === '/dry_vent' && <DryerVentCleaningPage/>}
      {location.pathname === '/chimney_cleaning' && <ChimneyCleaningPage/>}
      {location.pathname === '/bathroom_fan_cleaning' && <BathroomFanCleaningPage/>}
      {location.pathname === '/power_washing' && <PowerWashingPage/>}
      {location.pathname === `/reviews/${id}` && <ReviewDetails id = {id}/>}
      <Footer />
    </div>
  );
};

export default SharedLayout;