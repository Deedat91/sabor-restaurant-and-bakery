'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Instagram, Facebook, Menu as MenuIcon, X, MapPin, UtensilsCrossed, ShoppingBag } from 'lucide-react';
import PotIcon from '@/PotIcon';

type MenuItem    = { es: string; en?: string; price: string };
type MenuSection = { es: string; en: string; emoji: string; note?: string; noteEn?: string; items: MenuItem[] };
type DeliItem    = { en: string; es: string; price: string };
type DeliSection = { en: string; es: string; emoji: string; note?: string; noteEn?: string; items: DeliItem[] };

/* ─── Restaurant: College Point ─────────────────────────────── */
const restaurantMenu: MenuSection[] = [
  {
    es: 'Panadería', en: 'Bakery', emoji: '🥐',
    items: [
      { es: 'Pan De Bono',                       en: 'Colombia Style Bread',               price: '$2.50' },
      { es: 'Pan De Queso',                      en: 'Colombian Style Bread w/Cheese',     price: '$2.50' },
      { es: 'Pan Con Queso',                     en: 'Colombian Bread w/Cheese',           price: '$2.25' },
      { es: 'Arepa De Choclo',                   en: 'Sweet Corn Cake',                    price: '$3.00' },
      { es: 'Arepa De Choclo Con Queso',         en: 'Sweet Corn Cake with Cheese',        price: '$4.00' },
      { es: 'Achira',                            en: 'Achira Cookie',                      price: '$3.00' },
      { es: 'Galletas',                          en: 'Cookies',                            price: '$1.00' },
      { es: 'Buñuelo',                           en: 'Fritter',                            price: '$2.50' },
      { es: 'Empanada De Cambray',               en: 'Guava Pastry',                       price: '$3.00' },
      { es: 'Croissant',                         en: 'Croissant',                          price: '$2.50' },
      { es: 'Croissant Integral',                en: 'Whole Wheat Croissant',              price: '$2.50' },
      { es: 'Croissant Con Queso',               en: 'Croissant with Cheese',              price: '$3.00' },
      { es: 'Pan Integral',                      en: 'Whole Wheat Bread',                  price: '$3.00' },
      { es: 'Pan De Yuca',                       en: 'Cassava Bread',                      price: '$3.00' },
      { es: 'Chicharrón De Guayaba',             en: 'Guava Greaves Bread',                price: '$3.00' },
      { es: 'Roscón De Guayaba ó De Arequipe',  en: 'Guava Ring-shaped Cake',             price: '$5.00' },
      { es: 'Orejas',                            en: 'Palmier Cookies',                    price: '$2.50' },
      { es: 'Torta De Arequipe',                 en: 'Arequipe Cake',                      price: '$3.00' },
      { es: 'Dedo de Queso',                     en: 'Cheese Finger',                      price: '$1.70' },
    ],
  },
  {
    es: 'Jugos Naturales y Batidos', en: 'Juices & Shakes', emoji: '🥤',
    note: 'Jugos $4.50  ·  Batidas $5.00', noteEn: 'Juices $4.50  ·  Shakes $5.00',
    items: [
      { es: 'Mora',             en: 'Blackberry',           price: '$4.50 / $5.00' },
      { es: 'Guayaba',          en: 'Guava',                price: '$4.50 / $5.00' },
      { es: 'Maracuyá',         en: 'Passion Fruit',        price: '$4.50 / $5.00' },
      { es: 'Piña',             en: 'Pineapple',            price: '$4.50 / $5.00' },
      { es: 'Lulo',             en: 'Naranjilla',           price: '$4.50 / $5.00' },
      { es: 'Papaya',           en: 'Papaya',               price: '$4.50 / $5.00' },
      { es: 'Mango',            en: 'Mango',                price: '$4.50 / $5.00' },
      { es: 'Fresa Con Banano', en: 'Strawberry Banana',    price: '$4.50 / $5.00' },
      { es: 'Banana',           en: 'Banana',               price: '$4.50 / $5.00' },
      { es: 'Tomate De Árbol',  en: 'Tree Tomato',          price: '$4.50 / $5.00' },
      { es: 'Guanábana',        en: 'Soursop',              price: '$4.50 / $5.00' },
      { es: 'Fresa',            en: 'Strawberry',           price: '$4.50 / $5.00' },
    ],
  },
  {
    es: 'Bebidas', en: 'Beverages', emoji: '☕',
    items: [
      { es: 'Café',                                                en: 'Coffee',            price: '$2.00' },
      { es: 'Té',                                                  en: 'Tea',               price: '$2.00' },
      { es: 'Chocolate',                                           en: 'Hot Chocolate',     price: '$2.50' },
      { es: 'Milo',                                                en: 'Milo',              price: '$3.00' },
      { es: 'Jugos Hit',                                           en: 'Hit Juice',         price: '$3.00' },
      { es: 'Agua En Botella',                                     en: 'Bottled Water',     price: '$1.50' },
      { es: 'Colombiana / Manzana / Postobon / Inca / Popular',   en: 'Colombian Sodas',   price: '$2.50' },
      { es: 'Pepsi / Sprite / Coke / Ginger-Ale',                 en: 'American Sodas',    price: '$2.00' },
      { es: 'Jugo Tropicana',                                      en: 'Tropicana Juice',   price: '$3.50' },
      { es: 'Country Club Soda',                                   en: 'Country Club Soda', price: '$2.50' },
      { es: 'Aloe Vera',                                           en: 'Aloe Vera',         price: '$3.50' },
      { es: 'Pony Malta',                                          en: 'Pony Malta',        price: '$3.00' },
      { es: 'Kumis',                                               en: 'Kumis',             price: '$3.75' },
      { es: 'Café Helado',                                         en: 'Iced Coffee',       price: '$4.00' },
      { es: 'Avena Alpina',                                        en: 'Oat Drink',         price: '$3.00' },
      { es: 'Soda De 2 Litros',                                    en: '2-Liter Soda',      price: '$4.00' },
      { es: 'Snapple / Gatorade',                                  en: 'Snapple / Gatorade', price: '$3.00' },
      { es: 'Agua De Coco',                                        en: 'Coconut Water',     price: '$4.00' },
      { es: 'Limonada',                                            en: 'Lemonade',          price: '$4.00' },
      { es: 'Agua De Panela',                                      en: 'Panela Water',      price: '$4.00' },
      { es: 'Morir Soñando',                                       en: 'Dominican Drink',   price: '$4.00' },
      { es: 'Cerveza',                                             en: 'Beer',              price: '$5.00' },
      { es: 'Red Bull',                                            en: 'Red Bull',          price: '$4.00' },
      { es: 'Copa De Vino',                                        en: 'Wine',              price: '$7.00' },
    ],
  },
  {
    es: 'Antojitos', en: 'Appetizers', emoji: '🥟',
    items: [
      { es: 'Empanadas De Carne',                    en: 'Meat Empanadas',                                              price: '$2.75' },
      { es: 'Empanadas De Pollo',                    en: 'Chicken Empanadas',                                           price: '$2.75' },
      { es: 'Empanadas De Queso',                    en: 'Cheese Empanadas',                                            price: '$2.75' },
      { es: 'Salchipapa',                            en: 'Chopped Sausage & Fries',                                     price: '$10.00' },
      { es: 'Salchipapa El "Sabor"',                 en: 'Creole Sausage & Fries',                                      price: '$13.00' },
      { es: 'Salchicha Chorizo Y Morcilla',          en: 'Sausage, Blood Sausage & Fries',                              price: '$14.00' },
      { es: 'Arepa Con Carne Desmechada',            en: 'Corn Cake w/Shredded Meat',                                   price: '$14.00' },
      { es: 'Arepa Con Aguacate Y Chicharrones',     en: 'Corn Cake, Avocado & Pork Rinds',                             price: '$16.00' },
      { es: 'Patacón Con Carne Desmechada',          en: 'Large Plantains w/Shredded Meat',                             price: '$15.00' },
      { es: 'Deditos De Pollo Con Papitas',          en: 'Chicken Fingers with Fries',                                  price: '$8.00' },
      { es: 'Chicharrón De Cerdo',                   en: 'Fried Pork Rinds',                                            price: '$8.00' },
      { es: 'Morcilla',                              en: 'Blood Sausage',                                               price: '$6.00' },
      { es: 'Salami',                                en: 'Salami',                                                      price: '$6.00' },
      { es: 'Chorizo',                               en: 'Colombian Sausage',                                           price: '$6.00' },
      { es: 'Quesadilla De Pollo ó Bistec ó Queso', en: 'Chicken, Steak, or Cheese Quesadilla',                        price: '$14.00' },
      { es: 'Queso Frito',                           en: 'Fried Cheese',                                               price: '$4.00' },
      { es: 'Bananas',                               en: 'Bananas',                                                     price: '$0.50' },
    ],
  },
  {
    es: 'Desayunos', en: 'Breakfast', emoji: '🍳',
    items: [
      { es: 'Desayuno 1',                                           en: 'Rice & Beans, Colombian Eggs, Grilled Skirt or Sirloin',          price: '$19.00' },
      { es: 'Desayuno 2',                                           en: 'Rice & Beans, Colombian Eggs & Grilled Boneless Chicken',         price: '$17.00' },
      { es: 'Desayuno Ejecutivo',                                   en: 'Rice & Beans or Corn Cake, Colombian Eggs, Steak or Chicken',     price: '$15.50' },
      { es: 'Desayuno Sabor',                                       en: 'Rice & Beans, Colombian Eggs, Steak, Pork Rings & Plantains',     price: '$21.50' },
      { es: 'Arepa Con Queso',                                      en: 'Corn Cake with Cheese',                                           price: '$6.50'  },
      { es: 'Arepa Rellena Con Huevos Pericos y Queso',            en: 'Corn Cake with Colombian Eggs & Cheese',                          price: '$10.50' },
      { es: 'Arepa Con Queso Y Huevos Pericos',                    en: 'Corn Cake with side Colombian Eggs',                              price: '$11.00' },
      { es: 'Arepa Con Queso, Chicharrón ó Carne Asada ó Chorizo', en: 'Corn Cake, Pork Rings, Steak, or Sausage',                       price: '$13.00' },
      { es: 'Calentado Con Arepita',                                en: 'Mixed Rice & Beans with Corn Cake',                               price: '$6.50'  },
      { es: 'Calentado Con Carne ó Pechuga',                       en: 'Mixed Rice & Beans with Steak or Chicken',                        price: '$15.00' },
      { es: 'Calentado Con Huevos Pericos',                        en: 'Mixed Rice & Beans with Colombian Eggs',                          price: '$9.00'  },
      { es: 'Mangú Tres Golpes',                                    en: 'Mashed Plantains, Eggs, Salami, Fried Cheese',                    price: '$12.00' },
      { es: 'Huevos Al Gusto',                                      en: 'Any Style Eggs',                                                  price: '$5.50'  },
      { es: 'Arroz Con Huevos',                                     en: 'Rice with Colombian Eggs',                                        price: '$7.50'  },
      { es: 'Longaniza',                                            en: 'Dominican Sausage',                                               price: '$6.00'  },
    ],
  },
  {
    es: 'Desayunos Americanos', en: 'American Breakfast', emoji: '🥞',
    items: [
      { es: 'Papas Caseras, Tocino Y Huevos',      en: 'Home Fries, Bacon & Eggs',         price: '$12.00' },
      { es: 'Pan Tostado Francés, Tocino Y Huevo', en: 'French Toast, Bacon & Egg',        price: '$12.00' },
      { es: 'Panqueques, Tocino Y Huevo',          en: 'Pancakes, Bacon & Egg',            price: '$12.00' },
      { es: 'Croissant Con Jamón, Queso Y Huevos', en: 'Croissant w/Ham, Cheese & Eggs',  price: '$12.00' },
      { es: 'Tortillas De Cualquier Estilo',       en: 'Omelets Any Style',                price: '$12.00' },
      { es: 'Tocino, Huevos Y Queso',              en: 'Bacon, Eggs & Cheese',             price: '$10.00' },
    ],
  },
  {
    es: 'Buffet Caliente Diario', en: 'Hot Daily Buffet', emoji: '🍲',
    note: 'Fines de semana +$1.00', noteEn: 'Weekends add $1.00',
    items: [
      { es: 'Buffet Lunes – Viernes',  en: 'Weekday Hot Buffet',       price: '$11.00' },
      { es: 'Buffet Sábado – Domingo', en: 'Weekend Hot Buffet',       price: '$12.00' },
      { es: 'Complemento Grande',      en: 'Large Buffet Combo',       price: '$12.50' },
    ],
  },
  {
    es: 'Sopas', en: 'Soups', emoji: '🥣',
    items: [
      { es: 'Sopa Del Lunes',     en: 'Monday — Meat or Lentil Soup',                       price: '$6.00' },
      { es: 'Sopa Del Martes',    en: 'Tuesday — Mixed or Chicken Trifle Soup',             price: '$6.00' },
      { es: 'Sopa Del Miércoles', en: "Wednesday — Potato & Chilli Stew or Cow's Leg Soup", price: '$6.00' },
      { es: 'Sopa Del Jueves',    en: 'Thursday — Tripe or Green Plantains Soup',           price: '$6.00' },
      { es: 'Sopa Del Viernes',   en: 'Friday — Chicken or Fish Soup',                      price: '$6.00' },
      { es: 'Sopa Del Sábado',    en: 'Saturday — Seafood or Beef Soup',                    price: '$6.00' },
      { es: 'Sopa Del Domingo',   en: 'Sunday — Rib Soup or Hen Stew',                      price: '$6.00' },
    ],
  },
  {
    es: 'Platos Típicos', en: 'Typical Dishes', emoji: '🫕',
    items: [
      { es: 'Bandeja Paisa Con Churrasco',  en: '½ Sirloin, Sausage, Pork Rinds, Eggs, Corn Cake, Plantains, Avocado, R&B',     price: '$23.00' },
      { es: 'Bandeja Paisa Con Entraña',    en: '½ Skirt Steak, Sausage, Pork Rinds, Eggs, Corn Cake, Plantains, Avocado, R&B', price: '$28.00' },
      { es: 'Mini Bandeja Paisa',           en: 'Steak or Chicken, Sausage, Pork Rinds, Eggs, Corn Cake, Avocado, R&B',         price: '$15.00' },
      { es: 'Super Bandeja Paisa',          en: 'Rotisserie Chicken, Sausage, Pork Rinds, Eggs, Corn Cake, Avocado, R&B',       price: '$20.00' },
      { es: 'Bandeja Mixta',                en: 'Shrimp, Skirt Steak, Sausage, Pork Rinds, Eggs, Corn Cake, Plantains, R&B',    price: '$26.00' },
      { es: 'Bistec A Caballo Con Huevos',  en: 'Steak, Rice, Beans, Eggs, Sweet Plantain & Salad',                              price: '$21.00' },
      { es: 'Picada Para Cuatro',           en: 'Sausage, Pork Rinds, Blood Sausage, Salami, Corn Cake, Salted Potatoes',        price: '$30.00' },
    ],
  },
  {
    es: 'Pollo', en: 'Chicken', emoji: '🍗',
    note: 'Servido con arroz, frijoles, maduro y ensalada', noteEn: 'Served with Rice, Beans, Sweet Plantain & Salad',
    items: [
      { es: 'Arroz Con Pollo',                 en: 'Chicken, Rice, Salad & Fries',     price: '$15.00' },
      { es: 'Pechuga Empanizada',              en: 'Breaded Chicken Breast',            price: '$19.50' },
      { es: 'Pechuga Al Limón',                en: 'Chicken Breast in Lemon',           price: '$19.50' },
      { es: 'Pechuga Ala Hawaiana',            en: 'Chicken Breast in Hawaiian Sauce',  price: '$19.50' },
      { es: 'Pechuga En Salsa De Champiñones', en: 'Chicken Breast in Mushroom Sauce',  price: '$19.50' },
      { es: 'Pechuga A La Plancha',            en: 'Grilled Chicken Breast',            price: '$19.50' },
      { es: 'Pollo A La Brasa ¼',              en: 'Rotisserie ¼ Chicken with R&B',     price: '$13.00' },
      { es: 'Pollo A La Brasa ½',              en: 'Rotisserie ½ Chicken with R&B',     price: '$17.00' },
      { es: 'Chicharrón De Pollo',             en: 'Fried Chicken Chunks',              price: '$15.00' },
    ],
  },
  {
    es: 'Carnes', en: 'Steak', emoji: '🥩',
    note: 'Servido con arroz, frijoles, maduro y ensalada', noteEn: 'Served with Rice, Beans, Sweet Plantain & Salad',
    items: [
      { es: 'Bistec En Salsa Criolla',       en: 'Steak in Creole Sauce',        price: '$22.00' },
      { es: 'Bistec Encebollado',            en: 'Steak with Onions',            price: '$22.00' },
      { es: 'Lengua Ala Plancha',            en: 'Grilled Beef Tongue',          price: '$26.00' },
      { es: 'Lengua En Salsa Criolla',       en: 'Beef Tongue in Creole Sauce',  price: '$26.00' },
      { es: 'Entraña',                       en: 'Skirt Steak',                  price: '$30.00' },
      { es: 'Carne Asada',                   en: 'Grilled Steak',                price: '$22.00' },
      { es: 'Churrasco',                     en: 'Grilled Sirloin Steak',        price: '$30.00' },
      { es: 'Milanesa De Carne',             en: 'Breaded Steak',                price: '$20.00' },
      { es: 'Hígado A La Plancha',           en: 'Grilled Liver',                price: '$16.00' },
      { es: 'Sobrebarriga A La Plancha',     en: 'Grilled Steak Loin',           price: '$22.00' },
      { es: 'Sobrebarriga En Salsa Criolla', en: 'Steak Loin in Creole Sauce',   price: '$22.00' },
    ],
  },
  {
    es: 'Cerdo', en: 'Pork', emoji: '🐷',
    note: 'Servido con arroz, frijoles, maduro y ensalada', noteEn: 'Served with Rice, Beans, Sweet Plantain & Salad',
    items: [
      { es: 'Lomo (Chuleta) Salteado',            en: 'Sautéed Pork Chops', price: '$20.00' },
      { es: 'Lomo (Chuleta) De Cerdo Empanizado', en: 'Breaded Pork Chops', price: '$20.00' },
      { es: 'Lomo (Chuleta) Asada',               en: 'Grilled Pork Chops', price: '$20.00' },
      { es: 'Pernil',                              en: 'Roast Pork',         price: '$13.00' },
    ],
  },
  {
    es: 'Marisco', en: 'Seafood', emoji: '🦐',
    note: 'Servido con arroz, plátano verde y ensalada', noteEn: 'Served with Rice, Green Plantain & Salad',
    items: [
      { es: 'Arroz Con Camarones',                               en: 'Rice with Shrimp',                           price: '$23.00' },
      { es: 'Trucha Frita',                                      en: 'Fried Trout',                                price: '$24.00' },
      { es: 'Trucha Sudada',                                     en: 'Steam Trout',                                price: '$24.00' },
      { es: 'Arroz A La Marinera',                               en: 'Mixed Seafood with Rice',                    price: '$26.00' },
      { es: 'Cazuela De Mariscos',                               en: 'Seafood Casserole',                          price: '$26.00' },
      { es: 'Pargo Frito',                                       en: 'Fried Red Snapper',                          price: '$32.00' },
      { es: 'Filete Marinado',                                   en: 'Marinade Fillet',                            price: '$30.00' },
      { es: 'Filete Al Ajillo',                                  en: 'Fillet Fish in Garlic Sauce',                price: '$23.00' },
      { es: 'Filete En Limón',                                   en: 'Fillet Fish in Lemon Sauce',                 price: '$23.00' },
      { es: 'Camarones Ala Ajillo',                              en: 'Shrimp in Garlic Sauce',                     price: '$23.00' },
      { es: 'Mojarra Frita',                                     en: 'Fried Sea Bream',                            price: '$24.00' },
      { es: 'Entraña Marinera',                                  en: 'Skirt Steak in Marinade Sauce',              price: '$36.00' },
      { es: 'Churrasco Marinera',                                en: 'Steak in Marinade Sauce',                    price: '$36.00' },
      { es: 'Filete De Tilapia Con Camarones En Salsa Maracuyá', en: 'Tilapia with Shrimp in Passion Fruit Sauce', price: '$33.00' },
      { es: 'Salmón Con Camarones Al Ajillo',                    en: 'Salmon with Shrimp in Garlic Sauce',         price: '$30.00' },
      { es: 'Salmón Asado',                                      en: 'Grilled Salmon',                             price: '$25.00' },
      { es: 'Filete De Pescado Ala Plancha',                     en: 'Grilled Fish Fillet',                        price: '$23.00' },
    ],
  },
  {
    es: 'Ensaladas', en: 'Salads', emoji: '🥗',
    items: [
      { es: 'Ensalada Mixta',                 en: 'Mixed Salad',         price: '$7.00' },
      { es: 'Ensalada De Repollo De La Casa', en: 'House Cabbage Salad', price: '$7.00' },
      { es: 'Ensalada De Aguacate',           en: 'Avocado Salad',       price: '$8.00' },
      { es: 'Ensalada De Pollo',              en: 'Chicken Salad',       price: '$13.00' },
      { es: 'Ensalada De César Con Pollo',    en: 'Caesar Salad',        price: '$15.00' },
      { es: 'Ensalada Camarones',             en: 'Shrimp Salad',        price: '$12.50' },
      { es: 'Ensalada De Pollo BBQ',          en: 'BBQ Chicken Salad',   price: '$13.00' },
      { es: 'Vegetales Al Vapor',             en: 'Steamed Vegetables',  price: '$13.00' },
      { es: 'Ensalada De Frutas',             en: 'Fruit Salad',         price: '$9.00' },
    ],
  },
  {
    es: 'Sándwiches Y Hamburguesas', en: 'Sandwiches & Burgers', emoji: '🥪',
    items: [
      { es: 'Cubano Sandwich',                         en: 'Cuban Sandwich',                          price: '$11.00' },
      { es: 'Bistec Con Queso Sandwich',               en: 'Steak w/Cheese Sandwich',                 price: '$11.00' },
      { es: 'Sándwich De Pollo',                       en: 'Chicken Sandwich',                        price: '$11.00' },
      { es: 'Chimi De Bistec Sandwich',                en: 'Steak Chimi Sandwich',                    price: '$11.00' },
      { es: 'Chimi De Pollo Sandwich',                 en: 'Chicken Chimi Sandwich',                  price: '$11.00' },
      { es: 'Hamburguesa Colombiana',                  en: 'Colombian Style Hamburger',               price: '$11.00' },
    ],
  },
  {
    es: 'Mofongo', en: 'Mofongo', emoji: '🫙',
    items: [
      { es: 'Camarones',  en: 'Shrimp',          price: '$18.00' },
      { es: 'Bistec',     en: 'Steak',           price: '$17.00' },
      { es: 'Pollo',      en: 'Chicken',         price: '$16.00' },
      { es: 'Pernil',     en: 'Roast Pork',      price: '$17.00' },
      { es: 'Queso',      en: 'Cheese',          price: '$15.00' },
    ],
  },
  {
    es: 'Postres', en: 'Desserts', emoji: '🍮',
    items: [
      { es: 'Flan',            en: 'Flan',         price: '$6.00' },
      { es: 'Tiramisú',        en: 'Tiramisu',     price: '$5.00' },
      { es: 'Tres Leches',     en: 'Tres Leches',  price: '$6.00' },
      { es: 'Arroz Con Leche', en: 'Rice Pudding', price: '$4.00' },
      { es: 'Avena',           en: 'Oatmeal',      price: '$5.00' },
      { es: 'Gelatina',        en: 'Jello',        price: '$3.00' },
    ],
  },
  {
    es: 'Órdenes Extras', en: 'Side Orders', emoji: '🍚',
    items: [
      { es: 'Arroz Blanco',                          en: 'White Rice',                           price: '$4.00' },
      { es: 'Arroz Moro',                            en: 'Pigeon Peas Rice',                     price: '$4.00' },
      { es: 'Arroz Mixto',                           en: 'Mixed Rice',                           price: '$5.00' },
      { es: 'Frijoles',                              en: 'Beans',                                price: '$5.00' },
      { es: 'Papas Fritas',                          en: 'French Fries',                         price: '$6.00' },
      { es: 'Maduros',                               en: 'Sweet Plantains',                      price: '$5.00' },
      { es: 'Tostones',                              en: 'Green Plantains',                      price: '$6.00' },
      { es: 'Yuca Frita',                            en: 'Fried Cassava',                        price: '$6.00' },
      { es: 'Carnes',                                en: 'Meat',                                 price: '$5.00' },
      { es: 'Carne Molida',                          en: 'Ground Meat',                          price: '$10.00' },
      { es: 'Arepas',                                en: 'Corn Cake',                            price: '$3.00' },
      { es: 'Guacamole',                             en: 'Guacamole',                            price: '$10.00' },
      { es: 'Guacamole Con Tostones',                en: 'Guacamole with Fried Plantain',        price: '$12.00' },
      { es: 'Guacamole Con Chicharrones Y Tostones', en: 'Guacamole with Pork Rings & Plantain', price: '$15.00' },
      { es: 'Aguacate',                              en: 'Avocado',                              price: '$6.00' },
      { es: 'Pollo A La Brasa (Entero)',             en: 'Whole Rotisserie Chicken',             price: '$15.00' },
      { es: 'Pollo A La Brasa ¼',                   en: '¼ Rotisserie Chicken',                 price: '$6.00'  },
      { es: 'Pollo A La Brasa ½',                   en: '½ Rotisserie Chicken',                 price: '$8.00'  },
    ],
  },
  {
    es: 'Combos', en: 'Combos', emoji: '🎉',
    items: [
      { es: 'Combo #2 — 1 Pollo a la Brasa, Arroz Grande, Frijoles, Papas Fritas o Yuca Frita, Soda de 2 Litros', en: 'Combo #2 — 1 Rotisserie Chicken, Large Rice, Large Beans, Choice of Fries or Yuca Fries, 2-Liter Soda',                                            price: '$32.00' },
      { es: 'Combo #3 — 2 Pollos a la Brasa, Arroz Grande, Frijoles, Ensalada, Tostones/Papas/Yuca, Tres Leches o Tiramisú, Soda de 2 Litros',                       en: 'Combo #3 — 2 Rotisserie Chickens, Large Rice, Large Beans, Salad, Choice of Plantains/Fries/Yuca, Tres Leches or Tiramisu, 2-Liter Soda',          price: '$50.00' },
    ],
  },
];

