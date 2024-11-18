import React from 'react';
import { Link } from 'react-router-dom';
import { Recipe } from '../types';
import { useBookmarks } from '../contexts/BookmarkContext';
import { Bookmark } from 'lucide-react';

interface Props {
  recipe: Recipe;
  selectedSupermarket: string;
}

export default function RecipeCard({ recipe, selectedSupermarket }: Props) {
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const bookmarked = isBookmarked(recipe.id);

  return (
    <Link 
      to={`/recipe/${recipe.id}`}
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group relative"
    >
      {/* Changed to aspect-[4/3] for a rectangular shape */}
      <div className="aspect-[5.55/3] w-full relative">
        <img
          src={`${import.meta.env.PROD ? '/llama-hack/' : ''}${recipe.image}`}
          alt={recipe.name}
          className="w-full h-full object-cover"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleBookmark(recipe);
          }}
          className="absolute top-2 right-2 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
        >
          <Bookmark 
            className={`w-5 h-5 ${bookmarked ? 'fill-purple-500 text-purple-500' : 'text-gray-600'}`} 
          />
        </button>
      </div>

      <div className="p-4">
        <h3 className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors">
          {recipe.name}
        </h3>
        
        <div className="mt-2 flex justify-end">
          <div className="text-sm font-medium text-purple-600">
            £{recipe.totalCost.toFixed(2)}
          </div>
        </div>
      </div>
    </Link>
  );
}