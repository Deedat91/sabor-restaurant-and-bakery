'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, Menu as MenuIcon, Images, Instagram, Facebook } from 'lucide-react';
import PotIcon from '@/PotIcon';
import OrderModal from '@/components/OrderModal';

const photos = [
  { src: '/images/menu/SaborRestaurantAndBakery_PolloGizado.jpg',  label: 'Pollo Guizado' },
  { src: '/images/menu/SaborRestaurantAndBakery_Pernil.jpg',       label: 'Pernil' },
  { src: '/images/menu/SaborRestaurantAndBakery_moforgo.jpg',      label: 'Mofongo' },
  { src: '/images/menu/SaborRestaurantAndBakery_CarneGizada.jpg',  label: 'Carne Guizada' },
  { src: '/images/menu/SaborRestaurantAndBakery_BakedChicken.jpg', label: 'Baked Chicken' },
  { src: '/images/menu/SaborRestaurantAndBakery_Guacamole.jpg',    label: 'Guacamole' },
  { src: '/images/menu/Chimi de Pollo Sandwich.jpg',               label: 'Chimi de Pollo' },
  { src: '/images/menu/SaborRestaurantAndBakery_ChickenWarp.jpg',  label: 'Chicken Wrap' },
  { src: '/images/menu/SaborRestaurantAndBakery_BeefWarp.jpg',     label: 'Beef Wrap' },
  { src: '/images/menu/Pechuga a la Plancha.jpg',                  label: 'Pechuga a la Plancha' },
  { src: '/images/menu/SaborRestaurantAndBakery_LentalSoup.jpg',   label: 'Sopa de Lentejas' },
  { src: '/images/menu/Ensalada de Aguacate.jpg',                  label: 'Ensalada de Aguacate' },
  { src: '/images/menu/SaborRestaurantAndBakery_Salchipapa.jpg',   label: 'Salchipapa' },
  { src: '/images/menu/SaborRestaurantAndBakery_Fan.jpg',          label: 'Sabor' },
  { src: '/images/menu/SaborRestaurantAndBakery_Hero.jpg',         label: 'Sabor Kitchen' },
  { src: '/images/menu/Desayuno1.jpg',                             label: 'Desayuno' },
];

export default function Gallery() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [orderOpen, setOrderOpen] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-xl shadow-2xl py-2">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative flex items-center h-20">
            <div className="flex-shrink-0"><PotIcon /></div>
            <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex space-x-6 items-center">
              {[['/', 'Home'], ['/about', 'About'], ['/menu', 'Menu'], ['/catering', 'Catering']].map(([href, label]) => (
                <Link key={href} href={href} className="text-white/70 hover:text-white transition-all duration-300 relative group">
                  {label}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-amber-400 to-orange-500 group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
              <Link href="/gallery" className="text-amber-400 relative">
                Gallery
                <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-gradient-to-r from-amber-400 to-orange-500" />
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
        <div className={`md:hidden absolute top-20 left-0 w-full bg-black/95 backdrop-blur-xl transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <div className="flex flex-col space-y-4 p-6">
            {[['/', 'Home'], ['/about', 'About'], ['/menu', 'Menu'], ['/catering', 'Catering'], ['/gallery', 'Gallery'], ['/contact', 'Contact']].map(([href, label]) => (
              <Link key={href} href={href} className={`text-lg transition ${href === '/gallery' ? 'text-amber-400' : 'hover:text-amber-400'}`} onClick={() => setIsMenuOpen(false)}>{label}</Link>
            ))}
            <button onClick={() => { setIsMenuOpen(false); setOrderOpen(true); }} className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-3 rounded-full text-center font-semibold">Order Now</button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-[55vh] flex items-center justify-center mt-20 overflow-hidden bg-zinc-950">
        <div className="absolute inset-0 opacity-30" style={{ background: 'radial-gradient(ellipse at center, #f59e0b 0%, transparent 70%)' }} />
        <div className="relative z-10 text-center px-4">
          <Images className="w-14 h-14 mx-auto mb-4 text-amber-400 animate-pulse" />
          <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
            Gallery
          </h1>
        </div>
      </section>

      {/* Uniform Grid */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {photos.map((photo, i) => (
              <div
                key={i}
                className="relative aspect-square group cursor-zoom-in rounded-xl overflow-hidden"
                onClick={() => setLightbox(i)}
              >
                <Image
                  src={photo.src}
                  alt={photo.label}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <p className="text-white font-semibold text-sm">{photo.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[500] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white transition z-10"
            onClick={() => setLightbox(null)}
          >
            <X size={36} />
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-4xl font-light transition"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + photos.length) % photos.length); }}
          >
            ‹
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-4xl font-light transition"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % photos.length); }}
          >
            ›
          </button>
          <div className="relative max-w-4xl max-h-[85vh] w-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={photos[lightbox].src}
              alt={photos[lightbox].label}
              width={1200}
              height={800}
              className="object-contain max-h-[80vh] w-full rounded-2xl"
              sizes="100vw"
            />
            <p className="text-center text-white/80 mt-4 font-semibold text-lg">{photos[lightbox].label}</p>
          </div>
        </div>
      )}

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
                <a href="https://www.instagram.com/saborrestaurantandbakery/" target="_blank" className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center hover:scale-110 transition-all">
                  <Instagram size={20} />
                </a>
                <a href="https://www.facebook.com/people/Sabor-Restaurant-Bakery/61590041587769/" target="_blank" className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center hover:scale-110 transition-all">
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
