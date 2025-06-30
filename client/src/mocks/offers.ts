import { FullOffer } from "../types/offer";

export const offers: FullOffer[] = [
  {
    id: '1',
    title: 'Wood and stone place',
    description: 'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families.',
    type: 'apartment',
    price: 370,
    images: [
      '/img/20.jpg',
      '/img/17.jpg',
      '/img/16.jpg',
      '/img/15.jpg',
      '/img/2.jpg',
      '/img/7.jpg'
    ],
    city: {
      name: 'Paris',
      location: {
        latitude: 48.8566,
        longitude: 2.3522,
        zoom: 13
      }
    },
    location: {
      latitude: 48.8686,
      longitude: 2.3425,
      zoom: 16
    },
    goods: [
      'Heating',
      'Wi-Fi',
      'Fridge',
      'Laptop friendly workspace',
      'Baby seat',
      'Air conditioning',
      'Washer',
      'Towels',
      'Dishwasher',
      'Kitchen',
      'Washing machine',
      'Breakfast',
      'Coffee machine'
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: '/img/avatar-angelina.jpg'
    },
    isPremium: false,
    isFavorite: true,
    rating: 4.9,
    bedrooms: 2,
    maxAdults: 3,
    previewImage: '/img/20.jpg'
  },
  {
    id: '2',
    title: 'Elegant studio near Eiffel Tower',
    description: 'Stylish studio with a breathtaking view of the Eiffel Tower, perfect for couples.',
    type: 'studio',
    price: 420,
    images: [
      '/img/20.jpg',
      '/img/17.jpg',
      '/img/16.jpg',
      '/img/15.jpg',
      '/img/2.jpg',
      '/img/7.jpg'
    ],
    city: {
      name: 'Paris',
      location: {
        latitude: 48.8566,
        longitude: 2.3522,
        zoom: 13
      }
    },
    location: {
      latitude: 48.8575,
      longitude: 2.3515,
      zoom: 16
    },
    goods: [
      'Wi-Fi',
      'Air conditioning',
      'Kitchen',
      'TV',
      'Elevator'
    ],
    host: {
      isPro: true,
      name: 'Max',
      avatarUrl: '/img/avatar-max.jpg'
    },
    isPremium: true,
    isFavorite: false,
    rating: 4.7,
    bedrooms: 1,
    maxAdults: 2,
    previewImage: '/img/20.jpg'
  },
  {
    id: '15',
    title: 'Modern apartment near Elbphilharmonie',
    description: 'Contemporary apartment located near the famous Elbphilharmonie, ideal for music lovers.',
    type: 'apartment',
    price: 430,
    images: [
      '/img/20.jpg',
      '/img/17.jpg',
      '/img/16.jpg',
      '/img/15.jpg',
      '/img/2.jpg',
      '/img/7.jpg'
    ],
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.5511,
        longitude: 9.9937,
        zoom: 13
      }
    },
    location: {
      latitude: 53.5515,
      longitude: 9.9940,
      zoom: 16
    },
    goods: [
      'Wi-Fi',
      'Heating',
      'Kitchen',
      'Dishwasher',
      'Washing machine',
      'TV',
      'Balcony'
    ],
    host: {
      isPro: true,
      name: 'Oliver',
      avatarUrl: '/img/avatar-max.jpg'
    },
    isPremium: true,
    isFavorite: false,
    rating: 4.7,
    bedrooms: 2,
    maxAdults: 4,
    previewImage: '/img/20.jpg'
  },
  {
    id: '16',
    title: 'Cozy studio in St. Pauli',
    description: 'Charming studio in the vibrant St. Pauli district, perfect for solo travelers or couples.',
    type: 'studio',
    price: 290,
    images: [
      '/img/20.jpg',
      '/img/17.jpg',
      '/img/16.jpg',
      '/img/15.jpg',
      '/img/2.jpg',
      '/img/7.jpg'
    ],
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.5511,
        longitude: 9.9937,
        zoom: 13
      }
    },
    location: {
      latitude: 53.5508,
      longitude: 9.9935,
      zoom: 16
    },
    goods: [
      'Wi-Fi',
      'Heating',
      'Kitchenette',
      'Coffee machine',
      'Iron'
    ],
    host: {
      isPro: false,
      name: 'Sophie',
      avatarUrl: '/img/avatar-sophie.jpg'
    },
    isPremium: false,
    isFavorite: true,
    rating: 4.3,
    bedrooms: 1,
    maxAdults: 2,
    previewImage: '/img/16.jpg'
  },
  {
    id: '17',
    title: 'Luxury penthouse with harbor view',
    description: 'Stunning penthouse offering breathtaking views of the harbor, perfect for a luxurious stay.',
    type: 'apartment',
    price: 620,
    images: [
      '/img/20.jpg',
      '/img/17.jpg',
      '/img/16.jpg',
      '/img/15.jpg',
      '/img/2.jpg',
      '/img/7.jpg'
    ],
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.5511,
        longitude: 9.9937,
        zoom: 13
      }
    },
    location: {
      latitude: 53.5513,
      longitude: 9.9939,
      zoom: 16
    },
    goods: [
      'Wi-Fi',
      'Air conditioning',
      'Kitchen',
      'Dishwasher',
      'Washing machine',
      'TV',
      'Balcony',
      'Hot tub'
    ],
    host: {
      isPro: true,
      name: 'Lukas',
      avatarUrl: '/img/avatar-lukas.jpg'
    },
    isPremium: true,
    isFavorite: false,
    rating: 4.9,
    bedrooms: 3,
    maxAdults: 5,
    previewImage: '/img/17.jpg'
  },
  {
    id: '6',
    title: 'Charming studio near Grand Place',
    description: 'A cozy studio located just a few steps from the Grand Place, ideal for exploring Brussels.',
    type: 'room',
    price: 210,
    images: [
      '/img/20.jpg',
      '/img/17.jpg',
      '/img/16.jpg',
      '/img/15.jpg',
      '/img/2.jpg',
      '/img/7.jpg'
    ],
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.8503,
        longitude: 4.3517,
        zoom: 13
      }
    },
    location: {
      latitude: 50.8505,
      longitude: 4.3520,
      zoom: 16
    },
    goods: [
      'Wi-Fi',
      'Kitchenette',
      'Coffee machine',
      'Iron'
    ],
    host: {
      isPro: false,
      name: 'Sophie',
      avatarUrl: '/img/avatar-sophie.jpg'
    },
    isPremium: false,
    isFavorite: true,
    rating: 4.2,
    bedrooms: 1,
    maxAdults: 1,
    previewImage: '/img/20.jpg'
  }
];
