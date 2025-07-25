import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag } from 'lucide-react';
import { cartActions } from '../data/mockData';

const ProductCard = ({ product }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleWishlist = (e) => {
    e.preventDefault();
    setIsWishlisted(!isWishlisted);
  };

  const handleQuickAdd = (e) => {
    e.preventDefault();
    // Add to cart with default size and color
    cartActions.addToCart(product, 'M', product.colors[0]);
    
    // Dispatch custom event to update cart count
    window.dispatchEvent(new CustomEvent('cartUpdated'));
    
    // Show feedback (you could add a toast here)
    console.log(`Added ${product.name} to cart`);
  };

  return (
    <div 
      className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`}>
        <div className="aspect-w-3 aspect-h-4 bg-gray-100 relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Overlay actions */}
          <div className={`absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}>
            <button
              onClick={handleQuickAdd}
              className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-2"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Quick Add</span>
            </button>
          </div>
          
          {/* Wishlist button */}
          <button
            onClick={handleWishlist}
            className={`absolute top-3 right-3 p-2 rounded-full transition-colors duration-200 ${
              isWishlisted ? 'bg-red-500 text-white' : 'bg-white text-gray-600 hover:text-red-500'
            }`}
          >
            <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
          </button>
          
          {/* Stock indicator */}
          {!product.inStock && (
            <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs">
              Out of Stock
            </div>
          )}
        </div>
      </Link>
      
      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-gray-700 transition-colors duration-200">
            {product.name}
          </h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {product.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-gray-900">
              €{product.price}
            </span>
            <div className="flex space-x-1">
              {product.colors.slice(0, 3).map((color, index) => (
                <div
                  key={index}
                  className={`w-4 h-4 rounded-full border-2 border-gray-300 ${
                    color === 'Black' ? 'bg-black' : 
                    color === 'Navy' ? 'bg-blue-900' : 
                    color === 'Plaid' ? 'bg-gradient-to-br from-gray-800 to-gray-600' :
                    color === 'Camel' ? 'bg-yellow-700' :
                    color === 'Beige' ? 'bg-yellow-100' :
                    color === 'Olive' ? 'bg-green-700' :
                    color === 'Khaki' ? 'bg-yellow-600' :
                    color === 'Charcoal' ? 'bg-gray-700' :
                    color === 'Indigo' ? 'bg-indigo-700' :
                    color === 'Raw' ? 'bg-blue-100' :
                    color === 'Natural' ? 'bg-yellow-50' :
                    color === 'White' ? 'bg-white' :
                    color === 'Stone' ? 'bg-gray-300' :
                    'bg-gray-400'
                  }`}
                  title={color}
                />
              ))}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;