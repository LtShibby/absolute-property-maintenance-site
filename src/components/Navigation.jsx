import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import GraphPaper from './GraphPaper';

function Navigation() {
  const { theme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [openSubmenu, setOpenSubmenu] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navItems = [
    { label: 'Home', path: '/' },
    { 
      label: 'Services',
      path: '/services',
      submenu: [
        { label: 'General Maintenance', path: '/services/general-maintenance' },
        { label: 'Repairs', path: '/services/repairs' },
        { label: 'Renovations', path: '/services/renovations' },
        { label: 'Emergency Services', path: '/services/emergency' }
      ]
    },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' }
  ];

  const toggleSubmenu = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full h-[var(--navbar-height)] ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className={`text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-brand-primary' : 'text-brand-primary'
            }`}
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-primary rounded flex items-center justify-center">
                <span className="text-white text-sm">APM</span>
              </div>
              <span className="hidden sm:block">Absolute Property</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                <Link 
                  to={item.path}
                  className={`font-medium transition-colors duration-300 ${
                    isScrolled ? 'text-gray-700 hover:text-brand-primary' : 'text-brand-primary hover:text-brand-light'
                  }`}
                >
                  {item.label}
                </Link>
                {item.submenu && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    {item.submenu.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subItem.path}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-brand-primary"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Quote Button */}
            <Link 
              to="/contact"
              className={`btn ${isScrolled ? 'btn-primary' : 'bg-brand-primary text-white hover:bg-brand-light'}`}
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg ${
              isScrolled ? 'text-gray-700' : 'text-brand-primary'
            }`}
          >
            <div className="w-6 h-6 flex flex-col justify-center gap-1.5">
              <span className={`block w-full h-0.5 transition-all duration-300 ${
                isScrolled ? 'bg-gray-700' : 'bg-brand-primary'
              } ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-full h-0.5 transition-all duration-300 ${
                isScrolled ? 'bg-gray-700' : 'bg-brand-primary'
              } ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-full h-0.5 transition-all duration-300 ${
                isScrolled ? 'bg-gray-700' : 'bg-brand-primary'
              } ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 opacity-100 bg-white shadow-lg' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="py-4 space-y-4">
            {navItems.map((item, index) => (
              <div key={index} className="px-6">
                <div className="flex items-center justify-between">
                  <Link
                    to={item.path}
                    className="block py-2 text-brand-primary hover:text-brand-light"
                  >
                    {item.label}
                  </Link>
                  {item.submenu && (
                    <button
                      onClick={() => toggleSubmenu(index)}
                      className="p-2 text-brand-primary"
                    >
                      <svg
                        className={`w-4 h-4 transition-transform stroke-brand-primary ${
                          openSubmenu === index ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  )}
                </div>
                {item.submenu && openSubmenu === index && (
                  <div className="pl-4 mt-2 space-y-2 border-l-2 border-gray-200">
                    {item.submenu.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subItem.path}
                        className="block py-1 text-gray-600 hover:text-brand-primary"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="px-6">
              <Link 
                to="/contact"
                className="block w-full text-center btn bg-brand-primary text-white hover:bg-brand-light"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation; 