import React from "react";
import FeaturedSlider from "../components/FeaturesSlides";
import ProductsGrid from "../components/ProductsCard";
import { products } from "../../../data/Dumm-Data";
import '../products.css'

export default function ProductsPage() {
  const featured = products.slice(0,5);

  return (
    <div>
        <div className="container">

      <FeaturedSlider products={featured} />
      
      <ProductsGrid products={products} />
        </div>
    </div>
  );
}
