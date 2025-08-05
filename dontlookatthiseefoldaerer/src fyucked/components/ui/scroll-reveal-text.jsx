import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const ScrollRevealText = ({ 
  children, 
  className = '', 
  delay = 0, 
  duration = 0.6,
  animationType = 'fadeUp' // fadeUp, slideLeft, slideRight, scale, chars
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-10%" })

  const animations = {
    fadeUp: {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 }
    },
    slideLeft: {
      initial: { opacity: 0, x: -50 },
      animate: { opacity: 1, x: 0 }
    },
    slideRight: {
      initial: { opacity: 0, x: 50 },
      animate: { opacity: 1, x: 0 }
    },
    scale: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 }
    },
    chars: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 }
    }
  }

  if (animationType === 'chars') {
    const text = typeof children === 'string' ? children : children?.toString() || ''
    const words = text.split(' ')
    
    return (
      <motion.div ref={ref} className={className}>
        {words.map((word, wordIndex) => (
          <span key={wordIndex} className="inline-block mr-2">
            {word.split('').map((char, charIndex) => (
              <motion.span
                key={charIndex}
                className="inline-block"
                initial={animations.chars.initial}
                animate={isInView ? animations.chars.animate : animations.chars.initial}
                transition={{
                  duration: duration,
                  delay: delay + (wordIndex * 0.1) + (charIndex * 0.02),
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                {char}
              </motion.span>
            ))}
          </span>
        ))}
      </motion.div>
    )
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={animations[animationType].initial}
      animate={isInView ? animations[animationType].animate : animations[animationType].initial}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      {children}
    </motion.div>
  )
}

export default ScrollRevealText