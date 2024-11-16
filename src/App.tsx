import React, { useState, useMemo } from 'react';
import { ChefHat } from 'lucide-react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { recipes } from './data/mockData';
import { DietaryPreferences } from './types';
import DietaryPreferencesComponent from './components/DietaryPreferences';
import RecipeCard from './components/RecipeCard';
import RecipeDetails from './components/RecipeDetails';

function RecipeList({ 
  filteredRecipes, 
  preferences, 
  setPreferences, 
  totalSavings 
}: {
  filteredRecipes: typeof recipes;
  preferences: DietaryPreferences;
  setPreferences: (prefs: DietaryPreferences) => void;
  totalSavings: number;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-green-100">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <ChefHat className="w-10 h-10 text-green-600" />
              <h1 className="text-3xl font-bold text-gray-900">Recipe Saver</h1>
            </div>
            <div className="text-green-600 font-semibold bg-green-100 px-4 py-2 rounded-full">
              Total Potential Savings: ${totalSavings.toFixed(2)}
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid gap-8 md:grid-cols-[300px,1fr]">
          <aside className="space-y-6 bg-white p-6 rounded-lg shadow-md">
            <DietaryPreferencesComponent
              preferences={preferences}
              onChange={setPreferences}
            />
          </aside>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-indigo-800">
              Recommended Recipes ({filteredRecipes.length})
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {filteredRecipes.map(recipe => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
            {filteredRecipes.length === 0 && (
              <div className="text-center py-12 bg-yellow-100 rounded-lg">
                <p className="text-yellow-800">
                  No recipes match your dietary preferences. Try adjusting your filters.
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
  const [preferences, setPreferences] = useState<DietaryPreferences>({
    vegetarian: false,
    vegan: false,
    glutenFree: false,
    dairyFree: false,
  });

  const filteredRecipes = useMemo(() => {
    return recipes.filter(recipe => {
      return Object.entries(preferences).every(([key, value]) => {
        if (!value) return true;
        return recipe.dietaryInfo[key as keyof DietaryPreferences];
      });
    });
  }, [preferences]);

  const totalSavings = useMemo(() => {
    return filteredRecipes.reduce((acc, recipe) => {
      return acc + (recipe.regularCost - recipe.totalCost);
    }, 0);
  }, [filteredRecipes]);

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={
            <RecipeList
              filteredRecipes={filteredRecipes}
              preferences={preferences}
              setPreferences={setPreferences}
              totalSavings={totalSavings}
            />
          } 
        />
        <Route 
          path="/recipe/:id" 
          element={<RecipeDetails recipes={recipes} />} 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;