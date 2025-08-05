import { useState, useEffect } from 'react'

const usePerformanceOptimization = () => {
  // Initialize with optimistic defaults - fast first render
  const [deviceCapabilities, setDeviceCapabilities] = useState(() => {
    // Ultra-fast synchronous detection on first render
    try {
      const isMobile = /Mobile|Android|iPhone|iPad/i.test(navigator.userAgent) || 'ontouchstart' in window
      const isTablet = /iPad/i.test(navigator.userAgent)
      
      return {
        isLowEnd: false,
        isMobile,
        isTablet,
        reducedMotion: false,
        slowConnection: false,
        lowMemory: false,
        enableAnimations: true,
        enableCustomCursor: !isMobile, // Only disable on mobile
        enableParallax: !isMobile,
        enableComplexEffects: true
      }
    } catch {
      // Safe fallback
      return {
        isLowEnd: false,
        isMobile: false,
        isTablet: false,
        reducedMotion: false,
        slowConnection: false,
        lowMemory: false,
        enableAnimations: true,
        enableCustomCursor: true,
        enableParallax: true,
        enableComplexEffects: true
      }
    }
  })

  useEffect(() => {
    // Simplified, fast device detection - no blocking operations
    const detectDeviceCapabilities = () => {
      try {
        // Quick mobile detection
        const isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0
        const isTablet = /iPad/i.test(navigator.userAgent)
        
        // Quick motion preference check
        const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches || false
        
        // Simple capabilities based on basic detection
        const capabilities = {
          isLowEnd: isMobile, // Assume mobile = low end for simplicity
          isMobile,
          isTablet,
          reducedMotion: prefersReducedMotion,
          slowConnection: false, // Skip complex connection checks
          lowMemory: false, // Skip memory checks
          enableAnimations: !prefersReducedMotion,
          enableCustomCursor: !isMobile && !isTablet,
          enableParallax: !isMobile,
          enableComplexEffects: true // Always enable, let components handle optimization
        }

        setDeviceCapabilities(capabilities)
      } catch (error) {
        // Fallback to safe defaults if detection fails
        console.warn('Performance detection failed, using defaults:', error)
        setDeviceCapabilities({
          isLowEnd: false,
          isMobile: false,
          isTablet: false,
          reducedMotion: false,
          slowConnection: false,
          lowMemory: false,
          enableAnimations: true,
          enableCustomCursor: true,
          enableParallax: true,
          enableComplexEffects: true
        })
      }
    }

    // Run immediately without delays
    detectDeviceCapabilities()
  }, [])

  // Utility functions for conditional rendering
  const shouldRender = (feature) => {
    switch (feature) {
      case 'cursor':
        return deviceCapabilities.enableCustomCursor
      case 'animations':
        return deviceCapabilities.enableAnimations
      case 'parallax':
        return deviceCapabilities.enableParallax
      case 'complex-effects':
        return deviceCapabilities.enableComplexEffects
      default:
        return true
    }
  }

  const getOptimizedProps = (component) => {
    const baseProps = {}
    
    if (!deviceCapabilities.enableAnimations) {
      baseProps.animate = false
      baseProps.transition = { duration: 0 }
    }
    
    if (deviceCapabilities.reducedMotion) {
      baseProps.initial = false
      baseProps.animate = false
    }

    return baseProps
  }

  return {
    ...deviceCapabilities,
    shouldRender,
    getOptimizedProps
  }
}

export default usePerformanceOptimization