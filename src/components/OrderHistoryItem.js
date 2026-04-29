import { Card, ListGroup } from "react-bootstrap";

function OrderHistoryItem({ order }) {
    const subtotal = order.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
            0
        );
    const discount = order.coupon ? subtotal * order.coupon.discount : 0;
    const total = subtotal - discount;

    return (
        <Card className="mb-3">
            <Card.Body>
                <Card.Title>Order #{order.orderNumber}</Card.Title>
                <Card.Text>
                    <strong>Status:</strong> {order.status}
                </Card.Text>
                <Card.Text>
                    <strong>Pickup Name:</strong> {order.customerInfo.name}
                </Card.Text>
                <Card.Text>
                    <strong>Pickup Time:</strong> {order.customerInfo.pickupTime}
                </Card.Text>
                <Card.Text>
                    <strong>Created:</strong> {order.createdAt}
                </Card.Text>

            <h2 className="h5">Items</h2>
                <ListGroup className="mb-3">
                    {order.items.map(item => (
                        <ListGroup.Item key={item.id}>
                        {item.name} x {item.quantity} — ${item.price * item.quantity}
                        </ListGroup.Item>
                    ))}
                </ListGroup>

                <Card.Text>
                    <strong>Total:</strong> ${total.toFixed(2)}
                </Card.Text>
            </Card.Body>
    </Card>
    );
}

export default OrderHistoryItem;