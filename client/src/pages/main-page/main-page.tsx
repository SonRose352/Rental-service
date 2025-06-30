import { Logo } from "../../components/logo/logo";
import { CitiesCardList } from "../../components/cities-card-list/cities-card-list";
import { CitiesList } from "../../components/cities-list/cities-list";
import Map from "../../components/map/map";
import { useAppSelector, useAppDispatch } from '../../hooks';
import { changeCity } from '../../store/action';
import { getOffersByCity } from '../../utils/utils';
import { useState } from 'react';
import { CITIES_LOCATION } from "../../const";
import { SortOptions } from "../../components/sort-options/sort-options";
import { sortOffersByType } from '../../utils/utils';
import { SortOffer } from '../../types/sort';

function MainPage(): React.JSX.Element {
  const dispatch = useAppDispatch();
  const { city, offers } = useAppSelector((state) => state);
  const [selectedPointId, setSelectedPointId] = useState<string | null>(null);
  const [activeSortType, setActiveSortType] = useState<SortOffer>("Popular");

  // Фильтруем предложения по текущему городу
  const filteredOffers = getOffersByCity(city.name, offers);
  const sortedOffers = sortOffersByType(filteredOffers, activeSortType);

  const points = filteredOffers.map((offer) => ({
    id: offer.id,
    title: offer.title,
    lat: offer.location.latitude,
    lng: offer.location.longitude,
  }));

  const handleCityChange = (newCity: string) => {
    const cityData = CITIES_LOCATION.find(c => c.name === newCity);
    if (cityData) {
      dispatch(changeCity(cityData));
    }
  };

  const handleSortTypeChange = (newSortType: SortOffer) => {
    setActiveSortType(newSortType);
  };

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">Myemail@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList
              selectedCity={city}
              onCityChange={handleCityChange}
            />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{filteredOffers.length} places to stay in {city.name}</b>
              <SortOptions
                activeSorting={activeSortType}
                onChange={handleSortTypeChange}
              />
              <CitiesCardList
                offersList={sortedOffers}
                onCardHover={(id) => setSelectedPointId(id)}
                onCardLeave={() => setSelectedPointId(null)}
              />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  city={{
                    lat: city.location.latitude,
                    lng: city.location.longitude,
                    zoom: city.location.zoom
                  }}
                  points={points}
                  selectedPoint={points.find(p => p.id === selectedPointId) || null}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export { MainPage };