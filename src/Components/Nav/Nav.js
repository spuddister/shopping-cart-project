import "./Nav.css";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

function Nav({ cart, toggleCartVisible }) {
  const itemCount = Object.keys(cart)[0]
    ? Object.keys(cart)
        .map((key) => cart[key].count)
        .reduce((sum, next) => sum + next)
    : 0;

  return (
    <div className="Nav">
      <div className="logo-wrapper">
        <h1>
          <span className="f-span">F</span>abulous{" "}
          <span className="f-span">F</span>akes
        </h1>
      </div>
      <div className="links-wrapper">
        <NavLink to="/" className="isActive">
          Home
        </NavLink>
        <NavLink to="/store">Store</NavLink>
        <NavLink onClick={() => toggleCartVisible()} className="cart-button">
          <FaShoppingCart />
          <span className="item-count">{itemCount}</span>
        </NavLink>
      </div>
    </div>
  );
}

export default Nav;
