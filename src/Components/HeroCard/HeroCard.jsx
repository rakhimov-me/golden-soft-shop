import './HeroCard.scss';
import Button from '@/components/Button';

const HeroCard = ({
                    image,
                    title,
                    description,
                    comment,
                    newPrice,
                    oldPrice,
                  }) => {
  return (
    <div className="hero-card">
      <img
        className="hero-card__img"
        src={image}
        alt={title}
        loading="lazy"
      />
      <div className="hero-card__content">
        <h1 className="hero-card__content-title">
          {title}
        </h1>
        <div className="hero-card__content-description">
          <p className="hero-card__content-description">
            {description}
          </p>
          <p className="hero-card__content-description">
            {comment}
          </p>
        </div>
        <div className="hero-card__content-purchase">
          <p className="hero-card__content-purchase-title">
            Цена
          </p>
          <div className="hero-card__content-purchase-price">
            <p className="hero-card__content-purchase-price-new h5">
              {newPrice}
            </p>
            {oldPrice && (
              <p className="hero-card__content-purchase-price-old">
                {oldPrice}
              </p>
            )}
          </div>
          <Button
            className="hero-card__content-purchase-button"
            label="Добавить в корзину"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroCard;