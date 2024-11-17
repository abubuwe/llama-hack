import React, { useMemo } from 'react';
import { Clock, DollarSign, Bookmark } from 'lucide-react';
import { Recipe } from '../types';
import { Link, useNavigate } from 'react-router-dom';
import SupermarketPriceComparison from './SupermarketPriceComparison';
import { useBookmarks } from '../contexts/BookmarkContext';

interface Props {
  recipe: Recipe;
  selectedSupermarket: string;
}

export default function RecipeCard({ recipe, selectedSupermarket }: Props) {
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const navigate = useNavigate();
  const savings = (recipe.regularCost - recipe.totalCost).toFixed(2);

  const totalPricesBySupermarket = useMemo(() => {
    return recipe.ingredients.reduce(
      (acc, ingredient) => ({
        tesco: acc.tesco + ingredient.supermarketPrices.tesco,
        asda: acc.asda + ingredient.supermarketPrices.asda,
        sainsburys: acc.sainsburys + ingredient.supermarketPrices.sainsburys,
        ocado: acc.ocado + ingredient.supermarketPrices.ocado,
      }),
      { tesco: 0, asda: 0, sainsburys: 0, ocado: 0 }
    );
  }, [recipe.ingredients]);

  const handleCardClick = (e: React.MouseEvent) => {
    // Don't navigate if clicking the bookmark button or its container
    if (!(e.target as HTMLElement).closest('.bookmark-button')) {
      navigate(`/recipe/${recipe.id}`);
    }
  };

  return (
    <div 
      onClick={handleCardClick}
      className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-200 hover:shadow-md hover:translate-y-[-2px] cursor-pointer"
    >
      <div className="relative">
        <img 
          src={recipe.image} 
          alt={recipe.name}
          className="w-full h-36 object-cover"
        />
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleBookmark(recipe.id);
          }}
          className="bookmark-button absolute top-2 right-2 p-1.5 rounded-full bg-white/90 hover:bg-white transition-colors z-10"
        >
          <Bookmark 
            className={`w-5 h-5 ${
              isBookmarked(recipe.id) 
                ? 'fill-purple-600 text-purple-600' 
                : 'text-gray-600'
            }`} 
          />
        </button>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
      <div className="p-3 space-y-2">
        <h3 className="text-base font-semibold text-gray-800 line-clamp-1">{recipe.name}</h3>
        
        <div className="flex items-center justify-between text-xs text-gray-600">
          <div className="flex items-center">
            <Clock className="w-3 h-3 mr-1 text-purple-500" />
            <span>{recipe.prepTime + recipe.cookTime}m</span>
          </div>
          <div className="flex items-center text-purple-600 font-medium">
            <DollarSign className="w-3 h-3 mr-1" />
            <span>Save £{savings}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1">
          {Object.entries(recipe.dietaryInfo).map(([key, value]) => (
            value && (
              <span 
                key={key}
                className="px-1.5 py-0.5 text-xs rounded-full bg-purple-100 text-purple-700"
              >
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </span>
            )
          ))}
        </div>

        <div className="pt-2 border-t border-gray-100">
          <SupermarketPriceComparison 
            prices={totalPricesBySupermarket}
            selectedSupermarket={selectedSupermarket}
          />
        </div>
      </div>
    </div>
  );
}