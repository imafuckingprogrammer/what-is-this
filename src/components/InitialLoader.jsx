import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const InitialLoader = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true)
  const [loadingProgress, setLoadingProgress] = useState(0)

  useEffect(() => {
    const loadResources = async () => {
      try {
        // Define all images that need to be preloaded
        const imagesToPreload = [
          // Hero images
          '/images/hero/hero-bg.jpg',
          '/images/hero/hero-pattern.svg',
          
          // Service page images
          '/images/casestudies/pagewiseimages/Services/brand-strategy/brands-people-0adHvNJu-Zo-unsplash.jpg',
          '/images/casestudies/pagewiseimages/Services/Web/balazs-ketyi-9VzoRKfBsMM-unsplash.jpg',
          '/images/casestudies/pagewiseimages/Services/content-production/pexels-kyleloftusstudios-18015188.jpg',
          '/images/casestudies/pagewiseimages/Services/marketing/pexels-n-voitkevich-8062287.jpg',
          '/images/casestudies/pagewiseimages/Services/consulting/pexels-mikael-blomkvist-6476779.jpg',
          '/images/casestudies/pagewiseimages/Services/B2B/pexels-kindelmedia-7688336.jpg',
          
          // Work page images
          '/images/casestudies/eblon/eblon-hero.jpg',
          '/images/casestudies/nexus/nexus-hero.jpg',
          '/images/casestudies/eblon/eblon-before-after.jpg',
          '/images/casestudies/nexus/nexus-before-after.jpg',
          
          // About page images
          '/images/about/team-photo.jpg',
          '/images/about/office-space.jpg',
          
          // Contact page images
          '/images/contact/contact-bg.jpg',
          
          // Ari page images
          '/images/ari/ari-hero.jpg',
          '/images/ari/ari-gallery-1.jpg',
          '/images/ari/ari-gallery-2.jpg',
          '/images/ari/ari-gallery-3.jpg',
        ]

        // Preload fonts first
        setLoadingProgress(10)
        await Promise.allSettled([
          document.fonts.load('400 16px "DM Sans"'),
          document.fonts.load('600 16px "DM Sans"'),
          document.fonts.load('700 16px "DM Sans"')
        ])

        setLoadingProgress(25)

        // Preload images with progress tracking
        const imagePromises = imagesToPreload.map((src, index) => {
          return new Promise((resolve, reject) => {
            const img = new Image()
            img.onload = () => {
              setLoadingProgress(25 + ((index + 1) / imagesToPreload.length) * 65)
              resolve(src)
            }
            img.onerror = () => {
              console.warn(`Failed to load image: ${src}`)
              setLoadingProgress(25 + ((index + 1) / imagesToPreload.length) * 65)
              resolve(src) // Continue even if image fails
            }
            img.src = src
          })
        })

        // Wait for all images to load or timeout
        await Promise.allSettled(imagePromises)
        setLoadingProgress(90)

        // Wait for DOM to be ready
        if (document.readyState !== 'complete') {
          await new Promise((resolve) => {
            window.addEventListener('load', resolve, { once: true })
          })
        }

        setLoadingProgress(100)

      } catch (error) {
        console.warn('Some resources failed to load:', error)
        setLoadingProgress(100)
      }

      // Hide loader after resources are loaded
      setTimeout(() => {
        setIsVisible(false)
        setTimeout(onComplete, 300)
      }, 500)
    }

    // Add a maximum timeout to prevent infinite loading
    const maxTimeout = setTimeout(() => {
      setLoadingProgress(100)
      setIsVisible(false)
      setTimeout(onComplete, 300)
    }, 8000) // Maximum 8 seconds for all images

    // Start loading
    setTimeout(loadResources, 200)

    // Cleanup timeout if component unmounts
    return () => clearTimeout(maxTimeout)
  }, [onComplete])

  if (!isVisible) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[9999] bg-bg-primary flex flex-col items-center justify-center"
      >
        {/* Loading animation */}
        <motion.div
          className="w-4 h-4 bg-text-primary rounded-full mb-8"
          animate={{
            y: [-12, 12, -12],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Progress bar */}
        <div className="w-64 h-1 bg-border-light rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-vista_blue rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${loadingProgress}%` }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </div>
        
        {/* Progress text */}
        <motion.p
          className="text-text-secondary text-sm mt-4 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Loading assets... {Math.round(loadingProgress)}%
        </motion.p>
      </motion.div>
    </AnimatePresence>
  )
}

export default InitialLoader