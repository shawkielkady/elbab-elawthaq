import React from 'react'
import { whoUsCategoriesData } from '../../../data/Dumm-Data'
import { Container, Row , Col } from 'react-bootstrap'
import { ProductCard } from '../../../components/Product-Card'
/**
* @author
* @function CategoryiesSecWhoUs
**/

export const CategoryiesSecWhoUs = ({address , id}) => {
  return(
   <section id={id} className="special-units-section text-center py-5">
      <Container>
        <h1 className="mb-5">  {address}</h1>
        <Row className="justify-content-center g-4">
          {whoUsCategoriesData.map((category) => (
            <Col key={category.id} xs={12} sm={6} md={3}>
              <ProductCard productimg={category.img} productName={category.name} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
   )
  }
