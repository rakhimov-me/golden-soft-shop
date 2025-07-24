import './Categories.scss';
import CategoriesCard from '@/Components/CategoriesCard';
import Button from "@/Components/Button/index.js";

const Categories = () => {
  const categories = [
    {
      image: '/src/assets/images/Lock-hotel.jpeg',
      title: 'Для отелей',
      href: '/hotel-locks',
    },
    {
      image: '/src/assets/images/Lock-closet.jpeg',
      title: 'Для шкафчиков',
      href: '/closet-locks',
    },
    {
      image: '/src/assets/images/Cat-Lock-office.jpeg',
      title: 'Для офисов',
      href: '/office-locks',
    },
    {
      image: '/src/assets/images/Lock-home.jpeg',
      title: 'Замки для дома',
      href: '/home-locks',
    },
  ];

  return (
    <section className="categories">
      <div className="categories__body container">
        <h2 className="categories__body-title">Категории замков</h2>
        <div className="categories__cards">
          {categories.map((category, index) => (
            <CategoriesCard key={index} {...category} />
          ))}
        </div>
        <Button
          className="categories__body-button"
          label="Все категории"
        />
      </div>
    </section>
  );
};

export default Categories;