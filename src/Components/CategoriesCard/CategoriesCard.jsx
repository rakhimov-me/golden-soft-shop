import './CategoriesCard.scss';
import CategoriesButton from '@/Components/CategoriesButton';

const CategoriesCard = (props) => {
  const { image, title, href } = props;

  return (

    <div className="categories__card">
      <div className="categories__card-label">
        <p className="categories__card-label-title">
          {title}
        </p>
        <CategoriesButton href={href} />
      </div>
      <img src={image} alt={title} className="categories__card-image" />
      <p className="categories__card-label-mobile visible-mobile">
        {title}
      </p>
    </div>
  );
};

export default CategoriesCard;