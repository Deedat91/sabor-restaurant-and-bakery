'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Facebook, Menu as MenuIcon, X, MapPin } from 'lucide-react';
import PotIcon from '@/PotIcon';

type MenuItem  = { es: string; en?: string; price: string; img?: string };
type MenuSection = { title: string; emoji: string; note?: string; items: MenuItem[] };

const IMG = (file: string) => `/images/menu/${encodeURIComponent(file)}`;

export default function MenuPage() {
  const [isNavOpen,       setIsNavOpen]       = useState(false);
  const [activeLocation,  setActiveLocation]  = useState('college-point');

  // Desktop: hover-driven right panel
  const [panelItem,    setPanelItem]    = useState<MenuItem | null>(null);
  const [panelOpacity, setPanelOpacity] = useState(1);
  const panelTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Mobile: tap-driven bottom sheet
  const [sheetItem,    setSheetItem]    = useState<MenuItem | null>(null);
  const [sheetVisible, setSheetVisible] = useState(false);

  const openSheet = (item: MenuItem) => {
    setSheetItem(item);
    // tiny delay lets browser paint the element before animating in
    requestAnimationFrame(() => requestAnimationFrame(() => setSheetVisible(true)));
  };
  const closeSheet = () => {
    setSheetVisible(false);
    setTimeout(() => setSheetItem(null), 400);
  };

  // Crossfade the desktop panel when hovering a new item
  const handleItemHover = useCallback((item: MenuItem) => {
    if (!item.img) return;
    if (panelTimer.current) clearTimeout(panelTimer.current);
    if (panelItem?.img === item.img) return;
    setPanelOpacity(0);
    panelTimer.current = setTimeout(() => {
      setPanelItem(item);
      setPanelOpacity(1);
    }, 180);
  }, [panelItem]);

  // Lock body scroll while sheet is open on mobile
  useEffect(() => {
    document.body.style.overflow = sheetItem ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [sheetItem]);

  const locations = [
    { id: 'college-point', name: 'College Point',  address: '15-20 College Point Blvd, College Point, NY 11356' },
    { id: 'queens',        name: 'Queens Library', address: '89-11 Merrick Blvd, Jamaica, NY 11432' },
    { id: 'jfk',          name: 'JFK Airport',     address: 'Coming Soon' },
    { id: 'brooklyn',     name: 'Brooklyn',        address: 'Coming Soon' },
  ];

  const collegePointMenu: MenuSection[] = [
    {
      title: 'Panadería / Bakery', emoji: '🥐',
      items: [
        { es: 'Pan De Bono',                       en: 'Colombia Style Bread',                  price: '$1.20' },
        { es: 'Pan De Queso',                      en: 'Colombian Style Bread w/Cheese',        price: '$1.20' },
        { es: 'Pan Con Queso Pequeño',             en: 'Colombian Bread w/Cheese — Small',      price: '$1.50' },
        { es: 'Pan Con Queso Grande',              en: 'Colombian Bread w/Cheese — Large',      price: '$3.60' },
        { es: 'Arepa De Choclo',                   en: 'Sweet Corn Cake',                       price: '$1.50' },
        { es: 'Arepa De Choclo Con Queso',         en: 'Sweet Corn Cake with Cheese',           price: '$2.50' },
        { es: 'Torta De Arequipe',                                                              price: '$2.00' },
        { es: 'Achira',                                                                         price: '$1.50' },
        { es: 'Galletas',                          en: 'Cookies',                               price: '$0.75' },
        { es: 'Buñuelo',                           en: 'Fritter',                               price: '$1.00' },
        { es: 'Empanada De Cambray',                                                            price: '$1.50' },
        { es: 'Croissant',                                                                      price: '$1.25' },
        { es: 'Croissant Integral',                en: 'Whole Wheat Croissant',                 price: '$1.50' },
        { es: 'Croissant Con Queso',               en: 'Croissant with Cheese',                 price: '$1.50' },
        { es: 'Mogolla',                                                                        price: '$1.25' },
        { es: 'Pan Integral',                      en: 'Whole Wheat Bread',                     price: '$1.25' },
        { es: 'Pan De Yuca',                       en: 'Cassava Bread',                         price: '$1.25' },
        { es: 'Chicharrón De Guayaba',             en: 'Guava Greaves Bread',                   price: '$1.75' },
        { es: 'Roscón De Guayaba ó De Arequipe',   en: 'Guava Roscon Ring-shaped Cake',         price: '$3.50' },
        { es: 'Orejas',                                                                         price: '$1.75' },
      ],
    },
    {
      title: 'Jugos Naturales y Batidos / Juices & Shakes', emoji: '🥤',
      note: 'Jugos (Juices) $3.50  ·  Batidas (Shakes) $4.00',
      items: [
        { es: 'Mora Batido',        en: 'Blackberry',             price: '$3.50 / $4.00' },
        { es: 'Guayaba Batido',     en: 'Guava',                  price: '$3.50 / $4.00' },
        { es: 'Maracuyá Batido',    en: 'Passion Fruit',          price: '$3.50 / $4.00' },
        { es: 'Piña',               en: 'Pineapple',              price: '$3.50 / $4.00' },
        { es: 'Lulo',               en: 'Naranjilla',             price: '$3.50 / $4.00' },
        { es: 'Papaya',                                           price: '$3.50 / $4.00' },
        { es: 'Mango',                                            price: '$3.50 / $4.00' },
        { es: 'Fresa Con Banano',   en: 'Strawberry with Banana', price: '$3.50 / $4.00' },
        { es: 'Banana',                                           price: '$3.50 / $4.00' },
        { es: 'Tomate De Árbol',    en: 'Tree Tomato',            price: '$3.50 / $4.00' },
        { es: 'Guanábana',          en: 'Soursop',                price: '$3.50 / $4.00' },
        { es: 'Fresa',              en: 'Strawberry',             price: '$3.50 / $4.00' },
      ],
    },
    {
      title: 'Bebidas / Beverages', emoji: '☕',
      note: 'Pequeño (Small) / Grande (Large)',
      items: [
        { es: 'Café',                                                            en: 'Coffee',          price: '$1.00 / $1.50' },
        { es: 'Té / Tea',                                                                               price: '$1.00 / $1.50' },
        { es: 'Chocolate',                                                                              price: '$1.75 / $2.50' },
        { es: 'Milo Pequeño',                                                                           price: '$1.50 / $3.00' },
        { es: 'Jugos Hit',                                                                              price: '$1.75 / $3.00' },
        { es: 'Agua En Botella',                                                 en: 'Bottled Water',   price: '$1.00 / $1.50' },
        { es: 'Colombiana / Manzana / Postobon / Inca / Bretana / Popular',                            price: '$1.50' },
        { es: 'Pepsi / Sprite / Coke / Ginger-Ale',                                                    price: '$1.50' },
        { es: 'Jugo Tropicana',                                                                         price: '$2.00' },
        { es: 'Country Club Soda',                                                                      price: '$1.75' },
        { es: 'Aloe Vera',                                                                              price: '$2.00' },
        { es: 'Pony Malta',                                                                             price: '$1.75' },
        { es: 'Kumis',                                                                                  price: '$3.25' },
        { es: 'Café Helado',                                                     en: 'Ice Coffee',      price: '$2.00' },
        { es: 'Avena Alpina',                                                                           price: '$2.00' },
        { es: 'Soda De 2 Litros',                                                en: '2-Liter Soda',    price: '$3.00' },
        { es: 'Snapple / Gatorade',                                                                     price: '$1.75' },
        { es: 'Agua De Coco',                                                    en: 'Coconut Water',   price: '$2.00' },
        { es: 'Limonada',                                                        en: 'Lemonade',        price: '$3.50' },
        { es: 'Agua De Panela',                                                                         price: '$3.50' },
        { es: 'Morir Soñando',                                                   en: 'Dominican Drink', price: '$3.50' },
        { es: 'Cerveza',                                                         en: 'Beer',            price: '$3.50' },
        { es: 'Red Bull',                                                                               price: '$3.00' },
      ],
    },
    {
      title: 'Antojitos / Appetizers', emoji: '🥟',
      items: [
        { es: 'Empanadas De Carne',                    en: 'Meat Empanadas',                                                          price: '$1.25' },
        { es: 'Empanadas De Pollo',                    en: 'Chicken Empanadas',                                                       price: '$1.25' },
        { es: 'Empanadas De Queso',                    en: 'Cheese Empanadas',                                                        price: '$1.50' },
        { es: 'Salchipapa',                            en: 'Chopped Sausage & French Fries',                                          price: '$7.00', img: IMG('SaborRestaurantAndBakery_Salchipapa.jpg') },
        { es: 'Salchipapa El "Sabor"',                 en: 'Chopped Sausage, Creole Sauce Sausage & French Fries',                    price: '$7.00', img: IMG('SaborRestaurantAndBakery_Salchipapa.jpg') },
        { es: 'Salchicha Chorizo Y Morcilla',          en: 'Chopped Sausage, Creole Sauce Sausage, Blood Sausage & French Fries',     price: '$8.50', img: IMG('SaborRestaurantAndBakery_Salchipapa.jpg') },
        { es: 'Arepa Con Carne Desmechada',            en: 'Corn Cake w/Shredded Meat',                                              price: '$7.00' },
        { es: 'Arepa Con Aguacate Y Chicharrones',     en: 'Corn Cake, Avocado & Pork Rinds',                                        price: '$9.00' },
        { es: 'Patacón Con Carne Desmechada',          en: 'Large Plantains w/Shredded Meat',                                        price: '$7.50' },
        { es: 'Tamales',                                                                                                               price: '$7.00' },
        { es: 'Deditos De Pollo Con Papitas',          en: 'Chicken Fingers with French Fries',                                       price: '$8.00' },
        { es: 'Chicharrón De Cerdo',                   en: 'Fried Pork Rinds',                                                        price: '$4.00' },
        { es: 'Morcilla',                              en: 'Blood Sausage',                                                           price: '$3.50' },
        { es: 'Salami',                                                                                                                price: '$3.25' },
        { es: 'Chorizo',                               en: 'Colombian Sausage',                                                       price: '$3.50' },
        { es: 'Quesadilla De Pollo ó Bistec ó Queso',  en: 'Chicken, Steak, or Cheese Quesadilla',                                   price: '$6.00' },
        { es: 'Bananas',                                                                                                               price: '$0.50' },
      ],
    },
    {
      title: 'Desayunos / Breakfast', emoji: '🍳',
      items: [
        { es: 'Desayuno 1',                                           en: 'Rice & Beans, Colombian Style Eggs, Grilled Skirt Steak or Sirloin Steak',                   price: '$14.00' },
        { es: 'Desayuno 2',                                           en: 'Rice & Beans, Colombian Style Eggs & Grilled Boneless Chicken',                              price: '$9.50'  },
        { es: 'Desayuno Ejecutivo',                                   en: 'Rice & Beans or Cheese Corn Cake, Colombian Style Eggs, Grilled Steak or Chicken',           price: '$10.00' },
        { es: 'Desayuno Sabor',                                       en: 'Rice & Beans, Colombian Style Eggs, Grilled Steak, Fried Pork Rings & Sweet Plantains',      price: '$13.00' },
        { es: 'Arepa Con Queso',                                      en: 'Corn Cake with Cheese',                                                                      price: '$4.00'  },
        { es: 'Arepa Rellena',                                        en: 'Corn Cake with Stuffed Colombian Style Eggs',                                                 price: '$7.00'  },
        { es: 'Arepa Con Queso, Huevos Pericos Y Queso',              en: 'Corn Cake with side Colombian Style Eggs',                                                   price: '$7.00'  },
        { es: 'Arepa Con Queso, Chicharrón ó Carne Asada ó Chorizo',  en: 'Corn Cake with Cheese, Fried Pork Rings, Grilled Steak, or Sausage',                        price: '$10.00' },
        { es: 'Calentado Con Arepita',                                en: 'Mixed Rice & Beans with Corn Cake',                                                          price: '$4.00'  },
        { es: 'Calentado Con Carne ó Pechuga',                        en: 'Mixed Rice & Beans with Grilled Steak or Chicken',                                           price: '$9.00'  },
        { es: 'Calentado Con Huevos Pericos',                         en: 'Mixed Rice & Beans with Colombian Style Eggs',                                               price: '$6.50'  },
        { es: 'Mangú Tres Golpes',                                    en: 'Mashed Green Plantains, Eggs, Salami, Fried Cheese',                                         price: '$7.00'  },
        { es: 'Huevos Al Gusto',                                      en: 'Any Style Eggs',                                                                              price: '$3.50'  },
        { es: 'Arroz Con Huevos',                                     en: 'Rice with Colombian Style Eggs',                                                              price: '$5.00'  },
        { es: 'Longaniza',                                            en: 'Dominican Sausage',                                                                           price: '$4.00'  },
      ],
    },
    {
      title: 'Desayunos Americanos / American Breakfast', emoji: '🥞',
      items: [
        { es: 'Papas Caseras, Tocino Y Huevos',       en: 'Home Fries, Bacon & Eggs',         price: '$5.00' },
        { es: 'Pan Tostado Francés, Tocino Y Huevo',  en: 'French Toast, Bacon & Egg',        price: '$5.00' },
        { es: 'Panqueques, Tocino Y Huevo',           en: 'Pancakes, Bacon & Egg',            price: '$5.00' },
        { es: 'Croissant Con Jamón, Queso Y Huevos',  en: 'Croissant w/Ham, Cheese & Eggs',   price: '$5.00' },
        { es: 'Tortillas De Cualquier Estilo',        en: 'Omelets Any Style',                price: '$6.99' },
        { es: 'Torino, Huevos Y Queso',               en: 'Bacon, Eggs & Cheese',             price: '$4.50' },
      ],
    },
    {
      title: 'Buffet Caliente Diario / Hot Daily Buffet', emoji: '🍲',
      note: 'Weekends add $1.00',
      items: [
        { es: 'Buffet Caliente Diario',  en: 'Hot Buffet Daily — Call for details',    price: 'Sm $7.00 / Lg $10.00' },
        { es: 'Complemento Con Sopa',    en: 'Buffet with Soup — Call for details',    price: 'Sm $8.00 / Lg $11.00' },
      ],
    },
    {
      title: 'Sopas / Soups', emoji: '🥣',
      note: 'Pequeño (Small) $3.00  ·  Grande (Large) $5.00',
      items: [
        { es: 'Sopa Del Lunes',     en: 'Monday — Meat or Lentil Soup',                         price: '$3.00 / $5.00', img: IMG('SaborRestaurantAndBakery_LentalSoup.jpg') },
        { es: 'Sopa Del Martes',    en: 'Tuesday — Mixed or Chicken Trifle Soup',               price: '$3.00 / $5.00' },
        { es: 'Sopa Del Miércoles', en: "Wednesday — Potato & Chilli Stew or Cow's Leg Soup",   price: '$3.00 / $5.00' },
        { es: 'Sopa Del Jueves',    en: 'Thursday — Tripe or Green Plantains Soup',             price: '$3.00 / $5.00' },
        { es: 'Sopa Del Viernes',   en: 'Friday — Chicken or Fish Soup',                        price: '$3.00 / $5.00' },
        { es: 'Sopa Del Sábado',    en: 'Saturday — Seafood or Beef Soup',                      price: '$3.00 / $5.00' },
        { es: 'Sopa Del Domingo',   en: 'Sunday — Rib Soup or Hen Stew',                        price: '$3.00 / $5.00' },
      ],
    },
    {
      title: 'Platos Típicos / Typical Dishes', emoji: '🫕',
      items: [
        { es: 'Bandeja Paisa Con Churrasco',   en: '½ Sirloin Steak, Colombian Sausage, Pork Rinds, Eggs, Corn Cake, Sweet Plantains, Avocado, Rice & Beans',      price: '$20.00' },
        { es: 'Bandeja Paisa Con Entraña',     en: '½ Skirt Steak, Colombian Sausage, Pork Rinds, Eggs, Corn Cake, Sweet Plantains, Avocado, Rice & Beans',        price: '$21.00' },
        { es: 'Mini Bandeja Paisa',            en: 'Steak or Chicken or ¼ Rotisserie Chicken, Colombian Sausage, Pork Rinds, Eggs, Corn Cake, Avocado, R&B',       price: '$12.00' },
        { es: 'Super Bandeja Paisa',           en: 'Steak or Chicken or ¼ Rotisserie Chicken, Colombian Sausage, Pork Rinds, Eggs, Corn Cake, Avocado, R&B',       price: '$14.95' },
        { es: 'Bandeja Mixta',                 en: 'Shrimp, Skirt Steak, Colombian Sausage, Pork Rinds, Eggs, Corn Cake, Sweet Plantains, Avocado, Rice & Beans',  price: '$24.00' },
        { es: 'Bistec A Caballo Con Huevos',   en: 'Steak, Rice, Beans, Sweet Plantain & Salad',                                                                   price: '$14.50' },
        { es: 'Picada Para Cuatro',            en: 'Colombian Sausage, Pork Rinds, Blood Sausage, Sausage, Salami, Corn Cake, Salted Potatoes & Green Plantains',  price: '$24.00' },
      ],
    },
    {
      title: 'Pollo / Chicken', emoji: '🍗',
      note: 'Served with Rice, Beans, Sweet Plantain & Salad',
      items: [
        { es: 'Arroz Con Pollo',                  en: 'Chicken, Rice, Salad & French Fries',   price: '$10.00', img: IMG('SaborRestaurantAndBakery_PolloGizado.jpg') },
        { es: 'Pechuga Empanizada',               en: 'Breaded Chicken Breast',                price: '$13.00', img: IMG('Pechuga a la Plancha.jpg') },
        { es: 'Pechuga Al Limón',                 en: 'Chicken Breast in Lemon',               price: '$13.00', img: IMG('Pechuga a la Plancha.jpg') },
        { es: 'Pechuga Ala Hawaiana',             en: 'Chicken Breast in Hawaiian Sauce',      price: '$13.00', img: IMG('Pechuga a la Plancha.jpg') },
        { es: 'Pechuga En Salsa De Champiñones',  en: 'Chicken Breast in Mushroom Sauce',      price: '$13.00', img: IMG('Pechuga a la Plancha.jpg') },
        { es: 'Pechuga A La Plancha',             en: 'Grilled Chicken Breast',                price: '$13.00', img: IMG('Pechuga a la Plancha.jpg') },
        { es: 'Pollo A La Brasa ¼',               en: 'Rotisserie ¼ Chicken',                  price: '$9.50',  img: IMG('SaborRestaurantAndBakery_BakedChicken.jpg') },
        { es: 'Pollo A La Brasa ½',               en: 'Rotisserie ½ Chicken',                  price: '$12.00', img: IMG('SaborRestaurantAndBakery_BakedChicken.jpg') },
        { es: 'Chicharrón De Pollo',              en: 'Fried Chicken Chunks',                  price: '$9.00'  },
      ],
    },
    {
      title: 'Carnes / Steak', emoji: '🥩',
      note: 'Served with Rice, Beans, Sweet Plantain & Salad',
      items: [
        { es: 'Bistec En Salsa Criolla',        en: 'Steak in Creole Sauce',         price: '$14.75', img: IMG('SaborRestaurantAndBakery_CarneGizada.jpg') },
        { es: 'Bistec Encebollado',             en: 'Steak with Onions',             price: '$16.00', img: IMG('SaborRestaurantAndBakery_CarneGizada.jpg') },
        { es: 'Lengua Ala Plancha',             en: 'Grilled Beef Tongue',           price: '$17.00' },
        { es: 'Lengua En Salsa Criolla',        en: 'Beef Tongue in Creole Sauce',   price: '$18.00' },
        { es: 'Entraña',                        en: 'Skirt Steak',                   price: '$24.00', img: IMG('SaborRestaurantAndBakery_CarneGizada.jpg') },
        { es: 'Carne Asada',                    en: 'Grilled Steak',                 price: '$13.25', img: IMG('SaborRestaurantAndBakery_CarneGizada.jpg') },
        { es: 'Churrasco',                      en: 'Grilled Sirloin Steak',         price: '$23.00', img: IMG('SaborRestaurantAndBakery_CarneGizada.jpg') },
        { es: 'Milanesa De Carne',              en: 'Breaded Steak',                 price: '$13.00' },
        { es: 'Hígado A La Plancha',            en: 'Grilled Liver',                 price: '$9.25'  },
        { es: 'Sobrebarriga A La Plancha',      en: 'Grilled Steak Loin',            price: '$18.00' },
        { es: 'Sobrebarriga En Salsa Criolla',  en: 'Steak Loin in Creole Sauce',    price: '$19.00' },
      ],
    },
    {
      title: 'Cerdo / Pork', emoji: '🐷',
      note: 'Served with Rice, Beans, Sweet Plantain & Salad',
      items: [
        { es: 'Lomo (Chuleta) Salteado',            en: 'Sautéed Pork Chops',   price: '$13.00' },
        { es: 'Lomo (Chuleta) De Cerdo Empanizado',  en: 'Breaded Pork Chops',  price: '$12.50' },
        { es: 'Lomo (Chuleta) Asada',               en: 'Grilled Pork Chops',   price: '$12.50' },
        { es: 'Pernil',                             en: 'Roast Pork',           price: '$9.00',  img: IMG('SaborRestaurantAndBakery_Pernil.jpg') },
      ],
    },
    {
      title: 'Marisco / Seafood', emoji: '🦐',
      note: 'Served with Rice, Green Plantain & Salad',
      items: [
        { es: 'Arroz Con Camarones',                               en: 'Rice with Shrimp',                              price: '$15.50' },
        { es: 'Trucha Frita',                                      en: 'Fried Trout',                                   price: '$15.00' },
        { es: 'Trucha Sudada',                                     en: 'Steam Trout',                                   price: '$15.00' },
        { es: 'Arroz A La Marinera',                               en: 'Mixed Seafood with Rice',                       price: '$20.00' },
        { es: 'Cazuela De Mariscos',                               en: 'Seafood Casserole',                             price: '$20.00' },
        { es: 'Pargo Rojo',                                        en: 'Red Snapper',                                   price: '$20.00' },
        { es: 'Filete Marinado',                                   en: 'Marinade Fillet',                               price: '$22.00' },
        { es: 'Filete Al Ajillo',                                  en: 'Fillet Fish in Garlic Sauce',                   price: '$16.00' },
        { es: 'Filete En Limón',                                   en: 'Fillet Fish in Lemon Sauce',                    price: '$16.00' },
        { es: 'Camarones Ala Ajillo',                              en: 'Shrimp in Garlic Sauce',                        price: '$16.00' },
        { es: 'Pargo Marinera',                                    en: 'Marinade Red Snapper',                          price: '$25.00' },
        { es: 'Mojarra Frita',                                     en: 'Fried Two Banded Sea Bream',                    price: '$16.75' },
        { es: 'Entraña Marinera',                                  en: 'Skirt Steak in Marinade Sauce',                 price: '$23.00' },
        { es: 'Churrasco Marinera',                                en: 'Steak in Marinade Sauce',                       price: '$24.00' },
        { es: 'Filete De Tilapia Con Camarones En Salsa Maracuyá', en: 'Tilapia Fillet with Shrimp in Passion Fruit Sauce', price: '$23.00' },
        { es: 'Salmón Con Camarones Al Ajillo',                    en: 'Salmon with Shrimp in Garlic Sauce',            price: '$20.00' },
        { es: 'Filete De Pescado Ala Plancha',                     en: 'Grilled Fish Fillet',                           price: '$15.00' },
      ],
    },
    {
      title: 'Ensaladas / Salads', emoji: '🥗',
      items: [
        { es: 'Ensalada Mixta',                  en: 'Mixed Salad',         price: 'Sm $3.95 / Lg $5.95' },
        { es: 'Ensalada De Repollo De La Casa',  en: 'House Cabbage Salad', price: 'Sm $3.95 / Lg $5.95' },
        { es: 'Ensalada De Aguacate',            en: 'Avocado Salad',       price: 'Sm $4.95 / Lg $6.95', img: IMG('Ensalada de Aguacate.jpg') },
        { es: 'Ensalada De Pollo',               en: 'Chicken Salad',       price: '$7.50' },
        { es: 'Ensalada De César',               en: 'Caesar Salad',        price: '$9.00' },
        { es: 'Ensalada Camarones',              en: 'Shrimp Salad',        price: '$9.00' },
        { es: 'Ensalada De Pollo BBQ',           en: 'BBQ Chicken Salad',   price: '$8.00' },
        { es: 'Vegetales Al Vapor',              en: 'Steamed Vegetables',  price: '$7.50' },
      ],
    },
    {
      title: 'Sándwiches Y Hamburguesas / Sandwiches & Burgers', emoji: '🥪',
      items: [
        { es: 'Cubano Sandwich',                         en: 'Cuban Sandwich',                           price: '$6.00' },
        { es: 'Bistec Con Queso Sandwich',               en: 'Steak w/Cheese Sandwich',                  price: '$6.00', img: IMG('SaborRestaurantAndBakery_BeefWarp.jpg') },
        { es: 'Sándwich De Pollo',                       en: 'Chicken Sandwich',                         price: '$6.00', img: IMG('SaborRestaurantAndBakery_ChickenWarp.jpg') },
        { es: 'Chimi De Bistec Sandwich',                en: 'Cabbage, Ketchup, Mayo w/Steak Sandwich',  price: '$6.00', img: IMG('SaborRestaurantAndBakery_BeefWarp.jpg') },
        { es: 'Chimi De Pollo Sandwich',                 en: 'Cabbage, Ketchup, Mayo w/Chicken Sandwich', price: '$6.00', img: IMG('Chimi de Pollo Sandwich.jpg') },
        { es: 'Hamburguesa',                             en: 'Hamburger',                                price: '$5.00' },
        { es: 'Hamburguesa Con Papas Fritas',            en: 'Hamburger with French Fries',              price: '$7.00' },
        { es: 'Hamburguesa Colombiana Con Papas Fritas', en: 'Colombian Style Hamburger with Fries',     price: '$7.00' },
      ],
    },
    {
      title: 'Mofongo', emoji: '🫙',
      items: [
        { es: 'Camarones', en: 'Shrimp',          price: '$14.00', img: IMG('SaborRestaurantAndBakery_moforgo.jpg') },
        { es: 'Bistec',    en: 'Steak',           price: '$9.00',  img: IMG('SaborRestaurantAndBakery_moforgo.jpg') },
        { es: 'Pollo',     en: 'Chicken',         price: '$9.00',  img: IMG('SaborRestaurantAndBakery_moforgo.jpg') },
        { es: 'Chicharrón', en: 'Fried Pork Skin', price: '$9.00', img: IMG('SaborRestaurantAndBakery_moforgo.jpg') },
        { es: 'Pernil',    en: 'Roast Pork',      price: '$9.00',  img: IMG('SaborRestaurantAndBakery_Pernil.jpg') },
      ],
    },
    {
      title: 'Postres / Desserts', emoji: '🍮',
      items: [
        { es: 'Flan',            price: '$4.00', img: IMG('SaborRestaurantAndBakery_Fan.jpg') },
        { es: 'Tiramisú',        price: '$4.00' },
        { es: 'Tres Leches',     price: '$4.00' },
        { es: 'Arroz Con Leche', en: 'Rice Pudding', price: '$3.00' },
        { es: 'Avena',           en: 'Oatmeal',      price: '$3.00' },
        { es: 'Gelatina',        en: 'Jello',        price: '$2.50' },
      ],
    },
    {
      title: 'Órdenes Extras / Side Orders', emoji: '🍚',
      items: [
        { es: 'Arroz Blanco',                          en: 'White Rice',                           price: 'Sm $2.50 / Lg $5.50' },
        { es: 'Arroz Moro',                            en: 'Pigeon Peas Rice',                     price: 'Sm $2.50 / Lg $5.50' },
        { es: 'Arroz Mixto',                           en: 'Mixed Rice',                           price: 'Sm $2.50 / Lg $5.00' },
        { es: 'Carnes',                                en: 'Meat',                                 price: 'Sm $5.00 / Lg $15.00' },
        { es: 'Carne Molida',                          en: 'Ground Meat',                          price: 'Sm $5.00 / Lg $15.00' },
        { es: 'Arepas',                                en: 'Corn Cake',                            price: 'Sm $1.00 / Lg $2.00' },
        { es: 'Guacamole',                                                                         price: '$7.00',  img: IMG('SaborRestaurantAndBakery_Guacamole.jpg') },
        { es: 'Guacamole Con Tostones',                en: 'Guacamole with Fried Plantain',        price: '$10.00', img: IMG('SaborRestaurantAndBakery_Guacamole.jpg') },
        { es: 'Guacamole Con Chicharrones Y Tostones', en: 'Guacamole with Pork Rings & Fried Plantain', price: '$11.00', img: IMG('SaborRestaurantAndBakery_Guacamole.jpg') },
        { es: 'Aguacate',                              en: 'Avocado',                              price: '$3.00' },
        { es: 'Pollo A La Brasa (Entero)',             en: 'Whole Rotisserie Chicken',             price: '$10.00', img: IMG('SaborRestaurantAndBakery_BakedChicken.jpg') },
        { es: 'Pollo A La Brasa ¼',                   en: '¼ Rotisserie Chicken',                 price: '$3.25',  img: IMG('SaborRestaurantAndBakery_BakedChicken.jpg') },
        { es: 'Pollo A La Brasa ½',                   en: '½ Rotisserie Chicken',                 price: '$5.25',  img: IMG('SaborRestaurantAndBakery_BakedChicken.jpg') },
      ],
    },
    {
      title: 'Combos', emoji: '🎉',
      items: [
        { es: 'Combo #1', en: 'Rotisserie Chicken, Rice, Beans, 2Lt Soda & Salad',                              price: '$19.00' },
        { es: 'Combo #2', en: '2 Rotisserie Chickens, Rice, Beans, 2Lt Soda & Salad',                           price: '$27.00' },
        { es: 'Combo #3', en: '2 Rotisserie Chickens, Rice, Beans, Fries or Yuca Fries, 2Lt Soda & Salad',      price: '$30.00' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">

      {/* ── Mobile bottom sheet ── */}
      {sheetItem && (
        <div className="fixed inset-0 z-[100] lg:hidden" aria-modal="true">
          {/* Backdrop */}
          <div
            className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-400 ${sheetVisible ? 'opacity-100' : 'opacity-0'}`}
            onClick={closeSheet}
          />
          {/* Sheet */}
          <div
            className={`absolute bottom-0 left-0 right-0 bg-zinc-950 rounded-t-3xl overflow-hidden transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${sheetVisible ? 'translate-y-0' : 'translate-y-full'}`}
          >
            {/* Drag handle */}
            <div className="flex justify-center pt-3 pb-1">
              <div className="w-10 h-1 rounded-full bg-zinc-700" />
            </div>
            {/* Image */}
            {sheetItem.img && (
              <div className="relative w-full h-64 sm:h-80">
                <Image
                  src={sheetItem.img}
                  alt={sheetItem.es}
                  fill
                  sizes="100vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
              </div>
            )}
            {/* Info */}
            <div className="p-6 pb-10">
              {sheetItem.en && <p className="text-amber-400 text-xs tracking-widest uppercase mb-1">{sheetItem.en}</p>}
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-2xl font-black text-white">{sheetItem.es}</h3>
                <span className="text-2xl font-black text-amber-400 shrink-0">{sheetItem.price}</span>
              </div>
              <button
                onClick={closeSheet}
                className="mt-6 w-full py-3 rounded-2xl bg-zinc-800 hover:bg-zinc-700 text-gray-300 font-semibold transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Navigation ── */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-xl shadow-2xl py-2">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div><PotIcon /></div>
            <div className="hidden md:flex space-x-8 items-center">
              {([['/', 'Home'], ['/about', 'About'], ['/menu', 'Menu'], ['/catering', 'Catering'], ['/contact', 'Contact']] as [string,string][]).map(([href, label]) => (
                <Link key={href} href={href} className={`transition-all duration-300 relative group ${href === '/menu' ? 'text-amber-400' : 'text-white/70 hover:text-white'}`}>
                  {label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-300 ${href === '/menu' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </Link>
              ))}
            </div>
            <a href="tel:3473684407" className="hidden md:block bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-3 rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-amber-500/50">
              Order Now
            </a>
            <button className="md:hidden text-white" onClick={() => setIsNavOpen(!isNavOpen)}>
              {isNavOpen ? <X size={28} /> : <MenuIcon size={28} />}
            </button>
          </div>
        </div>
        <div className={`md:hidden absolute top-20 left-0 w-full bg-black/95 backdrop-blur-xl transition-all duration-300 ${isNavOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <div className="flex flex-col space-y-4 p-6">
            {([['/', 'Home'], ['/about', 'About'], ['/menu', 'Menu'], ['/catering', 'Catering'], ['/contact', 'Contact']] as [string,string][]).map(([href, label]) => (
              <Link key={href} href={href} className={`text-lg transition ${href === '/menu' ? 'text-amber-400' : 'hover:text-amber-400'}`} onClick={() => setIsNavOpen(false)}>{label}</Link>
            ))}
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section
        className="relative h-[45vh] flex items-center justify-center overflow-hidden mt-20"
        style={{
          background: `linear-gradient(to bottom, rgba(0,0,0,0.65), rgba(0,0,0,0.55)), url('/images/menu/SaborRestaurantAndBakery_Hero.jpg')`,
          backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed',
        }}
      >
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent mb-3">
            Our Menu
          </h1>
          <p className="text-lg text-white/75">Authentic Dominican & Colombian cuisine</p>
        </div>
      </section>

      {/* ── Location Tabs (sticky) ── */}
      <div className="sticky top-20 z-40 bg-black/95 backdrop-blur-xl border-b border-zinc-800 py-3">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {locations.map((loc) => (
              <button
                key={loc.id}
                onClick={() => setActiveLocation(loc.id)}
                className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                  activeLocation === loc.id
                    ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg shadow-amber-500/40 scale-105'
                    : 'bg-zinc-900 text-gray-400 hover:text-white hover:bg-zinc-800'
                }`}
              >
                <span className="flex items-center gap-1.5"><MapPin size={14} />{loc.name}</span>
              </button>
            ))}
          </div>
          <p className="text-center text-gray-600 text-xs mt-2">
            {locations.find(l => l.id === activeLocation)?.address}
          </p>
        </div>
      </div>

      {/* ── Menu Content ── */}
      <section className="py-10 bg-gradient-to-b from-zinc-950 to-black min-h-screen">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

          {/* College Point — two-column layout */}
          {activeLocation === 'college-point' && (
            <>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-black bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  College Point
                </h2>
                <p className="text-gray-500 text-sm mt-1">15-20 College Point Blvd · Open 7 Days 6:30 AM – 10:00 PM</p>
                <p className="text-amber-500/50 text-xs mt-1.5 lg:block hidden">Hover an item to preview it →</p>
                <p className="text-amber-500/50 text-xs mt-1.5 lg:hidden">Tap a highlighted item to see a photo</p>
              </div>

              <div className="lg:flex lg:gap-6 lg:items-start">

                {/* ── Left: menu list ── */}
                <div className="flex-1 min-w-0 space-y-4">
                  {collegePointMenu.map((section) => (
                    <div key={section.title} className="bg-zinc-900/50 rounded-2xl border border-zinc-800 overflow-hidden">
                      {/* Section header */}
                      <div className="px-5 py-4 bg-zinc-900 border-b border-zinc-800 flex items-center gap-2.5">
                        <span className="text-xl">{section.emoji}</span>
                        <div>
                          <h3 className="text-base font-black text-white leading-tight">{section.title}</h3>
                          {section.note && <p className="text-amber-400 text-xs mt-0.5">{section.note}</p>}
                        </div>
                      </div>
                      {/* Items */}
                      <div className="divide-y divide-zinc-800/30">
                        {section.items.map((item, i) => (
                          <div
                            key={i}
                            onMouseEnter={() => handleItemHover(item)}
                            onClick={() => item.img && openSheet(item)}
                            className={`flex items-center gap-2 px-5 py-3 transition-colors group select-none
                              ${item.img ? 'cursor-pointer hover:bg-amber-500/8 active:bg-amber-500/15' : ''}`}
                          >
                            {/* Dot indicator for items with photos */}
                            <span className={`w-1.5 h-1.5 rounded-full shrink-0 transition-colors ${item.img ? 'bg-amber-500/60 group-hover:bg-amber-400' : 'bg-transparent'}`} />
                            <div className="flex-1 min-w-0">
                              <p className={`text-sm font-semibold leading-snug transition-colors ${item.img ? 'group-hover:text-amber-300' : 'text-white/90'}`}>
                                {item.es}
                              </p>
                              {item.en && <p className="text-gray-600 text-xs mt-0.5 leading-snug">{item.en}</p>}
                            </div>
                            <span className="text-amber-400 font-bold text-xs whitespace-nowrap shrink-0 ml-2">{item.price}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* ── Right: sticky image panel (desktop only) ── */}
                <div className="hidden lg:block w-80 xl:w-96 shrink-0 sticky top-[calc(5rem+3.5rem)]" style={{ height: 'calc(100vh - 9rem)' }}>
                  <div className="h-full rounded-2xl overflow-hidden border border-zinc-800 relative bg-zinc-900">

                    {/* Default / placeholder state */}
                    {!panelItem && (
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8"
                           style={{
                             background: `linear-gradient(135deg, rgba(0,0,0,0.9), rgba(20,10,0,0.95)), url('/images/menu/SaborRestaurantAndBakery_Hero.jpg')`,
                             backgroundSize: 'cover', backgroundPosition: 'center',
                           }}>
                        <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center mb-4">
                          <span className="text-2xl">🍽️</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          Hover any highlighted item<br/>to preview the dish
                        </p>
                        <div className="mt-6 flex flex-col gap-1.5">
                          {['Pollo A La Brasa ¼', 'Mofongo', 'Pernil', 'Salchipapa', 'Guacamole'].map(name => (
                            <span key={name} className="text-xs text-zinc-600">· {name}</span>
                          ))}
                          <span className="text-xs text-zinc-700 mt-1">+ more…</span>
                        </div>
                      </div>
                    )}

                    {/* Photo display */}
                    {panelItem?.img && (
                      <div
                        className="absolute inset-0 transition-opacity duration-300"
                        style={{ opacity: panelOpacity }}
                      >
                        <Image
                          src={panelItem.img}
                          alt={panelItem.es}
                          fill
                          sizes="(max-width: 1280px) 320px, 384px"
                          className="object-cover"
                          priority
                        />
                        {/* Bottom gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                        {/* Item info */}
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          {panelItem.en && (
                            <p className="text-amber-400 text-xs tracking-widest uppercase mb-1">{panelItem.en}</p>
                          )}
                          <div className="flex items-end justify-between gap-2">
                            <h3 className="text-xl font-black text-white leading-tight">{panelItem.es}</h3>
                            <span className="text-2xl font-black text-amber-400 shrink-0">{panelItem.price}</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Queens Library */}
          {activeLocation === 'queens' && (
            <div className="text-center py-24 max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 p-16 rounded-3xl border border-amber-500/30">
                <span className="text-6xl mb-6 block">📋</span>
                <h2 className="text-4xl font-black mb-3 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Queens Library Menu</h2>
                <p className="text-xl text-gray-300 mb-2">89-11 Merrick Blvd, Jamaica, NY 11432</p>
                <p className="text-gray-400 mb-8">Full menu coming soon — call us for today&apos;s daily lunch specials!</p>
                <a href="tel:3473684407" className="inline-block bg-gradient-to-r from-amber-500 to-orange-600 text-white px-10 py-5 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-amber-500/50">
                  Call for Today&apos;s Menu: (347) 368-4407
                </a>
              </div>
            </div>
          )}

          {/* JFK & Brooklyn */}
          {(activeLocation === 'jfk' || activeLocation === 'brooklyn') && (
            <div className="text-center py-24 max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 p-16 rounded-3xl border border-amber-500/30">
                <span className="text-6xl mb-6 block">🚧</span>
                <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Coming Soon!</h2>
                <p className="text-2xl text-gray-300 mb-8">Our {activeLocation === 'jfk' ? 'JFK Airport' : 'Brooklyn'} location menu will be available soon.</p>
                <a href="tel:3473684407" className="inline-block bg-gradient-to-r from-amber-500 to-orange-600 text-white px-10 py-5 rounded-full text-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-amber-500/50">
                  Call for Details: (347) 368-4407
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── Footer ── */}
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
                {([['/', 'Home'], ['/about', 'About'], ['/menu', 'Menu'], ['/catering', 'Catering'], ['/contact', 'Contact']] as [string,string][]).map(([href, label]) => (
                  <li key={href}><Link href={href} className="hover:text-white transition">{label}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 text-amber-400">Contact</h4>
              <ul className="space-y-3 text-gray-400">
                <li>(347) 368-4407</li><li>Multiple Locations</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 text-amber-400">Follow Us</h4>
              <div className="flex gap-4">
                <a href="https://instagram.com/saborrestaurantbakery" target="_blank" className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center hover:scale-110 transition-all"><Instagram size={20} /></a>
                <a href="https://facebook.com/saborrestaurantbakery" target="_blank" className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center hover:scale-110 transition-all"><Facebook size={20} /></a>
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
