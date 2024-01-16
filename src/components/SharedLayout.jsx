import {Header} from "components/Header/Header";
import {Footer} from "components/Footer/Footer";
import { HomePage } from "pages/HomePage/HomePage";

import { AirDuctPage } from "pages/ServicesPages/AirDuctPage";
import { PowerWashingPage } from "pages/ServicesPages/PowerWashingPage";
import { BathroomFanCleaningPage } from "pages/ServicesPages/BathroomFanCleaningPage";
import { ChimneyCleaningPage } from "pages/ServicesPages/ChimneyCleaningPage";

import { useLocation } from "react-router-dom";
import { DryerVentCleaningPage } from "pages/ServicesPages/DryerVentCleaningPage";


const SharedLayout = () => {
  const location = useLocation()

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
    
      {location.pathname === '/' && <HomePage />}
      {location.pathname === '/air_duct' && <AirDuctPage/>}
      {location.pathname === '/dry_vent' && <DryerVentCleaningPage/>}
      {location.pathname === '/chimney_cleaning' && <ChimneyCleaningPage/>}
      {location.pathname === '/bathroom_fan_cleaning' && <BathroomFanCleaningPage/>}
      {location.pathname === '/power_washing' && <PowerWashingPage/>}

      <Footer />
     
    </div>
  );
};

export default SharedLayout;