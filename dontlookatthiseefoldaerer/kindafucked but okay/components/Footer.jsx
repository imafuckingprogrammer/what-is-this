import { Link } from 'react-router-dom'

const Footer = () => {

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-6">TrendArt</h3>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed max-w-md">
              We craft exceptional brand experiences that drive growth and create lasting connections between companies and their customers.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-lg">Company</h4>
            <nav className="flex flex-col space-y-4">
              <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                About Us
              </Link>
              <Link to="/work" className="text-gray-300 hover:text-white transition-colors">
                Our Work
              </Link>
              <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                Services
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-lg">Services</h4>
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Brand Strategy
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Digital Marketing
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Creative Campaigns
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Web Development
              </a>
            </nav>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 TrendArt. All rights reserved.
          </p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Careers
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer