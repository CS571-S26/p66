import { Card, Button, ButtonGroup } from "react-bootstrap";

function CartItem({ item, increaseQuantity, decreaseQuantity, removeItem }) {
    return (
        <Card className="mb-3">
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>Quantity: {item.quantity}</Card.Text>
                <Card.Text>Subtotal: ${item.quantity * item.price}</Card.Text>

                <ButtonGroup aria-label={`Update quantity for ${item.name}`}>
                <Button variant="outline-secondary" onClick={() => decreaseQuantity(item.id)}>
                    -
                </Button>
                <Button variant="outline-secondary" onClick={() => increaseQuantity(item.id)}>
                    +
                </Button>
                <Button variant="outline-danger" onClick={() => removeItem(item.id)}>
                    Remove
                </Button>
                </ButtonGroup>
            </Card.Body>
        </Card>
    );
}

export default CartItem;