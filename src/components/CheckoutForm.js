import { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";

function CheckoutForm({ cart, coupon, placeOrder }) {
    const [name, setName] = useState("");
    const [pickupTime, setPickupTime] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !pickupTime) {
            alert("Please enter your name and pickup time.");
            return;
        }

        placeOrder({ name, pickupTime });
    };

    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const discount = coupon ? subtotal * coupon.discount : 0;
    const total = subtotal - discount;

    return (
        <Card className="mb-3">
            <Card.Body>
                <Card.Title>Pickup Information</Card.Title>

                <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="customerName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                />
                </Form.Group>

                <Form.Group className="mb-3" controlId="pickupTime">
                    <Form.Label>Pickup Time</Form.Label>
                    <Form.Control
                    type="time"
                    value={pickupTime}
                    onChange={(e) => setPickupTime(e.target.value)}
                />
                </Form.Group>

                <p><strong>Total:</strong> ${total.toFixed(2)}</p>

                    <Button type="submit" variant="success">
                        Place Order
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default CheckoutForm;