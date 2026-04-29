import { Container, Alert, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import CartSummary from "../components/CartSummary";
import CouponSection from "../components/CouponSection";

function CartPage({
    cart,
    coupon,
    setCoupon,
    increaseQuantity,
    decreaseQuantity,
    removeItem
}) {
    return (
        <Container className="mt-4">
            <h1>Your Cart</h1>

            {cart.length === 0 ? (
                <Alert variant="warning">Your cart is empty.</Alert>
            ) : (
                <>
                    {cart.map(item => (
                        <CartItem
                            key={item.id}
                            item={item}
                            increaseQuantity={increaseQuantity}
                            decreaseQuantity={decreaseQuantity}
                            removeItem={removeItem}
                        />
                    ))}

                    <CouponSection coupon={coupon} setCoupon={setCoupon} />
                    <CartSummary cart={cart} coupon={coupon} />

                    <Button as={Link} to="/checkout" variant="success">
                        Continue to Checkout
                    </Button>
                </>
            )}
        </Container>
    );
}

export default CartPage;