import { motion, AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'

const LiquidTransition = ({ children }) => {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        className="relative"
      >
        {/* Liquid Exit Overlay */}
        <motion.div
          className="fixed inset-0 z-50 origin-center"
          initial={{ clipPath: "circle(0% at 50% 50%)" }}
          animate={{ clipPath: "circle(0% at 50% 50%)" }}
          exit={{ clipPath: "circle(150% at 50% 50%)" }}
          transition={{
            duration: 0.8,
            ease: [0.76, 0, 0.24, 1],
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-black via-gray-900 to-black" />
        </motion.div>

        {/* Page Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          {children}
        </motion.div>

        {/* Liquid Entry Animation */}
        <motion.div
          className="fixed inset-0 z-40 pointer-events-none"
          initial={{ clipPath: "circle(150% at 50% 50%)" }}
          animate={{ clipPath: "circle(0% at 50% 50%)" }}
          transition={{
            duration: 0.8,
            ease: [0.76, 0, 0.24, 1],
            delay: 0.2,
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-aquamarine via-light-green to-tea-green opacity-90" />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default LiquidTransition