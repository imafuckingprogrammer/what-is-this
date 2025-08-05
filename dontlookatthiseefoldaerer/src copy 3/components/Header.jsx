import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CleanButton } from './ui/clean-button'

const Header = () => {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Work', href: '/work' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/" className="text-2xl font-bold text-black hover:opacity-80">
              TrendArt
            </Link>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-12">
            {navigation.map((item) => (
              <motion.div key={item.name} whileHover={{ y: -2 }}>
                <Link
                  to={item.href}
                  className={`text-sm font-medium transition-colors relative ${
                    location.pathname === item.href
                      ? 'text-black'
                      : 'text-gray-600 hover:text-black'
                  }`}
                >
                  {item.name}
                  {location.pathname === item.href && (
                    <motion.div 
                      className="absolute -bottom-8 left-0 right-0 h-0.5 bg-black"
                      layoutId="underline"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
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
              <span className={`absolute h-0.5 w-6 bg-black transform transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2.5' : 'translate-y-1'}`} />
              <span className={`absolute h-0.5 w-6 bg-black transform transition-all translate-y-2.5 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`absolute h-0.5 w-6 bg-black transform transition-all ${isMobileMenuOpen ? '-rotate-45 translate-y-2.5' : 'translate-y-4'}`} />
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