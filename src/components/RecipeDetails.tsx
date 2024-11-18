import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, MapPin, ArrowDown } from 'lucide-react';
import { Recipe, SupermarketPrices } from '../types';
import IngredientOriginMap from './IngredientOriginMap';

interface RecipeDetailsProps {
  recipes: Recipe[];
}

function SupermarketComparison({ prices }: { prices: SupermarketPrices }) {
  const pricesList = [
    { name: 'Tesco', price: prices.tesco },
    { name: 'ASDA', price: prices.asda },
    { name: 'Sainsbury\'s', price: prices.sainsburys },
    { name: 'Ocado', price: prices.ocado },
  ].sort((a, b) => a.price - b.price);

  const lowestPrice = pricesList[0].price;

  return (
    <div className="grid grid-cols-4 gap-2">
      {pricesList.map(({ name, price }, index) => (
        <div 
          key={name}
          className={`p-2 rounded-lg text-center ${
            index === 0 ? 'bg-purple-100 ring-1 ring-purple-500' : 'bg-gray-50'
          }`}
        >
          <div className="font-semibold text-gray-700">{name}</div>
          <div className={`text-lg ${index === 0 ? 'text-purple-600 font-bold' : 'text-gray-600'}`}>
            £{price.toFixed(2)}
          </div>
          {index === 0 && (
            <div className="text-xs text-purple-600 font-medium mt-1">
              Best Price
            </div>
          )}
          {index > 0 && (
            <div className="text-xs text-gray-500 mt-1">
              +£{(price - lowestPrice).toFixed(2)}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function RecipeDetails({ recipes }: RecipeDetailsProps) {
  const [selectedIngredient, setSelectedIngredient] = useState<string | null>(null);
  const { id } = useParams();
  const recipe = recipes.find(r => r.id === id);

  const totalPricesBySupermarket = useMemo(() => {
    if (!recipe) return null;

    const totals = recipe.ingredients.reduce(
      (acc, ingredient) => ({
        tesco: acc.tesco + ingredient.supermarketPrices.tesco,
        asda: acc.asda + ingredient.supermarketPrices.asda,
        sainsburys: acc.sainsburys + ingredient.supermarketPrices.sainsburys,
        ocado: acc.ocado + ingredient.supermarketPrices.ocado,
      }),
      { tesco: 0, asda: 0, sainsburys: 0, ocado: 0 }
    );

    return totals;
  }, [recipe]);

  if (!recipe || !totalPricesBySupermarket) {
    return (
      <div className="flex-1 min-h-screen bg-gradient-to-b from-purple-50 to-purple-100 p-4">
        <div className="text-center py-12">
          <p className="text-gray-800">Recipe not found.</p>
          <Link to="/" className="text-purple-600 hover:text-purple-800 mt-4 inline-block">
            Return to recipes
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 min-h-screen bg-gradient-to-b from-purple-50 to-purple-100 overflow-auto">
      <div className="max-w-xl mx-auto px-4 py-6">
        <Link
          to="/recipes"
          className="inline-flex items-center text-purple-600 hover:text-purple-800 mb-6"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to recipes
        </Link>
        
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <img
            src={recipe.image}
            alt={recipe.name}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{recipe.name}</h1>
            
            <div className="space-y-6">
              <div className="mt-6 pt-6 border-t">
                <h2 className="text-xl font-semibold mb-2">Cost Breakdown</h2>
                <div className="space-y-2">
                  <p className="text-gray-700">Regular Cost: £{recipe.regularCost.toFixed(2)}</p>
                  <p className="text-gray-700">Your Cost: £{recipe.totalCost.toFixed(2)}</p>
                  <p className="text-green-600 font-semibold">
                    Total Savings: £{(recipe.regularCost - recipe.totalCost).toFixed(2)}
                  </p>
                </div>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-4">Ingredients & Individual Prices</h2>
                <div className="space-y-4">
                  {recipe.ingredients.map((ingredient, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <div 
                        className="flex items-center justify-between cursor-pointer"
                        onClick={() => setSelectedIngredient(
                          selectedIngredient === ingredient.name ? null : ingredient.name
                        )}
                      >
                        <div className="flex items-center space-x-2">
                          <span>{ingredient.amount} {ingredient.unit} {ingredient.name}</span>
                          <span className="text-sm text-gray-500 flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {ingredient.origin}
                          </span>
                        </div>
                      </div>
                      
                      {selectedIngredient === ingredient.name && (
                        <div className="mt-4">
                          <h4 className="text-sm font-medium text-gray-700 mb-2">
                            Price Comparison
                          </h4>
                          <SupermarketComparison prices={ingredient.supermarketPrices} />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">Instructions</h2>
                <ol className="list-decimal list-inside space-y-2">
                  {recipe.instructions.map((instruction, index) => (
                    <li key={index} className="text-gray-700">{instruction}</li>
                  ))}
                </ol>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">Likely Ingredient Origins</h2>
                <IngredientOriginMap ingredients={recipe.ingredients} />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetails; 