/* ─── Deli: Queens Library / JFK Airport / Brooklyn Navy Yard ─── */
const deliMenu: DeliSection[] = [
  {
    en: 'Combos', es: 'Combos', emoji: '🍱',
    noteEn: 'Rice, Beans, Sweet Plantains, Veggies & Meat of the Day',
    note: 'Arroz, Frijoles, Maduros, Vegetales y Carne del Día',
    items: [
      { en: 'Combo 1 — Medium', es: 'Combo 1 — Mediano', price: '$12.00' },
      { en: 'Combo 2 — Large',  es: 'Combo 2 — Grande',  price: '$15.00' },
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
          <div className="relative flex items-center h-20">
            <PotIcon />
            <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex space-x-6 items-center">
              {navLinks.map(([href, label]) => (
                <Link key={href} href={href}
                  className={`transition-all duration-300 relative group ${href === '/menu' ? 'text-amber-400' : 'text-white/70 hover:text-white'}`}>
                  {label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-300 ${href === '/menu' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </Link>
              ))}
            </div>
            <div className="ml-auto flex items-center gap-3">
              <a href="tel:6469156122" className="hidden md:block bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-3 rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-amber-500/50">
                Order Now
              </a>
              <button className="md:hidden text-white" onClick={() => setIsNavOpen(!isNavOpen)}>
                {isNavOpen ? <X size={28} /> : <MenuIcon size={28} />}
              </button>
            </div>
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
          background: `linear-gradient(to bottom, rgba(0,0,0,0.62), rgba(0,0,0,0.58)), url('/images/menu/MenuHero.jpg')`,
          backgroundSize: 'cover', backgroundPosition: 'center',
        }}
      >
        <div className="relative z-10 text-center px-4 flex flex-col items-center gap-6">
          <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
            Our Menu
          </h1>
          <p className="text-white/70 text-lg">Authentic Dominican & Colombian cuisine</p>

          {/* ── EN / ES language toggle ── */}
          <div className="flex items-center gap-3 bg-black/50 backdrop-blur-sm border border-white/10 rounded-full px-5 py-2.5">
            <span className={`text-sm font-bold transition-colors ${lang === 'es' ? 'text-amber-400' : 'text-white/40'}`}>Español</span>
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
            <span className={`text-sm font-bold transition-colors ${lang === 'en' ? 'text-amber-400' : 'text-white/40'}`}>English</span>
          </div>
        </div>
      </section>

      {/* ── Tab switcher (sticky) ── */}
      <div className="sticky top-20 z-40 bg-black/95 backdrop-blur-xl border-b border-zinc-800 py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setTab('restaurant')}
              className={`flex items-center gap-2 px-4 sm:px-6 py-3 rounded-full font-semibold text-xs sm:text-sm transition-all duration-300 ${
                tab === 'restaurant'
                  ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg shadow-amber-500/40 scale-105'
                  : 'bg-zinc-900 text-gray-400 hover:text-white hover:bg-zinc-800'
              }`}
            >
              <UtensilsCrossed size={15} />
              Restaurant — College Point
            </button>
            <button
              onClick={() => setTab('deli')}
              className={`flex items-center gap-2 px-4 sm:px-6 py-3 rounded-full font-semibold text-xs sm:text-sm transition-all duration-300 ${
                tab === 'deli'
                  ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg shadow-amber-500/40 scale-105'
                  : 'bg-zinc-900 text-gray-400 hover:text-white hover:bg-zinc-800'
              }`}
            >
              <ShoppingBag size={15} />
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
              <ul className="space-y-3 text-gray-400"><li>(646) 915-6122</li><li>Multiple Locations</li></ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 text-amber-400">Follow Us</h4>
              <div className="flex gap-4">
                <a href="https://instagram.com/saborrestaurantbakery" target="_blank" className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center hover:scale-110 transition-all"><Instagram size={20} /></a>
                <a href="https://facebook.com/saborrestaurantbakery" target="_blank" className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center hover:scale-110 transition-all"><Facebook size={20} /></a>
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
