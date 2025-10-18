'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Instagram, Facebook, Menu as MenuIcon, X, Clock } from 'lucide-react';
import PotIcon from '@/PotIcon';

export default function Contact() {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const locations = [
    {
      name: 'College Point',
      address: '15-20 College Point Blvd',
      city: 'College Point, NY 11356',
      mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.8659654285487!2d-73.84728!3d40.78556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ3JzA4LjIiTiA3M8KwNTAnNDguMSJX!5e0!3m2!1sen!2sus!4v1234567890',
    },
    {
      name: 'Queens Public Library',
      address: '89-11 Merrick Blvd',
      city: 'Jamaica, NY 11432',
      mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.5!2d-73.7945!3d40.7023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzA4LjMiTiA3M8KwNDcnNDAuMiJX!5e0!3m2!1sen!2sus!4v1234567890',
    },
    {
      name: 'JFK Airport',
      address: 'Address Coming Soon',
      city: 'Queens, NY',
      mapEmbed: null,
    },
    {
      name: 'Brooklyn',
      address: 'Address Coming Soon',
      city: 'Brooklyn, NY',
      mapEmbed: null,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-xl shadow-2xl py-2">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              <PotIcon />
            </div>
            
            <div className="hidden md:flex space-x-8 items-center">
              <Link href="/" className="text-white/70 hover:text-white transition-all duration-300 relative group">
                Home
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-amber-400 to-orange-500 group-hover:w-full transition-all duration-300" />
              </Link>
              <Link href="/about" className="text-white/70 hover:text-white transition-all duration-300 relative group">
                About
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-amber-400 to-orange-500 group-hover:w-full transition-all duration-300" />
              </Link>
              <Link href="/menu" className="text-white/70 hover:text-white transition-all duration-300 relative group">
                Menu
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-amber-400 to-orange-500 group-hover:w-full transition-all duration-300" />
              </Link>
              <Link href="/catering" className="text-white/70 hover:text-white transition-all duration-300 relative group">
                Catering
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-amber-400 to-orange-500 group-hover:w-full transition-all duration-300" />
              </Link>
              <Link href="/contact" className="text-amber-400 transition-all duration-300 relative group">
                Contact
                <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-gradient-to-r from-amber-400 to-orange-500" />
              </Link>
            </div>

            <a 
              href="tel:3473684407"
              className="hidden md:block bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-3 rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-amber-500/50"
            >
              Order Now
            </a>

            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
            </button>
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
            <Link href="/about" className="text-lg hover:text-amber-400 transition" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link href="/menu" className="text-lg hover:text-amber-400 transition" onClick={() => setIsMenuOpen(false)}>Menu</Link>
            <Link href="/catering" className="text-lg hover:text-amber-400 transition" onClick={() => setIsMenuOpen(false)}>Catering</Link>
            <Link href="/contact" className="text-lg text-amber-400" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        className="relative h-[50vh] flex items-center justify-center overflow-hidden mt-20"
        style={{
          background: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent mb-6">
            Visit Us
          </h1>
          <p className="text-2xl text-white/90">We have 4 locations to serve you</p>
        </div>
      </section>

      {/* Location Selector */}
      <section className="py-12 bg-gradient-to-b from-black to-zinc-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {locations.map((location, index) => (
              <button
                key={index}
                onClick={() => setSelectedLocation(index)}
                className={`p-6 rounded-2xl font-semibold transition-all duration-300 ${
                  selectedLocation === index
                    ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg shadow-amber-500/50 scale-105'
                    : 'bg-zinc-900 text-gray-400 hover:text-white hover:bg-zinc-800'
                }`}
              >
                <MapPin className="w-8 h-8 mx-auto mb-2" />
                <p className="text-lg">{location.name}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info & Map */}
      <section className="py-20 bg-gradient-to-b from-zinc-900 to-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div 
                className="bg-gradient-to-br from-zinc-900 to-black p-8 rounded-3xl border border-zinc-800 hover:border-amber-500/50 transition-all"
                style={{
                  opacity: Math.min(1, scrollY / 300),
                }}
              >
                <MapPin className="w-12 h-12 text-amber-400 mb-4" />
                <h3 className="text-3xl font-bold mb-3 text-amber-400">{locations[selectedLocation].name}</h3>
                <p className="text-gray-300 text-xl mb-2">{locations[selectedLocation].address}</p>
                <p className="text-gray-300 text-xl">{locations[selectedLocation].city}</p>
                {locations[selectedLocation].mapEmbed && (
                  <a 
                    href={`https://maps.google.com/?q=${locations[selectedLocation].address} ${locations[selectedLocation].city}`}
                    target="_blank"
                    className="inline-block mt-4 text-amber-400 hover:text-amber-300 transition"
                  >
                    Get Directions →
                  </a>
                )}
              </div>

              <div 
                className="bg-gradient-to-br from-zinc-900 to-black p-8 rounded-3xl border border-zinc-800 hover:border-amber-500/50 transition-all"
              >
                <Phone className="w-12 h-12 text-amber-400 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Phone</h3>
                <a href="tel:3473684407" className="text-amber-400 text-3xl hover:text-amber-300 transition block">
                  (347) 368-4407
                </a>
                <p className="text-gray-400 mt-2">Call us for orders or inquiries</p>
              </div>

              <div 
                className="bg-gradient-to-br from-zinc-900 to-black p-8 rounded-3xl border border-zinc-800 hover:border-amber-500/50 transition-all"
              >
                <Clock className="w-12 h-12 text-amber-400 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Hours</h3>
                <p className="text-gray-300 text-lg mb-2">Open 7 Days a Week</p>
                <p className="text-amber-400 text-2xl font-semibold">6:30 AM - 10:00 PM</p>
              </div>

              <div 
                className="bg-gradient-to-br from-zinc-900 to-black p-8 rounded-3xl border border-zinc-800 hover:border-amber-500/50 transition-all"
              >
                <Mail className="w-12 h-12 text-amber-400 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Email</h3>
                <a href="mailto:cristiana.franco1215@gmail.com" className="text-amber-400 text-lg hover:text-amber-300 transition break-all">
                  cristiana.franco1215@gmail.com
                </a>
                <p className="text-gray-400 mt-2">For catering inquiries and questions</p>
              </div>
            </div>

            {/* Google Maps */}
            <div className="h-[600px] md:h-[800px] w-full rounded-3xl overflow-hidden border border-zinc-800">
              {locations[selectedLocation].mapEmbed ? (
                <iframe 
                  src={locations[selectedLocation].mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                <div className="h-full flex items-center justify-center bg-zinc-900">
                  <div className="text-center p-8">
                    <MapPin size={64} className="text-amber-400 mx-auto mb-6" />
                    <h3 className="text-3xl font-bold mb-4 text-amber-400">Coming Soon!</h3>
                    <p className="text-xl text-gray-300 mb-6">
                      Our {locations[selectedLocation].name} location is opening soon.
                    </p>
                    <a 
                      href="tel:3473684407"
                      className="inline-block bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all"
                    >
                      Call for Updates
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* All Locations Overview */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-5xl font-black text-center mb-16 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            All Locations
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {locations.map((location, index) => (
              <button
                key={index}
                onClick={() => setSelectedLocation(index)}
                className="bg-gradient-to-br from-zinc-900 to-black p-8 rounded-3xl border border-zinc-800 hover:border-amber-500/50 transition-all hover:scale-105 text-left"
              >
                <MapPin className="w-12 h-12 text-amber-400 mb-4" />
                <h3 className="text-2xl font-bold mb-3">{location.name}</h3>
                <p className="text-gray-400 mb-2">{location.address}</p>
                <p className="text-gray-300">{location.city}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 bg-gradient-to-b from-black to-zinc-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 p-12 rounded-3xl border border-amber-500/30 text-center">
            <h2 className="text-4xl font-black mb-6">Follow Us</h2>
            <p className="text-xl text-gray-300 mb-8">Stay updated with our latest dishes, specials, and events</p>
            <div className="flex gap-6 justify-center mb-8">
              <a 
                href="https://instagram.com/saborrestaurantbakery" 
                target="_blank" 
                className="group bg-gradient-to-br from-amber-500 to-orange-600 w-20 h-20 rounded-full flex items-center justify-center hover:scale-110 transition-all shadow-lg hover:shadow-amber-500/50"
              >
                <Instagram size={36} className="group-hover:rotate-12 transition-transform" />
              </a>
              <a 
                href="https://facebook.com/saborrestaurantbakery" 
                target="_blank" 
                className="group bg-gradient-to-br from-amber-500 to-orange-600 w-20 h-20 rounded-full flex items-center justify-center hover:scale-110 transition-all shadow-lg hover:shadow-amber-500/50"
              >
                <Facebook size={36} className="group-hover:rotate-12 transition-transform" />
              </a>
            </div>
            <p className="text-gray-400">
              <span className="text-amber-400 font-semibold">@saborrestaurantbakery</span>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-zinc-900 to-zinc-950 py-16 border-t border-zinc-900">
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
                <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 text-amber-400">Contact</h4>
              <ul className="space-y-3 text-gray-400">
                <li>(347) 368-4407</li>
                <li>4 Locations</li>
                <li>Queens, College Point, JFK & Brooklyn</li>
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
              </div>
            </div>
          </div>
          <div className="border-t border-zinc-900 pt-8 text-center text-gray-500">
            <p>© 2025 Sabor Restaurant & Bakery. All rights reserved.</p>
            <p className="mt-2 text-sm">Built with ❤️ by Kazi & Deedat</p>
          </div>
        </div>
      </footer>
    </div>
  );
}