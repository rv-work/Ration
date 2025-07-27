"use client"

import React, { useState } from 'react';
import { CreditCard, Star, TrendingUp, Shield, Award, QrCode, CheckCircle } from 'lucide-react';
import { useApp } from '../../../context/AppContext';
import { t } from '../../../utils/translation';
import Header from '@/components/Header';

const SaathiCardPage: React.FC = () => {
  const { language, user } = useApp();
  const [activeTab, setActiveTab] = useState<'card' | 'credit' | 'history'>('card');

  const trustScore = user?.trustScore || 85;
  const creditLimit = Math.floor(trustScore * 100);
  const usedCredit = Math.floor(creditLimit * 0.3);
  const availableCredit = creditLimit - usedCredit;

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header
        title={t('saathicard', language)}
        showBack={true}
      />

      <div className="p-4 space-y-6">
        {/* Digital ID Card */}
        <div className="relative">
          <div className="bg-gradient-to-br from-purple-600 via-blue-600 to-teal-500 rounded-3xl p-6 text-white shadow-2xl">
            {/* Card Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-bold">SaathiCard</h2>
                <p className="text-white/80 text-sm">
                  {language === 'hi' ? 'डिजिटल वेंडर आईडी' : 'Digital Vendor ID'}
                </p>
              </div>
              <div className="bg-white/20 p-2 rounded-xl">
                <QrCode size={24} />
              </div>
            </div>

            {/* Vendor Info */}
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-1">{user?.name || 'Rajesh Kumar'}</h3>
              <p className="text-white/90 text-sm mb-2">{user?.vendorType || 'Street Food Vendor'}</p>
              <p className="text-white/80 text-xs">{user?.location?.address || 'Connaught Place, Delhi'}</p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 mb-1">
                  <Star className="text-yellow-300 fill-current" size={16} />
                  <span className="font-bold">{user?.rating || 4.5}</span>
                </div>
                <p className="text-white/80 text-xs">
                  {language === 'hi' ? 'रेटिंग' : 'Rating'}
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 mb-1">
                  <Shield className="text-green-300" size={16} />
                  <span className="font-bold">{trustScore}</span>
                </div>
                <p className="text-white/80 text-xs">
                  {language === 'hi' ? 'ट्रस्ट स्कोर' : 'Trust Score'}
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 mb-1">
                  <Award className="text-orange-300" size={16} />
                  <span className="font-bold">Gold</span>
                </div>
                <p className="text-white/80 text-xs">
                  {language === 'hi' ? 'स्तर' : 'Level'}
                </p>
              </div>
            </div>

            {/* Card Number */}
            <div className="bg-white/10 rounded-xl p-3">
              <p className="text-white/80 text-xs mb-1">
                {language === 'hi' ? 'कार्ड नंबर' : 'Card Number'}
              </p>
              <p className="font-mono text-lg tracking-wider">SC 2024 0001 2345</p>
            </div>

            {/* Card Decoration */}
            <div className="absolute top-4 right-4 opacity-10">
              <div className="text-6xl">🇮🇳</div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex bg-white rounded-2xl p-1 shadow-sm">
          <button
            onClick={() => setActiveTab('card')}
            className={`flex-1 py-3 px-4 rounded-xl font-medium transition-colors text-sm ${activeTab === 'card'
              ? 'bg-purple-500 text-white'
              : 'text-gray-600 hover:text-gray-900'
              }`}
          >
            {language === 'hi' ? 'कार्ड जानकारी' : 'Card Info'}
          </button>
          <button
            onClick={() => setActiveTab('credit')}
            className={`flex-1 py-3 px-4 rounded-xl font-medium transition-colors text-sm ${activeTab === 'credit'
              ? 'bg-purple-500 text-white'
              : 'text-gray-600 hover:text-gray-900'
              }`}
          >
            {language === 'hi' ? 'क्रेडिट' : 'Credit'}
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`flex-1 py-3 px-4 rounded-xl font-medium transition-colors text-sm ${activeTab === 'history'
              ? 'bg-purple-500 text-white'
              : 'text-gray-600 hover:text-gray-900'
              }`}
          >
            {language === 'hi' ? 'इतिहास' : 'History'}
          </button>
        </div>

        {/* Card Info Tab */}
        {activeTab === 'card' && (
          <div className="space-y-4">
            {/* Verification Status */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-green-100 p-3 rounded-xl">
                  <CheckCircle className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {language === 'hi' ? 'सत्यापन स्थिति' : 'Verification Status'}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {language === 'hi' ? 'आपका खाता सत्यापित है' : 'Your account is verified'}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-sm text-gray-700">
                    {language === 'hi' ? 'फोन सत्यापित' : 'Phone Verified'}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-sm text-gray-700">
                    {language === 'hi' ? 'पता सत्यापित' : 'Address Verified'}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-sm text-gray-700">
                    {language === 'hi' ? 'व्यापार सत्यापित' : 'Business Verified'}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-orange-500" size={16} />
                  <span className="text-sm text-gray-700">
                    {language === 'hi' ? 'स्वच्छता जांच' : 'Hygiene Check'}
                  </span>
                </div>
              </div>
            </div>

            {/* Trust Score Breakdown */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4">
                {language === 'hi' ? 'ट्रस्ट स्कोर विवरण' : 'Trust Score Breakdown'}
              </h3>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">
                      {language === 'hi' ? 'भुगतान इतिहास' : 'Payment History'}
                    </span>
                    <span className="text-sm font-medium">35/40</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '87.5%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">
                      {language === 'hi' ? 'ग्राहक रेटिंग' : 'Customer Ratings'}
                    </span>
                    <span className="text-sm font-medium">25/30</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '83.3%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">
                      {language === 'hi' ? 'दस्तावेज सत्यापन' : 'Document Verification'}
                    </span>
                    <span className="text-sm font-medium">25/30</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: '83.3%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Credit Tab */}
        {activeTab === 'credit' && (
          <div className="space-y-4">
            {/* Credit Overview */}
            <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl p-6 text-white">
              <div className="flex items-center space-x-3 mb-4">
                <CreditCard size={24} />
                <h3 className="font-bold text-lg">
                  {language === 'hi' ? 'क्रेडिट सुविधा' : 'Credit Facility'}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-green-100 text-sm">
                    {language === 'hi' ? 'उपलब्ध क्रेडिट' : 'Available Credit'}
                  </p>
                  <p className="text-2xl font-bold">₹{availableCredit.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-green-100 text-sm">
                    {language === 'hi' ? 'कुल सीमा' : 'Total Limit'}
                  </p>
                  <p className="text-2xl font-bold">₹{creditLimit.toLocaleString()}</p>
                </div>
              </div>

              <div className="mt-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-green-100 text-sm">
                    {language === 'hi' ? 'उपयोग किया गया' : 'Used'}
                  </span>
                  <span className="text-white font-medium">₹{usedCredit.toLocaleString()}</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div
                    className="bg-white h-2 rounded-full"
                    style={{ width: `${(usedCredit / creditLimit) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Credit Benefits */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4">
                {language === 'hi' ? 'क्रेडिट लाभ' : 'Credit Benefits'}
              </h3>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <TrendingUp className="text-blue-600" size={16} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">
                      {language === 'hi' ? 'लचीला भुगतान' : 'Flexible Payment'}
                    </p>
                    <p className="text-gray-600 text-xs">
                      {language === 'hi' ? '30 दिन तक का समय' : 'Up to 30 days payment terms'}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Shield className="text-green-600" size={16} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">
                      {language === 'hi' ? 'कोई छुपी फीस नहीं' : 'No Hidden Charges'}
                    </p>
                    <p className="text-gray-600 text-xs">
                      {language === 'hi' ? 'पारदर्शी मूल्य निर्धारण' : 'Transparent pricing'}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Award className="text-purple-600" size={16} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">
                      {language === 'hi' ? 'रिवार्ड पॉइंट्स' : 'Reward Points'}
                    </p>
                    <p className="text-gray-600 text-xs">
                      {language === 'hi' ? 'हर खरीदारी पर पॉइंट्स' : 'Earn points on every purchase'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Apply for Credit Increase */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">
                {language === 'hi' ? 'क्रेडिट सीमा बढ़ाएं' : 'Increase Credit Limit'}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {language === 'hi'
                  ? 'आपका ट्रस्ट स्कोर अच्छा है। अधिक क्रेडिट के लिए आवेदन करें।'
                  : 'Your trust score is good. Apply for higher credit limit.'}
              </p>
              <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium py-3 rounded-xl hover:from-purple-600 hover:to-blue-600 transition-all">
                {language === 'hi' ? 'आवेदन करें' : 'Apply Now'}
              </button>
            </div>
          </div>
        )}

        {/* History Tab */}
        {activeTab === 'history' && (
          <div className="space-y-4">
            {/* Recent Transactions */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4">
                {language === 'hi' ? 'हाल की गतिविधि' : 'Recent Activity'}
              </h3>

              <div className="space-y-4">
                <div className="flex items-center space-x-3 pb-3 border-b border-gray-100">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <TrendingUp className="text-green-600" size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900 text-sm">
                      {language === 'hi' ? 'ट्रस्ट स्कोर बढ़ा' : 'Trust Score Increased'}
                    </p>
                    <p className="text-gray-600 text-xs">82 → 85 (+3 points)</p>
                  </div>
                  <span className="text-gray-500 text-xs">2 {language === 'hi' ? 'दिन पहले' : 'days ago'}</span>
                </div>

                <div className="flex items-center space-x-3 pb-3 border-b border-gray-100">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <CreditCard className="text-blue-600" size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900 text-sm">
                      {language === 'hi' ? 'क्रेडिट का उपयोग' : 'Credit Used'}
                    </p>
                    <p className="text-gray-600 text-xs">₹2,500 for raw materials</p>
                  </div>
                  <span className="text-gray-500 text-xs">5 {language === 'hi' ? 'दिन पहले' : 'days ago'}</span>
                </div>

                <div className="flex items-center space-x-3 pb-3">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Award className="text-purple-600" size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900 text-sm">
                      {language === 'hi' ? 'गोल्ड स्तर प्राप्त' : 'Gold Level Achieved'}
                    </p>
                    <p className="text-gray-600 text-xs">
                      {language === 'hi' ? '100+ सफल लेनदेन' : '100+ successful transactions'}
                    </p>
                  </div>
                  <span className="text-gray-500 text-xs">1 {language === 'hi' ? 'सप्ताह पहले' : 'week ago'}</span>
                </div>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-4 shadow-sm text-center">
                <p className="text-2xl font-bold text-blue-600">156</p>
                <p className="text-gray-600 text-sm">
                  {language === 'hi' ? 'कुल ऑर्डर' : 'Total Orders'}
                </p>
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-sm text-center">
                <p className="text-2xl font-bold text-green-600">₹45,280</p>
                <p className="text-gray-600 text-sm">
                  {language === 'hi' ? 'कुल खरीदारी' : 'Total Purchases'}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SaathiCardPage;