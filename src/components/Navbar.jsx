import { Link } from 'react-router-dom';
import '../App.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-logo">
          United Wheels Network
        </Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/login" className="admin-button">Admin</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;