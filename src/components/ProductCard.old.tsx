import React, { useState, useRef, useEffect } from 'react';
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

const pastelColors = [
  '#ff80ab', // rosa
  '#7c4dff', // lila
  '#ffd740', // amarillo
  '#40c4ff', // azul
  '#69f0ae', // verde
];

function multicolorText(text: string) {
  return (
    <span>
      {text.split('').map((char, i) => (
        <span key={i} style={{ color: pastelColors[i % pastelColors.length], fontWeight: 900 }}>
          {char}
        </span>
      ))}
    </span>
  );
}

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
        id={isInfantil ? "infantil" : undefined}
        style={isInfantil ? {
          background: isDark ? '#23243a' : '#f3eafe',
          borderRadius: 22,
          border: isDark ? '2.5px dashed #b39ddb' : '2.5px dashed #b39ddb',
          boxShadow: isDark ? '0 2px 12px 0 rgba(124,77,255,0.10)' : '0 2px 12px 0 rgba(124,77,255,0.10)',
          position: 'relative',
          minHeight: 180,
          padding: '12px 8px 12px 8px',
          fontFamily: "'Fredoka One', 'Comic Sans MS', cursive, sans-serif",
        } : {}}
      >
        {isInfantil && (
          <span style={{ position: 'absolute', top: 10, left: 12, fontSize: 22, zIndex: 2 }}>🎈🍟</span>
        )}
        <img 
          src={product.image} 
          alt={product.name}
          className={isInfantil ? "product-image" : "product-image"}
          style={isInfantil ? { borderRadius: 18, border: '2px solid #ffd740', boxShadow: '0 2px 8px #ffd74033', background: '#fff' } : {}}
        />
        <div className={isInfantil ? "product-content" : "product-content"} style={isInfantil ? {
          background: isDark ? 'linear-gradient(135deg, #2f4a85 80%, #7f53f9 100%)' : 'linear-gradient(135deg, #fffde7 80%, #f3eafe 100%)',
          borderRadius: 18,
          boxShadow: '0 2px 8px #7c4dff22',
          padding: '10px 10px 8px 10px',
          fontFamily: "'Fredoka One', 'Comic Sans MS', cursive, sans-serif",
          width: '92%',
          margin: '0 auto 8px auto',
          minHeight: '70px'
        } : {}}>
          <h6 className={isInfantil ? "product-title" : "product-title fw-bold mb-1"} style={isInfantil ? { fontFamily: "'Fredoka One', 'Comic Sans MS', cursive, sans-serif", fontWeight: 900, fontSize: '1.13rem', marginBottom: 2, letterSpacing: '0.01em', color: '#ffffff', backgroundColor: '#f0f0f00', padding: '5px', borderRadius: '5px', textAlign: 'left', display: 'flex', alignItems: 'center', gap: 6 } : {}}>
            {isInfantil ? multicolorText(product.name) : product.name}
            {isInfantil && <span style={{ fontSize: 18, marginLeft: 4 }}>🧃</span>}
          </h6>
          {isInfantil ? (
            <p className="mb-4" style={{ 
              color: '#7c4dff', 
              fontWeight: 700, 
              fontSize: '1.01em',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              WebkitLineClamp: 1,
              WebkitBoxOrient: 'vertical'
            }}>{product.description}</p>
          ) : (
            <p className="product-description">{product.description}</p>
          )}
        </div>
      </div>

      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        size="lg"
        className="product-modal"
      >
        <Modal.Header closeButton className="modal-header-custom" style={isInfantil ? {
          background: isDark ? 'linear-gradient(90deg, #23243a, #7c4dff)' : 'linear-gradient(90deg, #ffd740, #ff80ab)',
          color: isDark ? '#ffd740' : '#7c4dff',
          fontFamily: "'Fredoka One', 'Comic Sans MS', cursive, sans-serif",
        } : {}}>
          <div style={{ display: 'flex', alignItems: 'center', width: '100%', gap: 16, justifyContent: 'center' }}>
            <Modal.Title className="fw-bold" style={isInfantil ? {
              textAlign: 'center', margin: 0, fontFamily: "'Fredoka One', 'Comic Sans MS', cursive, sans-serif", fontWeight: 900, fontSize: '1.35rem', letterSpacing: '0.01em', display: 'flex', alignItems: 'center', gap: 8
            } : { textAlign: 'center', margin: 0 }}>
              {isInfantil ? multicolorText(product.name) : product.name}
              {isInfantil && <span style={{ fontSize: 22 }}>🍭</span>}
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
        <Modal.Body style={isInfantil ? {
          background: isDark ? '#23243a' : '#f3eafe',
          color: isDark ? '#ffd740' : '#7c4dff',
          fontFamily: "'Fredoka One', 'Comic Sans MS', cursive, sans-serif",
        } : {}}>
          <div className="row">
            <div className="col-md-6">
              <img 
                src={product.image} 
                alt={product.name}
                className="img-fluid rounded"
                style={isInfantil ? { width: '100%', height: 'auto', objectFit: 'cover', borderRadius: 18, border: '2px solid #ffd740', boxShadow: '0 2px 8px #ffd74033', background: '#fff' } : { width: '100%', height: 'auto', objectFit: 'cover' }}
              />
            </div>
            <div className="col-md-6">
              <h4 className="mb-3" style={isInfantil ? { fontFamily: "'Fredoka One', 'Comic Sans MS', cursive, sans-serif", fontWeight: 900, fontSize: '1.18rem', letterSpacing: '0.01em', color: pastelColors[1], marginBottom: 8 } : {}}>
                {isInfantil ? multicolorText(product.name) : product.name}
              </h4>
              {isInfantil ? (
                <p className="mb-4" style={{ color: '#7c4dff', fontWeight: 700, fontSize: '1.01em' }}>{product.description}</p>
              ) : (
                <p className="text-muted mb-4">{product.description}</p>
              )}
              <div className="product-price mb-4" style={isInfantil ? { 
                color: pastelColors[0], 
                fontWeight: 900, 
                fontSize: '1.13em', 
                fontFamily: "'Fredoka One', 'Comic Sans MS', cursive, sans-serif" 
              } : {
                color: '#ff6a00',
                fontWeight: 700,
                fontSize: '1.18rem',
                textShadow: '0 1px 2px rgba(0,0,0,0.2)'
              }}>
                {product.prices.map((option, idx) => (
                  <span key={option.label} style={{ display: 'inline-block', marginBottom: option.note ? 2 : 0 }}>
                    {idx > 0 && <span> | </span>}
                    {option.label
                      ? <span style={{ color: 'var(--text-main)', fontWeight: 600, opacity: 1 }}>
                          {option.label}{/\.$/.test(option.label.trim()) ? '' : ':'}{' '}
                        </span>
                      : null}
                    <span style={{ color: '#ff6a00', fontWeight: 700 }}>${option.value}</span>
                    {option.note && (
                      <div style={{ fontSize: '0.93em', color: 'var(--text-main)', opacity: 0.85, marginTop: 2, fontWeight: 400, lineHeight: 1.2 }}>{option.note}</div>
                    )}
                  </span>
                ))}
                {isInfantil && (
                  <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    marginTop: 6
                  }}>
                    <span style={{
                      background: isDark ? 'rgba(255,255,255,0.10)' : 'rgba(255,255,255,0.85)',
                      color: isDark ? pastelColors[1] : pastelColors[0],
                      fontFamily: "'Fredoka One', 'Comic Sans MS', cursive, sans-serif",
                      fontWeight: 600,
                      fontSize: '0.89em',
                      borderRadius: 8,
                      padding: '3px 8px',
                      boxShadow: '0 1px 4px rgba(124,77,255,0.08)',
                      border: isDark ? '1px solid #b39ddb' : '1px solid #e0e0e0',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 4,
                      minWidth: 0,
                      maxWidth: '100%',
                      whiteSpace: 'normal',
                      textAlign: 'center',
                    }}>
                      <span role="img" aria-label="malteada" style={{ fontSize: 15 }}>🥤</span>
                      <span>+ $95 Cambia tu bebida por una malteada</span>
                    </span>
                  </div>
                )}
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
                          // Función para poner en mayúscula la primera letra de cada palabra
                          const toTitleCase = (str: string) => str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
                          // Colores de chile
                          return (
                            <div key={salsa} style={{ display: 'flex', alignItems: 'center', marginBottom: 8, gap: 8, flexWrap: 'wrap' }}>
                              <div style={{ width: 18, height: 18, borderRadius: '50%', background: sauceColors[idx] || '#eee', marginRight: 6, border: '1.5px solid #fff', boxShadow: '0 1px 4px rgba(0,0,0,0.07)' }} />
                              <span style={{ fontWeight: 500, color: 'var(--text-main)', minWidth: 110, marginRight: 8 }}>{toTitleCase(salsa)}</span>
                              <span style={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
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