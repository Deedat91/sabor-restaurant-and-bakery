import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

export default function Home() {
  const smoothieFlavors = [
    { name: 'Strawberry', spanish: 'Fresa' },
    { name: 'Soursop', spanish: 'Guanábana' },
    { name: 'Passion Fruit', spanish: 'Maracuyá' },
    { name: 'Mango', spanish: 'Mango' },
    { name: 'Lulo', spanish: 'Naranjilla' },
    { name: 'Pineapple', spanish: 'Piña' },
    { name: 'Blackberry', spanish: 'Mora' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <h1 className="text-2xl md:text-3xl font-bold text-amber-700">
              Sabor Restaurant & Bakery
            </h1>
            <div className="hidden md:flex space-x-8">
              <a href="#menu" className="text-gray-700 hover:text-amber-700 transition">Menu</a>
              <a href="#about" className="text-gray-700 hover:text-amber-700 transition">About</a>
              <a href="#catering" className="text-gray-700 hover:text-amber-700 transition">Catering</a>
              <a href="#contact" className="text-gray-700 hover:text-amber-700 transition">Contact</a>
            </div>
            <a 
              href="tel:6469156122"
              className="bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition"
            >
              Order Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-100">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center px-4">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Authentic Latin American Cuisine
          </h2>
          <p className="text-xl md:text-2xl text-white mb-8 drop-shadow-md">
            Fresh Baked Goods & Traditional Flavors
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#menu"
              className="bg-amber-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-700 transition"
            >
              View Menu
            </a>
            <a 
              href="tel:6469156122"
              className="bg-white text-amber-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition"
            >
              Call Us: (646) 915-6122
            </a>
          </div>
        </div>
      </section>

      {/* Smoothie Menu */}
      <section id="menu" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            Our Signature Smoothies
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Made fresh daily with authentic tropical fruits
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {smoothieFlavors.map((flavor, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <div className="h-48 bg-gradient-to-br from-amber-200 to-orange-300 rounded-xl mb-4 flex items-center justify-center">
                  <span className="text-6xl">🥤</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {flavor.name}
                </h3>
                <p className="text-amber-700 text-lg font-medium">
                  {flavor.spanish}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Welcome to Sabor
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                At Sabor Restaurant & Bakery, we bring the authentic flavors of Latin America to New York City. 
                Our passion is creating delicious, traditional dishes and baked goods that remind you of home.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                From our signature smoothies made with fresh tropical fruits to our warm, freshly baked bread, 
                every item is crafted with love and the finest ingredients.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-amber-600 hover:text-amber-700">
                  <Instagram size={32} />
                </a>
                <a href="#" className="text-amber-600 hover:text-amber-700">
                  <Facebook size={32} />
                </a>
                <a href="#" className="text-amber-600 hover:text-amber-700">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div className="h-96 bg-gradient-to-br from-amber-200 to-orange-300 rounded-2xl flex items-center justify-center">
              <span className="text-9xl">🍞</span>
            </div>
          </div>
        </div>
      </section>

      {/* Catering Section */}
      <section id="catering" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Catering Services
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Planning an event? Let us bring the flavors of Sabor to your celebration. 
            We offer full catering services for parties, corporate events, and special occasions.
          </p>
          <a 
            href="mailto:cristiana.franco1215@gmail.com"
            className="inline-block bg-amber-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-700 transition"
          >
            Request Catering Quote
          </a>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-br from-amber-600 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Subscribe to our newsletter for special offers, new menu items, and events!
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input 
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/30"
            />
            <button 
              type="submit"
              className="bg-white text-amber-700 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Locations & Contact */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
            Visit Us
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-amber-600 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-bold text-xl mb-2">Location</h3>
                  <p className="text-gray-700">65 Jefferson St Apt 6F</p>
                  <p className="text-gray-700">New York, NY 10002</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="text-amber-600 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-bold text-xl mb-2">Phone</h3>
                  <a href="tel:6469156122" className="text-amber-700 hover:underline text-lg">
                    (646) 915-6122
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="text-amber-600 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-bold text-xl mb-2">Email</h3>
                  <a href="mailto:cristiana.franco1215@gmail.com" className="text-amber-700 hover:underline">
                    cristiana.franco1215@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Google Maps Placeholder */}
            <div className="h-96 bg-gray-200 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <MapPin size={48} className="text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Google Maps will be embedded here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Sabor Restaurant & Bakery</h3>
              <p className="text-gray-400">
                Authentic Latin American cuisine in the heart of NYC
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#menu" className="hover:text-white transition">Menu</a></li>
                <li><a href="#about" className="hover:text-white transition">About</a></li>
                <li><a href="#catering" className="hover:text-white transition">Catering</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2025 Sabor Restaurant & Bakery. All rights reserved.</p>
            <p className="mt-2 text-sm">Built by Kazi & Deedat</p>
          </div>
        </div>
      </footer>
    </div>
  );
}