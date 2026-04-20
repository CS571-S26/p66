import { Card } from "react-bootstrap";

function CartItem({ item }) {
    return (
        <Card className="mb-3">
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>Quantity: {item.quantity}</Card.Text>
                <Card.Text>Subtotal: ${item.quantity * item.price}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default CartItem;