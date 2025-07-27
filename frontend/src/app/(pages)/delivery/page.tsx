"use client";

import React, { useState } from "react";
import { MapPin, Navigation, CheckCircle, Truck, Users, TrendingUp, Clock, Zap, Award, Target, DollarSign, Calendar } from "lucide-react";
import { useApp } from "../../../context/AppContext";
import { mockDeliveryTasks } from "../../../data/mock";
import Header from "../../../components/Header";

const DeliveryPage: React.FC = () => {
  const { language } = useApp();
  const [userType, setUserType] = useState<"vendor" | "delivery">("vendor");
  const [acceptedTasks, setAcceptedTasks] = useState<string[]>([]);

  const handleAcceptTask = (taskId: string) => {
    setAcceptedTasks((prev) => [...prev, taskId]);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header title="LastMileX" showBack={true} />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* Hero Section */}
        <div className="text-center mb-8 lg:mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6 shadow-lg">
            <Truck className="text-white" size={40} />
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            LastMileX
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {language === "hi"
              ? "तेज़, भरोसेमंद और किफायती डिलीवरी सेवा - आपके बिजनेस के लिए"
              : "Fast, reliable and affordable delivery service for your business"}
          </p>
        </div>

        {/* User Type Toggle */}
        <div className="flex bg-white rounded-3xl p-2 shadow-lg max-w-md mx-auto mb-8 border border-gray-100">
          <button
            onClick={() => setUserType("vendor")}
            className={`flex-1 py-4 px-6 rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center ${userType === "vendor"
                ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg transform scale-105"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
          >
            <span className="mr-2 text-xl">🏪</span>
            {language === "hi" ? "वेंडर" : "Vendor"}
          </button>
          <button
            onClick={() => setUserType("delivery")}
            className={`flex-1 py-4 px-6 rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center ${userType === "delivery"
                ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg transform scale-105"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
          >
            <span className="mr-2 text-xl">🛵</span>
            {language === "hi" ? "डिलीवरी पार्टनर" : "Delivery Partner"}
          </button>
        </div>

        {/* Vendor View */}
        {userType === "vendor" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">

              {/* Post Delivery Need */}
              <div className="bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 rounded-3xl p-6 lg:p-8 text-white shadow-xl transform hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-center space-x-6">
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
                    <Truck size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl lg:text-2xl mb-3">
                      {language === "hi" ? "डिलीवरी की जरूरत है?" : "Need Delivery?"}
                    </h3>
                    <p className="text-white/90 text-base lg:text-lg">
                      {language === "hi"
                        ? "अपनी डिलीवरी जरूरत पोस्ट करें और नजदीकी डिलीवरी पार्टनर से जुड़ें"
                        : "Post your delivery needs and connect with nearby delivery partners"}
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <button className="bg-white text-orange-600 font-bold py-3 px-6 rounded-2xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    {language === "hi" ? "डिलीवरी पोस्ट करें" : "Post Delivery Need"}
                  </button>
                </div>
              </div>

              {/* Active Deliveries */}
              <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Navigation className="mr-3 text-blue-600" size={28} />
                  {language === "hi" ? "सक्रिय डिलीवरी" : "Active Deliveries"}
                </h2>

                <div className="text-center py-12">
                  <div className="bg-gray-100 p-6 rounded-full inline-flex mb-6">
                    <Truck className="text-gray-400" size={48} />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    {language === "hi" ? "कोई सक्रिय डिलीवरी नहीं है" : "No active deliveries"}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {language === "hi"
                      ? "जब आप डिलीवरी पोस्ट करेंगे तो यहाँ दिखेगी"
                      : "Your posted delivery needs will appear here"}
                  </p>
                  <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-3 px-6 rounded-2xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    {language === "hi" ? "पहली डिलीवरी पोस्ट करें" : "Post First Delivery"}
                  </button>
                </div>
              </div>

              {/* Delivery Benefits */}
              <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Award className="mr-3 text-purple-600" size={28} />
                  {language === "hi" ? "डिलीवरी के फायदे" : "Delivery Benefits"}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-2xl">
                    <div className="bg-blue-500 p-3 rounded-xl">
                      <Clock className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {language === "hi" ? "तेज़ डिलीवरी" : "Fast Delivery"}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {language === "hi" ? "30-45 मिनट में" : "Within 30-45 minutes"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-2xl">
                    <div className="bg-green-500 p-3 rounded-xl">
                      <Target className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {language === "hi" ? "सही जगह" : "Accurate Delivery"}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {language === "hi" ? "GPS ट्रैकिंग" : "GPS tracking"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-purple-50 rounded-2xl">
                    <div className="bg-purple-500 p-3 rounded-xl">
                      <DollarSign className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {language === "hi" ? "किफायती दाम" : "Affordable Rates"}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {language === "hi" ? "₹20 से शुरू" : "Starting ₹20"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-orange-50 rounded-2xl">
                    <div className="bg-orange-500 p-3 rounded-xl">
                      <CheckCircle className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {language === "hi" ? "सुरक्षित" : "Safe & Secure"}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {language === "hi" ? "बीमा कवर" : "Insurance covered"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Vendor Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-6 space-y-6">

                {/* Delivery Stats */}
                <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
                  <h3 className="font-bold text-gray-900 text-lg mb-4 flex items-center">
                    <TrendingUp className="mr-2 text-green-600" size={20} />
                    {language === "hi" ? "आंकड़े" : "Stats"}
                  </h3>

                  <div className="space-y-4">
                    <div className="text-center bg-green-50 rounded-2xl p-4">
                      <p className="text-3xl font-bold text-green-600">23</p>
                      <p className="text-gray-600 text-sm">
                        {language === "hi" ? "पूर्ण डिलीवरी" : "Completed"}
                      </p>
                    </div>
                    <div className="text-center bg-blue-50 rounded-2xl p-4">
                      <p className="text-3xl font-bold text-blue-600">4.8</p>
                      <p className="text-gray-600 text-sm">
                        {language === "hi" ? "औसत रेटिंग" : "Avg Rating"}
                      </p>
                    </div>
                    <div className="text-center bg-purple-50 rounded-2xl p-4">
                      <p className="text-3xl font-bold text-purple-600">₹1,840</p>
                      <p className="text-gray-600 text-sm">
                        {language === "hi" ? "कुल बचत" : "Total Savings"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
                  <h3 className="font-bold text-gray-900 text-lg mb-4 flex items-center">
                    <Zap className="mr-2 text-orange-600" size={20} />
                    {language === "hi" ? "त्वरित कार्य" : "Quick Actions"}
                  </h3>

                  <div className="space-y-3">
                    <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold py-3 rounded-2xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-md flex items-center justify-center">
                      <Truck className="mr-2" size={18} />
                      {language === "hi" ? "जरूरी डिलीवरी" : "Urgent Delivery"}
                    </button>

                    <button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold py-3 rounded-2xl hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-md flex items-center justify-center">
                      <Calendar className="mr-2" size={18} />
                      {language === "hi" ? "शेड्यूल करें" : "Schedule Delivery"}
                    </button>

                    <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 rounded-2xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-md flex items-center justify-center">
                      <Navigation className="mr-2" size={18} />
                      {language === "hi" ? "ट्रैक करें" : "Track Orders"}
                    </button>
                  </div>
                </div>

                {/* Support */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-6 text-white shadow-xl">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-4">
                      <Users className="text-white" size={24} />
                    </div>
                    <h3 className="font-bold text-lg mb-2">
                      {language === "hi" ? "24/7 सहायता" : "24/7 Support"}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">
                      {language === "hi"
                        ? "कोई भी समस्या हो तो हमसे संपर्क करें"
                        : "Contact us for any delivery issues"}
                    </p>
                    <button className="w-full bg-white text-gray-900 font-semibold py-3 rounded-2xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                      {language === "hi" ? "सहायता केंद्र" : "Help Center"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Delivery Partner View */}
        {userType === "delivery" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">

              {/* Sign Up Card */}
              <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl p-6 lg:p-8 text-white shadow-xl transform hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-center space-x-6">
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
                    <Navigation size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl lg:text-2xl mb-3">
                      {language === "hi" ? "डिलीवरी पार्टनर बनें" : "Become a Delivery Partner"}
                    </h3>
                    <p className="text-white/90 text-base lg:text-lg">
                      {language === "hi"
                        ? "रोजाना ₹500-1500 कमाएं। लचीला समय, नकद भुगतान।"
                        : "Earn ₹500-1500 daily. Flexible timing, instant cash."}
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <button className="bg-white text-blue-600 font-bold py-3 px-6 rounded-2xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    {language === "hi" ? "अभी साइन अप करें" : "Sign Up Now"}
                  </button>
                </div>
              </div>

              {/* Available Tasks */}
              <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Target className="mr-3 text-orange-600" size={28} />
                  {language === "hi" ? "उपलब्ध कार्य" : "Available Tasks"}
                </h2>

                <div className="grid gap-6 md:grid-cols-2">
                  {mockDeliveryTasks.map((task) => (
                    <div key={task.id} className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-all duration-200 transform hover:scale-[1.02]">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="font-bold text-lg text-gray-900 mb-2">{task.vendorName}</h3>
                          <div className="flex items-center space-x-2 text-gray-600 text-sm mb-2">
                            <MapPin size={16} />
                            <span>{task.address}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-gray-600 text-sm">
                            <Navigation size={16} />
                            <span>{task.distance}</span>
                          </div>
                        </div>

                        <div className="text-right">
                          <p className="text-2xl font-bold text-green-600">₹{task.payment}</p>
                          <p className="text-gray-600 text-sm">
                            {language === "hi" ? "भुगतान" : "Payment"}
                          </p>
                        </div>
                      </div>

                      <div className="mb-6">
                        <p className="text-gray-600 text-sm mb-3 font-medium">
                          {language === "hi" ? "आइटम:" : "Items:"}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {task.items.map((item, index) => (
                            <span
                              key={index}
                              className="bg-white text-gray-700 px-3 py-1 rounded-lg text-sm font-medium border border-gray-200"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      {acceptedTasks.includes(task.id) ? (
                        <div className="flex items-center justify-center space-x-2 text-green-600 bg-green-50 py-3 rounded-xl border border-green-200">
                          <CheckCircle size={20} />
                          <span className="font-semibold">
                            {language === "hi" ? "स्वीकार किया गया" : "Accepted"}
                          </span>
                        </div>
                      ) : (
                        <button
                          onClick={() => handleAcceptTask(task.id)}
                          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                          {language === "hi" ? "कार्य स्वीकार करें" : "Accept Task"}
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Delivery Partner Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-6 space-y-6">

                {/* Earnings Summary */}
                <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
                  <h3 className="font-bold text-gray-900 text-lg mb-4 flex items-center">
                    <DollarSign className="mr-2 text-green-600" size={20} />
                    {language === "hi" ? "कमाई" : "Earnings"}
                  </h3>

                  <div className="space-y-4">
                    <div className="text-center bg-green-50 rounded-2xl p-4">
                      <p className="text-3xl font-bold text-green-600">₹1,240</p>
                      <p className="text-gray-600 text-sm">
                        {language === "hi" ? "आज की कमाई" : "Today's Earning"}
                      </p>
                    </div>
                    <div className="text-center bg-blue-50 rounded-2xl p-4">
                      <p className="text-3xl font-bold text-blue-600">12</p>
                      <p className="text-gray-600 text-sm">
                        {language === "hi" ? "पूर्ण कार्य" : "Tasks Done"}
                      </p>
                    </div>
                    <div className="text-center bg-purple-50 rounded-2xl p-4">
                      <p className="text-3xl font-bold text-purple-600">₹8,650</p>
                      <p className="text-gray-600 text-sm">
                        {language === "hi" ? "इस सप्ताह" : "This Week"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Performance */}
                <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
                  <h3 className="font-bold text-gray-900 text-lg mb-4 flex items-center">
                    <Award className="mr-2 text-orange-600" size={20} />
                    {language === "hi" ? "परफॉर्मेंस" : "Performance"}
                  </h3>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">
                        {language === "hi" ? "रेटिंग" : "Rating"}
                      </span>
                      <span className="font-bold text-yellow-600">4.9 ⭐</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">
                        {language === "hi" ? "समय पर डिलीवरी" : "On-time Delivery"}
                      </span>
                      <span className="font-bold text-green-600">98%</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">
                        {language === "hi" ? "स्वीकृति दर" : "Acceptance Rate"}
                      </span>
                      <span className="font-bold text-blue-600">95%</span>
                    </div>
                  </div>
                </div>

                {/* Partner Benefits */}
                <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl p-6 text-white shadow-xl">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-4">
                      <Award className="text-white" size={24} />
                    </div>
                    <h3 className="font-bold text-lg mb-2">
                      {language === "hi" ? "पार्टनर बेनिफिट्स" : "Partner Benefits"}
                    </h3>
                    <p className="text-white/90 text-sm mb-4">
                      {language === "hi"
                        ? "अधिक कमाएं, बेहतर सुविधाएं पाएं"
                        : "Earn more, get better benefits"}
                    </p>
                    <ul className="text-left text-white/90 text-sm space-y-2">
                      <li>• {language === "hi" ? "तुरंत भुगतान" : "Instant payments"}</li>
                      <li>• {language === "hi" ? "बीमा कवर" : "Insurance coverage"}</li>
                      <li>• {language === "hi" ? "24/7 सहायता" : "24/7 support"}</li>
                      <li>• {language === "hi" ? "बोनस इंसेंटिव" : "Bonus incentives"}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Live Tracking Demo */}
        <div className="mt-12">
          <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 max-w-4xl mx-auto">
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center">
              <Navigation className="mr-3 text-blue-600" size={28} />
              {language === "hi" ? "लाइव ट्रैकिंग डेमो" : "Live Tracking Demo"}
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Map Section */}
              <div className="bg-gradient-to-br from-green-100 via-blue-100 to-purple-100 rounded-2xl h-48 lg:h-64 flex items-center justify-center relative overflow-hidden">
                <div className="text-center z-10">
                  <Navigation className="text-blue-600 mx-auto mb-3 animate-pulse" size={32} />
                  <p className="text-gray-700 font-bold text-lg">
                    {language === "hi" ? "रीयल-टाइम GPS ट्रैकिंग" : "Real-time GPS Tracking"}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {language === "hi" ? "लाइव लोकेशन अपडेट" : "Live location updates"}
                  </p>
                </div>

                {/* Animated tracking dot */}
                <div className="absolute top-8 left-8 w-3 h-3 bg-blue-500 rounded-full animate-ping"></div>
                <div className="absolute bottom-12 right-16 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
              </div>

              {/* Status Timeline */}
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-green-50 rounded-2xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                    <span className="text-gray-900 font-medium">
                      {language === "hi" ? "पिकअप पूरा" : "Pickup Complete"}
                    </span>
                  </div>
                  <span className="text-gray-600 text-sm">2:30 PM</span>
                </div>

                <div className="flex justify-between items-center p-4 bg-blue-50 rounded-2xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
                    <span className="text-gray-900 font-medium">
                      {language === "hi" ? "डिलीवरी में" : "Out for Delivery"}
                    </span>
                  </div>
                  <span className="text-gray-600 text-sm">
                    {language === "hi" ? "15 मिनट में" : "ETA: 15 min"}
                  </span>
                </div>

                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                    <span className="text-gray-600">
                      {language === "hi" ? "डिलीवर किया गया" : "Delivered"}
                    </span>
                  </div>
                  <span className="text-gray-500 text-sm">
                    {language === "hi" ? "जल्द ही" : "Soon"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
            <h3 className="font-bold text-gray-900 text-xl mb-4">
              {language === "hi" ? "अपने बिजनेस को तेज़ी से बढ़ाएं" : "Scale Your Business Faster"}
            </h3>
            <p className="text-gray-600 mb-6">
              {language === "hi"
                ? "LastMileX के साथ जुड़ें और अपनी डिलीवरी को आसान बनाएं"
                : "Join LastMileX and make your deliveries effortless"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-3 px-6 rounded-2xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center">
                <Truck className="mr-2" size={20} />
                {language === "hi" ? "वेंडर के रूप में जुड़ें" : "Join as Vendor"}
              </button>
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 px-6 rounded-2xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center">
                <Navigation className="mr-2" size={20} />
                {language === "hi" ? "डिलीवरी पार्टनर बनें" : "Become Delivery Partner"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryPage;