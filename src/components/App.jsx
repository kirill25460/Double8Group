import { Routes, Route } from 'react-router-dom';
import SharedLayout from './SharedLayout';
import { HomePage } from 'pages/HomePage/HomePage';


export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="*" element={<HomePage />} />
          <Route path="air_duct" />
          <Route path="chimney_cleaning"/>
          <Route path="bathroom_fan_cleaning"/>
          <Route path="power_washing"/>
          <Route path="dry_vent"/>
        </Route>
        
      </Routes>
    </>
  );
};
