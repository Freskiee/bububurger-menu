import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Product, Category } from '../data/menuData';
import Modal from 'react-bootstrap/Modal';

interface ProductCardProps {
  product: Product;
  category: Category;
}

const sauceColors = [
  '#ffe066', // bbq miel
  '#ffe599', // ajo parmesano
  '#b6e0fe', // teriyaki
  '#ffecb3', // bbq
  '#ffb347', // hot bbq
  '#ffd166', // tamarindo
  '#b2f7ef', // maggi
  '#f7b267', // cajún
  '#ff8c42', // brava
  '#ff5e57', // mango habanero
  '#d7263d'  // requete-macho
];

const chiliColors = [
  '#ffe066', // 1
  '#ffd166', // 2
  '#ffb347', // 3
  '#ff8c42', // 4
  '#d7263d'  // 5
];

// Lista de todos los chefs disponibles
const chefImages = [
  '/images/cartoon-chef-fry.png',
  '/images/cartoon-chef-cook.png',
  '/images/cartoon-chef-bar.png',
  '/images/chef-sarten.png',
  '/images/chef-sad.png',
  '/images/chef-build.png',
  '/images/chef-fry.png',
  '/images/chef-cook.png',
  '/images/chef-bar.png',
  '/images/chef3.png',
  '/images/chef2.png',
  '/images/chef1.png',
  '/images/logo-chef.png',
  '/images/chef only.png',
  '/images/chef rock.png',
  '/images/chef zombi.png',
  '/images/chef fashion.png',
  '/images/chef stand up.png',
  '/images/chef paste.png',
  '/images/chef karaoke.png',
];

