import { Card } from "react-bootstrap";

function CartSummary({ cart, coupon }) {
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const discount = coupon ? subtotal * coupon.discount : 0;
    const total = subtotal - discount;

    return (
        <Card className="mb-3">
            <Card.Body>
                <Card.Title>Order Summary</Card.Title>
                <Card.Text>Subtotal: ${subtotal.toFixed(2)}</Card.Text>
                <Card.Text>Discount: -${discount.toFixed(2)}</Card.Text>
                <Card.Text>
                    <strong>Total: ${total.toFixed(2)}</strong>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default CartSummary;