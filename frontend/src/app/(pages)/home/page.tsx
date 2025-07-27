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
  Truck,
  Sparkles,
  Gift,
  Award,
  Clock
} from 'lucide-react';
import { useApp } from '../../../context/AppContext';
import { t } from '../../../utils/translation';
import Header from '../../../components/Header';
import { useRouter } from 'next/navigation';

const HomePage: React.FC = () => {
  const { user, language, setCurrentPage, orders } = useApp();
  const router = useRouter();

  const quickActions = [
    {
      id: 'planner',
      path: 'menu-plan',
      icon: Calendar,
      title: t('planner', language),
      subtitle: language === 'hi' ? 'आज के लिए योजना बनाएं' : 'Plan for today',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-gradient-to-br from-blue-50 to-blue-100',
      shadowColor: 'hover:shadow-blue-200/50'
    },
    {
      id: 'marketplace',
      path: 'market-place',
      icon: ShoppingCart,
      title: t('market', language),
      subtitle: language === 'hi' ? 'कच्चा माल खरीदें' : 'Buy raw materials',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-gradient-to-br from-green-50 to-green-100',
      shadowColor: 'hover:shadow-green-200/50'
    },
    {
      id: 'grouporders',
      path: 'group-order',
      icon: Users,
      title: t('groupOrders', language),
      subtitle: language === 'hi' ? 'सामूहिक छूट पाएं' : 'Get group discounts',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-gradient-to-br from-purple-50 to-purple-100',
      shadowColor: 'hover:shadow-purple-200/50'
    },
    {
      id: 'streethub',
      path: 'street-hub',
      icon: MapPin,
      title: t('streethub', language),
      subtitle: language === 'hi' ? 'अपना स्थान दिखाएं' : 'Show your location',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-gradient-to-br from-red-50 to-red-100',
      shadowColor: 'hover:shadow-red-200/50'
    }
  ];

  return (
    <div className="bg-gray-50 via-blue-50/30 to-orange-50/30 min-h-screen">
      <Header
        title={`${t('welcome', language)}, ${user?.name?.split(' ')[0] || 'Vendor'}!`}
        showBack={false}
      />

      <div className="py-8 space-y-10 px-4 md:px-20 lg:px-40">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 rounded-3xl p-6 text-white shadow-2xl shadow-orange-200/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
          <div className="relative z-10">
            <div className="flex items-center space-x-3 mb-2">
              <Sparkles className="text-yellow-300" size={28} />
              <h2 className="text-2xl font-bold">
                {language === 'hi' ? 'आपका दिन शुभ हो!' : 'Have a Great Day!'}
              </h2>
            </div>
            <p className="text-orange-100 text-lg">
              {language === 'hi' ? 'आज भी कुछ नया करते हैं' : 'Let\'s create something amazing today'}
            </p>
          </div>
        </div>

        {/* Enhanced Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1 border border-orange-100">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-br from-orange-400 to-orange-600 p-4 rounded-2xl shadow-lg">
                <TrendingUp className="text-white" size={28} />
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">4.5</p>
                <p className="text-gray-600 text-sm font-medium">
                  {language === 'hi' ? 'रेटिंग' : 'Rating'}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1 border border-green-100">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-br from-green-400 to-green-600 p-4 rounded-2xl shadow-lg">
                <Star className="text-white" size={28} />
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">85</p>
                <p className="text-gray-600 text-sm font-medium">
                  {language === 'hi' ? 'ट्रस्ट स्कोर' : 'Trust Score'}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1 border border-blue-100">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-4 rounded-2xl shadow-lg">
                <Award className="text-white" size={28} />
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">12</p>
                <p className="text-gray-600 text-sm font-medium">
                  {language === 'hi' ? 'पुरस्कार' : 'Awards'}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1 border border-purple-100">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-br from-purple-400 to-purple-600 p-4 rounded-2xl shadow-lg">
                <Clock className="text-white" size={28} />
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">24/7</p>
                <p className="text-gray-600 text-sm font-medium">
                  {language === 'hi' ? 'सेवा' : 'Service'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Quick Actions */}
        <div>
          <div className="flex items-center space-x-3 mb-6">
            <Gift className="text-orange-500" size={28} />
            <h2 className="text-2xl font-bold text-gray-900">
              {language === 'hi' ? 'त्वरित कार्य' : 'Quick Actions'}
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <button
                  key={action.id}
                  onClick={() => {
                    setCurrentPage(action.id)
                    router.push(action.path)
                  }}
                  className={`cursor-pointer bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl ${action.shadowColor} transition-all duration-300 text-left hover:-translate-y-2 border-2 border-transparent hover:border-gray-200 group`}
                >
                  <div className={`${action.bgColor} p-4 rounded-2xl mb-4 inline-block group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon
                      className="text-gray-700 group-hover:text-white transition-colors duration-300"
                      size={32}
                    />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">{action.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{action.subtitle}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Enhanced Recent Orders */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <ShoppingCart className="text-orange-500" size={28} />
              <h2 className="text-2xl font-bold text-gray-900">
                {language === 'hi' ? 'हाल के ऑर्डर' : 'Recent Orders'}
              </h2>
            </div>
            <button
              onClick={() => setCurrentPage('orders')}
              className="cursor-pointer bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-2xl font-medium hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {language === 'hi' ? 'सभी देखें' : 'View All'}
            </button>
          </div>

          <div className="space-y-4">
            {orders.slice(0, 2).map((order) => (
              <div
                key={order.id}
                className="cursor-pointer bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                onClick={() => setCurrentPage('orders')}
              >
                <div className="flex items-center justify-between mb-3">
                  <p className="font-bold text-gray-900 text-lg">Order #{order.id}</p>
                  <span className={`px-4 py-2 rounded-full text-sm font-bold shadow-md ${order.status === 'delivered'
                    ? 'bg-gradient-to-r from-green-400 to-green-500 text-white'
                    : 'bg-gradient-to-r from-orange-400 to-orange-500 text-white'
                    }`}>
                    {t(order.status, language)}
                  </span>
                </div>
                <p className="text-gray-600 font-medium mb-2">{order.supplier.name}</p>
                <p className="text-2xl font-bold text-gray-900">₹{order.total}</p>
              </div>
            ))}

            {orders.length === 0 && (
              <div className="bg-white rounded-3xl p-8 shadow-lg text-center border border-gray-100">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-6 rounded-full inline-block mb-4">
                  <ShoppingCart className="text-gray-400" size={48} />
                </div>
                <p className="text-gray-600 text-lg mb-4 font-medium">
                  {language === 'hi' ? 'कोई ऑर्डर नहीं मिला' : 'No orders found'}
                </p>
                <button
                  onClick={() => {
                    setCurrentPage('marketplace')
                    router.push('market-place')
                  }}
                  className="cursor-pointer bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-2xl font-bold hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  {language === 'hi' ? 'खरीदारी शुरू करें' : 'Start Shopping'}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Enhanced Service Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <button
            onClick={() => {
              setCurrentPage('whatsapp')
              router.push('/whatsapp')
            }
            }
            className="cursor-pointer bg-gradient-to-br from-green-500 to-green-600 text-white rounded-3xl p-8 shadow-2xl hover:shadow-green-200/50 hover:-translate-y-2 transition-all duration-300 text-left group"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-white/20 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                <MessageCircle size={32} />
              </div>
              <div>
                <p className="font-bold text-xl">WhatsApp Bot</p>
                <p className="text-green-100 opacity-90">
                  {language === 'hi' ? 'आसान ऑर्डरिंग' : 'Easy ordering'}
                </p>
              </div>
            </div>
            <div className="bg-white/10 rounded-2xl p-4">
              <p className="text-sm text-green-100">
                {language === 'hi' ? 'चैट करके तुरंत ऑर्डर करें' : 'Order instantly via chat'}
              </p>
            </div>
          </button>

          <button
            onClick={() => {
              setCurrentPage('delivery')
              router.push('/delivery')
            }
            }
            className="cursor-pointer bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-3xl p-8 shadow-2xl hover:shadow-blue-200/50 hover:-translate-y-2 transition-all duration-300 text-left group"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-white/20 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                <Truck size={32} />
              </div>
              <div>
                <p className="font-bold text-xl">LastMileX</p>
                <p className="text-blue-100 opacity-90">
                  {language === 'hi' ? 'डिलीवरी नेटवर्क' : 'Delivery network'}
                </p>
              </div>
            </div>
            <div className="bg-white/10 rounded-2xl p-4">
              <p className="text-sm text-blue-100">
                {language === 'hi' ? 'तेज़ और भरोसेमंद डिलीवरी' : 'Fast & reliable delivery'}
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;