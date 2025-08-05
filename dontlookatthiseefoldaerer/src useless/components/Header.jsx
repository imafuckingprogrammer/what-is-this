import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Header = () => {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Work', href: '/work' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-subtle' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto container-padding">
        <div className="flex justify-between items-center h-24">
          <Link 
            to="/" 
            className="text-2xl font-semibold tracking-tight text-neutral-900 hover:text-neutral-700 transition-colors"
          >
            TrendArt
          </Link>

          <nav className="hidden md:flex items-center space-x-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium tracking-wide transition-all duration-300 relative group ${
                  location.pathname === item.href
                    ? 'text-neutral-900'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-px bg-neutral-900 transition-all duration-300 group-hover:w-full ${
                  location.pathname === item.href ? 'w-full' : ''
                }`} />
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              to="/contact"
              className="btn-primary rounded-none"
            >
              Start Project
            </Link>
          </div>

          <button
            className="md:hidden p-3 -mr-3 hover:bg-neutral-50 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 h-5 relative">
              <span className={`absolute h-px w-5 bg-neutral-900 transform transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2' : 'translate-y-1'
              }`} />
              <span className={`absolute h-px w-5 bg-neutral-900 transform transition-all duration-300 translate-y-2 ${
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`} />
              <span className={`absolute h-px w-5 bg-neutral-900 transform transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 translate-y-2' : 'translate-y-3'
              }`} />
            </div>
          </button>
        </div>

        <div className={`md:hidden overflow-hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-8 border-t border-neutral-200">
            <nav className="flex flex-col space-y-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg font-medium tracking-wide transition-colors ${
                    location.pathname === item.href
                      ? 'text-neutral-900'
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn-primary rounded-none w-full justify-center"
                >
                  Start Project
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header