import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import NavigationBar from "./components/NavigationBar";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrdersPage from "./pages/OrdersPage";
import Footer from "./components/Footer";

function App() {
  const [cart, setCart] = useState([]);
  const [coupon, setCoupon] = useState(null);
  const [orders, setOrders] = useState([]);

  const menuItems = [
    { id: 1, name: "Americano", price: 4, description: "Classic black coffee." },
    { id: 2, name: "Latte", price: 5, description: "Espresso with steamed milk." },
    { id: 3, name: "Croissant", price: 6, description: "Buttery bakery item." },
    { id: 4, name: "Iced Coffee", price: 4, description: "Cold brewed coffee." },
    { id: 5, name: "Matcha Latte", price: 6, description: "Green tea latte." },
    { id: 6, name: "Blueberry Muffin", price: 4, description: "Fresh baked muffin." }
  ];

  const addToCart = (item) => {
    setCart(prev => {
      const existing = prev.find(cartItem => cartItem.id === item.id);

      if (existing) {
        return prev.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }

      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const increaseQuantity = (id) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart(prev =>
      prev
        .map(item =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
    setCoupon(null);
  };

  const placeOrder = (customerInfo) => {
    const orderNumber = Math.floor(100000 + Math.random() * 900000);

    const newOrder = {
      orderNumber,
      customerInfo,
      items: cart,
      coupon,
      status: "Preparing",
      createdAt: new Date().toLocaleString()
    };

    setOrders(prev => [newOrder, ...prev]);
    clearCart();
  };

  return (
    <Router basename="/p66">
      <NavigationBar cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} />

      <main>
        <Routes>
          <Route
            path="/"
            element={<HomePage menuItems={menuItems} addToCart={addToCart} />}
          />

          <Route
            path="/cart"
            element={
              <CartPage
                cart={cart}
                coupon={coupon}
                setCoupon={setCoupon}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                removeItem={removeItem}
              />
            }
          />

          <Route
            path="/checkout"
            element={
              <CheckoutPage
                cart={cart}
                coupon={coupon}
                latestOrder={orders[0]}
                placeOrder={placeOrder}
              />
            }
          />

          <Route
            path="/orders"
            element={<OrdersPage orders={orders} />}
          />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;