
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart, User, Search } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="relative h-8 w-8 overflow-hidden">
            <div className="absolute inset-0 bg-nature-600 rounded-full"></div>
            <div className="absolute inset-[2px] bg-white rounded-full"></div>
            <div className="absolute inset-[4px] bg-nature-600 rounded-full opacity-80"></div>
          </div>
          <span className="font-bold text-xl tracking-tight">AgroCraft</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="nav-link font-medium">Home</Link>
          <Link to="/products" className="nav-link font-medium">Products</Link>
          <Link to="/farmers" className="nav-link font-medium">Farmers</Link>
          <Link to="/about" className="nav-link font-medium">About Us</Link>
          <Link to="/contact" className="nav-link font-medium">Contact</Link>
        </nav>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center space-x-6">
          <button className="hover:text-nature-600 transition-colors" aria-label="Search">
            <Search size={20} />
          </button>
          <Link to="/account" className="hover:text-nature-600 transition-colors" aria-label="Account">
            <User size={20} />
          </Link>
          <Link to="/cart" className="hover:text-nature-600 transition-colors relative" aria-label="Cart">
            <ShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 bg-nature-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              0
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-gray-800 hover:text-nature-600 transition-colors"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 top-16 bg-white z-40 transform transition-transform duration-300 ease-in-out md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col p-8 space-y-6">
          <Link to="/" className="font-medium text-lg" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/products" className="font-medium text-lg" onClick={() => setIsOpen(false)}>Products</Link>
          <Link to="/farmers" className="font-medium text-lg" onClick={() => setIsOpen(false)}>Farmers</Link>
          <Link to="/about" className="font-medium text-lg" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link to="/contact" className="font-medium text-lg" onClick={() => setIsOpen(false)}>Contact</Link>
          
          <div className="pt-6 border-t border-gray-100 flex justify-around">
            <button className="p-2 hover:text-nature-600 transition-colors" aria-label="Search">
              <Search size={20} />
              <span className="text-sm ml-1">Search</span>
            </button>
            <Link to="/account" className="p-2 hover:text-nature-600 transition-colors" aria-label="Account">
              <User size={20} />
              <span className="text-sm ml-1">Account</span>
            </Link>
            <Link to="/cart" className="p-2 hover:text-nature-600 transition-colors" aria-label="Cart">
              <ShoppingCart size={20} />
              <span className="text-sm ml-1">Cart (0)</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
