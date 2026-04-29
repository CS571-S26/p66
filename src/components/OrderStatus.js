import { Card } from "react-bootstrap";

function OrderStatus({ status }) {
    return (
        <Card className="mb-3">
        <Card.Body>
            <Card.Title>Order Status</Card.Title>
            <Card.Text>Your order is currently: <strong>{status}</strong></Card.Text>
        </Card.Body>
        </Card>
    );
}

export default OrderStatus;