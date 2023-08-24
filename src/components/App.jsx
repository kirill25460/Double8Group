import { Routes, Route } from 'react-router-dom';
import SharedLayout from './SharedLayout';
// import { Header } from "./Header/Header";
import { HomePage } from 'pages/HomePage/HomePage';
import { ReviewDetails } from 'pages/ReviewDetails/ReviewDetails';

// import { Navigation } from "./Navigation/Navigation";
// import {Footer} from "./Footer/Footer"
// import {Global} from "./Global.styled"

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="reviews" />
          <Route path="book_us" />
          <Route path="contacts" />
          <Route path="air_duct" />
          <Route path="chimney_cleaning"/>
          <Route path="bathroom_fan_cleaning"/>
          <Route path="power_washing"/>
        </Route>
        <Route path="reviews/:id" element={<ReviewDetails />}/>
      </Routes>
    </>
  );
};
