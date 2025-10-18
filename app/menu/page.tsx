'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Instagram, Facebook, Menu as MenuIcon, X, MapPin } from 'lucide-react';
import PotIcon from '@/PotIcon';

export default function Menu() {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLocation, setActiveLocation] = useState('college-point');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const locations = [
    { id: 'college-point', name: 'College Point', address: '15-20 College Point Blvd, College Point, NY 11356' },
    { id: 'queens', name: 'Queens Library', address: '89-11 Merrick Blvd, Jamaica, NY 11432' },
    { id: 'jfk', name: 'JFK Airport', address: 'Coming Soon' },
    { id: 'brooklyn', name: 'Brooklyn', address: 'Coming Soon' },
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
              <Link href="/menu" className="text-amber-400 transition-all duration-300 relative group">
                Menu
                <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-gradient-to-r from-amber-400 to-orange-500" />
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
            <Link href="/menu" className="text-lg text-amber-400" onClick={() => setIsMenuOpen(false)}>Menu</Link>
            <Link href="/catering" className="text-lg hover:text-amber-400 transition" onClick={() => setIsMenuOpen(false)}>Catering</Link>
            <Link href="/contact" className="text-lg hover:text-amber-400 transition" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        className="relative h-[50vh] flex items-center justify-center overflow-hidden mt-20"
        style={{
          background: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1600&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent mb-6">
            Our Menu
          </h1>
          <p className="text-2xl text-white/90">Select your location to view the menu</p>
        </div>
      </section>

      {/* Location Tabs */}
      <section className="py-12 bg-gradient-to-b from-black to-zinc-900 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {locations.map((location) => (
              <button
                key={location.id}
                onClick={() => setActiveLocation(location.id)}
                className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
                  activeLocation === location.id
                    ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg shadow-amber-500/50 scale-105'
                    : 'bg-zinc-900 text-gray-400 hover:text-white hover:bg-zinc-800'
                }`}
              >
                <div className="flex items-center gap-2">
                  <MapPin size={20} />
                  {location.name}
                </div>
              </button>
            ))}
          </div>
          <div className="text-center mt-6">
            <p className="text-gray-400">
              {locations.find(l => l.id === activeLocation)?.address}
            </p>
          </div>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-20 bg-gradient-to-b from-zinc-900 to-black min-h-screen">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* College Point & Queens Library Menu (Same Menu) */}
          {(activeLocation === 'college-point' || activeLocation === 'queens') && (
            <div className="space-y-16">
              {/* Jugos y Batidos */}
              <div className="bg-gradient-to-br from-zinc-900 to-black p-8 rounded-3xl border border-amber-500/30">
                <h2 className="text-4xl font-black mb-8 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  🥤 Jugos Naturales y Batidos / Natural Juices & Shakes
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {['Mora (Blackberry)', 'Guayaba (Guava)', 'Maracuyá (Passion Fruit)', 'Piña (Pineapple)', 'Lulo (Naranjilla)', 'Papaya', 'Mango', 'Fresa con Banano (Strawberry w/ Banana)', 'Banana', 'Tomate de Árbol (Tomato)', 'Guanábana (Soursop)', 'Fresa (Strawberry)'].map((item, i) => (
                    <div key={i} className="bg-black/50 p-4 rounded-xl hover:bg-amber-500/10 transition-all border border-zinc-800 hover:border-amber-500/50">
                      <p className="text-lg">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Desayunos */}
              <div className="bg-gradient-to-br from-zinc-900 to-black p-8 rounded-3xl border border-amber-500/30">
                <h2 className="text-4xl font-black mb-8 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  🍳 Desayunos / Breakfast
                </h2>
                <div className="space-y-4">
                  {[
                    { name: 'Desayuno 1', desc: 'Calentado, Huevos Pericos, Entraña/Churrasco' },
                    { name: 'Desayuno 2', desc: 'Calentado, Huevos Pericos y Pechuga de Pollo' },
                    { name: 'Desayuno Ejecutivo', desc: 'Calentado/Arepa Con Queso, Huevos Pericos, Carne Asada/Pechuga' },
                    { name: 'Mangú Tres Golpes', desc: 'Huevos, Salami y Queso Frito' },
                    { name: 'Desayuno Sabor', desc: 'Calentado, Arepa, Huevos, Carne, Chicharrón y Maduros' },
                  ].map((item, i) => (
                    <div key={i} className="bg-black/50 p-6 rounded-xl hover:scale-105 transition-all border border-zinc-800 hover:border-amber-500/50">
                      <h3 className="text-2xl font-bold text-amber-400 mb-2">{item.name}</h3>
                      <p className="text-gray-300">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Platos Típicos */}
              <div className="bg-gradient-to-br from-zinc-900 to-black p-8 rounded-3xl border border-amber-500/30">
                <h2 className="text-4xl font-black mb-8 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  🍽️ Platos Típicos / Typical Dishes
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { name: 'Bandeja Paisa Con Churrasco', desc: '½ Churrasco, Chorizo, Chicharrón, Huevos, Arepita, Maduros, Aguacate, Arroz y Frijoles' },
                    { name: 'Bandeja Paisa Con Entraña', desc: '½ Entraña, Chorizo, Chicharrón, Huevo, Arepita, Maduros, Aguacate, Arroz y Frijoles' },
                    { name: 'Mini Bandeja Paisa', desc: 'Carne/Pechuga/¼ Pollo, ½ Chorizo, ½ Chicharrón, Huevos, Arepita, Maduros, Aguacate, Arroz y Frijoles' },
                    { name: 'Bandeja Mixta', desc: 'Camarones, Entraña, Chorizo, Chicharrón, Huevo, Arepita, Maduros, Aguacate, Arroz y Frijoles' },
                  ].map((item, i) => (
                    <div key={i} className="bg-black/50 p-6 rounded-xl hover:scale-105 transition-all border border-zinc-800 hover:border-amber-500/50">
                      <h3 className="text-xl font-bold text-amber-400 mb-3">{item.name}</h3>
                      <p className="text-gray-300 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pollo */}
              <div className="bg-gradient-to-br from-zinc-900 to-black p-8 rounded-3xl border border-amber-500/30">
                <h2 className="text-4xl font-black mb-8 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  🍗 Pollo / Chicken
                </h2>
                <p className="text-gray-400 mb-6">Served with Rice, Beans, Sweet Plantain and Salad</p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {['Arroz Con Pollo', 'Pechuga Empanizada', 'Pechuga al Limón', 'Pechuga a la Hawaiana', 'Pechuga en Salsa Champiñones', 'Pechuga a la Plancha', 'Pollo a la Brasa ¼', 'Pollo a la Brasa ½', 'Chicharrón de Pollo'].map((item, i) => (
                    <div key={i} className="bg-black/50 p-4 rounded-xl hover:bg-amber-500/10 transition-all border border-zinc-800 hover:border-amber-500/50">
                      <p className="text-lg">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Carnes */}
              <div className="bg-gradient-to-br from-zinc-900 to-black p-8 rounded-3xl border border-amber-500/30">
                <h2 className="text-4xl font-black mb-8 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  🥩 Carnes / Steak
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {['Bistec en Salsa Criolla', 'Bistec Encebollado', 'Lengua a la Plancha', 'Lengua en Salsa Criolla', 'Entraña', 'Carne Asada', 'Churrasco', 'Milanesa de Carne', 'Hígado a la Plancha', 'Sobre Barriga a la Plancha'].map((item, i) => (
                    <div key={i} className="bg-black/50 p-4 rounded-xl hover:bg-amber-500/10 transition-all border border-zinc-800 hover:border-amber-500/50">
                      <p className="text-lg">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mariscos */}
              <div className="bg-gradient-to-br from-zinc-900 to-black p-8 rounded-3xl border border-amber-500/30">
                <h2 className="text-4xl font-black mb-8 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  🐟 Mariscos / Seafood
                </h2>
                <p className="text-gray-400 mb-6">Served with Rice, Green Plantain and Salads</p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {['Arroz con Camarones', 'Trucha Frita', 'Trucha Sudada', 'Arroz a la Marinera', 'Cazuela de Mariscos', 'Pargo Rojo', 'Filete Marinado', 'Filete al Ajillo', 'Camarones al Ajillo', 'Mojarra Frita', 'Salmon con Camarones'].map((item, i) => (
                    <div key={i} className="bg-black/50 p-4 rounded-xl hover:bg-amber-500/10 transition-all border border-zinc-800 hover:border-amber-500/50">
                      <p className="text-lg">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Postres */}
              <div className="bg-gradient-to-br from-zinc-900 to-black p-8 rounded-3xl border border-amber-500/30">
                <h2 className="text-4xl font-black mb-8 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  🍰 Postres / Desserts
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {['Flan', 'Tiramisu', 'Tres Leches', 'Arroz Con Leche'].map((item, i) => (
                    <div key={i} className="bg-black/50 p-6 rounded-xl hover:scale-105 transition-all border border-zinc-800 hover:border-amber-500/50 text-center">
                      <p className="text-2xl mb-2">🍮</p>
                      <p className="text-xl font-semibold">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* JFK & Brooklyn Coming Soon */}
          {(activeLocation === 'jfk' || activeLocation === 'brooklyn') && (
            <div className="text-center py-32">
              <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 p-16 rounded-3xl border border-amber-500/30 max-w-2xl mx-auto">
                <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  Coming Soon!
                </h2>
                <p className="text-2xl text-gray-300 mb-8">
                  Our {activeLocation === 'jfk' ? 'JFK Airport' : 'Brooklyn'} location menu will be available soon.
                </p>
                <a 
                  href="tel:3473684407"
                  className="inline-block bg-gradient-to-r from-amber-500 to-orange-600 text-white px-10 py-5 rounded-full text-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-amber-500/50"
                >
                  Call for Details: (347) 368-4407
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-black to-zinc-950 py-16 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-4">Sabor</h3>
              <p className="text-gray-400">Authentic Dominican & Colombian cuisine</p>
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
                <li>Multiple Locations</li>
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