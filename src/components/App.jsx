import { Routes, Route } from 'react-router-dom';
import { Header } from "./Header/Header";
import { HomePage } from "pages/HomePage/HomePage";
import { ReviewsPage } from 'pages/Reviews/ReviewsPage';
import { BookUsPage } from 'pages/BookUs/BookUsPage';
import { ContactsPage } from 'pages/Contacts/ContactsPage';
// import { Navigation } from "./Navigation/Navigation";
import {Footer} from "./Footer/Footer"
// import {Global} from "./Global.styled"



export const App = () => {
  return (
<>  
  <Header/>
  <Routes>
    <Route path="Home" element={<HomePage/>}/>
    <Route path="Reviews" element={<ReviewsPage/>}/>
    <Route path="Book Us" element={<BookUsPage/>}/>    
    <Route path="Contacts" element={<ContactsPage/>}/>

  </Routes>
  <Footer/>
  
</>

  );
};
