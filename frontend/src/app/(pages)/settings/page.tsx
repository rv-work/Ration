"use client"
import React from 'react';
import {
  Globe,
  Moon,
  Sun,
  User,
  Bell,
  Shield,
  HelpCircle,
  LogOut,
  ChevronRight,
  Settings,
  Smartphone,
  Monitor,
  Database
} from 'lucide-react';
import { useApp } from '../../../context/AppContext';
import { t } from '../../../utils/translation';
import Header from '@/components/Header';

type SettingsItem = {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  action: () => void;
  value?: string;
  hasToggle?: boolean;
  toggleValue?: boolean;
  description?: string;
};

type SettingsGroup = {
  title: string;
  items: SettingsItem[];
};

const SettingsPage: React.FC = () => {
  const { language, setLanguage, theme, setTheme, user, setUser, setCurrentPage } = useApp();

  const handleLogout = () => {
    setUser(null);
    setCurrentPage('login');
  };

  const settingsGroups: SettingsGroup[] = [
    {
      title: language === 'hi' ? 'खाता' : 'Account',
      items: [
        {
          icon: User,
          label: language === 'hi' ? 'प्रोफाइल संपादित करें' : 'Edit Profile',
          action: () => { },
          value: user?.name,
          description: language === 'hi' ? 'अपनी व्यक्तिगत जानकारी अपडेट करें' : 'Update your personal information'
        },
        {
          icon: Bell,
          label: language === 'hi' ? 'नोटिफिकेशन' : 'Notifications',
          action: () => { },
          hasToggle: true,
          toggleValue: true,
          description: language === 'hi' ? 'पुश नोटिफिकेशन सेटिंग्स' : 'Push notification settings'
        }
      ]
    },
    {
      title: language === 'hi' ? 'प्राथमिकताएं' : 'Preferences',
      items: [
        {
          icon: Globe,
          label: language === 'hi' ? 'भाषा' : 'Language',
          action: () => setLanguage(language === 'hi' ? 'en' : 'hi'),
          value: language === 'hi' ? 'हिन्दी' : 'English',
          description: language === 'hi' ? 'ऐप की भाषा बदलें' : 'Change app language'
        },
        {
          icon: theme === 'dark' ? Sun : Moon,
          label: language === 'hi' ? 'थीम' : 'Theme',
          action: () => setTheme(theme === 'dark' ? 'light' : 'dark'),
          value: theme === 'dark'
            ? (language === 'hi' ? 'डार्क' : 'Dark')
            : (language === 'hi' ? 'लाइट' : 'Light'),
          description: language === 'hi' ? 'ऐप की appearance बदलें' : 'Change app appearance'
        }
      ]
    },
    {
      title: language === 'hi' ? 'सहायता और सुरक्षा' : 'Help & Security',
      items: [
        {
          icon: Shield,
          label: language === 'hi' ? 'गोपनीयता सेटिंग्स' : 'Privacy Settings',
          action: () => { },
          description: language === 'hi' ? 'डेटा और गोपनीयता नियंत्रण' : 'Data and privacy controls'
        },
        {
          icon: HelpCircle,
          label: language === 'hi' ? 'सहायता केंद्र' : 'Help Center',
          action: () => { },
          description: language === 'hi' ? 'FAQ और समर्थन' : 'FAQ and support'
        }
      ]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header
        title={t('settings', language)}
        showBack={true}
      />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* Hero Section */}
        <div className="text-center mb-8 lg:mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mb-6 shadow-lg">
            <Settings className="text-white" size={40} />
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            {language === 'hi' ? 'सेटिंग्स' : 'Settings'}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {language === 'hi'
              ? 'अपनी प्राथमिकताओं को कस्टमाइज़ करें और अपने अनुभव को व्यक्तिगत बनाएं'
              : 'Customize your preferences and personalize your experience'}
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left Column - Settings */}
          <div className="lg:col-span-2 space-y-8">

            {/* Settings Groups */}
            {settingsGroups.map((group, groupIndex) => (
              <div key={groupIndex} className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="p-6 lg:p-8 border-b border-gray-100">
                  <h3 className="font-bold text-xl text-gray-900 flex items-center">
                    {groupIndex === 0 && <User className="mr-3 text-orange-600" size={24} />}
                    {groupIndex === 1 && <Monitor className="mr-3 text-blue-600" size={24} />}
                    {groupIndex === 2 && <Shield className="mr-3 text-green-600" size={24} />}
                    {group.title}
                  </h3>
                </div>

                <div className="p-4 lg:p-6">
                  <div className="space-y-2">
                    {group.items.map((item, itemIndex) => {
                      const Icon = item.icon;
                      return (
                        <button
                          key={itemIndex}
                          onClick={item.action}
                          className="w-full flex items-center justify-between p-4 lg:p-5 rounded-2xl hover:bg-gray-50 transition-all duration-200 group"
                        >
                          <div className="flex items-center space-x-4">
                            <div className="bg-gray-100 group-hover:bg-gray-200 p-3 rounded-xl transition-colors">
                              <Icon size={20} className="text-gray-600 group-hover:text-gray-700" />
                            </div>
                            <div className="text-left">
                              <span className="font-semibold text-gray-900 block">{item.label}</span>
                              {item.description && (
                                <span className="text-sm text-gray-500 block mt-1">{item.description}</span>
                              )}
                            </div>
                          </div>

                          <div className="flex items-center space-x-3">
                            {item.value && (
                              <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full font-medium">
                                {item.value}
                              </span>
                            )}
                            {item.hasToggle ? (
                              <div className={`w-14 h-7 rounded-full relative transition-colors shadow-inner ${item.toggleValue
                                  ? 'bg-gradient-to-r from-orange-500 to-red-500'
                                  : 'bg-gray-300'
                                }`}>
                                <div className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow-lg transition-transform ${item.toggleValue ? 'transform translate-x-7' : 'translate-x-1'
                                  }`}></div>
                              </div>
                            ) : (
                              <div className="bg-gray-100 group-hover:bg-gray-200 p-2 rounded-lg transition-colors">
                                <ChevronRight size={16} className="text-gray-400 group-hover:text-gray-600" />
                              </div>
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Profile & Quick Actions */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">

              {/* User Profile Card */}
              <div className="bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 rounded-3xl p-6 lg:p-8 text-white shadow-xl transform hover:scale-[1.02] transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full inline-flex mb-4">
                    <User size={32} />
                  </div>
                  <h3 className="font-bold text-xl lg:text-2xl mb-2">{user?.name || 'Rajesh Kumar'}</h3>
                  <p className="text-white/90 text-sm mb-1">{user?.phone || '+91 9876543210'}</p>
                  <p className="text-white/80 text-xs bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full inline-block">
                    {user?.vendorType || 'Street Food Vendor'}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-3">
                    <p className="text-2xl font-bold mb-1">4.5</p>
                    <p className="text-white/85 text-xs">
                      {language === 'hi' ? 'रेटिंग' : 'Rating'}
                    </p>
                  </div>
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-3">
                    <p className="text-2xl font-bold mb-1">85</p>
                    <p className="text-white/85 text-xs">
                      {language === 'hi' ? 'ट्रस्ट स्कोर' : 'Trust Score'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
                <h3 className="font-bold text-gray-900 text-lg mb-4 flex items-center">
                  <Database className="mr-2 text-purple-600" size={20} />
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
                    <span className="font-semibold text-green-600">
                      {language === 'hi' ? 'आज' : 'Today'}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">
                      {language === 'hi' ? 'कुल ऑर्डर' : 'Total Orders'}
                    </span>
                    <span className="font-semibold text-blue-600">156</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">
                      {language === 'hi' ? 'सफल भुगतान' : 'Success Rate'}
                    </span>
                    <span className="font-semibold text-orange-600">98.5%</span>
                  </div>
                </div>
              </div>

              {/* App Info */}
              <div className="bg-white rounded-3xl p-6 text-center shadow-lg border border-gray-100">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4">
                  <Smartphone className="text-white" size={32} />
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">
                  RationRider
                </h3>
                <p className="text-sm mb-4 text-gray-600">
                  {language === 'hi'
                    ? 'स्ट्रीट वेंडर्स के लिए सुपरऐप'
                    : 'SuperApp for Street Vendors'}
                </p>
                <div className="bg-gray-100 rounded-xl p-3">
                  <p className="text-xs text-gray-500 font-medium">
                    Version 1.0.0
                  </p>
                </div>
              </div>

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-3"
              >
                <LogOut size={20} />
                <span>{t('logout', language)}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
            <h3 className="font-bold text-gray-900 text-xl mb-4">
              {language === 'hi' ? 'क्या आपको कोई समस्या है?' : 'Having Issues?'}
            </h3>
            <p className="text-gray-600 mb-6">
              {language === 'hi'
                ? 'हमारी सहायता टीम आपकी मदद के लिए तैयार है'
                : 'Our support team is ready to help you'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold py-3 px-6 rounded-2xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center">
                <HelpCircle className="mr-2" size={20} />
                {language === 'hi' ? 'सहायता केंद्र' : 'Help Center'}
              </button>
              <button className="bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold py-3 px-6 rounded-2xl hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center">
                <Globe className="mr-2" size={20} />
                {language === 'hi' ? 'संपर्क करें' : 'Contact Us'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;