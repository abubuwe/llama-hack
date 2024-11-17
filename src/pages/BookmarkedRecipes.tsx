import React from 'react';
import { useBookmarks } from '../contexts/BookmarkContext';
import { recipes } from '../data/mockData';
import RecipeCard from '../components/RecipeCard';
import { Filters } from '../types';

interface Props {
  filters: Filters;
}

export default function BookmarkedRecipes({ filters }: Props) {
  const { bookmarkedRecipes } = useBookmarks();
  const savedRecipes = recipes.filter(recipe => bookmarkedRecipes.includes(recipe.id));

  return (
    <div className="flex-1 min-h-screen overflow-auto">
      <main className="max-w-4xl mx-auto px-3 py-6">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-purple-800">
            Saved Recipes ({savedRecipes.length})
          </h2>
          {savedRecipes.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2">
              {savedRecipes.map(recipe => (
                <RecipeCard 
                  key={recipe.id} 
                  recipe={recipe} 
                  selectedSupermarket={filters.selectedSupermarket}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-purple-50 rounded-lg">
              <p className="text-purple-800">
                You haven't saved any recipes yet. Browse recipes and click the bookmark icon to save them here.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
} 