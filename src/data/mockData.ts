import { Recipe } from '../types';

export const recipes: Recipe[] = [
  {
    id: '1',
    name: 'Mediterranean Quinoa Bowl',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      { name: 'Quinoa', amount: 1, unit: 'cup', currentPrice: 2.99, origin: 'Peru', supermarketPrices: { tesco: 2.99, asda: 2.75, sainsburys: 3.25, ocado: 3.50 } },
      { name: 'Cherry Tomatoes', amount: 1, unit: 'cup', currentPrice: 1.99, origin: 'Spain', supermarketPrices: { tesco: 1.99, asda: 1.75, sainsburys: 2.00, ocado: 2.25 } },
      { name: 'Cucumber', amount: 1, unit: 'medium', currentPrice: 0.79, origin: 'Netherlands', supermarketPrices: { tesco: 0.79, asda: 0.75, sainsburys: 0.85, ocado: 0.90 } },
      { name: 'Chickpeas', amount: 1, unit: 'can', currentPrice: 0.89, origin: 'Turkey', supermarketPrices: { tesco: 0.89, asda: 0.85, sainsburys: 0.95, ocado: 1.00 } },
      { name: 'Olive Oil', amount: 2, unit: 'tbsp', currentPrice: 0.50, origin: 'Greece', supermarketPrices: { tesco: 0.50, asda: 0.45, sainsburys: 0.55, ocado: 0.60 } }
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
      { name: 'Sweet Potato', amount: 1, unit: 'large', currentPrice: 1.29, origin: 'USA', supermarketPrices: { tesco: 1.29, asda: 1.79, sainsburys: 1.59, ocado: 1.89 } },
      { name: 'Kale', amount: 2, unit: 'cups', currentPrice: 1.99, origin: 'Italy', supermarketPrices: { tesco: 1.99, asda: 2.49, sainsburys: 2.29, ocado: 2.79 } },
      { name: 'Tofu', amount: 1, unit: 'block', currentPrice: 2.49, origin: 'China', supermarketPrices: { tesco: 2.49, asda: 2.99, sainsburys: 2.79, ocado: 3.29 } },
      { name: 'Brown Rice', amount: 1, unit: 'cup', currentPrice: 0.99, origin: 'Thailand', supermarketPrices: { tesco: 0.99, asda: 1.49, sainsburys: 1.29, ocado: 1.59 } },
      { name: 'Tahini', amount: 2, unit: 'tbsp', currentPrice: 0.75, origin: 'Morocco', supermarketPrices: { tesco: 0.75, asda: 1.25, sainsburys: 1.00, ocado: 1.50 } }
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
  },
  {
    id: '3',
    name: 'Thai Green Curry',
    image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      { name: 'Coconut Milk', amount: 2, unit: 'cans', currentPrice: 2.99, origin: 'Thailand', supermarketPrices: { tesco: 2.99, asda: 2.75, sainsburys: 3.25, ocado: 3.50 } },
      { name: 'Green Curry Paste', amount: 2, unit: 'tbsp', currentPrice: 1.50, origin: 'Thailand', supermarketPrices: { tesco: 1.50, asda: 1.75, sainsburys: 1.90, ocado: 2.00 } },
      { name: 'Bamboo Shoots', amount: 1, unit: 'can', currentPrice: 1.29, origin: 'China', supermarketPrices: { tesco: 1.29, asda: 1.25, sainsburys: 1.35, ocado: 1.40 } },
      { name: 'Thai Basil', amount: 1, unit: 'bunch', currentPrice: 1.99, origin: 'Vietnam', supermarketPrices: { tesco: 1.99, asda: 2.49, sainsburys: 2.29, ocado: 2.79 } },
      { name: 'Jasmine Rice', amount: 2, unit: 'cups', currentPrice: 2.49, origin: 'Thailand', supermarketPrices: { tesco: 2.49, asda: 2.99, sainsburys: 2.79, ocado: 3.29 } }
    ],
    instructions: [
      'Heat coconut milk in a large pan',
      'Stir in curry paste and simmer',
      'Add bamboo shoots and cook until tender',
      'Serve over jasmine rice with fresh Thai basil'
    ],
    prepTime: 10,
    cookTime: 25,
    dietaryInfo: {
      vegetarian: true,
      vegan: true,
      glutenFree: true,
      dairyFree: true
    },
    totalCost: 10.26,
    regularCost: 13.99
  },
  {
    id: '4',
    name: 'Classic Margherita Pizza',
    image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      { name: 'Pizza Flour', amount: 2, unit: 'cups', currentPrice: 1.99, origin: 'Italy', supermarketPrices: { tesco: 1.99, asda: 2.49, sainsburys: 2.29, ocado: 2.79 } },
      { name: 'Fresh Mozzarella', amount: 200, unit: 'g', currentPrice: 3.99, origin: 'Italy', supermarketPrices: { tesco: 3.99, asda: 4.99, sainsburys: 4.49, ocado: 5.49 } },
      { name: 'San Marzano Tomatoes', amount: 1, unit: 'can', currentPrice: 2.99, origin: 'Italy', supermarketPrices: { tesco: 2.99, asda: 3.49, sainsburys: 3.29, ocado: 3.79 } },
      { name: 'Fresh Basil', amount: 1, unit: 'bunch', currentPrice: 1.49, origin: 'Italy', supermarketPrices: { tesco: 1.49, asda: 1.99, sainsburys: 1.79, ocado: 2.29 } },
      { name: 'Olive Oil', amount: 2, unit: 'tbsp', currentPrice: 0.99, origin: 'Greece', supermarketPrices: { tesco: 0.99, asda: 1.49, sainsburys: 1.29, ocado: 1.79 } }
    ],
    instructions: [
      'Prepare pizza dough and let rise',
      'Stretch dough and add tomatoes',
      'Top with fresh mozzarella',
      'Bake at high heat and finish with basil'
    ],
    prepTime: 120,
    cookTime: 10,
    dietaryInfo: {
      vegetarian: true,
      vegan: false,
      glutenFree: false,
      dairyFree: false
    },
    totalCost: 11.45,
    regularCost: 15.99
  },
  {
    id: '5',
    name: 'Moroccan Chickpea Tagine',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      { name: 'Chickpeas', amount: 2, unit: 'cans', currentPrice: 1.98, origin: 'Morocco', supermarketPrices: { tesco: 1.98, asda: 1.75, sainsburys: 2.25, ocado: 2.50 } },
      { name: 'Couscous', amount: 2, unit: 'cups', currentPrice: 2.49, origin: 'Morocco', supermarketPrices: { tesco: 2.49, asda: 2.99, sainsburys: 2.79, ocado: 3.29 } },
      { name: 'Harissa Paste', amount: 2, unit: 'tbsp', currentPrice: 1.99, origin: 'Tunisia', supermarketPrices: { tesco: 1.99, asda: 2.49, sainsburys: 2.29, ocado: 2.79 } },
      { name: 'Dried Apricots', amount: 100, unit: 'g', currentPrice: 2.49, origin: 'Turkey', supermarketPrices: { tesco: 2.49, asda: 2.99, sainsburys: 2.79, ocado: 3.29 } },
      { name: 'Preserved Lemon', amount: 1, unit: 'piece', currentPrice: 1.99, origin: 'Morocco', supermarketPrices: { tesco: 1.99, asda: 2.49, sainsburys: 2.29, ocado: 2.79 } }
    ],
    instructions: [
      'Cook chickpeas with spices',
      'Prepare couscous according to package',
      'Add harissa and preserved lemon',
      'Garnish with dried apricots'
    ],
    prepTime: 15,
    cookTime: 35,
    dietaryInfo: {
      vegetarian: true,
      vegan: true,
      glutenFree: false,
      dairyFree: true
    },
    totalCost: 10.94,
    regularCost: 14.99
  },
  {
    id: '6',
    name: 'Japanese Ramen Bowl',
    image: 'https://images.unsplash.com/photo-1557872943-16a5ac26437e?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      { name: 'Ramen Noodles', amount: 2, unit: 'portions', currentPrice: 2.99, origin: 'Japan', supermarketPrices: { tesco: 2.99, asda: 2.75, sainsburys: 3.25, ocado: 3.50 } },
      { name: 'Miso Paste', amount: 3, unit: 'tbsp', currentPrice: 1.99, origin: 'Japan', supermarketPrices: { tesco: 1.99, asda: 2.49, sainsburys: 2.29, ocado: 2.79 } },
      { name: 'Shiitake Mushrooms', amount: 200, unit: 'g', currentPrice: 3.49, origin: 'China', supermarketPrices: { tesco: 3.49, asda: 3.99, sainsburys: 3.79, ocado: 4.29 } },
      { name: 'Nori Sheets', amount: 2, unit: 'sheets', currentPrice: 0.99, origin: 'Japan', supermarketPrices: { tesco: 0.99, asda: 1.49, sainsburys: 1.29, ocado: 1.79 } },
      { name: 'Bamboo Shoots', amount: 1, unit: 'can', currentPrice: 1.49, origin: 'China', supermarketPrices: { tesco: 1.49, asda: 1.99, sainsburys: 1.79, ocado: 2.29 } }
    ],
    instructions: [
      'Prepare miso broth',
      'Cook ramen noodles',
      'Sauté mushrooms',
      'Assemble bowl with toppings'
    ],
    prepTime: 15,
    cookTime: 20,
    dietaryInfo: {
      vegetarian: true,
      vegan: true,
      glutenFree: false,
      dairyFree: true
    },
    totalCost: 10.95,
    regularCost: 14.99
  },
  {
    id: '7',
    name: 'Mexican Street Tacos',
    image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      { name: 'Corn Tortillas', amount: 12, unit: 'pieces', currentPrice: 1.99, origin: 'Mexico', supermarketPrices: { tesco: 1.99, asda: 1.75, sainsburys: 2.25, ocado: 2.50 } },
      { name: 'Black Beans', amount: 2, unit: 'cans', currentPrice: 1.98, origin: 'Mexico', supermarketPrices: { tesco: 1.98, asda: 1.75, sainsburys: 2.25, ocado: 2.50 } },
      { name: 'Avocados', amount: 2, unit: 'pieces', currentPrice: 2.99, origin: 'Mexico', supermarketPrices: { tesco: 2.99, asda: 2.75, sainsburys: 3.25, ocado: 3.50 } },
      { name: 'Lime', amount: 2, unit: 'pieces', currentPrice: 0.99, origin: 'Mexico', supermarketPrices: { tesco: 0.99, asda: 1.49, sainsburys: 1.29, ocado: 1.79 } },
      { name: 'Cilantro', amount: 1, unit: 'bunch', currentPrice: 0.99, origin: 'Mexico', supermarketPrices: { tesco: 0.99, asda: 1.49, sainsburys: 1.29, ocado: 1.79 } }
    ],
    instructions: [
      'Warm tortillas',
      'Prepare black bean filling',
      'Slice avocados',
      'Assemble tacos with toppings'
    ],
    prepTime: 15,
    cookTime: 15,
    dietaryInfo: {
      vegetarian: true,
      vegan: true,
      glutenFree: true,
      dairyFree: true
    },
    totalCost: 8.94,
    regularCost: 12.99
  },
  {
    id: '8',
    name: 'Indian Butter Chicken',
    image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      { name: 'Chicken Thighs', amount: 500, unit: 'g', currentPrice: 4.99, origin: 'UK', supermarketPrices: { tesco: 4.99, asda: 4.75, sainsburys: 5.25, ocado: 5.50 } },
      { name: 'Garam Masala', amount: 2, unit: 'tbsp', currentPrice: 1.99, origin: 'India', supermarketPrices: { tesco: 1.99, asda: 2.49, sainsburys: 2.29, ocado: 2.79 } },
      { name: 'Basmati Rice', amount: 2, unit: 'cups', currentPrice: 2.99, origin: 'India', supermarketPrices: { tesco: 2.99, asda: 2.99, sainsburys: 2.99, ocado: 2.99 } },
      { name: 'Heavy Cream', amount: 200, unit: 'ml', currentPrice: 1.99, origin: 'UK', supermarketPrices: { tesco: 1.99, asda: 2.49, sainsburys: 2.29, ocado: 2.79 } },
      { name: 'Tomato Paste', amount: 2, unit: 'tbsp', currentPrice: 0.99, origin: 'Italy', supermarketPrices: { tesco: 0.99, asda: 1.49, sainsburys: 1.29, ocado: 1.79 } }
    ],
    instructions: [
      'Marinate chicken in spices',
      'Cook chicken until tender',
      'Prepare sauce with cream',
      'Serve with basmati rice'
    ],
    prepTime: 20,
    cookTime: 40,
    dietaryInfo: {
      vegetarian: false,
      vegan: false,
      glutenFree: true,
      dairyFree: false
    },
    totalCost: 12.95,
    regularCost: 17.99
  },
  {
    id: '9',
    name: 'Greek Salad',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      { name: 'Feta Cheese', amount: 200, unit: 'g', currentPrice: 3.99, origin: 'Greece', supermarketPrices: { tesco: 3.99, asda: 2.99, sainsburys: 3.49, ocado: 3.99 } },
      { name: 'Kalamata Olives', amount: 100, unit: 'g', currentPrice: 2.99, origin: 'Greece', supermarketPrices: { tesco: 2.99, asda: 2.49, sainsburys: 2.79, ocado: 2.99 } },
      { name: 'Cucumber', amount: 1, unit: 'large', currentPrice: 0.99, origin: 'Spain', supermarketPrices: { tesco: 0.99, asda: 0.75, sainsburys: 0.85, ocado: 0.90 } },
      { name: 'Red Onion', amount: 1, unit: 'medium', currentPrice: 0.49, origin: 'Spain', supermarketPrices: { tesco: 0.49, asda: 0.35, sainsburys: 0.45, ocado: 0.50 } },
      { name: 'Extra Virgin Olive Oil', amount: 3, unit: 'tbsp', currentPrice: 1.49, origin: 'Greece', supermarketPrices: { tesco: 1.49, asda: 1.99, sainsburys: 1.79, ocado: 2.29 } }
    ],
    instructions: [
      'Chop vegetables',
      'Cube feta cheese',
      'Combine ingredients',
      'Dress with olive oil'
    ],
    prepTime: 15,
    cookTime: 0,
    dietaryInfo: {
      vegetarian: true,
      vegan: false,
      glutenFree: true,
      dairyFree: false
    },
    totalCost: 9.95,
    regularCost: 13.99
  },
  {
    id: '10',
    name: 'Vietnamese Pho',
    image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      { name: 'Rice Noodles', amount: 400, unit: 'g', currentPrice: 2.99, origin: 'Vietnam', supermarketPrices: { tesco: 2.99, asda: 2.75, sainsburys: 3.25, ocado: 3.50 } },
      { name: 'Bean Sprouts', amount: 200, unit: 'g', currentPrice: 1.49, origin: 'Vietnam', supermarketPrices: { tesco: 1.49, asda: 1.99, sainsburys: 1.79, ocado: 2.29 } },
      { name: 'Thai Basil', amount: 1, unit: 'bunch', currentPrice: 1.99, origin: 'Thailand', supermarketPrices: { tesco: 1.99, asda: 2.49, sainsburys: 2.29, ocado: 2.79 } },
      { name: 'Star Anise', amount: 3, unit: 'pieces', currentPrice: 0.99, origin: 'Vietnam', supermarketPrices: { tesco: 0.99, asda: 1.49, sainsburys: 1.29, ocado: 1.79 } },
      { name: 'Cinnamon Stick', amount: 1, unit: 'piece', currentPrice: 0.99, origin: 'Indonesia', supermarketPrices: { tesco: 0.99, asda: 1.49, sainsburys: 1.29, ocado: 1.79 } }
    ],
    instructions: [
      'Prepare aromatic broth',
      'Cook rice noodles',
      'Arrange fresh herbs',
      'Serve hot with condiments'
    ],
    prepTime: 30,
    cookTime: 180,
    dietaryInfo: {
      vegetarian: true,
      vegan: true,
      glutenFree: true,
      dairyFree: true
    },
    totalCost: 8.45,
    regularCost: 11.99
  },
  {
    id: '11',
    name: 'Brazilian Feijoada',
    image: 'https://images.unsplash.com/photo-1550367363-ea12860cc124?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      { name: 'Black Beans', amount: 500, unit: 'g', currentPrice: 2.99, origin: 'Brazil', supermarketPrices: { tesco: 2.99, asda: 2.75, sainsburys: 3.25, ocado: 3.50 } },
      { name: 'Rice', amount: 2, unit: 'cups', currentPrice: 1.99, origin: 'Brazil', supermarketPrices: { tesco: 1.99, asda: 2.49, sainsburys: 2.29, ocado: 2.79 } },
      { name: 'Orange', amount: 2, unit: 'pieces', currentPrice: 1.49, origin: 'Brazil', supermarketPrices: { tesco: 1.49, asda: 1.99, sainsburys: 1.79, ocado: 2.29 } },
      { name: 'Collard Greens', amount: 1, unit: 'bunch', currentPrice: 1.99, origin: 'Brazil', supermarketPrices: { tesco: 1.99, asda: 2.49, sainsburys: 2.29, ocado: 2.79 } },
      { name: 'Farofa', amount: 100, unit: 'g', currentPrice: 2.49, origin: 'Brazil', supermarketPrices: { tesco: 2.49, asda: 2.99, sainsburys: 2.79, ocado: 3.29 } }
    ],
    instructions: [
      'Soak beans overnight',
      'Cook beans with seasonings',
      'Prepare rice and greens',
      'Serve with orange slices and farofa'
    ],
    prepTime: 30,
    cookTime: 180,
    dietaryInfo: {
      vegetarian: true,
      vegan: true,
      glutenFree: true,
      dairyFree: true
    },
    totalCost: 10.95,
    regularCost: 14.99
  },
  {
    id: '12',
    name: 'Ethiopian Injera with Lentils',
    image: 'https://images.unsplash.com/photo-1567982047351-76b6f93e38ee?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      { name: 'Teff Flour', amount: 2, unit: 'cups', currentPrice: 3.99, origin: 'Ethiopia', supermarketPrices: { tesco: 3.99, asda: 2.99, sainsburys: 3.49, ocado: 3.99 } },
      { name: 'Red Lentils', amount: 2, unit: 'cups', currentPrice: 2.99, origin: 'Ethiopia', supermarketPrices: { tesco: 2.99, asda: 2.99, sainsburys: 2.99, ocado: 2.99 } },
      { name: 'Berbere Spice', amount: 2, unit: 'tbsp', currentPrice: 1.99, origin: 'Ethiopia', supermarketPrices: { tesco: 1.99, asda: 2.49, sainsburys: 2.29, ocado: 2.79 } },
      { name: 'Garlic', amount: 4, unit: 'cloves', currentPrice: 0.99, origin: 'China', supermarketPrices: { tesco: 0.99, asda: 1.49, sainsburys: 1.29, ocado: 1.79 } },
      { name: 'Ginger', amount: 2, unit: 'inches', currentPrice: 0.99, origin: 'India', supermarketPrices: { tesco: 0.99, asda: 1.49, sainsburys: 1.29, ocado: 1.79 } }
    ],
    instructions: [
      'Ferment teff batter',
      'Cook lentils with spices',
      'Make injera bread',
      'Serve lentils over injera'
    ],
    prepTime: 20,
    cookTime: 40,
    dietaryInfo: {
      vegetarian: true,
      vegan: true,
      glutenFree: true,
      dairyFree: true
    },
    totalCost: 10.95,
    regularCost: 14.99
  }
];