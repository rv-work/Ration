"use client"


import React, { useState } from 'react';
import { MapPin, Search, Star, Navigation, Award } from 'lucide-react';
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

      <div className="p-4 space-y-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={language === 'hi' ? 'खोजें: "पास में सबसे अच्छा पाव भाजी"' : 'Search: "Best Pav Bhaji near me"'}
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none"
          />
        </div>

        {/* Add Your Location Card */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-6 text-white">
          <div className="flex items-center space-x-4">
            <div className="bg-white/20 p-3 rounded-xl">
              <MapPin size={24} />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg mb-1">
                {language === 'hi' ? 'अपना स्थान जोड़ें' : 'Add Your Location'}
              </h3>
              <p className="text-white/90 text-sm">
                {language === 'hi'
                  ? 'ग्राहकों को आसानी से मिलने में मदद करें'
                  : 'Help customers find you easily'}
              </p>
            </div>
            <button className="bg-white text-orange-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              {language === 'hi' ? 'जोड़ें' : 'Add'}
            </button>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-xl h-48 flex items-center justify-center mb-4">
            <div className="text-center">
              <MapPin className="text-green-600 mx-auto mb-2" size={32} />
              <p className="text-gray-700 font-medium">
                {language === 'hi' ? 'दिल्ली शहर का नक्शा' : 'Delhi City Map'}
              </p>
              <p className="text-gray-600 text-sm">
                {language === 'hi' ? 'वेंडर लोकेशन दिखा रहे हैं' : 'Showing vendor locations'}
              </p>
            </div>
          </div>

          {/* Map Legend */}
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-gray-600">
                  {language === 'hi' ? 'स्ट्रीट फूड' : 'Street Food'}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-gray-600">
                  {language === 'hi' ? 'पेय पदार्थ' : 'Beverages'}
                </span>
              </div>
            </div>
            <button className="text-orange-600 hover:text-orange-700 font-medium">
              {language === 'hi' ? 'पूर्ण मानचित्र' : 'Full Map'}
            </button>
          </div>
        </div>

        {/* Vendor List */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-900">
              {language === 'hi' ? 'नजदीकी वेंडर' : 'Nearby Vendors'}
            </h2>
            <span className="text-gray-600 text-sm">
              {filteredVendors.length} {language === 'hi' ? 'मिले' : 'found'}
            </span>
          </div>

          <div className="space-y-4">
            {filteredVendors.map((vendor) => (
              <div key={vendor.id} className="bg-white rounded-2xl p-4 shadow-sm">
                <div className="flex space-x-4">
                  <img
                    src={vendor.image}
                    alt={vendor.name}
                    className="w-16 h-16 rounded-xl object-cover"
                  />

                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-gray-900">{vendor.name}</h3>
                        <p className="text-gray-600 text-sm">{vendor.specialty}</p>
                      </div>

                      <div className="flex items-center space-x-2">
                        <div className="flex items-center">
                          <Star className="text-yellow-400 fill-current" size={14} />
                          <span className="text-sm font-medium text-gray-900 ml-1">
                            {vendor.rating}
                          </span>
                        </div>
                        <Award className="text-orange-500" size={14} />
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 text-gray-600 text-sm mb-2">
                      <MapPin size={14} />
                      <span className="truncate">{vendor.location.address}</span>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-3">
                      {vendor.dishes.slice(0, 3).map((dish, index) => (
                        <span key={index} className="bg-orange-50 text-orange-700 px-2 py-1 rounded-full text-xs">
                          {dish}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center space-x-2">
                      <button className="flex items-center space-x-1 bg-orange-500 text-white px-3 py-1.5 rounded-lg text-sm hover:bg-orange-600 transition-colors">
                        <Navigation size={14} />
                        <span>{language === 'hi' ? 'दिशा' : 'Directions'}</span>
                      </button>

                      <button className="text-orange-600 hover:text-orange-700 font-medium text-sm">
                        {language === 'hi' ? 'विवरण देखें' : 'View Details'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gamification Badge */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 text-white">
          <div className="flex items-center space-x-4">
            <div className="bg-white/20 p-3 rounded-xl">
              <Award size={24} />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg mb-1">
                {language === 'hi' ? 'टॉप वेंडर बैज' : 'Top Vendor Badge'}
              </h3>
              <p className="text-white/90 text-sm">
                {language === 'hi'
                  ? '100+ सकारात्मक रिव्यू पाकर गोल्ड बैज जीतें'
                  : 'Earn Gold Badge with 100+ positive reviews'}
              </p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold">🥇</p>
              <p className="text-xs text-white/80">85/100</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StreetHubPage;