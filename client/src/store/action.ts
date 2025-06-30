import { createAction } from '@reduxjs/toolkit';
import { CityOffer,OffersList } from '../types/offer';

const changeCity = createAction('offers/changeCity',(city:CityOffer)=>({
    payload:city
}));

const setOffers = createAction('offers/setOffers', (offers: OffersList[]) => ({
  payload: offers
}));

export {changeCity, setOffers};