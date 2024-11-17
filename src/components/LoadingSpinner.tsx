import React from 'react';

export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center h-full space-y-4">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      <p className="text-purple-600 text-sm font-medium">Loading your recipes...</p>
    </div>
  );
} 