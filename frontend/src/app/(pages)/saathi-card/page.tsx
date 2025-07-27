"use client"

import React, { useState } from 'react';
import { CreditCard, Star, TrendingUp, Shield, Award, QrCode, CheckCircle, Sparkles, BadgeCheck, Crown, Zap } from 'lucide-react';
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

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* Hero Section */}
        <div className="text-center mb-8 lg:mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mb-6 shadow-lg">
            <BadgeCheck className="text-white" size={40} />
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            {language === 'hi' ? 'आपका SaathiCard' : 'Your SaathiCard'}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {language === 'hi'
              ? 'आपकी डिजिटल पहचान और क्रेडिट सुविधा - एक ही जगह पर'
              : 'Your digital identity and credit facility - all in one place'}
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left Column - Card and Tabs */}
          <div className="lg:col-span-2 space-y-8">

            {/* Digital ID Card */}
            <div className="relative group">
              <div className="bg-gradient-to-br from-purple-600 via-blue-600 to-teal-500 rounded-3xl p-8 lg:p-10 text-white shadow-2xl transform transition-all duration-300 hover:scale-[1.02] hover:shadow-3xl">

                {/* Card Header */}
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-bold flex items-center">
                      <Crown className="mr-3 text-yellow-300" size={28} />
                      SaathiCard
                    </h2>
                    <p className="text-white/90 text-base lg:text-lg">
                      {language === 'hi' ? 'डिजिटल वेंडर आईडी' : 'Digital Vendor ID'}
                    </p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl hover:bg-white/30 transition-colors">
                    <QrCode size={32} />
                  </div>
                </div>

                {/* Vendor Info */}
                <div className="mb-8">
                  <h3 className="text-2xl lg:text-3xl font-bold mb-2">{user?.name || 'Rajesh Kumar'}</h3>
                  <p className="text-white/95 text-lg mb-3">{user?.vendorType || 'Street Food Vendor'}</p>
                  <p className="text-white/85 text-base">{user?.location?.address || 'Connaught Place, Delhi'}</p>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-6 mb-6">
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <Star className="text-yellow-300 fill-current" size={20} />
                      <span className="font-bold text-xl">{user?.rating || 4.5}</span>
                    </div>
                    <p className="text-white/85 text-sm">
                      {language === 'hi' ? 'रेटिंग' : 'Rating'}
                    </p>
                  </div>

                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <Shield className="text-green-300" size={20} />
                      <span className="font-bold text-xl">{trustScore}</span>
                    </div>
                    <p className="text-white/85 text-sm">
                      {language === 'hi' ? 'ट्रस्ट स्कोर' : 'Trust Score'}
                    </p>
                  </div>

                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <Award className="text-orange-300" size={20} />
                      <span className="font-bold text-xl">Gold</span>
                    </div>
                    <p className="text-white/85 text-sm">
                      {language === 'hi' ? 'स्तर' : 'Level'}
                    </p>
                  </div>
                </div>

                {/* Card Number */}
                <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-4">
                  <p className="text-white/90 text-sm mb-2">
                    {language === 'hi' ? 'कार्ड नंबर' : 'Card Number'}
                  </p>
                  <p className="font-mono text-xl lg:text-2xl tracking-wider font-bold">SC 2024 0001 2345</p>
                </div>

                {/* Card Decorations */}
                <div className="absolute top-6 right-6 opacity-20">
                  <div className="text-8xl lg:text-9xl">🇮🇳</div>
                </div>
                <div className="absolute bottom-6 left-6 opacity-10">
                  <Sparkles size={60} />
                </div>
              </div>
            </div>

            {/* Enhanced Tabs */}
            <div className="bg-white rounded-3xl p-2 shadow-lg border border-gray-100">
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => setActiveTab('card')}
                  className={`py-4 px-6 rounded-2xl font-semibold transition-all duration-300 text-sm lg:text-base ${activeTab === 'card'
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg transform scale-105'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                >
                  <BadgeCheck className="inline mr-2" size={18} />
                  {language === 'hi' ? 'कार्ड जानकारी' : 'Card Info'}
                </button>
                <button
                  onClick={() => setActiveTab('credit')}
                  className={`py-4 px-6 rounded-2xl font-semibold transition-all duration-300 text-sm lg:text-base ${activeTab === 'credit'
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg transform scale-105'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                >
                  <CreditCard className="inline mr-2" size={18} />
                  {language === 'hi' ? 'क्रेडिट' : 'Credit'}
                </button>
                <button
                  onClick={() => setActiveTab('history')}
                  className={`py-4 px-6 rounded-2xl font-semibold transition-all duration-300 text-sm lg:text-base ${activeTab === 'history'
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg transform scale-105'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                >
                  <TrendingUp className="inline mr-2" size={18} />
                  {language === 'hi' ? 'इतिहास' : 'History'}
                </button>
              </div>
            </div>

            {/* Tab Content */}
            <div className="space-y-6">

              {/* Card Info Tab */}
              {activeTab === 'card' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                  {/* Verification Status */}
                  <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-4 rounded-2xl shadow-lg">
                        <CheckCircle className="text-white" size={28} />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg">
                          {language === 'hi' ? 'सत्यापन स्थिति' : 'Verification Status'}
                        </h3>
                        <p className="text-gray-600">
                          {language === 'hi' ? 'आपका खाता सत्यापित है' : 'Your account is verified'}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-2xl">
                        <CheckCircle className="text-green-600" size={20} />
                        <span className="text-gray-700 font-medium">
                          {language === 'hi' ? 'फोन सत्यापित' : 'Phone Verified'}
                        </span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-2xl">
                        <CheckCircle className="text-green-600" size={20} />
                        <span className="text-gray-700 font-medium">
                          {language === 'hi' ? 'पता सत्यापित' : 'Address Verified'}
                        </span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-2xl">
                        <CheckCircle className="text-green-600" size={20} />
                        <span className="text-gray-700 font-medium">
                          {language === 'hi' ? 'व्यापार सत्यापित' : 'Business Verified'}
                        </span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-2xl">
                        <CheckCircle className="text-orange-500" size={20} />
                        <span className="text-gray-700 font-medium">
                          {language === 'hi' ? 'स्वच्छता जांच' : 'Hygiene Check'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Trust Score Breakdown */}
                  <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <h3 className="font-bold text-gray-900 text-lg mb-6 flex items-center">
                      <Shield className="mr-3 text-blue-600" size={24} />
                      {language === 'hi' ? 'ट्रस्ट स्कोर विवरण' : 'Trust Score Breakdown'}
                    </h3>

                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-gray-700 font-medium">
                            {language === 'hi' ? 'भुगतान इतिहास' : 'Payment History'}
                          </span>
                          <span className="text-lg font-bold text-green-600">35/40</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div className="bg-gradient-to-r from-green-500 to-emerald-600 h-3 rounded-full shadow-sm" style={{ width: '87.5%' }}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-gray-700 font-medium">
                            {language === 'hi' ? 'ग्राहक रेटिंग' : 'Customer Ratings'}
                          </span>
                          <span className="text-lg font-bold text-blue-600">25/30</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div className="bg-gradient-to-r from-blue-500 to-cyan-600 h-3 rounded-full shadow-sm" style={{ width: '83.3%' }}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-gray-700 font-medium">
                            {language === 'hi' ? 'दस्तावेज सत्यापन' : 'Document Verification'}
                          </span>
                          <span className="text-lg font-bold text-purple-600">25/30</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div className="bg-gradient-to-r from-purple-500 to-pink-600 h-3 rounded-full shadow-sm" style={{ width: '83.3%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Credit Tab */}
              {activeTab === 'credit' && (
                <div className="space-y-6">

                  {/* Credit Overview */}
                  <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-3xl p-6 lg:p-8 text-white shadow-xl">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="bg-white/20 p-3 rounded-2xl">
                        <CreditCard size={32} />
                      </div>
                      <h3 className="font-bold text-xl lg:text-2xl">
                        {language === 'hi' ? 'क्रेडिट सुविधा' : 'Credit Facility'}
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                        <p className="text-green-100 text-sm mb-1">
                          {language === 'hi' ? 'उपलब्ध क्रेडिट' : 'Available Credit'}
                        </p>
                        <p className="text-3xl lg:text-4xl font-bold">₹{availableCredit.toLocaleString()}</p>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                        <p className="text-green-100 text-sm mb-1">
                          {language === 'hi' ? 'कुल सीमा' : 'Total Limit'}
                        </p>
                        <p className="text-3xl lg:text-4xl font-bold">₹{creditLimit.toLocaleString()}</p>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-green-100 font-medium">
                          {language === 'hi' ? 'उपयोग किया गया' : 'Used'}
                        </span>
                        <span className="text-white font-bold text-lg">₹{usedCredit.toLocaleString()}</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-3">
                        <div
                          className="bg-white h-3 rounded-full shadow-sm"
                          style={{ width: `${(usedCredit / creditLimit) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Credit Benefits */}
                    <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                      <h3 className="font-bold text-gray-900 text-lg mb-6 flex items-center">
                        <Sparkles className="mr-3 text-purple-600" size={24} />
                        {language === 'hi' ? 'क्रेडिट लाभ' : 'Credit Benefits'}
                      </h3>

                      <div className="space-y-4">
                        <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-2xl">
                          <div className="bg-blue-500 p-3 rounded-xl">
                            <TrendingUp className="text-white" size={20} />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">
                              {language === 'hi' ? 'लचीला भुगतान' : 'Flexible Payment'}
                            </p>
                            <p className="text-gray-600 text-sm">
                              {language === 'hi' ? '30 दिन तक का समय' : 'Up to 30 days payment terms'}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-2xl">
                          <div className="bg-green-500 p-3 rounded-xl">
                            <Shield className="text-white" size={20} />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">
                              {language === 'hi' ? 'कोई छुपी फीस नहीं' : 'No Hidden Charges'}
                            </p>
                            <p className="text-gray-600 text-sm">
                              {language === 'hi' ? 'पारदर्शी मूल्य निर्धारण' : 'Transparent pricing'}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-4 p-4 bg-purple-50 rounded-2xl">
                          <div className="bg-purple-500 p-3 rounded-xl">
                            <Award className="text-white" size={20} />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">
                              {language === 'hi' ? 'रिवार्ड पॉइंट्स' : 'Reward Points'}
                            </p>
                            <p className="text-gray-600 text-sm">
                              {language === 'hi' ? 'हर खरीदारी पर पॉइंट्स' : 'Earn points on every purchase'}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Apply for Credit Increase */}
                    <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                      <div className="text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4">
                          <Zap className="text-white" size={32} />
                        </div>
                        <h3 className="font-bold text-gray-900 text-lg mb-3">
                          {language === 'hi' ? 'क्रेडिट सीमा बढ़ाएं' : 'Increase Credit Limit'}
                        </h3>
                        <p className="text-gray-600 mb-6">
                          {language === 'hi'
                            ? 'आपका ट्रस्ट स्कोर अच्छा है। अधिक क्रेडिट के लिए आवेदन करें।'
                            : 'Your trust score is good. Apply for higher credit limit.'}
                        </p>
                        <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-4 rounded-2xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                          {language === 'hi' ? 'आवेदन करें' : 'Apply Now'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* History Tab */}
              {activeTab === 'history' && (
                <div className="space-y-6">

                  {/* Recent Transactions */}
                  <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <h3 className="font-bold text-gray-900 text-lg mb-6 flex items-center">
                      <TrendingUp className="mr-3 text-orange-600" size={24} />
                      {language === 'hi' ? 'हाल की गतिविधि' : 'Recent Activity'}
                    </h3>

                    <div className="space-y-4">
                      <div className="flex items-center space-x-4 pb-4 border-b border-gray-100">
                        <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-3 rounded-2xl">
                          <TrendingUp className="text-white" size={20} />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-gray-900">
                            {language === 'hi' ? 'ट्रस्ट स्कोर बढ़ा' : 'Trust Score Increased'}
                          </p>
                          <p className="text-gray-600 text-sm">82 → 85 (+3 points)</p>
                        </div>
                        <span className="text-gray-500 text-sm bg-gray-100 px-3 py-1 rounded-full">
                          2 {language === 'hi' ? 'दिन पहले' : 'days ago'}
                        </span>
                      </div>

                      <div className="flex items-center space-x-4 pb-4 border-b border-gray-100">
                        <div className="bg-gradient-to-r from-blue-500 to-cyan-600 p-3 rounded-2xl">
                          <CreditCard className="text-white" size={20} />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-gray-900">
                            {language === 'hi' ? 'क्रेडिट का उपयोग' : 'Credit Used'}
                          </p>
                          <p className="text-gray-600 text-sm">₹2,500 for raw materials</p>
                        </div>
                        <span className="text-gray-500 text-sm bg-gray-100 px-3 py-1 rounded-full">
                          5 {language === 'hi' ? 'दिन पहले' : 'days ago'}
                        </span>
                      </div>

                      <div className="flex items-center space-x-4 pb-4">
                        <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-3 rounded-2xl">
                          <Award className="text-white" size={20} />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-gray-900">
                            {language === 'hi' ? 'गोल्ड स्तर प्राप्त' : 'Gold Level Achieved'}
                          </p>
                          <p className="text-gray-600 text-sm">
                            {language === 'hi' ? '100+ सफल लेनदेन' : '100+ successful transactions'}
                          </p>
                        </div>
                        <span className="text-gray-500 text-sm bg-gray-100 px-3 py-1 rounded-full">
                          1 {language === 'hi' ? 'सप्ताह पहले' : 'week ago'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Performance Metrics */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center transform hover:scale-105">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full mb-4">
                        <TrendingUp className="text-white" size={32} />
                      </div>
                      <p className="text-4xl font-bold text-blue-600 mb-2">156</p>
                      <p className="text-gray-600 font-medium">
                        {language === 'hi' ? 'कुल ऑर्डर' : 'Total Orders'}
                      </p>
                    </div>

                    <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center transform hover:scale-105">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mb-4">
                        <CreditCard className="text-white" size={32} />
                      </div>
                      <p className="text-4xl font-bold text-green-600 mb-2">₹45,280</p>
                      <p className="text-gray-600 font-medium">
                        {language === 'hi' ? 'कुल खरीदारी' : 'Total Purchases'}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Quick Stats & Actions */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">

              {/* Quick Stats */}
              <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
                <h3 className="font-bold text-gray-900 text-lg mb-4 flex items-center">
                  <Sparkles className="mr-2 text-purple-600" size={20} />
                  {language === 'hi' ? 'त्वरित आंकड़े' : 'Quick Stats'}
                </h3>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">
                      {language === 'hi' ? 'सदस्यता' : 'Member Since'}
                    </span>
                    <span className="font-semibold text-gray-900">Jan 2024</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">
                      {language === 'hi' ? 'अंतिम लॉगिन' : 'Last Login'}
                    </span>
                    <span className="font-semibold text-gray-900">
                      {language === 'hi' ? 'आज' : 'Today'}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">
                      {language === 'hi' ? 'कुल रिवार्ड्स' : 'Total Rewards'}
                    </span>
                    <span className="font-semibold text-green-600">₹2,450</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">
                      {language === 'hi' ? 'सफल भुगतान' : 'Success Rate'}
                    </span>
                    <span className="font-semibold text-blue-600">98.5%</span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
                <h3 className="font-bold text-gray-900 text-lg mb-4 flex items-center">
                  <Zap className="mr-2 text-orange-600" size={20} />
                  {language === 'hi' ? 'त्वरित कार्य' : 'Quick Actions'}
                </h3>

                <div className="space-y-3">
                  <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold py-3 px-4 rounded-2xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-md flex items-center justify-center">
                    <QrCode className="mr-2" size={18} />
                    {language === 'hi' ? 'QR कोड दिखाएं' : 'Show QR Code'}
                  </button>

                  <button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold py-3 px-4 rounded-2xl hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-md flex items-center justify-center">
                    <CreditCard className="mr-2" size={18} />
                    {language === 'hi' ? 'क्रेडिट का उपयोग करें' : 'Use Credit'}
                  </button>

                  <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-4 rounded-2xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-md flex items-center justify-center">
                    <Award className="mr-2" size={18} />
                    {language === 'hi' ? 'रिवार्ड्स देखें' : 'View Rewards'}
                  </button>

                  <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-3 px-4 rounded-2xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-md flex items-center justify-center">
                    <TrendingUp className="mr-2" size={18} />
                    {language === 'hi' ? 'रिपोर्ट डाउनलोड करें' : 'Download Report'}
                  </button>
                </div>
              </div>

              {/* Support Card */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-6 text-white shadow-xl">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-4">
                    <Shield className="text-white" size={24} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">
                    {language === 'hi' ? 'सहायता चाहिए?' : 'Need Help?'}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    {language === 'hi'
                      ? 'हमारी टीम 24/7 आपकी सेवा में है'
                      : 'Our team is available 24/7 to help you'}
                  </p>
                  <button className="w-full bg-white text-gray-900 font-semibold py-3 rounded-2xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                    {language === 'hi' ? 'संपर्क करें' : 'Contact Support'}
                  </button>
                </div>
              </div>

              {/* Upgrade Banner */}
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl p-6 text-white shadow-xl overflow-hidden relative">
                <div className="relative z-10">
                  <div className="flex items-center mb-3">
                    <Crown className="mr-2 text-yellow-200" size={24} />
                    <h3 className="font-bold text-lg">
                      {language === 'hi' ? 'प्रीमियम में अपग्रेड करें' : 'Upgrade to Premium'}
                    </h3>
                  </div>
                  <p className="text-yellow-100 text-sm mb-4">
                    {language === 'hi'
                      ? 'अधिक लाभ और विशेष सुविधाएं पाएं'
                      : 'Get more benefits and exclusive features'}
                  </p>
                  <button className="bg-white text-orange-600 font-bold py-2 px-4 rounded-xl hover:bg-yellow-50 transition-all duration-300 text-sm">
                    {language === 'hi' ? 'अभी अपग्रेड करें' : 'Upgrade Now'}
                  </button>
                </div>
                <div className="absolute -top-4 -right-4 opacity-20">
                  <Sparkles size={80} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
            <h3 className="font-bold text-gray-900 text-xl mb-4">
              {language === 'hi' ? 'अपना SaathiCard साझा करें' : 'Share Your SaathiCard'}
            </h3>
            <p className="text-gray-600 mb-6">
              {language === 'hi'
                ? 'अन्य विक्रेताओं और ग्राहकों के साथ अपनी विश्वसनीयता दिखाएं'
                : 'Show your credibility to other vendors and customers'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold py-3 px-6 rounded-2xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center">
                <QrCode className="mr-2" size={20} />
                {language === 'hi' ? 'QR कोड साझा करें' : 'Share QR Code'}
              </button>
              <button className="bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold py-3 px-6 rounded-2xl hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center">
                <BadgeCheck className="mr-2" size={20} />
                {language === 'hi' ? 'कार्ड लिंक साझा करें' : 'Share Card Link'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaathiCardPage;