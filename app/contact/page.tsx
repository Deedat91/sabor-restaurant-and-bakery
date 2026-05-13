'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Instagram, Facebook, Menu as MenuIcon, X, Clock } from 'lucide-react';
import PotIcon from '@/PotIcon';

export default function Contact() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(0);

  const locations = [
    {
      name: 'College Point',
      address: '15-20 College Point Blvd',
      city: 'College Point, NY 11356',
      phone: '(347) 368-4407',
      tel: '3473684407',
      hours: '6:30 AM – 10:00 PM · M–F',
      mapEmbed: 'https://www.openstreetmap.org/export/embed.html?bbox=-73.850%2C40.782%2C-73.826%2C40.796&layer=mapnik&marker=40.7885%2C-73.8378',
      mapsLink: 'https://maps.google.com/?q=15-20+College+Point+Blvd+College+Point+NY+11356',
    },
    {
      name: 'Queens Public Library',
      address: '89-11 Merrick Blvd',
      city: 'Jamaica, NY 11432',
      phone: '(718) 480-4304',
      tel: '7184804304',
      hours: '10:00 AM – 6:30 PM · M–F',
      mapEmbed: 'https://www.openstreetmap.org/export/embed.html?bbox=-73.808%2C40.694%2C-73.784%2C40.708&layer=mapnik&marker=40.7002%2C-73.7958',
      mapsLink: 'https://maps.google.com/?q=89-11+Merrick+Blvd+Jamaica+NY+11432',
    },
    {
      name: 'JFK Airport',
      address: 'Building 1111, JFK International',
      city: 'Jamaica, NY 11430',
      phone: '(646) 915-6122',
      tel: '6469156122',
      hours: '7:30 AM – 3:00 PM · M–F',
      mapEmbed: 'https://www.openstreetmap.org/export/embed.html?bbox=-73.810%2C40.622%2C-73.747%2C40.660&layer=mapnik&marker=40.6413%2C-73.7781',
      mapsLink: 'https://maps.google.com/?q=JFK+International+Airport+Building+1111+Jamaica+NY+11430',
    },
    {
      name: 'Brooklyn — Navy Yard',
      address: '141 Flushing Ave, Building 77',
      city: 'Brooklyn, NY 11205',
      phone: '(646) 915-6122',
      tel: '6469156122',
      hours: '11:00 AM – 3:00 PM · M–F',
      mapEmbed: 'https://www.openstreetmap.org/export/embed.html?bbox=-73.990%2C40.689%2C-73.959%2C40.707&layer=mapnik&marker=40.6970%2C-73.9737',
      mapsLink: 'https://maps.google.com/?q=141+Flushing+Ave+Building+77+Brooklyn+NY+11205',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-xl shadow-2xl py-2">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative flex items-center h-20">
            <div className="flex-shrink-0"><PotIcon /></div>
            <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex space-x-6 items-center">
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
              <Link href="/gallery" className="text-white/70 hover:text-white transition-all duration-300 relative group">
                Gallery
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-amber-400 to-orange-500 group-hover:w-full transition-all duration-300" />
              </Link>
              <Link href="/contact" className="text-amber-400 transition-all duration-300 relative group">
                Contact
                <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-gradient-to-r from-amber-400 to-orange-500" />
              </Link>
            </div>
            <div className="ml-auto flex items-center gap-3">
              <a href="tel:6469156122" className="hidden md:block bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-3 rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-amber-500/50">
                Order Now
              </a>
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
            <Link href="/about" className="text-lg hover:text-amber-400 transition" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link href="/menu" className="text-lg hover:text-amber-400 transition" onClick={() => setIsMenuOpen(false)}>Menu</Link>
            <Link href="/catering" className="text-lg hover:text-amber-400 transition" onClick={() => setIsMenuOpen(false)}>Catering</Link>
            <Link href="/gallery" className="text-lg hover:text-amber-400 transition" onClick={() => setIsMenuOpen(false)}>Gallery</Link>
            <Link href="/contact" className="text-lg text-amber-400" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        className="relative h-[50vh] flex items-center justify-center overflow-hidden mt-20"
        style={{
          background: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.35)), url('/images/menu/ContactHero.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
        }}
      >
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent mb-6">
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
          <div className="grid md:grid-cols-2 gap-12 items-stretch">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-zinc-900 to-black p-8 rounded-3xl border border-zinc-800 hover:border-amber-500/50 transition-all">
                <MapPin className="w-12 h-12 text-amber-400 mb-4" />
                <h3 className="text-3xl font-bold mb-3 text-amber-400">{locations[selectedLocation].name}</h3>
                <p className="text-gray-300 text-xl mb-2">{locations[selectedLocation].address}</p>
                <p className="text-gray-300 text-xl">{locations[selectedLocation].city}</p>
                {locations[selectedLocation].mapsLink && (
                  <a
                    href={locations[selectedLocation].mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
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
                <a href={`tel:${locations[selectedLocation].tel}`} className="text-amber-400 text-3xl hover:text-amber-300 transition block">
                  {locations[selectedLocation].phone}
                </a>
                <p className="text-gray-400 mt-2">Call us for orders or inquiries</p>
              </div>

              <div
                className="bg-gradient-to-br from-zinc-900 to-black p-8 rounded-3xl border border-zinc-800 hover:border-amber-500/50 transition-all"
              >
                <Clock className="w-12 h-12 text-amber-400 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Hours</h3>
                <p className="text-amber-400 text-2xl font-semibold">{locations[selectedLocation].hours}</p>
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

            {/* Map */}
            <div className="w-full rounded-3xl overflow-hidden border border-zinc-800 flex flex-col">
              <iframe
                key={selectedLocation}
                src={locations[selectedLocation].mapEmbed}
                width="100%"
                className="flex-1 min-h-[260px]"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                title={`Map for ${locations[selectedLocation].name}`}
              />
              <div className="bg-zinc-900 px-6 py-4 flex items-center justify-between gap-4 flex-wrap">
                <div>
                  <p className="font-bold text-white">{locations[selectedLocation].name}</p>
                  <p className="text-gray-400 text-sm">{locations[selectedLocation].address}, {locations[selectedLocation].city}</p>
                </div>
                <a
                  href={locations[selectedLocation].mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:scale-105 transition-all shrink-0"
                >
                  <MapPin size={16} /> Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Locations Overview */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-10 md:mb-16 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            Our Locations & Hours at a Glance
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {locations.map((location, index) => (
              <button
                key={index}
                onClick={() => setSelectedLocation(index)}
                className="bg-gradient-to-br from-zinc-900 to-black p-6 rounded-3xl border border-zinc-800 hover:border-amber-500/50 transition-all hover:scale-105 text-left"
              >
                <MapPin className="w-10 h-10 text-amber-400 mb-3" />
                <h3 className="text-xl font-bold mb-2">{location.name}</h3>
                <p className="text-gray-400 text-sm mb-1">{location.address}</p>
                <p className="text-gray-300 text-sm mb-3">{location.city}</p>
                <div className="border-t border-zinc-700 pt-3 space-y-1">
                  <p className="text-amber-400 text-sm font-semibold">{location.hours}</p>
                  <a href={`tel:${location.tel}`} className="text-gray-400 text-sm hover:text-white transition" onClick={(e) => e.stopPropagation()}>{location.phone}</a>
                </div>
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
              <a
                href="https://tiktok.com/@saborrestaurantbakery"
                target="_blank"
                className="group bg-gradient-to-br from-amber-500 to-orange-600 w-20 h-20 rounded-full flex items-center justify-center hover:scale-110 transition-all shadow-lg hover:shadow-amber-500/50"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9 group-hover:rotate-12 transition-transform"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.79a4.85 4.85 0 0 1-1.01-.1z"/></svg>
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
                <li><Link href="/gallery" className="hover:text-white transition">Gallery</Link></li>
                <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 text-amber-400">Contact</h4>
              <ul className="space-y-3 text-gray-400">
                <li>(646) 915-6122</li>
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
    </div>
  );
}