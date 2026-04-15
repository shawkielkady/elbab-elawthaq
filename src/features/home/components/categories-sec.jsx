import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import colors from "../../../assets/styles/colors";
import {
  FaHome,
  FaExchangeAlt,
  FaWarehouse,
  FaLeaf,
  FaKey,
} from "react-icons/fa";

export const CategoriesSection = () => {
  const navigate = useNavigate();
  const categories = [
    { id: 1, title: "بيع", icon: <FaKey size={35} /> },
    { id: 2, title: "إيجار", icon: <FaHome size={35} /> },
    { id: 3, title: "بدل", icon: <FaExchangeAlt size={35} /> },
    { id: 4, title: "قسائم صناعية", icon: <FaWarehouse size={35} /> },
    { id: 5, title: "مزارع", icon: <FaLeaf size={35} /> },
  ];

  return (
    <section className="categories-section py-5">
      <Container>
        <h2 className="text-center mb-4 fw-bold" style={{ color: colors.gold }}>
          عروضنا العقارية{" "}
        </h2>

        <Row className="g-6  justify-content-center my-3">
          {categories.map((cat) => (
            <Col key={cat.id} xs={6} sm={6} md={4} lg={2} className="mt-4">
              <div
                className="category-card text-center p-3 my-3"
                onClick={() => navigate(`/categories/${cat.id}`)}
              >
                <div className="icon">{cat.icon}</div>
                <h5 className="mt-2">{cat.title}</h5>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
