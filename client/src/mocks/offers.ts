import { FullOffer } from "../types/offer";

export const offers: FullOffer[] = [
  {
    id: 'bbb06a0e-3f92-446d-9a68-cb64b5d38e2b',
    title: 'Wood and stone place',
    description: 'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families',
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
        latitude: 48.85661,
        longitude: 2.353499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.868610000000004,
      longitude: 2.342499,
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
    id: 'ccc16b1f-4g83-557e-8b79-dc75b6e49f3c',
    title: 'Modern loft in city center',
    description: 'Bright and stylish apartment with panoramic views of the city',
    type: 'house',
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
      name: 'Cologne',
      location: {
        latitude: 50.93753,
        longitude: 6.96028,
        zoom: 13
      }
    },
    location: {
      latitude: 50.94123,
      longitude: 6.95821,
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
    id: 'ddd27c2g-5h94-668f-9c8a-ed86c7f50g4d',
    title: 'Cozy studio near Grand Place',
    description: 'Charming studio in the heart of Brussels, perfect for solo travelers',
    type: 'room',
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
      name: 'Brussels',
      location: {
        latitude: 50.85045,
        longitude: 4.34878,
        zoom: 13
      }
    },
    location: {
      latitude: 50.84876,
      longitude: 4.35291,
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
      avatarUrl: '/img/avatar-angelina.jpg'
    },
    isPremium: false,
    isFavorite: true,
    rating: 4.5,
    bedrooms: 1,
    maxAdults: 1,
    previewImage: '/img/20.jpg'
  },
  {
    id: 'eee38d3h-6i05-779g-0d9b-fe97d8g61h5e',
    title: 'Canal view apartment',
    description: 'Luxurious apartment with direct view on Amsterdam canals',
    type: 'apartment',
    price: 510,
    images: [
      '/img/20.jpg',
      '/img/17.jpg',
      '/img/16.jpg',
      '/img/15.jpg',
      '/img/2.jpg',
      '/img/7.jpg'
    ],
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 13
      }
    },
    location: {
      latitude: 52.369543,
      longitude: 4.896976,
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
    rating: 4.8,
    bedrooms: 3,
    maxAdults: 4,
    previewImage: '/img/20.jpg'
  }
];