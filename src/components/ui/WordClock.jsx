import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const WordClock = ({
    words = [],
    className = "",
    interval = 3000,
    staggerDelay = 0.1
}) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        if (words.length <= 1) return

        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % words.length)
        }, interval)

        return () => clearInterval(timer)
    }, [words.length, interval])

    if (!words.length) return null

    const currentWords = words[currentIndex].split(' ')

    return (
        <div className={`inline-flex flex-wrap ${className}`}>
            <AnimatePresence mode="wait">
                {currentWords.map((word, index) => (
                    <motion.span
                        key={`${currentIndex}-${index}`}
                        className="inline-block mr-2"
                        initial={{ y: 20, opacity: 0, rotateX: -90 }}
                        animate={{ y: 0, opacity: 1, rotateX: 0 }}
                        exit={{ y: -20, opacity: 0, rotateX: 90 }}
                        transition={{
                            duration: 0.6,
                            delay: index * staggerDelay,
                            ease: [0.25, 0.46, 0.45, 0.94]
                        }}
                    >
                        {word}
                    </motion.span>
                ))}
            </AnimatePresence>
        </div>
    )
}

export default WordClock