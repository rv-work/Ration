"use client";

import React from 'react';
import { ArrowLeft, Settings, Bell, Home, Calendar, ShoppingCart, Map, CreditCard } from 'lucide-react';
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
  const { setCurrentPage, language, cart } = useApp();
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
    <header className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 sticky top-0 z-10">
      <div className="flex items-center justify-between">
        {/* Left: Title and optional back button */}
        <div className="flex items-center space-x-3">
          {showBack && (
            <button onClick={handleBack} className="p-1 hover:bg-white/20 rounded-lg">
              <ArrowLeft size={20} />
            </button>
          )}
          <h1 className="text-lg font-bold">{title}</h1>
        </div>

        {/* Center: Desktop Nav Links (with icons) */}
        <div className="hidden md:flex items-center space-x-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id);
                  router.push(item.path);
                }}
                className="flex items-center gap-1 text-white hover:underline text-sm relative"
              >
                <Icon size={16} />
                <span>{item.label}</span>
                {item.badge && item.badge > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Right: Icons (always visible) */}
        <div className="flex items-center space-x-2">
          {rightAction || (
            <>
              <button className="p-2 hover:bg-white/20 rounded-lg">
                <Bell size={18} />
              </button>
              <button
                onClick={() => {
                  setCurrentPage('settings');
                  router.push('/settings');
                }}
                className="p-2 hover:bg-white/20 rounded-lg"
              >
                <Settings size={18} />
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
