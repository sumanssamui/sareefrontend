import './Categories.css';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 1,
    name: 'Silk Sarees',
    image: 'https://images.pexels.com/photos/9419108/pexels-photo-9419108.jpeg?auto=compress&cs=tinysrgb&w=600',
    count: '250+ Designs',
    path: '/sarees',
  },
  {
    id: 2,
    name: 'Cotton Sarees',
    image: 'https://images.pexels.com/photos/8751520/pexels-photo-8751520.jpeg?auto=compress&cs=tinysrgb&w=600',
    count: '180+ Designs',
    path: '/sarees',
  },
  {
    id: 3,
    name: 'Designer Collection',
    image: 'https://images.pexels.com/photos/1162983/pexels-photo-1162983.jpeg?auto=compress&cs=tinysrgb&w=600',
    count: '120+ Designs',
    path: '/sarees',
  },
  {
    id: 4,
    name: 'Wedding Special',
    image: 'https://images.pexels.com/photos/7686385/pexels-photo-7686385.jpeg?auto=compress&cs=tinysrgb&w=600',
    count: '95+ Designs',
    path: '/sarees',
  },
  {
    id: 5,
    name: 'Banarasi Sarees',
    image: 'https://images.pexels.com/photos/7685580/pexels-photo-7685580.jpeg?auto=compress&cs=tinysrgb&w=600',
    count: '140+ Designs',
    path: '/sarees',
  },
  
  {
    id: 6,
    name: 'Party Wear',
    image: 'https://images.pexels.com/photos/7686125/pexels-photo-7686125.jpeg?auto=compress&cs=tinysrgb&w=600',
    count: '165+ Designs',
    path: '/sarees',
  },
  {
    id: 7,
    name: 'Travel Wear',
    image: 'https://images.pexels.com/photos/8819416/pexels-photo-8819416.jpeg?auto=compress&cs=tinysrgb&w=600',
    count: '165+ Designs',
    path: '/sarees',
  },
  {
    id: 8,
    name: 'Seasonal Wear',
    image: 'https://images.pexels.com/photos/29819602/pexels-photo-29819602.jpeg?auto=compress&cs=tinysrgb&w=600',
    count: '165+ Designs',
    path: '/sarees',
  },
];

const Categories = () => {
  return (
    <section className="categories">
      <div className="container">
        <div className="section-header">
          <h2>Shop By Category</h2>
          <p>Explore our curated collections crafted with love and tradition</p>
        </div>

        <div className="categories-grid">
          {categories.map((category) => (
            <Link to={category.path} key={category.id} className="category-card">
              <div className="category-image">
                <img src={category.image} alt={category.name} loading="lazy" />
                <div className="category-overlay"></div>
              </div>
              <div className="category-content">
                <h3>{category.name}</h3>
                <span>{category.count}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;