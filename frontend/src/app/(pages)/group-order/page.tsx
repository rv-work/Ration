"use client"

import React, { useState } from 'react';
import { Users, Clock, TrendingDown, Plus, CheckCircle } from 'lucide-react';
import { useApp } from '../../../context/AppContext';
import { t } from '../../../utils/translation';
import { mockGroupOrders } from '../../../data/mock';
import Header from '../../../components/Header';

const GroupOrdersPage: React.FC = () => {
  const { language } = useApp();
  const [activeTab, setActiveTab] = useState<'available' | 'joined'>('available');
  const [joinedOrders, setJoinedOrders] = useState<string[]>([]);

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

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header
        title={t('groupOrders', language)}
        showBack={true}
        rightAction={
          <button className="bg-white/20 hover:bg-white/30 rounded-lg p-2">
            <Plus size={20} />
          </button>
        }
      />

      <div className="p-4 space-y-4">
        {/* Tabs */}
        <div className="flex bg-white rounded-2xl p-1 shadow-sm">
          <button
            onClick={() => setActiveTab('available')}
            className={`flex-1 py-3 px-4 rounded-xl font-medium transition-colors ${activeTab === 'available'
              ? 'bg-orange-500 text-white'
              : 'text-gray-600 hover:text-gray-900'
              }`}
          >
            {language === 'hi' ? 'उपलब्ध ऑर्डर' : 'Available Orders'}
          </button>
          <button
            onClick={() => setActiveTab('joined')}
            className={`flex-1 py-3 px-4 rounded-xl font-medium transition-colors ${activeTab === 'joined'
              ? 'bg-orange-500 text-white'
              : 'text-gray-600 hover:text-gray-900'
              }`}
          >
            {language === 'hi' ? 'जुड़े हुए ऑर्डर' : 'Joined Orders'}
            {joinedOrders.length > 0 && (
              <span className="ml-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {joinedOrders.length}
              </span>
            )}
          </button>
        </div>

        {/* Info Card */}
        <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl p-6 text-white">
          <div className="flex items-center space-x-4">
            <div className="bg-white/20 p-3 rounded-xl">
              <TrendingDown size={24} />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg mb-1">
                {language === 'hi' ? 'समूह में खरीदें, पैसे बचाएं' : 'Buy Together, Save More'}
              </h3>
              <p className="text-white/90 text-sm">
                {language === 'hi'
                  ? 'अन्य वेंडरों के साथ मिलकर बल्क डिस्काउंट पाएं'
                  : 'Join other vendors to get bulk discounts'}
              </p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold">25%</p>
              <p className="text-xs text-white/80">
                {language === 'hi' ? 'तक बचत' : 'savings'}
              </p>
            </div>
          </div>
        </div>

        {/* Available Orders */}
        {activeTab === 'available' && (
          <div className="space-y-4">
            {mockGroupOrders.map((order) => (
              <div key={order.id} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-gray-900 text-lg">{order.title}</h3>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {order.discount}% {language === 'hi' ? 'छूट' : 'OFF'}
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">
                      {language === 'hi' ? 'उत्पाद:' : 'Products:'}
                    </span>
                    <span className="font-medium">{order.products.join(', ')}</span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">
                      {language === 'hi' ? 'सहभागी:' : 'Participants:'}
                    </span>
                    <div className="flex items-center space-x-2">
                      <Users size={16} className="text-gray-400" />
                      <span className="font-medium">{order.participants}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">
                      {language === 'hi' ? 'समय सीमा:' : 'Deadline:'}
                    </span>
                    <div className="flex items-center space-x-2">
                      <Clock size={16} className="text-orange-500" />
                      <span className="font-medium text-orange-600">
                        {formatTimeLeft(order.deadline)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-gray-600">
                      {language === 'hi' ? 'प्रगति:' : 'Progress:'}
                    </span>
                    <span className="font-medium">
                      {order.currentQuantity}/{order.minQuantity} kg
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-green-500 to-teal-500 h-2 rounded-full transition-all"
                      style={{ width: `${Math.min((order.currentQuantity / order.minQuantity) * 100, 100)}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600">
                    {language === 'hi' ? 'निर्माता:' : 'Created by:'} <span className="font-medium">{order.creator}</span>
                  </div>

                  {joinedOrders.includes(order.id) ? (
                    <div className="flex items-center space-x-2 text-green-600">
                      <CheckCircle size={16} />
                      <span className="font-medium text-sm">
                        {language === 'hi' ? 'जुड़ गए' : 'Joined'}
                      </span>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleJoinOrder(order.id)}
                      className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                    >
                      {language === 'hi' ? 'जुड़ें' : 'Join Order'}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Joined Orders */}
        {activeTab === 'joined' && (
          <div className="space-y-4">
            {joinedOrders.length === 0 ? (
              <div className="text-center py-12">
                <Users className="text-gray-400 mx-auto mb-4" size={48} />
                <p className="text-gray-600 mb-2">
                  {language === 'hi' ? 'आपने अभी तक कोई ऑर्डर जॉइन नहीं किया है' : "You haven't joined any orders yet"}
                </p>
                <button
                  onClick={() => setActiveTab('available')}
                  className="text-orange-600 hover:text-orange-700 font-medium"
                >
                  {language === 'hi' ? 'उपलब्ध ऑर्डर देखें' : 'Browse Available Orders'}
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {mockGroupOrders
                  .filter(order => joinedOrders.includes(order.id))
                  .map((order) => (
                    <div key={order.id} className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-green-500">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-bold text-gray-900 text-lg">{order.title}</h3>
                        <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                          <CheckCircle size={14} />
                          <span>{language === 'hi' ? 'सक्रिय' : 'Active'}</span>
                        </div>
                      </div>

                      <div className="bg-green-50 rounded-xl p-4 mb-4">
                        <p className="text-green-800 font-medium text-sm">
                          {language === 'hi'
                            ? `आपको ${order.discount}% छूट मिलेगी जब यह ऑर्डर पूरा हो जाएगा`
                            : `You'll get ${order.discount}% discount when this order completes`}
                        </p>
                      </div>

                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">
                            {language === 'hi' ? 'प्रगति:' : 'Progress:'}
                          </span>
                          <span className="font-medium">
                            {Math.round((order.currentQuantity / order.minQuantity) * 100)}%
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">
                            {language === 'hi' ? 'समय बचा:' : 'Time left:'}
                          </span>
                          <span className="font-medium text-orange-600">
                            {formatTimeLeft(order.deadline)}
                          </span>
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