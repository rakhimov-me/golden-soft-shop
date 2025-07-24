import './Card.scss';

const Card = (props) => {
  const { image, title, price, oldPrice, isInCatalog, inStock, withGift, onSale } = props;

  return (
    <div className="card">
      <div className="card__image-wrapper">
        <div className="card__sticker-container">
          {inStock !== undefined && (
            <span className={`card__sticker card__sticker-stock ${inStock ? 'in-stock' : 'out-of-stock'}`}>
            {inStock ? 'В наличии' : 'Нет в наличии'}
          </span>
          )}
          {withGift && <span className="card__sticker card__sticker-gift">С подарком</span>}
          {onSale && <span className="card__sticker card__sticker-sale">SALE</span>}
        </div>
        <img src={image} alt={title} className="card__image" />
      </div>
      <div className="card__content">
        {!isInCatalog && (
          <div className="card__content-reviews">
            ★★★★☆ (12 отзывов)
          </div>
        )}
        <p className="card__content-title">{title}</p>
        <div className="card__content-price">
          <span className="card__content-price-new">{price}</span>
          {oldPrice && <span className="card__content-price-old">{oldPrice}</span>}
        </div>
      </div>
    </div>
  );
};

export default Card;