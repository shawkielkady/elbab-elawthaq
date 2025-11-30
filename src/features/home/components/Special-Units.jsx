import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { ProductCard } from '../../../components/Product-Card';
import { specialProducts } from '../../../data/Dumm-Data';

export const SpecialUnits = ({id,address}) => {

  console.log(specialProducts);
  return (
    <section id={id} className="special-units-section text-center py-5">
      <Container>
        <h1 className="mb-5">  {address}</h1>
        <Row className="justify-content-center g-4">
          {specialProducts.map((product) => (
            <Col key={product.id} xs={12} sm={6} md={4}>
              <ProductCard productimg={product.img} productName={product.name} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};