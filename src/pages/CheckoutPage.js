import { Container, Alert } from "react-bootstrap";
import CheckoutForm from "../components/CheckoutForm";
import OrderConfirmation from "../components/OrderConfirmation";
import OrderStatus from "../components/OrderStatus";

function CheckoutPage({ cart, coupon, latestOrder, placeOrder }) {
    return (
        <Container className="mt-4">
            <h1>Checkout</h1>

            {latestOrder && (
                <>
                    <OrderConfirmation order={latestOrder} />
                    <OrderStatus status={latestOrder.status} />
                </>
            )}

            {!latestOrder && cart.length === 0 && (
                <Alert variant="warning">
                    Your cart is empty. Please add items before checking out.
                </Alert>
            )}

            {cart.length > 0 && (
                <CheckoutForm cart={cart} coupon={coupon} placeOrder={placeOrder} />
            )}
        </Container>
    );
}

export default CheckoutPage;