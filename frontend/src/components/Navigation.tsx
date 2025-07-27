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
    <nav className="fixed bottom-0 w-full left-0 right-0 px-3 py-2 bg-white/95 backdrop-blur-lg border-t border-gray-200/50 z-50 flex md:hidden shadow-2xl shadow-gray-900/10">
      <div className="flex items-center justify-around w-full max-w-md mx-auto">
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
              className={`cursor-pointer flex flex-col items-center space-y-1 p-2 rounded-xl transition-all duration-300 relative group ${isActive
                  ? 'text-white bg-gradient-to-br from-orange-500 to-red-500 shadow-lg shadow-orange-200/50 scale-105'
                  : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50 hover:scale-105'
                }`}
            >
              <div className={`p-1 rounded-lg transition-all duration-300 ${isActive
                  ? 'bg-white/20'
                  : 'group-hover:bg-orange-100'
                }`}>
                <Icon
                  size={20}
                  className={`transition-all duration-300 ${isActive
                      ? 'text-white'
                      : 'group-hover:text-orange-600 group-hover:scale-110'
                    }`}
                />
              </div>
              <span className={`text-xs font-medium transition-all duration-300 ${isActive
                  ? 'text-white'
                  : 'group-hover:text-orange-600'
                }`}>
                {item.label}
              </span>

              {/* Active indicator dot */}
              {isActive && (
                <div className="absolute -bottom-0.5 w-1.5 h-1.5 bg-yellow-300 rounded-full shadow-sm animate-pulse"></div>
              )}

              {/* Badge */}
              {item.badge && item.badge > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-lg animate-bounce">
                  {item.badge}
                </span>
              )}

              {/* Hover glow effect */}
              {!isActive && (
                <div className="absolute inset-0 bg-orange-100/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              )}
            </button>
          );
        })}
      </div>

      {/* Bottom gradient accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 via-red-400 to-orange-400"></div>
    </nav>
  );
};

export default Navigation;