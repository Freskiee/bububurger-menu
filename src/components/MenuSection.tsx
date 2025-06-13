import React from 'react';
import { Category } from '../data/menuData';
import ProductCard from './ProductCard';

interface MenuSectionProps {
  category: Category;
  isFavorites?: boolean;
}

const MenuSection: React.FC<MenuSectionProps> = ({ category, isFavorites = false }) => {
  const isInfantil = category.id === 'infantil';
  const isFavoritos = category.id === 'favoritos';
  // Detectar modo oscuro
  const isDark = document.body.classList.contains('dark-mode');
  let sectionStyle = {};
  if (isInfantil) {
    sectionStyle = isDark
      ? {
          background: '#23243a',
          borderRadius: 24,
          border: '2.5px dashed #b39ddb',
          boxShadow: '0 2px 12px 0 rgba(124,77,255,0.10)',
          padding: '18px 0 18px 0',
          position: 'relative',
        }
      : {
          background: '#f3eafe',
          borderRadius: 24,
          border: '2.5px dashed #b39ddb',
          boxShadow: '0 2px 12px 0 rgba(124,77,255,0.10)',
          padding: '18px 0 18px 0',
          position: 'relative',
        };
  } else if (isFavoritos) {
    sectionStyle = isDark
      ? {
          background: 'linear-gradient(135deg, #2d1e13 60%, #3a2412 100%)',
          borderRadius: 20,
          border: '2px solid #ffb347',
          boxShadow: '0 2px 12px 0 rgba(255,179,71,0.10)',
          padding: '18px 0 18px 0',
          position: 'relative',
        }
      : {
          background: '#fff9e6',
          borderRadius: 20,
          border: '2px solid #ffb347',
          boxShadow: '0 2px 12px 0 rgba(255,179,71,0.10)',
          padding: '18px 0 18px 0',
          position: 'relative',
        };
  } else {
    sectionStyle = {};
  }
  return (
    <div className={`mb-4 ${isFavorites ? 'favorites-section' : ''}`}
      style={sectionStyle}>
      <div className="container-fluid">
        <h3 className="section-title" style={isInfantil ? {
          fontFamily: "'Fredoka One', 'Comic Sans MS', cursive, sans-serif",
          color: isDark ? '#b39ddb' : '#7c4dff',
          fontWeight: 900,
          fontSize: '1.7rem',
          letterSpacing: '0.01em',
          textShadow: isDark ? '0 2px 8px #23243a' : '0 2px 8px #f3eafe',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          marginBottom: 16
        } : isFavoritos ? {
          color: isDark ? '#ffb347' : '#ff6a00',
          fontWeight: 800,
          fontSize: '1.5rem',
          letterSpacing: '0.01em',
          textShadow: isDark ? '0 2px 8px #2d1e13' : '0 2px 8px #fff3d1',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          marginBottom: 16
        } : {
          color: 'var(--text-main)',
          fontWeight: 800,
          fontSize: '1.45rem',
          letterSpacing: '0.01em',
          textShadow: '0 2px 8px rgba(0,0,0,0.18)',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          marginBottom: 16
        }}>
          {category.chefImage && (
            <img
              src={category.chefImage}
              alt={category.name}
              style={{ width: '48px', height: '48px', objectFit: 'contain', borderRadius: '50%' }}
            />
          )}
          <span>{category.icon}</span>
          <span>{category.name}</span>
        </h3>
        <div>
          {category.products.map((product) => (
            <ProductCard key={product.id} product={product} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuSection;