import { useState, useEffect } from 'react'

const usePerformanceOptimization = () => {
  const [deviceCapabilities, setDeviceCapabilities] = useState({
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

  useEffect(() => {
    const detectDeviceCapabilities = () => {
      // Check if user prefers reduced motion
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

      // Check device type
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      const isTablet = /iPad|Android(?=.*Mobile)/i.test(navigator.userAgent) || 
                      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)

      // Check connection speed
      const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection
      const slowConnection = connection && (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g')

      // Check memory (if available)
      const lowMemory = navigator.deviceMemory && navigator.deviceMemory < 4

      // Check hardware concurrency (CPU cores)
      const lowCPU = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4

      // Performance score calculation
      let performanceScore = 100
      
      if (isMobile) performanceScore -= 20
      if (isTablet) performanceScore -= 10
      if (slowConnection) performanceScore -= 30
      if (lowMemory) performanceScore -= 25
      if (lowCPU) performanceScore -= 15
      if (prefersReducedMotion) performanceScore -= 20

      const isLowEnd = performanceScore < 50

      // Feature flags based on device capabilities
      const capabilities = {
        isLowEnd,
        isMobile,
        isTablet,
        reducedMotion: prefersReducedMotion,
        slowConnection: !!slowConnection,
        lowMemory: !!lowMemory,
        enableAnimations: !prefersReducedMotion && performanceScore > 30,
        enableCustomCursor: !isMobile && !isTablet && performanceScore > 40,
        enableParallax: !isMobile && performanceScore > 60,
        enableComplexEffects: performanceScore > 70
      }

      setDeviceCapabilities(capabilities)

      // Log performance info in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Device Performance Analysis:', {
          score: performanceScore,
          ...capabilities,
          connection: connection?.effectiveType,
          memory: navigator.deviceMemory,
          cores: navigator.hardwareConcurrency
        })
      }
    }

    detectDeviceCapabilities()

    // Listen for connection changes
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection
    if (connection) {
      connection.addEventListener('change', detectDeviceCapabilities)
      return () => connection.removeEventListener('change', detectDeviceCapabilities)
    }
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