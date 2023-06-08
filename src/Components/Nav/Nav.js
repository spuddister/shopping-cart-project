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
        <h1>Nav</h1>
      </div>
      <div className="links-wrapper">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/store"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Store
        </NavLink>
        <NavLink
          onClick={() => toggleCartVisible()}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          <FaShoppingCart />
          <span className="item-count">{itemCount}</span>
        </NavLink>
      </div>
    </div>
  );
}

export default Nav;
