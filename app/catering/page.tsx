'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Instagram, Facebook, Menu as MenuIcon, X, UtensilsCrossed, Clock, Sparkles, Users, Award, Phone, Mail } from 'lucide-react';
import PotIcon from '@/PotIcon';

export default function Catering() {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
              <Link href="/catering" className="text-amber-400 transition-all duration-300 relative group">
                Catering
                <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-gradient-to-r from-amber-400 to-orange-500" />
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
            <Link href="/catering" className="text-lg text-amber-400" onClick={() => setIsMenuOpen(false)}>Catering</Link>
            <Link href="/gallery" className="text-lg hover:text-amber-400 transition" onClick={() => setIsMenuOpen(false)}>Gallery</Link>
            <Link href="/contact" className="text-lg hover:text-amber-400 transition" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        className="relative h-[70vh] flex items-center justify-center overflow-hidden mt-20"
        style={{
          background: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1555244162-803834f70033?w=1600&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <Sparkles className="w-16 h-16 mx-auto mb-6 text-amber-400 animate-pulse" />
          <h1 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent mb-6">
            Catering Services
          </h1>
          <p className="text-2xl md:text-3xl text-white/90 mb-8">
            Make Your Event Unforgettable
          </p>
          <p className="text-xl text-gray-300">
            From intimate gatherings to large corporate events, we bring authentic flavors to your celebration
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-gradient-to-b from-black to-zinc-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase">What We Offer</span>
            <h2 className="text-5xl md:text-6xl font-black mt-4 mb-6 text-white">
              Perfect for <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Every Occasion</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div 
              className="bg-gradient-to-br from-zinc-900 to-black p-8 rounded-3xl border border-amber-500/30 hover:border-amber-500 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20"
              style={{
                opacity: Math.min(1, scrollY / 300),
                transform: `translateY(${Math.max(0, 50 - scrollY / 10)}px)`,
              }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <UtensilsCrossed className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Diverse Menu</h3>
              <p className="text-gray-400 text-lg">
                Our catering menu includes a wide variety of dishes from the Dominican Republic and Colombia. Whether you're craving mofongo or arepas, we have it all.
              </p>
            </div>

            <div 
              className="bg-gradient-to-br from-zinc-900 to-black p-8 rounded-3xl border border-amber-500/30 hover:border-amber-500 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20"
              style={{
                opacity: Math.min(1, scrollY / 300),
                transform: `translateY(${Math.max(0, 50 - scrollY / 10)}px)`,
                transitionDelay: '100ms',
              }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4">All Occasions</h3>
              <p className="text-gray-400 text-lg">
                From intimate gatherings to large corporate events, we customize our catering to fit your needs perfectly. Every event is special.
              </p>
            </div>

            <div 
              className="bg-gradient-to-br from-zinc-900 to-black p-8 rounded-3xl border border-amber-500/30 hover:border-amber-500 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20"
              style={{
                opacity: Math.min(1, scrollY / 300),
                transform: `translateY(${Math.max(0, 50 - scrollY / 10)}px)`,
                transitionDelay: '200ms',
              }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Speedy Delivery</h3>
              <p className="text-gray-400 text-lg">
                Planning a last-minute gathering? Don't worry! Our catering team can provide speedy delivery to ensure that your food arrives fresh and on time.
              </p>
            </div>
          </div>

          {/* Event Types */}
          <div className="mt-32">
            <h3 className="text-4xl font-black text-center mb-16 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Events We Cater
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: '🎉', name: 'Private Parties' },
                { icon: '💼', name: 'Corporate Events' },
                { icon: '💒', name: 'Weddings' },
                { icon: '🎂', name: 'Birthdays' },
                { icon: '🎓', name: 'Graduations' },
                { icon: '🏢', name: 'Office Meetings' },
                { icon: '🎊', name: 'Celebrations' },
                { icon: '🤝', name: 'Social Gatherings' },
              ].map((event, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-zinc-900 to-black p-6 rounded-2xl border border-zinc-800 hover:border-amber-500/50 transition-all hover:scale-105 text-center"
                >
                  <div className="text-5xl mb-3">{event.icon}</div>
                  <p className="text-lg font-semibold">{event.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-b from-zinc-900 to-black">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 p-12 md:p-16 rounded-3xl border border-amber-500/30 text-center">
            <Award className="w-20 h-20 text-amber-400 mx-auto mb-8" />
            <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Cater Your Event?</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Consult with our manager to create the perfect menu for your occasion. We'll work with you to ensure every detail is perfect.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <a 
                href="tel:3473684407"
                className="group bg-gradient-to-r from-amber-500 to-orange-600 text-white px-10 py-5 rounded-full text-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-amber-500/50 flex items-center justify-center gap-3"
              >
                <Phone className="group-hover:rotate-12 transition-transform" />
                Call (347) 368-4407
              </a>
              <a 
                href="mailto:cristiana.franco1215@gmail.com"
                className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-10 py-5 rounded-full text-xl font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <Mail className="group-hover:scale-110 transition-transform" />
                Email for Quote
              </a>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-black/50 p-6 rounded-2xl">
                <p className="text-amber-400 font-semibold mb-2">Step 1</p>
                <p className="text-gray-300">Contact us with your event details</p>
              </div>
              <div className="bg-black/50 p-6 rounded-2xl">
                <p className="text-amber-400 font-semibold mb-2">Step 2</p>
                <p className="text-gray-300">We'll create a custom menu for you</p>
              </div>
              <div className="bg-black/50 p-6 rounded-2xl">
                <p className="text-amber-400 font-semibold mb-2">Step 3</p>
                <p className="text-gray-300">We deliver fresh, delicious food on time</p>
              </div>
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
                <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 text-amber-400">Contact</h4>
              <ul className="space-y-3 text-gray-400">
                <li>(347) 368-4407</li>
                <li>15-20 College Point Blvd</li>
                <li>College Point, NY 11356</li>
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
            <p className="mt-2 text-sm">Developed by Deka Solutions</p>
          </div>
        </div>
      </footer>
    </div>
  );
}