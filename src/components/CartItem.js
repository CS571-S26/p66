import { Card } from "react-bootstrap";

function CartItem({ name, quantity, price }) {
    return (
        <Card className="mb-3">
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>Quantity: {quantity}</Card.Text>
            <Card.Text>Subtotal: ${quantity * price}</Card.Text>
        </Card.Body>
        </Card>
    );
}

export default CartItem;