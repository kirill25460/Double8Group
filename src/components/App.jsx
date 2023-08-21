import { Routes, Route } from 'react-router-dom';
import SharedLayout from  "./SharedLayout";
// import { Header } from "./Header/Header";
import { HomePage } from "pages/HomePage/HomePage";
import { ReviewsPage } from 'pages/Reviews/ReviewsPage';
import { BookUsPage } from 'pages/BookUs/BookUsPage';
import { ContactsPage } from 'pages/Contacts/ContactsPage';
import { AirDuctPage } from 'pages/AirDuctService/AirDuctPage';
// import { Navigation } from "./Navigation/Navigation";
// import {Footer} from "./Footer/Footer"
// import {Global} from "./Global.styled"



export const App = () => {
  return (
<>  
  
  <Routes>
  <Route path='/' element={<SharedLayout/>}>
    <Route index element={<HomePage/>}/>
    <Route path="reviews" element={<ReviewsPage/>}/>
    <Route path="book_us" element={<BookUsPage/>}/>    
    <Route path="contacts" element={<ContactsPage/>}/>
    <Route path="air_duct" element={<AirDuctPage/>}/>
    <Route path="*" element={<HomePage/>}/>
 
  </Route>
  </Routes>
  
</>

  );
};
