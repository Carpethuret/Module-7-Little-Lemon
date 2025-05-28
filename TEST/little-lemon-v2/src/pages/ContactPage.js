import { useState } from "react";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  const isFormValid = formData.name && formData.email && formData.message;

  return (
    <main style={{ padding: "2rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <section style={{ backgroundColor: "#f9f9f9", padding: "2rem", borderRadius: "12px", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", maxWidth: "600px", width: "100%" }}>
        <h1 style={{ textAlign: "center", marginBottom: "1rem" }}>Contact Us</h1>
        <p style={{ textAlign: "center", marginBottom: "2rem" }}>We're happy to hear from you! Reach out using the details below or send us a message directly.</p>

        <ul style={{ listStyle: "none", padding: 0, marginBottom: "2rem", textAlign: "center" }}>
          <li><strong>📞 Phone:</strong> +33 1 23 45 67 89</li>
          <li><strong>📧 Email:</strong> contact@littlelemon.com</li>
          <li><strong>📍 Address:</strong> 123 Rue du Soleil, 75000 Paris, France</li>
        </ul>

        {isSubmitted && (
          <p style={{ color: "green", textAlign: "center", marginBottom: "1rem" }}>
            ✅ Your message has been sent successfully!
          </p>
        )}

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" value={formData.name} onChange={handleChange} required style={{ padding: "0.5rem", borderRadius: "8px", border: "1px solid #ccc" }} />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={formData.email} onChange={handleChange} required style={{ padding: "0.5rem", borderRadius: "8px", border: "1px solid #ccc" }} />

          <label htmlFor="message">Message</label>
          <textarea id="message" rows="4" value={formData.message} onChange={handleChange} required style={{ padding: "0.5rem", borderRadius: "8px", border: "1px solid #ccc" }}></textarea>

          <button
            type="submit"
            disabled={!isFormValid}
            style={{
              backgroundColor: isFormValid ? "#495e57" : "#ccc",
              color: "#fff",
              padding: "0.75rem",
              borderRadius: "8px",
              border: "none",
              cursor: isFormValid ? "pointer" : "not-allowed"
            }}
          >
            Send
          </button>
        </form>
      </section>
    </main>
  );
}

export default ContactPage;