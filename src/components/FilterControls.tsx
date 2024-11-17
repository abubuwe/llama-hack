import React from 'react';
import { Slider } from '@mui/material';
import { ShoppingCart, ShoppingBag, Store, Building2 } from 'lucide-react';
import { Filters } from '../types';

interface Props {
  filters: Filters;
  onChange: (filters: Filters) => void;
}

const SUPERMARKETS = [
  { 
    id: 'tesco', 
    name: 'Tesco',
    icon: ShoppingCart,
    color: '#ee1c2e'
  },
  { 
    id: 'asda', 
    name: 'ASDA',
    icon: ShoppingBag,
    color: '#78BE20'
  },
  { 
    id: 'sainsburys', 
    name: "Sainsbury's",
    icon: Store,
    color: '#ff8200'
  },
  { 
    id: 'ocado', 
    name: 'Ocado',
    icon: Building2,
    color: '#662d91'
  }
];

export default function FilterControls({ filters, onChange }: Props) {
  const handleTimeRangeChange = (_event: Event, newValue: number | number[]) => {
    if (Array.isArray(newValue)) {
      onChange({
        ...filters,
        timeRange: {
          min: newValue[0],
          max: newValue[1]
        }
      });
    }
  };

  const handlePriceRangeChange = (_event: Event, newValue: number | number[]) => {
    if (Array.isArray(newValue)) {
      onChange({
        ...filters,
        priceRange: {
          min: newValue[0],
          max: newValue[1]
        }
      });
    }
  };

  const handleDaysChange = (value: number) => {
    onChange({
      ...filters,
      days: Math.max(1, Math.min(30, value))
    });
  };

  const selectSupermarket = (id: string) => {
    onChange({
      ...filters,
      selectedSupermarket: id
    });
  };

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Days to Plan</h3>
        <div className="flex items-center gap-2">
          <input
            type="number"
            min="1"
            max="30"
            value={filters.days}
            onChange={(e) => handleDaysChange(parseInt(e.target.value) || 1)}
            className="w-20 px-3 py-1.5 text-sm border-2 border-purple-200 rounded-lg focus:outline-none focus:border-purple-500 bg-white"
          />
          <span className="text-sm text-gray-600">days</span>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Select Supermarket</h3>
        <div className="flex flex-col gap-2">
          {SUPERMARKETS.map(supermarket => {
            const Icon = supermarket.icon;
            return (
              <button
                key={supermarket.id}
                onClick={() => selectSupermarket(supermarket.id)}
                className={`
                  px-3 py-2 rounded-lg text-sm transition-all duration-200
                  flex items-center gap-2 w-full
                  ${filters.selectedSupermarket === supermarket.id
                    ? 'bg-white ring-2'
                    : 'bg-white/80 hover:bg-white'
                  }
                `}
                style={{
                  color: supermarket.color,
                  borderColor: filters.selectedSupermarket === supermarket.id ? supermarket.color : 'transparent'
                }}
              >
                <Icon 
                  className="w-4 h-4" 
                  style={{ 
                    stroke: filters.selectedSupermarket === supermarket.id 
                      ? supermarket.color 
                      : '#6b7280' 
                  }} 
                />
                <span className={filters.selectedSupermarket === supermarket.id 
                  ? 'font-medium'
                  : 'text-gray-500'
                }>
                  {supermarket.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Total Time Range</h3>
        <div className="px-3 pt-1">
          <Slider
            value={[filters.timeRange.min, filters.timeRange.max]}
            onChange={handleTimeRangeChange}
            valueLabelDisplay="auto"
            valueLabelFormat={(value) => `${value}m`}
            min={0}
            max={240}
            step={5}
            marks={[
              { value: 0, label: '0m' },
              { value: 60, label: '1h' },
              { value: 120, label: '2h' },
              { value: 240, label: '4h' },
            ]}
            sx={{
              color: '#9333ea',
              '& .MuiSlider-thumb': {
                backgroundColor: '#9333ea',
              },
              '& .MuiSlider-track': {
                backgroundColor: '#9333ea',
              },
              '& .MuiSlider-rail': {
                backgroundColor: '#f3e8ff',
              },
              '& .MuiSlider-mark': {
                backgroundColor: '#a855f7',
              },
              '& .MuiSlider-markLabel': {
                color: '#6b21a8',
                fontSize: '0.75rem',
              },
            }}
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Price Range</h3>
        <div className="px-3 pt-1">
          <Slider
            value={[filters.priceRange.min, filters.priceRange.max]}
            onChange={handlePriceRangeChange}
            valueLabelDisplay="auto"
            valueLabelFormat={(value) => `£${value}`}
            min={0}
            max={50}
            step={0.5}
            marks={[
              { value: 0, label: '£0' },
              { value: 15, label: '£15' },
              { value: 30, label: '£30' },
              { value: 50, label: '£50' },
            ]}
            sx={{
              color: '#9333ea',
              '& .MuiSlider-thumb': {
                backgroundColor: '#9333ea',
              },
              '& .MuiSlider-track': {
                backgroundColor: '#9333ea',
              },
              '& .MuiSlider-rail': {
                backgroundColor: '#f3e8ff',
              },
              '& .MuiSlider-mark': {
                backgroundColor: '#a855f7',
              },
              '& .MuiSlider-markLabel': {
                color: '#6b21a8',
                fontSize: '0.75rem',
              },
            }}
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Dietary Preferences</h3>
        <div className="space-y-2">
          {Object.entries(filters.dietary).map(([key, value]) => (
            <label
              key={key}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={value}
                onChange={() => {
                  onChange({
                    ...filters,
                    dietary: {
                      ...filters.dietary,
                      [key]: !value
                    }
                  });
                }}
                className="rounded border-purple-300 text-purple-600 focus:ring-purple-500"
              />
              <span className="text-gray-700">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
} 