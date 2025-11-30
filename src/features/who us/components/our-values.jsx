import React from 'react';
import { ValueCard } from './ValueCard';
import '../whous.css'

/**
* @author
* @function OurValuesSec
**/

const valuesData = [
  {
    icon: "fa-gem",
    title: "الجودة",
    description:
      "نلتزم بتقديم أعلى معايير الخدمات النسويقية لضمان رضا عملائنا.",
  },
  {
    icon: "fa-handshake",
    title: "الالتزام",
    description:
      "نحترم وعودنا ونسعى لتحقيق أهدافنا في الوقت المحدد وبكفاءة عالية.",
  },
  {
    icon: "fa-lightbulb",
    title: "الابتكار",
    description:
      " نبتكر في كل مرحلة من مراحل العمل لنقدم حلولًا جديدة وفعالة في مجال التسويق العقاري.",
  },
  {
    icon: "fa-users",
    title: "رضا العملاء",
    description:
      "عملاؤنا هم محور اهتمامنا، ونسعى لبناء علاقات طويلة مبنية على الثقة.",
  },
];

export const ValuesSection = () => {
  return (
    <section className="bg-white py-20 text-center values-section">
      <div className="max-w-7xl mx-auto px-6 container">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-yellow-600 mb-3">قيمنا</h2>
          <p className="text-gray-600 text-base">
            نسترشد بمجموعة من القيم التي تشكّل أساس عملنا وتوجّه خطواتنا نحو النجاح.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-center">
          {valuesData.map((value, index) => (
            <ValueCard key={index} {...value} />
          ))}
        </div>
      </div>
    </section>
  );
};
