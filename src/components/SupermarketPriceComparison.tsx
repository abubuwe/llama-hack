import React from 'react';
import { SupermarketPrices } from '../types';

interface Props {
  prices: SupermarketPrices;
  compact?: boolean;
}

const SUPERMARKETS = [
  { 
    id: 'tesco',
    name: 'Tesco',
    logo: '/supermarket-logos/tesco.svg',
    color: '#ee1c2e'
  },
  { 
    id: 'asda',
    name: 'ASDA',
    logo: '/supermarket-logos/asda.svg',
    color: '#78BE20'
  },
  { 
    id: 'sainsburys',
    name: 'Sainsbury\'s',
    logo: '/supermarket-logos/sainsburys.svg',
    color: '#ff8200'
  },
  { 
    id: 'ocado',
    name: 'Ocado',
    logo: '/supermarket-logos/ocado.svg',
    color: '#662d91'
  }
] as const;

export default function SupermarketPriceComparison({ prices }: Props) {
  const pricesList = SUPERMARKETS.map(supermarket => ({
    ...supermarket,
    price: prices[supermarket.id as keyof SupermarketPrices]
  })).sort((a, b) => a.price - b.price);

  const lowestPrice = pricesList[0].price;

  return (
    <div className="flex flex-wrap gap-1.5">
      {pricesList.map(({ name, price, logo }, index) => (
        <div 
          key={name}
          className={`
            flex items-center gap-1.5 p-1.5 rounded-md flex-1 min-w-[120px] max-w-[150px]
            transition-all duration-200
            ${index === 0 
              ? 'shadow-sm ring-2 ring-purple-500 bg-purple-50' 
              : 'border border-gray-200 hover:border-purple-200'
            }
          `}
        >
          <img 
            src={logo} 
            alt={name} 
            className="w-5 h-5 object-contain flex-shrink-0"
          />
          <div className="min-w-0 flex-1">
            <div className="text-xs font-medium text-gray-900 truncate">
              {name}
            </div>
            <div className="flex items-center gap-1">
              <span className={`text-xs font-semibold ${
                index === 0 ? 'text-purple-600' : 'text-gray-600'
              }`}>
                £{price.toFixed(2)}
              </span>
              {index > 0 && (
                <span className="text-[10px] text-gray-500">
                  (+{(price - lowestPrice).toFixed(2)})
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 