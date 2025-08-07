import { useState, useEffect } from 'react'
import { SplashCursor } from '../components/ui/splash-cursor 2'

const Ari = () => {
  const [currentFontIndex, setCurrentFontIndex] = useState(0)
  const [fontsLoaded, setFontsLoaded] = useState(false)

  // Elegant Pro font variations - regular, typewriter, and 8bit styles
  const fontStyles = [
    // Elegant Pro Regular variations
    { name: 'ELEGANT WHISPER', fontFamily: 'Elegant Pro, sans-serif', fontWeight: 300, letterSpacing: '12px', textTransform: 'lowercase' },
    { name: 'ELEGANT BOLD', fontFamily: 'Elegant Pro, sans-serif', fontWeight: 900, letterSpacing: '-2px', textTransform: 'uppercase' },
    { name: 'ELEGANT CLASSIC', fontFamily: 'Elegant Pro, sans-serif', fontWeight: 400, letterSpacing: '4px', textTransform: 'capitalize' },
    { name: 'ELEGANT WIDE', fontFamily: 'Elegant Pro, sans-serif', fontWeight: 500, letterSpacing: '15px', textTransform: 'uppercase' },
    { name: 'ELEGANT MEDIUM', fontFamily: 'Elegant Pro, sans-serif', fontWeight: 600, letterSpacing: '3px', textTransform: 'capitalize' },
    { name: 'ELEGANT LIGHT', fontFamily: 'Elegant Pro, sans-serif', fontWeight: 200, letterSpacing: '8px', opacity: 0.8 },
    { name: 'ELEGANT HEAVY', fontFamily: 'Elegant Pro, sans-serif', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase' },
    { name: 'ELEGANT SPACED', fontFamily: 'Elegant Pro, sans-serif', fontWeight: 400, letterSpacing: '10px', textTransform: 'lowercase' },
    { name: 'ELEGANT POWER', fontFamily: 'Elegant Pro, sans-serif', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' },
    { name: 'ELEGANT MINIMAL', fontFamily: 'Elegant Pro, sans-serif', fontWeight: 300, letterSpacing: '16px', textTransform: 'lowercase' },
    
    // Elegant Pro Typewriter variations
    { name: 'TYPEWRITER CLASSIC', fontFamily: 'Elegant Pro Typewriter, monospace', fontWeight: 400, letterSpacing: '6px', textTransform: 'uppercase' },
    { name: 'TYPEWRITER BOLD', fontFamily: 'Elegant Pro Typewriter, monospace', fontWeight: 700, letterSpacing: '4px', textTransform: 'uppercase' },
    { name: 'TYPEWRITER LIGHT', fontFamily: 'Elegant Pro Typewriter, monospace', fontWeight: 300, letterSpacing: '8px', textTransform: 'lowercase' },
    { name: 'TYPEWRITER HEAVY', fontFamily: 'Elegant Pro Typewriter, monospace', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase' },
    { name: 'TYPEWRITER WIDE', fontFamily: 'Elegant Pro Typewriter, monospace', fontWeight: 500, letterSpacing: '12px', textTransform: 'uppercase' },
    { name: 'TYPEWRITER MEDIUM', fontFamily: 'Elegant Pro Typewriter, monospace', fontWeight: 600, letterSpacing: '5px', textTransform: 'capitalize' },
    { name: 'TYPEWRITER THIN', fontFamily: 'Elegant Pro Typewriter, monospace', fontWeight: 200, letterSpacing: '10px', textTransform: 'lowercase' },
    { name: 'TYPEWRITER DENSE', fontFamily: 'Elegant Pro Typewriter, monospace', fontWeight: 900, letterSpacing: '1px', textTransform: 'uppercase' },
    { name: 'TYPEWRITER SPACED', fontFamily: 'Elegant Pro Typewriter, monospace', fontWeight: 400, letterSpacing: '14px', textTransform: 'lowercase' },
    { name: 'TYPEWRITER STRONG', fontFamily: 'Elegant Pro Typewriter, monospace', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase' },
    
    // Elegant Pro 8bit variations
    { name: '8BIT RETRO', fontFamily: 'Elegant Pro 8bit, monospace', fontWeight: 400, letterSpacing: '8px', textTransform: 'uppercase' },
    { name: '8BIT BOLD', fontFamily: 'Elegant Pro 8bit, monospace', fontWeight: 700, letterSpacing: '6px', textTransform: 'uppercase' },
    { name: '8BIT LIGHT', fontFamily: 'Elegant Pro 8bit, monospace', fontWeight: 300, letterSpacing: '10px', textTransform: 'lowercase' },
    { name: '8BIT HEAVY', fontFamily: 'Elegant Pro 8bit, monospace', fontWeight: 800, letterSpacing: '4px', textTransform: 'uppercase' },
    { name: '8BIT WIDE', fontFamily: 'Elegant Pro 8bit, monospace', fontWeight: 500, letterSpacing: '12px', textTransform: 'uppercase' },
    { name: '8BIT MEDIUM', fontFamily: 'Elegant Pro 8bit, monospace', fontWeight: 600, letterSpacing: '7px', textTransform: 'capitalize' },
    { name: '8BIT THIN', fontFamily: 'Elegant Pro 8bit, monospace', fontWeight: 200, letterSpacing: '9px', textTransform: 'lowercase' },
    { name: '8BIT DENSE', fontFamily: 'Elegant Pro 8bit, monospace', fontWeight: 900, letterSpacing: '2px', textTransform: 'uppercase' },
    { name: '8BIT SPACED', fontFamily: 'Elegant Pro 8bit, monospace', fontWeight: 400, letterSpacing: '15px', textTransform: 'lowercase' },
    { name: '8BIT POWER', fontFamily: 'Elegant Pro 8bit, monospace', fontWeight: 700, letterSpacing: '5px', textTransform: 'uppercase' }
  ]

  // Switch fonts every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFontIndex((prevIndex) => (prevIndex + 1) % fontStyles.length)
    }, 700)

    return () => clearInterval(interval)
  }, [fontStyles.length])

  return (
    <div className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden">
      {/* Original Splash Cursor Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <SplashCursor />
      </div>

      {/* Main Content */}
      <div className="text-center px-6 relative z-10">
        <h1
          key={currentFontIndex}
          className="text-6xl md:text-8xl lg:text-9xl text-english_violet-400 leading-tight transition-all duration-500 ease-in-out"
          style={fontStyles[currentFontIndex]}
        >
          DESIGNED BY ARI
        </h1>

        {/* Font indicator - darker */}
        <p className="mt-8 text-lg text-dark_purple font-medium">
          {fontStyles[currentFontIndex].name}
        </p>

        {/* Decorative elements */}
        <div className="mt-12 flex justify-center space-x-4">
          <div className="w-3 h-3 bg-rose_pink rounded-full animate-pulse"></div>
          <div className="w-3 h-3 bg-vista_blue rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="w-3 h-3 bg-english_violet rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>
    </div>
  )
}

export default Ari