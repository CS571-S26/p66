import { Card, Button } from "react-bootstrap";

function MenuItemCard({ item, addToCart }) {
    return (
        <Card className="mb-3">
        <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>Price: ${item.price}</Card.Text>
            <Button onClick={() => addToCart(item)} variant="primary">
                Add to Cart
            </Button>
        </Card.Body>
        </Card>
    );
}

export default MenuItemCard;