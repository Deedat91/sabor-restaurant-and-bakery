'use client';

import { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, ChevronDown, Menu as MenuIcon, X, Clock, UtensilsCrossed, Sparkles } from 'lucide-react';
import PotIcon from '@/PotIcon';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Detect active section
      const sections = ['home', 'about', 'menu', 'catering', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const smoothieFlavors = [
    { name: 'Strawberry', spanish: 'Fresa', emoji: '🍓', color: 'from-red-400 to-pink-500' },
    { name: 'Soursop', spanish: 'Guanábana', emoji: '🍈', color: 'from-green-400 to-emerald-500' },
    { name: 'Passion Fruit', spanish: 'Maracuyá', emoji: '🥭', color: 'from-yellow-400 to-orange-500' },
    { name: 'Mango', spanish: 'Mango', emoji: '🥭', color: 'from-amber-400 to-orange-600' },
    { name: 'Lulo', spanish: 'Naranjilla', emoji: '🍊', color: 'from-orange-400 to-red-500' },
    { name: 'Pineapple', spanish: 'Piña', emoji: '🍍', color: 'from-yellow-300 to-yellow-500' },
    { name: 'Blackberry', spanish: 'Mora', emoji: '🫐', color: 'from-purple-500 to-indigo-600' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

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
            <div 
              className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent cursor-pointer"
              onClick={() => scrollToSection('home')}
            >
              <PotIcon />
            </div>

            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              {['home', 'about', 'menu', 'catering', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-all duration-300 relative group ${
                    activeSection === item ? 'text-amber-400' : 'text-white/70 hover:text-white'
                  }`}
                >
                  {item}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-300 ${
                    activeSection === item ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </button>
              ))}
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
            {['home', 'about', 'menu', 'catering', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="capitalize text-left text-lg hover:text-amber-400 transition"
              >
                {item}
              </button>
            ))}
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
            <Sparkles className="w-16 h-16 mx-auto mb-6 text-amber-400 animate-pulse" />
            <h1 className="
    font-black mb-6 leading-tight text-balance
    bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent
  ">
              {/* Line 1 */}
  <span className="block text-[clamp(2.25rem,8vw,5rem)] tracking-tight">
    Sabor <span className="whitespace-nowrap">Restaurant</span>
  </span>

  {/* Line 2 */}
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
              <button 
                onClick={() => scrollToSection('menu')}
                className="group bg-gradient-to-r from-amber-500 to-orange-600 text-white px-10 py-5 rounded-full text-xl font-semibold hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-amber-500/50"
              >
                <span className="flex items-center justify-center gap-6">
                  Explore Menu
                  <UtensilsCrossed className="group-hover:rotate-12 transition-transform" />
                </span>
              </button>
              <a 
                href="tel:3473684407"
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-10 py-5 rounded-full text-xl font-semibold hover:bg-white/20 transition-all duration-300"
              >
                (347) 368-4407
              </a>
            </div>
          </div>
          
          <button 
            onClick={() => scrollToSection('about')}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex justify-center items-center animate-bounce z-50"
          >
            <ChevronDown className="w-12 h-12 text-white/60" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-gradient-to-b from-black via-zinc-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6TTI0IDM2YzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnoiIHN0cm9rZT0iIzIyMiIgc3Ryb2tlLXdpZHRoPSIuNSIgb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-20" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div 
              className="space-y-6"
              style={{
                opacity: Math.min(1, (scrollY - 400) / 300),
                transform: `translateX(${Math.min(0, Math.max(-50, -50 + (scrollY - 400) / 10))}px)`,
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
                <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 p-6 rounded-2xl border border-amber-500/20">
                  <Clock className="w-10 h-10 text-amber-400 mb-3" />
                  <h3 className="font-bold text-xl mb-2">Hours</h3>
                  <p className="text-gray-400">Open 7 Days</p>
                  <p className="text-amber-400">6:30 AM - 10:00 PM</p>
                </div>
                <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 p-6 rounded-2xl border border-amber-500/20">
                  <MapPin className="w-10 h-10 text-amber-400 mb-3" />
                  <h3 className="font-bold text-xl mb-2">Location</h3>
                  <p className="text-gray-400 text-sm">15-20 College Point Blvd</p>
                  <p className="text-amber-400 text-sm">College Point, NY</p>
                </div>
              </div>

              <div className="flex gap-6 pt-4">
                <a href="https://instagram.com/saborrestaurantbakery" target="_blank" className="text-amber-400 hover:text-amber-300 transition-all hover:scale-110">
                  <Instagram size={32} />
                </a>
                <a href="https://facebook.com/saborrestaurantbakery" target="_blank" className="text-amber-400 hover:text-amber-300 transition-all hover:scale-110">
                  <Facebook size={32} />
                </a>
              </div>
            </div>

            <div 
              className="relative h-[600px] rounded-3xl overflow-hidden"
              style={{
                transition: 'transform 0.3s ease-out, opacity 0.3s ease-out',
                opacity: Math.min(1, (scrollY - 400) / 300),
                transform: `translateX(${Math.max(0, Math.min(50, 50 - (scrollY - 400) / 10))}px)`,
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

      {/* Menu Section - Smoothies */}
      <section id="menu" className="py-32 bg-gradient-to-b from-black to-zinc-900 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase">Fresh Daily</span>
            <h2 className="text-5xl md:text-6xl font-black mt-4 mb-6 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Signature Smoothies
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Made with authentic tropical fruits, blended to perfection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {smoothieFlavors.map((flavor, index) => (
              <div 
                key={index}
                className="group relative bg-gradient-to-br from-zinc-900 to-black p-8 rounded-3xl border border-zinc-800 hover:border-amber-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20"
                style={{
                  opacity: Math.min(1, (scrollY - 1200) / 200),
                  transform: `translateY(${Math.max(0, 50 - (scrollY - 1200 - index * 50) / 5)}px)`,
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${flavor.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`} />
                
                <div className="relative">
                  <div className="text-7xl mb-6 transform group-hover:scale-110 transition-transform duration-500">
                    {flavor.emoji}
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    {flavor.name}
                  </h3>
                  <p className={`text-xl bg-gradient-to-r ${flavor.color} bg-clip-text text-transparent font-semibold`}>
                    {flavor.spanish}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-400 text-lg mb-8">Full menu coming soon with traditional dishes, bakery items & more</p>
            <button className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-amber-500/50">
              View Full Menu (Coming Soon)
            </button>
          </div>
        </div>
      </section>

      {/* Catering Section */}
      <section id="catering" className="py-32 bg-gradient-to-b from-zinc-900 to-black relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1555244162-803834f70033?w=1600&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase">Events & Parties</span>
            <h2 className="text-5xl md:text-6xl font-black mt-4 mb-6 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Catering Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Sabor Restaurant and Bakery provides catering services for all occasions. From corporate events to private parties, we offer a diverse menu that will impress your guests.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-zinc-900 to-black p-8 rounded-3xl border border-amber-500/30 hover:border-amber-500 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <UtensilsCrossed className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Diverse Menu</h3>
              <p className="text-gray-400">
                Our catering menu includes a wide variety of dishes from the Dominican Republic and Colombia. Whether you're craving mofongo or arepas, we have it all.
              </p>
            </div>

            <div className="bg-gradient-to-br from-zinc-900 to-black p-8 rounded-3xl border border-amber-500/30 hover:border-amber-500 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">All Occasions</h3>
              <p className="text-gray-400">
                From intimate gatherings to large corporate events, we customize our catering to fit your needs perfectly.
              </p>
            </div>

            <div className="bg-gradient-to-br from-zinc-900 to-black p-8 rounded-3xl border border-amber-500/30 hover:border-amber-500 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Speedy Delivery</h3>
              <p className="text-gray-400">
                Planning a last-minute gathering? Don't worry! Our catering team can provide speedy delivery to ensure that your food arrives fresh and on time.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 p-12 rounded-3xl border border-amber-500/30 text-center">
            <h3 className="text-3xl font-bold mb-4">Ready to Cater Your Event?</h3>
            <p className="text-gray-300 text-lg mb-8">Consult with our manager to create the perfect menu for your occasion</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:3473684407"
                className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-amber-500/50"
              >
                Call (347) 368-4407
              </a>
              <a 
                href="mailto:cristiana.franco1215@gmail.com"
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300"
              >
                Email for Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-black relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase">Get In Touch</span>
            <h2 className="text-5xl md:text-6xl font-black mt-4 mb-6 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Visit Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-zinc-900 to-black p-8 rounded-3xl border border-zinc-800 hover:border-amber-500/50 transition-all">
                <MapPin className="w-12 h-12 text-amber-400 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Location</h3>
                <p className="text-gray-300 text-lg">15-20 College Point Blvd</p>
                <p className="text-gray-300 text-lg">College Point, NY 11356</p>
              </div>

              <div className="bg-gradient-to-br from-zinc-900 to-black p-8 rounded-3xl border border-zinc-800 hover:border-amber-500/50 transition-all">
                <Phone className="w-12 h-12 text-amber-400 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Phone</h3>
                <a href="tel:3473684407" className="text-amber-400 text-2xl hover:text-amber-300 transition">
                  (347) 368-4407
                </a>
              </div>

              <div className="bg-gradient-to-br from-zinc-900 to-black p-8 rounded-3xl border border-zinc-800 hover:border-amber-500/50 transition-all">
                <Clock className="w-12 h-12 text-amber-400 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Hours</h3>
                <p className="text-gray-300 text-lg">Open 7 Days a Week</p>
                <p className="text-amber-400 text-xl font-semibold">6:30 AM - 10:00 PM</p>
              </div>
            </div>

            <div className="h-[600px] rounded-3xl overflow-hidden border border-zinc-800">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.234!2d-73.8467!3d40.7856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ3JzA4LjIiTiA3M8KwNTAnNDguMSJX!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
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
                {['Home', 'About', 'Menu', 'Catering', 'Contact'].map((item) => (
                  <li key={item}>
                    <button 
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="hover:text-white transition"
                    >
                      {item}
                    </button>
                  </li>
                ))}
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
            <p className="mt-2 text-sm">Built with ❤️ by Kazi & Deedat</p>
          </div>
        </div>
      </footer>
    </div>
  );
}