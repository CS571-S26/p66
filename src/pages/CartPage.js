import { Container } from "react-bootstrap";
import CartItem from "../components/CartItem";
import CartSummary from "../components/CartSummary";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function CartPage({ cart }) {
    return (
        <Container className="mt-4">
            <h2>Your Cart</h2>

            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                cart.map(item => (
                    <CartItem key={item.name} item={item} />
                ))
            )}

            <CartSummary cart={cart} />
            <Button
                as={Link}
                to="/checkout"
                variant="success"
                className="mt-3"
            >
                Proceed to Checkout
            </Button>
        </Container>
    );
}

export default CartPage;