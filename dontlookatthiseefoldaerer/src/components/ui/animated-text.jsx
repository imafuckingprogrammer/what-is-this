import React from "react";
import { motion } from "framer-motion";

const AnimatedText = ({ 
  children, 
  className = "", 
  delay = 0,
  duration = 0.6,
  variant = "slideUp" 
}) => {
  const variants = {
    slideUp: {
      hidden: { opacity: 0, y: 30 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { 
          duration,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      }
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: { 
          duration,
          delay,
          ease: "easeOut"
        }
      }
    },
    slideInLeft: {
      hidden: { opacity: 0, x: -50 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: { 
          duration,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      }
    },
    slideInRight: {
      hidden: { opacity: 0, x: 50 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: { 
          duration,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      }
    }
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={variants[variant]}
    >
      {children}
    </motion.div>
  );
};

export { AnimatedText };