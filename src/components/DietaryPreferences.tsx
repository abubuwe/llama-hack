import React from 'react';
import { Check } from 'lucide-react';
import { DietaryPreferences } from '../types';

interface Props {
  preferences: DietaryPreferences;
  onChange: (preferences: DietaryPreferences) => void;
}

export default function DietaryPreferencesComponent({ preferences, onChange }: Props) {
  const togglePreference = (key: keyof DietaryPreferences) => {
    onChange({ ...preferences, [key]: !preferences[key] });
  };

  const preferences_list = [
    { key: 'vegetarian', label: 'Vegetarian' },
    { key: 'vegan', label: 'Vegan' },
    { key: 'glutenFree', label: 'Gluten Free' },
    { key: 'dairyFree', label: 'Dairy Free' },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-800">Dietary Preferences</h2>
      <div className="grid grid-cols-2 gap-4">
        {preferences_list.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => togglePreference(key as keyof DietaryPreferences)}
            className={`flex items-center justify-between p-4 rounded-lg border transition-all ${
              preferences[key as keyof DietaryPreferences]
                ? 'border-green-500 bg-green-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <span className="text-gray-700">{label}</span>
            {preferences[key as keyof DietaryPreferences] && (
              <Check className="w-5 h-5 text-green-500" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}