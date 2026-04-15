import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactInfo from "./ContactInfo";
import ContactMap from "./ContactMap";
import colors from "../../../../assets/styles/colors";

export default function ContactSection() {
  return (
    <section
      className="py-5 text-end"
      style={{ backgroundColor: "white", overflow: "hidden" }}
    >
      <Container>
        <h2
          className="fw-bold mb-4 text-center "
          style={{ color: colors.gold }}
        >
          تواصل معنا
        </h2>
        <p className="text-center text-muted mb-5">
          نحن في مؤسسة الباب الأوثق، سعداء دائمًا بخدمتك. يمكنك التواصل معنا من
          خلال الوسائل التالية.
        </p>
        <Row className="align-items-start g-5">
          <Col xs={12} md={6}>
            <ContactInfo />
          </Col>
          <Col xs={12} md={6}>
            <ContactMap />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
