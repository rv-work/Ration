"use client"

import React, { useState } from 'react';
import { Phone, Globe, Lock, ArrowRight, Check, Sparkles, Shield } from 'lucide-react';
import { useApp } from '../../../context/AppContext';
import { t } from '../../../utils/translation';
import { useAuth } from '@/context/AuthContext';

const LoginPage: React.FC = () => {
  const { setUser, language, setLanguage, setCurrentPage } = useApp();
  const { setIsLoggedIn } = useAuth()

  const [step, setStep] = useState('language');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');

  const handleLanguageSelect = (lang: "hi" | "en") => {
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
      setIsLoggedIn(true)
    }
  };

  if (step === 'language') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 flex items-center justify-center p-4 lg:p-8 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl"></div>
          <div className="absolute center w-64 h-64 bg-pink-400/20 rounded-full blur-2xl"></div>
        </div>

        <div className="relative z-10 w-full max-w-6xl grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Side - Brand & Features */}
          <div className="hidden lg:block text-white space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-2xl">
                  <Sparkles className="text-white" size={32} />
                </div>
                <h1 className="text-5xl font-bold bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
                  RationRider
                </h1>
              </div>
              <p className="text-xl text-white/90 leading-relaxed">
                Connect with local vendors, save money through group orders, and build stronger communities.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-green-500/20 p-3 rounded-xl">
                  <Check className="text-green-300" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Group Buying Power</h3>
                  <p className="text-white/70">Save up to 25% with bulk orders</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-blue-500/20 p-3 rounded-xl">
                  <Shield className="text-blue-300" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Secure & Trusted</h3>
                  <p className="text-white/70">Verified vendors and secure payments</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-purple-500/20 p-3 rounded-xl">
                  <Globe className="text-purple-300" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Multi-language Support</h3>
                  <p className="text-white/70">Available in Hindi and English</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <p className="text-white/90 italic text-lg">
                &quot;Join 10,000+ vendors already saving money and growing their business with RationRider&quot;
              </p>
            </div>
          </div>

          {/* Right Side - Language Selection Card */}
          <div className="bg-white/95 backdrop-blur-xl rounded-3xl lg:rounded-4xl p-8 lg:p-12 w-full max-w-md mx-auto shadow-2xl border border-white/20">
            <div className="text-center mb-8 lg:mb-12">
              <div className="bg-gradient-to-r from-orange-400 to-pink-500 w-20 h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Globe className="text-white" size={40} />
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-3">
                RationRider
              </h1>
              <p className="text-gray-600 text-lg mb-2">Choose your preferred language</p>
              <p className="text-gray-500 text-base">अपनी पसंदीदा भाषा चुनें</p>
            </div>

            <div className="space-y-4 lg:space-y-6">
              <button
                onClick={() => handleLanguageSelect('en')}
                className="group w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-semibold py-4 lg:py-5 px-6 rounded-2xl transition-all duration-300 flex items-center justify-center space-x-4 hover:scale-105 hover:shadow-2xl"
              >
                <span className="text-2xl">🇬🇧</span>
                <span className="text-lg">English</span>
                <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
              </button>

              <button
                onClick={() => handleLanguageSelect('hi')}
                className="group w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-4 lg:py-5 px-6 rounded-2xl transition-all duration-300 flex items-center justify-center space-x-4 hover:scale-105 hover:shadow-2xl"
              >
                <span className="text-2xl">🇮🇳</span>
                <span className="text-lg">हिन्दी</span>
                <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
              </button>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100">
              <p className="text-center text-sm text-gray-500">
                By continuing, you agree to our Terms & Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 flex items-center justify-center p-4 lg:p-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl"></div>
        <div className="absolute center w-64 h-64 bg-pink-400/20 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Left Side - Brand & Info */}
        <div className="hidden lg:block text-white space-y-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-2xl">
                <Phone className="text-white" size={32} />
              </div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
                RationRider
              </h1>
            </div>
            <p className="text-xl text-white/90 leading-relaxed">
              {step === 'phone'
                ? 'Enter your mobile number to get started with exclusive vendor deals and group savings.'
                : 'We\'ve sent a verification code to your mobile number. Please enter it below to continue.'}
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-green-500/20 p-2 rounded-lg">
                <Shield className="text-green-300" size={20} />
              </div>
              <h3 className="font-semibold">Secure Login</h3>
            </div>
            <p className="text-white/80 text-sm">
              Your phone number is encrypted and secure. We use industry-standard security practices to protect your data.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <p className="text-2xl font-bold">10K+</p>
              <p className="text-sm text-white/70">Active Users</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <p className="text-2xl font-bold">25%</p>
              <p className="text-sm text-white/70">Avg. Savings</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <p className="text-2xl font-bold">4.8★</p>
              <p className="text-sm text-white/70">User Rating</p>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl lg:rounded-4xl p-8 lg:p-12 w-full max-w-md mx-auto shadow-2xl border border-white/20">
          <div className="text-center mb-8 lg:mb-10">
            <div className="bg-gradient-to-r from-orange-400 to-pink-500 w-20 h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              {step === 'phone' ? <Phone className="text-white" size={40} /> : <Lock className="text-white" size={40} />}
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-3">
              RationRider
            </h1>
            <p className="text-gray-600 text-lg">
              {step === 'phone' ? t('enterPhone', language) : t('enterOTP', language)}
            </p>
          </div>

          {step === 'phone' && (
            <div className="space-y-6 lg:space-y-8">
              <div className="relative">
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="9876543210"
                  className="w-full text-black px-6 py-4 lg:py-5 border-2 border-gray-200 rounded-2xl focus:border-orange-500 focus:outline-none text-lg lg:text-xl text-center font-medium transition-all duration-200 bg-gray-50 focus:bg-white"
                  maxLength={10}
                />
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <span className="text-gray-400 font-medium">+91</span>
                </div>
              </div>

              <button
                onClick={handleSendOTP}
                disabled={phone.length !== 10}
                className="group w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 disabled:from-gray-300 disabled:to-gray-400 text-white font-semibold py-4 lg:py-5 px-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl disabled:hover:scale-100 disabled:hover:shadow-none flex items-center justify-center space-x-3"
              >
                <span className="text-lg">{t('sendOTP', language)}</span>
                <ArrowRight className="opacity-0 group-hover:opacity-100 group-disabled:opacity-0 transition-opacity" size={20} />
              </button>

              <div className="text-center pt-4">
                <p className="text-sm text-gray-500">
                  We&apos;ll send you a verification code via SMS
                </p>
              </div>
            </div>
          )}

          {step === 'otp' && (
            <div className="space-y-6 lg:space-y-8">
              <div className="space-y-4">
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="1234"
                  className="w-full text-black px-6 py-4 lg:py-5 border-2 border-gray-200 rounded-2xl focus:border-green-500 focus:outline-none text-2xl lg:text-3xl text-center tracking-widest font-bold transition-all duration-200 bg-gray-50 focus:bg-white"
                  maxLength={4}
                />
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                  <p className="text-sm text-blue-800 text-center font-medium">
                    {language === 'hi' ? '🔐 डेमो के लिए 1234 का उपयोग करें' : '🔐 Use 1234 for demo'}
                  </p>
                </div>
              </div>

              <button
                onClick={handleVerifyOTP}
                disabled={otp.length !== 4}
                className="group w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 disabled:from-gray-300 disabled:to-gray-400 text-white font-semibold py-4 lg:py-5 px-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl disabled:hover:scale-100 disabled:hover:shadow-none flex items-center justify-center space-x-3"
              >
                <span className="text-lg">{t('verifyOTP', language)}</span>
                <Check className="opacity-0 group-hover:opacity-100 group-disabled:opacity-0 transition-opacity" size={20} />
              </button>

              <button
                onClick={() => setStep('phone')}
                className="w-full text-orange-600 hover:text-orange-700 font-semibold py-3 hover:bg-orange-50 rounded-xl transition-all duration-200"
              >
                ← {t('back', language)}
              </button>

              <div className="text-center pt-2">
                <p className="text-sm text-gray-500">
                  Didn&apos;t receive code? <button className="text-orange-600 hover:text-orange-700 font-medium">Resend</button>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;