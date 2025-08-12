// src/components/Navbar.jsx

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home, Building, Phone, Info } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Properties', href: '/properties', icon: Building },
    { name: 'About', href: '/about', icon: Info },
    { name: 'Contact', href: '/contact', icon: Phone },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container- left">
        <div className="flex justify-between items-center h-30">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="https://lh3.googleusercontent.com/p/AF1QipOMrbIn3bPhaQz4wkd5M9QwsBr36qZxa5ym2lSU=w141-h118-n-k-no-nu"
              alt="MNR Logo"
              className="w-20 h-20 rounded-lg object-cover"
            />
            <div>
              <span className="text-2xl font-bold text-premium-gray">MNR</span>
              <span className="text-base text-muted-foreground block -mt-1">
                Real Estate
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10 ml-auto text-lg">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors duration-200 font-semibold"
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            ))}
            <Button variant="default" className="btn-hero text-lg px-6 py-2">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border">
            <div className="py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="flex items-center space-x-3 px-4 py-3 text-foreground hover:bg-muted rounded-lg transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              ))}
              <div className="px-4 pt-2">
                <Button variant="default" className="w-full btn-hero">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
