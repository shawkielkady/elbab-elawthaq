import React, { useState } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "../products.css";

import productImg from "../../../assets/images/villa.jpg";
import productImgg from "../../../assets/images/tower.jpg";


/* ===== STATIC DATA ===== */
const PRODUCTS = [
  {
    id: 1,
    title: "فيلا فاخرة",
    price: "250,000 د.ك",
    description:
      "فيلا فاخرة بمساحة واسعة، تصميم عصري، تشطيب سوبر لوكس، تطل على البحر مباشرة، مناسبة للسكن العائلي أو الاستثمار.",
    images: [productImg, productImgg, productImg],
    sold: false,
    categoryId: 1,
  },
  {
    id: 2,
    title: "شقة راقية",
    price: "120,000 د.ك",
    description:
      "شقة حديثة في موقع مميز، قريبة من جميع الخدمات، تشطيب فاخر، مناسبة للسكن الفوري.",
    images: [productImg, productImg],
    sold: true,
    categoryId: 1,
  },
  {
    id: 3,
    title: "دوبلكس مميز",
    price: "180,000 د.ك",
    description:
      "دوبلكس بتقسيم ذكي، إضاءة طبيعية ممتازة، تصميم عملي يناسب العائلات.",
    images: [productImg],
    sold: false,
    categoryId: 1,
  },
];

export default function SingleProductScreen() {
  const { id } = useParams();
  const product = PRODUCTS.find((p) => p.id === Number(id));

  const [activeImg, setActiveImg] = useState(product.images[0]);
  const [showLightbox, setShowLightbox] = useState(false);
  const [fav, setFav] = useState(false);

  const similarProducts = PRODUCTS.filter(
    (p) => p.categoryId === product.categoryId && p.id !== product.id
  );

  return (
    <Container className="py-5 single-product">
      <Row className="g-5">
        {/* ===== LEFT: IMAGES ===== */}
        <Col md={6}>
          <div
            className="main-img zoom-wrapper"
            onClick={() => setShowLightbox(true)}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = ((e.clientX - rect.left) / rect.width) * 100;
              const y = ((e.clientY - rect.top) / rect.height) * 100;
              e.currentTarget.querySelector("img").style.transformOrigin = `${x}% ${y}%`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.querySelector("img").style.transformOrigin =
                "center";
            }}
          >
            <img src={activeImg} alt={product.title} className="zoom-img" />
            {product.sold && <span className="sold-badge">مباع</span>}
          </div>

          <div className="thumbs mt-3">
            {product.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt=""
                className={activeImg === img ? "active" : ""}
                onClick={() => setActiveImg(img)}
              />
            ))}
          </div>
        </Col>

        {/* ===== RIGHT: INFO ===== */}
        <Col md={6}>
          <h2 className="mb-3">{product.title}</h2>
          <h4 className="price mb-4">{product.price}</h4>

          <p className="description">{product.description}</p>

          <div className="actions">
            <Button className="btn-main">احجز الآن</Button>
            <Button
              variant="outline-dark"
              className={`fav-btn ${fav ? "active" : ""}`}
              onClick={() => setFav(!fav)}
            >
              {fav ? "★ مفضل" : "☆ إضافة للمفضلة"}
            </Button>
          </div>
        </Col>
      </Row>

      {/* ===== SIMILAR PRODUCTS ===== */}
      <div className="mt-5">
        <h4 className="mb-3">منتجات مشابهة</h4>
        <div className="similar-slider">
          {similarProducts.map((p) => (
            <div key={p.id} className="similar-card">
              <img src={p.images[0]} alt={p.title} />
              {p.sold && <span className="sold-badge small">مباع</span>}
              <h6>{p.title}</h6>
              <span>{p.price}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ===== LIGHTBOX ===== */}
      <Modal
        show={showLightbox}
        onHide={() => setShowLightbox(false)}
        centered
        size="lg"
      >
        <Modal.Body className="p-0">
          <img src={activeImg} alt="" className="w-100 lightbox-img" />
        </Modal.Body>
      </Modal>
    </Container>
  );
}