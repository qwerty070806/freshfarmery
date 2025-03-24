
import React from 'react';
import { ShoppingCart, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  discountPrice?: number;
  image: string;
  category: string;
  isOrganic?: boolean;
  isFeatured?: boolean;
}

export default function ProductCard({ 
  id, 
  name, 
  price, 
  discountPrice, 
  image, 
  category, 
  isOrganic = false,
  isFeatured = false
}: ProductCardProps) {
  return (
    <div 
      className={cn(
        "group relative overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300",
        "hover:shadow-xl hover-lift"
      )}
    >
      {/* Product Image */}
      <div className="aspect-square overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Badges */}
      <div className="absolute top-3 left-3 flex flex-col gap-2">
        {isOrganic && (
          <span className="rounded-full bg-green-50 px-2.5 py-1 text-xs font-medium text-nature-600">
            Organic
          </span>
        )}
        {discountPrice && (
          <span className="rounded-full bg-red-50 px-2.5 py-1 text-xs font-medium text-red-600">
            Sale
          </span>
        )}
      </div>

      {/* Wishlist Button */}
      <button 
        className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-gray-700 backdrop-blur-sm transition-colors hover:bg-white hover:text-nature-600" 
        aria-label="Add to wishlist"
      >
        <Heart size={18} />
      </button>

      {/* Product Info */}
      <div className="p-4">
        <div className="mb-1 text-xs font-medium uppercase tracking-wider text-gray-500">
          {category}
        </div>
        <h3 className="mb-2 text-base font-medium text-gray-900 group-hover:text-nature-600 transition-colors">
          {name}
        </h3>
        <div className="mb-4 flex items-baseline gap-2">
          {discountPrice ? (
            <>
              <span className="text-lg font-semibold text-nature-600">${discountPrice.toFixed(2)}</span>
              <span className="text-sm text-gray-500 line-through">${price.toFixed(2)}</span>
            </>
          ) : (
            <span className="text-lg font-semibold text-nature-600">${price.toFixed(2)}</span>
          )}
        </div>

        {/* Add to cart button */}
        <button 
          className="flex w-full items-center justify-center rounded-lg bg-nature-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-nature-700 focus:outline-none focus:ring-2 focus:ring-nature-500 focus:ring-offset-1"
        >
          <ShoppingCart size={18} className="mr-2" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
