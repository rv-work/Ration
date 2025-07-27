"use client"

import React, { useState } from 'react';
import {
  Users,
  Cloud,
  Utensils,
  TrendingUp,
  AlertCircle,
  CheckCircle
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
        icon: '🌧️'
      });
    }

    if (weather === 'cold') {
      recommendations.push({
        type: 'weather',
        title: language === 'hi' ? 'ठंड के मौसम की सलाह' : 'Cold Weather Tip',
        message: language === 'hi'
          ? 'ठंड में गर्म पराठे और चाय बहुत बिकते हैं'
          : 'Hot parathas and chai sell well in cold weather',
        icon: '❄️'
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
        icon: '👥'
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
        icon: '🥟'
      });
    }

    if (plannedItems.includes('chai')) {
      recommendations.push({
        type: 'ingredient',
        title: language === 'hi' ? 'चाय सामग्री' : 'Chai Ingredients',
        message: language === 'hi'
          ? '100 कप चाय के लिए: 200g चाय पत्ती, 2L दूध, 500g चीनी'
          : 'For 100 cups chai: 200g tea leaves, 2L milk, 500g sugar',
        icon: '☕'
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

      <div className="p-4 space-y-6">
        {/* Footfall Input */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-blue-100 p-3 rounded-xl">
              <Users className="text-blue-600" size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">
                {t('expectedFootfall', language)}
              </h3>
              <p className="text-gray-600 text-sm">
                {language === 'hi' ? 'आज कितने ग्राहक आएंगे?' : 'How many customers today?'}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <input
              type="range"
              min="50"
              max="300"
              value={footfall}
              onChange={(e) => setFootfall(Number(e.target.value))}
              className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="bg-blue-50 px-4 py-2 rounded-lg">
              <span className="text-blue-600 font-bold text-lg">{footfall}</span>
            </div>
          </div>
        </div>

        {/* Weather Selection */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-orange-100 p-3 rounded-xl">
              <Cloud className="text-orange-600" size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">
                {t('weather', language)}
              </h3>
              <p className="text-gray-600 text-sm">
                {language === 'hi' ? 'आज का मौसम कैसा है?' : "What's the weather like?"}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {weatherOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setWeather(option.id)}
                className={`p-3 rounded-xl border-2 transition-colors ${weather === option.id
                  ? 'border-orange-500 bg-orange-50'
                  : 'border-gray-200 hover:border-gray-300'
                  }`}
              >
                <div className="text-2xl mb-1">{option.icon}</div>
                <p className="font-medium text-gray-900">
                  {language === 'hi' ? option.nameHi : option.name}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Selection */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-green-100 p-3 rounded-xl">
              <Utensils className="text-green-600" size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">
                {t('plannedItems', language)}
              </h3>
              <p className="text-gray-600 text-sm">
                {language === 'hi' ? 'आज क्या बनाना है?' : 'What will you make today?'}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => toggleItem(item.id)}
                className={`p-4 rounded-xl border-2 transition-colors ${plannedItems.includes(item.id)
                  ? 'border-green-500 bg-green-50'
                  : 'border-gray-200 hover:border-gray-300'
                  }`}
              >
                <div className="text-2xl mb-2">{item.icon}</div>
                <p className="font-medium text-gray-900">
                  {language === 'hi' ? item.nameHi : item.name}
                </p>
                {plannedItems.includes(item.id) && (
                  <CheckCircle className="text-green-500 mx-auto mt-2" size={16} />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Generate Recommendations Button */}
        <button
          onClick={generateRecommendations}
          disabled={plannedItems.length === 0}
          className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-4 px-6 rounded-2xl disabled:from-gray-300 disabled:to-gray-400 hover:from-orange-600 hover:to-red-600 transition-all"
        >
          <TrendingUp className="inline mr-2" size={20} />
          {t('getRecommendations', language)}
        </button>

        {/* Recommendations */}
        {showRecommendations && (
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900">
              {t('recommendations', language)}
            </h3>

            {getRecommendations().map((rec, index) => (
              <div key={index} className="bg-white rounded-2xl p-4 shadow-sm border-l-4 border-orange-500">
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">{rec.icon}</div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">{rec.title}</h4>
                    <p className="text-gray-600 text-sm">{rec.message}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-4 border border-green-200">
              <div className="flex items-start space-x-3">
                <AlertCircle className="text-green-600" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {language === 'hi' ? 'बर्बादी कम करने का टिप' : 'Waste Reduction Tip'}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {language === 'hi'
                      ? 'कम मात्रा से शुरू करें और मांग के अनुसार बढ़ाते जाएं। यह 15% तक बर्बादी कम करता है।'
                      : 'Start with smaller quantities and scale up based on demand. This reduces waste by up to 15%.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuPlannerPage;