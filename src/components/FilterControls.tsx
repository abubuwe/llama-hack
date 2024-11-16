import React from 'react';
import { Slider } from '@mui/material';
import { Filters } from '../types';
import DietaryPreferencesComponent from './DietaryPreferences';

interface Props {
  filters: Filters;
  onChange: (filters: Filters) => void;
}

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

  const handleDietaryChange = (dietary: typeof filters.dietary) => {
    onChange({
      ...filters,
      dietary
    });
  };

  const formatTime = (value: number) => {
    if (value >= 60) {
      const hours = Math.floor(value / 60);
      const minutes = value % 60;
      return minutes > 0 ? `${hours}h ${minutes}m` : `${hours}h`;
    }
    return `${value}m`;
  };

  const formatPrice = (value: number) => {
    return `£${value.toFixed(2)}`;
  };

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Dietary Preferences</h3>
        <DietaryPreferencesComponent
          preferences={filters.dietary}
          onChange={handleDietaryChange}
        />
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Total Time Range</h3>
        <div className="px-3 pt-1">
          <Slider
            value={[filters.timeRange.min, filters.timeRange.max]}
            onChange={handleTimeRangeChange}
            valueLabelDisplay="auto"
            valueLabelFormat={formatTime}
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
              color: '#9333ea', // purple-600
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
            valueLabelFormat={formatPrice}
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
              color: '#9333ea', // purple-600
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
    </div>
  );
} 