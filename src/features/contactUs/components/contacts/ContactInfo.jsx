import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import SocialIcons from "../SocialIcons";

export default function ContactInfo() {
  return (
    <div className="text-end">
      <h3 className="mb-3 fw-bold">معلومات التواصل</h3>
      <p>
        <FaPhone className="ms-2 text-warning" /> +96560993838
      </p>
      <p>
        <FaEnvelope className="ms-2 text-warning" /> www.elbab-alawthaq.com
      </p>
      <p>
        <FaMapMarkerAlt className="ms-2 text-warning" /> العقيلة - الكويت
      </p>
      <p>
        <FaWhatsapp className="ms-2 text-success" />
        <a
          href="https://wa.me/+96560993838"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none", color: "black" }}
        >
          {" "}
          تواصل عبر واتساب
        </a>{" "}
      </p>
      <SocialIcons />
    </div>
  );
}
