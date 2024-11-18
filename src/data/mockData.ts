import { Recipe } from '../types';

export const recipes: Recipe[] = [
  {
    id: '5',
    name: 'Baked Salmon with Quinoa and Broccoli',
    image: '/images/baked_salmon_with_quinoa_and_broccoli.webp',
    ingredients: [
      {
        name: 'Salmon Fillets',
        amount: 2,
        unit: 'pieces',
        currentPrice: 6.99,
        origin: 'UK',
        supermarketPrices: { tesco: 6.99, asda: 6.75, sainsburys: 7.15, ocado: 7.25 }
      },
      {
        name: 'Quinoa',
        amount: 1,
        unit: 'cup',
        currentPrice: 2.99,
        origin: 'Peru',
        supermarketPrices: { tesco: 2.99, asda: 2.75, sainsburys: 3.25, ocado: 3.50 }
      },
      {
        name: 'Broccoli',
        amount: 1,
        unit: 'head',
        currentPrice: 1.50,
        origin: 'UK',
        supermarketPrices: { tesco: 1.50, asda: 1.45, sainsburys: 1.60, ocado: 1.70 }
      },
      {
        name: 'Lemon',
        amount: 1,
        unit: 'piece',
        currentPrice: 0.50,
        origin: 'Spain',
        supermarketPrices: { tesco: 0.50, asda: 0.45, sainsburys: 0.55, ocado: 0.60 }
      }
    ],
    instructions: [
      'Preheat your oven to 200°C (400°F).',
      'Season salmon fillets with salt, pepper, and a squeeze of lemon juice.',
      'Place the salmon on a baking sheet lined with parchment paper.',
      'Bake for 15 minutes, or until the salmon is cooked through and flakes easily.',
      'While the salmon is baking, rinse quinoa under cold water and cook according to package instructions.',
      'Steam broccoli until tender, about 5-7 minutes.',
      'Serve the baked salmon with quinoa and steamed broccoli on the side.'
    ],
    prepTime: 10,
    cookTime: 15,
    dietaryInfo: {
      vegetarian: false,
      vegan: false,
      glutenFree: true,
      dairyFree: true
    },
    totalCost: 7.52,
    regularCost: 8.99
  },
  {
    id: '2',
    name: 'Avocado Toast',
    image: '/images/avocado_toast.webp',
    ingredients: [
      {
        name: 'Avocado',
        amount: 1,
        unit: 'piece',
        currentPrice: 1.99,
        origin: 'Mexico',
        supermarketPrices: { tesco: 1.99, asda: 1.75, sainsburys: 2.15, ocado: 2.25 }
      },
      {
        name: 'Whole Grain Bread',
        amount: 2,
        unit: 'slices',
        currentPrice: 0.99,
        origin: 'UK',
        supermarketPrices: { tesco: 0.99, asda: 0.89, sainsburys: 1.10, ocado: 1.25 }
      }
    ],
    instructions: [
      'Toast the bread slices in a toaster or on a skillet until golden brown.',
      'Cut the avocado in half, remove the pit, and scoop the flesh into a bowl.',
      'Mash the avocado with a fork until smooth, adding a pinch of salt and pepper to taste.',
      'Spread the mashed avocado evenly over the toasted bread slices.',
      'Optionally, top with a sprinkle of red pepper flakes or a drizzle of olive oil for extra flavor.'
    ],
    prepTime: 5,
    cookTime: 5,
    dietaryInfo: {
      vegetarian: true,
      vegan: true,
      glutenFree: false,
      dairyFree: true
    },
    totalCost: 4.05,
    regularCost: 4.50
  },
  {
    id: '3',
    name: 'Baked Sweet Potato with Black Beans and Salsa',
    image: '/images/baked_sweet_potato_with_black_beans_and_salsa.webp',
    ingredients: [
      {
        name: 'Sweet Potatoes',
        amount: 2,
        unit: 'pieces',
        currentPrice: 1.99,
        origin: 'USA',
        supermarketPrices: { tesco: 1.99, asda: 1.75, sainsburys: 2.15, ocado: 2.25 }
      },
      {
        name: 'Black Beans',
        amount: 1,
        unit: 'can',
        currentPrice: 0.99,
        origin: 'Brazil',
        supermarketPrices: { tesco: 0.99, asda: 0.89, sainsburys: 1.10, ocado: 1.25 }
      }
    ],
    instructions: [
      'Preheat your oven to 200°C (400°F).',
      'Wash sweet potatoes and pierce them several times with a fork.',
      'Place sweet potatoes on a baking sheet and bake for 45 minutes, or until tender.',
      'While the sweet potatoes are baking, rinse and drain black beans.',
      'Once the sweet potatoes are done, slice them open and fluff the insides with a fork.',
      'Top with black beans and your favorite salsa. Serve hot.'
    ],
    prepTime: 10,
    cookTime: 45,
    dietaryInfo: {
      vegetarian: true,
      vegan: true,
      glutenFree: true,
      dairyFree: true
    },
    totalCost: 4.05,
    regularCost: 4.50
  },
  {
    id: '10',
    name: 'Greek Yogurt Parfait',
    image: '/images/greek_yogurt_parfait.webp',
    ingredients: [
      {
        name: 'Greek Yogurt',
        amount: 1,
        unit: 'cup',
        currentPrice: 1.49,
        origin: 'Greece',
        supermarketPrices: { tesco: 1.49, asda: 1.35, sainsburys: 1.65, ocado: 1.75 }
      },
      {
        name: 'Mixed Berries',
        amount: 1,
        unit: 'cup',
        currentPrice: 2.99,
        origin: 'UK',
        supermarketPrices: { tesco: 2.99, asda: 2.75, sainsburys: 3.15, ocado: 3.25 }
      }
    ],
    instructions: [
      'In a glass, layer Greek yogurt and mixed berries.',
      'Top with a handful of granola for crunch.',
      'Repeat the layers until the glass is full.',
      'Serve chilled, optionally drizzled with honey.'
    ],
    prepTime: 5,
    cookTime: 0,
    dietaryInfo: {
      vegetarian: true,
      vegan: false,
      glutenFree: false,
      dairyFree: false
    },
    totalCost: 5.85,
    regularCost: 6.50
  },
  {
    id: '8',
    name: 'Banana Pancakes with Almond Butter and Maple Syrup',
    image: '/images/banana_pancakes_with_almond_butter_and_maple_syrup.webp',
    ingredients: [
      {
        name: 'Bananas',
        amount: 2,
        unit: 'pieces',
        currentPrice: 0.99,
        origin: 'Ecuador',
        supermarketPrices: { tesco: 0.99, asda: 0.89, sainsburys: 1.10, ocado: 1.25 }
      },
      {
        name: 'Almond Butter',
        amount: 2,
        unit: 'tbsp',
        currentPrice: 1.99,
        origin: 'USA',
        supermarketPrices: { tesco: 1.99, asda: 1.85, sainsburys: 2.10, ocado: 2.25 }
      }
    ],
    instructions: [
      'Mash the bananas in a bowl until smooth.',
      'Mix the mashed bananas with your favorite pancake batter.',
      'Heat a non-stick skillet over medium heat and pour in the batter to form pancakes.',
      'Cook until bubbles form on the surface, then flip and cook until golden brown.',
      'Serve the pancakes topped with almond butter and a drizzle of maple syrup.'
    ],
    prepTime: 10,
    cookTime: 10,
    dietaryInfo: {
      vegetarian: true,
      vegan: false,
      glutenFree: false,
      dairyFree: true
    },
    totalCost: 4.95,
    regularCost: 5.50
  },
  {
    id: '1',
    name: 'Baked Chicken Thighs with Roasted Vegetables',
    image: '/images/baked_chicken_thighs_with_roasted_vegetables.webp',
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
        name: 'Mixed Vegetables',
        amount: 300,
        unit: 'g',
        currentPrice: 2.49,
        origin: 'UK',
        supermarketPrices: { tesco: 2.49, asda: 2.25, sainsburys: 2.65, ocado: 2.75 }
      }
    ],
    instructions: [
      'Preheat your oven to 200°C (400°F).',
      'In a large bowl, toss chicken thighs with olive oil, salt, pepper, and your choice of herbs (such as rosemary or thyme).',
      'Spread the chicken thighs on a baking sheet lined with parchment paper.',
      'In the same bowl, toss mixed vegetables with olive oil, salt, and pepper.',
      'Arrange the vegetables around the chicken on the baking sheet.',
      'Roast in the oven for 30 minutes, or until the chicken is cooked through and the vegetables are tender.',
      'Serve hot, garnished with fresh herbs if desired.'
    ],
    prepTime: 10,
    cookTime: 30,
    dietaryInfo: {
      vegetarian: false,
      vegan: false,
      glutenFree: true,
      dairyFree: false
    },
    totalCost: 8.99,
    regularCost: 9.99
  },
  {
    id: '6',
    name: 'Avocado and Bacon Omelette',
    image: '/images/avocado_and_bacon_omelette.webp',
    ingredients: [
      { 
        name: 'Avocado', 
        amount: 1, 
        unit: 'piece', 
        currentPrice: 1.99,
        origin: 'Mexico',
        supermarketPrices: { tesco: 1.99, asda: 1.75, sainsburys: 2.15, ocado: 2.25 }
      },
      { 
        name: 'Bacon', 
        amount: 100, 
        unit: 'g', 
        currentPrice: 2.49,
        origin: 'UK',
        supermarketPrices: { tesco: 2.49, asda: 2.25, sainsburys: 2.65, ocado: 2.75 }
      }
    ],
    instructions: [
      'Cook bacon in a skillet over medium heat until crispy, about 5-7 minutes. Remove and drain on paper towels.',
      'In a bowl, whisk eggs with a pinch of salt and pepper until well combined.',
      'Heat a non-stick pan over medium heat and pour in the eggs. Let them cook undisturbed for a minute.',
      'Add diced avocado and cooked bacon on one half of the omelette.',
      'Once the edges start to set, gently fold the omelette in half and cook for another 2-3 minutes until fully set.',
      'Slide the omelette onto a plate and serve immediately.'
    ],
    prepTime: 10,
    cookTime: 10,
    dietaryInfo: {
      vegetarian: false,
      vegan: false,
      glutenFree: true,
      dairyFree: false
    },
    totalCost: 6.29,
    regularCost: 6.99
  },
  {
    id: '4',
    name: 'Baked Cod with Roasted Asparagus and Brown Rice',
    image: '/images/baked_cod_with_roasted_asparagus_and_brown_rice.webp',
    ingredients: [
      {
        name: 'Cod Fillets',
        amount: 2,
        unit: 'pieces',
        currentPrice: 5.99,
        origin: 'UK',
        supermarketPrices: { tesco: 5.99, asda: 5.75, sainsburys: 6.15, ocado: 6.25 }
      },
      {
        name: 'Asparagus',
        amount: 200,
        unit: 'g',
        currentPrice: 2.49,
        origin: 'UK',
        supermarketPrices: { tesco: 2.49, asda: 2.25, sainsburys: 2.65, ocado: 2.75 }
      }
    ],
    instructions: [
      'Preheat your oven to 180°C (350°F).',
      'Season the cod fillets with salt, pepper, and lemon juice.',
      'Place the cod on a baking sheet lined with parchment paper.',
      'Toss asparagus with olive oil, salt, and pepper, and arrange around the cod.',
      'Bake for 20 minutes, or until the cod is opaque and flakes easily with a fork.',
      'Meanwhile, cook brown rice according to package instructions.',
      'Serve the baked cod and asparagus over a bed of brown rice.'
    ],
    prepTime: 10,
    cookTime: 20,
    dietaryInfo: {
      vegetarian: false,
      vegan: false,
      glutenFree: true,
      dairyFree: true
    },
    totalCost: 9.89,
    regularCost: 10.99
  },
  {
    id: '7',
    name: 'Banana and Almond Milk Smoothie',
    image: '/images/banana_and_almond_milk_smoothie.webp',
    ingredients: [
      {
        name: 'Bananas',
        amount: 2,
        unit: 'pieces',
        currentPrice: 0.99,
        origin: 'Ecuador',
        supermarketPrices: { tesco: 0.99, asda: 0.89, sainsburys: 1.10, ocado: 1.25 }
      },
      {
        name: 'Almond Milk',
        amount: 1,
        unit: 'cup',
        currentPrice: 1.49,
        origin: 'USA',
        supermarketPrices: { tesco: 1.49, asda: 1.35, sainsburys: 1.65, ocado: 1.75 }
      }
    ],
    instructions: [
      'Peel the bananas and cut them into chunks.',
      'Place the banana chunks and almond milk in a blender.',
      'Blend on high speed until smooth and creamy.',
      'Pour into glasses and serve chilled. Optionally, add a sprinkle of cinnamon on top.'
    ],
    prepTime: 5,
    cookTime: 0,
    dietaryInfo: {
      vegetarian: true,
      vegan: true,
      glutenFree: true,
      dairyFree: true
    },
    totalCost: 3.59,
    regularCost: 3.99
  },
  {
    id: '9',
    name: 'Chickpea and Avocado Salad',
    image: '/images/chickpea_and_avocado_salad.webp',
    ingredients: [
      {
        name: 'Chickpeas',
        amount: 1,
        unit: 'can',
        currentPrice: 0.99,
        origin: 'Morocco',
        supermarketPrices: { tesco: 0.99, asda: 0.89, sainsburys: 1.10, ocado: 1.25 }
      },
      {
        name: 'Avocado',
        amount: 1,
        unit: 'piece',
        currentPrice: 1.99,
        origin: 'Mexico',
        supermarketPrices: { tesco: 1.99, asda: 1.75, sainsburys: 2.15, ocado: 2.25 }
      }
    ],
    instructions: [
      'Drain and rinse the chickpeas under cold water.',
      'Cut the avocado in half, remove the pit, and dice the flesh.',
      'In a large bowl, combine chickpeas, diced avocado, and your choice of salad greens.',
      'Toss with a simple dressing of olive oil, lemon juice, salt, and pepper.',
      'Serve immediately, garnished with fresh herbs if desired.'
    ],
    prepTime: 10,
    cookTime: 0,
    dietaryInfo: {
      vegetarian: true,
      vegan: true,
      glutenFree: true,
      dairyFree: true
    },
    totalCost: 4.05,
    regularCost: 4.50
  },
  {
    id: '11',
    name: 'Grilled Chicken and Quinoa Bowl',
    image: '/images/grilled_chicken_and_quinoa_bowl.webp',
    ingredients: [
      {
        name: 'Chicken Breast',
        amount: 200,
        unit: 'g',
        currentPrice: 3.99,
        origin: 'UK',
        supermarketPrices: { tesco: 3.99, asda: 3.75, sainsburys: 4.15, ocado: 4.25 }
      },
      {
        name: 'Quinoa',
        amount: 1,
        unit: 'cup',
        currentPrice: 2.99,
        origin: 'Peru',
        supermarketPrices: { tesco: 2.99, asda: 2.75, sainsburys: 3.25, ocado: 3.50 }
      }
    ],
    instructions: [
      'Season chicken breast with salt, pepper, and your choice of spices.',
      'Grill the chicken on a preheated grill or grill pan until cooked through, about 6-8 minutes per side.',
      'Let the chicken rest for a few minutes, then slice it.',
      'Cook quinoa according to package instructions.',
      'In a bowl, combine cooked quinoa, sliced chicken, and your choice of vegetables.',
      'Serve with a drizzle of olive oil or your favorite dressing.'
    ],
    prepTime: 10,
    cookTime: 20,
    dietaryInfo: {
      vegetarian: false,
      vegan: false,
      glutenFree: true,
      dairyFree: true
    },
    totalCost: 8.55,
    regularCost: 9.50
  },
  {
    id: '12',
    name: 'Grilled Chicken and Quinoa Salad',
    image: '/images/grilled_chicken_and_quinoa_salad.webp',
    ingredients: [
      {
        name: 'Chicken Breast',
        amount: 200,
        unit: 'g',
        currentPrice: 3.99,
        origin: 'UK',
        supermarketPrices: { tesco: 3.99, asda: 3.75, sainsburys: 4.15, ocado: 4.25 }
      },
      {
        name: 'Quinoa',
        amount: 1,
        unit: 'cup',
        currentPrice: 2.99,
        origin: 'Peru',
        supermarketPrices: { tesco: 2.99, asda: 2.75, sainsburys: 3.25, ocado: 3.50 }
      }
    ],
    instructions: [
      'Season chicken breast with salt, pepper, and your choice of spices.',
      'Grill the chicken on a preheated grill or grill pan until cooked through, about 6-8 minutes per side.',
      'Let the chicken rest for a few minutes, then slice it.',
      'Cook quinoa according to package instructions.',
      'Toss the cooked quinoa with salad greens, sliced chicken, and a simple vinaigrette.',
      'Serve immediately, garnished with nuts or seeds if desired.'
    ],
    prepTime: 10,
    cookTime: 20,
    dietaryInfo: {
      vegetarian: false,
      vegan: false,
      glutenFree: true,
      dairyFree: true
    },
    totalCost: 8.55,
    regularCost: 9.50
  }
];