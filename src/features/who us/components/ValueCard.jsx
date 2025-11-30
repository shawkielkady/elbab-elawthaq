import React from "react";
import '../whous.css'


export const ValueCard = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition text-center ">
      {/* Icon + Title inline */}
      <div className="flex items-center justify-center gap-3 mb-4 title-row">
        <div className="icon-circle">
          <i className={`fa-solid ${icon} text-2xl`}></i>
        </div>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>

      <p className="text-gray-600 text-sm leading-relaxed" style={{fontSize:'1.2rem'}}>{description}</p>
    </div>
  );
};
