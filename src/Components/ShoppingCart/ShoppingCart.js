import "./ShoppingCart.css";
import CartItem from "./CartItem/CartItem";

function ShoppingCart({ cart, addToCart, removeFromCart }) {
  return (
    <div className="ShoppingCart">
      {cart.map((item) => (
        <CartItem addToCart={addToCart} removeFromCart={removeFromCart} />
      ))}
    </div>
  );
}

export default ShoppingCart;
