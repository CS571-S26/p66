import { Navbar, Nav, Container, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavigationBar({ cartCount }) {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
            <Navbar.Brand as={Link} to="/">Cafe App</Navbar.Brand>
            <Navbar.Toggle aria-controls="main-navigation" />
            <Navbar.Collapse id="main-navigation">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Menu</Nav.Link>
                    <Nav.Link as={Link} to="/cart">
                        Cart <Badge bg="secondary">{cartCount}</Badge>
                    </Nav.Link>
                    <Nav.Link as={Link} to="/checkout">Checkout</Nav.Link>
                    <Nav.Link as={Link} to="/orders">Orders</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;