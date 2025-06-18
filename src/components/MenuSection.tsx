import React, { useContext, useState } from 'react';
import { Category } from '../data/menuData';
import ProductCard from './ProductCard';
import { menuTranslations } from '../i18n/menu';
import { LanguageContext } from '../App';

interface MenuSectionProps {
  category: Category;
  isFavorites?: boolean;
}

const MenuSection: React.FC<MenuSectionProps> = ({ category, isFavorites = false }) => {
  const isInfantil = category.id === 'infantil';
  const isFavoritos = category.id === 'favoritos';
  // Detectar modo oscuro
  const isDark = document.body.classList.contains('dark-mode');
  const { language } = useContext(LanguageContext);
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

  // Estado para el modal y producto seleccionado
  const [showModal, setShowModal] = useState(false);
  const [selectedProductIndex, setSelectedProductIndex] = useState<number | null>(null);

  // Funciones para navegación
  const handleOpenModal = (index: number) => {
    setSelectedProductIndex(index);
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProductIndex(null);
  };
  const handlePrevProduct = () => {
    if (selectedProductIndex !== null && selectedProductIndex > 0) {
      setSelectedProductIndex(selectedProductIndex - 1);
    }
  };
  const handleNextProduct = () => {
    if (
      selectedProductIndex !== null &&
      selectedProductIndex < category.products.length - 1
    ) {
      setSelectedProductIndex(selectedProductIndex + 1);
    }
  };

  return (
    <div className={`mb-4 ${isFavorites ? 'favorites-section' : ''}`}
      style={sectionStyle}>
      <div className="container-fluid">
        <h3 className="section-title" style={{
          background: isInfantil ? 'linear-gradient(135deg, rgba(255, 68, 130, 0.9), rgba(60, 192, 253, 0.9))' : 'linear-gradient(135deg, #ff9500, #000000)', // Degradado según la paleta
          padding: '10px',
          borderRadius: '10px',
          display: 'inline-block',
          marginBottom: '16px',
          color: '#ffffff'
        }}>
          {category.chefImage && (
            <img
              src={category.chefImage}
              alt={category.name}
              style={{ width: '48px', height: '48px', objectFit: 'contain', borderRadius: '50%' }}
            />
          )}
          <span>{category.icon}</span>
          <span>
            {(() => {
              const translation = menuTranslations[category.id as keyof typeof menuTranslations];
              if (typeof translation === 'object' && 'es' in translation) {
                return translation[language as 'es' | 'en'];
              } else if (typeof translation === 'string') {
                return translation;
              }
              return 'Traducción no disponible';
            })()}
          </span>
        </h3>
        {/* Mensaje especial para hotdogs y bububurgers */}
        {category.id === 'bububurgers' && (
          <div style={{
            background: isDark 
              ? 'rgba(30, 20, 5, 0.96)' 
              : 'rgba(255, 230, 120, 0.98)',
            border: isDark ? '2.5px solid #ffb347' : '2.5px solid #ff9800',
            borderRadius: 14,
            padding: '10px 14px',
            marginBottom: 18,
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            color: '#ffffff',
            fontWeight: 800,
            fontSize: '0.98em',
            textAlign: 'center',
            boxShadow: isDark 
              ? '0 2px 8px 0 #ffb34733, 0 1px 0 #000' 
              : '0 2px 8px 0 #ff980033, 0 1px 0 #fff',
            position: 'relative',
            overflow: 'hidden',
            textShadow: '0 2px 8px rgba(0,0,0,0.35)',
            justifyContent: 'center',
            maxWidth: 420,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
            <span role="img" aria-label="papas" style={{ 
              fontSize: 22,
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.18))',
              animation: 'bounce 2s infinite'
            }}>🍟</span>
            <span style={{
              color: '#fff',
              fontWeight: 800,
              letterSpacing: '0.01em',
              textShadow: '0 2px 8px rgba(0,0,0,0.35)',
              fontSize: '0.98em',
              lineHeight: 1.18,
              display: 'block',
              maxWidth: 320
            }}>
              {language === 'es' 
                ? '¡Todas las Bububurgers incluyen 70g de papas a la francesa gratis! 🎉'
                : 'All Bububurgers include a free 70g portion of French fries! 🎉'}
            </span>
            <span role="img" aria-label="papas" style={{ 
              fontSize: 22,
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.18))',
              animation: 'bounce 2s infinite 1s'
            }}>🍟</span>
          </div>
        )}
        {category.id === 'hotdog' && (
          <div style={{
            background: isDark 
              ? 'rgba(30, 20, 5, 0.96)' 
              : 'rgba(255, 230, 120, 0.98)',
            border: isDark ? '2.5px solid #ffb347' : '2.5px solid #ff9800',
            borderRadius: 14,
            padding: '10px 14px',
            marginBottom: 18,
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            color: '#fff',
            fontWeight: 800,
            fontSize: '0.98em',
            textAlign: 'center',
            boxShadow: isDark 
              ? '0 2px 8px 0 #ffb34733, 0 1px 0 #000' 
              : '0 2px 8px 0 #ff980033, 0 1px 0 #fff',
            position: 'relative',
            overflow: 'hidden',
            textShadow: '0 2px 8px rgba(0,0,0,0.35)',
            justifyContent: 'center',
            maxWidth: 420,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
            <span role="img" aria-label="papas" style={{ 
              fontSize: 22,
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.18))',
              animation: 'bounce 2s infinite'
            }}>🍟</span>
            <span style={{
              color: '#fff',
              fontWeight: 800,
              letterSpacing: '0.01em',
              textShadow: '0 2px 8px rgba(0,0,0,0.35)',
              fontSize: '0.98em',
              lineHeight: 1.18,
              display: 'block',
              maxWidth: 320
            }}>
              {language === 'es' 
                ? '¡Todos los hot dogs incluyen 70g de papas a la francesa gratis! 🎉'
                : 'All  dogs include a free 70g portion of French fries! 🎉'}
            </span>
            <span role="img" aria-label="papas" style={{ 
              fontSize: 22,
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.18))',
              animation: 'bounce 2s infinite 1s'
            }}>🍟</span>
          </div>
        )}
        <div className="row g-4">
          {category.products.map((product, index) => (
            <div key={product.id} onClick={() => handleOpenModal(index)} style={{ cursor: 'pointer' }}>
              <ProductCard 
                product={product} 
                category={category} 
                products={category.products} 
                currentIndex={index} 
                enableModal={false}
                titleStyle={{ color: '#ffffff' }}
              />
            </div>
          ))}
          {/* Modal único para el producto seleccionado */}
          {showModal && selectedProductIndex !== null && (
            <ProductCard
              product={category.products[selectedProductIndex]}
              category={category}
              products={category.products}
              currentIndex={selectedProductIndex}
              showModal={true}
              onClose={handleCloseModal}
              onPrev={handlePrevProduct}
              onNext={handleNextProduct}
              enableModal={true}
              titleStyle={{ color: '#ffffff' }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuSection;