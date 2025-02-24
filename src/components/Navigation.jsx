import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import GraphPaper from './GraphPaper';

function Navigation() {
  const { theme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

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

  const [activeSubmenu, setActiveSubmenu] = useState(null);

  return (
    <nav className={`${theme.nav} py-4 fixed top-0 left-0 right-0 z-50`}>
      <GraphPaper opacity="0.03" />
      <div className="relative container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-[#004d00] font-bold text-xl">
            Absolute Property Maintenance
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setActiveSubmenu(index)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <Link 
                  to={item.path}
                  className={`${theme.text} hover:text-[#004d00] transition-colors`}
                >
                  {item.label}
                </Link>

                {/* Submenu */}
                {item.submenu && activeSubmenu === index && (
                  <div className="absolute top-full left-0 mt-2 py-2 bg-white rounded-lg shadow-lg min-w-[200px]">
                    {item.submenu.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subItem.path}
                        className="block px-4 py-2 hover:bg-gray-50 transition-colors"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link 
              to="/contact"
              className="btn btn-primary"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <div className="bg-white rounded-lg p-4 space-y-4">
              {navItems.map((item, index) => (
                <div key={index}>
                  {item.submenu ? (
                    <div className="space-y-2">
                      <div className="font-bold">{item.label}</div>
                      <div className="pl-4 space-y-2">
                        {item.submenu.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={subItem.path}
                            className="block text-gray-600 hover:text-[#004d00]"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className="block hover:text-[#004d00] transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation; 