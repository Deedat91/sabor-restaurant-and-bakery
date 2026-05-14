'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MapPin, Instagram, Facebook, Menu as MenuIcon, X, Heart, Users, Award, BookOpen } from 'lucide-react';
import PotIcon from '@/PotIcon';
import OrderModal from '@/components/OrderModal';

export default function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [orderOpen, setOrderOpen] = useState(false);

  const locations = [
    { name: 'College Point', address: '15-20 College Point Blvd, College Point, NY 11356', hours: '6:30 AM – 10:00 PM · M–F' },
    { name: 'Queens Library', address: '89-11 Merrick Blvd, Jamaica, NY 11432', hours: '10:00 AM – 6:30 PM · M–F' },
    { name: 'JFK Airport', address: 'Building 1111, JFK International, Jamaica, NY 11430', hours: '7:30 AM – 3:00 PM · M–F' },
    { name: 'Brooklyn', address: '141 Flushing Ave, Building 77, Brooklyn, NY 11205', hours: '11:00 AM – 3:00 PM · M–F' },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-xl shadow-2xl py-2">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative flex items-center h-20">
            <div className="flex-shrink-0">
              <PotIcon />
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex space-x-6 items-center">
              <Link href="/" className="text-white/70 hover:text-white transition-all duration-300 relative group">
                Home
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-amber-400 to-orange-500 group-hover:w-full transition-all duration-300" />
              </Link>
              <Link href="/about" className="text-amber-400 transition-all duration-300 relative group">
                About
                <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-gradient-to-r from-amber-400 to-orange-500" />
              </Link>
              <Link href="/menu" className="text-white/70 hover:text-white transition-all duration-300 relative group">
                Menu
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-amber-400 to-orange-500 group-hover:w-full transition-all duration-300" />
              </Link>
              <Link href="/catering" className="text-white/70 hover:text-white transition-all duration-300 relative group">
                Catering
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-amber-400 to-orange-500 group-hover:w-full transition-all duration-300" />
              </Link>
              <Link href="/gallery" className="text-white/70 hover:text-white transition-all duration-300 relative group">
                Gallery
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-amber-400 to-orange-500 group-hover:w-full transition-all duration-300" />
              </Link>
              <Link href="/contact" className="text-white/70 hover:text-white transition-all duration-300 relative group">
                Contact
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-amber-400 to-orange-500 group-hover:w-full transition-all duration-300" />
              </Link>
            </div>
            <div className="ml-auto flex items-center gap-3">
              <button onClick={() => setOrderOpen(true)} className="hidden md:block bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-3 rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-amber-500/50">
                Order Now
              </button>
              <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden absolute top-20 left-0 w-full bg-black/95 backdrop-blur-xl transition-all duration-300 ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <div className="flex flex-col space-y-4 p-6">
            <Link href="/" className="text-lg hover:text-amber-400 transition" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="/about" className="text-lg text-amber-400" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link href="/menu" className="text-lg hover:text-amber-400 transition" onClick={() => setIsMenuOpen(false)}>Menu</Link>
            <Link href="/catering" className="text-lg hover:text-amber-400 transition" onClick={() => setIsMenuOpen(false)}>Catering</Link>
            <Link href="/gallery" className="text-lg hover:text-amber-400 transition" onClick={() => setIsMenuOpen(false)}>Gallery</Link>
            <Link href="/contact" className="text-lg hover:text-amber-400 transition" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="relative h-[55vh] flex items-center justify-center overflow-hidden mt-20"
        style={{
          background: `linear-gradient(to bottom, rgba(0,0,0,0.65), rgba(0,0,0,0.55)), url('/images/menu/AboutHero.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
        }}
      >
        <div className="relative z-10 text-center px-4">
          <BookOpen className="w-16 h-16 mx-auto mb-6 text-amber-400 animate-pulse" />
          <h1 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent mb-6">
            Our Story
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-32 bg-gradient-to-b from-black via-zinc-900 to-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-16 md:mb-32">
            <div className="space-y-6">
              <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase">About Sabor</span>
              <h2 className="text-4xl md:text-6xl font-black text-white">
                Bringing Home to <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">New York</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Sabor Restaurant and Bakery offers the best dine-in and take-out Dominican and Colombian food. With a focus on authentic flavors and high-quality ingredients, our menu features a wide range of traditional dishes.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                We also offer catering for all occasions. Visit us today and experience the taste of Dominican Republic and Colombia.
              </p>
            </div>

            <div className="relative h-64 md:h-[500px] rounded-3xl overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/images/menu/SaborRestaurantAndBakery_Pernil.jpg')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>
          </div>

          {/* Values Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-16 md:mb-32">
            <div className="bg-gradient-to-br from-zinc-900 to-black p-8 rounded-3xl border border-amber-500/30 hover:border-amber-500 transition-all duration-500 hover:scale-105">
              <Heart className="w-16 h-16 text-amber-400 mb-6" />
              <h3 className="text-3xl font-bold mb-4">Passion</h3>
              <p className="text-gray-400">Every dish is crafted with love and dedication to authentic flavors that remind you of home.</p>
            </div>

            <div className="bg-gradient-to-br from-zinc-900 to-black p-8 rounded-3xl border border-amber-500/30 hover:border-amber-500 transition-all duration-500 hover:scale-105">
              <Award className="w-16 h-16 text-amber-400 mb-6" />
              <h3 className="text-3xl font-bold mb-4">Quality</h3>
              <p className="text-gray-400">We use only the finest, freshest ingredients to ensure every bite exceeds your expectations.</p>
            </div>

            <div className="bg-gradient-to-br from-zinc-900 to-black p-8 rounded-3xl border border-amber-500/30 hover:border-amber-500 transition-all duration-500 hover:scale-105">
              <Users className="w-16 h-16 text-amber-400 mb-6" />
              <h3 className="text-3xl font-bold mb-4">Community</h3>
              <p className="text-gray-400">More than a restaurant, we're a gathering place for friends and family to share memories.</p>
            </div>
          </div>

          {/* All Locations */}
          <div>
            <div className="text-center mb-12">
              <MapPin className="w-16 h-16 text-amber-400 mx-auto mb-4" />
              <h3 className="text-4xl font-bold mb-4">Our Locations & Hours</h3>
              <p className="text-xl text-gray-400">Find us at one of our convenient locations</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {locations.map((location, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-zinc-900 to-black p-8 rounded-3xl border border-amber-500/20 hover:border-amber-500/50 transition-all hover:scale-105"
                >
                  <h4 className="text-2xl font-bold text-amber-400 mb-3">{location.name}</h4>
                  <p className="text-gray-400 text-sm font-semibold uppercase tracking-wide mb-1">Address</p>
                  <p className="text-gray-300 text-sm mb-4">{location.address}</p>
                  <p className="text-gray-400 text-sm font-semibold uppercase tracking-wide mb-1">Hours</p>
                  <p className="text-amber-400 text-sm font-medium">{location.hours}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-6 justify-center mt-12">
              <a href="https://instagram.com/saborrestaurantbakery" target="_blank" className="text-amber-400 hover:text-amber-300 transition-all hover:scale-110">
                <Instagram size={40} />
              </a>
              <a href="https://facebook.com/saborrestaurantbakery" target="_blank" className="text-amber-400 hover:text-amber-300 transition-all hover:scale-110">
                <Facebook size={40} />
              </a>
              <a href="https://tiktok.com/@saborrestaurantbakery" target="_blank" className="text-amber-400 hover:text-amber-300 transition-all hover:scale-110">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.79a4.85 4.85 0 0 1-1.01-.1z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-black to-zinc-950 py-16 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-4">Sabor</h3>
              <p className="text-gray-400">Authentic Dominican & Colombian cuisine in the heart of New York</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 text-amber-400">Quick Links</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                <li><Link href="/about" className="hover:text-white transition">About</Link></li>
                <li><Link href="/menu" className="hover:text-white transition">Menu</Link></li>
                <li><Link href="/catering" className="hover:text-white transition">Catering</Link></li>
                <li><Link href="/gallery" className="hover:text-white transition">Gallery</Link></li>
                <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 text-amber-400">Contact</h4>
              <ul className="space-y-3 text-gray-400">
                <li>(646) 915-6122</li>
                <li>College Point · Queens Library</li>
                <li>JFK Airport · Brooklyn</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 text-amber-400">Follow Us</h4>
              <div className="flex gap-4">
                <a href="https://instagram.com/saborrestaurantbakery" target="_blank" className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center hover:scale-110 transition-all">
                  <Instagram size={20} />
                </a>
                <a href="https://facebook.com/saborrestaurantbakery" target="_blank" className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center hover:scale-110 transition-all">
                  <Facebook size={20} />
                </a>
                <a href="https://tiktok.com/@saborrestaurantbakery" target="_blank" className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center hover:scale-110 transition-all">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.79a4.85 4.85 0 0 1-1.01-.1z"/></svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-zinc-900 pt-8 text-center text-gray-500">
            <p>© 2025 Sabor Restaurant & Bakery. All rights reserved.</p>
            <p className="mt-2 text-sm">Developed by Deka Solutions</p>
          </div>
        </div>
      </footer>
      <OrderModal isOpen={orderOpen} onClose={() => setOrderOpen(false)} />
    </div>
  );
}