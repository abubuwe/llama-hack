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
  origin: string;
  supermarketPrices: SupermarketPrices;
}

export interface SupermarketPrices {
  tesco: number;
  asda: number;
  sainsburys: number;
  ocado: number;
}

export interface DietaryPreferences {
  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
}

export interface Filters {
  dietary: {
    vegetarian: boolean;
    vegan: boolean;
    glutenFree: boolean;
    dairyFree: boolean;
  };
  timeRange: {
    min: number;
    max: number;
  };
  priceRange: {
    min: number;
    max: number;
  };
  days: number;
  selectedSupermarket: string;
}