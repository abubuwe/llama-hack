import React, { createContext, useContext, useState, useEffect } from 'react';
import { Recipe } from '../types';

interface BookmarkContextType {
  bookmarkedRecipes: string[];
  toggleBookmark: (recipeId: string) => void;
  isBookmarked: (recipeId: string) => boolean;
}

const BookmarkContext = createContext<BookmarkContextType | undefined>(undefined);

export function BookmarkProvider({ children }: { children: React.ReactNode }) {
  const [bookmarkedRecipes, setBookmarkedRecipes] = useState<string[]>(() => {
    const saved = localStorage.getItem('bookmarkedRecipes');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('bookmarkedRecipes', JSON.stringify(bookmarkedRecipes));
  }, [bookmarkedRecipes]);

  const toggleBookmark = (recipeId: string) => {
    setBookmarkedRecipes(prev => 
      prev.includes(recipeId)
        ? prev.filter(id => id !== recipeId)
        : [...prev, recipeId]
    );
  };

  const isBookmarked = (recipeId: string) => bookmarkedRecipes.includes(recipeId);

  return (
    <BookmarkContext.Provider value={{ bookmarkedRecipes, toggleBookmark, isBookmarked }}>
      {children}
    </BookmarkContext.Provider>
  );
}

export function useBookmarks() {
  const context = useContext(BookmarkContext);
  if (context === undefined) {
    throw new Error('useBookmarks must be used within a BookmarkProvider');
  }
  return context;
} 