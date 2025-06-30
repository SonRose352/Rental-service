import { MainPage } from "../../pages/main-page/main-page";
import { FavoritesPage } from "../../pages/favorites-page/favorites-page";
import { LoginPage } from "../../pages/login-page/login-page";
import { OfferPage } from "../../pages/offer-page/offer-page";
import { PageNotFound } from "../../pages/page-not-found/page-not-found";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppRoute, AuthorizationStatus } from "../../const";
import React from 'react';
import { PrivateRoute } from "../private-route/private-route";
import { FullOffer } from "../../types/offer";
import { OffersList } from "../../types/offer";

type AppMainPageProps = {
    offers: FullOffer[];
    offersList: OffersList[];
}


function App({offers}: AppMainPageProps): React.JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage/>}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginPage />}
        />
        <Route
            path={`${AppRoute.Offer}/:id`}
            element={<OfferPage offers={offers}/>}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
                authorizationStatus={AuthorizationStatus.NoAuth}
            >
                <FavoritesPage/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Offer}
          element={<OfferPage offers={offers} />}
        />
        <Route
          path="*"
          element={<PageNotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}


export { App };