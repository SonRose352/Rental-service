import { Review } from '../../types/review';
import { formatDate } from '../../utils/utils';
type ReviewProps = {
  review: Review;
};

function ReviewItem({ review }: ReviewProps) {
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className={`reviews__avatar-wrapper user__avatar-wrapper ${review.user.isPro ? 'user__avatar-wrapper--pro' : ''}`}>
          <img 
            className="reviews__avatar user__avatar" 
            src={review.user.avatarUrl} 
            width="54" 
            height="54" 
            alt="Аватар пользователя" 
          />
        </div>
        <span className="reviews__user-name">{review.user.name}</span>
        {review.user.isPro && <span className="reviews__user-status">Pro</span>}
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${review.rating * 20}%` }}></span>
            <span className="visually-hidden">Рейтинг</span>
          </div>
        </div>
        <p className="reviews__text">{review.comment}</p>
        <time className="reviews__time" dateTime={review.date}>
          {formatDate(review.date)}
        </time>
      </div>
    </li>
  );
}

export { ReviewItem };