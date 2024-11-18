import React, { useState, useMemo, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Filters, Recipe } from './types';
import FilterControls from './components/FilterControls';
import RecipeCard from './components/RecipeCard';
import RecipeDetails from './components/RecipeDetails';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import { BookmarkProvider } from './contexts/BookmarkContext';
import BookmarkedRecipes from './pages/BookmarkedRecipes';
import LandingPage from './pages/LandingPage';
import { fetchRecipes } from './services/recipeService';
import LoadingSpinner from './components/LoadingSpinner';
import SidebarPrompts from './components/SidebarPrompts';
import { BasketProvider } from './contexts/BasketContext';

interface InitialConfig {
  message: string;
  days: number;
  selectedSupermarket: string;
}

function RecipeList({ 
  filteredRecipes,
  filters,
  isLoading
}: {
  filteredRecipes: Recipe[];
  filters: Filters;
  isLoading: boolean;
}) {
  if (isLoading) {
    return (
      <div className="flex-1 min-h-screen overflow-auto">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="flex-1 min-h-screen overflow-auto">
      <main className="max-w-4xl mx-auto px-3 py-6">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-purple-800">
            Recommended Recipes ({filteredRecipes.length})
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {filteredRecipes.map(recipe => (
              <RecipeCard 
                key={recipe.id} 
                recipe={recipe} 
                selectedSupermarket={filters.selectedSupermarket}
              />
            ))}
          </div>
          {filteredRecipes.length === 0 && !isLoading && (
            <div className="text-center py-8 bg-amber-100 rounded-lg">
              <p className="text-amber-800 text-sm">
                No recipes match your filters. Try adjusting your preferences.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

function App() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [initialConfig, setInitialConfig] = useState<InitialConfig | null>(null);
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
    days: 4,
    selectedSupermarket: 'tesco',
  });

  useEffect(() => {
    const loadRecipes = async () => {
      if (!initialConfig) return;
      
      setIsLoading(true);
      try {
        const data = await fetchRecipes(initialConfig.days);
        setRecipes(data);
        setError(null);
      } catch (error: unknown) {
        console.error('Failed to load recipes:', error);
        setError('Failed to load recipes. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    loadRecipes();
  }, [initialConfig?.days]);

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
  }, [recipes, filters]);

  const totalCost = useMemo(() => {
    return filteredRecipes.reduce((acc, recipe) => {
      const supermarketPrice = recipe.ingredients.reduce((sum, ingredient) => 
        sum + ingredient.supermarketPrices[filters.selectedSupermarket as keyof typeof ingredient.supermarketPrices]
      , 0);
      return acc + supermarketPrice;
    }, 0);
  }, [filteredRecipes, filters.selectedSupermarket]);

  const totalSavings = useMemo(() => {
    return filteredRecipes.reduce((acc, recipe) => {
      return acc + (recipe.regularCost - recipe.totalCost);
    }, 0);
  }, [filteredRecipes]);

  const handleInitialMessage = (message: string, days: number, selectedSupermarket: string) => {
    setInitialConfig({ message, days, selectedSupermarket });
    setFilters(prev => ({
      ...prev,
      days,
      selectedSupermarket
    }));
  };

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-purple-50 p-4">
        <div className="bg-red-50 text-red-600 p-4 rounded-lg shadow-sm max-w-md text-center">
          <p className="font-medium mb-2">Oops! Something went wrong</p>
          <p className="text-sm">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 px-4 py-2 bg-red-100 hover:bg-red-200 rounded-lg text-sm transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <BrowserRouter basename={import.meta.env.PROD ? '/llama-hack' : '/'}>
      <BookmarkProvider>
        <BasketProvider>
          <ScrollToTop />
          <Routes>
            <Route 
              path="/" 
              element={<LandingPage onSubmit={handleInitialMessage} />} 
            />
            <Route
              path="/recipes"
              element={
                initialConfig ? (
                  <div className="h-screen flex flex-col">
                    <Header 
                      totalCost={totalCost}
                      totalSavings={totalSavings}
                      recipeCount={filteredRecipes.length}
                    />
                    <div className="flex flex-1 overflow-hidden">
                      <div className="w-[400px] border-r border-gray-200 bg-white overflow-y-auto p-4">
                        <SidebarPrompts onSubmit={handleInitialMessage} />
                      </div>
                      <div className="flex-1 overflow-y-auto bg-gradient-to-b from-purple-50 to-purple-100">
                        <RecipeList
                          filteredRecipes={filteredRecipes}
                          filters={filters}
                          isLoading={isLoading}
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
                    <div className="w-[400px] border-r border-gray-200 bg-white overflow-y-auto p-4">
                      <SidebarPrompts onSubmit={handleInitialMessage} />
                    </div>
                    <div className="flex-1 overflow-y-auto bg-gradient-to-b from-purple-50 to-purple-100">
                      <RecipeDetails 
                        recipes={recipes} 
                        filters={filters}
                      />
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
                    <div className="w-[400px] border-r border-gray-200 bg-white overflow-y-auto p-4">
                      <SidebarPrompts onSubmit={handleInitialMessage} />
                    </div>
                    <div className="flex-1 overflow-y-auto bg-gradient-to-b from-purple-50 to-purple-100">
                      <BookmarkedRecipes filters={filters} />
                    </div>
                  </div>
                </div>
              }
            />
          </Routes>
        </BasketProvider>
      </BookmarkProvider>
    </BrowserRouter>
  );
}

export default App;