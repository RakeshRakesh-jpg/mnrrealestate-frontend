import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin  } from 'lucide-react';
import { Link } from 'react-router-dom';
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-premium-gray text-white">
      <div className="container-center section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div >
              <img src="https://lh3.googleusercontent.com/p/AF1QipOMrbIn3bPhaQz4wkd5M9QwsBr36qZxa5ym2lSU=w141-h118-n-k-no-nu" alt="MNR Logo" className="w-10 h-10 rounded-lg object-cover" />
              </div>
              <div>
                <span className="text-xl font-bold">MNR</span>
                <span className="text-sm text-gray-300 block -mt-1">Real Estate</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted partner in finding the perfect property. We specialize in premium real estate solutions with personalized service.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-luxury-gold transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-luxury-gold transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-luxury-gold transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://in.linkedin.com" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-luxury-gold transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>

              
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-luxury-gold">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Home
              </Link>
              <Link to="/properties" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Properties
              </Link>
              <Link to="/about" className="block text-gray-300 hover:text-white transition-colors text-sm">
                About Us
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-luxury-gold">Services</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Property Sales
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Property Rentals
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Property Management
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Investment Consulting
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-luxury-gold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-luxury-gold mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  10 Venkataraj Compound,1St Main 1St Cross Road <br />
                  South, 8th Phase, J. P. Nagar, Bengaluru, Karnataka 560078
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-luxury-gold flex-shrink-0" />
                <span className="text-gray-300 text-sm">+19 8904214339</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-luxury-gold flex-shrink-0" />
                <span className="text-gray-300 text-sm">mnrealestate.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} MNR Real Estate. All rights reserved.
            </p>
            
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer;