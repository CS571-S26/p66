import { Container } from "react-bootstrap";
import HeroSection from "../components/HeroSection";
import MenuList from "../components/MenuList";

function HomePage({ menuItems, addToCart }) {
    return (
        <Container className="mt-4">
        <HeroSection />
        <h2 className="mb-4">Cafe Menu</h2>
        <MenuList menuItems={menuItems} addToCart={addToCart} />
        </Container>
    );
}

export default HomePage;