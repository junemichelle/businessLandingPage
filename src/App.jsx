import { useState } from "react";
import { motion } from "framer-motion";

export default function BakeryLandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* NAVBAR */}
      <nav className="navbar">
        <h1 className="logo">Sweet Crumbs</h1>

        <div className="nav-links">
          <a href="#menu" className="nav-link">
            Menu
          </a>
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </div>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          <a href="#menu">Menu</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      )}

      {/* HERO */}
      <motion.section
        className="hero"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="hero-title">Freshly Baked Happiness 🍰</h2>
        <p className="hero-text">
          Delicious cakes, cupcakes and pastries made with love.
        </p>

        <a
          href="https://wa.me/254712345678"
          target="_blank"
          className="btn-whatsapp mt-6"
        >
          Order via WhatsApp
        </a>
      </motion.section>

      {/* MENU */}
      <section id="menu" className="section">
        <h3 className="section-title">Our Specialties</h3>

        <div className="grid-3">
          <motion.div whileHover={{ scale: 1.05 }} className="card">
            <img
              src="https://images.unsplash.com/photo-1587668178277-295251f900ce"
              className="card-img"
            />
            <div className="card-body">
              <h4 className="card-title">Cupcakes</h4>
              <p className="card-text">Soft, fluffy cupcakes.</p>
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="card">
            <img
              src="https://images.unsplash.com/photo-1603532648955-039310d9ed75"
              className="card-img"
            />
            <div className="card-body">
              <h4 className="card-title">Custom Cakes</h4>
              <p className="card-text">Perfect for any occasion.</p>
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="card">
            <img
              src="https://images.unsplash.com/photo-1509440159596-0249088772ff"
              className="card-img"
            />
            <div className="card-body">
              <h4 className="card-title">Pastries</h4>
              <p className="card-text">Fresh every day.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-light">
        <h3 className="section-title">What Customers Say</h3>

        <div className="grid-3">
          <div className="testimonial">
            <p className="testimonial-text">Best cakes ever!</p>
            <h4 className="testimonial-name">— Sarah</h4>
          </div>

          <div className="testimonial">
            <p className="testimonial-text">Amazing service!</p>
            <h4 className="testimonial-name">— Brian</h4>
          </div>

          <div className="testimonial">
            <p className="testimonial-text">Highly recommend.</p>
            <h4 className="testimonial-name">— Anita</h4>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section-pink">
        <h3 className="section-title">Our Story</h3>
        <p className="hero-text">
          Baking happiness every day with love and passion.
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section text-center">
        <h3 className="section-title">Order Now</h3>

        <a
          href="https://wa.me/254712345678"
          target="_blank"
          className="btn-whatsapp"
        >
          Chat on WhatsApp
        </a>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        © {new Date().getFullYear()} Sweet Crumbs Bakery
      </footer>
    </div>
  );
}
