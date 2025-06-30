import { createReducer } from "@reduxjs/toolkit";
import { offersList } from "../mocks/offers-list";
import { getCity } from "../utils/utils";
import { changeCity, setOffers } from "./action";
import { CITIES_LOCATION } from "../const";
import { CityOffer } from "../types/offer";
import { OffersList } from "../types/offer";

const defaultCity = getCity('Paris', CITIES_LOCATION) as CityOffer;

type State = {
  city: CityOffer;
  offers: OffersList[];
};

const initialState: State = {
  city: defaultCity,
  offers: offersList
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    });
});

export { reducer };