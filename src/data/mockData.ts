import { Hotel, ReviewSource } from '../types';

export const mockHotels: Hotel[] = [
  {
    id: 'hotel-1',
    name: 'The Grand Palace Hotel',
    location: 'Mumbai, India',
    address: '123 Marine Drive, Mumbai, Maharashtra 400001',
    phone: '+91 22 1234 5678',
    website: 'https://grandpalace.com',
    star_rating: 5,
    image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: 'hotel-2',
    name: 'Seaside Resort & Spa',
    location: 'Goa, India',
    address: '456 Beach Road, Calangute, Goa 403516',
    phone: '+91 832 123 4567',
    website: 'https://seasideresort.com',
    star_rating: 4,
    image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: 'hotel-3',
    name: 'Mountain View Lodge',
    location: 'Manali, India',
    address: '789 Hill Station Road, Manali, Himachal Pradesh 175131',
    phone: '+91 1902 123456',
    website: 'https://mountainviewlodge.com',
    star_rating: 3,
    image: 'https://images.pexels.com/photos/2174656/pexels-photo-2174656.jpeg?auto=compress&cs=tinysrgb&w=300'
  }
];

export const mockReviewSources: ReviewSource[] = [
  {
    id: 'booking',
    name: 'Booking.com',
    url: 'https://booking.com',
    enabled: true,
    status: 'active',
    last_scraped: new Date().toISOString()
  },
  {
    id: 'agoda',
    name: 'Agoda',
    url: 'https://agoda.com',
    enabled: true,
    status: 'active',
    last_scraped: new Date(Date.now() - 3600000).toISOString()
  },
  {
    id: 'google',
    name: 'Google Reviews',
    url: 'https://maps.google.com',
    enabled: true,
    status: 'active',
    last_scraped: new Date(Date.now() - 1800000).toISOString()
  },
  {
    id: 'tripadvisor',
    name: 'TripAdvisor',
    url: 'https://tripadvisor.com',
    enabled: true,
    status: 'active',
    last_scraped: new Date(Date.now() - 7200000).toISOString()
  },
  {
    id: 'makemytrip',
    name: 'MakeMyTrip',
    url: 'https://makemytrip.com',
    enabled: false,
    status: 'pending',
    last_scraped: undefined
  }
];