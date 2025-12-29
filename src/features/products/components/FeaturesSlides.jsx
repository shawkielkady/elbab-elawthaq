import React, { useRef, useEffect } from "react";
import ProductCard from "./productCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../products.css";

export default function FeaturedSlider({ products }) {
  const sliderRef = useRef(null);

const scroll = (direction) => {
  const slider = sliderRef.current.querySelector(".horizontal-slider");
  const scrollAmount = direction === "left" ? -300 : 300;
  slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
};

  // Auto scroll
  useEffect(() => {
    const slider = sliderRef.current;
    const interval = setInterval(() => {
      if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
        slider.scrollLeft = 0;
      } else {
        slider.scrollBy({ left: 2, behavior: "smooth" });
      }
    }, 16); // ~60fps

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="featured-slider-section py-4 position-relative">
      <h2 className="text-center mb-4">العروض المميزة</h2>
     <div className="slider-container position-relative">
  <button className="arrow left" onClick={() => scroll("left")}>
    <FaChevronLeft />
  </button>

  <div className="horizontal-slider-wrapper overflow-hidden" ref={sliderRef}>
    <div className="horizontal-slider d-flex gap-3">
      {products.map(p => (
        <div className="slider-item flex-shrink-0" key={p.id}>
          <ProductCard product={p} />
        </div>
      ))}
    </div>
  </div>

  <button className="arrow right" onClick={() => scroll("right")}>
    <FaChevronRight />
  </button>
</div>

    </section>
  );
}
