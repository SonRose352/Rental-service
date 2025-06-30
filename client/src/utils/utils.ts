import { CityOffer } from "../types/offer";
import { OffersList } from "../types/offer";
import { Point } from "../types/map";
import { SortOffer } from "../types/sort";
import { SortOffersType } from "../const";

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = { 
    month: 'long', 
    year: 'numeric' 
  };
  return date.toLocaleDateString('ru-RU', options);
}

export const getCity = (cityName: string, cities: CityOffer[]): CityOffer | undefined => {
  return cities.find((city) => city.name === cityName);
};

export const getOffersByCity = (cityName: string, offers: OffersList[]): OffersList[] => {
  return offers.filter(offer => offer.city.name === cityName);
};

export function getOffersByCityPoints(offers: OffersList[]){
    const points:Point[] = offers.map((offer)=>({
        id: offer.id,
        title: offer.title,
        lat: offer.location.latitude,
        lng: offer.location.longitude,
    }))
    return points;
}

export function sortOffersByType (offers: OffersList[], type: SortOffer): OffersList[] {
    switch (type) {
        case SortOffersType.PriceToHigh:
            return offers.sort((a, b) => a.price - b.price);
        case SortOffersType.PriceToLow:
            return offers.sort((a, b) => b.price - a.price);
        case SortOffersType.TopRated:
            return offers.sort((a, b) => b.rating - a.rating);
        default:
            return offers;
    }
}