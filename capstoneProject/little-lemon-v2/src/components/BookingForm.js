import { useState } from "react";

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    dispatch(newDate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      date,
      time,
      guests,
      occasion,
    };
    submitForm(formData);
  };

  const isFormValid = date && time && guests >= 1 && occasion;

  return (
    <section style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "60vh" }}>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "grid",
          width: "100%",
          maxWidth: "500px",
          gap: "20px",
          padding: "2rem",
          borderRadius: "16px",
          backgroundColor: "#fff",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)"
        }}
      >
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={handleDateChange}
          required
          style={{
            padding: "0.75rem",
            border: "1px solid #ccc",
            borderRadius: "8px",
            fontSize: "1rem",
            backgroundColor: "#fff",
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            transition: "box-shadow 0.2s ease-in-out",
            outline: "none"
          }}
        />

        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
          style={{
            padding: "0.75rem",
            border: "1px solid #ccc",
            borderRadius: "8px",
            fontSize: "1rem",
            backgroundColor: "#fff",
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            transition: "box-shadow 0.2s ease-in-out",
            outline: "none"
          }}
        >
          <option value="">-- Select time --</option>
          {Array.isArray(availableTimes) && availableTimes.length > 0 ? (
            availableTimes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))
          ) : (
            <option disabled>Loading...</option>
          )}
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          id="guests"
          min="1"
          max="10"
          value={guests}
          onChange={(e) => setGuests(Number(e.target.value))}
          required
          style={{
            padding: "0.75rem",
            border: "1px solid #ccc",
            borderRadius: "8px",
            fontSize: "1rem",
            backgroundColor: "#fff",
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            transition: "box-shadow 0.2s ease-in-out",
            outline: "none"
          }}
        />

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          required
          style={{
            padding: "0.75rem",
            border: "1px solid #ccc",
            borderRadius: "8px",
            fontSize: "1rem",
            backgroundColor: "#fff",
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            transition: "box-shadow 0.2s ease-in-out",
            outline: "none"
          }}
        >
          <option value="">-- Select occasion --</option>
          <option value="None">No special occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>

        <input
          type="submit"
          value="Make Your Reservation"
          style={{
            backgroundColor: isFormValid ? "#F4CE14" : "#ccc",
            color: "#333",
            border: "none",
            borderRadius: "8px",
            padding: "0.75rem 1.5rem",
            fontSize: "1rem",
            cursor: isFormValid ? "pointer" : "not-allowed",
            transition: "background-color 0.3s"
          }}
          disabled={!isFormValid}
        />
      </form>
    </section>
  );
}

export default BookingForm;