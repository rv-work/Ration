"use client"

import React, { useState } from 'react';
import { MapPin, Search, Star, Navigation, Award, Users, TrendingUp, Target, Zap, Globe, Crown } from 'lucide-react';
import { useApp } from '../../../context/AppContext';
import { t } from '../../../utils/translation';
import Header from '@/components/Header';
import { mockVendorLocations } from '@/data/mock';

const StreetHubPage: React.FC = () => {
  const { language, user } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedVendor, setSelectedVendor] = useState<string | null>(null);

  const filteredVendors = mockVendorLocations.filter(vendor =>
    vendor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    vendor.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
    vendor.dishes.some(dish => dish.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header
        title={t('streethub', language)}
        showBack={true}
      />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* Hero Section */}
        <div className="text-center mb-8 lg:mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mb-6 shadow-lg">
            <Globe className="text-white" size={40} />
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            {language === 'hi' ? 'StreetHub' : 'StreetHub'}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {language === 'hi'
              ? 'अपने आस-पास के बेहतरीन स्ट्रीट वेंडर्स खोजें और जुड़ें'
              : 'Discover and connect with amazing street vendors around you'}
          </p>
        </div>

        {/* Search Section */}
        <div className="mb-8">
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-4 text-gray-400" size={24} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={language === 'hi' ? 'खोजें: "पास में सबसे अच्छा पाव भाजी"' : 'Search: "Best Pav Bhaji near me"'}
              className="w-full pl-12 pr-6 py-4 border border-gray-200 rounded-2xl focus:border-orange-500 focus:outline-none text-lg shadow-sm"
            />
          </div>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left Column - Map and Vendors */}
          <div className="lg:col-span-2 space-y-8">

            {/* Map Section */}
            <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl lg:text-2xl font-bold text-gray-900 flex items-center">
                  <MapPin className="mr-3 text-orange-600" size={28} />
                  {language === 'hi' ? 'वेंडर मैप' : 'Vendor Map'}
                </h2>
                <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-xl font-medium hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-md">
                  {language === 'hi' ? 'पूर्ण मानचित्र' : 'Full Map'}
                </button>
              </div>

              {/* Enhanced Map Placeholder */}
              <div className="bg-gradient-to-br from-blue-100 via-green-100 to-purple-100 rounded-2xl h-64 lg:h-80 flex items-center justify-center mb-6 relative overflow-hidden">
                <div className="text-center z-10">
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full inline-flex mb-4">
                    <MapPin className="text-green-600" size={40} />
                  </div>
                  <p className="text-gray-700 font-bold text-lg lg:text-xl mb-2">
                    {language === 'hi' ? 'दिल्ली शहर का नक्शा' : 'Delhi City Map'}
                  </p>
                  <p className="text-gray-600">
                    {language === 'hi' ? 'वेंडर लोकेशन दिखा रहे हैं' : 'Showing vendor locations'}
                  </p>
                </div>

                {/* Floating Location Dots */}
                <div className="absolute top-8 left-12 w-4 h-4 bg-red-500 rounded-full animate-pulse shadow-lg"></div>
                <div className="absolute top-16 right-20 w-3 h-3 bg-blue-500 rounded-full animate-pulse shadow-lg"></div>
                <div className="absolute bottom-12 left-20 w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg"></div>
                <div className="absolute bottom-8 right-16 w-4 h-4 bg-purple-500 rounded-full animate-pulse shadow-lg"></div>
              </div>

              {/* Enhanced Map Legend */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-red-500 rounded-full shadow-sm"></div>
                    <span className="text-gray-600 font-medium">
                      {language === 'hi' ? 'स्ट्रीट फूड' : 'Street Food'}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-blue-500 rounded-full shadow-sm"></div>
                    <span className="text-gray-600 font-medium">
                      {language === 'hi' ? 'पेय पदार्थ' : 'Beverages'}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-green-500 rounded-full shadow-sm"></div>
                    <span className="text-gray-600 font-medium">
                      {language === 'hi' ? 'मिठाई' : 'Sweets'}
                    </span>
                  </div>
                </div>
                <div className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  {filteredVendors.length} {language === 'hi' ? 'वेंडर मिले' : 'vendors found'}
                </div>
              </div>
            </div>

            {/* Vendor List */}
            <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl lg:text-2xl font-bold text-gray-900 flex items-center">
                  <Users className="mr-3 text-blue-600" size={28} />
                  {language === 'hi' ? 'नजदीकी वेंडर' : 'Nearby Vendors'}
                </h2>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-600">
                    {filteredVendors.length} {language === 'hi' ? 'मिले' : 'found'}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {filteredVendors.map((vendor) => (
                  <div key={vendor.id} className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-all duration-200 transform hover:scale-[1.02]">
                    <div className="flex space-x-6">
                      <img
                        src={vendor.image}
                        alt={vendor.name}
                        className="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl object-cover shadow-md"
                      />

                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="font-bold text-lg text-gray-900">{vendor.name}</h3>
                            <p className="text-gray-600">{vendor.specialty}</p>
                          </div>

                          <div className="flex items-center space-x-3">
                            <div className="flex items-center bg-yellow-50 px-3 py-1 rounded-full">
                              <Star className="text-yellow-400 fill-current" size={16} />
                              <span className="text-sm font-bold text-gray-900 ml-1">
                                {vendor.rating}
                              </span>
                            </div>
                            <div className="bg-orange-50 p-2 rounded-full">
                              <Award className="text-orange-500" size={16} />
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2 text-gray-600 mb-4">
                          <MapPin size={16} />
                          <span className="text-sm">{vendor.location.address}</span>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {vendor.dishes.slice(0, 4).map((dish, index) => (
                            <span key={index} className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                              {dish}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center space-x-3">
                          <button className="flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-xl font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-md">
                            <Navigation size={16} />
                            <span>{language === 'hi' ? 'दिशा' : 'Directions'}</span>
                          </button>

                          <button className="text-orange-600 hover:text-orange-700 font-semibold transition-colors">
                            {language === 'hi' ? 'विवरण देखें' : 'View Details'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Actions and Stats */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">

              {/* Add Your Location Card */}
              <div className="bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 rounded-3xl p-6 lg:p-8 text-white shadow-xl transform hover:scale-[1.02] transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full inline-flex mb-4">
                    <MapPin size={32} />
                  </div>
                  <h3 className="font-bold text-xl mb-2">
                    {language === 'hi' ? 'अपना स्थान जोड़ें' : 'Add Your Location'}
                  </h3>
                  <p className="text-white/90">
                    {language === 'hi'
                      ? 'ग्राहकों को आसानी से मिलने में मदद करें'
                      : 'Help customers find you easily'}
                  </p>
                </div>
                <button className="w-full bg-white text-orange-600 font-bold py-3 rounded-2xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  {language === 'hi' ? 'लोकेशन जोड़ें' : 'Add Location'}
                </button>
              </div>

              {/* Quick Stats */}
              <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
                <h3 className="font-bold text-gray-900 text-lg mb-4 flex items-center">
                  <TrendingUp className="mr-2 text-purple-600" size={20} />
                  {language === 'hi' ? 'त्वरित आंकड़े' : 'Quick Stats'}
                </h3>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">
                      {language === 'hi' ? 'कुल वेंडर' : 'Total Vendors'}
                    </span>
                    <span className="font-bold text-blue-600">2,450</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">
                      {language === 'hi' ? 'आज ऑनलाइन' : 'Online Today'}
                    </span>
                    <span className="font-bold text-green-600">1,847</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">
                      {language === 'hi' ? 'औसत रेटिंग' : 'Avg Rating'}
                    </span>
                    <span className="font-bold text-yellow-600">4.3 ⭐</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">
                      {language === 'hi' ? 'नए जुड़े' : 'New This Week'}
                    </span>
                    <span className="font-bold text-purple-600">+125</span>
                  </div>
                </div>
              </div>

              {/* Gamification Badge */}
              <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 rounded-3xl p-6 lg:p-8 text-white shadow-xl transform hover:scale-[1.02] transition-all duration-300">
                <div className="text-center">
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full inline-flex mb-4">
                    <Crown size={32} />
                  </div>
                  <h3 className="font-bold text-xl mb-2">
                    {language === 'hi' ? 'टॉप वेंडर बैज' : 'Top Vendor Badge'}
                  </h3>
                  <p className="text-white/90 mb-4">
                    {language === 'hi'
                      ? '100+ सकारात्मक रिव्यू पाकर गोल्ड बैज जीतें'
                      : 'Earn Gold Badge with 100+ positive reviews'}
                  </p>

                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white/90">Progress</span>
                      <span className="text-white font-bold">85/100</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-3">
                      <div className="bg-white h-3 rounded-full shadow-sm" style={{ width: '85%' }}></div>
                    </div>
                  </div>

                  <div className="text-4xl mb-2">🥇</div>
                  <p className="text-white/80 text-sm">
                    {language === 'hi' ? '15 और रिव्यू चाहिए' : '15 more reviews needed'}
                  </p>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
                <h3 className="font-bold text-gray-900 text-lg mb-4 flex items-center">
                  <Zap className="mr-2 text-orange-600" size={20} />
                  {language === 'hi' ? 'त्वरित कार्य' : 'Quick Actions'}
                </h3>

                <div className="space-y-3">
                  <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold py-3 rounded-2xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-md flex items-center justify-center">
                    <Target className="mr-2" size={18} />
                    {language === 'hi' ? 'मेरे पास खोजें' : 'Find Near Me'}
                  </button>

                  <button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold py-3 rounded-2xl hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-md flex items-center justify-center">
                    <Star className="mr-2" size={18} />
                    {language === 'hi' ? 'टॉप रेटेड' : 'Top Rated'}
                  </button>

                  <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 rounded-2xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-md flex items-center justify-center">
                    <Award className="mr-2" size={18} />
                    {language === 'hi' ? 'बैज वेंडर' : 'Badge Vendors'}
                  </button>
                </div>
              </div>

              {/* Community Stats */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-6 text-white shadow-xl">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-4">
                    <Users className="text-white" size={24} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">
                    {language === 'hi' ? 'कम्युनिटी' : 'Community'}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    {language === 'hi'
                      ? 'हजारों वेंडर्स के साथ जुड़ें'
                      : 'Connect with thousands of vendors'}
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold text-white">5.2K</p>
                      <p className="text-gray-400 text-xs">{language === 'hi' ? 'वेंडर्स' : 'Vendors'}</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white">12.8K</p>
                      <p className="text-gray-400 text-xs">{language === 'hi' ? 'कनेक्शन' : 'Connections'}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
            <h3 className="font-bold text-gray-900 text-xl mb-4">
              {language === 'hi' ? 'अपने व्यापार को बढ़ाएं' : 'Grow Your Business'}
            </h3>
            <p className="text-gray-600 mb-6">
              {language === 'hi'
                ? 'StreetHub के साथ अधिक ग्राहकों तक पहुंचें और अपनी बिक्री बढ़ाएं'
                : 'Reach more customers and increase your sales with StreetHub'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-3 px-6 rounded-2xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center">
                <MapPin className="mr-2" size={20} />
                {language === 'hi' ? 'अभी रजिस्टर करें' : 'Register Now'}
              </button>
              <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold py-3 px-6 rounded-2xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center">
                <Users className="mr-2" size={20} />
                {language === 'hi' ? 'कम्युनिटी जॉइन करें' : 'Join Community'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StreetHubPage;