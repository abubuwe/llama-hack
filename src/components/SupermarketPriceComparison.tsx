import React from 'react';
import { SupermarketPrices } from '../types';
import { ShoppingCart, ShoppingBag, Store, Building2 } from 'lucide-react';

interface Props {
  prices: SupermarketPrices;
  selectedSupermarket: string;
}

const SUPERMARKETS = [
  { 
    id: 'tesco', 
    name: 'Tesco',
    icon: ShoppingCart,
    color: '#ee1c2e'
  },
  { 
    id: 'asda', 
    name: 'ASDA',
    icon: ShoppingBag,
    color: '#78BE20'
  },
  { 
    id: 'sainsburys', 
    name: "Sainsbury's",
    icon: Store,
    color: '#ff8200'
  },
  { 
    id: 'ocado', 
    name: 'Ocado',
    icon: Building2,
    color: '#662d91'
  }
] as const;

export default function SupermarketPriceComparison({ prices, selectedSupermarket }: Props) {
  const supermarket = SUPERMARKETS.find(s => s.id === selectedSupermarket)!;
  const Icon = supermarket.icon;
  const price = prices[selectedSupermarket as keyof SupermarketPrices];

  return (
    <div 
      className="flex items-center gap-2 p-2 rounded-lg bg-white/80"
      style={{ color: supermarket.color }}
    >
      <Icon className="w-5 h-5" />
      <div className="flex flex-col">
        <span className="text-xs font-medium">{supermarket.name}</span>
        <span className="text-sm font-bold">£{price.toFixed(2)}</span>
      </div>
    </div>
  );
} 