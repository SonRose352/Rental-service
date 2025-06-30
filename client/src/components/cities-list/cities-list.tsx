import { CITIES_LOCATION } from "../../const";
import { CityOffer } from "../../types/offer";

type CitiesListProps = {
  selectedCity: CityOffer;
  onCityChange: (cityName: string) => void;
};

function CitiesList({ selectedCity, onCityChange }: CitiesListProps) {
  return (
    <ul className="locations__list tabs__list">
      {CITIES_LOCATION.map((city) => (
        <li key={city.name} className="locations__item">
          <a
            className={`locations__item-link tabs__item ${
              city.name === selectedCity.name ? 'tabs__item--active' : ''
            }`}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onCityChange(city.name);
            }}
          >
            <span>{city.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export { CitiesList };