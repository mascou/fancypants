import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, ShoppingBag, Star, Truck, RotateCcw, Shield, ArrowLeft } from 'lucide-react';
import { products, cartActions } from '../data/mockData';
import ProductCard from '../components/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const foundProduct = products.find(p => p.id === parseInt(id));
    setProduct(foundProduct);
    
    if (foundProduct) {
      setSelectedSize(foundProduct.sizes[0]);
      setSelectedColor(foundProduct.colors[0]);
      
      // Get related products from the same category
      const related = products
        .filter(p => p.category === foundProduct.category && p.id !== foundProduct.id)
        .slice(0, 4);
      setRelatedProducts(related);
    }
  }, [id]);

  const handleAddToCart = () => {
    if (product && selectedSize && selectedColor) {
      for (let i = 0; i < quantity; i++) {
        cartActions.addToCart(product, selectedSize, selectedColor);
      }
      
      // Dispatch custom event to update cart count
      window.dispatchEvent(new CustomEvent('cartUpdated'));
      
      // Show success message (you could add a toast here)
      alert(`Added ${quantity} ${product.name} to cart!`);
    }
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  const getColorClass = (color) => {
    const colorClasses = {
      'Black': 'bg-black',
      'Navy': 'bg-blue-900',
      'Plaid': 'bg-gradient-to-br from-gray-800 to-gray-600',
      'Camel': 'bg-yellow-700',
      'Beige': 'bg-yellow-100',
      'Olive': 'bg-green-700',
      'Khaki': 'bg-yellow-600',
      'Charcoal': 'bg-gray-700',
      'Indigo': 'bg-indigo-700',
      'Raw': 'bg-blue-100',
      'Natural': 'bg-yellow-50',
      'White': 'bg-white',
      'Stone': 'bg-gray-300'
    };
    return colorClasses[color] || 'bg-gray-400';
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 text-lg">Product not found</p>
          <Link to="/shop" className="mt-4 inline-block px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-200">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-black">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-black">Shop</Link>
          <span>/</span>
          <span className="text-black">{product.name}</span>
        </div>

        {/* Back Button */}
        <Link
          to="/shop"
          className="inline-flex items-center space-x-2 text-gray-600 hover:text-black mb-8 transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Shop</span>
        </Link>

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <div className="aspect-w-4 aspect-h-5 bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-3xl font-bold text-gray-900">€{product.price}</span>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-gray-600 text-sm ml-2">(4.8 out of 5)</span>
                </div>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">{product.description}</p>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Size</h3>
              <div className="grid grid-cols-5 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 px-4 border-2 rounded-lg font-medium transition-colors duration-200 ${
                      selectedSize === size
                        ? 'border-black bg-black text-white'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Color: {selectedColor}</h3>
              <div className="flex space-x-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-12 h-12 rounded-full border-4 transition-all duration-200 ${
                      selectedColor === color
                        ? 'border-black scale-110'
                        : 'border-gray-300 hover:border-gray-400'
                    } ${getColorClass(color)}`}
                    title={color}
                  />
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Quantity</h3>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  -
                </button>
                <span className="w-12 text-center text-lg font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  +
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleAddToCart}
                className="flex-1 flex items-center justify-center space-x-2 px-8 py-4 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 text-lg font-semibold"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>Add to Cart</span>
              </button>
              <button
                onClick={handleWishlist}
                className={`px-8 py-4 border-2 rounded-lg transition-colors duration-200 ${
                  isWishlisted
                    ? 'border-red-500 bg-red-500 text-white'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
              </button>
            </div>

            {/* Features */}
            <div className="border-t pt-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center space-x-3">
                  <Truck className="w-5 h-5 text-gray-600" />
                  <span className="text-sm text-gray-600">Free shipping over €150</span>
                </div>
                <div className="flex items-center space-x-3">
                  <RotateCcw className="w-5 h-5 text-gray-600" />
                  <span className="text-sm text-gray-600">30-day returns</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-gray-600" />
                  <span className="text-sm text-gray-600">Quality guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">You Might Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;