'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { MapPin, Phone, Instagram, Facebook, ChevronDown, Menu as MenuIcon, X, Clock, UtensilsCrossed, Sparkles } from 'lucide-react';
import PotIcon from '@/PotIcon';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrollY > 50 ? 'bg-black/90 backdrop-blur-xl shadow-2xl' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              <PotIcon />
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <Link href="/" className="text-amber-400 transition-all duration-300 relative group">
                Home
                <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-gradient-to-r from-amber-400 to-orange-500" />
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

            {/* Mobile Menu Button */}
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
            <Link href="/" className="text-lg text-amber-400" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="/about" className="text-lg hover:text-amber-400 transition" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link href="/menu" className="text-lg hover:text-amber-400 transition" onClick={() => setIsMenuOpen(false)}>Menu</Link>
            <Link href="/catering" className="text-lg hover:text-amber-400 transition" onClick={() => setIsMenuOpen(false)}>Catering</Link>
            <Link href="/contact" className="text-lg hover:text-amber-400 transition" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            <a 
              href="tel:3473684407"
              className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-3 rounded-full text-center"
            >
              Order Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Parallax */}
      <section 
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1600&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div 
          className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div 
            className="mb-6"
            style={{
              opacity: 1 - scrollY / 500,
              transform: `translateY(${scrollY * 0.3}px)`,
            }}
          >
            <h1 className="font-black mb-6 leading-tight text-balance bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              <span className="block text-[clamp(2.25rem,8vw,5rem)] tracking-tight">
                Sabor <span className="whitespace-nowrap">Restaurant</span>
              </span>
              <span className="block text-[clamp(1.75rem,7vw,4rem)] tracking-tight">
                &amp; Bakery
              </span>
            </h1>
            <p className="text-xl md:text-3xl text-white/90 mb-8 font-light">
              Authentic Dominican & Colombian Cuisine
            </p>
            <p className="text-lg md:text-xl text-amber-400/80 mb-12">
              Where tradition meets flavor in every bite
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link 
                href="/menu"
                className="group bg-gradient-to-r from-amber-500 to-orange-600 text-white px-10 py-5 rounded-full text-xl font-semibold hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-amber-500/50"
              >
                <span className="flex items-center justify-center gap-6">
                  Explore Menu
                  <UtensilsCrossed className="group-hover:rotate-12 transition-transform" />
                </span>
              </Link>
              <a 
                href="tel:3473684407"
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-10 py-5 rounded-full text-xl font-semibold hover:bg-white/20 transition-all duration-300"
              >
                (347) 368-4407
              </a>
            </div>
          </div>
        </div>
        
        {/* Bouncing Arrow - Outside the content div */}
        <div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex justify-center items-center animate-bounce z-20"
          style={{
            opacity: 1 - scrollY / 300,
          }}
        >
          <ChevronDown className="w-12 h-12 text-white/60" />
        </div>
      </section>

      {/* About Section with LIQUID SLIDE ANIMATIONS */}
      <section className="py-32 bg-gradient-to-b from-black via-zinc-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6TTI0IDM2YzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnoiIHN0cm9rZT0iIzIyMiIgc3Ryb2tlLXdpZHRoPSIuNSIgb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-20" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div 
              className="space-y-6"
              style={{
                opacity: Math.min(1, Math.max(0, (scrollY - 400) / 300)),
                transform: `translateX(${Math.min(0, Math.max(-50, -50 + (scrollY - 400) / 10))}px)`,
                transition: 'transform 0.1s ease-out, opacity 0.3s ease-out',
              }}
            >
              <div className="inline-block">
                <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase">Our Story</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                About Sabor
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Sabor Restaurant and Bakery offers the best dine-in and take-out Dominican and Colombian food. With a focus on authentic flavors and high-quality ingredients, our menu features a wide range of traditional dishes.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                We also offer catering for all occasions. Visit us today and experience the taste of Dominican Republic and Colombia.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-8">
                <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 p-6 rounded-2xl border border-amber-500/20 hover:scale-105 transition-transform">
                  <Clock className="w-10 h-10 text-amber-400 mb-3" />
                  <h3 className="font-bold text-xl mb-2">Hours</h3>
                  <p className="text-gray-400">Open 7 Days</p>
                  <p className="text-amber-400">6:30 AM - 10:00 PM</p>
                </div>
                <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 p-6 rounded-2xl border border-amber-500/20 hover:scale-105 transition-transform">
                  <MapPin className="w-10 h-10 text-amber-400 mb-3" />
                  <h3 className="font-bold text-xl mb-2">Locations</h3>
                  <p className="text-gray-400 text-sm">Queens, College Point</p>
                  <p className="text-amber-400 text-sm">JFK & Brooklyn</p>
                </div>
              </div>

              <div className="flex gap-6 pt-4">
                <a href="https://instagram.com/saborrestaurantbakery" target="_blank" className="text-amber-400 hover:text-amber-300 transition-all hover:scale-110 hover:rotate-12">
                  <Instagram size={32} />
                </a>
                <a href="https://facebook.com/saborrestaurantbakery" target="_blank" className="text-amber-400 hover:text-amber-300 transition-all hover:scale-110 hover:rotate-12">
                  <Facebook size={32} />
                </a>
              </div>
            </div>

            <div 
              className="relative h-[600px] rounded-3xl overflow-hidden"
              style={{
                opacity: Math.min(1, Math.max(0, (scrollY - 400) / 300)),
                transform: `translateX(${Math.max(0, Math.min(50, 50 - (scrollY - 400) / 10))}px)`,
                transition: 'transform 0.1s ease-out, opacity 0.3s ease-out',
              }}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-2xl font-bold text-white">Fresh. Authentic. Delicious.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Preview Section */}
      <section className="py-32 bg-gradient-to-b from-zinc-900 to-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Experience Sabor
            </h2>
            <p className="text-xl text-gray-400">Explore our authentic Dominican & Colombian cuisine</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/about" className="group bg-gradient-to-br from-zinc-900 to-black p-8 rounded-3xl border border-zinc-800 hover:border-amber-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20">
              <Sparkles className="w-16 h-16 text-amber-400 mb-6 group-hover:rotate-12 transition-transform" />
              <h3 className="text-3xl font-bold mb-4 group-hover:text-amber-400 transition-colors">Our Story</h3>
              <p className="text-gray-400 mb-6">Discover the passion and tradition behind Sabor Restaurant & Bakery</p>
              <span className="text-amber-400 group-hover:gap-4 flex items-center gap-2 transition-all">
                Learn More <ChevronDown className="rotate-[-90deg]" />
              </span>
            </Link>

            <Link href="/menu" className="group bg-gradient-to-br from-zinc-900 to-black p-8 rounded-3xl border border-zinc-800 hover:border-amber-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20">
              <UtensilsCrossed className="w-16 h-16 text-amber-400 mb-6 group-hover:rotate-12 transition-transform" />
              <h3 className="text-3xl font-bold mb-4 group-hover:text-amber-400 transition-colors">Menu</h3>
              <p className="text-gray-400 mb-6">Explore our traditional dishes, fresh juices & baked goods</p>
              <span className="text-amber-400 group-hover:gap-4 flex items-center gap-2 transition-all">
                View Menu <ChevronDown className="rotate-[-90deg]" />
              </span>
            </Link>

            <Link href="/catering" className="group bg-gradient-to-br from-zinc-900 to-black p-8 rounded-3xl border border-zinc-800 hover:border-amber-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20">
              <Clock className="w-16 h-16 text-amber-400 mb-6 group-hover:rotate-12 transition-transform" />
              <h3 className="text-3xl font-bold mb-4 group-hover:text-amber-400 transition-colors">Catering</h3>
              <p className="text-gray-400 mb-6">Let us cater your next event with our diverse menu options</p>
              <span className="text-amber-400 group-hover:gap-4 flex items-center gap-2 transition-all">
                Get Quote <ChevronDown className="rotate-[-90deg]" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-black to-zinc-950 py-16 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-4">
                Sabor
              </h3>
              <p className="text-gray-400">
                Authentic Dominican & Colombian cuisine in the heart of New York
              </p>
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
            <p className="mt-2 text-sm">Developed by Deka Solutions</p>
          </div>
        </div>
      </footer>
    </div>
  );
}