const ProductCard: React.FC<ProductCardProps> = ({ product, category }) => {
  const [showModal, setShowModal] = useState(false);
  const [showEquivModal, setShowEquivModal] = useState(false);
  const [showSauceModal, setShowSauceModal] = useState(false);
  const popoverRef = useRef<HTMLDivElement | null>(null);

  const isInfantil = category.id === 'infantil';
  const isDark = false; // Assuming isDark is a constant or state

  useEffect(() => {
    if (!showEquivModal) return;
    function handleClickOutside(event: MouseEvent) {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setShowEquivModal(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showEquivModal]);

  return (
    <>
      <div 
        className="product-card p-3 mb-3"
        onClick={() => setShowModal(true)}
        style={{ cursor: 'pointer', position: 'relative' }}
      >
        <img 
          src={product.image} 
          alt={product.name}
          className="product-image"
        />
        <div className="product-content">
          <h6 className="product-title">
            {product.name}
          </h6>
          <p className="product-description">
            {product.description}
          </p>
        </div>
      </div>

      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        size="lg"
        className="product-modal"
      >
        <Modal.Header closeButton className="modal-header-custom">
          <div style={{ display: 'flex', alignItems: 'center', width: '100%', gap: 16, justifyContent: 'center' }}>
            <Modal.Title className="fw-bold" style={{ textAlign: 'center', margin: 0 }}>
              {product.name}
            </Modal.Title>
            {category.chefImage && (
              <img
                src={`/${category.chefImage}`}
                alt={`Chef para ${product.name}`}
                style={{ width: '48px', height: '48px', objectFit: 'contain', borderRadius: '50%', boxShadow: '0 2px 8px rgba(0,0,0,0.10)' }}
              />
            )}
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-6">
              <img 
                src={product.image} 
                alt={product.name}
                className="img-fluid rounded"
                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
              />
            </div>
            <div className="col-md-6">
              <h4 className="mb-3">{product.name}</h4>
              <p className="text-muted mb-4">{product.description}</p>
              {isInfantil && (
                <div style={{
                  background: 'linear-gradient(90deg, #ffe6fa 60%, #e0f7fa 100%)',
                  color: '#7c4dff',
                  fontFamily: "'Fredoka One', 'Comic Sans MS', cursive, sans-serif",
                  fontWeight: 700,
                  fontSize: '1.08em',
                  borderRadius: 16,
                  padding: '8px 18px',
                  boxShadow: '0 2px 8px rgba(255,193,203,0.13)',
                  border: '1.5px solid #ffd6e0',
                  marginBottom: 18,
                  marginTop: -8,
                  textAlign: 'center',
                  maxWidth: 320
                }}>
                  Por $95 extra puedes cambiar la bebida por una malteada 🥤🍦
                </div>
              )}
              <div className="product-price mb-4">
                {product.prices.map((option, idx) => (
                  <span key={option.label} style={{ display: 'inline-block', marginBottom: option.note ? 2 : 0 }}>
                    {idx > 0 && <span> | </span>}
                    {option.label
                      ? <span style={{ color: 'var(--primary-orange)', fontWeight: 700 }}>
                          {option.label}{/\.$/.test(option.label.trim()) ? '' : ':'}{' '}
                        </span>
                      : null}
                    <span style={{ color: 'var(--primary-orange)', fontWeight: 700 }}>${option.value}</span>
                    {option.note && (
                      <div style={{ fontSize: '0.93em', color: 'var(--text-main)', opacity: 0.85, marginTop: 2, fontWeight: 400, lineHeight: 1.2 }}>{option.note}</div>
                    )}
                  </span>
                ))}
              </div>
              <div style={{ position: 'relative', width: 'fit-content', marginBottom: 16 }}>
                {product.comment && (
                  <>
                    <button
                      type="button"
                      className="btn btn-outline-primary btn-sm"
                      style={{ borderRadius: 20, fontSize: '0.98em', fontWeight: 500, padding: '4px 16px', position: 'relative' }}
                      onClick={() => setShowEquivModal(true)}
                    >
                      Ver equivalencias
                    </button>
                  </>
                )}
              </div>
              {/* Botón y modal de salsas */}
              {product.sauces && (
                <>
                  <button
                    type="button"
                    className="btn btn-outline-danger btn-sm ms-2"
                    style={{ borderRadius: 20, fontSize: '0.98em', fontWeight: 500, padding: '4px 16px', marginBottom: 16 }}
                    onClick={() => setShowSauceModal(true)}
                  >
                    Ver salsas
                  </button>
                  <Modal
                    show={showSauceModal}
                    onHide={() => setShowSauceModal(false)}
                    centered
                    size="sm"
                    contentClassName="sauce-modal-content"
                    backdropClassName="sauce-modal-backdrop"
                  >
                    <Modal.Header closeButton style={{ border: 'none', background: 'linear-gradient(90deg, #ffe066, #ff5e57)', color: '#222', borderRadius: '16px 16px 0 0', padding: '18px 24px 12px 24px' }}>
                      <Modal.Title style={{ fontWeight: 800, fontSize: '1.13em', letterSpacing: '0.01em' }}>
                        Salsas disponibles y nivel de picante
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ background: 'var(--background-modal)', color: 'var(--text-main)', borderRadius: '0 0 16px 16px', padding: '22px 18px 18px 18px', textAlign: 'center', fontWeight: 500, fontSize: '1.08em' }}>
                      <div style={{ marginBottom: 18, fontSize: '0.98em', color: 'var(--text-muted)' }}>
                        El orden es de menos a más picante.
                      </div>
                      {/* Lista vertical de salsas con chiles */}
                      <div style={{ margin: '0 auto 10px auto', maxWidth: 340, textAlign: 'left' }}>
                        {product.sauces.map((salsa, idx) => {
                          // Nivel de picante: 1 a 5
                          let level = 1;
                          if (salsa.toLowerCase().includes('teriyaki') || salsa.toLowerCase() === 'bbq') level = 1;
                          else if (idx >= 9) level = 5;
                          else if (idx >= 7) level = 4;
                          else if (idx >= 4) level = 3;
                          else if (idx >= 2) level = 2;
                          // Colores de chile
                          return (
                            <div key={salsa} style={{ display: 'flex', alignItems: 'center', marginBottom: 4, gap: 8 }}>
                              <div style={{ width: 18, height: 18, borderRadius: '50%', background: sauceColors[idx] || '#eee', marginRight: 6, border: '1.5px solid #fff', boxShadow: '0 1px 4px rgba(0,0,0,0.07)' }} />
                              <span style={{ fontWeight: 500, color: 'var(--text-main)', minWidth: 110 }}>{salsa}</span>
                              <span>
                                {Array.from({ length: level }).map((_, i) => (
                                  <span key={i} style={{ color: chiliColors[level-1], fontSize: 18, marginLeft: 1 }}>🌶️</span>
                                ))}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                      <button
                        className="btn btn-danger mt-4 w-100"
                        style={{ borderRadius: 20, fontWeight: 700, fontSize: '1em', background: 'var(--primary-orange)', border: 'none', marginTop: 18 }}
                        onClick={() => setShowSauceModal(false)}
                      >
                        Cerrar
                      </button>
                    </Modal.Body>
                  </Modal>
                </>
              )}
              <button 
                className="btn btn-primary w-100"
                onClick={() => setShowModal(false)}
              >
                Cerrar
              </button>
            </div>
          </div>
          {/* Etiqueta solo visible en el modal de productos infantiles */}
          {isInfantil && (
            <div style={{
              position: 'absolute',
              bottom: 18,
              right: 18,
              background: isDark ? 'rgba(255,255,255,0.10)' : 'rgba(255,255,255,0.85)',
              color: isDark ? '#b39ddb' : '#7c4dff',
              fontFamily: "'Fredoka One', 'Comic Sans MS', cursive, sans-serif",
              fontWeight: 600,
              fontSize: '0.93em',
              borderRadius: 12,
              padding: '4px 10px',
              boxShadow: '0 1px 4px rgba(124,77,255,0.08)',
              border: isDark ? '1px solid #b39ddb' : '1px solid #e0e0e0',
              zIndex: 10,
              display: 'flex',
              alignItems: 'center',
              gap: 5,
              pointerEvents: 'none',
              minWidth: 0
            }}>
              <span role="img" aria-label="malteada" style={{ fontSize: 16 }}>🥤</span>
              <span>+ $95 malteada</span>
            </div>
          )}
        </Modal.Body>
      </Modal>

      {/* Modal de equivalencias */}
      <Modal
        show={showEquivModal}
        onHide={() => setShowEquivModal(false)}
        centered
        size="sm"
        contentClassName="equiv-modal-content"
        backdropClassName="equiv-modal-backdrop"
      >
        <Modal.Header closeButton style={{ border: 'none', background: 'linear-gradient(90deg, var(--primary-orange), #ff8533)', color: '#fff', borderRadius: '16px 16px 0 0', padding: '18px 24px 12px 24px' }}>
          <Modal.Title style={{ fontWeight: 800, fontSize: '1.13em', letterSpacing: '0.01em' }}>
            Equivalencia aproximada de piezas por gramaje
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ background: 'var(--background-modal)', color: 'var(--text-main)', borderRadius: '0 0 16px 16px', padding: '22px 24px 18px 24px', textAlign: 'center', fontWeight: 500, fontSize: '1.08em' }}>
          <div style={{ marginBottom: 10 }}>{product.comment}</div>
          <div style={{ fontSize: '0.97em', color: 'var(--text-muted)', fontWeight: 400 }}>
            Las piezas son aproximadas.
          </div>
          <button
            className="btn btn-primary mt-4 w-100"
            style={{ borderRadius: 20, fontWeight: 700, fontSize: '1em', background: 'var(--primary-orange)', border: 'none', marginTop: 18 }}
            onClick={() => setShowEquivModal(false)}
          >
            Cerrar
          </button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProductCard;