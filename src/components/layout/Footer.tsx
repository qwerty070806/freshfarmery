
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* About */}
          <div className="space-y-4 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center space-x-2">
              <div className="relative h-8 w-8 overflow-hidden">
                <div className="absolute inset-0 bg-nature-600 rounded-full"></div>
                <div className="absolute inset-[2px] bg-white rounded-full"></div>
                <div className="absolute inset-[4px] bg-nature-600 rounded-full opacity-80"></div>
              </div>
              <span className="font-bold text-xl tracking-tight">AgroCraft</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              AgroCraft connects you directly with local farmers, ensuring the freshest organic produce delivered to your doorstep with transparency and quality.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-500 hover:text-nature-600 transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-500 hover:text-nature-600 transition-colors" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-500 hover:text-nature-600 transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-gray-500 hover:text-nature-600 transition-colors" aria-label="YouTube">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="font-semibold text-base">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-600 hover:text-nature-600 transition-colors text-sm">Home</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-600 hover:text-nature-600 transition-colors text-sm">All Products</Link>
              </li>
              <li>
                <Link to="/farmers" className="text-gray-600 hover:text-nature-600 transition-colors text-sm">Our Farmers</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-nature-600 transition-colors text-sm">About Us</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-nature-600 transition-colors text-sm">Blog & News</Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <h3 className="font-semibold text-base">Categories</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/products/vegetables" className="text-gray-600 hover:text-nature-600 transition-colors text-sm">Vegetables</Link>
              </li>
              <li>
                <Link to="/products/fruits" className="text-gray-600 hover:text-nature-600 transition-colors text-sm">Fruits</Link>
              </li>
              <li>
                <Link to="/products/dairy" className="text-gray-600 hover:text-nature-600 transition-colors text-sm">Dairy Products</Link>
              </li>
              <li>
                <Link to="/products/grains" className="text-gray-600 hover:text-nature-600 transition-colors text-sm">Grains & Cereals</Link>
              </li>
              <li>
                <Link to="/products/organic" className="text-gray-600 hover:text-nature-600 transition-colors text-sm">Organic Products</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="font-semibold text-base">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-nature-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600 text-sm">123 Fresh Farm Road, Organic Valley, CA 94103</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-nature-600 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-gray-600 hover:text-nature-600 transition-colors text-sm">+1 (234) 567-890</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-nature-600 flex-shrink-0" />
                <a href="mailto:info@agrocraft.com" className="text-gray-600 hover:text-nature-600 transition-colors text-sm">info@agrocraft.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} AgroCraft. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <Link to="/privacy" className="hover:text-nature-600 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-nature-600 transition-colors">Terms of Service</Link>
            <Link to="/faq" className="hover:text-nature-600 transition-colors">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
