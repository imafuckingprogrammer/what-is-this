import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CleanButton } from './ui/clean-button'

const Header = () => {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [navTheme, setNavTheme] = useState('light') // 'light', 'dark', 'accent'

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Work', href: '/work' },
    { name: 'Contact', href: '/contact' },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionBg = entry.target.getAttribute('data-nav-theme')
            if (sectionBg) {
              setNavTheme(sectionBg)
            }
          }
        })
      },
      { 
        threshold: 0.3,
        rootMargin: '-80px 0px 0px 0px' // Account for navbar height
      }
    )

    // Observe all sections with data-nav-theme attribute
    const sections = document.querySelectorAll('[data-nav-theme]')
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [location.pathname])

  // Dynamic color schemes based on background
  const getNavColors = () => {
    switch (navTheme) {
      case 'dark':
        return {
          logo: '#ffffff',
          navActive: '#ffffff',
          navInactive: '#cbd5e1',
          navHover: '#ffffff',
          hamburger: '#ffffff'
        }
      case 'accent':
        return {
          logo: '#3b82f6',
          navActive: '#3b82f6',
          navInactive: '#64748b',
          navHover: '#3b82f6',
          hamburger: '#3b82f6'
        }
      default: // light
        return {
          logo: '#0f172a',
          navActive: '#0f172a',
          navInactive: '#64748b',
          navHover: '#0f172a',
          hamburger: '#0f172a'
        }
    }
  }

  const colors = getNavColors()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link 
              to="/" 
              className="text-2xl font-bold hover:opacity-80 transition-colors duration-300"
              style={{ color: colors.logo }}
            >
              TrendArt
            </Link>
          </motion.div>

          <nav className="hidden md:flex items-center relative">
            {/* Glass pill container for all nav buttons - same thickness as CleanButton */}
            <div className="absolute inset-0 backdrop-blur-xl rounded-full px-6 py-3 border border-white/10" 
                 style={{
                   backdropFilter: 'blur(12px) saturate(200%) contrast(150%) brightness(110%) hue-rotate(2deg)',
                   WebkitBackdropFilter: 'blur(12px) saturate(200%) contrast(150%) brightness(110%) hue-rotate(2deg)',
                   filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))',
                   background: 'rgba(255,255,255,0.05)'
                 }}>
            </div>
            
            {/* Navigation buttons inside the glass pill */}
            <div className="flex items-center space-x-8 px-6 py-3 relative z-10">
              {navigation.map((item) => (
                <motion.div 
                  key={item.name}
                  className="relative"
                  whileHover={{ 
                    scale: 1.05,
                    y: -1,
                    transition: { 
                      type: "spring", 
                      stiffness: 400, 
                      damping: 25,
                      mass: 0.5
                    }
                  }}
                  whileTap={{ 
                    scale: 0.98,
                    transition: { 
                      type: "spring", 
                      stiffness: 600, 
                      damping: 30 
                    }
                  }}
                >
                  <motion.div
                    className="relative"
                    animate={{
                      color: location.pathname === item.href ? colors.navActive : colors.navInactive
                    }}
                    whileHover={{
                      color: colors.navHover,
                      transition: { 
                        type: "spring", 
                        stiffness: 300, 
                        damping: 20,
                        mass: 0.4
                      }
                    }}
                  >
                    <Link
                      to={item.href}
                      className="relative text-sm font-medium transition-colors duration-300"
                      style={{ color: "inherit" }}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </nav>

          <div className="hidden md:block">
            <Link to="/contact">
              <CleanButton text="Start" />
            </Link>
          </div>

          <button
            className="md:hidden p-2 hover:opacity-80"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-6 relative">
              <span 
                className={`absolute h-0.5 w-6 transform transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2.5' : 'translate-y-1'}`}
                style={{ backgroundColor: colors.hamburger }}
              />
              <span 
                className={`absolute h-0.5 w-6 transform transition-all translate-y-2.5 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}
                style={{ backgroundColor: colors.hamburger }}
              />
              <span 
                className={`absolute h-0.5 w-6 transform transition-all ${isMobileMenuOpen ? '-rotate-45 translate-y-2.5' : 'translate-y-4'}`}
                style={{ backgroundColor: colors.hamburger }}
              />
            </div>
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              className="md:hidden py-6 border-t border-gray-100"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <nav className="flex flex-col space-y-4">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-lg font-medium transition-colors ${
                        location.pathname === item.href
                          ? 'text-black'
                          : 'text-gray-600 hover:text-black'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navigation.length * 0.1 }}
                >
                  <Link
                    to="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="mt-4 block"
                  >
                    <CleanButton text="Start" className="w-full text-center" />
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

export default Header