import { Product, VendorLocation, GroupOrder, DeliveryTask } from  "../types/types";

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Wheat Flour (Atta)',
    nameHi: 'गेहूं का आटा',
    category: 'Flour',
    image: 'https://images.pexels.com/photos/4198018/pexels-photo-4198018.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    suppliers: [
      { id: '1', name: 'Gupta Traders', rating: 4.5, pricePerKg: 45, distance: 2.3, deliveryTime: '2-4 hours', trustScore: 92, location: 'Sector 15' },
      { id: '2', name: 'Sharma Mills', rating: 4.8, pricePerKg: 42, distance: 4.1, deliveryTime: '4-6 hours', trustScore: 88, location: 'Market Road' }
    ]
  },
  {
    id: '2',
    name: 'Cooking Oil',
    nameHi: 'खाना पकाने का तेल',
    category: 'Oil',
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    suppliers: [
      { id: '3', name: 'Fresh Oil Co.', rating: 4.2, pricePerKg: 180, distance: 1.8, deliveryTime: '1-3 hours', trustScore: 85, location: 'Central Market' },
      { id: '4', name: 'Golden Oil Mills', rating: 4.6, pricePerKg: 175, distance: 3.2, deliveryTime: '3-5 hours', trustScore: 90, location: 'Industrial Area' }
    ]
  },
  {
    id: '3',
    name: 'Onions',
    nameHi: 'प्याज',
    category: 'Vegetables',
    image: 'https://images.pexels.com/photos/144248/onions-food-flame-cooking-144248.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    suppliers: [
      { id: '5', name: 'Veggie Fresh', rating: 4.3, pricePerKg: 35, distance: 1.5, deliveryTime: '2-4 hours', trustScore: 87, location: 'Mandi Road' },
      { id: '6', name: 'Farm Direct', rating: 4.7, pricePerKg: 32, distance: 2.8, deliveryTime: '4-6 hours', trustScore: 91, location: 'Agriculture Market' }
    ]
  },
  {
    id: '4',
    name: 'Potatoes',
    nameHi: 'आलू',
    category: 'Vegetables',
    image: 'https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    suppliers: [
      { id: '5', name: 'Veggie Fresh', rating: 4.3, pricePerKg: 25, distance: 1.5, deliveryTime: '2-4 hours', trustScore: 87, location: 'Mandi Road' },
      { id: '7', name: 'Punjab Potatoes', rating: 4.5, pricePerKg: 22, distance: 3.5, deliveryTime: '5-7 hours', trustScore: 89, location: 'Wholesale Market' }
    ]
  },
  {
    id: '5',
    name: 'Chickpea Flour (Besan)',
    nameHi: 'बेसन',
    category: 'Flour',
    image: 'https://images.pexels.com/photos/4198018/pexels-photo-4198018.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    suppliers: [
      { id: '1', name: 'Gupta Traders', rating: 4.5, pricePerKg: 85, distance: 2.3, deliveryTime: '2-4 hours', trustScore: 92, location: 'Sector 15' },
      { id: '8', name: 'Dal Mill Express', rating: 4.4, pricePerKg: 82, distance: 2.9, deliveryTime: '3-5 hours', trustScore: 86, location: 'Dal Market' }
    ]
  },
  {
    id: '6',
    name: 'Tomatoes',
    nameHi: 'टमाटर',
    category: 'Vegetables',
    image: 'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    suppliers: [
      { id: '5', name: 'Veggie Fresh', rating: 4.3, pricePerKg: 45, distance: 1.5, deliveryTime: '2-4 hours', trustScore: 87, location: 'Mandi Road' },
      { id: '9', name: 'Red Gold Farms', rating: 4.6, pricePerKg: 42, distance: 4.2, deliveryTime: '4-6 hours', trustScore: 88, location: 'Tomato Hub' }
    ]
  }
];

export const mockVendorLocations: VendorLocation[] = [
  {
    id: '1',
    name: 'Rajesh Chaat Corner',
    specialty: 'Street Food',
    location: { lat: 28.6139, lng: 77.2090, address: 'Connaught Place, Delhi' },
    rating: 4.5,
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    dishes: ['Pani Puri', 'Bhel Puri', 'Sev Puri']
  },
  {
    id: '2',
    name: 'Mumbai Pav Bhaji',
    specialty: 'Pav Bhaji',
    location: { lat: 28.6129, lng: 77.2295, address: 'India Gate, Delhi' },
    rating: 4.8,
    image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    dishes: ['Pav Bhaji', 'Vada Pav', 'Misal Pav']
  },
  {
    id: '3',
    name: 'Dosa Point',
    specialty: 'South Indian',
    location: { lat: 28.6289, lng: 77.2065, address: 'Chandni Chowk, Delhi' },
    rating: 4.3,
    image: 'https://images.pexels.com/photos/5560795/pexels-photo-5560795.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    dishes: ['Masala Dosa', 'Plain Dosa', 'Idli Sambhar']
  }
];

export const mockGroupOrders: GroupOrder[] = [
  {
    id: '1',
    title: 'Bulk Oil Purchase',
    products: ['Cooking Oil', 'Sunflower Oil'],
    participants: 8,
    discount: 15,
    minQuantity: 100,
    currentQuantity: 85,
    deadline: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
    creator: 'Ramesh Kumar'
  },
  {
    id: '2',
    title: 'Vegetable Bundle',
    products: ['Onions', 'Potatoes', 'Tomatoes'],
    participants: 12,
    discount: 20,
    minQuantity: 200,
    currentQuantity: 180,
    deadline: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
    creator: 'Priya Sharma'
  }
];

export const mockDeliveryTasks: DeliveryTask[] = [
  {
    id: '1',
    vendorName: 'Rajesh Chaat Corner',
    address: 'Connaught Place, Delhi',
    items: ['5kg Potatoes', '3kg Onions'],
    payment: 250,
    distance: '2.3 km',
    status: 'available'
  },
  {
    id: '2',
    vendorName: 'Mumbai Pav Bhaji',
    address: 'India Gate, Delhi',
    items: ['10kg Wheat Flour', '2L Oil'],
    payment: 180,
    distance: '1.8 km',
    status: 'available'
  }
];