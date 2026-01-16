import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("userId");

  const handleLogout = () => {
    localStorage.removeItem("userId");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <h3 className="logo">Ecommerce</h3>

      <div className="nav-links">
        <Link to="/home">Home</Link>
        <Link to="/cart">Cart</Link>

        {!isLoggedIn ? (
          <Link to="/login">Login</Link>
        ) : (
          <button onClick={handleLogout} style={{ marginLeft: "20px" }}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

