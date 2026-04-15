import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../features/home/pages/Home';
import StartScreen from '../features/start/Start';
import { DemandsScreen } from '../features/demands/pages/demands';
import { WhoUs } from '../features/who us/pages/WhoUs';
import ContactPage from '../features/contactUs/pages/ContactPage';
import LoginPage from '../features/admin/adminlogin/pages/LoginPage';
import AdminLayout from '../features/admin/pages/adminlayout';
import Dashboard from '../features/admin/pages/dashboard';
import AdminProductsPage from '../features/admin/pages/adminProducts';
import CategoriesPage from '../features/categories/pages/categoiesScreen';
import SubCategoriesScreen from '../features/subCategories/pages/SubCategoriesScreen';
import CategoryProductsPage from '../features/products/pages/ProdutsScreen';
import SingleProductScreen from '../features/products/pages/SingleProductScreen';


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
      <Route path="/categories" element={<CategoriesPage />} />
      {/* Category → SubCategories */}
      <Route path="/categories/:id" element={<SubCategoriesScreen />} />
      {/* SubCategory → Products */}
      <Route path="/sub-categories/:subId/products" element={<CategoryProductsPage />} />
<Route path="/product/:id" element={<SingleProductScreen />} />

       <Route path="/admin/login" element={<LoginPage />} />
         <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
           <Route path="adminProducts" element={<AdminProductsPage />} /> 
          {/* <Route path="categories" element={<CategoriesPage />} />
          <Route path="subcategories" element={<SubcategoriesPage />} />
         */}
        </Route>
      </Routes>
  );
}