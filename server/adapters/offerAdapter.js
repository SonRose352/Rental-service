const cityCoordinates = {
    Paris: { latitude: 48.8566, longitude: 2.3522, zoom: 13 },
    Cologne: { latitude: 50.9375, longitude: 6.9603, zoom: 13 },
    Brussels: { latitude: 50.8503, longitude: 4.3517, zoom: 13 },
    Amsterdam: { latitude: 52.3676, longitude: 4.9041, zoom: 13 },
    Hamburg: { latitude: 53.5511, longitude: 9.9937, zoom: 13 },
    Dusseldorf: { latitude: 51.2277, longitude: 6.7735, zoom: 13 }
};
const getBaseUrl = () => `${process.env.HOST}:${process.env.PORT || 5000}`;
const adaptOfferToClient = (offer) => {
    const baseUrl = getBaseUrl();
    const cityLocation = cityCoordinates[offer.city];
    let previewImage = offer.previewImage;
    if (previewImage && !previewImage.startsWith('http')) {
        previewImage = `${baseUrl}${previewImage.startsWith('/') ? '' : '/'}${previewImage}`;
    }
    return {
        id: String(offer.id),
        title: offer.title,
        type: offer.type,
        price: offer.price,
        city: {
            name: offer.city,
            location: cityLocation
        },
        location: offer.latitude && offer.longitude ? {
            latitude: offer.latitude,
            longitude: offer.longitude
        } : { latitude: 0, longitude: 0 },
        isFavorite: offer.isFavorite,
        isPremium: offer.isPremium,
        rating: parseFloat(offer.rating),
        previewImage
    };
};


export const adaptFullOfferToClient = (offer, author) => {
    const baseUrl = getBaseUrl();
    
    // Обработка изображений
    const processImage = (img) => {
        if (!img) return null;
        return img.startsWith('http') ? img : `${baseUrl}${img.startsWith('/') ? '' : '/'}${img}`;
    };

    return {
        id: String(offer.id),
        title: offer.title,
        description: offer.description || '',
        type: offer.type,
        price: Number(offer.price) || 0,
        
        // Переименованные поля
        bedrooms: offer.rooms || 0,        // rooms → bedrooms
        goods: offer.features || [],        // features → goods
        maxAdults: offer.guests || 0,       // guests → maxAdults
        
        // Изображения
        images: (offer.photos || []).map(processImage), // photos → images
        previewImage: processImage(offer.previewImage),
        
        // Локация
        city: {
            name: offer.city,
            location: cityCoordinates[offer.city] || {
                latitude: offer.latitude || 0,
                longitude: offer.longitude || 0
            }
        },
        
        // Автор
        host: {
            id: String(author?.id || ''),
            name: author?.name || 'Аноним',
            isPro: Boolean(author?.isPro),
            avatarUrl: processImage(author?.avatarUrl)
        },
        
        // Флаги
        isPremium: Boolean(offer.isPremium),
        isFavorite: Boolean(offer.isFavorite),
        
        // Рейтинг и доп. информация
        rating: Math.min(5, Math.max(1, Number(offer.rating))) || 0,
        commentsCount: Number(offer.commentsCount) || 0,
        
        // Даты
        createdAt: offer.createdAt?.toISOString() || new Date().toISOString(),
        updatedAt: offer.updatedAt?.toISOString() || new Date().toISOString()
    };
};


export { adaptOfferToClient };
