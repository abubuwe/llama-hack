import React, { useState, useMemo } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { recipes } from './data/mockData';
import { Filters } from './types';
import FilterControls from './components/FilterControls';
import RecipeCard from './components/RecipeCard';
import RecipeDetails from './components/RecipeDetails';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import ChatInterface from './components/ChatBot';
import { BookmarkProvider } from './contexts/BookmarkContext';
import BookmarkedRecipes from './pages/BookmarkedRecipes';
import LandingPage from './pages/LandingPage';

function RecipeList({ 
  filteredRecipes, 
  filters, 
  setFilters, 
  totalSavings 
}: {
  filteredRecipes: typeof recipes;
  filters: Filters;
  setFilters: (filters: Filters) => void;
  totalSavings: number;
}) {
  return (
    <div className="flex-1 min-h-screen overflow-auto">
      <main className="max-w-4xl mx-auto px-3 py-6">
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <FilterControls
              filters={filters}
              onChange={setFilters}
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-purple-800">
              Recommended Recipes ({filteredRecipes.length})
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {filteredRecipes.map(recipe => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
            {filteredRecipes.length === 0 && (
              <div className="text-center py-8 bg-amber-100 rounded-lg">
                <p className="text-amber-800 text-sm">
                  No recipes match your filters. Try adjusting your preferences.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

function App() {
  const [initialMessage, setInitialMessage] = useState<string | null>(null);
  const [filters, setFilters] = useState<Filters>({
    dietary: {
      vegetarian: false,
      vegan: false,
      glutenFree: false,
      dairyFree: false,
    },
    timeRange: {
      min: 0,
      max: 240,
    },
    priceRange: {
      min: 0,
      max: 50,
    },
  });

  const filteredRecipes = useMemo(() => {
    return recipes.filter(recipe => {
      // Check dietary preferences
      const dietaryMatch = Object.entries(filters.dietary).every(([key, value]) => {
        if (!value) return true;
        return recipe.dietaryInfo[key as keyof typeof filters.dietary];
      });

      // Check time range
      const totalTime = recipe.prepTime + recipe.cookTime;
      const timeMatch = totalTime >= filters.timeRange.min && 
        (filters.timeRange.max === 0 || totalTime <= filters.timeRange.max);

      // Check price range
      const priceMatch = recipe.totalCost >= filters.priceRange.min &&
        (filters.priceRange.max === 0 || recipe.totalCost <= filters.priceRange.max);

      return dietaryMatch && timeMatch && priceMatch;
    });
  }, [filters]);

  const totalSavings = useMemo(() => {
    return filteredRecipes.reduce((acc, recipe) => {
      return acc + (recipe.regularCost - recipe.totalCost);
    }, 0);
  }, [filteredRecipes]);

  const handleInitialMessage = (message: string) => {
    setInitialMessage(message);
  };

  return (
    <BrowserRouter basename={import.meta.env.PROD ? '/llama-hack' : '/'}>
      <BookmarkProvider>
        <ScrollToTop />
        <Routes>
          <Route 
            path="/" 
            element={<LandingPage onSubmit={handleInitialMessage} />} 
          />
          <Route
            path="/recipes"
            element={
              initialMessage ? (
                <div className="h-screen flex flex-col">
                  <Header totalSavings={totalSavings} />
                  <div className="flex flex-1 overflow-hidden">
                    <div className="w-[400px] border-r border-gray-200 bg-white overflow-y-auto">
                      <ChatInterface initialMessage={initialMessage} />
                    </div>
                    <div className="flex-1 overflow-y-auto bg-gradient-to-b from-purple-50 to-purple-100">
                      <RecipeList
                        filteredRecipes={filteredRecipes}
                        filters={filters}
                        setFilters={setFilters}
                        totalSavings={totalSavings}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
          <Route 
            path="/recipe/:id" 
            element={
              <div className="h-screen flex flex-col">
                <Header />
                <div className="flex flex-1 overflow-hidden">
                  <div className="w-[400px] border-r border-gray-200 bg-white overflow-y-auto">
                    <ChatInterface initialMessage={initialMessage} />
                  </div>
                  <div className="flex-1 overflow-y-auto bg-gradient-to-b from-purple-50 to-purple-100">
                    <RecipeDetails recipes={recipes} />
                  </div>
                </div>
              </div>
            }
          />
          <Route 
            path="/bookmarks" 
            element={
              <div className="h-screen flex flex-col">
                <Header />
                <div className="flex flex-1 overflow-hidden">
                  <div className="w-[400px] border-r border-gray-200 bg-white overflow-y-auto">
                    <ChatInterface initialMessage={initialMessage} />
                  </div>
                  <div className="flex-1 overflow-y-auto bg-gradient-to-b from-purple-50 to-purple-100">
                    <BookmarkedRecipes />
                  </div>
                </div>
              </div>
            }
          />
        </Routes>
      </BookmarkProvider>
    </BrowserRouter>
  );
}

export default App;