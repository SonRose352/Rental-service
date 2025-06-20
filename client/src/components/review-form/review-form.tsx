import { useState, FormEvent } from 'react';
import React from 'react';

type ReviewFormProps = {
    onReviewSubmit: (review: { rating: number; comment: string }) => void;
};

function ReviewForm({ onReviewSubmit }: ReviewFormProps) {
    const [review, setReview] = useState({
        rating: 0,
        comment: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        setIsSubmitting(true);

        try {
            // Здесь могла бы быть отправка на сервер
            // await api.postReview(offerId, review);

            // Вызываем переданную функцию для обновления состояния
            onReviewSubmit(review);

            // Сбрасываем форму после успешной отправки
            setReview({
                rating: 0,
                comment: ''
            });
        } catch (error) {
            console.error('Failed to submit review:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleRatingChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setReview({
            ...review,
            rating: Number(evt.target.value)
        });
    };

    const handleCommentChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
        setReview({
            ...review,
            comment: evt.target.value
        });
    };

    return (
        <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
            <label className="reviews__label form__label" htmlFor="review">Your review</label>
            <div className="reviews__rating-form form__rating">
                {[5, 4, 3, 2, 1].map((star) => (
                    <React.Fragment key={star}>
                        <input
                            className="form__rating-input visually-hidden"
                            name="rating"
                            value={star}
                            id={`${star}-stars`}
                            type="radio"
                            checked={review.rating === star}
                            onChange={handleRatingChange}
                        />
                        <label htmlFor={`${star}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
                            <svg className="form__star-image" width="37" height="33">
                                <use href="#icon-star"></use>
                            </svg>
                        </label>
                    </React.Fragment>
                ))}
            </div>
            <textarea
                className="reviews__textarea form__textarea"
                id="review"
                name="review"
                placeholder="Tell how was your stay, what you like and what can be improved"
                value={review.comment}
                onChange={handleCommentChange}
            ></textarea>
            <div className="reviews__button-wrapper">
                <p className="reviews__help">
                    To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
                </p>
                <button
                    className="reviews__submit form__submit button"
                    type="submit"
                    disabled={review.comment.length < 50 || review.rating === 0 || isSubmitting}
                >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
            </div>
        </form>
    );
}

export { ReviewForm };