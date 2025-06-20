import { Logo } from "../../components/logo/logo";
import { FullOffer } from "../../types/offer";
import { PageNotFound } from "../page-not-found/page-not-found";
import { useParams } from "react-router-dom";
import { ReviewForm } from "../../components/review-form/review-form";
import { ReviewsList } from '../../components/reviews-list/reviews-list';
import Map from "../../components/map/map";
import { reviews } from '../../mocks/reviews';
import { CitiesCard } from "../../components/cities-card/cities-card";
import { useState } from "react";

type OfferProps = {
  offers: FullOffer[];
}

function OfferPage({ offers }: OfferProps) {
  const params = useParams();
  const offer = offers.find((item) => item.id === params.id);
  const [currentReviews, setCurrentReviews] = useState(reviews);
  const [selectedPointId, setSelectedPointId] = useState<string | null>(null);

  if (!offer) {
    return <PageNotFound />;
  }

  // Создаем точки для карты: текущее предложение + 3 ближайших
  const nearbyOffers = offers.slice(0, 3);
  const points = [
    {
      id: offer.id,
      title: offer.title,
      lat: offer.location.latitude,
      lng: offer.location.longitude,
    },
    ...nearbyOffers.map(offer => ({
      id: offer.id,
      title: offer.title,
      lat: offer.location.latitude,
      lng: offer.location.longitude,
    }))
  ];

  // Данные города для карты
  const city = {
    name: offer.city.name,
    lat: offer.city.location.latitude,
    lng: offer.city.location.longitude,
    zoom: offer.city.location.zoom
  };

  const handleReviewSubmit = (newReview: { rating: number; comment: string }) => {
    const addedReview = {
      id: `new-${Date.now()}`,
      date: new Date().toISOString(),
      user: {
        name: 'Current User',
        avatarUrl: '/img/avatar-default.jpg',
        isPro: false,
      },
      comment: newReview.comment,
      rating: newReview.rating,
    };
    setCurrentReviews([addedReview, ...currentReviews]);
  };

  const handleCardHover = (offerId: string) => {
    setSelectedPointId(offerId);
  };

  const handleCardLeave = () => {
    setSelectedPointId(null);
  };

  return (
    <div className="page">
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

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {offer.images.map((item) => (
                <div key={item} className="offer__image-wrapper">
                  <img className="offer__image" src={item} alt="Photo studio" />
                </div>
              ))}
            </div>
          </div>

          <div className="offer__container container">
            <div className="offer__wrapper">
              {offer.isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}
              
              <div className="offer__name-wrapper">
                <h1 className="offer__name">{offer.title}</h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use href="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>

              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: `${offer.rating * 20}%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{offer.rating}</span>
              </div>

              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {offer.type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {offer.bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {offer.maxAdults} adults
                </li>
              </ul>

              <div className="offer__price">
                <b className="offer__price-value">&euro;{offer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>

              <div className="offer__inside">
                <h2 className="offer__inside-title">What's inside</h2>
                <ul className="offer__inside-list">
                  {offer.goods.map((item, index) => (
                    <li key={index} className="offer__inside-item">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className={`offer__avatar-wrapper ${offer.host.isPro ? 'offer__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
                    <img className="offer__avatar user__avatar" src={offer.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="offer__user-name">{offer.host.name}</span>
                  {offer.host.isPro && <span className="offer__user-status">Pro</span>}
                </div>
                <div className="offer__description">
                  <p className="offer__text">{offer.description}</p>
                </div>
              </div>

              <section className="offer__reviews reviews">
                <ReviewsList reviews={currentReviews} />
                <ReviewForm onReviewSubmit={handleReviewSubmit} />
              </section>
            </div>
          </div>

          <section className="offer__map map">
            <Map 
              city={city}
              points={points}
              selectedPoint={points.find(p => p.id === selectedPointId) || null}
            />
          </section>
        </section>

        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {nearbyOffers.map((item) => (
                <CitiesCard
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  type={item.type}
                  price={item.price}
                  previewImage={item.images[0]}
                  isPremium={item.isPremium}
                  rating={item.rating}
                  onMouseOver={() => handleCardHover(item.id)}
                  onMouseOut={handleCardLeave}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export { OfferPage };