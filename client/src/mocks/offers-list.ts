import { OffersList } from '../types/offer';

export const offersList: OffersList[] = [
  {
    id: '1',
    title: 'Wood and stone place',
    type: 'apartment',
    price: 370,
    previewImage: 'img/20.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 16
    },
    isPremium: false,
    isFavorite: true,
    rating: 4.9
  },
  {
    id: '2',
    title: 'Modern loft in city center',
    type: 'house',
    price: 420,
    previewImage: 'img/17.jpg',
    city: {
      name: 'Cologne',
      location: {
        latitude: 52.3609553943508,
        longitude: 4.85309666406198,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 16
    },
    isPremium: true,
    isFavorite: false,
    rating: 4.7
  },
  {
    id: '3',
    title: 'Cozy studio near Grand Place',
    type: 'room',
    price: 290,
    previewImage: 'img/16.jpg',
    city: {
      name: 'Brussels',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.929309666406198,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 16
    },
    isPremium: false,
    isFavorite: true,
    rating: 4.5
  },
  {
    id: '4',
    title: 'Canal view apartment',
    type: 'apartment',
    price: 510,
    previewImage: 'img/7.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3809553943508,
        longitude: 4.939309666406198,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 16
    },
    isPremium: true,
    isFavorite: false,
    rating: 4.8
  }
];