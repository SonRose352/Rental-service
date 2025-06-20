import { OffersList } from '../types/offer';

export const offersList: OffersList[] = [
  {
    id: 'bbb06a0e-3f92-446d-9a68-cb64b5d38e2b',
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
    id: 'ccc16b1f-4g83-557e-8b79-dc75b6e49f3c',
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
    id: 'ddd27c2g-5h94-668f-9c8a-ed86c7f50g4d',
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
    id: 'eee38d3h-6i05-779g-0d9b-fe97d8g61h5e',
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