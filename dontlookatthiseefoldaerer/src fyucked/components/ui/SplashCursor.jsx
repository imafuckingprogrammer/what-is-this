import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const SplashCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener('mousemove', updateMousePosition)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <>
      {isVisible && (
        <motion.div
          className="fixed pointer-events-none z-10"
          style={{
            left: mousePosition.x - 100,
            top: mousePosition.y - 100,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-48 h-48 rounded-full bg-gradient-to-br from-purple-200 via-blue-200 to-green-200 blur-xl"></div>
        </motion.div>
      )}
      
      {isVisible && (
        <motion.div
          className="fixed pointer-events-none z-10"
          style={{
            left: mousePosition.x - 50,
            top: mousePosition.y - 50,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 0.2, delay: 0.1 }}
        >
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-pink-300 via-purple-300 to-blue-300 blur-lg"></div>
        </motion.div>
      )}
    </>
  )
}

export default SplashCursor