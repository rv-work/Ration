"use client";

import React from 'react';
import { ArrowLeft, Settings, Bell, Home, Calendar, ShoppingCart, Map, CreditCard, Sparkles } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useApp } from '../context/AppContext';
import { t } from '../utils/translation';

interface HeaderProps {
  title: string;
  showBack?: boolean;
  onBack?: () => void;
  rightAction?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ title, showBack = false, onBack, rightAction }) => {
  const { setCurrentPage, language, cart, currentPage } = useApp();
  const router = useRouter();

  const navItems = [
    { id: 'home', path: '/', label: t('home', language), icon: Home },
    { id: 'planner', path: '/menu-plan', label: t('planner', language), icon: Calendar },
    { id: 'marketplace', path: '/market-place', label: t('market', language), icon: ShoppingCart, badge: cart.length },
    { id: 'streethub', path: '/street-hub', label: t('streethub', language), icon: Map },
    { id: 'saathicard', path: '/saathi-card', label: t('saathicard', language), icon: CreditCard }
  ];

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      setCurrentPage('home');
      router.push('/');
    }
  };

  return (
    <header className="bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 text-white sticky top-0 z-50 shadow-2xl shadow-orange-200/30  overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16"></div>
      <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-white/5 rounded-full -translate-x-12 -translate-y-12"></div>

      <div className="relative z-10 p-6">
        <div className="flex items-center justify-between">
          {/* Left: Title and optional back button */}
          <div className="flex items-center space-x-4">
            {showBack && (
              <button
                onClick={handleBack}
                className="cursor-pointer p-3 hover:bg-white/20 rounded-2xl transition-all duration-300 hover:scale-110 group"
              >
                <ArrowLeft size={24} className="group-hover:text-yellow-200 transition-colors duration-300" />
              </button>
            )}
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 p-2 rounded-xl">
                <Sparkles className="text-yellow-300" size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white drop-shadow-lg">{title}</h1>
                <div className="w-12 h-1 bg-yellow-300 rounded-full mt-1"></div>
              </div>
            </div>
          </div>

          {/* Center: Desktop Nav Links (with enhanced icons) */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    router.push(item.path);
                  }}
                  className={`cursor-pointer flex items-center gap-2 px-4 py-3 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg backdrop-blur-sm group relative ${isActive ? 'bg-white/20 shadow-yellow-200/30 ring-2 ring-yellow-300' : 'bg-white/10 hover:bg-white/20'
                    }`}
                >
                  <Icon size={20} className={`transition-colors duration-300 ${isActive ? 'text-yellow-300' : 'group-hover:text-yellow-300'}`} />
                  <span className={`font-medium transition-colors duration-300 ${isActive ? 'text-yellow-100' : 'group-hover:text-yellow-100'}`}>
                    {item.label}
                  </span>

                  {item.badge && item.badge > 0 && (
                    <span className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shadow-lg animate-pulse">
                      {item.badge}
                    </span>
                  )}

                  <div className="absolute inset-0 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              );
            })}


          </div>

          <div className="flex items-center space-x-2">
            {rightAction || (
              <>
                <button className="cursor-pointer p-3 hover:bg-white/20 rounded-2xl transition-all duration-300 hover:scale-110 group relative">
                  <Bell size={22} className="group-hover:text-yellow-300 transition-colors duration-300" />
                  {/* Notification dot */}
                  <div className="absolute top-2 right-2 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
                  <div className="absolute top-2 right-2 w-3 h-3 bg-red-600 rounded-full"></div>
                </button>
                <button
                  onClick={() => {
                    setCurrentPage('settings');
                    router.push('/settings');
                  }}
                  className="cursor-pointer p-3 hover:bg-white/20 rounded-2xl transition-all duration-300 hover:scale-110 group"
                >
                  <Settings size={22} className="group-hover:text-yellow-300 group-hover:rotate-90 transition-all duration-300" />
                </button>
              </>
            )}
          </div>
        </div>

      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300"></div>
    </header>
  );
};

export default Header;