import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import '../../styles/navbar.css';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="logo">
          Women In Power
        </Link>

        <nav className="nav-links">
          <Link to="/about">About</Link>
          <Link to="/programs">Programs</Link>
          <Link to="/impact">Impact</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <button className="nav-cta">
          Get Involved
        </button>

        <Menu className="nav-toggle" size={22} />
      </div>
    </header>
  );
}