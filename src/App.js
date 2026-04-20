import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import NavigationBar from "./components/NavigationBar";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart(prev => {
      const existing = prev.find(i => i.name === item.name);
      if (existing) {
        return prev.map(i =>
          i.name === item.name
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  return (
    <Router basename="/p66">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage addToCart={addToCart} />} />
        <Route path="/cart" element={<CartPage cart={cart} />} />
        <Route path="/checkout" element={<CheckoutPage setCart={setCart} />} />
      </Routes>
    </Router>
  );
}

export default App;