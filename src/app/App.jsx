import './App.css';
import { useLocation } from 'react-router-dom';
import AppRoutes from './Routes';
import TopNav from '../components/Header';
import Footer from '../components/Footer';

function App() {
  const location = useLocation();

  // الصفحات اللي مش عايز يظهر فيها الـ Header
  const noHeaderRoutes = ['/start', '/login', '/splash']; 

  const hideHeader = noHeaderRoutes.includes(location.pathname);

  return (
    <>
      {!hideHeader && <TopNav />}  {/* يظهر الهيدر إلا لو الصفحة من ضمن اللي فوق */}
      <AppRoutes />
      {!hideHeader && <Footer />}
    </>
  );
}

export default App;
