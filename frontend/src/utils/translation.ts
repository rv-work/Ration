export const translations = {
  en: {
    // Common
    welcome: 'Welcome',
    login: 'Login',
    logout: 'Logout',
    profile: 'Profile',
    settings: 'Settings',
    home: 'Home',
    back: 'Back',
    next: 'Next',
    cancel: 'Cancel',
    confirm: 'Confirm',
    save: 'Save',
    loading: 'Loading...',
    
    // Login
    phoneNumber: 'Phone Number',
    enterPhone: 'Enter your phone number',
    sendOTP: 'Send OTP',
    enterOTP: 'Enter OTP',
    verifyOTP: 'Verify OTP',
    selectLanguage: 'Select Language',
    english: 'English',
    hindi: 'हिन्दी',
    
    // Menu Planner
    menuPlanner: 'Smart Menu Planner',
    expectedFootfall: 'Expected Footfall',
    weather: 'Weather',
    plannedItems: 'Planned Items',
    getRecommendations: 'Get Recommendations',
    recommendations: 'Recommendations',
    
    // Marketplace
    marketplace: 'Product Marketplace',
    searchProducts: 'Search products...',
    addToCart: 'Add to Cart',
    cart: 'Cart',
    checkout: 'Checkout',
    
    // Orders
    orders: 'My Orders',
    orderStatus: 'Order Status',
    pending: 'Pending',
    packed: 'Packed',
    outForDelivery: 'Out for Delivery',
    delivered: 'Delivered',
    
    // Navigation
    planner: 'Planner',
    market: 'Market',
    streethub: 'StreetHub',
    groupOrders: 'Group Orders',
    whatsapp: 'WhatsApp',
    delivery: 'Delivery',
    saathicard: 'SaathiCard'
  },
  hi: {
    // Common
    welcome: 'स्वागत है',
    login: 'लॉगिन',
    logout: 'लॉगआउट',
    profile: 'प्रोफाइल',
    settings: 'सेटिंग्स',
    home: 'होम',
    back: 'वापस',
    next: 'आगे',
    cancel: 'रद्द करें',
    confirm: 'पुष्टि करें',
    save: 'सहेजें',
    loading: 'लोड हो रहा है...',
    
    // Login
    phoneNumber: 'फोन नंबर',
    enterPhone: 'अपना फोन नंबर दर्ज करें',
    sendOTP: 'OTP भेजें',
    enterOTP: 'OTP दर्ज करें',
    verifyOTP: 'OTP सत्यापित करें',
    selectLanguage: 'भाषा चुनें',
    english: 'English',
    hindi: 'हिन्दी',
    
    // Menu Planner
    menuPlanner: 'स्मार्ट मेन्यू प्लानर',
    expectedFootfall: 'अपेक्षित ग्राहक संख्या',
    weather: 'मौसम',
    plannedItems: 'नियोजित आइटम',
    getRecommendations: 'सुझाव प्राप्त करें',
    recommendations: 'सुझाव',
    
    // Marketplace
    marketplace: 'उत्पाद बाज़ार',
    searchProducts: 'उत्पाद खोजें...',
    addToCart: 'कार्ट में जोड़ें',
    cart: 'कार्ट',
    checkout: 'चेकआउट',
    
    // Orders
    orders: 'मेरे ऑर्डर',
    orderStatus: 'ऑर्डर स्थिति',
    pending: 'लंबित',
    packed: 'पैक किया गया',
    outForDelivery: 'डिलीवरी के लिए',
    delivered: 'वितरित',
    
    // Navigation
    planner: 'योजना',
    market: 'बाज़ार',
    streethub: 'स्ट्रीटहब',
    groupOrders: 'समूह ऑर्डर',
    whatsapp: 'व्हाट्सऐप',
    delivery: 'डिलीवरी',
    saathicard: 'साथी कार्ड'
  }
};

export const t = (key: string, language: 'en' | 'hi' = 'en'): string => {
  return translations[language][key as keyof typeof translations['en']] || key;
};