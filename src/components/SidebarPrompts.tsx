import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

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
  { id: 'tesco', name: 'Tesco' },
  { id: 'asda', name: 'ASDA' },
  { id: 'sainsburys', name: "Sainsbury's" },
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
                {SUPERMARKETS.map(market => (
                  <button
                    key={market.id}
                    type="button"
                    onClick={() => setSelectedSupermarket(market.id)}
                    className={`px-2 py-1 text-xs rounded-full transition-colors ${
                      selectedSupermarket === market.id
                        ? 'bg-purple-100 text-purple-700'
                        : 'bg-gray-100 text-gray-600 hover:bg-purple-50'
                    }`}
                  >
                    {market.name}
                  </button>
                ))}
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