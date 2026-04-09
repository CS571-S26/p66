import { Container } from "react-bootstrap";
import CartItem from "../components/CartItem";

function CartPage() {
    return (
        <Container className="mt-4">
            <h2>Your Cart</h2>
            <CartItem name="Americano" quantity={1} price={4} />
        <p className="mt-3"><strong>Total:</strong> $4</p>
        </Container>
    );
}

export default CartPage;