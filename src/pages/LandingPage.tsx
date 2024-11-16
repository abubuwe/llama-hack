import React, { useState } from 'react';
import { ChefHat, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Props {
  onSubmit: (message: string) => void;
}

export default function LandingPage({ onSubmit }: Props) {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    onSubmit(message);
    navigate('/recipes');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-purple-100 flex flex-col">
      <header className="p-6">
        <div className="flex items-center justify-center space-x-2">
          <ChefHat className="w-10 h-10 text-purple-500" />
          <h1 className="text-3xl font-bold text-gray-900">Recipe Saver</h1>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-4 -mt-16">
        <div className="max-w-3xl w-full space-y-8 text-center">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Find your perfect recipe
            </h2>
            <p className="text-xl text-gray-600">
              Tell me what you'd like to cook, your dietary preferences, or any ingredients you have in mind
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="e.g. 'Show me some quick vegetarian dinner recipes' or 'What can I make with chickpeas?'"
                className="w-full px-4 py-4 text-lg border-2 border-purple-200 rounded-xl focus:outline-none focus:border-purple-500 pr-12"
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

          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <span className="px-3 py-1 bg-white rounded-full shadow-sm">
              "Find healthy dinner recipes"
            </span>
            <span className="px-3 py-1 bg-white rounded-full shadow-sm">
              "What can I cook under £10?"
            </span>
            <span className="px-3 py-1 bg-white rounded-full shadow-sm">
              "Show me gluten-free desserts"
            </span>
          </div>
        </div>
      </main>

      <footer className="py-8 text-center text-gray-600">
        <p>Find recipes, compare prices, and save money on your groceries</p>
      </footer>
    </div>
  );
} 