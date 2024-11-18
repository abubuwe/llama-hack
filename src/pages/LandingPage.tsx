import React, { useState } from 'react';
import { 
  ChefHat, 
  ArrowRight, 
  ShoppingCart, 
  ShoppingBag, 
  Store, 
  Building2 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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

const FLOATING_ITEMS = [
  // Left side items
  { image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=200&h=200&fit=crop', style: 'top-[5%] left-[5%] rotate-[-12deg] animate-float' },
  { image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=200&h=200&fit=crop', style: 'bottom-[15%] left-[8%] rotate-[15deg] animate-float-slow' },
  { image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=200&h=200&fit=crop', style: 'top-[40%] left-[3%] rotate-[-8deg] animate-float-delayed' },
  
  // Right side items
  { image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200&h=200&fit=crop', style: 'top-[10%] right-[5%] rotate-[8deg] animate-float-delayed' },
  { image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=200&h=200&fit=crop', style: 'top-[50%] right-[7%] rotate-[-5deg] animate-float-slower' },
  { image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=200&h=200&fit=crop', style: 'bottom-[10%] right-[6%] rotate-[10deg] animate-float' },
  
  // Additional corner items
  { image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=200&h=200&fit=crop', style: 'bottom-[20%] left-[20%] rotate-[12deg] animate-float-slow' },
  { image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=200&h=200&fit=crop', style: 'top-[25%] right-[15%] rotate-[-7deg] animate-float-delayed' },
];

export default function LandingPage({ onSubmit }: Props) {
  const [message, setMessage] = useState('');
  const [days, setDays] = useState(4);
  const [selectedSupermarket, setSelectedSupermarket] = useState('tesco');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    onSubmit(message, days, selectedSupermarket);
    navigate('/recipes');
  };

  const handleSuggestionClick = (suggestion: string) => {
    setMessage(suggestion);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-purple-100 flex flex-col overflow-hidden relative">
      {/* Floating Food Images */}
      {FLOATING_ITEMS.map((item, index) => (
        <div
          key={index}
          className={`absolute w-28 h-28 rounded-2xl shadow-lg overflow-hidden opacity-60 hover:opacity-90 transition-opacity duration-300 ${item.style}`}
        >
          <img
            src={item.image}
            alt="Food"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
        </div>
      ))}

      {/* Main Content with max-width to prevent overlap */}
      <div className="relative z-10 w-full">
        <header className="p-6">
          <div className="flex items-center justify-center space-x-2">
            <ChefHat className="w-10 h-10 text-purple-500" />
            <h1 className="text-3xl font-bold text-gray-900">Recipe Saver</h1>
          </div>
        </header>

        <main className="flex flex-col items-center justify-center px-4 min-h-[calc(100vh-200px)]">
          <div className="max-w-2xl w-full space-y-8 text-center bg-white/40 backdrop-blur-sm rounded-2xl p-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                Find your perfect recipe
              </h2>
              <p className="text-xl text-gray-600">
                Tell me what you'd like to cook, your dietary preferences, or any ingredients you have in mind
              </p>
            </div>

            <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
              <div className="relative">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="e.g. 'Show me some quick vegetarian dinner recipes'"
                  className="w-full px-4 py-4 text-lg border-2 border-purple-200 rounded-xl focus:outline-none focus:border-purple-500 pr-12 bg-white/80 backdrop-blur-sm"
                />
                <button
                  type="submit"
                  disabled={!message.trim()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-purple-600 hover:text-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ArrowRight className="w-6 h-6" />
                </button>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-center">
                <div className="flex items-center gap-2">
                  <label htmlFor="days" className="text-sm font-medium text-gray-700">
                    Plan for
                  </label>
                  <input
                    type="number"
                    id="days"
                    min="1"
                    max="30"
                    value={days}
                    onChange={(e) => setDays(Math.max(1, Math.min(30, parseInt(e.target.value) || 1)))}
                    className="w-20 px-3 py-1.5 text-sm border-2 border-purple-200 rounded-lg focus:outline-none focus:border-purple-500 bg-white/80"
                  />
                  <span className="text-sm font-medium text-gray-700">days</span>
                </div>

                <div className="flex flex-wrap justify-center gap-2">
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
            </form>

            <div className="flex flex-wrap justify-center gap-2">
              {SUGGESTIONS.map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className={`px-3 py-1.5 rounded-full text-sm transition-all duration-200 ${
                    message === suggestion
                      ? 'bg-purple-100 text-purple-700 ring-2 ring-purple-500'
                      : 'bg-white/80 backdrop-blur-sm text-gray-600 hover:bg-purple-50 hover:text-purple-600'
                  } shadow-sm hover:shadow`}
                >
                  "{suggestion}"
                </button>
              ))}
            </div>
          </div>
        </main>

        <footer className="py-8 text-center text-gray-600 relative">
          <p>Find recipes, compare prices, and save money on your groceries</p>
        </footer>
      </div>
    </div>
  );
} 