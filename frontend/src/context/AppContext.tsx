"use client"

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User, Order, Product, Supplier } from '../types/types';

interface AppContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  language: 'hi' | 'en';
  setLanguage: (lang: 'hi' | 'en') => void;
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  cart: { product: Product; quantity: number; supplier: Supplier }[];
  addToCart: (product: Product, quantity: number, supplier: Supplier) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  orders: Order[];
  addOrder: (order: Order) => void;
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [language, setLanguage] = useState<'hi' | 'en'>('en');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [cart, setCart] = useState<{ product: Product; quantity: number; supplier: Supplier }[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [currentPage, setCurrentPage] = useState('login');

  const addToCart = (product: Product, quantity: number, supplier: Supplier) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity, supplier }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const addOrder = (order: Order) => {
    setOrders(prev => [order, ...prev]);
  };

  return (
    <AppContext.Provider value={{
      user, setUser,
      language, setLanguage,
      theme, setTheme,
      cart, addToCart, removeFromCart, clearCart,
      orders, addOrder,
      currentPage, setCurrentPage
    }}>
      {children}
    </AppContext.Provider>
  );
};