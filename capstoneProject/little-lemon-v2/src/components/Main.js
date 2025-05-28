import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage"; // à adapter selon l’emplacement
import AboutPage from "../pages/AboutPage";
import ConfirmedBooking from "../pages/ConfirmedBooking";
import MenuPage from "../pages/MenuPage";
import ContactPage from "../pages/ContactPage";
import BookingPage from "../pages/BookingPage";

function Main({ availableTimes, dispatch, submitForm }) {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        {/* On ajoutera les autres routes ici plus tard */}
      </Routes>
    </main>
  );
}

export default Main;