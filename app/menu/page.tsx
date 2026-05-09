'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Instagram, Facebook, Menu as MenuIcon, X, MapPin, UtensilsCrossed, ShoppingBag } from 'lucide-react';
import PotIcon from '@/PotIcon';

type MenuItem    = { es: string; en?: string; price: string };
type MenuSection = { es: string; en: string; emoji: string; note?: string; noteEn?: string; items: MenuItem[] };
type DeliItem    = { en: string; es: string; price: string };
type DeliSection = { en: string; es: string; emoji: string; items: DeliItem[] };

/* ─── Restaurant: College Point ─────────────────────────────── */
const restaurantMenu: MenuSection[] = [
  {
    es: 'Panadería', en: 'Bakery', emoji: '🥐',
    items: [
      { es: 'Pan De Bono',                       en: 'Colombia Style Bread',               price: '$1.20' },
      { es: 'Pan De Queso',                      en: 'Colombian Style Bread w/Cheese',     price: '$1.20' },
      { es: 'Pan Con Queso Pequeño',             en: 'Colombian Bread w/Cheese — Small',   price: '$1.50' },
      { es: 'Pan Con Queso Grande',              en: 'Colombian Bread w/Cheese — Large',   price: '$3.60' },
      { es: 'Arepa De Choclo',                   en: 'Sweet Corn Cake',                    price: '$1.50' },
      { es: 'Arepa De Choclo Con Queso',         en: 'Sweet Corn Cake with Cheese',        price: '$2.50' },
      { es: 'Torta De Arequipe',                 en: 'Arequipe Cake',                      price: '$2.00' },
      { es: 'Achira',                            en: 'Achira Cookie',                      price: '$1.50' },
      { es: 'Galletas',                          en: 'Cookies',                            price: '$0.75' },
      { es: 'Buñuelo',                           en: 'Fritter',                            price: '$1.00' },
      { es: 'Empanada De Cambray',               en: 'Guava Pastry',                       price: '$1.50' },
      { es: 'Croissant',                         en: 'Croissant',                          price: '$1.25' },
      { es: 'Croissant Integral',                en: 'Whole Wheat Croissant',              price: '$1.50' },
      { es: 'Croissant Con Queso',               en: 'Croissant with Cheese',              price: '$1.50' },
      { es: 'Mogolla',                           en: 'Colombian Roll',                     price: '$1.25' },
      { es: 'Pan Integral',                      en: 'Whole Wheat Bread',                  price: '$1.25' },
      { es: 'Pan De Yuca',                       en: 'Cassava Bread',                      price: '$1.25' },
      { es: 'Chicharrón De Guayaba',             en: 'Guava Greaves Bread',                price: '$1.75' },
      { es: 'Roscón De Guayaba ó De Arequipe',  en: 'Guava Ring-shaped Cake',             price: '$3.50' },
      { es: 'Orejas',                            en: 'Palmier Cookies',                    price: '$1.75' },
    ],
  },
  {
    es: 'Jugos Naturales y Batidos', en: 'Juices & Shakes', emoji: '🥤',
    note: 'Jugos $3.50  ·  Batidas $4.00', noteEn: 'Juices $3.50  ·  Shakes $4.00',
    items: [
      { es: 'Mora',          en: 'Blackberry',          price: '$3.50 / $4.00' },
      { es: 'Guayaba',       en: 'Guava',               price: '$3.50 / $4.00' },
      { es: 'Maracuyá',      en: 'Passion Fruit',       price: '$3.50 / $4.00' },
      { es: 'Piña',          en: 'Pineapple',           price: '$3.50 / $4.00' },
      { es: 'Lulo',          en: 'Naranjilla',          price: '$3.50 / $4.00' },
      { es: 'Papaya',        en: 'Papaya',              price: '$3.50 / $4.00' },
      { es: 'Mango',         en: 'Mango',               price: '$3.50 / $4.00' },
      { es: 'Fresa Con Banano', en: 'Strawberry Banana', price: '$3.50 / $4.00' },
      { es: 'Banana',        en: 'Banana',              price: '$3.50 / $4.00' },
      { es: 'Tomate De Árbol', en: 'Tree Tomato',       price: '$3.50 / $4.00' },
      { es: 'Guanábana',     en: 'Soursop',             price: '$3.50 / $4.00' },
      { es: 'Fresa',         en: 'Strawberry',          price: '$3.50 / $4.00' },
    ],
  },
  {
    es: 'Bebidas', en: 'Beverages', emoji: '☕',
    note: 'Pequeño / Grande', noteEn: 'Small / Large',
    items: [
      { es: 'Café',                                                en: 'Coffee',          price: '$1.00 / $1.50' },
      { es: 'Té',                                                  en: 'Tea',             price: '$1.00 / $1.50' },
      { es: 'Chocolate',                                           en: 'Hot Chocolate',   price: '$1.75 / $2.50' },
      { es: 'Milo',                                                en: 'Milo',            price: '$1.50 / $3.00' },
      { es: 'Jugos Hit',                                           en: 'Hit Juice',       price: '$1.75 / $3.00' },
      { es: 'Agua En Botella',                                     en: 'Bottled Water',   price: '$1.00 / $1.50' },
      { es: 'Colombiana / Manzana / Postobon / Inca / Popular',   en: 'Colombian Sodas', price: '$1.50' },
      { es: 'Pepsi / Sprite / Coke / Ginger-Ale',                 en: 'American Sodas',  price: '$1.50' },
      { es: 'Jugo Tropicana',                                      en: 'Tropicana Juice', price: '$2.00' },
      { es: 'Country Club Soda',                                   en: 'Country Club Soda', price: '$1.75' },
      { es: 'Aloe Vera',                                           en: 'Aloe Vera',       price: '$2.00' },
      { es: 'Pony Malta',                                          en: 'Pony Malta',      price: '$1.75' },
      { es: 'Kumis',                                               en: 'Kumis',           price: '$3.25' },
      { es: 'Café Helado',                                         en: 'Iced Coffee',     price: '$2.00' },
      { es: 'Avena Alpina',                                        en: 'Oat Drink',       price: '$2.00' },
      { es: 'Soda De 2 Litros',                                    en: '2-Liter Soda',    price: '$3.00' },
      { es: 'Snapple / Gatorade',                                  en: 'Snapple / Gatorade', price: '$1.75' },
      { es: 'Agua De Coco',                                        en: 'Coconut Water',   price: '$2.00' },
      { es: 'Limonada',                                            en: 'Lemonade',        price: '$3.50' },
      { es: 'Agua De Panela',                                      en: 'Panela Water',    price: '$3.50' },
      { es: 'Morir Soñando',                                       en: 'Dominican Drink', price: '$3.50' },
      { es: 'Cerveza',                                             en: 'Beer',            price: '$3.50' },
      { es: 'Red Bull',                                            en: 'Red Bull',        price: '$3.00' },
    ],
  },
  {
    es: 'Antojitos', en: 'Appetizers', emoji: '🥟',
    items: [
      { es: 'Empanadas De Carne',                    en: 'Meat Empanadas',                                              price: '$1.25' },
      { es: 'Empanadas De Pollo',                    en: 'Chicken Empanadas',                                           price: '$1.25' },
      { es: 'Empanadas De Queso',                    en: 'Cheese Empanadas',                                            price: '$1.50' },
      { es: 'Salchipapa',                            en: 'Chopped Sausage & Fries',                                     price: '$7.00' },
      { es: 'Salchipapa El "Sabor"',                 en: 'Creole Sausage & Fries',                                      price: '$7.00' },
      { es: 'Salchicha Chorizo Y Morcilla',          en: 'Sausage, Blood Sausage & Fries',                              price: '$8.50' },
      { es: 'Arepa Con Carne Desmechada',            en: 'Corn Cake w/Shredded Meat',                                   price: '$7.00' },
      { es: 'Arepa Con Aguacate Y Chicharrones',     en: 'Corn Cake, Avocado & Pork Rinds',                             price: '$9.00' },
      { es: 'Patacón Con Carne Desmechada',          en: 'Large Plantains w/Shredded Meat',                             price: '$7.50' },
      { es: 'Tamales',                               en: 'Tamales',                                                     price: '$7.00' },
      { es: 'Deditos De Pollo Con Papitas',          en: 'Chicken Fingers with Fries',                                  price: '$8.00' },
      { es: 'Chicharrón De Cerdo',                   en: 'Fried Pork Rinds',                                            price: '$4.00' },
      { es: 'Morcilla',                              en: 'Blood Sausage',                                               price: '$3.50' },
      { es: 'Salami',                                en: 'Salami',                                                      price: '$3.25' },
      { es: 'Chorizo',                               en: 'Colombian Sausage',                                           price: '$3.50' },
      { es: 'Quesadilla De Pollo ó Bistec ó Queso', en: 'Chicken, Steak, or Cheese Quesadilla',                        price: '$6.00' },
      { es: 'Bananas',                               en: 'Bananas',                                                     price: '$0.50' },
    ],
  },
  {
    es: 'Desayunos', en: 'Breakfast', emoji: '🍳',
    items: [
      { es: 'Desayuno 1',              en: 'Rice & Beans, Colombian Eggs, Grilled Skirt or Sirloin',           price: '$14.00' },
      { es: 'Desayuno 2',              en: 'Rice & Beans, Colombian Eggs & Grilled Boneless Chicken',          price: '$9.50'  },
      { es: 'Desayuno Ejecutivo',      en: 'Rice & Beans or Corn Cake, Colombian Eggs, Steak or Chicken',      price: '$10.00' },
      { es: 'Desayuno Sabor',          en: 'Rice & Beans, Colombian Eggs, Steak, Pork Rings & Plantains',      price: '$13.00' },
      { es: 'Arepa Con Queso',         en: 'Corn Cake with Cheese',                                            price: '$4.00'  },
      { es: 'Arepa Rellena',           en: 'Corn Cake with Colombian Eggs',                                    price: '$7.00'  },
      { es: 'Arepa Con Queso Y Huevos Pericos', en: 'Corn Cake with side Colombian Eggs',                     price: '$7.00'  },
      { es: 'Arepa Con Queso, Chicharrón ó Carne Asada ó Chorizo', en: 'Corn Cake, Pork Rings, Steak, or Sausage', price: '$10.00' },
      { es: 'Calentado Con Arepita',   en: 'Mixed Rice & Beans with Corn Cake',                                price: '$4.00'  },
      { es: 'Calentado Con Carne ó Pechuga', en: 'Mixed Rice & Beans with Steak or Chicken',                  price: '$9.00'  },
      { es: 'Calentado Con Huevos Pericos', en: 'Mixed Rice & Beans with Colombian Eggs',                     price: '$6.50'  },
      { es: 'Mangú Tres Golpes',       en: 'Mashed Plantains, Eggs, Salami, Fried Cheese',                    price: '$7.00'  },
      { es: 'Huevos Al Gusto',         en: 'Any Style Eggs',                                                   price: '$3.50'  },
      { es: 'Arroz Con Huevos',        en: 'Rice with Colombian Eggs',                                         price: '$5.00'  },
      { es: 'Longaniza',               en: 'Dominican Sausage',                                                price: '$4.00'  },
    ],
  },
  {
    es: 'Desayunos Americanos', en: 'American Breakfast', emoji: '🥞',
    items: [
      { es: 'Papas Caseras, Tocino Y Huevos',      en: 'Home Fries, Bacon & Eggs',         price: '$5.00' },
      { es: 'Pan Tostado Francés, Tocino Y Huevo', en: 'French Toast, Bacon & Egg',        price: '$5.00' },
      { es: 'Panqueques, Tocino Y Huevo',          en: 'Pancakes, Bacon & Egg',            price: '$5.00' },
      { es: 'Croissant Con Jamón, Queso Y Huevos', en: 'Croissant w/Ham, Cheese & Eggs',  price: '$5.00' },
      { es: 'Tortillas De Cualquier Estilo',       en: 'Omelets Any Style',                price: '$6.99' },
      { es: 'Torino, Huevos Y Queso',              en: 'Bacon, Eggs & Cheese',             price: '$4.50' },
    ],
  },
  {
    es: 'Buffet Caliente Diario', en: 'Hot Daily Buffet', emoji: '🍲',
    note: 'Fines de semana +$1.00', noteEn: 'Weekends add $1.00',
    items: [
      { es: 'Buffet Caliente Diario', en: 'Hot Buffet Daily — Call for details', price: 'Sm $7.00 / Lg $10.00' },
      { es: 'Complemento Con Sopa',   en: 'Buffet with Soup',                    price: 'Sm $8.00 / Lg $11.00' },
    ],
  },
  {
    es: 'Sopas', en: 'Soups', emoji: '🥣',
    note: 'Pequeño $3.00  ·  Grande $5.00', noteEn: 'Small $3.00  ·  Large $5.00',
    items: [
      { es: 'Sopa Del Lunes',     en: 'Monday — Meat or Lentil Soup',                       price: '$3.00 / $5.00' },
      { es: 'Sopa Del Martes',    en: 'Tuesday — Mixed or Chicken Trifle Soup',             price: '$3.00 / $5.00' },
      { es: 'Sopa Del Miércoles', en: "Wednesday — Potato & Chilli Stew or Cow's Leg Soup", price: '$3.00 / $5.00' },
      { es: 'Sopa Del Jueves',    en: 'Thursday — Tripe or Green Plantains Soup',           price: '$3.00 / $5.00' },
      { es: 'Sopa Del Viernes',   en: 'Friday — Chicken or Fish Soup',                      price: '$3.00 / $5.00' },
      { es: 'Sopa Del Sábado',    en: 'Saturday — Seafood or Beef Soup',                    price: '$3.00 / $5.00' },
      { es: 'Sopa Del Domingo',   en: 'Sunday — Rib Soup or Hen Stew',                      price: '$3.00 / $5.00' },
    ],
  },
  {
    es: 'Platos Típicos', en: 'Typical Dishes', emoji: '🫕',
    items: [
      { es: 'Bandeja Paisa Con Churrasco',  en: '½ Sirloin, Sausage, Pork Rinds, Eggs, Corn Cake, Plantains, Avocado, R&B',  price: '$20.00' },
      { es: 'Bandeja Paisa Con Entraña',    en: '½ Skirt Steak, Sausage, Pork Rinds, Eggs, Corn Cake, Plantains, Avocado, R&B', price: '$21.00' },
      { es: 'Mini Bandeja Paisa',           en: 'Steak or Chicken, Sausage, Pork Rinds, Eggs, Corn Cake, Avocado, R&B',      price: '$12.00' },
      { es: 'Super Bandeja Paisa',          en: 'Rotisserie Chicken, Sausage, Pork Rinds, Eggs, Corn Cake, Avocado, R&B',    price: '$14.95' },
      { es: 'Bandeja Mixta',                en: 'Shrimp, Skirt Steak, Sausage, Pork Rinds, Eggs, Corn Cake, Plantains, R&B', price: '$24.00' },
      { es: 'Bistec A Caballo Con Huevos',  en: 'Steak, Rice, Beans, Sweet Plantain & Salad',                                price: '$14.50' },
      { es: 'Picada Para Cuatro',           en: 'Sausage, Pork Rinds, Blood Sausage, Salami, Corn Cake, Salted Potatoes',    price: '$24.00' },
    ],
  },
  {
    es: 'Pollo', en: 'Chicken', emoji: '🍗',
    note: 'Servido con arroz, frijoles, maduro y ensalada', noteEn: 'Served with Rice, Beans, Sweet Plantain & Salad',
    items: [
      { es: 'Arroz Con Pollo',                 en: 'Chicken, Rice, Salad & Fries',     price: '$10.00' },
      { es: 'Pechuga Empanizada',              en: 'Breaded Chicken Breast',            price: '$13.00' },
      { es: 'Pechuga Al Limón',                en: 'Chicken Breast in Lemon',           price: '$13.00' },
      { es: 'Pechuga Ala Hawaiana',            en: 'Chicken Breast in Hawaiian Sauce',  price: '$13.00' },
      { es: 'Pechuga En Salsa De Champiñones', en: 'Chicken Breast in Mushroom Sauce',  price: '$13.00' },
      { es: 'Pechuga A La Plancha',            en: 'Grilled Chicken Breast',            price: '$13.00' },
      { es: 'Pollo A La Brasa ¼',              en: 'Rotisserie ¼ Chicken',              price: '$9.50'  },
      { es: 'Pollo A La Brasa ½',              en: 'Rotisserie ½ Chicken',              price: '$12.00' },
      { es: 'Chicharrón De Pollo',             en: 'Fried Chicken Chunks',              price: '$9.00'  },
    ],
  },
  {
    es: 'Carnes', en: 'Steak', emoji: '🥩',
    note: 'Servido con arroz, frijoles, maduro y ensalada', noteEn: 'Served with Rice, Beans, Sweet Plantain & Salad',
    items: [
      { es: 'Bistec En Salsa Criolla',       en: 'Steak in Creole Sauce',        price: '$14.75' },
      { es: 'Bistec Encebollado',            en: 'Steak with Onions',            price: '$16.00' },
      { es: 'Lengua Ala Plancha',            en: 'Grilled Beef Tongue',          price: '$17.00' },
      { es: 'Lengua En Salsa Criolla',       en: 'Beef Tongue in Creole Sauce',  price: '$18.00' },
      { es: 'Entraña',                       en: 'Skirt Steak',                  price: '$24.00' },
      { es: 'Carne Asada',                   en: 'Grilled Steak',                price: '$13.25' },
      { es: 'Churrasco',                     en: 'Grilled Sirloin Steak',        price: '$23.00' },
      { es: 'Milanesa De Carne',             en: 'Breaded Steak',                price: '$13.00' },
      { es: 'Hígado A La Plancha',           en: 'Grilled Liver',                price: '$9.25'  },
      { es: 'Sobrebarriga A La Plancha',     en: 'Grilled Steak Loin',           price: '$18.00' },
      { es: 'Sobrebarriga En Salsa Criolla', en: 'Steak Loin in Creole Sauce',   price: '$19.00' },
    ],
  },
  {
    es: 'Cerdo', en: 'Pork', emoji: '🐷',
    note: 'Servido con arroz, frijoles, maduro y ensalada', noteEn: 'Served with Rice, Beans, Sweet Plantain & Salad',
    items: [
      { es: 'Lomo (Chuleta) Salteado',            en: 'Sautéed Pork Chops', price: '$13.00' },
      { es: 'Lomo (Chuleta) De Cerdo Empanizado', en: 'Breaded Pork Chops', price: '$12.50' },
      { es: 'Lomo (Chuleta) Asada',               en: 'Grilled Pork Chops', price: '$12.50' },
      { es: 'Pernil',                              en: 'Roast Pork',         price: '$9.00'  },
    ],
  },
  {
    es: 'Marisco', en: 'Seafood', emoji: '🦐',
    note: 'Servido con arroz, plátano verde y ensalada', noteEn: 'Served with Rice, Green Plantain & Salad',
    items: [
      { es: 'Arroz Con Camarones',                               en: 'Rice with Shrimp',                           price: '$15.50' },
      { es: 'Trucha Frita',                                      en: 'Fried Trout',                                price: '$15.00' },
      { es: 'Trucha Sudada',                                     en: 'Steam Trout',                                price: '$15.00' },
      { es: 'Arroz A La Marinera',                               en: 'Mixed Seafood with Rice',                    price: '$20.00' },
      { es: 'Cazuela De Mariscos',                               en: 'Seafood Casserole',                          price: '$20.00' },
      { es: 'Pargo Rojo',                                        en: 'Red Snapper',                                price: '$20.00' },
      { es: 'Filete Marinado',                                   en: 'Marinade Fillet',                            price: '$22.00' },
      { es: 'Filete Al Ajillo',                                  en: 'Fillet Fish in Garlic Sauce',                price: '$16.00' },
      { es: 'Filete En Limón',                                   en: 'Fillet Fish in Lemon Sauce',                 price: '$16.00' },
      { es: 'Camarones Ala Ajillo',                              en: 'Shrimp in Garlic Sauce',                     price: '$16.00' },
      { es: 'Pargo Marinera',                                    en: 'Marinade Red Snapper',                       price: '$25.00' },
      { es: 'Mojarra Frita',                                     en: 'Fried Sea Bream',                            price: '$16.75' },
      { es: 'Entraña Marinera',                                  en: 'Skirt Steak in Marinade Sauce',              price: '$23.00' },
      { es: 'Churrasco Marinera',                                en: 'Steak in Marinade Sauce',                    price: '$24.00' },
      { es: 'Filete De Tilapia Con Camarones En Salsa Maracuyá', en: 'Tilapia with Shrimp in Passion Fruit Sauce', price: '$23.00' },
      { es: 'Salmón Con Camarones Al Ajillo',                    en: 'Salmon with Shrimp in Garlic Sauce',         price: '$20.00' },
      { es: 'Filete De Pescado Ala Plancha',                     en: 'Grilled Fish Fillet',                        price: '$15.00' },
    ],
  },
  {
    es: 'Ensaladas', en: 'Salads', emoji: '🥗',
    items: [
      { es: 'Ensalada Mixta',                 en: 'Mixed Salad',         price: 'Sm $3.95 / Lg $5.95' },
      { es: 'Ensalada De Repollo De La Casa', en: 'House Cabbage Salad', price: 'Sm $3.95 / Lg $5.95' },
      { es: 'Ensalada De Aguacate',           en: 'Avocado Salad',       price: 'Sm $4.95 / Lg $6.95' },
      { es: 'Ensalada De Pollo',              en: 'Chicken Salad',       price: '$7.50' },
      { es: 'Ensalada De César',              en: 'Caesar Salad',        price: '$9.00' },
      { es: 'Ensalada Camarones',             en: 'Shrimp Salad',        price: '$9.00' },
      { es: 'Ensalada De Pollo BBQ',          en: 'BBQ Chicken Salad',   price: '$8.00' },
      { es: 'Vegetales Al Vapor',             en: 'Steamed Vegetables',  price: '$7.50' },
    ],
  },
  {
    es: 'Sándwiches Y Hamburguesas', en: 'Sandwiches & Burgers', emoji: '🥪',
    items: [
      { es: 'Cubano Sandwich',                         en: 'Cuban Sandwich',                          price: '$6.00' },
      { es: 'Bistec Con Queso Sandwich',               en: 'Steak w/Cheese Sandwich',                 price: '$6.00' },
      { es: 'Sándwich De Pollo',                       en: 'Chicken Sandwich',                        price: '$6.00' },
      { es: 'Chimi De Bistec Sandwich',                en: 'Steak Chimi Sandwich',                    price: '$6.00' },
      { es: 'Chimi De Pollo Sandwich',                 en: 'Chicken Chimi Sandwich',                  price: '$6.00' },
      { es: 'Hamburguesa',                             en: 'Hamburger',                               price: '$5.00' },
      { es: 'Hamburguesa Con Papas Fritas',            en: 'Hamburger with Fries',                    price: '$7.00' },
      { es: 'Hamburguesa Colombiana Con Papas Fritas', en: 'Colombian Style Hamburger with Fries',    price: '$7.00' },
    ],
  },
  {
    es: 'Mofongo', en: 'Mofongo', emoji: '🫙',
    items: [
      { es: 'Camarones',  en: 'Shrimp',          price: '$14.00' },
      { es: 'Bistec',     en: 'Steak',           price: '$9.00'  },
      { es: 'Pollo',      en: 'Chicken',         price: '$9.00'  },
      { es: 'Chicharrón', en: 'Fried Pork Skin', price: '$9.00'  },
      { es: 'Pernil',     en: 'Roast Pork',      price: '$9.00'  },
    ],
  },
  {
    es: 'Postres', en: 'Desserts', emoji: '🍮',
    items: [
      { es: 'Flan',            en: 'Flan',         price: '$4.00' },
      { es: 'Tiramisú',        en: 'Tiramisu',     price: '$4.00' },
      { es: 'Tres Leches',     en: 'Tres Leches',  price: '$4.00' },
      { es: 'Arroz Con Leche', en: 'Rice Pudding', price: '$3.00' },
      { es: 'Avena',           en: 'Oatmeal',      price: '$3.00' },
      { es: 'Gelatina',        en: 'Jello',        price: '$2.50' },
    ],
  },
  {
    es: 'Órdenes Extras', en: 'Side Orders', emoji: '🍚',
    items: [
      { es: 'Arroz Blanco',                          en: 'White Rice',                       price: 'Sm $2.50 / Lg $5.50' },
      { es: 'Arroz Moro',                            en: 'Pigeon Peas Rice',                 price: 'Sm $2.50 / Lg $5.50' },
      { es: 'Arroz Mixto',                           en: 'Mixed Rice',                       price: 'Sm $2.50 / Lg $5.00' },
      { es: 'Carnes',                                en: 'Meat',                             price: 'Sm $5.00 / Lg $15.00' },
      { es: 'Carne Molida',                          en: 'Ground Meat',                      price: 'Sm $5.00 / Lg $15.00' },
      { es: 'Arepas',                                en: 'Corn Cake',                        price: 'Sm $1.00 / Lg $2.00' },
      { es: 'Guacamole',                             en: 'Guacamole',                        price: '$7.00'  },
      { es: 'Guacamole Con Tostones',                en: 'Guacamole with Fried Plantain',    price: '$10.00' },
      { es: 'Guacamole Con Chicharrones Y Tostones', en: 'Guacamole with Pork Rings & Plantain', price: '$11.00' },
      { es: 'Aguacate',                              en: 'Avocado',                          price: '$3.00' },
      { es: 'Pollo A La Brasa (Entero)',             en: 'Whole Rotisserie Chicken',         price: '$10.00' },
      { es: 'Pollo A La Brasa ¼',                   en: '¼ Rotisserie Chicken',             price: '$3.25'  },
      { es: 'Pollo A La Brasa ½',                   en: '½ Rotisserie Chicken',             price: '$5.25'  },
    ],
  },
  {
    es: 'Combos', en: 'Combos', emoji: '🎉',
    items: [
      { es: 'Combo #1', en: 'Rotisserie Chicken, Rice, Beans, 2Lt Soda & Salad',                         price: '$19.00' },
      { es: 'Combo #2', en: '2 Rotisserie Chickens, Rice, Beans, 2Lt Soda & Salad',                      price: '$27.00' },
      { es: 'Combo #3', en: '2 Rotisserie Chickens, Rice, Beans, Fries or Yuca Fries, 2Lt Soda & Salad', price: '$30.00' },
    ],
  },
];

