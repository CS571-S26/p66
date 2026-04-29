import { Alert } from "react-bootstrap";

function OrderConfirmation({ order }) {
    return (
        <Alert variant="success">
            <h2>Order Confirmed</h2>
            <p>Your order number is <strong>{order.orderNumber}</strong>.</p>
            <p>Pickup name: {order.customerInfo.name}</p>
            <p>Pickup time: {order.customerInfo.pickupTime}</p>
        </Alert>
    );
}

export default OrderConfirmation;