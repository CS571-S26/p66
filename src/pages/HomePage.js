import { Container, Row, Col } from "react-bootstrap";
import MenuItemCard from "../components/MenuItemCard";

function HomePage() {
    return (
        <Container className="mt-4">
            <h2 className="mb-4">Cafe Menu</h2>
            <Row>
                <Col md={4}>
                <MenuItemCard name="Americano" price={4} />
                </Col>
                <Col md={4}>
                <MenuItemCard name="Latte" price={5} />
                </Col>
                <Col md={4}>
                <MenuItemCard name="Croissant" price={6} />
                </Col>
            </Row>
        </Container>
    );
}

export default HomePage;