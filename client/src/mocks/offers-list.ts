import { OffersList } from '../types/offer';

export const offersList: OffersList[] = [
  // Paris - 3 предложения
  {
    id: '1',
    title: 'Wood and stone place',
    type: 'apartment',
    price: 370,
    previewImage: 'img/2.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.8566,
        longitude: 2.3522,
        zoom: 13
      }
    },
    location: {
      latitude: 48.8588,
      longitude: 2.3522,
      zoom: 16
    },
    isPremium: false,
    isFavorite: true,
    rating: 4.9
  },
  {
    id: '2',
    title: 'Elegant studio near Eiffel Tower',
    type: 'studio',
    price: 420,
    previewImage: 'img/7.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.8566,
        longitude: 2.3522,
        zoom: 13
      }
    },
    location: {
      latitude: 48.5575,
      longitude: 2.1515,
      zoom: 16
    },
    isPremium: true,
    isFavorite: false,
    rating: 4.7
  },
  {
    id: '3',
    title: 'Luxury apartment in Montmartre',
    type: 'apartment',
    price: 510,
    previewImage: 'img/15.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.8566,
        longitude: 2.3522,
        zoom: 13
      }
    },
    location: {
      latitude: 48.9592,
      longitude: 2.5530,
      zoom: 16
    },
    isPremium: true,
    isFavorite: false,
    rating: 4.8
  },

  // Cologne - 2 предложения
  {
    id: '4',
    title: 'Modern loft in city center',
    type: 'house',
    price: 320,
    previewImage: 'img/16.jpg',
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.9375,
        longitude: 6.9603,
        zoom: 13
      }
    },
    location: {
      latitude: 50.9380,
      longitude: 6.9610,
      zoom: 16
    },
    isPremium: true,
    isFavorite: false,
    rating: 4.5
  },
  {
    id: '5',
    title: 'Cozy apartment near Cathedral',
    type: 'apartment',
    price: 290,
    previewImage: 'img/17.jpg',
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.9375,
        longitude: 6.9603,
        zoom: 13
      }
    },
    location: {
      latitude: 50.7370,
      longitude: 6.7595,
      zoom: 16
    },
    isPremium: false,
    isFavorite: true,
    rating: 4.3
  },

  // Brussels - 4 предложения
  {
    id: '6',
    title: 'Charming studio near Grand Place',
    type: 'room',
    price: 210,
    previewImage: 'img/20.jpg',
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
    isPremium: false,
    isFavorite: true,
    rating: 4.2
  },
  {
    id: '7',
    title: 'Spacious loft in EU district',
    type: 'apartment',
    price: 380,
    previewImage: 'img/2.jpg',
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.8503,
        longitude: 4.3517,
        zoom: 13
      }
    },
    location: {
      latitude: 50.7498,
      longitude: 4.4510,
      zoom: 16
    },
    isPremium: true,
    isFavorite: false,
    rating: 4.6
  },
  {
    id: '8',
    title: 'Modern apartment with terrace',
    type: 'apartment',
    price: 450,
    previewImage: 'img/7.jpg',
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.8503,
        longitude: 4.3517,
        zoom: 13
      }
    },
    location: {
      latitude: 50.7810,
      longitude: 4.3925,
      zoom: 16
    },
    isPremium: true,
    isFavorite: false,
    rating: 4.8
  },
  {
    id: '9',
    title: 'Budget room in city center',
    type: 'room',
    price: 180,
    previewImage: 'img/15.jpg',
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.8503,
        longitude: 4.3517,
        zoom: 13
      }
    },
    location: {
      latitude: 50.8000,
      longitude: 4.3655,
      zoom: 16
    },
    isPremium: false,
    isFavorite: false,
    rating: 3.9
  },

  // Amsterdam - 5 предложений
  {
    id: '10',
    title: 'Canal view apartment',
    type: 'apartment',
    price: 520,
    previewImage: 'img/16.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3702,
        longitude: 4.8952,
        zoom: 13
      }
    },
    location: {
      latitude: 52.5705,
      longitude: 4.7955,
      zoom: 16
    },
    isPremium: true,
    isFavorite: false,
    rating: 4.9
  },
  {
    id: '11',
    title: 'Historic house in Jordaan',
    type: 'house',
    price: 480,
    previewImage: 'img/17.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3702,
        longitude: 4.8952,
        zoom: 13
      }
    },
    location: {
      latitude: 52.5698,
      longitude: 4.9948,
      zoom: 16
    },
    isPremium: false,
    isFavorite: true,
    rating: 4.7
  },
  {
    id: '12',
    title: 'Modern studio near Museumplein',
    type: 'studio',
    price: 390,
    previewImage: 'img/20.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3702,
        longitude: 4.8952,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3100,
      longitude: 4.8150,
      zoom: 16
    },
    isPremium: true,
    isFavorite: false,
    rating: 4.5
  },
  {
    id: '13',
    title: 'Charming loft in De Pijp',
    type: 'apartment',
    price: 410,
    previewImage: 'img/2.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3702,
        longitude: 4.8952,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3203,
      longitude: 4.7953,
      zoom: 16
    },
    isPremium: false,
    isFavorite: true,
    rating: 4.6
  },
  {
    id: '14',
    title: 'Budget room in city center',
    type: 'room',
    price: 220,
    previewImage: 'img/7.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3702,
        longitude: 4.8952,
        zoom: 13
      }
    },
    location: {
      latitude: 52.4101,
      longitude: 4.9251,
      zoom: 16
    },
    isPremium: false,
    isFavorite: false,
    rating: 3.8
  },

  // Hamburg - 3 предложения
  {
    id: '15',
    title: 'Modern apartment near Elbphilharmonie',
    type: 'apartment',
    price: 430,
    previewImage: 'img/15.jpg',
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
    isPremium: true,
    isFavorite: false,
    rating: 4.7
  },
  {
    id: '16',
    title: 'Cozy studio in St. Pauli',
    type: 'studio',
    price: 290,
    previewImage: 'img/16.jpg',
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
    isPremium: false,
    isFavorite: true,
    rating: 4.3
  },
  {
    id: '17',
    title: 'Luxury penthouse with harbor view',
    type: 'apartment',
    price: 620,
    previewImage: 'img/17.jpg',
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
    isPremium: true,
    isFavorite: false,
    rating: 4.9
  },

  // Dusseldorf - 2 предложения
  {
    id: '18',
    title: 'Modern apartment in MedienHafen',
    type: 'apartment',
    price: 380,
    previewImage: 'img/20.jpg',
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.2277,
        longitude: 6.7735,
        zoom: 13
      }
    },
    location: {
      latitude: 51.2279,
      longitude: 6.7737,
      zoom: 16
    },
    isPremium: true,
    isFavorite: false,
    rating: 4.6
  },
  {
    id: '19',
    title: 'Budget room in Altstadt',
    type: 'room',
    price: 190,
    previewImage: 'img/2.jpg',
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.2277,
        longitude: 6.7735,
        zoom: 13
      }
    },
    location: {
      latitude: 51.2275,
      longitude: 6.7733,
      zoom: 16
    },
    isPremium: false,
    isFavorite: false,
    rating: 3.9
  }
];