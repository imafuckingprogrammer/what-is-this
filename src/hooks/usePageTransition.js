import { useState, useCallback } from "react";

export const usePageTransition = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  const triggerTransition = useCallback((newPath, callback) => {
    setIsTransitioning(true);
    setCurrentPath(newPath);
    
    // Execute callback after transition completes
    if (callback) {
      setTimeout(callback, 800); // Match transition duration
    }
  }, []);

  return {
    isTransitioning,
    currentPath,
    triggerTransition,
    setIsTransitioning
  };
};