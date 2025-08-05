import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const CustomCursor = () => {
  const cursorRef = useRef(null)
  const [isHovering, setIsHovering] = useState(false)
  const [cursorText, setCursorText] = useState('')
  const [isVisible, setIsVisible] = useState(true)
  
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)
  
  // Smooth spring animation for cursor movement
  const springConfig = { damping: 25, stiffness: 700, mass: 0.5 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const handleMouseEnter = (e) => {
      const target = e.target.closest('a, button, [role="button"], input, textarea, select, [data-cursor="pointer"]')
      
      if (target) {
        setIsHovering(true)
        
        // Check for custom cursor text
        const cursorData = target.getAttribute('data-cursor-text')
        if (cursorData) {
          setCursorText(cursorData)
        }
      }
    }

    const handleMouseLeave = (e) => {
      const target = e.target.closest('a, button, [role="button"], input, textarea, select, [data-cursor="pointer"]')
      
      if (target) {
        setIsHovering(false)
        setCursorText('')
      }
    }

    const handleMouseEnterWindow = () => setIsVisible(true)
    const handleMouseLeaveWindow = () => setIsVisible(false)

    // Add event listeners
    document.addEventListener('mousemove', moveCursor)
    document.addEventListener('mouseover', handleMouseEnter)
    document.addEventListener('mouseout', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnterWindow)
    document.addEventListener('mouseleave', handleMouseLeaveWindow)

    return () => {
      document.removeEventListener('mousemove', moveCursor)
      document.removeEventListener('mouseover', handleMouseEnter)
      document.removeEventListener('mouseout', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnterWindow)
      document.removeEventListener('mouseleave', handleMouseLeaveWindow)
    }
  }, [cursorX, cursorY])

  if (!isVisible) return null

  return (
    <motion.div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Main cursor circle */}
      <motion.div
        className="absolute bg-white rounded-full"
        style={{
          x: '-50%',
          y: '-50%',
        }}
        animate={{
          width: isHovering ? 60 : 20,
          height: isHovering ? 60 : 20,
        }}
        transition={{
          type: 'spring',
          damping: 20,
          stiffness: 300,
          mass: 0.8,
        }}
      />
      
      {/* Optional cursor text */}
      {cursorText && isHovering && (
        <motion.div
          className="absolute text-black text-xs font-medium whitespace-nowrap"
          style={{
            x: '-50%',
            y: '-50%',
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{
            type: 'spring',
            damping: 20,
            stiffness: 300,
          }}
        >
          {cursorText}
        </motion.div>
      )}
    </motion.div>
  )
}

export default CustomCursor