import { useState, useEffect } from "react";
import {
  ArrowRight,
  Users,
  Award,
  Shield,
  Package,
  Star,
  Phone,
  Mail,
  Clock,
  MapPin,
  ChevronRight,
  // Facebook,
  // Instagram,
  // Linkedin,
} from "lucide-react";

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [stats, setStats] = useState({
    Healthcare_Partners: 0,
    Orders_Delivered: 0,
    Product_Categories: 0,
    Customer_Satisfaction: 0,
  });

  const products = [
    {
      id: 1,
      name: "PRONEXIS Powder",
      price: "530 / Jar",
      category: "Powders",
      images: [
        "/products/pronexis/1.png",
        "/products/pronexis/2.png",
        "/products/pronexis/3.png",
        "/products/pronexis/4.png",
        "/products/pronexis/5.png",
      ],
      description:
        "Premium Whey Protein (200 g)\n ✓ 36% High-Quality Protein\n✓ Vitamins & Minerals\n✓ Muscle Recovery Support\n✓ Easy to Digest\n✓ Vanilla Flavour\n ",
    },
    {
      id: 2,
      name: "PDFLEX Tablets",
      price: " 349 / Strip",
      category: "Tablets",
      images: [
        "/products/pdflex/1.png",
        "/products/pdflex/2.png",
        "/products/pdflex/3.png",
        "/products/pdflex/4.png",
        "/products/pdflex/5.png",
      ],
      description:
        "Advanced Joint Care Formula\n✓ Supports joint flexibility\n✓ Helps maintain healthy cartilage\n✓ Promotes mobility & comfort\n✓ Glucosamine 200 mg • Collagen Type II 40 mg\n✓ Rose Hip 275 mg • Boswellia 307.5 mg",
    },
    {
      id: 3,
      name: "PDLIV DS Syrup",
      price: " 160 / Bottle",
      category: "Syrups",
      images: [
        "/products/pdliv/1.png",
        "/products/pdliv/2.png",
        "/products/pdliv/3.png",
        "/products/pdliv/4.png",
        "/products/pdliv/5.png",
      ],
      description:
        "PDLIV DS - Liver Support Syrup\n✓ Fatty Liver\n✓ Digestive Disorders\n✓ Liver Cirrhosis\n✓ Supports Liver Detoxification\n✓ Tricholine Citrate, Sorbitol & Phyllanthus Extract",
    },
    {
      id: 4,
      name: "Prezyme Syrup",
      price: " 129 / Bottle",
      category: "Syrups",
      images: [
        "/products/prezyme/1.png",
        "/products/prezyme/2.png",
        "/products/prezyme/3.png",
        "/products/prezyme/4.png",
        "/products/prezyme/5.png",
      ],
      description:
        "PREZYME - Fungal Diastase & Pepsin\n✓ Loss of Appetite\n✓ Dyspepsia (Indigestion)\n✓ Obstinate Vomiting\n✓ Digestive Upset",
    },
    {
      id: 5,
      name: "PDCURE DS Capsules",
      price: " 449 / Bottle",
      category: "Capsules",
      images: [
        "/products/pdcure/1.png",
        "/products/pdcure/2.png",
        "/products/pdcure/3.png",
        "/products/pdcure/4.png",
        "/products/pdcure/5.png",
      ],
      description:
        "Supports faster recovery.\n✓ Wound healing\n✓ Reduces pain & inflammation\n✓ Post-surgical care\n✓ Trypsin, Bromelain & Rutoside",
    },
    //   {
    //     id: 6,
    //     name: "Antiseptic Cream",
    //     category: "Creams",
    //     description: "Topical antiseptic for wound care",
    //   },
  ];

  useEffect(() => {
    const animateStats = () => {
      const targets = {
        Healthcare_Partners: 500,
        Orders_Delivered: 1000,
        Product_Categories: 5,
        Customer_Satisfaction: 99,
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
    "Powders",
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
  const formspreeId = "mvzvzvwa";
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
                onClick={() => scrollToSection("details")}
                className="text-gray-600 hover:text-teal-600 transition"
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition"
              >
                Talk to Our Sales Team
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
              Trusted Pharmaceutical Partner for Quality Healthcare Solutions
            </h1>
            <p className="text-xl mb-8 text-cyan-100">
              {" "}
              Quality • Trust • Timely Delivery{" "}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection("products")}
                className="bg-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-600 transition flex items-center justify-center"
              >
                Explore Our Products <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition"
              >
                Get a Quote
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
                PD Healthcare is committed to supplying high-quality
                pharmaceutical products to hospitals, clinics, pharmacies, and
                healthcare professionals across India. We focus on quality,
                affordability, and timely delivery, ensuring every customer
                receives trusted healthcare solutions.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Award className="h-6 w-6 text-teal-600" />
                  <span className="text-gray-700">
                    {" "}
                    WHO-GMP Quality Standards{" "}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-teal-600" />
                  <span className="text-gray-700">FSSAI & Drug Licensed </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Package className="h-6 w-6 text-teal-600" />
                  <span className="text-gray-700">
                    Fast Nationwide Delivery
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-teal-600" />
                  <span className="text-gray-700">500+ Happy Customers</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-4">
                Our mission is to make quality medicines accessible by providing
                safe, reliable, and affordable pharmaceutical products backed by
                exceptional customer service.
              </p>
              <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To become one of India's most trusted pharmaceutical companies
                through innovation, quality assurance, and long-term customer
                relationships.
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
                {stats.Healthcare_Partners}+
              </div>
              <div className="text-cyan-200 mt-2">Healthcare Partners</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-teal-400">
                {stats.Orders_Delivered}+
              </div>
              <div className="text-cyan-200 mt-2">Orders Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-teal-400">
                {stats.Product_Categories.toLocaleString()}+
              </div>
              <div className="text-cyan-200 mt-2">Product Categories</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-teal-400">
                {stats.Customer_Satisfaction}%
              </div>
              <div className="text-cyan-200 mt-2">Customer Satisfaction</div>
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
                <div
                  className="w-full h-48 mb-4 rounded-xl overflow-hidden bg-gray-50 cursor-pointer"
                  onClick={() => {
                    setSelectedProduct(product);
                    setSelectedImage(0);
                  }}
                >
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {product.name}
                  </h3>
                  <h2 className="text-lg font-semibold text-gray-900">
                    ₹{product.price}
                  </h2>
                  <span className="text-sm bg-teal-100 text-teal-700 px-2 py-1 rounded">
                    {product.category}
                  </span>
                </div>
                <p className="text-gray-600 whitespace-pre-line">
                  {product.description}
                </p>

                <button
                  onClick={() => scrollToSection("contact")}
                  className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition"
                >
                  Enquire Now
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
            Get A Quote / Enquire Now
          </h2>
          <h4 className="text-3xl font-normal text-center text-gray-900 mb-8">
            Tell us your requirements and our team will contact you within 24
            hours.
          </h4>
          <div className="max-w-2xl mx-auto">
            <form
              onSubmit={async (e) => {
                e.preventDefault();

                const form = e.currentTarget;
                const formData = new FormData(form);

                try {
                  const response = await fetch(
                    "https://formspree.io/f/mvzvzvwa",
                    {
                      method: "POST",
                      body: formData,
                      headers: {
                        Accept: "application/json",
                      },
                    },
                  );

                  const data = await response.json().catch(() => null);

                  // ✅ FIX: handle Formspree correctly
                  if (response.status === 200 || response.status === 202) {
                    alert("✅ Form submitted successfully!");
                    form.reset();
                  } else {
                    console.error("Formspree error:", data);
                    alert("❌ Error submitting form");
                  }
                } catch (error) {
                  console.error(error);
                  alert("❌ Network error");
                }
              }}
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
                  className="w-full px-4 py-3 border rounded-lg"
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
                  className="w-full px-4 py-3 border rounded-lg"
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
                  className="w-full px-4 py-3 border rounded-lg"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  className="w-full px-4 py-3 border rounded-lg"
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
                  className="w-full px-4 py-3 border rounded-lg"
                />
              </div>

              <button className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Details Section */}
      <section
        id="details"
        className="py-20 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="container mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-900">Get in Touch</h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              We're always happy to assist you with product enquiries, business
              partnerships, and healthcare solutions.
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-8 md:grid-cols-3">
            {/* Office */}
            <a
              href="https://maps.google.com/?q=Mahavir+Enclave+Phase+3,+New+Delhi,+110059"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-3xl shadow-md p-8 text-center border border-gray-100
        hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-20 h-20 mx-auto rounded-full bg-teal-100 flex items-center justify-center group-hover:bg-teal-600 transition-colors duration-300">
                <MapPin className="h-10 w-10 text-teal-600 group-hover:text-white transition-colors" />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-gray-900">
                Our Office
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                Mahavir Enclave Phase-3
                <br />
                New Delhi, India - 110059
              </p>

              <span className="inline-block mt-6 text-teal-600 font-semibold group-hover:translate-x-1 transition-transform">
                View on Google Maps →
              </span>
            </a>

            {/* Phone */}
            <a
              href="tel:+917011351992"
              className="group bg-white rounded-3xl shadow-md p-8 text-center border border-gray-100
        hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-20 h-20 mx-auto rounded-full bg-teal-100 flex items-center justify-center group-hover:bg-teal-600 transition-colors duration-300">
                <Phone className="h-10 w-10 text-teal-600 group-hover:text-white transition-colors" />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-gray-900">Call Us</h3>

              <p className="mt-3 text-gray-600 text-lg">+91 70113 51992</p>

              <span className="inline-block mt-6 text-teal-600 font-semibold group-hover:translate-x-1 transition-transform">
                Tap to Call →
              </span>
            </a>

            {/* Email */}
            <a
              href="mailto:pdhealthcare@gmail.com"
              className="group bg-white rounded-3xl shadow-md p-8 text-center border border-gray-100
        hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-20 h-20 mx-auto rounded-full bg-teal-100 flex items-center justify-center group-hover:bg-teal-600 transition-colors duration-300">
                <Mail className="h-10 w-10 text-teal-600 group-hover:text-white transition-colors" />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-gray-900">
                Email Us
              </h3>

              <p className="mt-3 text-gray-600 break-all">
                pdhealthcare@gmail.com
              </p>

              <span className="inline-block mt-6 text-teal-600 font-semibold group-hover:translate-x-1 transition-transform">
                Send an Email →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-slate-900 text-white">
        {/* Top Accent */}
        <div className="h-1 bg-gradient-to-r from-teal-500 via-green-500 to-teal-500"></div>

        <div className="container mx-auto px-6 py-14">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* ================= COMPANY ================= */}

            <div>
              <div className="flex items-center space-x-3 mb-5">
                <img
                  src="/logo.png"
                  alt="PD Healthcare"
                  className="h-14 w-14"
                />

                <div>
                  <h2 className="text-2xl font-bold">PD Healthcare</h2>

                  <p className="text-sm text-slate-400">Pharmaceuticals</p>
                </div>
              </div>

              <p className="text-slate-400 leading-7 mb-6">
                Delivering trusted pharmaceutical formulations with a commitment
                to quality, innovation, and patient well-being.
              </p>
            </div>

            {/* ================= QUICK LINKS ================= */}

            <div>
              <h3 className="text-xl font-semibold mb-6">Quick Links</h3>

              <div className="space-y-4">
                <button
                  onClick={() => scrollToSection("home")}
                  className="flex items-center gap-2 text-slate-400 hover:text-teal-400 transition"
                >
                  <ChevronRight size={18} />
                  Home
                </button>

                <button
                  onClick={() => scrollToSection("about")}
                  className="flex items-center gap-2 text-slate-400 hover:text-teal-400 transition"
                >
                  <ChevronRight size={18} />
                  About Us
                </button>

                <button
                  onClick={() => scrollToSection("products")}
                  className="flex items-center gap-2 text-slate-400 hover:text-teal-400 transition"
                >
                  <ChevronRight size={18} />
                  Products
                </button>

                <button
                  onClick={() => scrollToSection("contact")}
                  className="flex items-center gap-2 text-slate-400 hover:text-teal-400 transition"
                >
                  <ChevronRight size={18} />
                  Contact
                </button>
              </div>
            </div>

            {/* ================= CONTACT ================= */}

            <div>
              <h3 className="text-xl font-semibold mb-6">Contact</h3>

              <div className="space-y-5">
                <a
                  href="tel:+917011351992"
                  className="flex items-center gap-3 text-slate-400 hover:text-teal-400 transition"
                >
                  <Phone className="h-5 w-5" />
                  +91 70113 51992
                </a>

                <a
                  href="mailto:pdhealthcare@gmail.com"
                  className="flex items-center gap-3 text-slate-400 hover:text-teal-400 transition"
                >
                  <Mail className="h-5 w-5" />
                  pdhealthcare@gmail.com
                </a>
              </div>
            </div>

            {/* ================= BUSINESS HOURS ================= */}

            <div>
              <h3 className="text-xl font-semibold mb-6">Business Hours</h3>

              <div className="space-y-5">
                <div className="flex gap-3">
                  <Clock className="h-5 w-5 text-teal-400 mt-1" />

                  <div>
                    <p className="font-medium">Monday - Saturday</p>

                    <p className="text-slate-400">9:00 AM - 6:00 PM</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Clock className="h-5 w-5 text-teal-400 mt-1" />

                  <div>
                    <p className="font-medium">Sunday</p>

                    <p className="text-slate-400">Closed</p>
                  </div>
                </div>

                {/* Social Icons */}

                <div className="pt-6">
                  <h4 className="font-semibold mb-4">Follow Us</h4>

                  <div className="flex gap-4">
                    {/* <a
                      href="#"
                      className="p-3 rounded-full bg-slate-800 hover:bg-teal-600 transition"
                    >
                      <Facebook size={18} />
                    </a> */}

                    {/* <a
                      href="#"
                      className="p-3 rounded-full bg-slate-800 hover:bg-teal-600 transition"
                    >
                      <Instagram size={18} />
                    </a> */}

                    {/* <a
                      href="#"
                      className="p-3 rounded-full bg-slate-800 hover:bg-teal-600 transition"
                    >
                      <Linkedin size={18} />
                    </a> */}

                    {/* <a
                      href="mailto:pdhealthcare@gmail.com"
                      className="p-3 rounded-full bg-slate-800 hover:bg-teal-600 transition"
                    >
                      <Mail size={18} />
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom */}

          <div className="border-t border-slate-700 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm text-center md:text-left">
              © 2026{" "}
              <span className="font-semibold text-white">PD Healthcare</span>.
              All Rights Reserved.
            </p>

            <p className="text-slate-500 text-sm text-center">
              Designed & Developed with ❤️ for Better Healthcare
            </p>
          </div>
        </div>
      </footer>

      {/* ================= PRODUCT MODAL ================= */}

      {selectedProduct && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-white rounded-3xl shadow-2xl max-w-5xl w-[92%] p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 text-3xl font-bold text-gray-500 hover:text-red-500"
            >
              ×
            </button>
            <div className="grid md:grid-cols-2 gap-10 items-start">
              {/* LEFT SIDE - IMAGE */}

              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <div className="relative">
                  {/* Previous Button */}
                  <button
                    onClick={() =>
                      setSelectedImage((prev) =>
                        prev === 0
                          ? selectedProduct.images.length - 1
                          : prev - 1,
                      )
                    }
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full w-9 h-9 flex items-center justify-center hover:scale-110 transition"
                  >
                    ‹
                  </button>

                  {/* Image */}
                  <img
                    src={selectedProduct.images[selectedImage]}
                    alt={selectedProduct.name}
                    className="w-full h-96 object-contain transition-all duration-300"
                  />

                  {/* Next Button */}
                  <button
                    onClick={() =>
                      setSelectedImage((prev) =>
                        prev === selectedProduct.images.length - 1
                          ? 0
                          : prev + 1,
                      )
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full w-9 h-9 flex items-center justify-center hover:scale-110 transition"
                  >
                    ›
                  </button>
                </div>
              </div>

              {/* RIGHT SIDE - DETAILS */}

              <div>
                <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">
                  {selectedProduct.name}
                </h2>

                <p className="text-4xl font-bold text-teal-600 mt-4">
                  ₹ {selectedProduct.price}
                </p>

                <span className="inline-block mt-4 bg-teal-100 text-teal-700 px-4 py-2 rounded-full">
                  {selectedProduct.category}
                </span>

                <p className="mt-6 whitespace-pre-line text-gray-700 leading-8">
                  {selectedProduct.description}
                </p>

                <button
                  onClick={() => {
                    setSelectedProduct(null);
                    scrollToSection("contact");
                  }}
                  className="mt-8 w-full bg-teal-600 hover:bg-teal-700 hover:scale-[1.02] text-white py-3 rounded-xl transition-all duration-300 font-semibold shadow-md"
                >
                  Enquire Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
