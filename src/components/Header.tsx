import React from 'react';
import { ChefHat, Bookmark } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Props {
  totalCost?: number;
  totalSavings?: number;
  recipeCount?: number;
}

export default function Header({ totalCost, totalSavings, recipeCount }: Props) {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-3 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <Link to="/" className="flex items-center space-x-2">
              <ChefHat className="w-8 h-8 text-purple-500" />
              <h1 className="text-2xl font-bold text-gray-900">Recipe Saver</h1>
            </Link>
            <Link 
              to="/bookmarks" 
              className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors"
            >
              <Bookmark className="w-5 h-5" />
              <span className="text-sm font-medium">Saved Recipes</span>
            </Link>
          </div>
          {totalCost !== undefined && totalSavings !== undefined && recipeCount !== undefined && (
            <div className="flex items-center space-x-4">
              <div className="text-sm">
                <span className="text-gray-600">Total Cost: </span>
                <span className="font-semibold text-gray-900">£{totalCost.toFixed(2)}</span>
              </div>
              <div className="text-purple-700 text-sm font-semibold bg-purple-100 px-3 py-1.5 rounded-full">
                Potential Savings: £{totalSavings.toFixed(2)}
              </div>
              <div className="text-sm text-gray-600">
                {recipeCount} {recipeCount === 1 ? 'recipe' : 'recipes'}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
} 