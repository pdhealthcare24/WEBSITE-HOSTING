import { useState, useEffect } from "react";
import {
  ArrowRight,
  Clock,
  MapPin,
  Phone,
  Mail,
  Users,
  Award,
  Shield,
  Package,
  Check,
  Star,
} from "lucide-react";

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [stats, setStats] = useState({
    products: 0,
    categories: 0,
    clients: 0,
    years: 0,
  });

  const products = [
    {
      id: 1,
      name: "Amoxicillin 500mg",
      category: "Tablets",
      description: "Broad-spectrum antibiotic for bacterial infections",
    },
    {
      id: 2,
      name: "Paracetamol 650mg",
      category: "Tablets",
      description: "Effective pain reliever and fever reducer",
    },
    {
      id: 3,
      name: "Omeprazole 20mg",
      category: "Capsules",
      description: "Proton pump inhibitor for acid reflux",
    },
    {
      id: 4,
      name: "Cough Syrup",
      category: "Syrups",
      description: "Relieves cough and throat irritation",
    },
    {
      id: 5,
      name: "Vitamin D3",
      category: "Capsules",
      description: "Essential vitamin supplement",
    },
    {
      id: 6,
      name: "Antiseptic Cream",
      category: "Creams",
      description: "Topical antiseptic for wound care",
    },
  ];

  useEffect(() => {
    const animateStats = () => {
      const targets = {
        products: 5,
        categories: 5,
        clients: 500,
        years: 2,
      };
      Object.entries(targets).forEach(([key, target]) => {
        let current = 0;
        const increment = target / 100;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setStats((prev) => ({ ...prev, [key]: Math.floor(current) }));
        }, 20);
      });
    };
    animateStats();
  }, []);

  const categories = [
    "All",
    "Tablets",
    "Capsules",
    "Syrups",
    "Creams",
    "Injectables",
  ];
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  // Note: Replace 'YOUR_FORMSPREE_ID' with your actual Formspree form ID
  const formspreeId = "https://formspree.io/f/mvzvzvwa";
  const formspreeUrl = `https://formspree.io/f/${formspreeId}`;

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/100 backdrop-blur-md shadow-md border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <img src="/logo.png" alt="PD Healthcare" className="h-16 w-20" />
              <span className="text-2xl md:text-3xl font-extrabold tracking-wide text-[# green-600]">
                PD Healthcare
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-600 hover:text-teal-600 transition"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-600 hover:text-teal-600 transition"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="text-gray-600 hover:text-teal-600 transition"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-600 hover:text-teal-600 transition"
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition"
              >
                Request Quote
              </button>
            </div>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden"
            >
              <div className="space-y-1">
                <div className="w-6 h-0.5 bg-gray-600"></div>
                <div className="w-6 h-0.5 bg-gray-600"></div>
                <div className="w-6 h-0.5 bg-gray-600"></div>
              </div>
            </button>
          </div>
        </div>
        {mobileOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <button
                onClick={() => scrollToSection("home")}
                className="block text-gray-600 hover:text-teal-600 transition"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block text-gray-600 hover:text-teal-600 transition"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="block text-gray-600 hover:text-teal-600 transition"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block text-gray-600 hover:text-teal-600 transition"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
      {/* Hero Section */}
      <section
        id="home"
        className="relative bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-700 text-white py-20"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Quality Pharmaceuticals for Better Health
            </h1>
            <p className="text-xl mb-8 text-cyan-100">2+ Years of Excellence</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection("products")}
                className="bg-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-600 transition flex items-center justify-center"
              >
                View Products <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition"
              >
                Request Quote
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                About PD Healthcare Pharmaceuticals
              </h2>
              <p className="text-gray-600 mb-6">
                We are a leading pharmaceutical company dedicated to providing
                high-quality, affordable medicines. With over 2 years of
                experience, we serve healthcare providers across the INDIA.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Award className="h-6 w-6 text-teal-600" />
                  <span className="text-gray-700"> Food License </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-teal-600" />
                  <span className="text-gray-700">Trusted Quality </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Package className="h-6 w-6 text-teal-600" />
                  <span className="text-gray-700">Growing Network</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-teal-600" />
                  <span className="text-gray-700">800+ Clients</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-4">
                To improve health outcomes by providing safe, effective, and
                affordable pharmaceutical products.
              </p>
              <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the most trusted pharmaceutical partner in healthcare,
                delivering quality medicines that make a difference in people's
                lives.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-16 bg-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-teal-400">
                {stats.products}+
              </div>
              <div className="text-cyan-200 mt-2">Products</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-teal-400">
                {stats.categories}
              </div>
              <div className="text-cyan-200 mt-2">Categories</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-teal-400">
                {stats.clients.toLocaleString()}+
              </div>
              <div className="text-cyan-200 mt-2">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-teal-400">
                {stats.years}+
              </div>
              <div className="text-cyan-200 mt-2">Years</div>
            </div>
          </div>
        </div>
      </section>
      {/* Products Section */}
      <section id="products" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Our Products
          </h2>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition ${
                  selectedCategory === category
                    ? "bg-teal-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6"
              >
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-32 mb-4" />
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {product.name}
                  </h3>
                  <span className="text-sm bg-teal-100 text-teal-700 px-2 py-1 rounded">
                    {product.category}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  {product.description}
                </p>
                <button className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition">
                  Request Quote
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Certifications */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Certifications
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Award className="h-16 w-16 text-teal-600 mx-auto mb-2" />
              <p className="text-center font-semibold">WHO-GMP</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Shield className="h-16 w-16 text-teal-600 mx-auto mb-2" />
              <p className="text-center font-semibold">ISO 9001:2015</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Check className="h-16 w-16 text-teal-600 mx-auto mb-2" />
              <p className="text-center font-semibold">FDA Approved</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Package className="h-16 w-16 text-teal-600 mx-auto mb-2" />
              <p className="text-center font-semibold">DCGI Licensed</p>
            </div>
          </div>
        </div>
      </section> */}
      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Dr. Prince Ghalot",
                text: "Excellent product quality and reliable supply chain. PD Healthcare has been our trusted partner for2 years.",
              },
              {
                name: "Dr. Harsh Singh",
                text: "Their commitment to quality and timely delivery is unmatched. Highly recommended for any healthcare facility.",
              },
              {
                name: "Dr. Rajesh Maheshwari",
                text: "Professional approach, genuine products, and timely delivery — everything a healthcare provider needs in a supplier.",
              },

              {
                name: "Dr. Anupam Mital",
                text: "Wide range of products at competitive prices. The team is professional and responsive to our needs.",
              },
            ].map((testimonial, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-900">
                  - {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Request a Quote
          </h2>
          <div className="max-w-2xl mx-auto">
            <form
              action="https://formspree.io/f/mvzvzvwa"
              method="POST"
              className="bg-white rounded-xl shadow-lg p-8 space-y-4"
            >
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="your.email@company.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Company / Hospital
                </label>
                <input
                  type="text"
                  name="company"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Your organization name"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition"
              >
                Submit Request
              </button>
            </form>

            <div className="mt-8 grid md:grid-cols-3 gap-4 text-center">
              <div className="flex items-center justify-center space-x-2">
                <MapPin className="h-10 w-10 text-teal-600" />
                <span className="text-gray-700">
                  Mahavir Enclave 3,New Delhi,India - 110059
                </span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Phone className="h-6 w-6 text-teal-600" />
                <span className="text-gray-700">+91 7011351992</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Mail className="h-10 w-10 text-teal-600" />
                <span className="text-gray-700">pdhealthcare@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      Footer
      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {/* ✅ Company + Map */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img
                  src="/logo.png"
                  alt="PD Healthcare"
                  className="h-12 w-12"
                />
                <span className="text-xl font-bold">PD Healthcare</span>
              </div>

              <p className="text-slate-400 text-sm mb-4">
                Quality pharmaceuticals for better health outcomes.
              </p>

              {/* ✅ MAP BELOW TAGLINE */}
              <div className="rounded-xl overflow-hidden border border-gray-700 shadow-md">
                <iframe
                  src="https://maps.google.com/maps?q=Sangam%20Vihar%20Delhi&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="140"
                  style={{ border: 0 }}
                  loading="lazy"
                ></iframe>
              </div>

              {/* Optional Open in Maps */}
              {/* <a
          href="https://maps.app.goo.gl/iLTmXoUNUTa7fiGu6"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 text-sm text-[#6BC04A] hover:underline"
        >
          📍 Open in Google Maps
        </a> */}
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button
                  onClick={() => scrollToSection("products")}
                  className="block text-slate-400 hover:text-[#177A3A] text-sm"
                >
                  Products
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="block text-slate-400 hover:text-[#177A3A] text-sm"
                >
                  About Us
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="block text-slate-400 hover:text-[#177A3A] text-sm"
                >
                  Contact
                </button>
              </div>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <div className="space-y-2">
                <p className="text-slate-400 text-sm">Tablets</p>
                <p className="text-slate-400 text-sm">Capsules</p>
                <p className="text-slate-400 text-sm">Syrups</p>
                <p className="text-slate-400 text-sm">Injectables</p>
              </div>
            </div>

            {/* Business Hours */}
            <div>
              <h4 className="font-semibold mb-4">Business Hours</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-slate-400 text-sm">
                  <Clock className="h-4 w-4" />
                  <span>Mon-Sat: 9AM-6PM</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-400 text-sm">
                  <Clock className="h-4 w-4" />
                  <span>Sun: Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Line */}
          <div className="border-t border-slate-800 mt-8 pt-8 text-center">
            <p className="text-slate-400 text-sm">
              © 2024 PD Healthcare Pharmaceuticals. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      S
    </div>
  );
}
