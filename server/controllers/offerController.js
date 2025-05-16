import { adaptOfferToClient, adaptFullOfferToClient } from "../adapters/offerAdapter.js";
import ApiError from "../error/ApiError.js";
import { Offer } from "../models/offer.js";
import { User } from "../models/user.js";

async function getAllOffers(req, res, next) {
    try {
        const offers = await Offer.findAll();
        const adaptedOffers = offers.map(adaptOfferToClient);
        res.status(200).json(adaptedOffers);
    } catch (error) {
        next(ApiError.internal('Не удалось получить список предложений'));
    }
}

async function getFullOffer(req, res, next) {
    try {
        const { id } = req.params;
        
        // Получаем оффер с автором
        const offer = await Offer.findByPk(id, {
            include: {
                model: User,
                as: 'author',
            }
        });

        // Если оффер не найден
        if (!offer) {
            return next(ApiError.notFound('Предложение не найдено'));
        }

        // Преобразуем данные
        const adaptedOffer = adaptFullOfferToClient(
            offer.get({ plain: true }), 
            offer.author.get({ plain: true })
        );

        res.status(200).json(adaptedOffer);
    } catch (error) {
        next(ApiError.internal(`Ошибка при получении предложения: ${error}`));
    }
}

export async function createOffer(req, res, next) {
    try {
        const {
            title, description, publishDate, city,
            isPremium, isFavorite, rating, type, rooms, guests, price,
            features, commentsCount, latitude, longitude, userId
        } = req.body;


        if (!req.files?.previewImage || req.files.previewImage.length === 0) {
            return next(ApiError.badRequest('Превью изображение обязательно для загрузки'));
        }


        const previewImagePath = `/static/${req.files.previewImage[0].filename}`;


        let processedPhotos = [];
        if (req.files?.photos) {
            processedPhotos = req.files.photos.map(file => `/static/${file.filename}`);
        }


        let parsedFeatures = [];
        if (features) {
            try {
                parsedFeatures = typeof features === 'string' ? JSON.parse(features) : features;
            } catch {
                parsedFeatures = features.split(',');
            }
        }


        const offer = await Offer.create({
            title,
            description,
            publishDate,
            city,
            previewImage: previewImagePath,
            photos: processedPhotos,
            isPremium,
            isFavorite,
            rating,
            type,
            rooms,
            guests,
            price,
            features: parsedFeatures,
            commentsCount,
            latitude,
            longitude,
            authorId: userId
        });


        return res.status(201).json(offer);
    } catch (error) {
        next(ApiError.internal('Не удалось добавить предложение: ' + error.message));
    }
}


export { getAllOffers, getFullOffer };