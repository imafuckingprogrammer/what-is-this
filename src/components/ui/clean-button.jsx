import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const CleanButton = React.forwardRef(
  ({ text = "Button", className, children, ...props }, ref) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <motion.button
        ref={ref}
        className={cn(
          "relative cursor-pointer overflow-hidden rounded-full px-6 py-3 text-sm font-medium bg-transparent text-black",
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
        {/* Text changes color with hover */}
        <motion.span 
          className="relative z-10 block"
          animate={{ 
            y: isHovered ? -1 : 0,
            color: isHovered ? "#ffffff" : "#000000"
          }}
          transition={{ 
            duration: 0.3,
            ease: [0.4, 0.0, 0.2, 1]
          }}
        >
          {children || text}
        </motion.span>

        {/* Glass blur background - always visible */}
        <div className="absolute inset-0 backdrop-blur-xl rounded-full border border-white/10" 
             style={{
               backdropFilter: 'blur(12px) saturate(200%) contrast(150%) brightness(110%) hue-rotate(2deg)',
               WebkitBackdropFilter: 'blur(12px) saturate(200%) contrast(150%) brightness(110%) hue-rotate(2deg)',
               filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))',
               background: 'rgba(255,255,255,0.05)'
             }} />

        {/* Black slide-in overlay - comes from bottom on hover, exits through top */}
        <motion.div 
          key={isHovered ? "hover" : "exit"}
          className="absolute inset-0 rounded-full bg-black z-[5]"
          initial={{ y: isHovered ? "100%" : "0%" }}
          animate={{ y: isHovered ? "0%" : "-100%" }}
          transition={{
            duration: 0.25,
            ease: [0.4, 0.0, 0.2, 1]
          }}
        />
      </motion.button>
    );
  }
);

CleanButton.displayName = "CleanButton";

export { CleanButton };