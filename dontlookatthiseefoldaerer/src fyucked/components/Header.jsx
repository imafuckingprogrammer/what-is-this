import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { CleanButton } from './ui/clean-button'

const Header = () => {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navigation = [
    { name: 'Work', href: '/work' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="container">
        <div className="flex justify-between items-center h-24">
          <Link to="/" className="text-xl font-bold text-black hover:opacity-70 transition-opacity">
            TrendArt
          </Link>

          <nav className="hidden md:flex items-center space-x-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-all duration-200 relative group ${
                  location.pathname === item.href
                    ? 'text-black'
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-px bg-black transition-all duration-200 ${
                  location.pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link to="/contact">
              <CleanButton text="Start Project" />
            </Link>
          </div>

          <button
            className="md:hidden p-2 hover:opacity-70 transition-opacity"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 h-5 relative">
              <span className={`absolute h-0.5 w-5 bg-black transform transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2' : 'translate-y-0.5'
              }`} />
              <span className={`absolute h-0.5 w-5 bg-black transform transition-all duration-300 translate-y-2 ${
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`} />
              <span className={`absolute h-0.5 w-5 bg-black transform transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 translate-y-2' : 'translate-y-3.5'
              }`} />
            </div>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-8 border-t border-gray-100">
            <nav className="flex flex-col space-y-6">
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
          </div>
        )}
      </div>
    </header>
  )
}

export default Header