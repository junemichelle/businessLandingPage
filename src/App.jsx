export default function BakeryLandingPage() {
  return (
    <div className="bg-pink-50 text-gray-800">
      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white">
        <h1 className="text-xl font-bold text-pink-600">Sweet Crumbs</h1>

        <div className="hidden md:flex gap-6">
          <a href="#menu">Menu</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <button className="bg-pink-600 text-white px-4 py-2 rounded-lg">
          Order Now
        </button>
      </nav>

      {/* HERO */}
      <section className="text-center py-20 px-6 bg-pink-100">
        <h2 className="text-4xl md:text-5xl font-bold">
          Freshly Baked Happiness Daily 🍰
        </h2>

        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          From soft cupcakes to custom cakes, we bake with love and the finest
          ingredients.
        </p>

        <button className="mt-6 bg-pink-600 text-white px-6 py-3 rounded-xl">
          View Menu
        </button>
      </section>

      {/* MENU */}
      <section id="menu" className="py-16 px-6">
        <h3 className="text-3xl font-bold text-center mb-10">
          Our Specialties
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 shadow rounded-xl bg-white">
            <h4 className="font-semibold text-lg">Cupcakes</h4>
            <p className="text-gray-600 mt-2">
              Soft, fluffy cupcakes in a variety of delicious flavors.
            </p>
          </div>

          <div className="p-6 shadow rounded-xl bg-white">
            <h4 className="font-semibold text-lg">Custom Cakes</h4>
            <p className="text-gray-600 mt-2">
              Beautiful cakes for birthdays, weddings, and special events.
            </p>
          </div>

          <div className="p-6 shadow rounded-xl bg-white">
            <h4 className="font-semibold text-lg">Pastries</h4>
            <p className="text-gray-600 mt-2">
              Fresh croissants, donuts, and more baked daily.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-16 px-6 bg-pink-100 text-center">
        <h3 className="text-3xl font-bold">Our Story</h3>

        <p className="mt-4 max-w-2xl mx-auto text-gray-600">
          Sweet Crumbs Bakery started with a passion for baking and a dream to
          bring joy through desserts. Every bite is crafted with love and care.
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 px-6 text-center">
        <h3 className="text-3xl font-bold">Order Your Treats Today</h3>

        <p className="mt-4 text-gray-600">
          Call us or send a message to place your order.
        </p>

        <button className="mt-6 bg-pink-600 text-white px-6 py-3 rounded-xl">
          Contact Us
        </button>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 bg-gray-900 text-gray-400">
        © {new Date().getFullYear()} Sweet Crumbs Bakery
      </footer>
    </div>
  );
}
