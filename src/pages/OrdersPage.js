import { Container, Alert } from "react-bootstrap";
import OrderHistoryItem from "../components/OrderHistoryItem";

function OrdersPage({ orders }) {
  return (
    <Container className="mt-4">
      <h1>Order History</h1>

      {orders.length === 0 ? (
        <Alert variant="info">
          No orders have been placed yet.
        </Alert>
      ) : (
        orders.map(order => (
          <OrderHistoryItem key={order.orderNumber} order={order} />
        ))
      )}
    </Container>
  );
}

export default OrdersPage;