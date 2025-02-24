import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import GraphPaper from './GraphPaper';

function Footer() {
  const { theme } = useTheme();
  
  const footerLinks = {
    services: [
      { label: 'General Maintenance', path: '/services/general-maintenance' },
      { label: 'Repairs', path: '/services/repairs' },
      { label: 'Renovations', path: '/services/renovations' },
      { label: 'Emergency Services', path: '/services/emergency' }
    ],
    company: [
      { label: 'About Us', path: '/about' },
      { label: 'Contact', path: '/contact' },
    ],
    contact: {
      phone: '(555) 123-4567',
      email: 'info@absoluteproperty.com',
      address: '123 Maintenance Ave, Your City, ST 12345'
    }
  };

  return (
    <footer className={`${theme.nav} mt-auto`}>
      <GraphPaper opacity="0.03" />
      <div className="relative container mx-auto py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="text-[#004d00] font-bold text-xl block">
              Absolute Property
            </Link>
            <p className={`${theme.text} text-sm`}>
              Professional property maintenance services you can trust.
            </p>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path}
                    className={`${theme.link} text-sm`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path}
                    className={`${theme.link} text-sm`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold mb-4">Contact Us</h3>
            <div className="space-y-2 text-sm">
              <p>Phone: {footerLinks.contact.phone}</p>
              <p>Email: {footerLinks.contact.email}</p>
              <p>{footerLinks.contact.address}</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600 mb-4 md:mb-0">
              © {new Date().getFullYear()} Absolute Property Maintenance. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 