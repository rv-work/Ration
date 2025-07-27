export interface User {
  id: string;
  name: string;
  phone: string;
  language: 'hi' | 'en';
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  vendorType: string;
  rating: number;
  trustScore: number;
}

export interface Product {
  id: string;
  name: string;
  nameHi: string;
  category: string;
  image: string;
  suppliers: Supplier[];
}

export interface Supplier {
  id: string;
  name: string;
  rating: number;
  pricePerKg: number;
  distance: number;
  deliveryTime: string;
  trustScore: number;
  location: string;
}

export interface Order {
  id: string;
  items: OrderItem[];
  supplier: Supplier;
  status: 'pending' | 'packed' | 'out-for-delivery' | 'delivered';
  total: number;
  deliverySlot: string;
  createdAt: Date;
}

export interface OrderItem {
  product: Product;
  quantity: number;
  price: number;
}

export interface VendorLocation {
  id: string;
  name: string;
  specialty: string;
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  rating: number;
  image: string;
  dishes: string[];
}

export interface GroupOrder {
  id: string;
  title: string;
  products: string[];
  participants: number;
  discount: number;
  minQuantity: number;
  currentQuantity: number;
  deadline: Date;
  creator: string;
}

export interface DeliveryTask {
  id: string;
  vendorName: string;
  address: string;
  items: string[];
  payment: number;
  distance: string;
  status: 'available' | 'accepted' | 'completed';
}