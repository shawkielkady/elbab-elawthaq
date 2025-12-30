import React, { useState } from "react";
import { Row, Col, Pagination } from "react-bootstrap";
import ProductCard from "./productCard";

export default function ProductsGrid({ products }) {
  const itemsPerPage = 6;
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="py-4">
      <h2 className="text-center mb-4">جميع العروض</h2>
      <Row className="g-4">
        {currentProducts.map(p => (
          <Col key={p.id} md={4} sm={6}>
            <ProductCard product={p} />
          </Col>
        ))}
      </Row>

      <Pagination className="justify-content-center mt-4">
        <Pagination.Prev disabled={page===1} onClick={()=>setPage(page-1)} />
        {[...Array(totalPages)].map((_, i) => (
          <Pagination.Item key={i} active={i+1===page} onClick={()=>setPage(i+1)}>
            {i+1}
          </Pagination.Item>
        ))}
        <Pagination.Next disabled={page===totalPages} onClick={()=>setPage(page+1)} />
      </Pagination>
    </section>
  );
}
