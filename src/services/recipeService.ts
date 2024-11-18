import { Recipe } from '../types';
import { recipes } from '../data/mockData';

export async function fetchRecipes(): Promise<Recipe[]> {
  // Simulate API call with mock data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(recipes)
      // resolve(recipes.sort(() => Math.random() - 0.5));
    }, 1000);
  });
}
