import React from "react";

export default function ContactMap() {
  return (
    <div className="text-center">
      <h3 className="mb-3 fw-bold">موقعنا على الخريطة</h3>
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3483.7027441604923!2d48.094913774595106!3d29.173430659314473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf0b2f3577f253%3A0x9e55cfb59e4c23ac!2z2YXYpNiz2LPYqSDYp9mE2KjYp9ioINin2YTYp9mI2KvZgiDYp9mE2LnZgtin2LHZiQ!5e0!3m2!1sen!2seg!4v1762599799367!5m2!1sen!2seg"
        width="100%"
        height="300"
        style={{ border: 0, borderRadius: "12px" }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}
