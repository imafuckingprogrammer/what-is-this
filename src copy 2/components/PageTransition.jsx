import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

const PageTransition = ({ children }) => {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayChildren, setDisplayChildren] = useState(children);
  const [prevLocation, setPrevLocation] = useState(location.pathname);

  // Always scroll to top on mount/refresh
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (location.pathname !== prevLocation) {
      // Scroll to top when route changes
      window.scrollTo(0, 0);
      
      setIsTransitioning(true);

      // Switch content behind the overlay after it covers the screen
      const switchTimer = setTimeout(() => {
        setDisplayChildren(children);
        setPrevLocation(location.pathname);
        // Start exit animation after content switches
        setTimeout(() => {
          setIsTransitioning(false);
        }, 150);
      }, 600);

      return () => {
        clearTimeout(switchTimer);
      };
    }
  }, [location.pathname, children, prevLocation]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Page Content */}
      <div className="w-full h-full">
        {displayChildren}
      </div>

      {/* Fluid Edge Overlay Transition */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            className="fixed inset-0 bg-black z-50"
            initial={{ y: "-100%", borderRadius: "0px 0px 60px 60px" }}
            animate={{ y: "0%", borderRadius: "0px 0px 0px 0px" }}
            exit={{ y: "100%", borderRadius: "60px 60px 0px 0px" }}
            transition={{
              y: {
                type: "spring",
                stiffness: 400,
                damping: 30,
                mass: 0.8
              },
              borderRadius: {
                duration: 0.4,
                ease: [0.4, 0.0, 0.2, 1]
              }
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default PageTransition;