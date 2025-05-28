import { Link } from "react-router-dom";
import logo from "../images/Logo.svg";

function Header() {
  const linkStyles = `
    .nav-link {
      color: white;
      text-decoration: none;
      font-weight: bold;
      transition: all 0.3s ease;
    }

    .nav-link:hover {
      color: #F4CE14;
      transform: scale(1.05);
    }

    .nav-link:active {
      transform: scale(0.95);
      opacity: 0.8;
    }
  `;

  // Animation handlers for mouse events (optional for extra interactivity)
  const handleMouseEnter = (e) => {
    // Could add more logic here if needed
  };
  const handleMouseLeave = (e) => {
    // Could add more logic here if needed
  };
  const handleMouseDown = (e) => {
    // Could add more logic here if needed
  };
  const handleMouseUp = (e) => {
    // Could add more logic here if needed
  };

  return (
    <>
      <style>{linkStyles}</style>
      <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem 2rem", backgroundColor: "#495E57" }}>
        <Link to="/" style={{ display: "inline-block" }}>
          <div style={{ backgroundColor: "white", padding: "0.4rem", borderRadius: "12px" }}>
            <img src={logo} alt="Little Lemon Logo" style={{ height: "35px" }} />
          </div>
        </Link>
        <nav>
          <ul style={{ display: "flex", gap: "1.5rem", listStyle: "none", margin: 0, padding: 0 }}>
            <li>
              <Link
                to="/booking"
                className="nav-link"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
              >
                Reservation
              </Link>
            </li>
            <li>
              <Link
                to="/menu"
                className="nav-link"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="nav-link"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="nav-link"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;