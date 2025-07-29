import React from 'react';
import './ProductCard.scss';
import { ReactComponent as InStockLogo } from "@/assets/icons/InStock.svg";
import { ReactComponent as OutOfStockLogo } from "@/assets/icons/OutOfStock.svg";
import { ReactComponent as GiftLogo } from "@/assets/icons/Gift.svg";
import { ReactComponent as Star } from "@/assets/icons/Star.svg";

  const ProductCard = ({
                image,
                title,
                priceInfo,
                statuses: { inStock, withGift, onSale },
                reviewSummary = {},
                outOfCatalog = false
              }) => {
  const { current: price, previous: oldPrice } = priceInfo;
  const { averageRating = 0, reviewsCount = 0 } = reviewSummary;

  const filledStars = Math.floor(averageRating);

  const stars = Array.from({ length: 5 }, (_, i) => (
    <Star
      key={i}
      className={`card__star ${i < filledStars ? 'card__star--filled' : ''}`}
    />
  ));

  return (
    <a href="#" className="card">
      <div className="card__image-wrapper">
        <div className="card__stickers">
          <div className="card__stickers-left">
            {inStock != null && (
              <div className={`card__stickers-stock ${inStock ? 'in-stock' : 'out-of-stock'}`}>
                <div className="card__stickers-stock-icon">
                  {inStock
                    ? <InStockLogo className="success" />
                    : <OutOfStockLogo className="error" />
                  }
                </div>
                <p>{inStock ? 'В наличии' : 'Нет в наличии'}</p>
              </div>
            )}
            {withGift && (
              <span className="card__stickers-gift">
                <GiftLogo className="card__stickers-gift-icon"/>
                Подарок
              </span>
            )}
          </div>
          {onSale && <span className="card__stickers-sale">SALE</span>}
        </div>
        <img src={image} alt={title} className="card__image" />
      </div>

      <div className="card__content">
        {!outOfCatalog && (
          <div className="card__content-reviews">
            <div className="card__content-reviews-stars">{stars}</div>
            <div className="card__content-reviews-count">({reviewsCount})</div>
          </div>
        )}
        <p className="card__content-title">{title}</p>
        <div className="card__content-price">
          <span className="card__content-price-new">{price} ₸</span>
          {oldPrice && (
            <span className="card__content-price-old">{oldPrice} ₸</span>
          )}
        </div>
      </div>
    </a>
  );
};

export default ProductCard;
