import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { categories } from "../../../data/Dumm-Data";
import CategoryCard from "../components/categoryCard";
import '../categories.css'

export default function CategoriesPage() {
  const nav = useNavigate();

  return (
    <section className="py-5">
      <Container>
        <h2 className="text-center mb-5">الأقسام العقارية</h2>

        <Row className="g-4 justify-content-center">
          {categories.map((cat) => (
            <Col lg={4} md={6} sm={12} key={cat.id}>
              <CategoryCard
                {...cat}
                onClick={() => nav(`/categories/${cat.id}`)}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
