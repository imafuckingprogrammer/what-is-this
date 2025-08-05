import React, { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const MagneticButton = React.forwardRef(
  ({ text = "Button", className, children, magneticStrength = 0.5, magneticRadius = 120, ...props }, ref) => {
    const buttonRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isInRange, setIsInRange] = useState(false);

    const handleMouseMove = useCallback((e) => {
      if (!buttonRef.current) return;

      const rect = buttonRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Calculate distance from mouse to button center
      const distance = Math.sqrt(
        Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2)
      );

      // Only apply magnetic effect if within radius
      if (distance <= magneticRadius) {
        setIsInRange(true);

        // Calculate magnetic strength based on distance (closer = stronger)
        const distanceRatio = Math.max(0, (magneticRadius - distance) / magneticRadius);
        const dynamicStrength = magneticStrength * distanceRatio * distanceRatio * 1.5; // Stronger quadratic falloff

        const deltaX = (e.clientX - centerX) * dynamicStrength;
        const deltaY = (e.clientY - centerY) * dynamicStrength;

        setPosition({ x: deltaX, y: deltaY });
      } else {
        setIsInRange(false);
        setPosition({ x: 0, y: 0 });
      }
    }, [magneticRadius, magneticStrength]);

    const handleMouseLeave = () => {
      setPosition({ x: 0, y: 0 });
      setIsInRange(false);
    };

    // Global mouse move listener for magnetic effect
    useEffect(() => {
      document.addEventListener('mousemove', handleMouseMove);

      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
      };
    }, [handleMouseMove]);

    return (
      <motion.button
        ref={buttonRef}
        className={cn(
          "relative cursor-pointer overflow-hidden rounded-full px-6 py-3 text-sm font-medium bg-transparent text-black",
          className,
        )}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{
          x: position.x,
          y: position.y,
          opacity: 1,
          scale: isInRange ? 1.08 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: isInRange ? 300 : 200,
          damping: isInRange ? 25 : 20,
          mass: 0.08,
        }}
        whileHover={{
          scale: 1.05,
          transition: {
            type: "spring",
            stiffness: 400,
            damping: 10,
            mass: 0.8
          }
        }}
        whileTap={{
          scale: 0.95,
          transition: {
            type: "spring",
            stiffness: 600,
            damping: 15
          }
        }}
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        {...props}
      >
        {/* Text */}
        <span className="relative z-10 block text-white">
          {children || text}
        </span>

        {/* Glass blur background */}
        <div className="absolute inset-0 backdrop-blur-xl rounded-full border border-white/10"
          style={{
            backdropFilter: 'blur(12px) saturate(200%) contrast(150%) brightness(110%) hue-rotate(2deg)',
            WebkitBackdropFilter: 'blur(12px) saturate(200%) contrast(150%) brightness(110%) hue-rotate(2deg)',
            filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))',
            background: 'rgba(0,0,0,0.8)'
          }} />
      </motion.button>
    );
  }
);

MagneticButton.displayName = "MagneticButton";

export { MagneticButton };