/* ─── Deli: Queens Library / JFK Airport / Brooklyn Navy Yard ─── */
const deliMenu: DeliSection[] = [
  {
    en: 'Combos', es: 'Combos', emoji: '🍱',
    items: [
      { en: 'Combo 1', es: 'Combo 1', price: '$12.00' },
      { en: 'Combo 2', es: 'Combo 2', price: '$15.00' },
    ],
  },
  {
    en: 'Rice & Beans', es: 'Arroz y Frijoles', emoji: '🍚',
    items: [
      { en: 'Rice Plate',     es: 'Arroz',           price: '$5.00' },
      { en: 'Beans',          es: 'Frijoles',        price: '$3.00' },
      { en: 'Arroz con Leche', es: 'Arroz con Leche', price: '$4.00' },
    ],
  },
  {
    en: 'Meats', es: 'Carnes', emoji: '🥩',
    items: [
      { en: 'Meat',       es: 'Carnes',     price: '$6.00' },
      { en: 'Chorizo',    es: 'Chorizo',    price: '$6.00' },
      { en: 'Chicharrón', es: 'Chicharrón', price: '$7.00' },
    ],
  },
  {
    en: 'Soups', es: 'Sopas', emoji: '🥣',
    items: [
      { en: 'Soup',           es: 'Sopas',                   price: '$6.00' },
      { en: 'Large Soup Box', es: 'Sopa en Copas Grande',    price: '$3.00' },
    ],
  },
  {
    en: 'Salads', es: 'Ensaladas', emoji: '🥗',
    items: [
      { en: 'Tossed Salad',  es: 'Ensalada Pequeña',      price: '$3.00' },
      { en: 'Cold Salad',    es: 'Ensalada Fría',         price: '$7.00' },
      { en: 'Fruit Salad',   es: 'Ensalada de Frutas',    price: '$5.00' },
      { en: 'Potato Salad',  es: 'Ensalada de Papa',      price: '$5.00' },
      { en: 'Avocado',       es: 'Aguacate',              price: '$4.00' },
    ],
  },
  {
    en: 'Sandwiches', es: 'Sándwiches', emoji: '🥪',
    items: [
      { en: 'Sandwich',           es: 'Sándwich',               price: '$8.00' },
      { en: 'Breakfast Sandwich', es: 'Sándwich de Desayuno',   price: '$4.00' },
    ],
  },
  {
    en: 'Pastries & Desserts', es: 'Pasteles y Postres', emoji: '🍰',
    items: [
      { en: 'Pastries',                          es: 'Pasteles',                      price: '$3.00' },
      { en: 'Cake',                              es: 'Bizcocho',                      price: '$6.00' },
      { en: 'Dessert / Parfait',                 es: 'Postre / Parfait',              price: '$6.00' },
      { en: 'Jello',                             es: 'Gelatina',                      price: '$3.00' },
      { en: 'Empanada de Cambray (Guava/Cream Cheese)', es: 'Empanada de Cambray', price: '$4.00' },
    ],
  },
  {
    en: 'Drinks', es: 'Bebidas', emoji: '🥤',
    items: [
      { en: 'Coconut Water',   es: 'Agua de Coco',       price: '$4.00' },
      { en: 'Gatorade',        es: 'Gatorade',           price: '$3.00' },
      { en: 'Red Bull',        es: 'Red Bull',           price: '$4.00' },
      { en: 'Monster Drink',   es: 'Monster',            price: '$4.00' },
      { en: 'Naked Juice',     es: 'Naked Juice',        price: '$6.00' },
      { en: 'Tropicana Juice', es: 'Jugo Tropicana',     price: '$3.00' },
      { en: 'Jugo Hit',        es: 'Jugo Hit',           price: '$4.00' },
      { en: 'Snapple',         es: 'Snapple',            price: '$3.00' },
      { en: 'Kombucha',        es: 'Kombucha',           price: '$6.00' },
      { en: 'Smoothie',        es: 'Batido',             price: '$5.00' },
      { en: 'Iced Coffee',     es: 'Café Helado',        price: '$4.00' },
      { en: 'Starbucks (Large)', es: 'Starbucks Grande', price: '$6.00' },
      { en: 'Malta / Pony',    es: 'Malta / Pony',       price: '$3.00' },
      { en: 'Aloe Vera',       es: 'Aloe Vera',          price: '$3.00' },
      { en: 'Suja',            es: 'Suja',               price: '$3.00' },
      { en: 'Celsius',         es: 'Celsius',            price: '$4.00' },
    ],
  },
  {
    en: 'Snacks', es: 'Meriendas', emoji: '🍫',
    items: [
      { en: 'Snickers / Twix',     es: 'Snickers / Twix',         price: '$3.00' },
      { en: 'Candy / Gum / Mints', es: 'Dulces / Chicle / Mentas', price: '$3.00' },
      { en: 'Extra Sauce',         es: 'Salsa Extra',             price: '$0.50' },
    ],
  },
];

