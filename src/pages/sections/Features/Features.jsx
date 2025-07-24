import './Features.scss';

const Features = (props) => {
  const {} = props;

  const features = [
    {
      icon: '/src/assets/icons/box-icon.svg',
      title: 'Возврат удвоенной стоимости каждого замка в случае брака.',
    },
    {
      icon: '/src/assets/icons/thumb-up-icon.svg',
      title: 'Наносим ваш логотип компании на наш продукт.',
    },
    {
      icon: '/src/assets/icons/box-icon.svg',
      title: 'Возврат удвоенной стоимости каждого замка в случае брака.',
    },
  ];

  return (
    <section className="features">
      <div className="features__body container">
        <h2 className="features__body-title">Почему GoldenService?</h2>
        <ul className="features__list">
          {features.map((item, index) => (
            <li key={index} className="features__list-item">
              <img src={item.icon} alt={item.title} className="features__list-item-icon" />
              <p className="features__list-item-text">{item.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Features;