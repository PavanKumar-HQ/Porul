"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { Product } from "@/data/products";

interface CartItem extends Product {
  quantity: number;
  customText: string;
  customFont: string;
  customColor: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, customText: string, customFont: string, customColor: string) => void;
  removeFromCart: (id: string, customText: string) => void;
  updateQuantity: (id: string, customText: string, quantity: number) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addToCart = (product: Product, customText: string, customFont: string, customColor: string) => {
    setCart((prev) => {
      const existing = prev.find(item => item.id === product.id && item.customText === customText);
      if (existing) {
        return prev.map(item => 
          item.id === product.id && item.customText === customText 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      return [...prev, { ...product, quantity: 1, customText, customFont, customColor }];
    });
    setIsOpen(true);
  };

  const removeFromCart = (id: string, customText: string) => {
    setCart(prev => prev.filter(item => !(item.id === id && item.customText === customText)));
  };

  const updateQuantity = (id: string, customText: string, quantity: number) => {
    if (quantity < 1) return;
    setCart(prev => prev.map(item => 
      item.id === id && item.customText === customText 
        ? { ...item, quantity } 
        : item
    ));
  };

  const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, isOpen, setIsOpen, total }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
