import React, { useState } from 'react';
import { ChefHat, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Props {
  onSubmit: (message: string) => void;
}

const SUGGESTIONS = [
  "Find healthy dinner recipes",
  "What can I cook under £10?",
  "Show me gluten-free desserts",
  "Quick vegetarian meals",
  "Recipes with chickpeas",
  "Easy meal prep ideas"
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
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    onSubmit(message);
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

            <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
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