"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import {
  Home,
  ShoppingCart,
  Map,
  CreditCard,
  Calendar
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { t } from '../utils/translation';

const Navigation: React.FC = () => {
  const { currentPage, setCurrentPage, language, cart } = useApp();
  const router = useRouter();

  const navItems = [
    { id: 'home', path: '/', icon: Home, label: t('home', language) },
    { id: 'planner', path: '/menu-plan', icon: Calendar, label: t('planner', language) },
    { id: 'marketplace', path: '/market-place', icon: ShoppingCart, label: t('market', language), badge: cart.length },
    { id: 'streethub', path: '/street-hub', icon: Map, label: t('streethub', language) },
    { id: 'saathicard', path: '/saathi-card', icon: CreditCard, label: t('saathicard', language) }
  ];

  return (
    <nav className={`
      fixed
      bottom-0
      w-full
      max-w-md
      left-1/2
      -translate-x-1/2
      px-4 py-2
      bg-white border-t border-gray-200
      z-50
      flex md:hidden
    `}>
      <div className="flex items-center justify-around w-full">
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
              className={`flex flex-col items-center space-y-1 p-2 rounded-lg transition-colors relative ${isActive ? 'text-orange-600 bg-orange-50' : 'text-gray-600 hover:text-orange-600'
                }`}
            >
              <Icon size={20} />
              <span className="text-xs font-medium">{item.label}</span>
              {item.badge && item.badge > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;
