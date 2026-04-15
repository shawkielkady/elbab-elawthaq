import React from "react";
import { FaChevronLeft } from "react-icons/fa";

export default function SubCategoryCard({ title, desc, count, icon: IconComponent, onClick, delay = 0 }) {
  return (
    <div
      className="sub-cat-card"
      onClick={onClick}
      style={{ "--delay": `${delay}s` }}
    >
      {/* Icon circle */}
      <div className="sub-cat-icon-wrap">
        <IconComponent />
      </div>

      {/* Text */}
      <h4>{title}</h4>
      <p>{desc}</p>

      {/* Count badge */}
      <div className="sub-cat-count">
        <span className="sub-cat-arrow">
          <FaChevronLeft size={10} />
        </span>
        {count}+ وحدة
      </div>
    </div>
  );
}
