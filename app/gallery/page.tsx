'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, Menu as MenuIcon, Images } from 'lucide-react';
import PotIcon from '@/PotIcon';

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
];

export default function Gallery() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
              <a href="tel:3473684407" className="hidden md:block bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-3 rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-amber-500/50">
                Order Now
              </a>
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
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-[40vh] flex items-center justify-center mt-20 overflow-hidden bg-zinc-950">
        <div className="absolute inset-0 opacity-30" style={{ background: 'radial-gradient(ellipse at center, #f59e0b 0%, transparent 70%)' }} />
        <div className="relative z-10 text-center px-4">
          <Images className="w-14 h-14 mx-auto mb-4 text-amber-400" />
          <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent mb-4">
            Gallery
          </h1>
          <p className="text-gray-300 text-xl">Our food, captured fresh</p>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="columns-2 md:columns-3 lg:columns-4 gap-3">
            {photos.map((photo, i) => (
              <div
                key={i}
                className="break-inside-avoid mb-3 relative group cursor-zoom-in rounded-xl overflow-hidden"
                onClick={() => setLightbox(i)}
              >
                <div className="relative w-full">
                  <Image
                    src={photo.src}
                    alt={photo.label}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
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
      <footer className="bg-zinc-950 py-10 border-t border-zinc-900 text-center text-gray-500">
        <div className="flex gap-4 justify-center mb-6">
          <a href="https://instagram.com/saborrestaurantbakery" target="_blank" className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center hover:scale-110 transition-all text-white">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path fill="black" d="M12 7a5 5 0 1 0 0 10A5 5 0 0 0 12 7zm0 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
          </a>
          <a href="https://facebook.com/saborrestaurantbakery" target="_blank" className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center hover:scale-110 transition-all text-white">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a href="https://tiktok.com/@saborrestaurantbakery" target="_blank" className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center hover:scale-110 transition-all text-white">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.79a4.85 4.85 0 0 1-1.01-.1z"/></svg>
          </a>
        </div>
        <p>© 2025 Sabor Restaurant & Bakery. All rights reserved.</p>
        <p className="mt-1 text-sm">Developed by Deka Solutions</p>
      </footer>
    </div>
  );
}
