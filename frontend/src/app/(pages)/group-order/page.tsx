"use client"

import React, { useState } from 'react';
import { Users, Clock, TrendingDown, Plus, CheckCircle, ChevronRight, ShoppingCart, Star, Zap } from 'lucide-react';
import Header from '@/components/Header';
import { t } from '@/utils/translation';

const GroupOrdersPage = () => {
  const [language, setLanguage] = useState('en');
  const [activeTab, setActiveTab] = useState('available');
  const [joinedOrders, setJoinedOrders] = useState<string[]>([]);

  const mockGroupOrders = [
    {
      id: '1',
      title: 'Premium Rice Bulk Order',
      products: ['Basmati Rice', 'Brown Rice'],
      participants: 12,
      minQuantity: 100,
      currentQuantity: 75,
      discount: 25,
      deadline: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
      creator: 'Rajesh Kumar',
      rating: 4.8,
      category: 'Grains'
    },
    {
      id: '2',
      title: 'Fresh Vegetables Bundle',
      products: ['Onions', 'Potatoes', 'Tomatoes'],
      participants: 8,
      minQuantity: 50,
      currentQuantity: 35,
      discount: 20,
      deadline: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
      creator: 'Priya Sharma',
      rating: 4.9,
      category: 'Vegetables'
    },
    {
      id: '3',
      title: 'Organic Spices Collection',
      products: ['Turmeric', 'Cumin', 'Cardamom'],
      participants: 15,
      minQuantity: 25,
      currentQuantity: 20,
      discount: 30,
      deadline: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      creator: 'Amit Patel',
      rating: 4.7,
      category: 'Spices'
    }
  ];

  const handleJoinOrder = (orderId: string) => {
    setJoinedOrders(prev => [...prev, orderId]);
  };

  const formatTimeLeft = (deadline: Date) => {
    const now = new Date();
    const diff = deadline.getTime() - now.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));

    if (hours < 24) {
      return language === 'hi' ? `${hours} घंटे बचे` : `${hours}h left`;
    } else {
      const days = Math.floor(hours / 24);
      return language === 'hi' ? `${days} दिन बचे` : `${days}d left`;
    }
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'Grains': 'from-amber-400 to-orange-500',
      'Vegetables': 'from-green-400 to-emerald-500',
      'Spices': 'from-red-400 to-pink-500'
    };
    return colors[category] || 'from-blue-400 to-indigo-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header
        title={t('groupOrders', language as 'en' | 'hi')}
        showBack={true}
        rightAction={
          <button className="bg-white/20 hover:bg-white/30 rounded-lg p-2">
            <Plus size={20} />
          </button>
        }
      />


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        {/* Hero Section */}
        <div className="mb-8 lg:mb-12">
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 rounded-3xl lg:rounded-4xl p-6 lg:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>

            <div className="relative z-10 grid lg:grid-cols-3 gap-6 lg:gap-12 items-center">
              <div className="lg:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-white/20 p-3 rounded-2xl">
                    <Zap size={28} />
                  </div>
                  <h2 className="text-2xl lg:text-4xl font-bold">
                    {language === 'hi' ? 'समूह में खरीदें, पैसे बचाएं' : 'Buy Together, Save More'}
                  </h2>
                </div>
                <p className="text-white/90 text-lg lg:text-xl mb-6">
                  {language === 'hi'
                    ? 'अन्य विक्रेताओं के साथ मिलकर बल्क डिस्काउंट पाएं और अपने व्यापार को बढ़ाएं'
                    : 'Join other vendors to get bulk discounts and grow your business together'}
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-white/20 px-4 py-2 rounded-full">
                    <span className="font-semibold">500+ Active Orders</span>
                  </div>
                  <div className="bg-white/20 px-4 py-2 rounded-full">
                    <span className="font-semibold">₹2L+ Saved Monthly</span>
                  </div>
                </div>
              </div>

              <div className="text-center lg:text-right">
                <div className="inline-block bg-white/20 backdrop-blur-sm rounded-3xl p-6 lg:p-8">
                  <p className="text-5xl lg:text-6xl font-bold mb-2">25%</p>
                  <p className="text-lg text-white/80">
                    {language === 'hi' ? 'तक बचत' : 'Average Savings'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="bg-white/80 backdrop-blur-md rounded-2xl lg:rounded-3xl p-2 shadow-xl border border-white/20 max-w-md mx-auto lg:mx-0">
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setActiveTab('available')}
                className={`py-3 lg:py-4 px-6 rounded-xl lg:rounded-2xl font-semibold transition-all duration-300 ${activeTab === 'available'
                  ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg transform scale-105'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
                  }`}
              >
                {language === 'hi' ? 'उपलब्ध ऑर्डर' : 'Available Orders'}
              </button>
              <button
                onClick={() => setActiveTab('joined')}
                className={`py-3 lg:py-4 px-6 rounded-xl lg:rounded-2xl font-semibold transition-all duration-300 relative ${activeTab === 'joined'
                  ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg transform scale-105'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
                  }`}
              >
                {language === 'hi' ? 'जुड़े हुए ऑर्डर' : 'Joined Orders'}
                {joinedOrders.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
                    {joinedOrders.length}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Available Orders */}
        {activeTab === 'available' && (
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {mockGroupOrders.map((order) => (
              <div key={order.id} className="group bg-white/80 backdrop-blur-md rounded-3xl p-6 lg:p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className={`inline-block bg-gradient-to-r ${getCategoryColor(order.category)} text-white px-3 py-1 rounded-full text-xs font-semibold mb-3`}>
                      {order.category}
                    </div>
                    <h3 className="font-bold text-gray-900 text-xl mb-2 group-hover:text-orange-600 transition-colors">
                      {order.title}
                    </h3>
                    <div className="flex items-center space-x-2 mb-3">
                      <Star className="text-yellow-400 fill-current" size={16} />
                      <span className="text-sm font-medium text-gray-600">{order.rating}</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-4 py-2 rounded-2xl text-sm font-bold shadow-lg">
                    {order.discount}% {language === 'hi' ? 'छूट' : 'OFF'}
                  </div>
                </div>

                {/* Products */}
                <div className="mb-6">
                  <p className="text-sm text-gray-500 mb-2">
                    {language === 'hi' ? 'उत्पाद:' : 'Products:'}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {order.products.map((product, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                        {product}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-blue-50 rounded-2xl p-4 text-center">
                    <Users className="text-blue-500 mx-auto mb-2" size={20} />
                    <p className="text-2xl font-bold text-blue-600">{order.participants}</p>
                    <p className="text-xs text-blue-500">
                      {language === 'hi' ? 'सदस्य' : 'Members'}
                    </p>
                  </div>
                  <div className="bg-orange-50 rounded-2xl p-4 text-center">
                    <Clock className="text-orange-500 mx-auto mb-2" size={20} />
                    <p className="text-sm font-bold text-orange-600">
                      {formatTimeLeft(order.deadline)}
                    </p>
                    <p className="text-xs text-orange-500">
                      {language === 'hi' ? 'बचा समय' : 'Time Left'}
                    </p>
                  </div>
                </div>

                {/* Progress */}
                <div className="mb-6">
                  <div className="flex items-center justify-between text-sm mb-3">
                    <span className="text-gray-600 font-medium">
                      {language === 'hi' ? 'प्रगति:' : 'Progress:'}
                    </span>
                    <span className="font-bold text-gray-900">
                      {order.currentQuantity}/{order.minQuantity} kg
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-green-400 to-emerald-500 h-3 rounded-full transition-all duration-1000 ease-out shadow-sm"
                      style={{
                        width: `${Math.min((order.currentQuantity / order.minQuantity) * 100, 100)}%`,
                        animation: 'pulse 2s infinite'
                      }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    {Math.round((order.currentQuantity / order.minQuantity) * 100)}% Complete
                  </p>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">{order.creator}</span>
                  </div>

                  {joinedOrders.includes(order.id) ? (
                    <div className="flex items-center space-x-2 text-green-600 bg-green-50 px-4 py-2 rounded-xl">
                      <CheckCircle size={16} />
                      <span className="font-semibold text-sm">
                        {language === 'hi' ? 'जुड़ गए' : 'Joined'}
                      </span>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleJoinOrder(order.id)}
                      className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2"
                    >
                      <span>{language === 'hi' ? 'जुड़ें' : 'Join Order'}</span>
                      <ChevronRight size={16} />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Joined Orders */}
        {activeTab === 'joined' && (
          <div>
            {joinedOrders.length === 0 ? (
              <div className="text-center py-16 lg:py-24">
                <div className="bg-white/80 backdrop-blur-md rounded-3xl p-12 max-w-md mx-auto shadow-xl border border-white/20">
                  <div className="bg-gradient-to-r from-gray-400 to-gray-500 p-4 rounded-2xl w-20 h-20 mx-auto mb-6">
                    <Users className="text-white w-full h-full" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {language === 'hi' ? 'कोई ऑर्डर नहीं मिला' : 'No Orders Joined Yet'}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {language === 'hi'
                      ? 'अभी तक आपने कोई ग्रुप ऑर्डर जॉइन नहीं किया है'
                      : "You haven't joined any group orders yet"}
                  </p>
                  <button
                    onClick={() => setActiveTab('available')}
                    className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 hover:scale-105 shadow-lg"
                  >
                    {language === 'hi' ? 'उपलब्ध ऑर्डर देखें' : 'Browse Available Orders'}
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
                {mockGroupOrders
                  .filter(order => joinedOrders.includes(order.id))
                  .map((order) => (
                    <div key={order.id} className="bg-white/80 backdrop-blur-md rounded-3xl p-6 lg:p-8 shadow-xl border-l-4 border-green-500 hover:shadow-2xl transition-all duration-300">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="font-bold text-gray-900 text-xl">{order.title}</h3>
                        <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-2">
                          <CheckCircle size={16} />
                          <span>{language === 'hi' ? 'सक्रिय' : 'Active'}</span>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 mb-6 border border-green-100">
                        <div className="flex items-center space-x-3">
                          <div className="bg-green-500 p-2 rounded-xl">
                            <TrendingDown className="text-white" size={20} />
                          </div>
                          <p className="text-green-800 font-semibold">
                            {language === 'hi'
                              ? `आपको ${order.discount}% छूट मिलेगी जब यह ऑर्डर पूरा हो जाएगा`
                              : `You'll get ${order.discount}% discount when this order completes`}
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-blue-50 rounded-2xl p-4 text-center">
                          <p className="text-2xl font-bold text-blue-600">
                            {Math.round((order.currentQuantity / order.minQuantity) * 100)}%
                          </p>
                          <p className="text-sm text-blue-500">
                            {language === 'hi' ? 'पूर्ण' : 'Complete'}
                          </p>
                        </div>
                        <div className="bg-orange-50 rounded-2xl p-4 text-center">
                          <p className="text-sm font-bold text-orange-600">
                            {formatTimeLeft(order.deadline)}
                          </p>
                          <p className="text-xs text-orange-500">
                            {language === 'hi' ? 'समय बचा' : 'Time Left'}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default GroupOrdersPage;