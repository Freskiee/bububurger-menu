import React, { useContext, useRef, useEffect, useState } from 'react';
import { menuCategories } from '../data/menuData';
import { menuTranslations } from '../i18n/menu';
import { LanguageContext } from '../App';

interface CategoryNavProps {
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

const CategoryNav: React.FC<CategoryNavProps> = ({ activeCategory, onCategoryChange }) => {
  const { language } = useContext(LanguageContext);
  const categoryRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  // Actualiza visibilidad de flechas
  const updateArrows = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    setShowLeft(container.scrollLeft > 5);
    setShowRight(container.scrollLeft < container.scrollWidth - container.clientWidth - 5);
  };

  useEffect(() => {
    updateArrows();
    const container = scrollContainerRef.current;
    if (!container) return;
    container.addEventListener('scroll', updateArrows);
    window.addEventListener('resize', updateArrows);
    return () => {
      container.removeEventListener('scroll', updateArrows);
      window.removeEventListener('resize', updateArrows);
    };
  }, []);

  useEffect(() => {
    if (activeCategory && categoryRefs.current[activeCategory]) {
      categoryRefs.current[activeCategory].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      updateArrows();
    }
  }, [activeCategory]);

  // Handlers para flechas
  const handleScrollLeft = () => {
    const container = scrollContainerRef.current;
    if (container) container.scrollBy({ left: -150, behavior: 'smooth' });
  };
  const handleScrollRight = () => {
    const container = scrollContainerRef.current;
    if (container) container.scrollBy({ left: 150, behavior: 'smooth' });
  };

  return (
    <div className="category-nav" style={{ background: 'var(--background-navbar)', color: 'var(--text-main)' }}>
      <div className="container-fluid position-relative">
        {/* Flecha Izquierda */}
        {showLeft && (
          <button
            className="category-arrow category-arrow-left"
            aria-label="Desplazar a la izquierda"
            onClick={handleScrollLeft}
            style={{display: 'flex'}}
            type="button"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
          </button>
        )}
        <div className="category-scroll-container" ref={scrollContainerRef}>
          <div className="category-scroll d-flex">
            {menuCategories.map((category) => (
              <div
                key={category.id}
                ref={el => categoryRefs.current[category.id] = el}
                className={`category-item d-flex align-items-center ${
                  activeCategory === category.id ? 'active' : ''
                }`}
                onClick={() => onCategoryChange(category.id)}
              >
                {category.chefImage && (
                  <img
                    src={category.chefImage}
                    alt={category.name}
                    style={{ width: '40px', height: '40px', objectFit: 'contain', marginRight: '8px', borderRadius: '50%' }}
                  />
                )}
                <span className="me-2">{category.icon}</span>
                <span className="fw-medium">
                  {menuTranslations[category.id]?.[language] || category.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* Flecha Derecha */}
        {showRight && (
          <button
            className="category-arrow category-arrow-right"
            aria-label="Desplazar a la derecha"
            onClick={handleScrollRight}
            style={{display: 'flex'}}
            type="button"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default CategoryNav;