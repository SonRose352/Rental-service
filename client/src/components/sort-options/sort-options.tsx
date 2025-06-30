import { useState, KeyboardEvent } from 'react';
import classNames from 'classnames';
import { SortOffersType } from '../../const';
import { SortOffer } from '../../types/sort';

type SortOptionsProps = {
  activeSorting: SortOffer;
  onChange: (newSorting: SortOffer) => void;
};

function SortOptions({ activeSorting, onChange }: SortOptionsProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Стиль для иконки стрелки (поворот при открытии)
  const iconStyle = {
    transform: isOpen ? 'rotate(180deg)' : ''
  };

  // Обработчик нажатия клавиш
  function keyDownHandler(evt: KeyboardEvent) {
    if (evt.key === 'Escape' && isOpen) {
      evt.preventDefault();
      setIsOpen(false);
    }
  }

  // Обработчик клика по заголовку сортировки
  function typeClickHandler() {
    setIsOpen(prevIsOpen => !prevIsOpen);
  }

  // Обработчик выбора варианта сортировки
  function sortingItemClickHandler(type: SortOffer) {
    onChange(type);
    setIsOpen(false);
  }

  return (
    <form 
      className="places__sorting" 
      action="#" 
      method="get" 
      onKeyDown={keyDownHandler}
    >
      <span className="places__sorting-caption">Sort by</span>
      
      <span 
        className="places__sorting-type" 
        tabIndex={0} 
        onClick={typeClickHandler}
      >
        {activeSorting}
        <svg 
          className="places__sorting-arrow" 
          width={7} 
          height={4} 
          style={iconStyle}
        >
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>

      <ul 
        className={classNames({
          'places__options--opened': isOpen,
          'places__options': true,
          'places__options--custom': true
        })}
      >
        {Object.values(SortOffersType).map((type) => (
          <li 
            key={type}
            className={classNames({
              'places__option--active': type === activeSorting,
              'places__option': true
            })}
            tabIndex={0}
            onClick={() => sortingItemClickHandler(type as SortOffer)}
          >
            {type}
          </li>
        ))}
      </ul>
    </form>
  );
}

export { SortOptions };