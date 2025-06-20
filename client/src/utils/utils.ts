import { CityOffer } from "../types/offer";
import { OffersList } from "../types/offer";
import { Point } from "../types/map";

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = { 
    month: 'long', 
    year: 'numeric' 
  };
  return date.toLocaleDateString('ru-RU', options);
}

export function getCity(city:string,CITIES_LOCATION:CityOffer[]){
    return (
        CITIES_LOCATION.find((local)=>
            local.name === city
        )
    );
}

export function getOffersByCity(city: CityOffer, offersList: OffersList[]): OffersList[] {
    return offersList.filter((offer) => offer.city.name === city.name);
}

export function getOffersByCityPoints(offers: OffersList[]){
    const points:Point[] = offers.map((offer)=>({
        id: offer.id,
        title: offer.title,
        lat: offer.location.latitude,
        lng: offer.location.longitude,
    }))
    return points;
}