import { Row, Col } from "react-bootstrap";
import MenuItemCard from "./MenuItemCard";

function MenuList({ menuItems, addToCart }) {
    return (
        <Row>
            {menuItems.map(item => (
                    <Col xs={12} md={6} lg={4} key={item.id}>
                    <MenuItemCard item={item} addToCart={addToCart} />
                    </Col>
            ))}
        </Row>
    );
}

export default MenuList;