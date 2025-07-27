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
  ChevronRight
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
          value: user?.name
        },
        {
          icon: Bell,
          label: language === 'hi' ? 'नोटिफिकेशन' : 'Notifications',
          action: () => { },
          hasToggle: true,
          toggleValue: true
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
          value: language === 'hi' ? 'हिन्दी' : 'English'
        },
        {
          icon: theme === 'dark' ? Sun : Moon,
          label: language === 'hi' ? 'थीम' : 'Theme',
          action: () => setTheme(theme === 'dark' ? 'light' : 'dark'),
          value: theme === 'dark'
            ? (language === 'hi' ? 'डार्क' : 'Dark')
            : (language === 'hi' ? 'लाइट' : 'Light')
        }
      ]
    },
    {
      title: language === 'hi' ? 'सहायता और सुरक्षा' : 'Help & Security',
      items: [
        {
          icon: Shield,
          label: language === 'hi' ? 'गोपनीयता सेटिंग्स' : 'Privacy Settings',
          action: () => { }
        },
        {
          icon: HelpCircle,
          label: language === 'hi' ? 'सहायता केंद्र' : 'Help Center',
          action: () => { }
        }
      ]
    }
  ];

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-md mx-auto bg-white dark:bg-gray-800 min-h-screen shadow-xl">
        <Header
          title={t('settings', language)}
          showBack={true}
        />

        <div className="p-4 space-y-6">
          {/* User Profile Card */}
          <div className={`rounded-2xl p-6 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gradient-to-r from-orange-500 to-red-500'} text-white`}>
            <div className="flex items-center space-x-4">
              <div className="bg-white/20 p-3 rounded-full">
                <User size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg">{user?.name || 'Rajesh Kumar'}</h3>
                <p className="text-white/90 text-sm">{user?.phone || '+91 9876543210'}</p>
                <p className="text-white/80 text-xs">{user?.vendorType || 'Street Food Vendor'}</p>
              </div>
            </div>
          </div>

          {/* Settings Groups */}
          {settingsGroups.map((group, groupIndex) => (
            <div key={groupIndex} className={`rounded-2xl shadow-sm ${theme === 'dark' ? 'bg-gray-700' : 'bg-white'}`}>
              <div className="p-4 border-b border-gray-200 dark:border-gray-600">
                <h3 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {group.title}
                </h3>
              </div>

              <div className="p-2">
                {group.items.map((item, itemIndex) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={itemIndex}
                      onClick={item.action}
                      className={`w-full flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-700'
                        }`}
                    >
                      <div className="flex items-center space-x-3">
                        <Icon size={20} className={theme === 'dark' ? 'text-gray-300' : 'text-gray-500'} />
                        <span className="font-medium">{item.label}</span>
                      </div>

                      <div className="flex items-center space-x-2">
                        {item.value && (
                          <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                            {item.value}
                          </span>
                        )}
                        {item.hasToggle ? (
                          <div className={`w-12 h-6 rounded-full ${item.toggleValue ? 'bg-orange-500' : 'bg-gray-300'} relative transition-colors`}>
                            <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${item.toggleValue ? 'transform translate-x-6' : 'translate-x-1'}`}></div>
                          </div>
                        ) : (
                          <ChevronRight size={16} className={theme === 'dark' ? 'text-gray-400' : 'text-gray-400'} />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}

          {/* App Info */}
          <div className={`rounded-2xl p-6 text-center ${theme === 'dark' ? 'bg-gray-700' : 'bg-white'} shadow-sm`}>
            <h3 className={`font-bold text-lg mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              RationRider
            </h3>
            <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              {language === 'hi'
                ? 'स्ट्रीट वेंडर्स के लिए सुपरऐप'
                : 'SuperApp for Street Vendors'}
            </p>
            <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
              Version 1.0.0
            </p>
          </div>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-4 px-6 rounded-2xl transition-colors flex items-center justify-center space-x-2"
          >
            <LogOut size={20} />
            <span>{t('logout', language)}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;