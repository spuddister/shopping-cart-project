import "./Nav.css";
import { FaShoppingCart } from "react-icons/fa";

function Nav() {
  return (
    <div className="Nav">
      <h1>Nav</h1>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/store">Store</a>
        </li>
        <li>
          <FaShoppingCart />
        </li>
      </ul>
    </div>
  );
}

export default Nav;
