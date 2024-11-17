import { Recipe } from '../types';

export const recipes: Recipe[] = [
  {
    id: '1',
    name: 'Mediterranean Quinoa Bowl',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      { 
        name: 'Quinoa', 
        amount: 1, 
        unit: 'cup', 
        currentPrice: 2.99,
        origin: 'Peru',
        supermarketPrices: { tesco: 2.99, asda: 2.75, sainsburys: 3.25, ocado: 3.50 }
      },
      { 
        name: 'Cherry Tomatoes', 
        amount: 1, 
        unit: 'cup', 
        currentPrice: 1.99,
        origin: 'Spain',
        supermarketPrices: { tesco: 1.99, asda: 1.75, sainsburys: 2.00, ocado: 2.25 }
      },
      { 
        name: 'Cucumber', 
        amount: 1, 
        unit: 'medium', 
        currentPrice: 0.79,
        origin: 'Netherlands',
        supermarketPrices: { tesco: 0.79, asda: 0.70, sainsburys: 0.85, ocado: 0.90 }
      }
    ],
    instructions: [
      'Cook quinoa according to package instructions',
      'Chop vegetables',
      'Combine all ingredients in a bowl',
      'Drizzle with dressing'
    ],
    prepTime: 10,
    cookTime: 20,
    dietaryInfo: {
      vegetarian: true,
      vegan: true,
      glutenFree: true,
      dairyFree: true
    },
    totalCost: 5.77,
    regularCost: 7.99
  },
  {
    id: '2',
    name: 'Spicy Thai Curry',
    image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      {
        name: 'Coconut Milk',
        amount: 1,
        unit: 'can',
        currentPrice: 1.99,
        origin: 'Thailand',
        supermarketPrices: { tesco: 1.99, asda: 1.80, sainsburys: 2.10, ocado: 2.20 }
      },
      {
        name: 'Thai Curry Paste',
        amount: 2,
        unit: 'tbsp',
        currentPrice: 2.49,
        origin: 'Thailand',
        supermarketPrices: { tesco: 2.49, asda: 2.25, sainsburys: 2.60, ocado: 2.75 }
      }
    ],
    instructions: [
      'Heat coconut milk in a pan',
      'Add curry paste and simmer',
      'Add vegetables and protein of choice',
      'Serve with rice'
    ],
    prepTime: 15,
    cookTime: 25,
    dietaryInfo: {
      vegetarian: true,
      vegan: true,
      glutenFree: true,
      dairyFree: true
    },
    totalCost: 4.48,
    regularCost: 6.99
  },
  {
    id: '3',
    name: 'Classic Margherita Pizza',
    image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      {
        name: 'Pizza Dough',
        amount: 1,
        unit: 'ball',
        currentPrice: 2.49,
        origin: 'Italy',
        supermarketPrices: { tesco: 2.49, asda: 2.25, sainsburys: 2.60, ocado: 2.75 }
      },
      {
        name: 'Fresh Mozzarella',
        amount: 200,
        unit: 'g',
        currentPrice: 2.99,
        origin: 'Italy',
        supermarketPrices: { tesco: 2.99, asda: 2.75, sainsburys: 3.15, ocado: 3.25 }
      },
      {
        name: 'Fresh Basil',
        amount: 1,
        unit: 'bunch',
        currentPrice: 0.99,
        origin: 'Italy',
        supermarketPrices: { tesco: 0.99, asda: 0.89, sainsburys: 1.10, ocado: 1.25 }
      }
    ],
    instructions: [
      'Preheat oven to highest setting',
      'Roll out dough',
      'Add toppings',
      'Bake until crust is golden'
    ],
    prepTime: 20,
    cookTime: 10,
    dietaryInfo: {
      vegetarian: true,
      vegan: false,
      glutenFree: false,
      dairyFree: false
    },
    totalCost: 6.47,
    regularCost: 8.99
  },
  {
    id: '4',
    name: 'Japanese Ramen Bowl',
    image: 'https://images.unsplash.com/photo-1557872943-16a5ac26437e?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      {
        name: 'Ramen Noodles',
        amount: 200,
        unit: 'g',
        currentPrice: 2.99,
        origin: 'Japan',
        supermarketPrices: { tesco: 2.99, asda: 2.75, sainsburys: 3.15, ocado: 3.25 }
      },
      {
        name: 'Miso Paste',
        amount: 2,
        unit: 'tbsp',
        currentPrice: 1.99,
        origin: 'Japan',
        supermarketPrices: { tesco: 1.99, asda: 1.85, sainsburys: 2.10, ocado: 2.25 }
      }
    ],
    instructions: [
      'Boil noodles',
      'Prepare miso broth',
      'Combine and add toppings'
    ],
    prepTime: 10,
    cookTime: 15,
    dietaryInfo: {
      vegetarian: true,
      vegan: true,
      glutenFree: false,
      dairyFree: true
    },
    totalCost: 4.98,
    regularCost: 7.50
  },
  {
    id: '5',
    name: 'Mexican Street Tacos',
    image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      {
        name: 'Corn Tortillas',
        amount: 8,
        unit: 'pieces',
        currentPrice: 1.99,
        origin: 'Mexico',
        supermarketPrices: { tesco: 1.99, asda: 1.75, sainsburys: 2.15, ocado: 2.25 }
      },
      {
        name: 'Avocados',
        amount: 2,
        unit: 'pieces',
        currentPrice: 2.49,
        origin: 'Mexico',
        supermarketPrices: { tesco: 2.49, asda: 2.25, sainsburys: 2.65, ocado: 2.75 }
      }
    ],
    instructions: [
      'Warm tortillas',
      'Prepare toppings',
      'Assemble tacos'
    ],
    prepTime: 15,
    cookTime: 10,
    dietaryInfo: {
      vegetarian: true,
      vegan: true,
      glutenFree: true,
      dairyFree: true
    },
    totalCost: 4.48,
    regularCost: 6.99
  },
  {
    id: '6',
    name: 'Indian Butter Chicken',
    image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      {
        name: 'Chicken Thighs',
        amount: 500,
        unit: 'g',
        currentPrice: 4.99,
        origin: 'UK',
        supermarketPrices: { tesco: 4.99, asda: 4.75, sainsburys: 5.15, ocado: 5.25 }
      },
      {
        name: 'Butter',
        amount: 100,
        unit: 'g',
        currentPrice: 1.99,
        origin: 'UK',
        supermarketPrices: { tesco: 1.99, asda: 1.85, sainsburys: 2.10, ocado: 2.25 }
      }
    ],
    instructions: [
      'Marinate chicken',
      'Cook sauce',
      'Combine and simmer'
    ],
    prepTime: 20,
    cookTime: 30,
    dietaryInfo: {
      vegetarian: false,
      vegan: false,
      glutenFree: true,
      dairyFree: false
    },
    totalCost: 6.98,
    regularCost: 9.99
  },
  {
    id: '7',
    name: 'Greek Salad',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      {
        name: 'Feta Cheese',
        amount: 200,
        unit: 'g',
        currentPrice: 2.99,
        origin: 'Greece',
        supermarketPrices: { tesco: 2.99, asda: 2.75, sainsburys: 3.15, ocado: 3.25 }
      },
      {
        name: 'Kalamata Olives',
        amount: 100,
        unit: 'g',
        currentPrice: 1.99,
        origin: 'Greece',
        supermarketPrices: { tesco: 1.99, asda: 1.85, sainsburys: 2.10, ocado: 2.25 }
      }
    ],
    instructions: [
      'Chop vegetables',
      'Combine ingredients',
      'Add dressing'
    ],
    prepTime: 15,
    cookTime: 0,
    dietaryInfo: {
      vegetarian: true,
      vegan: false,
      glutenFree: true,
      dairyFree: false
    },
    totalCost: 4.98,
    regularCost: 7.50
  },
  {
    id: '8',
    name: 'Vietnamese Pho',
    image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      {
        name: 'Rice Noodles',
        amount: 200,
        unit: 'g',
        currentPrice: 2.49,
        origin: 'Vietnam',
        supermarketPrices: { tesco: 2.49, asda: 2.25, sainsburys: 2.65, ocado: 2.75 }
      },
      {
        name: 'Bean Sprouts',
        amount: 100,
        unit: 'g',
        currentPrice: 0.99,
        origin: 'UK',
        supermarketPrices: { tesco: 0.99, asda: 0.89, sainsburys: 1.10, ocado: 1.25 }
      }
    ],
    instructions: [
      'Prepare broth',
      'Cook noodles',
      'Assemble bowl'
    ],
    prepTime: 20,
    cookTime: 180,
    dietaryInfo: {
      vegetarian: true,
      vegan: true,
      glutenFree: true,
      dairyFree: true
    },
    totalCost: 3.48,
    regularCost: 5.99
  },
  {
    id: '9',
    name: 'Moroccan Tagine',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      {
        name: 'Chickpeas',
        amount: 400,
        unit: 'g',
        currentPrice: 0.99,
        origin: 'Morocco',
        supermarketPrices: { tesco: 0.99, asda: 0.89, sainsburys: 1.10, ocado: 1.25 }
      },
      {
        name: 'Couscous',
        amount: 200,
        unit: 'g',
        currentPrice: 1.49,
        origin: 'Morocco',
        supermarketPrices: { tesco: 1.49, asda: 1.35, sainsburys: 1.65, ocado: 1.75 }
      }
    ],
    instructions: [
      'Prepare tagine base',
      'Add vegetables',
      'Slow cook',
      'Serve with couscous'
    ],
    prepTime: 20,
    cookTime: 60,
    dietaryInfo: {
      vegetarian: true,
      vegan: true,
      glutenFree: false,
      dairyFree: true
    },
    totalCost: 2.48,
    regularCost: 4.99
  },
  {
    id: '10',
    name: 'Spanish Paella',
    image: 'https://images.unsplash.com/photo-1515443961218-a51367888e4b?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      {
        name: 'Arborio Rice',
        amount: 300,
        unit: 'g',
        currentPrice: 2.99,
        origin: 'Spain',
        supermarketPrices: { tesco: 2.99, asda: 2.75, sainsburys: 3.15, ocado: 3.25 }
      },
      {
        name: 'Saffron',
        amount: 1,
        unit: 'pinch',
        currentPrice: 3.99,
        origin: 'Spain',
        supermarketPrices: { tesco: 3.99, asda: 3.75, sainsburys: 4.15, ocado: 4.25 }
      }
    ],
    instructions: [
      'Toast rice',
      'Add saffron and stock',
      'Layer with vegetables',
      'Cook until rice is done'
    ],
    prepTime: 25,
    cookTime: 35,
    dietaryInfo: {
      vegetarian: true,
      vegan: true,
      glutenFree: true,
      dairyFree: true
    },
    totalCost: 6.98,
    regularCost: 9.99
  },
  {
    id: '11',
    name: 'French Ratatouille',
    image: 'https://images.unsplash.com/photo-1572453800999-e8d2d1589b7c?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      {
        name: 'Aubergine',
        amount: 2,
        unit: 'pieces',
        currentPrice: 1.99,
        origin: 'France',
        supermarketPrices: { tesco: 1.99, asda: 1.75, sainsburys: 2.15, ocado: 2.25 }
      },
      {
        name: 'Courgettes',
        amount: 3,
        unit: 'pieces',
        currentPrice: 1.49,
        origin: 'France',
        supermarketPrices: { tesco: 1.49, asda: 1.35, sainsburys: 1.65, ocado: 1.75 }
      }
    ],
    instructions: [
      'Slice vegetables',
      'Layer in dish',
      'Bake until tender'
    ],
    prepTime: 30,
    cookTime: 45,
    dietaryInfo: {
      vegetarian: true,
      vegan: true,
      glutenFree: true,
      dairyFree: true
    },
    totalCost: 3.48,
    regularCost: 5.99
  },
  {
    id: '12',
    name: 'Brazilian Feijoada',
    image: 'https://images.unsplash.com/photo-1550367363-ea12860cc124?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      {
        name: 'Black Beans',
        amount: 500,
        unit: 'g',
        currentPrice: 1.99,
        origin: 'Brazil',
        supermarketPrices: { tesco: 1.99, asda: 1.75, sainsburys: 2.15, ocado: 2.25 }
      },
      {
        name: 'Rice',
        amount: 400,
        unit: 'g',
        currentPrice: 1.49,
        origin: 'Brazil',
        supermarketPrices: { tesco: 1.49, asda: 1.35, sainsburys: 1.65, ocado: 1.75 }
      }
    ],
    instructions: [
      'Soak beans overnight',
      'Cook beans with seasonings',
      'Prepare rice',
      'Serve together'
    ],
    prepTime: 20,
    cookTime: 180,
    dietaryInfo: {
      vegetarian: true,
      vegan: true,
      glutenFree: true,
      dairyFree: true
    },
    totalCost: 3.48,
    regularCost: 5.99
  }
];