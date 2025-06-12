import React from 'react';
import { menuCategories } from '../data/menuData';

interface CategoryNavProps {
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

const CategoryNav: React.FC<CategoryNavProps> = ({ activeCategory, onCategoryChange }) => {
  return (
    <div className="category-nav py-3">
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
                <span className="me-2">{category.icon}</span>
                <span className="fw-medium">{category.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryNav;