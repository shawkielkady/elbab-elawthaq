import React from "react";
import { Row, Col, Card } from "react-bootstrap";

export default function Dashboard() {
  return (
    <>
      <h4>أهلاً بك في لوحة الإدارة</h4>
      <p className="text-muted">نظرة سريعة على البيانات التجريبية</p>

      <Row className="g-4">
        <Col md={4}>
          <Card className="p-3">
            <h5>التصنيفات</h5>
            <p className="m-0">عدد: <strong>{JSON.parse(localStorage.getItem("categories") || "[]").length}</strong></p>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="p-3">
            <h5>التصنيفات الفرعية</h5>
            <p className="m-0">عدد: <strong>{JSON.parse(localStorage.getItem("subcategories") || "[]").length}</strong></p>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="p-3">
            <h5>المنتجات</h5>
            <p className="m-0">عدد: <strong>{JSON.parse(localStorage.getItem("products") || "[]").length}</strong></p>
          </Card>
        </Col>
      </Row>
    </>
  );
}
