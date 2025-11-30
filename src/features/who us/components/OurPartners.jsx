import React from "react";
import "../whous.css";

export const PartnersSection = () => {
  const partners = [
    { name: "Partners", icon: "fa-handshake" },
    { name: "BrandName", icon: "fa-gem" },
    { name: "Company", icon: "fa-building" },
    { name: "Letters", icon: "fa-envelope" },
  ];

  return (
    <section className="partners-section">
      <div className="container">
        <h2 className="section-title">شركاؤنا في النجاح</h2>

        <div className="partners-grid">
          {partners.map((partner, index) => (
            <div key={index} className="partner-card">
              <i className={`fa-solid ${partner.icon}`}></i>
              <span>{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
