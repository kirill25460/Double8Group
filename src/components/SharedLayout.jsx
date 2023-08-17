import {Header} from "components/Header/Header";
import {Footer} from "components/Footer/Footer";
import { HomePage } from "pages/HomePage/HomePage";
import { ReviewsPage } from "pages/Reviews/ReviewsPage";
import { ContactsPage } from "pages/Contacts/ContactsPage";
import { BookUsPage } from "pages/BookUs/BookUsPage";
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
      <Footer />
    </div>
  );
};

export default SharedLayout;