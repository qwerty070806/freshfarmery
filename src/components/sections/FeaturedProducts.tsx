
import React from 'react';
import ProductCard from '../ui/ProductCard';
import { ArrowRight } from 'lucide-react';

// Sample product data
const featuredProducts = [
  {
    id: '1',
    name: 'Fresh Organic Strawberries',
    price: 5.99,
    discountPrice: 4.49,
    image: 'https://images.unsplash.com/photo-1587393855524-087f83d95bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: 'Fruits',
    isOrganic: true,
    isFeatured: true,
  },
  {
    id: '2',
    name: 'Green Lettuce Pack',
    price: 3.99,
    image: 'https://images.unsplash.com/photo-1622205313162-be1d5712a43f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: 'Vegetables',
    isOrganic: true,
    isFeatured: true,
  },
  {
    id: '3',
    name: 'Ripe Avocado Set',
    price: 7.99,
    discountPrice: 6.49,
    image: 'https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: 'Fruits',
    isOrganic: true,
    isFeatured: true,
  },
  {
    id: '4',
    name: 'Fresh Tomatoes',
    price: 4.49,
    image: 'https://images.unsplash.com/photo-1607305387299-a3d9611cd469?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: 'Vegetables',
    isOrganic: true,
    isFeatured: true,
  },
];

export default function FeaturedProducts() {
  return (
    <section id="featured-products" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
          <p className="text-gray-600">
            Discover our handpicked selection of the season's best organic produce, sourced directly from local farmers
          </p>
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {featuredProducts.map((product, index) => (
            <div key={product.id} className="animate-fade-up" style={{ animationDelay: `${0.1 + index * 0.1}s` }}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>
        
        {/* View All Button */}
        <div className="text-center">
          <a 
            href="/products" 
            className="inline-flex items-center justify-center text-nature-600 font-medium hover:text-nature-700 transition-colors"
          >
            View All Products
            <ArrowRight size={18} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
