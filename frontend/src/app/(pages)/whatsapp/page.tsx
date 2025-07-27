"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Send, Mic, Phone, Bot, User, Clock, CheckCheck } from 'lucide-react';
import { useApp } from '../../../context/AppContext';
import Header from '@/components/Header';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  buttons?: { text: string; action: string }[];
}

const WhatsAppPage: React.FC = () => {
  const { language } = useApp();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: language === 'hi'
        ? 'नमस्ते! मैं उदान बाज़ार बॉट हूँ...'
        : 'Hello! I\'m UdaanBazaar Bot...',
      sender: 'bot',
      timestamp: new Date(),
      buttons: [
        { text: language === 'hi' ? '🥔 आलू की कीमत' : '🥔 Potato Prices', action: 'potato_price' },
        { text: language === 'hi' ? '🧅 प्याज की कीमत' : '🧅 Onion Prices', action: 'onion_price' },
        { text: language === 'hi' ? '🛒 ऑर्डर करें' : '🛒 Place Order', action: 'place_order' }
      ]
    }
  ]);
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputText.trim()) return;
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setTimeout(() => {
      const botResponse = getBotResponse(inputText);
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
    setInputText('');
  };

  const getBotResponse = (userInput: string): Message => {
    const input = userInput.toLowerCase();
    if (input.includes('potato') || input.includes('आलू')) {
      return {
        id: Date.now().toString(),
        text: language === 'hi'
          ? '🥔 आलू की आज की कीमतें: ...'
          : '🥔 Today\'s Potato Prices: ...',
        sender: 'bot',
        timestamp: new Date(),
        buttons: [
          { text: language === 'hi' ? '5kg ऑर्डर करें' : 'Order 5kg', action: 'order_potato_5kg' },
          { text: language === 'hi' ? '10kg ऑर्डर करें' : 'Order 10kg', action: 'order_potato_10kg' }
        ]
      };
    }
    if (input.includes('onion') || input.includes('प्याज')) {
      return {
        id: Date.now().toString(),
        text: language === 'hi'
          ? '🧅 प्याज की आज की कीमतें: ...'
          : '🧅 Today\'s Onion Prices: ...',
        sender: 'bot',
        timestamp: new Date(),
        buttons: [
          { text: language === 'hi' ? '3kg ऑर्डर करें' : 'Order 3kg', action: 'order_onion_3kg' },
          { text: language === 'hi' ? '5kg ऑर्डर करें' : 'Order 5kg', action: 'order_onion_5kg' }
        ]
      };
    }
    if (input.includes('order') || input.includes('ऑर्डर')) {
      return {
        id: Date.now().toString(),
        text: language === 'hi'
          ? '✅ आपका ऑर्डर सफलतापूर्वक दर्ज हो गया! ...'
          : '✅ Your order has been placed successfully! ...',
        sender: 'bot',
        timestamp: new Date(),
        buttons: [
          { text: language === 'hi' ? '📱 ऐप में ट्रैक करें' : '📱 Track in App', action: 'track_order' },
          { text: language === 'hi' ? '🛒 और ऑर्डर करें' : '🛒 Order More', action: 'new_order' }
        ]
      };
    }
    return {
      id: Date.now().toString(),
      text: language === 'hi'
        ? 'मैं आपकी बात समझ नहीं पाया...'
        : 'I didn\'t understand that...',
      sender: 'bot',
      timestamp: new Date(),
      buttons: [
        { text: language === 'hi' ? '🥔 आलू' : '🥔 Potatoes', action: 'potato_price' },
        { text: language === 'hi' ? '🧅 प्याज' : '🧅 Onions', action: 'onion_price' },
        { text: language === 'hi' ? '🌾 आटा' : '🌾 Flour', action: 'flour_price' }
      ]
    };
  };

  const handleButtonClick = (action: string, buttonText: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text: buttonText,
      sender: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setTimeout(() => {
      const botResponse = getBotResponse(action);
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Header
        title="UdaanBazaar Bot"
        showBack={true}
        rightAction={
          <div className="flex items-center space-x-2">
            <button className="cursor-pointer bg-white/20 hover:bg-white/30 rounded-2xl p-3 transition-all duration-300 hover:scale-110">
              <Phone size={20} />
            </button>
          </div>
        }
      />

      <div className="flex h-screen overflow-hidden">
        {/* Optional sidebar here if needed */}

        <div className="hidden lg:block w-80 fixed left-0 h-full z-20 overflow-y-auto bg-white border-r border-gray-200 shadow-lg p-4">
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-br from-green-400 to-green-600 p-4 rounded-2xl shadow-lg">
                <Bot className="text-white" size={32} />
              </div>
              <div>
                <h3 className="font-bold text-xl text-gray-900">UdaanBazaar Bot</h3>
                <p className="text-green-600 font-medium text-sm flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  {language === 'hi' ? 'ऑनलाइन' : 'Online'}
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 space-y-6">
            <div>
              <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                <Clock className="mr-2 text-orange-500" size={18} />
                {language === 'hi' ? 'सेवा का समय' : 'Service Hours'}
              </h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p>{language === 'hi' ? 'सोमवार - शुक्रवार: 6:00 AM - 10:00 PM' : 'Monday - Friday: 6:00 AM - 10:00 PM'}</p>
                <p>{language === 'hi' ? 'शनिवार - रविवार: 7:00 AM - 9:00 PM' : 'Saturday - Sunday: 7:00 AM - 9:00 PM'}</p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3">
                {language === 'hi' ? '🏆 फीचर्स' : '🏆 Features'}
              </h4>
              <div className="space-y-3">
                {[
                  { icon: '💰', text: language === 'hi' ? 'रियल-टाइम कीमतें' : 'Real-time Prices' },
                  { icon: '🚚', text: language === 'hi' ? 'तुरंत डिलीवरी' : 'Instant Delivery' },
                  { icon: '📱', text: language === 'hi' ? 'ऑर्डर ट्रैकिंग' : 'Order Tracking' },
                  { icon: '🎯', text: language === 'hi' ? 'बेस्ट डील्स' : 'Best Deals' }
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                    <span className="text-lg">{feature.icon}</span>
                    <span className="text-gray-700 font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>


        <div className="flex-1 flex z-10 flex-col ml-0 lg:ml-80 h-screen">
          {/* Background */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div
              className="h-full w-full"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='m 60 0 l 0 60 l -60 0 l 0 -60 z' fill='none' stroke='%23e5e7eb' strokeWidth='0.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)' /%3E%3C/svg%3E")`,
                backgroundSize: '60px 60px'
              }}
            ></div>
          </div>

          {/* Scrollable Messages */}
          <div className="relative z-10 flex-1 overflow-y-auto px-4 py-6 space-y-6 scroll-smooth">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-md px-6 py-4 rounded-3xl shadow-lg ${msg.sender === 'user'
                  ? 'bg-gradient-to-br from-green-500 to-green-600 text-white rounded-br-lg ml-4'
                  : 'bg-white text-gray-900 rounded-bl-lg mr-4 border border-gray-100'
                  }`}>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className={`p-2 rounded-full ${msg.sender === 'user' ? 'bg-white/20' : 'bg-orange-500'}`}>
                      {msg.sender === 'user' ? (
                        <User className="text-white" size={16} />
                      ) : (
                        <Bot className="text-white" size={16} />
                      )}
                    </div>
                    <span className={`text-sm font-medium ${msg.sender === 'user' ? 'text-green-100' : 'text-gray-600'}`}>
                      {msg.sender === 'user' ? (language === 'hi' ? 'आप' : 'You') : 'UdaanBazaar Bot'}
                    </span>
                  </div>
                  <p className="whitespace-pre-line text-sm leading-relaxed">{msg.text}</p>
                  {msg.buttons && (
                    <div className="mt-4 space-y-2">
                      {msg.buttons.map((btn, index) => (
                        <button
                          key={index}
                          onClick={() => handleButtonClick(btn.action, btn.text)}
                          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-xl text-sm transition duration-300"
                        >
                          {btn.text}
                        </button>
                      ))}
                    </div>
                  )}
                  <div className="flex justify-between mt-3 text-xs">
                    <span className={msg.sender === 'user' ? 'text-green-100' : 'text-gray-500'}>
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                    {msg.sender === 'user' && <CheckCheck className="text-green-200" size={16} />}
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Bar */}
          <div className="bg-white border-t border-gray-200 p-4 sticky bottom-0 z-20">
            <div className="max-w-4xl mx-auto flex items-center space-x-4">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder={language === 'hi' ? 'मैसेज टाइप करें...' : 'Type a message...'}
                  className="w-full px-6 py-4 pr-14 border-2 border-gray-200 rounded-3xl focus:border-green-500 focus:outline-none transition-all bg-gray-50"
                />
                <button className="absolute right-4 top-4 text-gray-400 hover:text-gray-600">
                  <Mic size={20} />
                </button>
              </div>
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim()}
                className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full disabled:bg-gray-300 transition-all"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppPage;
