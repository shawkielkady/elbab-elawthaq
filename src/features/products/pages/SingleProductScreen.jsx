import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../../../data/Dumm-Data";
import "../products.css";

export default function SingleProductScreen() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === Number(id));

  // State
  const [activeImg, setActiveImg] = useState("");
  const [showLightbox, setShowLightbox] = useState(false);
  const [fav, setFav] = useState(false);

  // Initialize active image when product is found
  useEffect(() => {
    if (product) {
      if (product.imgs && product.imgs.length > 0) {
        setActiveImg(product.imgs[0]);
      } else if (product.img) {
        setActiveImg(product.img);
      }
    }
  }, [product]);

  if (!product) {
    return (
      <Container className="py-5 text-center">
        <h2>عذراً، المنتج غير موجود</h2>
        <Button className="mt-4 btn-main" onClick={() => navigate("/home")}>
          العودة للرئيسية
        </Button>
      </Container>
    );
  }

  const productImages = product.imgs || (product.img ? [product.img] : []);

  const similarProducts = products.filter(
    (p) => p.catId === product.catId && p.id !== product.id,
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
              const img = e.currentTarget.querySelector("img");
              if (img) img.style.transformOrigin = `${x}% ${y}%`;
            }}
            onMouseLeave={(e) => {
              const img = e.currentTarget.querySelector("img");
              if (img) img.style.transformOrigin = "center";
            }}
          >
            <img src={activeImg} alt={product.title} className="zoom-img" />
            {product.sold && <span className="sold-badge">مباع</span>}
          </div>

          <div className="thumbs mt-3">
            {productImages.map((img, i) => (
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
      {similarProducts.length > 0 && (
        <div className="mt-5">
          <h4 className="mb-3">منتجات مشابهة</h4>
          <div className="similar-slider">
            {similarProducts.map((p) => (
              <div
                key={p.id}
                className="similar-card"
                onClick={() => {
                  navigate(`/product/${p.id}`);
                  window.scrollTo(0, 0);
                }}
                style={{ cursor: "pointer" }}
              >
                <img src={p.img} alt={p.title} />
                {p.sold && <span className="sold-badge small">مباع</span>}
                <h6>{p.title}</h6>
                <span>{p.price}</span>
              </div>
            ))}
          </div>
        </div>
      )}

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
