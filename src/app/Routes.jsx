import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../features/home/pages/Home';
import StartScreen from '../features/start/Start';
import { DemandsScreen } from '../features/demands/pages/demands';
import { WhoUs } from '../features/who us/pages/WhoUs';
import ContactPage from '../features/contactUs/pages/ContactPage';


export default function AppRoutes() {
  return (
      <Routes>
         {/* أول Route يخلي / تروح لـ /start */}
      <Route path="/" element={<Navigate to="/start" replace />} />

      <Route path="/start" element={<StartScreen />} />
      <Route path="/home" element={<Home />} />
      <Route path='/demands' element={<DemandsScreen />} />
      <Route path="*" element={<Navigate to="/start" replace />} />
      <Route path='/who-us' element={<WhoUs />} />
      <Route path='/contact' element={<ContactPage />} />
      </Routes>
  );
}