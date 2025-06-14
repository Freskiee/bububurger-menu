import React, { useState, useRef, useEffect } from 'react';
import { Product, Category } from '../data/menuData';
import Modal from 'react-bootstrap/Modal';

interface ProductCardProps {
  product: Product;
  category: Category;
  products: Product[];
  currentIndex: number;
  showModal?: boolean;
  onClose?: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  enableModal?: boolean;
}

const pastelColors = [
  '#ff4081', // rosa intenso
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

const ProductCard: React.FC<ProductCardProps> = ({ product, category, products, currentIndex, showModal, onClose, onPrev, onNext, enableModal }) => {
  const [internalShowModal, setInternalShowModal] = useState(false);
  const [showEquivModal, setShowEquivModal] = useState(false);
  const [showSauceModal, setShowSauceModal] = useState(false);
  const [showFriesInfo, setShowFriesInfo] = useState(false);
  const popoverRef = useRef<HTMLDivElement | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const isInfantil = category.id === 'infantil';

  // Controlar el modal según el modo (controlado o no)
  const modalOpen = enableModal ? (showModal ?? false) : internalShowModal;
  const openModal = () => {
    if (enableModal) return;
    setInternalShowModal(true);
  };
  const closeModal = () => {
    if (enableModal && onClose) onClose();
    else setInternalShowModal(false);
  };

  // Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const diff = touchEndX.current - touchStartX.current;
      if (diff > 60 && onPrev) {
        onPrev();
      } else if (diff < -60 && onNext) {
        onNext();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

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
        onClick={openModal}
        id={isInfantil ? "infantil" : undefined}
        style={isInfantil ? {
          background: document.body.classList.contains('dark-mode') ? '#2a2250' : '#f3eafe',
          borderRadius: 22,
          border: document.body.classList.contains('dark-mode') ? '2.5px dashed #ffd740' : '2.5px dashed #7c4dff',
          boxShadow: '0 2px 12px 0 rgba(124,77,255,0.10)',
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
          background: document.body.classList.contains('dark-mode') ? 'linear-gradient(135deg, #2a2250 80%, #7c4dff 100%)' : 'linear-gradient(135deg, #fffde7 80%, #f3eafe 100%)',
          borderRadius: 18,
          boxShadow: '0 2px 8px #7c4dff22',
          padding: '10px 10px 8px 10px',
          fontFamily: "'Fredoka One', 'Comic Sans MS', cursive, sans-serif",
          width: '92%',
          margin: '0 auto 8px auto',
          minHeight: '70px'
        } : {}}>
          <h6 className={isInfantil ? "product-title" : "product-title fw-bold mb-1"} style={isInfantil ? { fontFamily: "'Fredoka One', 'Comic Sans MS', cursive, sans-serif", fontWeight: 900, fontSize: '1.13rem', marginBottom: 2, letterSpacing: '0.01em', textAlign: 'left', display: 'flex', alignItems: 'center', gap: 6, color: document.body.classList.contains('dark-mode') ? '#ffd740' : '#7c4dff' } : {}}>
            {isInfantil ? multicolorText(product.name) : product.name}
            {isInfantil && <span style={{ fontSize: 18, marginLeft: 4 }}>🧃</span>}
          </h6>
          {isInfantil ? (
            <p className="mb-4" style={{ 
              color: document.body.classList.contains('dark-mode') ? '#ffd740' : '#7c4dff', 
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

      {/* Solo renderizar el Modal si enableModal es true */}
      {enableModal && (
        <Modal
          show={modalOpen}
          onHide={closeModal}
          centered
          size="lg"
          className="product-modal"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <Modal.Header closeButton className="modal-header-custom" style={isInfantil ? {
            background: document.body.classList.contains('dark-mode') ? 'linear-gradient(90deg, #2a2250, #7c4dff)' : 'linear-gradient(90deg, #ffd740, #ff80ab)',
            color: document.body.classList.contains('dark-mode') ? '#ffd740' : '#7c4dff',
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
            background: document.body.classList.contains('dark-mode') ? '#2a2250' : '#f3eafe',
            color: document.body.classList.contains('dark-mode') ? '#ffd740' : '#7c4dff',
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
                <h4 className="mb-3" style={isInfantil ? { fontFamily: "'Fredoka One', 'Comic Sans MS', cursive, sans-serif", fontWeight: 900, fontSize: '1.18rem', letterSpacing: '0.01em', color: document.body.classList.contains('dark-mode') ? '#ffd740' : pastelColors[1], marginBottom: 8 } : {}}>
                  {isInfantil ? multicolorText(product.name) : product.name}
                </h4>
                {isInfantil ? (
                  <p className="mb-4" style={{ color: document.body.classList.contains('dark-mode') ? '#ffd740' : '#7c4dff', fontWeight: 700, fontSize: '1.01em' }}>{product.description}</p>
                ) : (
                  <p className="text-muted mb-4">{product.description}</p>
                )}
                <div className="product-price mb-4" style={isInfantil ? { 
                  color: document.body.classList.contains('dark-mode') ? '#ffd740' : pastelColors[0], 
                  fontWeight: 900, 
                  fontSize: '1.13em', 
                  fontFamily: "'Fredoka One', 'Comic Sans MS', cursive, sans-serif" 
                } : {
                  color: (document.body.classList.contains('dark-mode') ? '#fff' : '#ff6a00'),
                  fontWeight: 700,
                  fontSize: '1.18rem',
                  textShadow: '0 1px 2px rgba(0,0,0,0.2)'
                }}>
                  {product.prices.map((option, idx) => (
                    <span key={option.label} style={{ display: 'inline-block', marginBottom: 2, marginRight: 8, position: 'relative' }}>
                      {idx > 0 && <span> | </span>}
                      <span style={{ color: (document.body.classList.contains('dark-mode') ? '#ff6a00' : '#181818'), fontWeight: 700 }}>{option.label} </span>
                      <span style={{ color: (document.body.classList.contains('dark-mode') ? '#fff' : '#ff6a00'), fontWeight: 700 }}>${option.value}</span>
                      {/* Leyenda para alitas */}
                      {product.id === 'w1' && option.label.includes('10') && (
                        <span style={{ display: 'block', fontSize: '0.93em', color: '#888', marginTop: 2, fontWeight: 500 }}>
                          Incluye 2 salsas a elegir
                        </span>
                      )}
                      {product.id === 'w1' && option.label.includes('15') && (
                        <span style={{ display: 'block', fontSize: '0.93em', color: '#888', marginTop: 2, fontWeight: 500 }}>
                          Incluye 3 salsas a elegir
                        </span>
                      )}
                      {/* Emoji de papas para banderillas de 2 piezas */}
                      {product.id && product.id.startsWith('bd') && option.label.includes('2') && (
                        <span style={{ position: 'relative', display: 'inline-block' }}>
                          <span
                            style={{ cursor: 'pointer', marginLeft: 6, fontSize: 18, verticalAlign: 'middle' }}
                            onClick={() => setShowFriesInfo((prev) => !prev)}
                            title="¿Qué incluye?"
                          >🍟</span>
                          {/* Tooltip encima del emoji */}
                          {showFriesInfo && (
                            <span
                              style={{
                                position: 'absolute',
                                bottom: '120%',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                background: '#ffe066',
                                color: '#a0522d',
                                borderRadius: 8,
                                padding: '6px 14px',
                                fontSize: '0.97em',
                                fontWeight: 600,
                                boxShadow: '0 2px 8px rgba(0,0,0,0.13)',
                                whiteSpace: 'normal',
                                zIndex: 10,
                                border: '1.5px solid #ffecb3',
                                maxWidth: '220px',
                                minWidth: '160px',
                                textAlign: 'center',
                                wordBreak: 'break-word',
                              }}
                            >
                              Incluye porción de papas a la francesa.
                              {/* Flechita */}
                              <span style={{
                                position: 'absolute',
                                top: '100%',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: 0,
                                height: 0,
                                borderLeft: '8px solid transparent',
                                borderRight: '8px solid transparent',
                                borderTop: '8px solid #ffe066',
                              }} />
                            </span>
                          )}
                        </span>
                      )}
                    </span>
                  ))}
                  {/* Leyenda de malteada para menú infantil */}
                  {isInfantil && (
                    <div style={{
                      marginTop: 8,
                      background: document.body.classList.contains('dark-mode') ? '#7c4dff' : '#ffd740',
                      color: document.body.classList.contains('dark-mode') ? '#ffd740' : '#ff4081',
                      border: document.body.classList.contains('dark-mode') ? '2px solid #ffd740' : '2px solid #ff80ab',
                      borderRadius: 12,
                      padding: '6px 14px',
                      fontWeight: 700,
                      fontSize: '1.01em',
                      fontFamily: "'Fredoka One', 'Comic Sans MS', cursive, sans-serif",
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      justifyContent: 'center',
                      boxShadow: '0 1px 8px #ffd74033',
                      width: 'fit-content',
                      marginLeft: 'auto',
                      marginRight: 'auto',
                    }}>
                      <span role="img" aria-label="malteada" style={{ fontSize: 20 }}>🥤</span>
                      <span>+ $95 Cambia tu bebida por una malteada</span>
                    </div>
                  )}
                </div>
                {/* Etiqueta de chilibean para hot dogs (excepto infantil) */}
                {category.id === 'hotdog' && !isInfantil && (
                  <div style={{
                    background: '#fff',
                    border: '1.5px solid #ff9800',
                    borderRadius: 10,
                    padding: '8px 14px',
                    marginBottom: 16,
                    marginTop: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8,
                    fontWeight: 600,
                    fontSize: '1em',
                    color: '#a0522d',
                    textAlign: 'center',
                    boxShadow: 'none',
                  }}>
                    <span style={{ fontSize: 18, marginRight: 6 }}>🫘</span>
                    <span>
                      ¿Agregar chilibean a tu hot dog? +$45
                    </span>
                    <span style={{ fontSize: 18, marginLeft: 6 }}>🌶️</span>
                  </div>
                )}
                <div style={{ display: 'flex', gap: 8, marginBottom: 10, justifyContent: 'center' }}>
                  {product.id === 'w2' && (
                    <button
                      type="button"
                      className="btn btn-outline-primary btn-sm"
                      style={{ borderRadius: 16, fontSize: '0.97em', fontWeight: 500, padding: '4px 14px', minWidth: 120 }}
                      onClick={() => setShowEquivModal(true)}
                    >
                      Ver equivalencias
                    </button>
                  )}
                  {product.sauces && (
                    <button
                      type="button"
                      className="btn btn-outline-danger btn-sm"
                      style={{ borderRadius: 16, fontSize: '0.97em', fontWeight: 500, padding: '4px 14px', minWidth: 120 }}
                      onClick={() => setShowSauceModal(true)}
                    >
                      Ver salsas
                    </button>
                  )}
                </div>
                <button 
                  className="btn btn-primary w-100"
                  onClick={closeModal}
                  style={{ marginTop: 6, background: 'var(--primary-orange)', border: 'none', fontWeight: 700, fontSize: '1.05em', borderRadius: 14, padding: '10px 0' }}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </Modal.Body>
          {/* Flechas de navegación a los lados del modal */}
          {onPrev && currentIndex > 0 && (
            <button
              onClick={onPrev}
              style={{
                position: 'absolute',
                left: 10,
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(0, 0, 0, 0.5)',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: 40,
                height: 40,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 1000,
              }}
            >
              ←
            </button>
          )}
          {onNext && currentIndex < products.length - 1 && (
            <button
              onClick={onNext}
              style={{
                position: 'absolute',
                right: 10,
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(0, 0, 0, 0.5)',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: 40,
                height: 40,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 1000,
              }}
            >
              →
            </button>
          )}
        </Modal>
      )}

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
          <div style={{ marginBottom: 10 }}>
            225 gr. ≈ 8 pzas. | 515 gr. ≈ 13 pzas. | 1100 gr. ≈ 28 pzas.
          </div>
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

      {/* Modal de salsas */}
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
            {product.sauces && product.sauces.map((salsa) => {
              // Niveles de picor por nombre de salsa (corregido)
              const salsaLower = salsa.toLowerCase();
              let level = 1;
              if (salsaLower.includes('hot bbq')) level = 2;
              else if (salsaLower.includes('tamarindo')) level = 2;
              else if (salsaLower.includes('maggi')) level = 3;
              else if (salsaLower.includes('cajún') || salsaLower.includes('cajun')) level = 4;
              else if (salsaLower.includes('brava')) level = 4;
              else if (salsaLower.includes('mango habanero')) level = 5;
              else if (salsaLower.includes('requete-macho') || salsaLower.includes('super-macho')) level = 5;
              // El resto (bbq miel, ajo parmesano, teriyaki, bbq) es 1 chile
              const toTitleCase = (str: string) => str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
              const chiliColors = ['#ffe066', '#ffd166', '#ffb347', '#ff8c42', '#d7263d'];
              const isRequeteMacho = salsaLower.includes('requete-macho') || salsaLower.includes('super-macho');
              return (
                <div key={salsa} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, gap: 8, width: '100%' }}>
                  <span style={{ fontWeight: 500, color: 'var(--text-main)', minWidth: 110 }}>{toTitleCase(salsa)}</span>
                  <span style={{ display: 'flex', flexWrap: 'nowrap', gap: 2, alignItems: 'center' }}>
                    {Array.from({ length: level }).map((_, i) => (
                      <span key={i} style={{ color: chiliColors[Math.min(level-1, chiliColors.length-1)], fontSize: 18, marginLeft: 1 }}>🌶️</span>
                    ))}
                    {isRequeteMacho && (
                      <span style={{ fontSize: 18, marginLeft: 4 }} role="img" aria-label="explosivo">🤯</span>
                    )}
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
  );
};

export default ProductCard;