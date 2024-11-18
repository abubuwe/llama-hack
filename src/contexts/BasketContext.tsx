import React, { createContext, useContext, useState } from 'react';
import { Ingredient } from '../types';

interface BasketContextType {
  basketItems: Ingredient[];
  addToBasket: (ingredient: Ingredient) => void;
  removeFromBasket: (ingredient: Ingredient) => void;
  clearBasket: () => void;
}

const BasketContext = createContext<BasketContextType | undefined>(undefined);

export function BasketProvider({ children }: { children: React.ReactNode }) {
  const [basketItems, setBasketItems] = useState<Ingredient[]>([]);

  const addToBasket = (ingredient: Ingredient) => {
    setBasketItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.name === ingredient.name && item.supermarket === ingredient.supermarket
      );

      if (existingItem) {
        return prevItems.map((item) =>
          item.name === ingredient.name && item.supermarket === ingredient.supermarket
            ? { 
                ...item, 
                quantity: (item.quantity || 0) + (ingredient.quantity || 0) 
              }
            : item
        );
      }

      return [...prevItems, ingredient];
    });
  };

  const removeFromBasket = (ingredient: Ingredient) => {
    setBasketItems((prevItems) =>
      prevItems.filter(
        (item) => !(item.name === ingredient.name && item.supermarket === ingredient.supermarket)
      )
    );
  };

  const clearBasket = () => {
    setBasketItems([]);
  };

  return (
    <BasketContext.Provider value={{ basketItems, addToBasket, removeFromBasket, clearBasket }}>
      {children}
    </BasketContext.Provider>
  );
}

export function useBasket() {
  const context = useContext(BasketContext);
  if (context === undefined) {
    throw new Error('useBasket must be used within a BasketProvider');
  }
  return context;
} 