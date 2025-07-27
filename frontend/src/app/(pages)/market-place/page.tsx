"use client"

import React, { useState } from 'react';
import { Search, Filter, Star, Truck, ShoppingCart, Package, Grid, List, MapPin, Clock } from 'lucide-react';
import { useApp } from '../../../context/AppContext';
import { t } from '../../../utils/translation';
import { mockProducts } from '../../../data/mock';
import Header from '../../../components/Header';
import { Supplier, Product } from '@/types/types';


const MarketplacePage: React.FC = () => {
  const { language, addToCart, cart } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = [
    { id: 'all', name: 'All', nameHi: 'सभी', icon: '🛒' },
    { id: 'Flour', name: 'Flour', nameHi: 'आटा', icon: '🌾' },
    { id: 'Oil', name: 'Oil', nameHi: 'तेल', icon: '🛢️' },
    { id: 'Vegetables', name: 'Vegetables', nameHi: 'सब्जियां', icon: '🥬' }
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

  const ProductCard = ({ product }: { product: Product }) => {
    const supplier = product.suppliers[0];

    if (viewMode === 'list') {
      return (
        <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 transform hover:scale-[1.02]">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full md:w-24 lg:w-32 h-32 md:h-24 lg:h-32 rounded-2xl object-cover shadow-md"
              />
              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                {language === 'hi' ? 'ताज़ा' : 'Fresh'}
              </div>
            </div>

            <div className="flex-1 space-y-3">
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">
                  {language === 'hi' ? product.nameHi : product.name}
                </h3>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                  <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full font-medium">
                    {language === 'hi' ? 'उपलब्ध' : 'In Stock'}
                  </span>
                </div>
              </div>

              {supplier && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <MapPin className="text-blue-600" size={16} />
                      <p className="text-sm font-semibold text-gray-900">{supplier.name}</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Star className="text-yellow-400 fill-current" size={16} />
                        <span className="text-sm font-medium text-gray-700">{supplier.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="text-green-600" size={16} />
                        <span className="text-sm text-gray-600">{supplier.deliveryTime}</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-right space-y-2">
                    <p className="text-2xl font-bold text-gray-900">
                      ₹{supplier.pricePerKg}
                      <span className="text-sm font-normal text-gray-600">/kg</span>
                    </p>
                    <button
                      onClick={() => handleAddToCart(product, supplier)}
                      className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      <ShoppingCart className="inline mr-2" size={16} />
                      {t('addToCart', language)}
                    </button>
                  </div>
                </div>
              )}

              {product.suppliers.length > 1 && (
                <button className="text-orange-600 hover:text-orange-700 text-sm font-semibold bg-orange-50 hover:bg-orange-100 px-3 py-1 rounded-full transition-colors">
                  {language === 'hi'
                    ? `+${product.suppliers.length - 1} और विकल्प देखें`
                    : `View ${product.suppliers.length - 1} more options`}
                </button>
              )}
            </div>
          </div>
        </div>
      );
    }

    // Grid view
    return (
      <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 transform hover:scale-105">
        <div className="relative mb-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 rounded-2xl object-cover shadow-md"
          />
          <div className="absolute top-3 left-3 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            {language === 'hi' ? 'ताज़ा' : 'Fresh'}
          </div>
          <div className="absolute top-3 right-3 bg-white bg-opacity-90 p-2 rounded-full shadow-md">
            <Package className="text-gray-600" size={16} />
          </div>
        </div>

        <div className="space-y-3">
          <div>
            <h3 className="font-bold text-gray-900 text-lg mb-1">
              {language === 'hi' ? product.nameHi : product.name}
            </h3>
            <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
              {product.category}
            </span>
          </div>

          {supplier && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <MapPin className="text-blue-600" size={14} />
                  <p className="text-sm font-medium text-gray-900">{supplier.name}</p>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="text-yellow-400 fill-current" size={14} />
                  <span className="text-sm font-medium text-gray-700">{supplier.rating}</span>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Truck className="text-green-600" size={14} />
                <span className="text-sm text-gray-600">{supplier.deliveryTime}</span>
              </div>

              <div className="flex items-center justify-between pt-2">
                <p className="text-xl font-bold text-gray-900">
                  ₹{supplier.pricePerKg}
                  <span className="text-sm font-normal text-gray-600">/kg</span>
                </p>
                <button
                  onClick={() => handleAddToCart(product, supplier)}
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-4 py-2 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-md"
                >
                  <ShoppingCart className="inline mr-1" size={14} />
                  {language === 'hi' ? 'खरीदें' : 'Buy'}
                </button>
              </div>
            </div>
          )}

          {product.suppliers.length > 1 && (
            <button className="w-full text-orange-600 hover:text-orange-700 text-sm font-medium bg-orange-50 hover:bg-orange-100 py-2 rounded-xl transition-colors">
              {language === 'hi'
                ? `+${product.suppliers.length - 1} और विकल्प`
                : `+${product.suppliers.length - 1} more options`}
            </button>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header
        title={t('marketplace', language)}
        showBack={true}
        rightAction={
          <button className="relative p-3 hover:bg-white/20 rounded-2xl transition-colors">
            <ShoppingCart size={24} className="text-white" />
            {getCartItemCount() > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shadow-lg">
                {getCartItemCount()}
              </span>
            )}
          </button>
        }
      />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* Hero Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mb-4">
            <Package className="text-white" size={32} />
          </div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
            {language === 'hi' ? 'किराना मार्केटप्लेस' : 'Grocery Marketplace'}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {language === 'hi'
              ? 'सबसे अच्छी कीमत पर ताज़ा सामान खरीदें - तुरंत डिलीवरी के साथ'
              : 'Buy fresh groceries at the best prices with instant delivery'}
          </p>
        </div>

        {/* Search and Controls */}
        <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100 mb-8">
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-4 text-gray-400" size={20} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={language === 'hi' ? 'उत्पाद खोजें...' : 'Search products...'}
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-orange-500 focus:outline-none text-gray-900 placeholder-gray-500 transition-colors"
              />
            </div>

            {/* Controls */}
            <div className="flex space-x-3">
              <button className="bg-gray-100 hover:bg-gray-200 border-2 border-gray-200 rounded-2xl px-6 py-4 transition-colors">
                <Filter size={20} className="text-gray-600" />
              </button>

              {/* View Mode Toggle */}
              <div className="flex bg-gray-100 rounded-2xl p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 rounded-xl transition-colors ${viewMode === 'grid'
                    ? 'bg-white shadow-md text-orange-600'
                    : 'text-gray-600 hover:text-gray-900'
                    }`}
                >
                  <Grid size={18} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 rounded-xl transition-colors ${viewMode === 'list'
                    ? 'bg-white shadow-md text-orange-600'
                    : 'text-gray-600 hover:text-gray-900'
                    }`}
                >
                  <List size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            {language === 'hi' ? 'श्रेणियां' : 'Categories'}
          </h2>
          <div className="flex space-x-3 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-2xl whitespace-nowrap font-semibold transition-all duration-300 transform hover:scale-105 ${selectedCategory === category.id
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-orange-50 shadow-md border border-gray-200'
                  }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{language === 'hi' ? category.nameHi : category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">
            {language === 'hi'
              ? `${filteredProducts.length} उत्पाद मिले`
              : `${filteredProducts.length} products found`}
          </p>
        </div>

        {/* Products Grid/List */}
        {filteredProducts.length > 0 ? (
          <div className={`${viewMode === 'grid'
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
            : 'space-y-6'
            }`}>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="bg-white rounded-3xl p-12 shadow-lg border border-gray-100 max-w-md mx-auto">
              <Search className="text-gray-400 mx-auto mb-6" size={64} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {language === 'hi' ? 'कोई उत्पाद नहीं मिला' : 'No products found'}
              </h3>
              <p className="text-gray-600">
                {language === 'hi'
                  ? 'कृपया अपनी खोज को संशोधित करें या अन्य श्रेणी चुनें'
                  : 'Please modify your search or try a different category'}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MarketplacePage;