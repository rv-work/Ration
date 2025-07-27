import React, { useState } from 'react';
import { MapPin, Navigation, CheckCircle, Truck } from 'lucide-react';
import { useApp } from '../../../context/AppContext';
import { mockDeliveryTasks } from '../../../data/mock';
import Header from '../../../components/Header';

const DeliveryPage: React.FC = () => {
  const { language } = useApp();
  const [userType, setUserType] = useState<'vendor' | 'delivery'>('vendor');
  const [acceptedTasks, setAcceptedTasks] = useState<string[]>([]);

  const handleAcceptTask = (taskId: string) => {
    setAcceptedTasks(prev => [...prev, taskId]);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header
        title="LastMileX"
        showBack={true}
      />

      <div className="p-4 space-y-4">
        {/* User Type Toggle */}
        <div className="flex bg-white rounded-2xl p-1 shadow-sm">
          <button
            onClick={() => setUserType('vendor')}
            className={`flex-1 py-3 px-4 rounded-xl font-medium transition-colors ${userType === 'vendor'
              ? 'bg-orange-500 text-white'
              : 'text-gray-600 hover:text-gray-900'
              }`}
          >
            {language === 'hi' ? '🏪 वेंडर' : '🏪 Vendor'}
          </button>
          <button
            onClick={() => setUserType('delivery')}
            className={`flex-1 py-3 px-4 rounded-xl font-medium transition-colors ${userType === 'delivery'
              ? 'bg-blue-500 text-white'
              : 'text-gray-600 hover:text-gray-900'
              }`}
          >
            {language === 'hi' ? '🛵 डिलीवरी बॉय' : '🛵 Delivery Partner'}
          </button>
        </div>

        {/* Vendor View */}
        {userType === 'vendor' && (
          <div className="space-y-4">
            {/* Post Delivery Need */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-6 text-white">
              <div className="flex items-center space-x-4">
                <div className="bg-white/20 p-3 rounded-xl">
                  <Truck size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-1">
                    {language === 'hi' ? 'डिलीवरी की जरूरत है?' : 'Need Delivery?'}
                  </h3>
                  <p className="text-white/90 text-sm">
                    {language === 'hi'
                      ? 'अपनी डिलीवरी जरूरत पोस्ट करें और नजदीकी डिलीवरी पार्टनर से जुड़ें'
                      : 'Post your delivery needs and connect with nearby delivery partners'}
                  </p>
                </div>
                <button className="bg-white text-orange-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  {language === 'hi' ? 'पोस्ट करें' : 'Post Need'}
                </button>
              </div>
            </div>

            {/* Active Deliveries */}
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-4">
                {language === 'hi' ? 'सक्रिय डिलीवरी' : 'Active Deliveries'}
              </h2>

              <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
                <Truck className="text-gray-400 mx-auto mb-3" size={32} />
                <p className="text-gray-600 mb-2">
                  {language === 'hi' ? 'कोई सक्रिय डिलीवरी नहीं है' : 'No active deliveries'}
                </p>
                <p className="text-gray-500 text-sm">
                  {language === 'hi'
                    ? 'जब आप डिलीवरी पोस्ट करेंगे तो यहाँ दिखेगी'
                    : 'Your posted delivery needs will appear here'}
                </p>
              </div>
            </div>

            {/* Delivery Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-4 shadow-sm text-center">
                <p className="text-2xl font-bold text-green-600">23</p>
                <p className="text-gray-600 text-sm">
                  {language === 'hi' ? 'पूर्ण डिलीवरी' : 'Completed'}
                </p>
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-sm text-center">
                <p className="text-2xl font-bold text-blue-600">4.8</p>
                <p className="text-gray-600 text-sm">
                  {language === 'hi' ? 'औसत रेटिंग' : 'Avg Rating'}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Delivery Partner View */}
        {userType === 'delivery' && (
          <div className="space-y-4">
            {/* Sign Up Card */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-6 text-white">
              <div className="flex items-center space-x-4">
                <div className="bg-white/20 p-3 rounded-xl">
                  <Navigation size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-1">
                    {language === 'hi' ? 'डिलीवरी पार्टनर बनें' : 'Become a Delivery Partner'}
                  </h3>
                  <p className="text-white/90 text-sm">
                    {language === 'hi'
                      ? 'रोजाना ₹500-1500 कमाएं। लचीला समय, नकद भुगतान।'
                      : 'Earn ₹500-1500 daily. Flexible timing, instant cash.'}
                  </p>
                </div>
                <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  {language === 'hi' ? 'साइन अप' : 'Sign Up'}
                </button>
              </div>
            </div>

            {/* Available Tasks */}
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-4">
                {language === 'hi' ? 'उपलब्ध कार्य' : 'Available Tasks'}
              </h2>

              <div className="space-y-4">
                {mockDeliveryTasks.map((task) => (
                  <div key={task.id} className="bg-white rounded-2xl p-6 shadow-sm">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">{task.vendorName}</h3>
                        <div className="flex items-center space-x-2 text-gray-600 text-sm mb-2">
                          <MapPin size={14} />
                          <span>{task.address}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-600 text-sm">
                          <Navigation size={14} />
                          <span>{task.distance}</span>
                        </div>
                      </div>

                      <div className="text-right">
                        <p className="text-xl font-bold text-green-600">₹{task.payment}</p>
                        <p className="text-gray-600 text-sm">
                          {language === 'hi' ? 'भुगतान' : 'Payment'}
                        </p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-gray-600 text-sm mb-2">
                        {language === 'hi' ? 'आइटम:' : 'Items:'}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {task.items.map((item, index) => (
                          <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-lg text-xs">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {acceptedTasks.includes(task.id) ? (
                      <div className="flex items-center justify-center space-x-2 text-green-600 bg-green-50 py-3 rounded-xl">
                        <CheckCircle size={16} />
                        <span className="font-medium text-sm">
                          {language === 'hi' ? 'स्वीकार किया गया' : 'Accepted'}
                        </span>
                      </div>
                    ) : (
                      <button
                        onClick={() => handleAcceptTask(task.id)}
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-xl transition-colors"
                      >
                        {language === 'hi' ? 'कार्य स्वीकार करें' : 'Accept Task'}
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Earnings Summary */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-4 shadow-sm text-center">
                <p className="text-2xl font-bold text-green-600">₹1,240</p>
                <p className="text-gray-600 text-sm">
                  {language === 'hi' ? 'आज की कमाई' : "Today's Earning"}
                </p>
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-sm text-center">
                <p className="text-2xl font-bold text-blue-600">12</p>
                <p className="text-gray-600 text-sm">
                  {language === 'hi' ? 'पूर्ण कार्य' : 'Tasks Done'}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Live Tracking Demo */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="font-bold text-gray-900 mb-4">
            {language === 'hi' ? 'लाइव ट्रैकिंग' : 'Live Tracking'}
          </h3>

          <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-xl h-32 flex items-center justify-center mb-4">
            <div className="text-center">
              <Navigation className="text-blue-600 mx-auto mb-2 animate-pulse" size={24} />
              <p className="text-gray-700 font-medium text-sm">
                {language === 'hi' ? 'रीयल-टाइम GPS ट्रैकिंग' : 'Real-time GPS Tracking'}
              </p>
            </div>
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-600">
                  {language === 'hi' ? 'पिकअप पूरा' : 'Pickup Complete'}
                </span>
              </div>
              <span className="text-gray-500">2:30 PM</span>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-gray-600">
                  {language === 'hi' ? 'डिलीवरी में' : 'Out for Delivery'}
                </span>
              </div>
              <span className="text-gray-500">
                {language === 'hi' ? '15 मिनट में' : 'ETA: 15 min'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryPage;