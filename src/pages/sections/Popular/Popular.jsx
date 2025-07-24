import './Popular.scss';
import Card from '@/Components/Card';

const Popular = (props) => {
  const {} = props;

  const products = [
    {
      image: '/src/assets/images/Lock-hotel-2.jpeg',
      title: 'Дверной замок Golden Soft для отелей',
      price: '33 000₽',
      oldPrice: '37 000₽',
      isInCatalog: true,
      inStock: true,
      withGift: false,
      onSale: true,
    },
    {
      image: '/src/assets/images/Lock-hotel-3.jpeg',
      title: 'Вариативный замок Golden Soft для отелей',
      price: '7 000₽',
      oldPrice: '8 000₽',
      isInCatalog: true,
      inStock: false,
      withGift: true,
      onSale: false,
    },
    {
      image: '/src/assets/images/Lock-office.jpeg',
      title: 'Дверной замок Golden Soft для офиса',
      price: '33 000₽',
      oldPrice: '39 000₽',
      isInCatalog: true,
      inStock: true,
      withGift: true,
      onSale: false,
    },
    {
      image: '/src/assets/images/Lock-office-2.jpeg',
      title: 'Дверной замок Golden Soft для дома',
      price: '9 000₽',
      oldPrice: '12 000₽',
      isInCatalog: true,
      inStock: false,
      withGift: false,
      onSale: true,
    },
  ];

  return (
    <section className="popular">
      <div className="popular__body container">
        <div className="popular__head">
          <h2 className="popular__head-title">Наши популярные продукты</h2>
          <div className="popular__head-arrows">
            <svg width="40.000000" height="40.000000" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <clipPath id="clip52_1272">
                  <rect id="Frame" rx="0.000000" width="39.000000" height="39.000000" transform="translate(40.500000 40.500000) rotate(180.000000)" fill="white" fill-opacity="0"/>
                </clipPath>
              </defs>
              <rect id="Frame" rx="0.000000" width="39.000000" height="39.000000" transform="translate(40.500000 40.500000) rotate(180.000000)" fill="#FFFFFF" fill-opacity="0"/>
              <g clip-path="url(#clip52_1272)">
                <path id="Vector" d="M26.66 33.33L13.33 20L26.66 6.66" stroke="#C4CDD5" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round" stroke-linecap="round"/>
              </g>
            </svg>
            <svg width="40.000000" height="40.000000" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <clipPath id="clip52_1272">
                  <rect id="Frame" rx="0.000000" width="39.000000" height="39.000000" transform="translate(40.500000 40.500000) rotate(180.000000)" fill="white" fill-opacity="0"/>
                </clipPath>
              </defs>
              <rect id="Frame" rx="0.000000" width="39.000000" height="39.000000" transform="translate(40.500000 40.500000) rotate(180.000000)" fill="#FFFFFF" fill-opacity="0"/>
              <g clip-path="url(#clip52_1272)">
                <path id="Vector" d="M26.66 33.33L13.33 20L26.66 6.66" stroke="#C4CDD5" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round" stroke-linecap="round"/>
              </g>
            </svg>
          </div>
        </div>
        <div className="popular__cards">
          <ul className="popular__cards-list">
            {products.map((product, index) => (
              <li key={index} className="popular__cards-list-item">
                <Card {...product} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Popular;