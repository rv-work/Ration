"use client"

import React, { useState } from 'react';
import { Send, Mic, Phone } from 'lucide-react';
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
        ? 'नमस्ते! मैं उदान बाज़ार बॉट हूँ। मैं आपकी मदद कर सकता हूँ:\n\n• कच्चे माल की कीमत देखना\n• ऑर्डर देना\n• डिलीवरी ट्रैक करना\n\nआप मुझसे हिंदी या अंग्रेजी में बात कर सकते हैं!'
        : 'Hello! I\'m UdaanBazaar Bot. I can help you with:\n\n• Check raw material prices\n• Place orders\n• Track deliveries\n\nYou can chat with me in Hindi or English!',
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

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(inputText);
      setMessages(prev => [...prev, botResponse]);
    }, 1000);

    setInputText('');
  };

  const getBotResponse = (userInput: string): Message => {
    const input = userInput.toLowerCase();

    if (input.includes('आलू') || input.includes('potato') || input.includes('aalu')) {
      return {
        id: Date.now().toString(),
        text: language === 'hi'
          ? '🥔 आलू की आज की कीमतें:\n\n• Farm Direct: ₹22/kg (2.8km दूर)\n• Veggie Fresh: ₹25/kg (1.5km दूर)\n• Punjab Potatoes: ₹22/kg (3.5km दूर)\n\nसबसे सस्ता विकल्प Farm Direct है!'
          : '🥔 Today\'s Potato Prices:\n\n• Farm Direct: ₹22/kg (2.8km away)\n• Veggie Fresh: ₹25/kg (1.5km away)\n• Punjab Potatoes: ₹22/kg (3.5km away)\n\nBest deal: Farm Direct!',
        sender: 'bot',
        timestamp: new Date(),
        buttons: [
          { text: language === 'hi' ? '5kg ऑर्डर करें' : 'Order 5kg', action: 'order_potato_5kg' },
          { text: language === 'hi' ? '10kg ऑर्डर करें' : 'Order 10kg', action: 'order_potato_10kg' }
        ]
      };
    }

    if (input.includes('प्याज') || input.includes('onion') || input.includes('pyaaz')) {
      return {
        id: Date.now().toString(),
        text: language === 'hi'
          ? '🧅 प्याज की आज की कीमतें:\n\n• Veggie Fresh: ₹35/kg (1.5km दूर)\n• Farm Direct: ₹32/kg (2.8km दूर)\n\nFarm Direct से खरीदें और ₹3/kg बचाएं!'
          : '🧅 Today\'s Onion Prices:\n\n• Veggie Fresh: ₹35/kg (1.5km away)\n• Farm Direct: ₹32/kg (2.8km away)\n\nSave ₹3/kg with Farm Direct!',
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
          ? '✅ आपका ऑर्डर सफलतापूर्वक दर्ज हो गया!\n\n📦 ऑर्डर ID: #OR12345\n🚚 डिलीवरी: 2-4 घंटे में\n💰 कुल राशि: ₹150\n\nआप अपना ऑर्डर ट्रैक कर सकते हैं।'
          : '✅ Your order has been placed successfully!\n\n📦 Order ID: #OR12345\n🚚 Delivery: 2-4 hours\n💰 Total: ₹150\n\nYou can track your order now.',
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
        ? 'मैं आपकी बात समझ नहीं पाया। कृपया इनमें से कोई विकल्प चुनें या मुझसे पूछें:\n\n• कच्चे माल की कीमतें\n• ऑर्डर करना\n• डिलीवरी की जानकारी'
        : 'I didn\'t understand that. Please choose from the options or ask me about:\n\n• Raw material prices\n• Placing orders\n• Delivery information',
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
            <button className="bg-white/20 hover:bg-white/30 rounded-lg p-2">
              <Phone size={18} />
            </button>
          </div>
        }
      />

      {/* WhatsApp-style background */}
      <div
        className="flex-1 p-4 overflow-y-auto"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="100" height="100" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3Cpattern id="whatsapp-bg" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse"%3E%3Cpath d="M25 25h50v50h-50z" fill="none" stroke="%23e5e7eb" stroke-width="0.5" opacity="0.3"/%3E%3C/pattern%3E%3C/defs%3E%3Crect width="100" height="100" fill="url(%23whatsapp-bg)"/%3E%3C/svg%3E")',
          backgroundColor: '#f0f2f5'
        }}
      >
        <div className="space-y-4 max-w-md mx-auto">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${message.sender === 'user'
                ? 'bg-green-500 text-white rounded-br-md'
                : 'bg-white text-gray-900 rounded-bl-md shadow-sm'
                }`}>
                <p className="whitespace-pre-line text-sm">{message.text}</p>

                {message.buttons && (
                  <div className="mt-3 space-y-2">
                    {message.buttons.map((button, index) => (
                      <button
                        key={index}
                        onClick={() => handleButtonClick(button.action, button.text)}
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-3 rounded-lg text-sm font-medium transition-colors"
                      >
                        {button.text}
                      </button>
                    ))}
                  </div>
                )}

                <p className={`text-xs mt-2 ${message.sender === 'user' ? 'text-green-100' : 'text-gray-500'
                  }`}>
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Input Area */}
      <div className="bg-white border-t border-gray-200 p-4">
        <div className="max-w-md mx-auto flex items-center space-x-3">
          <div className="flex-1 relative">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder={language === 'hi' ? 'मैसेज टाइप करें...' : 'Type a message...'}
              className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-full focus:border-green-500 focus:outline-none"
            />
            <button className="absolute right-3 top-3 text-gray-400 hover:text-gray-600">
              <Mic size={18} />
            </button>
          </div>

          <button
            onClick={handleSendMessage}
            disabled={!inputText.trim()}
            className="bg-green-500 hover:bg-green-600 disabled:bg-gray-300 text-white p-3 rounded-full transition-colors"
          >
            <Send size={18} />
          </button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white border-t border-gray-200 p-4">
        <div className="max-w-md mx-auto">
          <p className="text-gray-600 text-sm mb-3 text-center">
            {language === 'hi' ? 'त्वरित प्रश्न:' : 'Quick questions:'}
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => handleButtonClick('potato_price', language === 'hi' ? 'आलू की कीमत' : 'Potato prices')}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-full text-sm transition-colors"
            >
              {language === 'hi' ? '🥔 आलू की कीमत' : '🥔 Potato prices'}
            </button>
            <button
              onClick={() => handleButtonClick('onion_price', language === 'hi' ? 'प्याज की कीमत' : 'Onion prices')}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-full text-sm transition-colors"
            >
              {language === 'hi' ? '🧅 प्याज की कीमत' : '🧅 Onion prices'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppPage;