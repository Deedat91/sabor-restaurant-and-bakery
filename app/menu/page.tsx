'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Instagram, Facebook, Menu as MenuIcon, X, MapPin } from 'lucide-react';
import PotIcon from '@/PotIcon';

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLocation, setActiveLocation] = useState('college-point');

  useEffect(() => {
    const handleScroll = () => {};
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const locations = [
    { id: 'college-point', name: 'College Point', address: '15-20 College Point Blvd, College Point, NY 11356' },
    { id: 'queens', name: 'Queens Library', address: '89-11 Merrick Blvd, Jamaica, NY 11432' },
    { id: 'jfk', name: 'JFK Airport', address: 'Coming Soon' },
    { id: 'brooklyn', name: 'Brooklyn', address: 'Coming Soon' },
  ];

  type MenuItem = { es: string; en?: string; price: string };
  type MenuSection = { title: string; emoji: string; note?: string; items: MenuItem[] };

  const collegePointMenu: MenuSection[] = [
    {
      title: 'Panadería / Bakery',
      emoji: '🥐',
      items: [
        { es: 'Pan De Bono', en: 'Colombia Style Bread', price: '$1.20' },
        { es: 'Pan De Queso', en: 'Colombian Style Bread w/Cheese', price: '$1.20' },
        { es: 'Pan Con Queso Pequeño', en: 'Colombian Style Bread w/Cheese Small', price: '$1.50' },
        { es: 'Pan Con Queso Grande', en: 'Colombian Style Bread w/Cheese Large', price: '$3.60' },
        { es: 'Arepa De Choclo', en: 'Sweet Corn Cake', price: '$1.50' },
        { es: 'Arepa De Choclo Con Queso', en: 'Sweet Corn Cake with Cheese', price: '$2.50' },
        { es: 'Torta De Arequipe', price: '$2.00' },
        { es: 'Achira', price: '$1.50' },
        { es: 'Galletas', en: 'Cookies', price: '$0.75' },
        { es: 'Buñuelo', en: 'Fritter', price: '$1.00' },
        { es: 'Empanada De Cambray', price: '$1.50' },
        { es: 'Croissant', price: '$1.25' },
        { es: 'Croissant Integral', en: 'Whole Wheat Croissant', price: '$1.50' },
        { es: 'Croissant Con Queso', en: 'With Cheese', price: '$1.50' },
        { es: 'Mogolla', price: '$1.25' },
        { es: 'Pan Integral', en: 'Whole Wheat Bread', price: '$1.25' },
        { es: 'Pan De Yuca', en: 'Cassava Bread', price: '$1.25' },
        { es: 'Chicharrón De Guayaba', en: 'Guava Greaves Bread', price: '$1.75' },
        { es: 'Roscón De Guayaba ó De Arequipe', en: 'Guava Roscon Ring-shaped Cake', price: '$3.50' },
        { es: 'Orejas', price: '$1.75' },
      ],
    },
    {
      title: 'Jugos Naturales y Batidos / Natural Juices & Shakes',
      emoji: '🥤',
      note: 'Jugos (Juices) $3.50  ·  Batidas (Shakes) $4.00',
      items: [
        { es: 'Mora Batido', en: 'Blackberry', price: '$3.50 / $4.00' },
        { es: 'Guayaba Batido', en: 'Guava', price: '$3.50 / $4.00' },
        { es: 'Maracuyá Batido', en: 'Passion Fruit', price: '$3.50 / $4.00' },
        { es: 'Piña', en: 'Pineapple', price: '$3.50 / $4.00' },
        { es: 'Lulo', en: 'Naranjilla', price: '$3.50 / $4.00' },
        { es: 'Papaya', price: '$3.50 / $4.00' },
        { es: 'Mango', price: '$3.50 / $4.00' },
        { es: 'Fresa Con Banano', en: 'Strawberry with Banana', price: '$3.50 / $4.00' },
        { es: 'Banana', price: '$3.50 / $4.00' },
        { es: 'Tomate De Árbol Batido', en: 'Tree Tomato', price: '$3.50 / $4.00' },
        { es: 'Guanábana', en: 'Soursop', price: '$3.50 / $4.00' },
        { es: 'Fresa', en: 'Strawberry', price: '$3.50 / $4.00' },
      ],
    },
    {
      title: 'Bebidas / Beverages',
      emoji: '☕',
      note: 'Pequeño (Small) / Grande (Large)',
      items: [
        { es: 'Café', en: 'Coffee', price: '$1.00 / $1.50' },
        { es: 'Té / Tea', price: '$1.00 / $1.50' },
        { es: 'Chocolate', price: '$1.75 / $2.50' },
        { es: 'Milo Pequeño', price: '$1.50 / $3.00' },
        { es: 'Jugos Hit', price: '$1.75 / $3.00' },
        { es: 'Agua En Botella', en: 'Bottled Water', price: '$1.00 / $1.50' },
        { es: 'Colombiana / Manzana / Postobon / Inca / Bretana / Popular', price: '$1.50' },
        { es: 'Pepsi / Sprite / Coke / Ginger-Ale', price: '$1.50' },
        { es: 'Jugo Tropicana', price: '$2.00' },
        { es: 'Country Club Soda', price: '$1.75' },
        { es: 'Aloe Vera', price: '$2.00' },
        { es: 'Pony Malta', price: '$1.75' },
        { es: 'Kumis', price: '$3.25' },
        { es: 'Café Helado', en: 'Ice Coffee', price: '$2.00' },
        { es: 'Avena Alpina', price: '$2.00' },
        { es: 'Soda De 2 Litros', en: '2-Liter Soda', price: '$3.00' },
        { es: 'Snapple / Gatorade', price: '$1.75' },
        { es: 'Agua De Coco', en: 'Coconut Water', price: '$2.00' },
        { es: 'Limonada', en: 'Lemonade', price: '$3.50' },
        { es: 'Agua De Panela', price: '$3.50' },
        { es: 'Morir Soñando', en: 'Dominican Drink', price: '$3.50' },
        { es: 'Cerveza', en: 'Beer', price: '$3.50' },
        { es: 'Red Bull', price: '$3.00' },
      ],
    },
    {
      title: 'Antojitos / Appetizers',
      emoji: '🥟',
      items: [
        { es: 'Empanadas De Carne', en: 'Meat Empanadas', price: '$1.25' },
        { es: 'Empanadas De Pollo', en: 'Chicken Empanadas', price: '$1.25' },
        { es: 'Empanadas De Queso', en: 'Cheese Empanadas', price: '$1.50' },
        { es: 'Salchipapa', en: 'Chopped Sausage & French Fries', price: '$7.00' },
        { es: 'Salchipapa El "Sabor"', en: 'Chopped Sausage, Creole Sauce Sausage & French Fries', price: '$7.00' },
        { es: 'Salchicha Chorizo Y Morcilla', en: 'Chopped Sausage, Creole Sauce Sausage, Blood Sausage & French Fries', price: '$8.50' },
        { es: 'Arepa Con Carne Desmechada', en: 'Corn Cake w/Shredded Meat', price: '$7.00' },
        { es: 'Arepa Con Aguacate Y Chicharrones', en: 'Corn Cake, Avocado & Pork Rinds', price: '$9.00' },
        { es: 'Patacón Con Carne Desmechada', en: 'Large Plantains w/Shredded Meat', price: '$7.50' },
        { es: 'Tamales', price: '$7.00' },
        { es: 'Deditos De Pollo Con Papitas', en: 'Chicken Fingers with French Fries', price: '$8.00' },
        { es: 'Chicharrón De Cerdo', en: 'Fried Pork Rinds', price: '$4.00' },
        { es: 'Morcilla', en: 'Blood Sausage', price: '$3.50' },
        { es: 'Salami', price: '$3.25' },
        { es: 'Chorizo', en: 'Colombian Sausage', price: '$3.50' },
        { es: 'Quesadilla De Pollo ó Bistec ó Queso', en: 'Chicken, Steak, or Cheese Quesadilla', price: '$6.00' },
        { es: 'Bananas', price: '$0.50' },
      ],
    },
    {
      title: 'Desayunos / Breakfast',
      emoji: '🍳',
      items: [
        { es: 'Desayuno 1', en: 'Rice & Beans, Colombian Style Eggs, Grilled Skirt Steak or Sirloin Steak', price: '$14.00' },
        { es: 'Desayuno 2', en: 'Rice & Beans, Colombian Style Eggs & Grilled Boneless Chicken', price: '$9.50' },
        { es: 'Desayuno Ejecutivo', en: 'Rice & Beans or Cheese Corn Cake, Colombian Style Eggs & Grilled Steak or Chicken', price: '$10.00' },
        { es: 'Desayuno Sabor', en: 'Rice & Beans, Colombian Style Eggs, Grilled Steak, Fried Pork Rings & Sweet Plantains', price: '$13.00' },
        { es: 'Arepa Con Queso', en: 'Corn Cake with Cheese', price: '$4.00' },
        { es: 'Arepa Rellena', en: 'Corn Cake with Stuffed Colombian Style Eggs', price: '$7.00' },
        { es: 'Arepa Con Queso, Huevos Pericos Y Queso', en: 'Corn Cake with side Colombian Style Eggs', price: '$7.00' },
        { es: 'Arepa Con Queso, Chicharrón ó Carne Asada ó Chorizo', en: 'Corn Cake with Cheese, Fried Pork Rings, Grilled Steak, or Sausage', price: '$10.00' },
        { es: 'Calentado Con Arepita', en: 'Mixed Rice & Beans with Corn Cake', price: '$4.00' },
        { es: 'Calentado Con Carne ó Pechuga', en: 'Mixed Rice & Beans with Grilled Steak or Chicken', price: '$9.00' },
        { es: 'Calentado Con Huevos Pericos', en: 'Mixed Rice & Beans with Colombian Style Eggs', price: '$6.50' },
        { es: 'Mangú Tres Golpes', en: 'Mashed Green Plantains, Eggs, Salami, Fried Cheese', price: '$7.00' },
        { es: 'Huevos Al Gusto', en: 'Any Style Eggs', price: '$3.50' },
        { es: 'Arroz Con Huevos', en: 'Rice with Colombian Style Eggs', price: '$5.00' },
        { es: 'Longaniza', en: 'Dominican Sausage', price: '$4.00' },
      ],
    },
    {
      title: 'Desayunos Americanos / American Breakfast',
      emoji: '🥞',
      items: [
        { es: 'Papas Caseras, Tocino Y Huevos', en: 'Home Fries, Bacon & Eggs', price: '$5.00' },
        { es: 'Pan Tostado Francés, Tocino Y Huevo', en: 'French Toast, Bacon & Egg', price: '$5.00' },
        { es: 'Panqueques, Tocino Y Huevo', en: 'Pancakes, Bacon & Egg', price: '$5.00' },
        { es: 'Croissant Con Jamón, Queso Y Huevos', en: 'Croissant w/Ham, Cheese & Eggs', price: '$5.00' },
        { es: 'Tortillas De Cualquier Estilo', en: 'Omelets Any Style', price: '$6.99' },
        { es: 'Torino, Huevos Y Queso', en: 'Bacon, Eggs & Cheese', price: '$4.50' },
      ],
    },
    {
      title: 'Buffet Caliente Diario / Hot Daily Buffet',
      emoji: '🍲',
      note: 'Weekends add $1.00',
      items: [
        { es: 'Buffet Caliente Diario', en: 'Hot Buffet Daily — Call for details', price: 'Sm $7.00 / Lg $10.00' },
        { es: 'Complemento Con Sopa', en: 'Buffet with Soup — Call for details', price: 'Sm $8.00 / Lg $11.00' },
      ],
    },
    {
      title: 'Sopas / Soups',
      emoji: '🥣',
      note: 'Pequeño (Small) $3.00  ·  Grande (Large) $5.00',
      items: [
        { es: 'Sopa Del Lunes', en: 'Meat or Lentil Soup', price: '$3.00 / $5.00' },
        { es: 'Sopa Del Martes', en: 'Mixed or Chicken Trifle Soup', price: '$3.00 / $5.00' },
        { es: 'Sopa Del Miércoles', en: 'Potato & Chilli Stew or Cow\'s Leg Soup', price: '$3.00 / $5.00' },
        { es: 'Sopa Del Jueves', en: 'Tripe or Green Plantains Soup', price: '$3.00 / $5.00' },
        { es: 'Sopa Del Viernes', en: 'Chicken or Fish Soup', price: '$3.00 / $5.00' },
        { es: 'Sopa Del Sábado', en: 'Seafood or Beef Soup', price: '$3.00 / $5.00' },
        { es: 'Sopa Del Domingo', en: 'Rib Soup or Hen Stew', price: '$3.00 / $5.00' },
      ],
    },
    {
      title: 'Platos Típicos / Typical Dishes',
      emoji: '🫕',
      items: [
        { es: 'Bandeja Paisa Con Churrasco', en: '½ Sirloin Steak, Colombian Sausage, Pork Rinds, Eggs, Corn Cake, Sweet Plantains, Avocado, Rice & Beans', price: '$20.00' },
        { es: 'Bandeja Paisa Con Entraña', en: '½ Skirt Steak, Colombian Sausage, Pork Rinds, Eggs, Corn Cake, Sweet Plantains, Avocado, Rice & Beans', price: '$21.00' },
        { es: 'Mini Bandeja Paisa', en: 'Steak or Chicken or ¼ Rotisserie Chicken or Ground Beef, Colombian Sausage, Pork Rinds, Eggs, Corn Cake, Sweet Plantains, Avocado, Rice & Beans', price: '$12.00' },
        { es: 'Super Bandeja Paisa', en: 'Steak or Chicken or ¼ Rotisserie Chicken or Ground Beef, Colombian Sausage, Pork Rinds, Eggs, Corn Cake, Sweet Plantains, Avocado, Rice & Beans', price: '$14.95' },
        { es: 'Bandeja Mixta', en: 'Shrimp, Skirt Steak, Colombian Sausage, Pork Rinds, Eggs, Corn Cake, Sweet Plantains, Avocado, Rice & Beans', price: '$24.00' },
        { es: 'Bistec A Caballo Con Huevos', en: 'Steak, Rice, Beans, Sweet Plantain & Salad', price: '$14.50' },
        { es: 'Picada Para Cuatro', en: 'Colombian Sausage, Pork Rinds, Blood Sausage, Sausage, Salami, Corn Cake, Salted Potatoes & Green Plantains', price: '$24.00' },
      ],
    },
    {
      title: 'Pollo / Chicken',
      emoji: '🍗',
      note: 'Served with Rice, Beans, Sweet Plantain & Salad',
      items: [
        { es: 'Arroz Con Pollo', en: 'Chicken, Rice, Salad & French Fries', price: '$10.00' },
        { es: 'Pechuga Empanizada', en: 'Breaded Chicken Breast', price: '$13.00' },
        { es: 'Pechuga Al Limón', en: 'Chicken Breast in Lemon', price: '$13.00' },
        { es: 'Pechuga Ala Hawaiana', en: 'Chicken Breast in Hawaiian Sauce', price: '$13.00' },
        { es: 'Pechuga En Salsa De Champiñones', en: 'Chicken Breast in Mushroom Sauce', price: '$13.00' },
        { es: 'Pechuga A La Plancha', en: 'Grilled Chicken Breast', price: '$13.00' },
        { es: 'Pollo A La Brasa ¼', en: 'Rotisserie ¼ Chicken', price: '$9.50' },
        { es: 'Pollo A La Brasa ½', en: 'Rotisserie ½ Chicken', price: '$12.00' },
        { es: 'Chicharrón De Pollo', en: 'Fried Chicken Chunks', price: '$9.00' },
      ],
    },
    {
      title: 'Carnes / Steak',
      emoji: '🥩',
      note: 'Served with Rice, Beans, Sweet Plantain & Salad',
      items: [
        { es: 'Bistec En Salsa Criolla', en: 'Steak in Creole Sauce', price: '$14.75' },
        { es: 'Bistec Encebollado', en: 'Steak with Onions', price: '$16.00' },
        { es: 'Lengua Ala Plancha', en: 'Grilled Beef Tongue', price: '$17.00' },
        { es: 'Lengua En Salsa Criolla', en: 'Beef Tongue in Creole Sauce', price: '$18.00' },
        { es: 'Entraña', en: 'Skirt Steak', price: '$24.00' },
        { es: 'Carne Asada', en: 'Grilled Steak', price: '$13.25' },
        { es: 'Churrasco', en: 'Grilled Sirloin Steak', price: '$23.00' },
        { es: 'Milanesa De Carne', en: 'Breaded Steak', price: '$13.00' },
        { es: 'Hígado A La Plancha', en: 'Grilled Liver', price: '$9.25' },
        { es: 'Sobrebarriga A La Plancha', en: 'Grilled Steak Loin', price: '$18.00' },
        { es: 'Sobrebarriga En Salsa Criolla', en: 'Steak Loin in Creole Sauce', price: '$19.00' },
      ],
    },
    {
      title: 'Cerdo / Pork',
      emoji: '🐷',
      note: 'Served with Rice, Beans, Sweet Plantain & Salad',
      items: [
        { es: 'Lomo (Chuleta) Salteado', en: 'Sautéed Pork Chops', price: '$13.00' },
        { es: 'Lomo (Chuleta) De Cerdo Empanizado', en: 'Breaded Pork Chops', price: '$12.50' },
        { es: 'Lomo (Chuleta) Asada', en: 'Grilled Pork Chops', price: '$12.50' },
        { es: 'Pernil', en: 'Roast Pork', price: '$9.00' },
      ],
    },
    {
      title: 'Marisco / Seafood',
      emoji: '🦐',
      note: 'Served with Rice, Green Plantain & Salad',
      items: [
        { es: 'Arroz Con Camarones', en: 'Rice with Shrimp', price: '$15.50' },
        { es: 'Trucha Frita', en: 'Fried Trout', price: '$15.00' },
        { es: 'Trucha Sudada', en: 'Steam Trout', price: '$15.00' },
        { es: 'Arroz A La Marinera', en: 'Mixed Seafood with Rice', price: '$20.00' },
        { es: 'Cazuela De Mariscos', en: 'Seafood Casserole', price: '$20.00' },
        { es: 'Pargo Rojo', en: 'Red Snapper', price: '$20.00' },
        { es: 'Filete Marinado', en: 'Marinade Fillet', price: '$22.00' },
        { es: 'Filete Al Ajillo', en: 'Fillet Fish in Garlic Sauce', price: '$16.00' },
        { es: 'Filete En Limón', en: 'Fillet Fish in Lemon Sauce', price: '$16.00' },
        { es: 'Camarones Ala Ajillo', en: 'Shrimp in Garlic Sauce', price: '$16.00' },
        { es: 'Pargo Marinera', en: 'Marinade Red Snapper', price: '$25.00' },
        { es: 'Mojarra Frita', en: 'Fried Two Banded Sea Bream', price: '$16.75' },
        { es: 'Entraña Marinera', en: 'Skirt Steak in Marinade Sauce', price: '$23.00' },
        { es: 'Churrasco Marinera', en: 'Steak in Marinade Sauce', price: '$24.00' },
        { es: 'Filete De Tilapia Con Camarones En Salsa Maracuyá', en: 'Tilapia Fillet with Shrimp in Passion Fruit Sauce', price: '$23.00' },
        { es: 'Salmón Con Camarones Al Ajillo', en: 'Salmon with Shrimp in Garlic Sauce', price: '$20.00' },
        { es: 'Filete De Pescado Ala Plancha', en: 'Grilled Fish Fillet', price: '$15.00' },
      ],
    },
    {
      title: 'Ensaladas / Salads',
      emoji: '🥗',
      items: [
        { es: 'Ensalada Mixta', en: 'Mixed Salad', price: 'Sm $3.95 / Lg $5.95' },
        { es: 'Ensalada De Repollo De La Casa', en: 'House Cabbage Salad', price: 'Sm $3.95 / Lg $5.95' },
        { es: 'Ensalada De Aguacate', en: 'Avocado Salad', price: 'Sm $4.95 / Lg $6.95' },
        { es: 'Ensalada De Pollo', en: 'Chicken Salad', price: '$7.50' },
        { es: 'Ensalada De César', en: 'Caesar Salad', price: '$9.00' },
        { es: 'Ensalada Camarones', en: 'Shrimp Salad', price: '$9.00' },
        { es: 'Ensalada De Pollo BBQ', en: 'BBQ Chicken Salad', price: '$8.00' },
        { es: 'Vegetales Al Vapor', en: 'Steamed Vegetables', price: '$7.50' },
      ],
    },
    {
      title: 'Sándwiches Y Hamburguesas / Sandwiches & Burgers',
      emoji: '🥪',
      items: [
        { es: 'Cubano Sandwich', en: 'Cuban Sandwich', price: '$6.00' },
        { es: 'Bistec Con Queso Sandwich', en: 'Steak w/Cheese Sandwich', price: '$6.00' },
        { es: 'Sándwich De Pollo', en: 'Chicken Sandwich', price: '$6.00' },
        { es: 'Chimi De Bistec Sandwich', en: 'Cabbage, Ketchup, Mayo w/Steak Sandwich', price: '$6.00' },
        { es: 'Chimi De Pollo Sandwich', en: 'Cabbage, Ketchup, Mayo w/Chicken Sandwich', price: '$6.00' },
        { es: 'Hamburguesa', en: 'Hamburger', price: '$5.00' },
        { es: 'Hamburguesa Con Papas Fritas', en: 'Hamburger with French Fries', price: '$7.00' },
        { es: 'Hamburguesa Colombiana Con Papas Fritas', en: 'Colombian Style Hamburger with French Fries', price: '$7.00' },
      ],
    },
    {
      title: 'Mofongo',
      emoji: '🫙',
      items: [
        { es: 'Camarones', en: 'Shrimp', price: '$14.00' },
        { es: 'Bistec', en: 'Steak', price: '$9.00' },
        { es: 'Pollo', en: 'Chicken', price: '$9.00' },
        { es: 'Chicharrón', en: 'Fried Pork Skin', price: '$9.00' },
        { es: 'Pernil', en: 'Roast Pork', price: '$9.00' },
      ],
    },
    {
      title: 'Postres / Desserts',
      emoji: '🍮',
      items: [
        { es: 'Flan', price: '$4.00' },
        { es: 'Tiramisú', price: '$4.00' },
        { es: 'Tres Leches', price: '$4.00' },
        { es: 'Arroz Con Leche', en: 'Rice Pudding', price: '$3.00' },
        { es: 'Avena', en: 'Oatmeal', price: '$3.00' },
        { es: 'Gelatina', en: 'Jello', price: '$2.50' },
      ],
    },
    {
      title: 'Órdenes Extras / Side Orders',
      emoji: '🍚',
      items: [
        { es: 'Arroz Blanco', en: 'White Rice', price: 'Sm $2.50 / Lg $5.50' },
        { es: 'Arroz Moro', en: 'Pigeon Peas Rice', price: 'Sm $2.50 / Lg $5.50' },
        { es: 'Arroz Mixto', en: 'Mixed Rice', price: 'Sm $2.50 / Lg $5.00' },
        { es: 'Carnes', en: 'Meat', price: 'Sm $5.00 / Lg $15.00' },
        { es: 'Carne Molida', en: 'Ground Meat', price: 'Sm $5.00 / Lg $15.00' },
        { es: 'Arepas', en: 'Corn Cake', price: 'Sm $1.00 / Lg $2.00' },
        { es: 'Guacamole', price: '$7.00' },
        { es: 'Guacamole Con Tostones', en: 'Guacamole with Fried Plantain', price: '$10.00' },
        { es: 'Guacamole Con Chicharrones Y Tostones', en: 'Guacamole with Pork Rings & Fried Plantain', price: '$11.00' },
        { es: 'Aguacate', en: 'Avocado', price: '$3.00' },
        { es: 'Pollo A La Brasa (Entero)', en: 'Whole Rotisserie Chicken', price: '$10.00' },
        { es: 'Pollo A La Brasa ¼', en: '¼ Rotisserie Chicken', price: '$3.25' },
        { es: 'Pollo A La Brasa ½', en: '½ Rotisserie Chicken', price: '$5.25' },
      ],
    },
    {
      title: 'Combos',
      emoji: '🎉',
      items: [
        { es: 'Combo #1', en: 'Rotisserie Chicken, Rice, Beans, 2Lt Soda & Salad', price: '$19.00' },
        { es: 'Combo #2', en: '2 Rotisserie Chickens, Rice, Beans, 2Lt Soda & Salad', price: '$27.00' },
        { es: 'Combo #3', en: '2 Rotisserie Chickens, Rice, Beans, Fries or Yuca Fries, 2Lt Soda & Salad', price: '$30.00' },
      ],
    },
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

      {/* Location Tabs — sticky below nav */}
      <div className="sticky top-20 z-40 bg-black/95 backdrop-blur-xl border-b border-zinc-800 py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {locations.map((location) => (
              <button
                key={location.id}
                onClick={() => setActiveLocation(location.id)}
                className={`px-6 py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-300 ${
                  activeLocation === location.id
                    ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg shadow-amber-500/40 scale-105'
                    : 'bg-zinc-900 text-gray-400 hover:text-white hover:bg-zinc-800'
                }`}
              >
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  {location.name}
                </div>
              </button>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-3">
            {locations.find(l => l.id === activeLocation)?.address}
          </p>
        </div>
      </div>

      {/* Menu Content */}
      <section className="py-16 bg-gradient-to-b from-zinc-950 to-black min-h-screen">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* ── College Point ── */}
          {activeLocation === 'college-point' && (
            <div className="space-y-12">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-black bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-2">
                  College Point Menu
                </h2>
                <p className="text-gray-400">15-20 College Point Blvd, College Point, NY 11356 · Open 7 Days 6:30 AM – 10:00 PM</p>
              </div>

              {collegePointMenu.map((section) => (
                <div key={section.title} className="bg-gradient-to-br from-zinc-900 to-black rounded-3xl border border-zinc-800 overflow-hidden">
                  {/* Section header */}
                  <div className="px-8 py-6 border-b border-zinc-800 flex items-center gap-3">
                    <span className="text-3xl">{section.emoji}</span>
                    <div>
                      <h3 className="text-2xl font-black text-white">{section.title}</h3>
                      {section.note && (
                        <p className="text-amber-400 text-sm mt-1">{section.note}</p>
                      )}
                    </div>
                  </div>

                  {/* Items */}
                  <div className="divide-y divide-zinc-800/50">
                    {section.items.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start justify-between gap-4 px-8 py-4 hover:bg-amber-500/5 transition-colors group"
                      >
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-white group-hover:text-amber-300 transition-colors">
                            {item.es}
                          </p>
                          {item.en && (
                            <p className="text-gray-500 text-sm mt-0.5">{item.en}</p>
                          )}
                        </div>
                        <span className="text-amber-400 font-bold text-sm whitespace-nowrap shrink-0 mt-0.5">
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ── Queens Library ── */}
          {activeLocation === 'queens' && (
            <div className="text-center py-24">
              <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 p-16 rounded-3xl border border-amber-500/30 max-w-2xl mx-auto">
                <span className="text-6xl mb-6 block">📋</span>
                <h2 className="text-4xl font-black mb-4 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  Queens Library Menu
                </h2>
                <p className="text-xl text-gray-300 mb-4">
                  89-11 Merrick Blvd, Jamaica, NY 11432
                </p>
                <p className="text-gray-400 mb-8">
                  Full menu coming soon — call us for today&apos;s daily lunch specials!
                </p>
                <a
                  href="tel:3473684407"
                  className="inline-block bg-gradient-to-r from-amber-500 to-orange-600 text-white px-10 py-5 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-amber-500/50"
                >
                  Call for Today&apos;s Menu: (347) 368-4407
                </a>
              </div>
            </div>
          )}

          {/* ── JFK & Brooklyn Coming Soon ── */}
          {(activeLocation === 'jfk' || activeLocation === 'brooklyn') && (
            <div className="text-center py-24">
              <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 p-16 rounded-3xl border border-amber-500/30 max-w-2xl mx-auto">
                <span className="text-6xl mb-6 block">🚧</span>
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
            <p className="mt-2 text-sm">Developed by Deka Solutions</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
