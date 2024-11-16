import React from 'react';
import { Clock, DollarSign } from 'lucide-react';
import { Recipe } from '../types';
import { Link } from 'react-router-dom';

interface Props {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: Props) {
  const savings = (recipe.regularCost - recipe.totalCost).toFixed(2);
  const savingsPercentage = ((recipe.regularCost - recipe.totalCost) / recipe.regularCost * 100).toFixed(0);

  return (
    <Link to={`/recipe/${recipe.id}`} className="block hover:shadow-lg transition-shadow">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
        <img 
          src={recipe.image} 
          alt={recipe.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-6 space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">{recipe.name}</h3>
          
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              <span>{recipe.prepTime + recipe.cookTime} mins</span>
            </div>
            <div className="flex items-center text-green-600 font-medium">
              <DollarSign className="w-4 h-4 mr-1" />
              <span>Save ${savings} ({savingsPercentage}%)</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {Object.entries(recipe.dietaryInfo).map(([key, value]) => (
              value && (
                <span 
                  key={key}
                  className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-600"
                >
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </span>
              )
            ))}
          </div>

          <div className="pt-4 border-t border-gray-100">
            <h4 className="font-medium text-gray-700 mb-2">Current Price Breakdown:</h4>
            <div className="space-y-1">
              {recipe.ingredients.map((ingredient, index) => (
                <div key={index} className="flex justify-between text-sm">
                  <span className="text-gray-600">
                    {ingredient.amount} {ingredient.unit} {ingredient.name}
                  </span>
                  <span className="text-gray-800 font-medium">
                    ${ingredient.currentPrice.toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}