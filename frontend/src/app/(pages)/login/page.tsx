"use client"

import React, { useState } from 'react';
import { Phone, Globe } from 'lucide-react';
import { useApp } from '../../../context/AppContext';
import { t } from '../../../utils/translation';

const LoginPage: React.FC = () => {
  const { setUser, language, setLanguage, setCurrentPage } = useApp();
  const [step, setStep] = useState<'phone' | 'otp' | 'language'>('language');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');

  const handleLanguageSelect = (lang: 'hi' | 'en') => {
    setLanguage(lang);
    setStep('phone');
  };

  const handleSendOTP = () => {
    if (phone.length === 10) {
      setStep('otp');
    }
  };

  const handleVerifyOTP = () => {
    if (otp === '1234') { // Mock OTP
      const mockUser = {
        id: '1',
        name: 'Rajesh Kumar',
        phone,
        language,
        location: {
          lat: 28.6139,
          lng: 77.2090,
          address: 'Connaught Place, Delhi'
        },
        vendorType: 'Street Food',
        rating: 4.5,
        trustScore: 85
      };
      setUser(mockUser);
      setCurrentPage('home');
    }
  };

  if (step === 'language') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-400 via-red-500 to-pink-500 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-8 w-full max-w-sm shadow-2xl">
          <div className="text-center mb-8">
            <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="text-orange-600" size={40} />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">RationRider</h1>
            <p className="text-gray-600">Choose your preferred language</p>
            <p className="text-gray-600 text-sm">अपनी पसंदीदा भाषा चुनें</p>
          </div>

          <div className="space-y-4">
            <button
              onClick={() => handleLanguageSelect('en')}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-6 rounded-xl transition-colors flex items-center justify-center space-x-3"
            >
              <span className="text-lg">🇬🇧</span>
              <span>English</span>
            </button>

            <button
              onClick={() => handleLanguageSelect('hi')}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-xl transition-colors flex items-center justify-center space-x-3"
            >
              <span className="text-lg">🇮🇳</span>
              <span>हिन्दी</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-red-500 to-pink-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-8 w-full max-w-sm shadow-2xl">
        <div className="text-center mb-8">
          <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Phone className="text-orange-600" size={40} />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">RationRider</h1>
          <p className="text-gray-600">
            {step === 'phone' ? t('enterPhone', language) : t('enterOTP', language)}
          </p>
        </div>

        {step === 'phone' && (
          <div className="space-y-6">
            <div>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="9876543210"
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none text-lg text-center"
                maxLength={10}
              />
            </div>

            <button
              onClick={handleSendOTP}
              disabled={phone.length !== 10}
              className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-300 text-white font-semibold py-4 px-6 rounded-xl transition-colors"
            >
              {t('sendOTP', language)}
            </button>
          </div>
        )}

        {step === 'otp' && (
          <div className="space-y-6">
            <div>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="1234"
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none text-lg text-center tracking-widest"
                maxLength={4}
              />
              <p className="text-sm text-gray-500 text-center mt-2">
                {language === 'hi' ? 'डेमो के लिए 1234 का उपयोग करें' : 'Use 1234 for demo'}
              </p>
            </div>

            <button
              onClick={handleVerifyOTP}
              disabled={otp.length !== 4}
              className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-300 text-white font-semibold py-4 px-6 rounded-xl transition-colors"
            >
              {t('verifyOTP', language)}
            </button>

            <button
              onClick={() => setStep('phone')}
              className="w-full text-orange-600 hover:text-orange-700 font-medium py-2"
            >
              {t('back', language)}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;