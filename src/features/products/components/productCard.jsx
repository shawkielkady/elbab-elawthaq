import React from "react";
import { Button } from "react-bootstrap";
import "../products.css";

export default function ProductCard({ product }) {
  return (
    <div className="product-card p-3 border rounded shadow-sm bg-white">
      <div className="position-relative">
        <img src={product.img} alt={product.title} className="w-100" style={{height:200, objectFit:'cover', borderRadius:'8px'}} />
        {product.sold && (
          <span className="position-absolute top-0 start-0 bg-danger text-white px-2 py-1 rounded">
            تم البيع
          </span>
        )}
      </div>
      <h5 className="mt-2">{product.title}</h5>
      <p className="text-muted">{product.description}</p>
      <p className="fw-bold">{product.price}</p>
      <Button className="w-100 mb-2" variant="gold">عرض التفاصيل</Button>
      <Button className="w-100" variant="outline-dark">مفضلة ❤️</Button>
    </div>
  );
}
