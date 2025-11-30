import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { CounterBox } from './Counter-box';
import { counters } from '../data/Dumm-Data';

export const CounterSection = () => {

  return (
    <section className="counter-section text-center py-5">
      <Container>
        <Row className="justify-content-center g-4">
          {counters.map((item, index) => (
            <Col key={index} xs={6} sm={6} md={3}>
              <CounterBox number={item.number} label={item.label} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
