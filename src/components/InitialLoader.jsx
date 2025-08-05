import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const InitialLoader = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const loadResources = async () => {
      try {
        // Preload essential fonts only
        await Promise.allSettled([
          document.fonts.load('400 16px "DM Sans"'),
          document.fonts.load('600 16px "DM Sans"')
        ])

        // Wait for DOM to be ready
        if (document.readyState !== 'complete') {
          await new Promise((resolve) => {
            window.addEventListener('load', resolve, { once: true })
          })
        }
      } catch (error) {
        // Continue even if fonts fail to load
        console.warn('Some resources failed to load:', error)
      }

      // Hide loader after resources are loaded or timeout
      setTimeout(() => {
        setIsVisible(false)
        setTimeout(onComplete, 200)
      }, 300)
    }

    // Add a maximum timeout to prevent infinite loading
    const maxTimeout = setTimeout(() => {
      setIsVisible(false)
      setTimeout(onComplete, 200)
    }, 3000) // Maximum 3 seconds

    // Start loading
    setTimeout(loadResources, 100)

    // Cleanup timeout if component unmounts
    return () => clearTimeout(maxTimeout)
  }, [onComplete])

  if (!isVisible) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[9999] bg-bg-primary flex items-center justify-center"
        style={{ backdropFilter: 'blur(0px)' }} // Allow background to render
      >
        <motion.div
          className="w-3 h-3 bg-text-primary rounded-full"
          animate={{
            y: [-10, 10, -10],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </AnimatePresence>
  )
}

export default InitialLoader