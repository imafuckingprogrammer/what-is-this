import { motion, AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'

const PageTransition = ({ children }) => {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="relative"
      >
        {/* Page transition overlay */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ 
            duration: 0.5, 
            ease: [0.22, 1, 0.36, 1],
            transformOrigin: "bottom"
          }}
          className="fixed inset-0 bg-black z-50"
        />
        
        {/* Content */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ 
            duration: 0.4,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default PageTransition