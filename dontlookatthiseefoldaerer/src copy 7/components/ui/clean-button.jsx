import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const CleanButton = React.forwardRef(
  ({ text = "Button", className, children, ...props }, ref) => {
    const [isHovered, setIsHovered] = useState(false);
    
    // Check if button has black background initially
    const hasBlackBackground = className?.includes('bg-black');
    const initialTextColor = hasBlackBackground ? "#ffffff" : "#000000";
    const hoverTextColor = hasBlackBackground ? "#000000" : "#ffffff";
    const fillColor = hasBlackBackground ? "bg-white" : "bg-black";

    return (
      <motion.button
        ref={ref}
        className={cn(
          "relative cursor-pointer overflow-hidden rounded-full border border-black px-6 py-3 text-sm font-medium bg-white text-black",
          className,
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
            delay: 0.1 
          }
        }}
        {...props}
      >
        {/* Text with smooth color transition */}
        <motion.span 
          className="relative z-10 block"
          animate={{ 
            color: isHovered ? hoverTextColor : initialTextColor,
            y: isHovered ? -1 : 0
          }}
          transition={{ 
            duration: 0.3,
            ease: [0.4, 0.0, 0.2, 1]
          }}
        >
          {children || text}
        </motion.span>

        {/* Background fill with stagger effect */}
        <motion.div 
          className={`absolute inset-0 ${fillColor}`}
          initial={{ scaleY: 0, originY: 0 }}
          animate={{ 
            scaleY: isHovered ? 1 : 0,
            transition: { 
              type: "spring", 
              stiffness: 300, 
              damping: 25,
              mass: 0.8
            }
          }}
        />

        {/* Subtle glow effect on hover */}
        <motion.div 
          className="absolute inset-0 bg-black/10 rounded-full blur-md"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: isHovered ? 0.3 : 0,
            scale: isHovered ? 1.2 : 0.8,
            transition: { 
              duration: 0.4,
              ease: "easeOut"
            }
          }}
        />

        {/* Border highlight */}
        <motion.div 
          className="absolute inset-0 rounded-full border-2 border-black/20"
          initial={{ opacity: 0, scale: 1 }}
          animate={{ 
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1.05 : 1,
            transition: { 
              duration: 0.3,
              ease: "easeOut"
            }
          }}
        />
      </motion.button>
    );
  }
);

CleanButton.displayName = "CleanButton";

export { CleanButton };