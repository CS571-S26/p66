import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavigationBar() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
                <Navbar.Brand as={Link} to="/">Cafe App</Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;