const navLinks: [string, string][] = [
  ['/', 'Home'], ['/about', 'About'], ['/menu', 'Menu'],
  ['/catering', 'Catering'], ['/gallery', 'Gallery'], ['/contact', 'Contact'],
];

export default function MenuPage() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [tab,  setTab]  = useState<'restaurant' | 'deli'>('restaurant');
  const [lang, setLang] = useState<'es' | 'en'>('es');

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">

      {/* ── Navigation ── */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-xl shadow-2xl py-2">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <PotIcon />
            <div className="hidden md:flex space-x-8 items-center">
              {navLinks.map(([href, label]) => (
                <Link key={href} href={href}
                  className={`transition-all duration-300 relative group ${href === '/menu' ? 'text-amber-400' : 'text-white/70 hover:text-white'}`}>
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
            {navLinks.map(([href, label]) => (
              <Link key={href} href={href}
                className={`text-lg transition ${href === '/menu' ? 'text-amber-400' : 'hover:text-amber-400'}`}
                onClick={() => setIsNavOpen(false)}>{label}</Link>
            ))}
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section
        className="relative h-[45vh] flex items-center justify-center overflow-hidden mt-20"
        style={{
          background: `linear-gradient(to bottom, rgba(0,0,0,0.62), rgba(0,0,0,0.58)), url('/images/menu/SaborRestaurantAndBakery_Hero.jpg')`,
          backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed',
        }}
      >
        <div className="relative z-10 text-center px-4 flex flex-col items-center gap-6">
          <h1 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
            Our Menu
          </h1>
          <p className="text-white/70 text-lg">Authentic Dominican & Colombian cuisine</p>

          {/* ── EN / ES language toggle ── */}
          <div className="flex items-center gap-3 bg-black/50 backdrop-blur-sm border border-white/10 rounded-full px-5 py-2.5">
            <span className={`text-sm font-bold transition-colors ${lang === 'es' ? 'text-amber-400' : 'text-white/40'}`}>ES</span>
            <button
              onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
              className="relative w-12 h-6 rounded-full transition-colors duration-300 focus:outline-none"
              style={{ background: lang === 'en' ? 'linear-gradient(to right, #f59e0b, #ea580c)' : '#3f3f46' }}
              aria-label="Toggle language"
            >
              <span
                className="absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-md transition-transform duration-300"
                style={{ transform: lang === 'en' ? 'translateX(24px)' : 'translateX(0px)' }}
              />
            </button>
            <span className={`text-sm font-bold transition-colors ${lang === 'en' ? 'text-amber-400' : 'text-white/40'}`}>EN</span>
          </div>
        </div>
      </section>

      {/* ── Tab switcher (sticky) ── */}
      <div className="sticky top-20 z-40 bg-black/95 backdrop-blur-xl border-b border-zinc-800 py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex gap-3 justify-center">
            <button
              onClick={() => setTab('restaurant')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                tab === 'restaurant'
                  ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg shadow-amber-500/40 scale-105'
                  : 'bg-zinc-900 text-gray-400 hover:text-white hover:bg-zinc-800'
              }`}
            >
              <UtensilsCrossed size={16} />
              Restaurant — College Point
            </button>
            <button
              onClick={() => setTab('deli')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                tab === 'deli'
                  ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg shadow-amber-500/40 scale-105'
                  : 'bg-zinc-900 text-gray-400 hover:text-white hover:bg-zinc-800'
              }`}
            >
              <ShoppingBag size={16} />
              Deli — QPL / JFK / Brooklyn
            </button>
          </div>
          <p className="text-center text-gray-600 text-xs mt-2">
            {tab === 'restaurant'
              ? '15-20 College Point Blvd, College Point, NY 11356 · Open 7 Days 6:30 AM – 10:00 PM'
              : 'Queens Public Library · JFK Airport · Brooklyn Navy Yard'}
          </p>
        </div>
      </div>

      {/* ── Menu Content ── */}
      <section className="py-10 bg-gradient-to-b from-zinc-950 to-black min-h-screen">
        <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">

          {/* Restaurant Tab */}
          {tab === 'restaurant' && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-black bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  College Point
                </h2>
                <p className="text-gray-500 text-sm mt-1">15-20 College Point Blvd · Open 7 Days 6:30 AM – 10:00 PM</p>
              </div>

              {restaurantMenu.map((section) => (
                <div key={section.es} className="bg-zinc-900/40 rounded-2xl border border-zinc-800/60 overflow-hidden">
                  <div className="px-5 py-4 border-b border-zinc-800/60 flex items-center gap-2.5 bg-zinc-900/80">
                    <span className="text-xl">{section.emoji}</span>
                    <div>
                      <h3 className="font-black text-white text-sm leading-tight">
                        {lang === 'en' ? section.en : section.es}
                      </h3>
                      {(lang === 'en' ? section.noteEn : section.note) && (
                        <p className="text-amber-400/80 text-xs mt-0.5">
                          {lang === 'en' ? section.noteEn : section.note}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    {section.items.map((item, i) => (
                      <div
                        key={i}
                        className={[
                          'flex items-center gap-3 px-5 py-3 border-b border-zinc-800/30',
                          i % 2 === 1 ? 'md:border-l md:border-l-zinc-800/30' : '',
                        ].join(' ')}
                      >
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-white/90 leading-snug">
                            {lang === 'en' ? (item.en ?? item.es) : item.es}
                          </p>
                        </div>
                        <span className="text-amber-400 font-bold text-xs whitespace-nowrap shrink-0 ml-1">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Deli Tab */}
          {tab === 'deli' && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-black bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  {lang === 'en' ? 'Deli Menu' : 'Menú Deli'}
                </h2>
                <p className="text-gray-500 text-sm mt-1">
                  {lang === 'en'
                    ? 'Queens Public Library · JFK Airport · Brooklyn Navy Yard'
                    : 'Biblioteca Queens · Aeropuerto JFK · Brooklyn Navy Yard'}
                </p>
              </div>

              {deliMenu.map((section) => (
                <div key={section.en} className="bg-zinc-900/40 rounded-2xl border border-zinc-800/60 overflow-hidden">
                  <div className="px-5 py-4 border-b border-zinc-800/60 flex items-center gap-2.5 bg-zinc-900/80">
                    <span className="text-xl">{section.emoji}</span>
                    <h3 className="font-black text-white text-sm leading-tight">
                      {lang === 'en' ? section.en : section.es}
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    {section.items.map((item, i) => (
                      <div
                        key={i}
                        className={[
                          'flex items-center gap-3 px-5 py-3 border-b border-zinc-800/30',
                          i % 2 === 1 ? 'md:border-l md:border-l-zinc-800/30' : '',
                        ].join(' ')}
                      >
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-white/90 leading-snug">
                            {lang === 'en' ? item.en : item.es}
                          </p>
                        </div>
                        <span className="text-amber-400 font-bold text-xs whitespace-nowrap shrink-0 ml-1">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
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
                {navLinks.map(([href, label]) => (
                  <li key={href}><Link href={href} className="hover:text-white transition">{label}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 text-amber-400">Contact</h4>
              <ul className="space-y-3 text-gray-400"><li>(347) 368-4407</li><li>Multiple Locations</li></ul>
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
