import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const MultiSelectButtons = ({ 
  options = [], 
  selectedValues = [], 
  onChange, 
  className,
  label,
  error,
  required = false,
  multiple = true
}) => {
  const handleToggle = (value) => {
    if (!multiple) {
      onChange([value]);
      return;
    }

    if (selectedValues.includes(value)) {
      onChange(selectedValues.filter(v => v !== value));
    } else {
      onChange([...selectedValues, value]);
    }
  };

  return (
    <div className={cn("space-y-3", className)}>
      {label && (
        <label className="block text-sm font-medium text-text-primary">
          {label} {required && "*"}
        </label>
      )}
      
      <div className="flex flex-wrap gap-3">
        {options.map((option, index) => {
          const isSelected = selectedValues.includes(option);
          const [isHovered, setIsHovered] = useState(false);
          
          return (
            <motion.button
              key={option}
              type="button"
              onClick={() => handleToggle(option)}
              className={cn(
                "relative cursor-pointer overflow-hidden rounded-full px-6 py-3 text-sm font-medium bg-transparent text-dark_purple"
              )}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              whileHover={{ 
                scale: 1.05,
                y: -2,
                transition: { 
                  type: "spring", 
                  stiffness: 400, 
                  damping: 10,
                  mass: 0.8
                }
              }}
              whileTap={{ 
                scale: 0.95,
                y: 0,
                transition: { 
                  type: "spring", 
                  stiffness: 600, 
                  damping: 15 
                }
              }}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ 
                opacity: 1, 
                y: 0, 
                scale: 1,
                transition: { 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 20,
                  delay: index * 0.05
                }
              }}
            >
              {/* Text */}
              <motion.span 
                className="relative z-10 block"
                animate={{ 
                  y: isHovered || isSelected ? -1 : 0,
                  color: isHovered || isSelected ? "#ffffff" : "#000000"
                }}
                transition={{ 
                  duration: 0.3,
                  ease: [0.4, 0.0, 0.2, 1]
                }}
              >
                {option}
              </motion.span>

              {/* Glass blur background - always visible */}
              <div className="absolute inset-0 backdrop-blur-xl rounded-full border border-gray-200/20" 
                   style={{
                     backdropFilter: 'blur(12px) saturate(200%) contrast(150%) brightness(110%) hue-rotate(2deg)',
                     WebkitBackdropFilter: 'blur(12px) saturate(200%) contrast(150%) brightness(110%) hue-rotate(2deg)',
                     filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))',
                     background: 'rgba(255,255,255,0.05)',
                     borderColor: 'rgba(156, 163, 175, 0.25)'
                   }} />

              {/* Darker english violet slide-in overlay - shows on hover or when selected */}
              <motion.div 
                key={isHovered || isSelected ? "active" : "inactive"}
                className="absolute inset-0 rounded-full bg-english_violet-600 z-[5]"
                initial={{ y: isHovered || isSelected ? "100%" : "0%" }}
                animate={{ y: isHovered || isSelected ? "0%" : "-100%" }}
                transition={{
                  duration: 0.25,
                  ease: [0.4, 0.0, 0.2, 1]
                }}
              />
            </motion.button>
          );
        })}
      </div>
      
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export { MultiSelectButtons };