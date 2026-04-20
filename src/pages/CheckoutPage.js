import { Container, Button, Form } from "react-bootstrap";

function CheckoutPage({ setCart }) {
    return (
        <Container className="mt-4">
            <h2>Checkout</h2>

            <p>Please enter your information to complete the order.</p>

            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter your address" />
                </Form.Group>

                <Button
                    variant="success"
                    onClick={() => {
                        alert("Order placed successfully!");
                        setCart([]);
                    }}
                >
                    Place Order
                </Button>
            </Form>
        </Container>
    );
}

export default CheckoutPage;