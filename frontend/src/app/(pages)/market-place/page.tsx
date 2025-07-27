"use client"

import React, { useState } from 'react';
import { Search, Filter, Star, Truck, ShoppingCart } from 'lucide-react';
import { useApp } from '../../../context/AppContext';
import { t } from '../../../utils/translation';
import { mockProducts } from '../../../data/mock';
import Header from '../../../components/Header';
import { Supplier, Product } from '@/types/types';


const MarketplacePage: React.FC = () => {
  const { language, addToCart, cart } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All', nameHi: 'सभी' },
    { id: 'Flour', name: 'Flour', nameHi: 'आटा' },
    { id: 'Oil', name: 'Oil', nameHi: 'तेल' },
    { id: 'Vegetables', name: 'Vegetables', nameHi: 'सब्जियां' }
  ];

  const filteredProducts = mockProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.nameHi.includes(searchQuery);
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAddToCart = (product: Product, supplier: Supplier) => {
    addToCart(product, 1, supplier);
  };

  const getCartItemCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header
        title={t('marketplace', language)}
        showBack={true}
        rightAction={
          <button className="relative p-2 hover:bg-white/20 rounded-lg">
            <ShoppingCart size={20} />
            {getCartItemCount() > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {getCartItemCount()}
              </span>
            )}
          </button>
        }
      />

      <div className="p-4 space-y-4">
        {/* Search and Filter */}
        <div className="flex space-x-3">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('searchProducts', language)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none"
            />
          </div>
          <button className="bg-white border border-gray-200 rounded-xl px-4 py-3 hover:bg-gray-50">
            <Filter size={20} className="text-gray-600" />
          </button>
        </div>

        {/* Categories */}
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${selectedCategory === category.id
                ? 'bg-orange-500 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
            >
              {language === 'hi' ? category.nameHi : category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-4">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl p-4 shadow-sm">
              <div className="flex space-x-4">
                <img
                  src={product.image}
                  alt={product.name}
                  width={80}
                  height={80}
                  className="w-20 h-20 rounded-xl object-cover"
                />

                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {language === 'hi' ? product.nameHi : product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">{product.category}</p>

                  {/* Best Supplier */}
                  {product.suppliers.length > 0 && (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            {product.suppliers[0].name}
                          </p>
                          <div className="flex items-center space-x-2">
                            <div className="flex items-center">
                              <Star className="text-yellow-400 fill-current" size={14} />
                              <span className="text-sm text-gray-600 ml-1">
                                {product.suppliers[0].rating}
                              </span>
                            </div>
                            <div className="flex items-center">
                              <Truck className="text-green-600" size={14} />
                              <span className="text-sm text-gray-600 ml-1">
                                {product.suppliers[0].deliveryTime}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="text-right">
                          <p className="text-lg font-bold text-gray-900">
                            ₹{product.suppliers[0].pricePerKg}/kg
                          </p>
                          <button
                            onClick={() => handleAddToCart(product, product.suppliers[0])}
                            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors mt-2"
                          >
                            {t('addToCart', language)}
                          </button>
                        </div>
                      </div>

                      {product.suppliers.length > 1 && (
                        <button className="text-orange-600 hover:text-orange-700 text-sm font-medium">
                          {language === 'hi'
                            ? `+${product.suppliers.length - 1} और विकल्प देखें`
                            : `View ${product.suppliers.length - 1} more options`}
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <Search className="text-gray-400 mx-auto mb-4" size={48} />
            <p className="text-gray-600">
              {language === 'hi' ? 'कोई उत्पाद नहीं मिला' : 'No products found'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MarketplacePage;