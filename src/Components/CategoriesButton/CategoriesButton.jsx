import './CategoriesButton.scss';

const CategoriesButton = (props) => {
  const { href } = props;

  return (
    <a href={href} className="categories__button">
      Перейти
    </a>
  );
};

export default CategoriesButton;