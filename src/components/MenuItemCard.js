import { Card, Button } from "react-bootstrap";

function MenuItemCard({ name, price }) {
    return (
        <Card className="mb-3">
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>Price: ${price}</Card.Text>
            <Button variant="primary">Add to Cart</Button>
        </Card.Body>
        </Card>
    );
}

export default MenuItemCard;