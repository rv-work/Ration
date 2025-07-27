"use client"

import React, { useState } from 'react';
import {
  Users,
  Utensils,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Sparkles,
  Target,
  ThermometerSun
} from 'lucide-react';
import { useApp } from '../../../context/AppContext';
import { t } from '../../../utils/translation';
import Header from '@/components/Header';

const MenuPlannerPage: React.FC = () => {
  const { language } = useApp();
  const [footfall, setFootfall] = useState(100);
  const [weather, setWeather] = useState('sunny');
  const [plannedItems, setPlannedItems] = useState<string[]>([]);
  const [showRecommendations, setShowRecommendations] = useState(false);

  const menuItems = [
    { id: 'samosa', name: 'Samosa', nameHi: 'समोसा', icon: '🥟' },
    { id: 'chai', name: 'Chai', nameHi: 'चाय', icon: '☕' },
    { id: 'parathas', name: 'Parathas', nameHi: 'पराठा', icon: '🫓' },
    { id: 'chaat', name: 'Chaat', nameHi: 'चाट', icon: '🥗' },
    { id: 'dosa', name: 'Dosa', nameHi: 'डोसा', icon: '🥞' },
    { id: 'vada', name: 'Vada', nameHi: 'वड़ा', icon: '🍘' }
  ];

  const weatherOptions = [
    { id: 'sunny', name: 'Sunny', nameHi: 'धूप', icon: '☀️' },
    { id: 'rainy', name: 'Rainy', nameHi: 'बारिश', icon: '🌧️' },
    { id: 'cloudy', name: 'Cloudy', nameHi: 'बादल', icon: '☁️' },
    { id: 'cold', name: 'Cold', nameHi: 'ठंड', icon: '❄️' }
  ];

  const toggleItem = (itemId: string) => {
    setPlannedItems(prev =>
      prev.includes(itemId)
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const generateRecommendations = () => {
    setShowRecommendations(true);
  };

  const getRecommendations = () => {
    const recommendations = [];

    // Weather-based recommendations
    if (weather === 'rainy') {
      recommendations.push({
        type: 'weather',
        title: language === 'hi' ? 'बारिश के मौसम की सलाह' : 'Rainy Weather Tip',
        message: language === 'hi'
          ? 'बारिश में चाय और गर्म स्नैक्स की मांग 40% बढ़ जाती है'
          : 'Chai and hot snacks demand increases by 40% during rain',
        icon: '🌧️',
        color: 'from-blue-500 to-indigo-600'
      });
    }

    if (weather === 'cold') {
      recommendations.push({
        type: 'weather',
        title: language === 'hi' ? 'ठंड के मौसम की सलाह' : 'Cold Weather Tip',
        message: language === 'hi'
          ? 'ठंड में गर्म पराठे और चाय बहुत बिकते हैं'
          : 'Hot parathas and chai sell well in cold weather',
        icon: '❄️',
        color: 'from-cyan-500 to-blue-600'
      });
    }

    if (weather === 'sunny') {
      recommendations.push({
        type: 'weather',
        title: language === 'hi' ? 'धूप के मौसम की सलाह' : 'Sunny Weather Tip',
        message: language === 'hi'
          ? 'गर्मी में ठंडे पेय और हल्के स्नैक्स की मांग बढ़ती है'
          : 'Light snacks and cool beverages are in demand during sunny weather',
        icon: '☀️',
        color: 'from-yellow-500 to-orange-600'
      });
    }

    // Footfall-based recommendations
    if (footfall > 150) {
      recommendations.push({
        type: 'footfall',
        title: language === 'hi' ? 'भीड़ की तैयारी' : 'High Footfall Prep',
        message: language === 'hi'
          ? 'ज्यादा भीड़ के लिए 20% अधिक सामान तैयार रखें'
          : 'Prepare 20% extra stock for high footfall',
        icon: '👥',
        color: 'from-purple-500 to-pink-600'
      });
    }

    // Item-specific recommendations
    if (plannedItems.includes('samosa')) {
      recommendations.push({
        type: 'ingredient',
        title: language === 'hi' ? 'समोसा सामग्री' : 'Samosa Ingredients',
        message: language === 'hi'
          ? '100 समोसे के लिए: 2kg आटा, 1kg आलू, 500ml तेल'
          : 'For 100 samosas: 2kg flour, 1kg potatoes, 500ml oil',
        icon: '🥟',
        color: 'from-amber-500 to-orange-600'
      });
    }

    if (plannedItems.includes('chai')) {
      recommendations.push({
        type: 'ingredient',
        title: language === 'hi' ? 'चाय सामग्री' : 'Chai Ingredients',
        message: language === 'hi'
          ? '100 कप चाय के लिए: 200g चाय पत्ती, 2L दूध, 500g चीनी'
          : 'For 100 cups chai: 200g tea leaves, 2L milk, 500g sugar',
        icon: '☕',
        color: 'from-orange-500 to-red-600'
      });
    }

    return recommendations;
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header
        title={t('menuPlanner', language)}
        showBack={true}
      />

      {/* Main Container with max width for desktop */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Hero Section */}
        <div className="text-center mb-8 lg:mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mb-4">
            <Sparkles className="text-white" size={32} />
          </div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
            {language === 'hi' ? 'स्मार्ट मेन्यू प्लानर' : 'Smart Menu Planner'}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {language === 'hi'
              ? 'मौसम और ग्राहकों की संख्या के आधार पर अपना मेन्यू प्लान करें और बेहतर मुनाफा कमाएं'
              : 'Plan your menu based on weather and footfall to maximize profits and minimize waste'}
          </p>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">

          {/* Left Column - Input Controls */}
          <div className="lg:col-span-2 space-y-6">

            {/* Footfall and Weather in a row for desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Footfall Input */}
              <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 rounded-2xl shadow-lg">
                    <Users className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">
                      {t('expectedFootfall', language)}
                    </h3>
                    <p className="text-gray-600">
                      {language === 'hi' ? 'आज कितने ग्राहक आएंगे?' : 'Expected customers today'}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-600">50</span>
                    <span className="text-sm font-medium text-gray-600">300</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="300"
                    value={footfall}
                    onChange={(e) => setFootfall(Number(e.target.value))}
                    className="w-full h-3 bg-gradient-to-r from-blue-200 to-indigo-300 rounded-lg appearance-none cursor-pointer slider"
                    style={{
                      background: `linear-gradient(to right, #3b82f6 0%, #6366f1 ${((footfall - 50) / 250) * 100}%, #e5e7eb ${((footfall - 50) / 250) * 100}%, #e5e7eb 100%)`
                    }}
                  />
                  <div className="flex justify-center">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-2xl shadow-lg">
                      <div className="flex items-center space-x-2">
                        <Target size={20} />
                        <span className="font-bold text-xl">{footfall}</span>
                        <span className="text-sm opacity-90">
                          {language === 'hi' ? 'ग्राहक' : 'customers'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Weather Selection */}
              <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4 rounded-2xl shadow-lg">
                    <ThermometerSun className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">
                      {t('weather', language)}
                    </h3>
                    <p className="text-gray-600">
                      {language === 'hi' ? 'आज का मौसम' : "Today's weather"}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {weatherOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setWeather(option.id)}
                      className={`p-4 lg:p-5 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 ${weather === option.id
                        ? 'border-orange-500 bg-gradient-to-r from-orange-50 to-red-50 shadow-lg'
                        : 'border-gray-200 hover:border-orange-300 hover:shadow-md'
                        }`}
                    >
                      <div className="text-3xl mb-2">{option.icon}</div>
                      <p className="font-semibold text-gray-900 text-sm lg:text-base">
                        {language === 'hi' ? option.nameHi : option.name}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Menu Items Selection */}
            <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-4 rounded-2xl shadow-lg">
                  <Utensils className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">
                    {t('plannedItems', language)}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'hi' ? 'आज क्या बनाना है?' : 'What will you make today?'}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => toggleItem(item.id)}
                    className={`relative p-4 lg:p-6 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 ${plannedItems.includes(item.id)
                      ? 'border-green-500 bg-gradient-to-r from-green-50 to-emerald-50 shadow-lg'
                      : 'border-gray-200 hover:border-green-300 hover:shadow-md'
                      }`}
                  >
                    <div className="text-3xl lg:text-4xl mb-3">{item.icon}</div>
                    <p className="font-semibold text-gray-900 text-sm lg:text-base">
                      {language === 'hi' ? item.nameHi : item.name}
                    </p>
                    {plannedItems.includes(item.id) && (
                      <div className="absolute -top-2 -right-2 bg-green-500 rounded-full p-1 shadow-lg">
                        <CheckCircle className="text-white" size={16} />
                      </div>
                    )}
                  </button>
                ))}
              </div>

              {plannedItems.length > 0 && (
                <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200">
                  <p className="text-green-800 font-medium text-center">
                    {language === 'hi'
                      ? `${plannedItems.length} आइटम चुने गए हैं`
                      : `${plannedItems.length} items selected`}
                  </p>
                </div>
              )}
            </div>

            {/* Generate Recommendations Button */}
            <button
              onClick={generateRecommendations}
              disabled={plannedItems.length === 0}
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-4 lg:py-6 px-8 rounded-3xl disabled:from-gray-300 disabled:to-gray-400 hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100 shadow-lg hover:shadow-xl"
            >
              <div className="flex items-center justify-center space-x-3">
                <TrendingUp size={24} />
                <span className="text-lg">
                  {t('getRecommendations', language)}
                </span>
              </div>
            </button>
          </div>

          {/* Right Column - Recommendations */}
          <div className="lg:col-span-1">
            {showRecommendations ? (
              <div className="sticky top-6">
                <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <Sparkles className="mr-3 text-orange-500" size={24} />
                    {t('recommendations', language)}
                  </h3>

                  <div className="space-y-4">
                    {getRecommendations().map((rec, index) => (
                      <div key={index} className={`relative overflow-hidden rounded-2xl p-4 bg-gradient-to-r ${rec.color} text-white shadow-lg transform hover:scale-105 transition-all duration-300`}>
                        <div className="flex items-start space-x-3">
                          <div className="text-2xl bg-white bg-opacity-20 p-2 rounded-xl">
                            {rec.icon}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold mb-2">{rec.title}</h4>
                            <p className="text-sm opacity-90 leading-relaxed">{rec.message}</p>
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* Waste Reduction Tip */}
                    <div className="bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl p-4 text-white shadow-lg">
                      <div className="flex items-start space-x-3">
                        <div className="bg-white bg-opacity-20 p-2 rounded-xl">
                          <AlertCircle size={20} />
                        </div>
                        <div>
                          <h4 className="font-bold mb-2">
                            {language === 'hi' ? 'बर्बादी कम करने का टिप' : 'Waste Reduction Tip'}
                          </h4>
                          <p className="text-sm opacity-90 leading-relaxed">
                            {language === 'hi'
                              ? 'कम मात्रा से शुरू करें और मांग के अनुसार बढ़ाते जाएं। यह 15% तक बर्बादी कम करता है।'
                              : 'Start with smaller quantities and scale up based on demand. This reduces waste by up to 15%.'}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-lg border border-gray-100 text-center">
                <div className="text-gray-400 mb-4">
                  <TrendingUp size={48} className="mx-auto" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">
                  {language === 'hi' ? 'सुझाव यहाँ दिखेंगे' : 'Recommendations will appear here'}
                </h3>
                <p className="text-gray-600 text-sm">
                  {language === 'hi'
                    ? 'कुछ आइटम चुनें और सुझाव बटन दबाएं'
                    : 'Select some items and click get recommendations'}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3b82f6, #6366f1);
          cursor: pointer;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          border: 2px solid white;
        }
        
        .slider::-moz-range-thumb {
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3b82f6, #6366f1);
          cursor: pointer;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          border: 2px solid white;
        }
      `}</style>
    </div>
  );
};

export default MenuPlannerPage;