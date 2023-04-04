import logo from "../../REFLIX1.png";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const location = useLocation();
  let locationPath = location.pathname;
  locationPath = locationPath.split("/");
  if (locationPath.length > 3) {
    locationPath.pop();
  }

  return (
    <div className="navbar">
      <Link to="/">
        <div className="navbar-item">Home</div>
      </Link>
      <Link to={`${locationPath.join("/")}`}>
        <div className="navbar-item">Catalog</div>
      </Link>
      <div className="navbar-item" id="logo" alt={"logo"}>
        <img src={logo} />
      </div>
    </div>
  );
}
