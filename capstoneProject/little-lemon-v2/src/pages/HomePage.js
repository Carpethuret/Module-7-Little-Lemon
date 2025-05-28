// src/pages/HomePage.js
import { Link } from "react-router-dom";
import heroImage from "../images/MarioAndAdrianA.jpg";

function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section style={{ position: "relative", textAlign: "center", color: "white" }}>
        <img
          src={heroImage}
          alt="Mario and Adrian in the kitchen"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
            maxHeight: "500px",
            filter: "brightness(0.75)"
          }}
        />
        <div style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "rgba(73, 94, 87, 0.95)", // darker green with opacity
          padding: "2rem 3rem",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)"
        }}>
          <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem", color: "white" }}>Welcome to Little Lemon 🍋</h1>
          <Link to="/booking">
            <button style={{
              padding: "0.75rem 1.5rem",
              fontSize: "1.2rem",
              backgroundColor: "#F4CE14",
              border: "none",
              borderRadius: "8px",
              transition: "transform 0.2s, background-color 0.3s",
              cursor: "pointer"
            }}
              onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
              onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
            >
              Reserve a Table
            </button>
          </Link>
        </div>
      </section>

      {/* Intro Section */}
      <section style={{ padding: "3rem 2rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", color: "#495E57", marginBottom: "1rem" }}>
          Mediterranean Flavors, Local Freshness
        </h2>
        <p style={{ maxWidth: "600px", margin: "0 auto", fontSize: "1.1rem" }}>
          At Little Lemon, we serve up authentic Mediterranean dishes with a modern twist.
          Our chefs use only the freshest local ingredients to create meals that are healthy, vibrant, and full of flavor.
        </p>
      </section>

      {/* Highlights Section */}
      <section style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "2rem",
        padding: "2rem",
        backgroundColor: "#f9f9f9"
      }}>
        <div style={{
          backgroundColor: "white",
          padding: "1.5rem",
          borderRadius: "12px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          transition: "transform 0.2s"
        }}
          onMouseOver={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
          onMouseOut={(e) => e.currentTarget.style.transform = "translateY(0)"}
        >
          <h3>Fresh Ingredients</h3>
          <p>Only the freshest local ingredients are used to prepare every dish.</p>
        </div>
        <div style={{
          backgroundColor: "white",
          padding: "1.5rem",
          borderRadius: "12px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          transition: "transform 0.2s"
        }}
          onMouseOver={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
          onMouseOut={(e) => e.currentTarget.style.transform = "translateY(0)"}
        >
          <h3>Family-Owned</h3>
          <p>A warm and welcoming environment run by a local family since 1995.</p>
        </div>
        <div style={{
          backgroundColor: "white",
          padding: "1.5rem",
          borderRadius: "12px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          transition: "transform 0.2s"
        }}
          onMouseOver={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
          onMouseOut={(e) => e.currentTarget.style.transform = "translateY(0)"}
        >
          <h3>Outdoor Seating</h3>
          <p>Enjoy your meal under the sun or stars in our cozy terrace area.</p>
        </div>
      </section>
    </main>
  );
}

export default HomePage;