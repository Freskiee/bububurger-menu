import React from 'react';
import { Category } from '../data/menuData';
import ProductCard from './ProductCard';

interface MenuSectionProps {
  category: Category;
  isFavorites?: boolean;
}

const MenuSection: React.FC<MenuSectionProps> = ({ category, isFavorites = false }) => {
  return (
    <div className={`mb-4 ${isFavorites ? 'favorites-section' : ''}`}>
      <div className="container-fluid">
        <h3 className="section-title" style={{ color: 'var(--text-main)', fontWeight: 800, fontSize: '1.45rem', letterSpacing: '0.01em', textShadow: '0 2px 8px rgba(0,0,0,0.18)' }}>
          <span>{category.icon}</span>
          <span>{category.name}</span>
        </h3>
        
        <div>
          {category.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuSection;