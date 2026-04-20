function CartSummary({ cart }) {
    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <p className="mt-3">
            <strong>Total: ${total}</strong>
        </p>
    );
}

export default CartSummary;