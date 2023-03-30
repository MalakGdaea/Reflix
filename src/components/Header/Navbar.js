import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <div className="navbar-item">Home</div>
      </Link>
      <Link to="/catalog">
        <div className="navbar-item">Catalog</div>
      </Link>
      <div className="navbar-item" id="logo">Reflix</div>
    </div>
  );
}
