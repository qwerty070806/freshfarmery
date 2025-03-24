
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/ui/ProductCard';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Filter, SlidersHorizontal, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Sample product data - extended from featured products
const allProducts = [
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
  {
    id: '5',
    name: 'Organic Carrots',
    price: 3.29,
    image: 'https://images.unsplash.com/photo-1447175008436-054170c2e979?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: 'Vegetables',
    isOrganic: true,
  },
  {
    id: '6',
    name: 'Fresh Blueberries',
    price: 6.99,
    discountPrice: 5.99,
    image: 'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: 'Fruits',
    isOrganic: true,
  },
  {
    id: '7',
    name: 'Red Bell Peppers',
    price: 4.99,
    image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: 'Vegetables',
    isOrganic: false,
  },
  {
    id: '8',
    name: 'Green Apples',
    price: 3.99,
    image: 'https://images.unsplash.com/photo-1591735179859-a049994205de?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: 'Fruits',
    isOrganic: true,
  },
  {
    id: '9',
    name: 'Fresh Broccoli',
    price: 2.99,
    image: 'https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: 'Vegetables',
    isOrganic: true,
  },
  {
    id: '10',
    name: 'Organic Bananas',
    price: 2.49,
    image: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: 'Fruits',
    isOrganic: true,
  },
  {
    id: '11',
    name: 'Fresh Spinach',
    price: 2.79,
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: 'Vegetables',
    isOrganic: true,
  },
  {
    id: '12',
    name: 'Red Grapes',
    price: 5.49,
    image: 'https://images.unsplash.com/photo-1537640538966-79f369143f8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: 'Fruits',
    isOrganic: false,
  },
];

export default function Products() {
  const [priceRange, setPriceRange] = useState<number[]>([0, 10]);
  const [filterOpen, setFilterOpen] = useState(false);
  const [category, setCategory] = useState<string | null>(null);
  const [organicOnly, setOrganicOnly] = useState(false);

  const filteredProducts = allProducts.filter(product => {
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesCategory = !category || product.category === category;
    const matchesOrganic = !organicOnly || product.isOrganic;
    
    return matchesPrice && matchesCategory && matchesOrganic;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Page Header */}
        <div className="bg-gradient-to-b from-nature-50/50 to-transparent py-12 mb-8">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Fresh Farm Products</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse our selection of fresh, locally-sourced produce. From farm to table, we ensure quality and freshness in every product.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-6 pb-16">
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">All Products</h2>
            <Button 
              variant="outline" 
              className="flex items-center gap-2"
              onClick={() => setFilterOpen(!filterOpen)}
            >
              <Filter size={18} />
              Filters
            </Button>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className={`lg:w-1/4 ${filterOpen ? 'block' : 'hidden'} lg:block`}>
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold">Filters</h3>
                  <SlidersHorizontal size={20} className="text-gray-500" />
                </div>
                
                {/* Price Range Filter */}
                <div className="mb-8">
                  <h4 className="font-medium mb-4">Price Range</h4>
                  <Slider
                    defaultValue={[0, 10]}
                    max={10}
                    step={0.5}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>${priceRange[0].toFixed(2)}</span>
                    <span>${priceRange[1].toFixed(2)}</span>
                  </div>
                </div>
                
                {/* Category Filter */}
                <div className="mb-8">
                  <h4 className="font-medium mb-4">Category</h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Button 
                        variant="ghost" 
                        className={`w-full justify-start ${!category ? 'text-nature-600 font-medium' : ''}`}
                        onClick={() => setCategory(null)}
                      >
                        All Categories
                      </Button>
                    </div>
                    <div className="flex items-center">
                      <Button 
                        variant="ghost" 
                        className={`w-full justify-start ${category === 'Fruits' ? 'text-nature-600 font-medium' : ''}`}
                        onClick={() => setCategory('Fruits')}
                      >
                        Fruits
                      </Button>
                    </div>
                    <div className="flex items-center">
                      <Button 
                        variant="ghost" 
                        className={`w-full justify-start ${category === 'Vegetables' ? 'text-nature-600 font-medium' : ''}`}
                        onClick={() => setCategory('Vegetables')}
                      >
                        Vegetables
                      </Button>
                    </div>
                  </div>
                </div>
                
                {/* Organic Filter */}
                <div>
                  <h4 className="font-medium mb-4">Product Type</h4>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="organic" 
                      checked={organicOnly}
                      onCheckedChange={() => setOrganicOnly(!organicOnly)}
                    />
                    <label
                      htmlFor="organic"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Organic Only
                    </label>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Products Grid */}
            <div className="lg:w-3/4">
              <div className="flex justify-between items-center mb-6">
                <p className="text-gray-600"><span className="font-medium">{filteredProducts.length}</span> products</p>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Sort by:</span>
                  <button className="flex items-center text-sm font-medium">
                    Popularity
                    <ChevronDown size={16} className="ml-1" />
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product, index) => (
                  <div key={product.id} className="animate-fade-up" style={{ animationDelay: `${0.1 + index * 0.05}s` }}>
                    <ProductCard {...product} />
                  </div>
                ))}
              </div>
              
              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 mb-4">No products match your current filters</p>
                  <Button onClick={() => {
                    setPriceRange([0, 10]);
                    setCategory(null);
                    setOrganicOnly(false);
                  }}>
                    Reset Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
