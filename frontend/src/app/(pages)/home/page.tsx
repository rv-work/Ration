"use client"


import React from 'react';
import {
  TrendingUp,
  ShoppingCart,
  Users,
  Star,
  Calendar,
  MapPin,
  MessageCircle,
  Truck
} from 'lucide-react';
import { useApp } from '../../../context/AppContext';
import { t } from '../../../utils/translation';
import Header from '../../../components/Header';

const HomePage: React.FC = () => {
  const { user, language, setCurrentPage, orders } = useApp();

  const quickActions = [
    {
      id: 'planner',
      icon: Calendar,
      title: t('planner', language),
      subtitle: language === 'hi' ? 'आज के लिए योजना बनाएं' : 'Plan for today',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      id: 'marketplace',
      icon: ShoppingCart,
      title: t('market', language),
      subtitle: language === 'hi' ? 'कच्चा माल खरीदें' : 'Buy raw materials',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50'
    },
    {
      id: 'grouporders',
      icon: Users,
      title: t('groupOrders', language),
      subtitle: language === 'hi' ? 'सामूहिक छूट पाएं' : 'Get group discounts',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      id: 'streethub',
      icon: MapPin,
      title: t('streethub', language),
      subtitle: language === 'hi' ? 'अपना स्थान दिखाएं' : 'Show your location',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50'
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header
        title={`${t('welcome', language)}, ${user?.name?.split(' ')[0] || 'Vendor'}!`}
        showBack={false}
      />

      <div className="p-4 space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-center space-x-3">
              <div className="bg-orange-100 p-3 rounded-xl">
                <TrendingUp className="text-orange-600" size={24} />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">4.5</p>
                <p className="text-gray-600 text-sm">
                  {language === 'hi' ? 'रेटिंग' : 'Rating'}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-center space-x-3">
              <div className="bg-green-100 p-3 rounded-xl">
                <Star className="text-green-600" size={24} />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">85</p>
                <p className="text-gray-600 text-sm">
                  {language === 'hi' ? 'ट्रस्ट स्कोर' : 'Trust Score'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            {language === 'hi' ? 'त्वरित कार्य' : 'Quick Actions'}
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <button
                  key={action.id}
                  onClick={() => setCurrentPage(action.id)}
                  className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow text-left"
                >
                  <div className={`${action.bgColor} p-3 rounded-xl mb-3 inline-block`}>
                    <Icon className={`bg-gradient-to-r ${action.color} bg-clip-text text-transparent`} size={24} />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{action.title}</h3>
                  <p className="text-gray-600 text-sm">{action.subtitle}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Recent Orders */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-900">
              {language === 'hi' ? 'हाल के ऑर्डर' : 'Recent Orders'}
            </h2>
            <button
              onClick={() => setCurrentPage('orders')}
              className="text-orange-600 hover:text-orange-700 font-medium text-sm"
            >
              {language === 'hi' ? 'सभी देखें' : 'View All'}
            </button>
          </div>

          <div className="space-y-3">
            {orders.slice(0, 2).map((order) => (
              <div key={order.id} className="bg-white rounded-2xl p-4 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-semibold text-gray-900">Order #{order.id}</p>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${order.status === 'delivered'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-orange-100 text-orange-800'
                    }`}>
                    {t(order.status, language)}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{order.supplier.name}</p>
                <p className="text-lg font-bold text-gray-900 mt-1">₹{order.total}</p>
              </div>
            ))}

            {orders.length === 0 && (
              <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
                <ShoppingCart className="text-gray-400 mx-auto mb-3" size={32} />
                <p className="text-gray-600">
                  {language === 'hi' ? 'कोई ऑर्डर नहीं मिला' : 'No orders found'}
                </p>
                <button
                  onClick={() => setCurrentPage('marketplace')}
                  className="text-orange-600 hover:text-orange-700 font-medium text-sm mt-2"
                >
                  {language === 'hi' ? 'खरीदारी शुरू करें' : 'Start Shopping'}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Additional Services */}
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => setCurrentPage('whatsapp')}
            className="bg-green-500 text-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <MessageCircle size={24} className="mb-2" />
            <p className="font-semibold">WhatsApp Bot</p>
            <p className="text-green-100 text-sm">
              {language === 'hi' ? 'आसान ऑर्डरिंग' : 'Easy ordering'}
            </p>
          </button>

          <button
            onClick={() => setCurrentPage('delivery')}
            className="bg-blue-500 text-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <Truck size={24} className="mb-2" />
            <p className="font-semibold">LastMileX</p>
            <p className="text-blue-100 text-sm">
              {language === 'hi' ? 'डिलीवरी नेटवर्क' : 'Delivery network'}
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;