import { useState } from "react";
import { Link } from "react-router-dom";
import {AppRoute} from "../../const.js";

type FavoriteCardProps={
    id:string;
    title:string;
    type:string;
    price:number;
    isPremium:boolean;
    previewImage:string;
    rating:number;
}

function FavoriteCard({id,title,type,price,previewImage,isPremium,rating}:FavoriteCardProps){
    const [,setFavoriteId]=useState('');
    return(
        <article className="favorites__card place-card" onMouseOver={()=>setFavoriteId(id)} onMouseOut={()=>setFavoriteId('')}>
            {isPremium?(
                <div className="place-card__mark">
                    <span>Premium</span>
                </div>):null}
            <div className="favorites__image-wrapper place-card__image-wrapper">
                <Link to={`${AppRoute.Favorites}`}>
                <img className="place-card__image" src={previewImage} width="150" height="110" alt="Place image"/>
                </Link>
            </div>
            <div className="favorites__card-info place-card__info">
                <div className="place-card__price-wrapper">
                <div className="place-card__price">
                    <b className="place-card__price-value">&euro;{price}</b>
                    <span className="place-card__price-text">&#47;&nbsp;night</span>
                </div>
                <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                    <svg className="place-card__bookmark-icon" width="18" height="19">
                    <use href="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">In bookmarks</span>
                </button>
                </div>
                <div className="place-card__rating rating">
                <div className="place-card__stars rating__stars">
                    <span style={{width: "100%"}}></span>
                    <span className="visually-hidden">{rating}</span>
                </div>
                </div>
                <h2 className="place-card__name">
                <a href="#">{title}</a>
                </h2>
                <p className="place-card__type">{type}</p>
            </div>
        </article>
    );
}
export {FavoriteCard};