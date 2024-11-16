export interface Recipe {
  id: string;
  name: string;
  image: string;
  ingredients: Ingredient[];
  instructions: string[];
  prepTime: number;
  cookTime: number;
  dietaryInfo: {
    vegetarian: boolean;
    vegan: boolean;
    glutenFree: boolean;
    dairyFree: boolean;
  };
  totalCost: number;
  regularCost: number;
}

export interface Ingredient {
  name: string;
  amount: number;
  unit: string;
  currentPrice: number;
  regularPrice: number;
}

export interface DietaryPreferences {
  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
}