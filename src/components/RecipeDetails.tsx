import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { Recipe } from '../types';

interface RecipeDetailsProps {
  recipes: Recipe[];
}

function RecipeDetails({ recipes }: RecipeDetailsProps) {
  const { id } = useParams();
  const recipe = recipes.find(r => r.id === id);

  if (!recipe) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-800">Recipe not found.</p>
        <Link to="/" className="text-indigo-600 hover:text-indigo-800 mt-4 inline-block">
          Return to recipes
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link
        to="/"
        className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-6"
      >
        <ChevronLeft className="w-4 h-4 mr-1" />
        Back to recipes
      </Link>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{recipe.name}</h1>
          
          <div className="flex items-center space-x-4 mb-6">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
              Savings: ${(recipe.regularCost - recipe.totalCost).toFixed(2)}
            </span>
            {Object.entries(recipe.dietaryInfo).map(([key, value]) => (
              value && (
                <span key={key} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  {key}
                </span>
              )
            ))}
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
              <ul className="list-disc list-inside space-y-1">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="text-gray-700">{ingredient.name}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Instructions</h2>
              <ol className="list-decimal list-inside space-y-2">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index} className="text-gray-700">{instruction}</li>
                ))}
              </ol>
            </div>

            <div className="mt-6 pt-6 border-t">
              <h2 className="text-xl font-semibold mb-2">Cost Breakdown</h2>
              <div className="space-y-2">
                <p className="text-gray-700">Regular Cost: ${recipe.regularCost.toFixed(2)}</p>
                <p className="text-gray-700">Your Cost: ${recipe.totalCost.toFixed(2)}</p>
                <p className="text-green-600 font-semibold">
                  Total Savings: ${(recipe.regularCost - recipe.totalCost).toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetails; 