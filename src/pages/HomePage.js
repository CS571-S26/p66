import { Container, Row, Col } from "react-bootstrap";
import MenuItemCard from "../components/MenuItemCard";

function HomePage({ addToCart }) {
    const menu = [
        { name: "Americano", price: 4 },
        { name: "Latte", price: 5 },
        { name: "Croissant", price: 6 }
    ];

    return (
        <Container className="mt-4">
            <h2 className="mb-4">Cafe Menu</h2>
            <Row>
                {menu.map(item => (
                    <Col md={4} key={item.name}>
                        <MenuItemCard item={item} addToCart={addToCart} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default HomePage;