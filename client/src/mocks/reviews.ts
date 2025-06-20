import { Review } from '../types/review';

export const reviews: Review[] = [
  {
    id: '1',
    date: '2023-04-24',
    user: {
      name: 'Максим',
      avatarUrl: '/img/avatar-max.jpg',
      isPro: true,
    },
    comment: 'Тихий, уютный и живописный домик, который скрывается за рекой в уникальной легкости Амстердама. Здание зеленого цвета и из 18 века.',
    rating: 4,
  },
  {
    id: '2',
    date: '2023-05-12',
    user: {
      name: 'Ангелина',
      avatarUrl: '/img/avatar-angelina.jpg',
      isPro: false,
    },
    comment: 'Отличное расположение, прекрасный вид из окна. Хозяин был очень приветлив и помог со всеми вопросами.',
    rating: 5,
  },
];