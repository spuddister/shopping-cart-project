import "./Nav.css";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

function Nav() {
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
          onClick={() => console.log("Shopping cart ON")}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          <FaShoppingCart />
        </NavLink>
      </div>
    </div>
  );
}

export default Nav;
