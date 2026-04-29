import { Alert } from "react-bootstrap";

function HeroSection() {
    return (
        <section className="mb-4">
            <h1>Cafe Order and Pickup</h1>
            <Alert variant="info">
                    Browse the menu, add items to your cart, apply a coupon, and place a pickup order.
            </Alert>
        </section>
    );
}

export default HeroSection;