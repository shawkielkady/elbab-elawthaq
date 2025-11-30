import React from 'react';
import '../home.css';

import { SliderSection } from '../components/Slider-section.jsx';
import { CounterSection } from '../../../components/Counter-section.jsx';
import { SpecialUnits } from '../components/Special-Units.jsx';
import { CategoryiesSecWhoUs } from '../../who us/components/categoriesSecWhous.jsx';
import { ValuesSection } from '../../who us/components/our-values.jsx';
import ContactSection from '../../contactUs/components/contacts/ContactSection.jsx';
import { CategoriesSection } from '../components/categories-sec.jsx';

export const Home = () => {
  return (
    <>
    <SliderSection/>
    <CounterSection />
    <CategoriesSection />
    {/* <CategoryiesSecWhoUs id='special-units' address=' الوحدات العقارية '/> */}
       <ValuesSection />
       <ContactSection />
    {/* <SpecialUnits id='special-units' address=' الوحدات العقارية المميزة'/> */}
    {/* <SpecialUnits address='  عقارات للبيع '/>
    <SpecialUnits address='  عقارات للإيجار '/>
    <SpecialUnits address='   فيلات '/>

    <SpecialUnits address='  مزارع و استراحات '/> */}

    </>
  );
};
