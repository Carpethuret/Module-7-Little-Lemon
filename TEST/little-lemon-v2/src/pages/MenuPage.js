import greekSalad from "../images/greekSalad.jpg";
import lemonDesert from "../images/lemonDesert.jpg";
import restaurantFood from "../images/restaurantFood.jpg";
import lemonChicken from "../images/lemonChicken.webp";

function MenuPage() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Our Menu</h1>
      <ul style={{ listStyle: "none", padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem" }}>
        <li style={{ border: "1px solid #ccc", borderRadius: "16px", overflow: "hidden" }}>
          <img src={lemonChicken} alt="Lemon Chicken" style={{ width: "100%", height: "200px", objectFit: "cover" }} />
          <div style={{ padding: "1rem" }}>
            <h3>🍋 Lemon Chicken</h3>
            <p>Grilled chicken breast marinated with lemon and herbs. Served with a side of vegetables.</p>
          </div>
        </li>
        <li style={{ border: "1px solid #ccc", borderRadius: "16px", overflow: "hidden" }}>
          <img src={restaurantFood} alt="Bruschetta" style={{ width: "100%", height: "200px", objectFit: "cover" }} />
          <div style={{ padding: "1rem" }}>
            <h3>Bruschetta</h3>
            <p>Toasted bread topped with a flavorful mix of diced tomatoes, garlic, basil, and olive oil.</p>
          </div>
        </li>
        <li style={{ border: "1px solid #ccc", borderRadius: "16px", overflow: "hidden" }}>
          <img src={greekSalad} alt="Greek Salad" style={{ width: "100%", height: "200px", objectFit: "cover" }} />
          <div style={{ padding: "1rem" }}>
            <h3>Greek Salad</h3>
            <p>Fresh tomatoes, cucumbers, red onions, olives, and feta cheese. Drizzled with olive oil.</p>
          </div>
        </li>
        <li style={{ border: "1px solid #ccc", borderRadius: "16px", overflow: "hidden" }}>
          <img src={lemonDesert} alt="Lemon Dessert" style={{ width: "100%", height: "200px", objectFit: "cover" }} />
          <div style={{ padding: "1rem" }}>
            <h3>Lemon Dessert</h3>
            <p>Sweet and tangy lemon cake served with a light whipped topping and fresh zest.</p>
          </div>
        </li>
      </ul>
    </main>
  );
}

export default MenuPage;
