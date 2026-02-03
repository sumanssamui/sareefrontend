import { useState, useEffect } from 'react';
import './Hero.css';

const slides = [
  {
    id: 1,
    title: 'Timeless Elegance',
    subtitle: 'Discover Our New Collection',
    description: 'Exquisite handcrafted sarees that blend tradition with contemporary style',
    cta: 'Shop Now',
    image: 'https://images.pexels.com/photos/1446161/pexels-photo-1446161.jpeg?auto=compress&cs=tinysrgb&w=1280',
  },
  {
    id: 2,
    title: 'Designer Silk Sarees',
    subtitle: 'Wedding Special Collection',
    description: 'Make your special day unforgettable with our exclusive bridal collection',
    cta: 'Explore Collection',
    image: 'https://images.pexels.com/photos/9418783/pexels-photo-9418783.jpeg?auto=compress&cs=tinysrgb&w=1280',
  },
  {
    id: 3,
    title: 'Festive Favorites',
    subtitle: 'Up to 40% Off',
    description: 'Celebrate in style with our stunning festive wear collection',
    cta: 'Shop Sale',
    image: 'https://images.pexels.com/photos/9317192/pexels-photo-9317192.jpeg?auto=compress&cs=tinysrgb&w=1280',
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="hero">
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="hero-overlay"></div>
            <div className="container">
              <div className="hero-content">
                <span className="hero-subtitle">{slide.subtitle}</span>
                <h2 className="hero-title">{slide.title}</h2>
                <p className="hero-description">{slide.description}</p>
                <button className="hero-cta">{slide.cta}</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="hero-arrow hero-arrow-prev" onClick={prevSlide} aria-label="Previous slide">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      <button className="hero-arrow hero-arrow-next" onClick={nextSlide} aria-label="Next slide">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>

      <div className="hero-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`hero-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Hero;
