import { Logo } from "../../components/logo/logo";
import { CitiesCardList } from "../../components/cities-card-list/cities-card-list";
import { OffersList } from "../../types/offer";
import Map from "../../components/map/map";
import { useState } from "react";

type MainPageProps = {
  offersList: OffersList[];
};

function MainPage({ offersList }: MainPageProps): React.JSX.Element {
  const [selectedPointId, setSelectedPointId] = useState<string | null>(null);
  const [activeCity, setActiveCity] = useState('Amsterdam');

  // Фильтруем предложения по выбранному городу
  const filteredOffers = offersList

  const points = filteredOffers.map((offer) => ({
    id: offer.id,
    title: offer.title,
    lat: offer.location.latitude,
    lng: offer.location.longitude,
  }));

  const currentCity = filteredOffers[0]?.city || {
    name: 'Amsterdam',
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 12
    }
  };

  const mapCity = {
    name: currentCity.name,
    lat: currentCity.location.latitude,
    lng: currentCity.location.longitude,
    zoom: currentCity.location.zoom
  };

  const handleCityClick = (city: string) => {
    setActiveCity(city);
    setSelectedPointId(null);
  };

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo></Logo>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
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
            <ul className="locations__list tabs__list">
              <li className="locations__item">
                <a 
                  className={`locations__item-link tabs__item ${activeCity === 'Paris' ? 'tabs__item--active' : ''}`}
                  href="#"
                  onClick={() => handleCityClick('Paris')}
                >
                  <span>Paris</span>
                </a>
              </li>
              <li className="locations__item">
                <a 
                  className={`locations__item-link tabs__item ${activeCity === 'Cologne' ? 'tabs__item--active' : ''}`}
                  href="#"
                  onClick={() => handleCityClick('Cologne')}
                >
                  <span>Cologne</span>
                </a>
              </li>
              <li className="locations__item">
                <a 
                  className={`locations__item-link tabs__item ${activeCity === 'Brussels' ? 'tabs__item--active' : ''}`}
                  href="#"
                  onClick={() => handleCityClick('Brussels')}
                >
                  <span>Brussels</span>
                </a>
              </li>
              <li className="locations__item">
                <a 
                  className={`locations__item-link tabs__item ${activeCity === 'Amsterdam' ? 'tabs__item--active' : ''}`}
                  href="#"
                  onClick={() => handleCityClick('Amsterdam')}
                >
                  <span>Amsterdam</span>
                </a>
              </li>
              <li className="locations__item">
                <a 
                  className={`locations__item-link tabs__item ${activeCity === 'Hamburg' ? 'tabs__item--active' : ''}`}
                  href="#"
                  onClick={() => handleCityClick('Hamburg')}
                >
                  <span>Hamburg</span>
                </a>
              </li>
              <li className="locations__item">
                <a 
                  className={`locations__item-link tabs__item ${activeCity === 'Dusseldorf' ? 'tabs__item--active' : ''}`}
                  href="#"
                  onClick={() => handleCityClick('Dusseldorf')}
                >
                  <span>Dusseldorf</span>
                </a>
              </li>
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{filteredOffers.length} places to stay in {activeCity}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use href="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <CitiesCardList 
                offersList={filteredOffers}
                onCardHover={(id) => setSelectedPointId(id)}
                onCardLeave={() => setSelectedPointId(null)}
              />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  city={mapCity}
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