import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Truck, Shield, RotateCcw } from 'lucide-react';
import { products, brandInfo, testimonials } from '../data/mockData';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  {brandInfo.tagline}
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {brandInfo.description}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/shop"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-black rounded-lg hover:bg-gray-800 transition-colors duration-200"
                >
                  Shop Collection
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-black bg-white border-2 border-black rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  Our Story
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-w-4 aspect-h-5 bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={products[0].image}
                  alt="Hero product"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">€{products[0].price}</div>
                  <div className="text-sm text-gray-600">Starting from</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="bg-gray-100 p-4 rounded-full">
                  <Truck className="w-8 h-8 text-gray-900" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Free Shipping</h3>
              <p className="text-gray-600">
                Complimentary shipping on all orders over €150
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="bg-gray-100 p-4 rounded-full">
                  <Shield className="w-8 h-8 text-gray-900" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Quality Guarantee</h3>
              <p className="text-gray-600">
                Premium materials and craftsmanship in every piece
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="bg-gray-100 p-4 rounded-full">
                  <RotateCcw className="w-8 h-8 text-gray-900" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">30-Day Returns</h3>
              <p className="text-gray-600">
                Not satisfied? Return within 30 days for a full refund
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Collection
            </h2>
            <p className="text-xl text-gray-600">
              Discover our most popular pieces
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-black rounded-lg hover:bg-gray-800 transition-colors duration-200"
            >
              View All Products
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Read reviews from our satisfied customers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 p-8 rounded-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Elevate Your Style?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of satisfied customers who have transformed their wardrobe
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-black bg-white rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            Start Shopping
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;