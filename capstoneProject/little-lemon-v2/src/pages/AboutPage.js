import MarioAndAdrianB from '../images/MarioAndAdrianB.jpg';

function AboutPage() {
  return (
    <main
      style={{
        padding: "2rem",
        maxWidth: "800px",
        margin: "2rem auto",
        backgroundColor: "#fffbe6",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      }}
    >
      <img
        src={MarioAndAdrianB}
        alt="Founders Mario and Adrian"
        style={{ width: "100%", borderRadius: "10px", marginBottom: "2rem" }}
      />
      <h1 style={{ fontSize: "2rem", color: "#333", marginBottom: "1rem" }}>
        About Little Lemon
      </h1>
      <p style={{ lineHeight: "1.6", color: "#444" }}>
        Little Lemon is a cozy Mediterranean restaurant founded by two
        passionate chefs, Mario and Adrian. Located in the heart of the city, we
        serve traditional recipes passed down through generations, with a modern
        twist. Our mission is to deliver delicious and healthy food in a warm,
        welcoming environment.
      </p>
      <p style={{ lineHeight: "1.6", color: "#444" }}>
        We source our ingredients locally and believe in sustainable cooking
        practices. Whether you're here for a family dinner, a romantic evening,
        or a casual lunch, we promise to make your experience unforgettable.
      </p>
      <blockquote
        style={{
          fontStyle: "italic",
          borderLeft: "4px solid #f4ce14",
          paddingLeft: "1rem",
          marginTop: "2rem",
          color: "#555",
        }}
      >
        “Bringing generations of Mediterranean flavor to your table.”
      </blockquote>
    </main>
  );
}

export default AboutPage;
