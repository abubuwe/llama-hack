import React from 'react';

interface Ingredient {
  name: string;
  amount: number;
  unit: string;
}

interface Props {
  ingredients: Ingredient[];
  onClose: () => void;
}

function IngredientsPopup({ ingredients, onClose }: Props) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
        <h2 className="text-lg font-bold mb-4">Ingredients List</h2>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index} className="mb-2">
              {ingredient.amount} {ingredient.unit} of {ingredient.name}
            </li>
          ))}
        </ul>
        <button onClick={onClose} className="mt-4 bg-purple-600 text-white px-4 py-2 rounded">
          Close
        </button>
      </div>
    </div>
  );
}

export default IngredientsPopup; 