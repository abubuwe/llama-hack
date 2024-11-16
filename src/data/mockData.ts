import { Recipe } from '../types';

export const recipes: Recipe[] = [
  {
    id: '1',
    name: 'Mediterranean Quinoa Bowl',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      { name: 'Quinoa', amount: 1, unit: 'cup', currentPrice: 2.99, regularPrice: 3.99 },
      { name: 'Cherry Tomatoes', amount: 1, unit: 'cup', currentPrice: 1.99, regularPrice: 2.49 },
      { name: 'Cucumber', amount: 1, unit: 'medium', currentPrice: 0.79, regularPrice: 0.99 },
      { name: 'Chickpeas', amount: 1, unit: 'can', currentPrice: 0.89, regularPrice: 1.29 },
      { name: 'Olive Oil', amount: 2, unit: 'tbsp', currentPrice: 0.50, regularPrice: 0.75 }
    ],
    instructions: [
      'Cook quinoa according to package instructions',
      'Dice vegetables and drain chickpeas',
      'Combine all ingredients in a bowl',
      'Drizzle with olive oil and season to taste'
    ],
    prepTime: 10,
    cookTime: 15,
    dietaryInfo: {
      vegetarian: true,
      vegan: true,
      glutenFree: true,
      dairyFree: true
    },
    totalCost: 7.16,
    regularCost: 9.51
  },
  {
    id: '2',
    name: 'Protein-Packed Buddha Bowl',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      { name: 'Sweet Potato', amount: 1, unit: 'large', currentPrice: 1.29, regularPrice: 1.79 },
      { name: 'Kale', amount: 2, unit: 'cups', currentPrice: 1.99, regularPrice: 2.49 },
      { name: 'Tofu', amount: 1, unit: 'block', currentPrice: 2.49, regularPrice: 2.99 },
      { name: 'Brown Rice', amount: 1, unit: 'cup', currentPrice: 0.99, regularPrice: 1.49 },
      { name: 'Tahini', amount: 2, unit: 'tbsp', currentPrice: 0.75, regularPrice: 1.25 }
    ],
    instructions: [
      'Roast sweet potato cubes',
      'Press and cube tofu, then bake',
      'Cook brown rice',
      'Massage kale with tahini',
      'Assemble all components in a bowl'
    ],
    prepTime: 15,
    cookTime: 30,
    dietaryInfo: {
      vegetarian: true,
      vegan: true,
      glutenFree: true,
      dairyFree: true
    },
    totalCost: 7.51,
    regularCost: 10.01
  }
];