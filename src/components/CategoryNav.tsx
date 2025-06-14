import React, { useContext } from 'react';
import { menuCategories } from '../data/menuData';
import { menuTranslations } from '../i18n/menu';
import { LanguageContext } from '../App';

interface CategoryNavProps {
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

const CategoryNav: React.FC<CategoryNavProps> = ({ activeCategory, onCategoryChange }) => {
  const { language } = useContext(LanguageContext);
  return (
    <div className="category-nav" style={{ background: 'var(--background-navbar)', color: 'var(--text-main)' }}>
      <div className="container-fluid">
        <div className="category-scroll-container">
          <div className="category-scroll d-flex">
            {menuCategories.map((category) => (
              <div
                key={category.id}
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
      </div>
    </div>
  );
};

export default CategoryNav;