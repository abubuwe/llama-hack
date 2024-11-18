import React, { useState } from 'react';
import { ArrowRight, ChevronRight, ShoppingCart, ShoppingBag, Store } from 'lucide-react';

interface Props {
  onSubmit: (message: string, days: number, selectedSupermarket: string) => void;
}

const SUGGESTIONS = [
  "Get me a meal plan with healthy recipes",
  "I want quick and easy recipes",
  "Weekday meals for a family of 4, with 2 kids",
  "Recipes for a gluten-free diet",
  "Comfort food ideas for winter evenings",
];

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
];

export default function SidebarPrompts({ onSubmit }: Props) {
  const [message, setMessage] = useState('');
  const [days, setDays] = useState(4);
  const [selectedSupermarket, setSelectedSupermarket] = useState('tesco');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    onSubmit(message, days, selectedSupermarket);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">New Search</h3>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="What would you like to cook?"
              className="w-full px-3 py-2 text-sm border border-purple-200 rounded-lg focus:outline-none focus:border-purple-500"
            />
            <button
              type="submit"
              disabled={!message.trim()}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-purple-600 hover:text-purple-700 disabled:opacity-50"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <label htmlFor="sidebar-days" className="text-sm text-gray-600">
                Days:
              </label>
              <input
                type="number"
                id="sidebar-days"
                min="1"
                max="30"
                value={days}
                onChange={(e) => setDays(Math.max(1, Math.min(30, parseInt(e.target.value) || 1)))}
                className="w-16 px-2 py-1 text-sm border border-purple-200 rounded-lg"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-600">Supermarket:</label>
              <div className="flex flex-wrap gap-2">
                {SUPERMARKETS.map(supermarket => {
                  const Icon = supermarket.icon;
                  return (
                    <button
                      key={supermarket.id}
                      type="button"
                      onClick={() => setSelectedSupermarket(supermarket.id)}
                      className={`
                        px-3 py-1.5 rounded-full text-sm transition-all duration-200
                        flex items-center gap-2
                        ${selectedSupermarket === supermarket.id
                          ? 'bg-white ring-2'
                          : 'bg-white/80 hover:bg-white'
                        }
                      `}
                      style={{
                        color: supermarket.color,
                        borderColor: selectedSupermarket === supermarket.id ? supermarket.color : 'transparent'
                      }}
                    >
                      <Icon 
                        className="w-4 h-4" 
                        style={{ 
                          stroke: selectedSupermarket === supermarket.id 
                            ? supermarket.color 
                            : '#6b7280' 
                        }} 
                      />
                      <span className={selectedSupermarket === supermarket.id 
                        ? 'font-medium'
                        : 'text-gray-500'
                      }>
                        {supermarket.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </form>
      </div>

      <div className="space-y-2">
        <h4 className="text-sm font-medium text-gray-600">Quick Prompts:</h4>
        <div className="flex flex-col gap-2">
          {SUGGESTIONS.map((suggestion) => (
            <button
              key={suggestion}
              onClick={() => setMessage(suggestion)}
              className={`text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                message === suggestion
                  ? 'bg-purple-100 text-purple-700'
                  : 'text-gray-600 hover:bg-purple-50'
              }`}
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
} 