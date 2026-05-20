'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { MapPin, Phone, Instagram, Facebook, ChevronDown, Menu as MenuIcon, X, Clock, UtensilsCrossed, Sparkles } from 'lucide-react';
import PotIcon from '@/PotIcon';
import OrderModal from '@/components/OrderModal';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [orderOpen, setOrderOpen] = useState(false);

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
          <div className="relative flex items-center h-20">
            <div className="flex-shrink-0">
              <PotIcon />
            </div>

            {/* Desktop Menu — absolutely centered */}
            <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex space-x-6 items-center">
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
              <button
                onClick={() => setOrderOpen(true)}
                className="hidden md:block bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-3 rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-amber-500/50"
              >
                Order Now
              </button>
              <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
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
            <Link href="/" className="text-lg text-amber-400" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="/about" className="text-lg hover:text-amber-400 transition" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link href="/menu" className="text-lg hover:text-amber-400 transition" onClick={() => setIsMenuOpen(false)}>Menu</Link>
            <Link href="/catering" className="text-lg hover:text-amber-400 transition" onClick={() => setIsMenuOpen(false)}>Catering</Link>
            <Link href="/gallery" className="text-lg hover:text-amber-400 transition" onClick={() => setIsMenuOpen(false)}>Gallery</Link>
            <Link href="/contact" className="text-lg hover:text-amber-400 transition" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            <button
              onClick={() => { setIsMenuOpen(false); setOrderOpen(true); }}
              className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-3 rounded-full text-center"
            >
              Order Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Parallax */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: `linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(0,0,0,0.35)), url('/images/menu/SaborRestaurantAndBakery_Hero.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
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
                href="tel:6469156122"
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-10 py-5 rounded-full text-xl font-semibold hover:bg-white/20 transition-all duration-300"
              >
                (646) 915-6122
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
      <section className="py-16 md:py-32 bg-gradient-to-b from-black via-zinc-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6TTI0IDM2YzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnoiIHN0cm9rZT0iIzIyMiIgc3Ryb2tlLXdpZHRoPSIuNSIgb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-20" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase">Our Story</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                About Sabor
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Sabor Restaurant and Bakery offers the best dine-in and take-out Dominican and Colombian food. With a focus on authentic flavors and high-quality ingredients, our menu features a wide range of traditional dishes.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                We also offer catering for all occasions. Visit us today and experience the taste of Dominican Republic and Colombia.
              </p>
              
              <div className="pt-8">
                <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 p-6 rounded-2xl border border-amber-500/20">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="w-8 h-8 text-amber-400 flex-shrink-0" />
                    <h3 className="font-bold text-xl">Locations & Hours</h3>
                  </div>
                  <div className="space-y-3">
                    {[
                      { name: 'College Point', hours: '6:30 AM – 10:00 PM · M–F' },
                      { name: 'Queens Library', hours: '10:00 AM – 6:30 PM · M–F' },
                      { name: 'JFK Airport', hours: '7:30 AM – 3:00 PM · M–F' },
                      { name: 'Brooklyn', hours: '11:00 AM – 3:00 PM · M–F' },
                    ].map((loc) => (
                      <div key={loc.name} className="flex flex-col xs:flex-row justify-between items-start xs:items-center border-b border-amber-500/10 pb-2 last:border-0 last:pb-0 gap-0.5">
                        <span className="text-gray-300 text-sm font-medium">{loc.name}</span>
                        <span className="text-amber-400 text-xs xs:text-sm">{loc.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-6 pt-4">
                <a href="https://www.instagram.com/saborrestaurantandbakery/" target="_blank" className="text-amber-400 hover:text-amber-300 transition-all hover:scale-110 hover:rotate-12">
                  <Instagram size={32} />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61589917963423" target="_blank" className="text-amber-400 hover:text-amber-300 transition-all hover:scale-110 hover:rotate-12">
                  <Facebook size={32} />
                </a>
                <a href="https://tiktok.com/@saborrestaurantbakery" target="_blank" className="text-amber-400 hover:text-amber-300 transition-all hover:scale-110 hover:rotate-12">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.79a4.85 4.85 0 0 1-1.01-.1z"/></svg>
                </a>
              </div>
            </div>

            <div className="relative h-64 md:h-[600px] rounded-3xl overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/images/menu/SaborRestaurantAndBakery_PolloGizado.jpg')",
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
      <section className="py-16 md:py-32 bg-gradient-to-b from-zinc-900 to-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
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
                <a href="https://www.instagram.com/saborrestaurantandbakery/" target="_blank" className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center hover:scale-110 transition-all">
                  <Instagram size={20} />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61589917963423" target="_blank" className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center hover:scale-110 transition-all">
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