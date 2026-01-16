import { Link } from "react-router-dom";



export default function Navbar() {
  return (
    <nav className="navbar">
      <h3 className="logo">Ecommerce</h3>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </nav>
  );
}
