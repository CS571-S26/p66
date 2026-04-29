import { Button, Card } from "react-bootstrap";

function CouponSection({ coupon, setCoupon }) {
    return (
        <Card className="mb-3">
            <Card.Body>
                <Card.Title>Available Coupon</Card.Title>
                <Card.Text>Use coupon <strong>CAFE10</strong> to get 10% off your order.</Card.Text>

                {coupon ? (
                    <Button variant="outline-danger" onClick={() => setCoupon(null)}>
                        Remove Coupon
                    </Button>
                ) : (
                    <Button variant="outline-primary" onClick={() => setCoupon({ code: "CAFE10", discount: 0.1 })}>
                        Apply Coupon
                    </Button>
                )}
            </Card.Body>
        </Card>
    );
}

export default CouponSection;