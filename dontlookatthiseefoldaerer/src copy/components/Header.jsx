import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

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
          <Link to="/" className="text-2xl font-bold text-black hover:opacity-80">
            TrendArt
          </Link>

          <nav className="hidden md:flex items-center space-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors relative ${
                  location.pathname === item.href
                    ? 'text-black'
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                {item.name}
                {location.pathname === item.href && (
                  <div className="absolute -bottom-8 left-0 right-0 h-0.5 bg-black" />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-black text-white px-6 py-3 text-sm font-medium hover:opacity-90 hover:scale-105"
            >
              Start Project
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

        {isMobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
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
              ))}
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-black text-white px-6 py-3 text-sm font-medium hover:opacity-90 text-center mt-4"
              >
                Start Project
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header