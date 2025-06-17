import React, { useState, useRef, useEffect, useContext } from 'react';
import { Product, Category } from '../data/menuData';
import Modal from 'react-bootstrap/Modal';
import { productTranslations, sauceTranslations } from '../i18n/menu';
import { uiTranslations } from '../i18n/menu';
import { LanguageContext } from '../App';

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

// Define el tipo correcto para las opciones de precio
interface PriceOption { label: string; price?: number; value?: number; note?: string; }

const pastelColors = [
  '#ff0080', // fucsia
  '#00b0ff', // azul eléctrico
  '#ff6d00', // naranja intenso
  '#00e676', // verde lima
  '#8f00ff', // violeta
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
  const [showBeverageModal, setShowBeverageModal] = useState(false);
  const [showBoingModal, setShowBoingModal] = useState(false);
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

  // Obtener traducción si existe
  const { language } = useContext(LanguageContext) as { language: 'es' | 'en' };
  const t = uiTranslations;
  const translated = productTranslations[product.id]?.[language as 'es' | 'en'];
  const productName = translated?.name || product.name;
  const productDescription = translated?.description || product.description;
  const productPrices = translated?.prices || product.prices;

  // Obtener traducción para el botón y el contenido del modal
  const beverageButtonLabel = language === 'es' ? 'Ver bebidas' : 'See sodas';
  const beverageList = language === 'es' ? [
    'Coca-Cola',
    'Coca sin azúcar',
    'Coca Light',
    'Fanta',
    'Delaware Punch',
    'Sidral Mundet',
    'Mundet rojo',
    'Sprite',
    'Fresca',
    'Sangría Señorial',
    'Agua Mineral'
  ] : [
    'Coca-Cola',
    'Coke Zero',
    'Diet Coke',
    'Fanta',
    'Delaware Punch',
    'Sidral Mundet',
    'Red Mundet',
    'Sprite',
    'Fresca',
    'Sangría Señorial',
    'Mineral Water'
  ];

  const boingFlavors = language === 'es' ? [
    'Fresa',
    'Guayaba',
    'Mango',
    'Manzana',
    'Tamarindo',
    'Uva'
  ] : [
    'Strawberry',
    'Guava',
    'Mango',
    'Apple',
    'Tamarind',
    'Grape'
  ];

  // Traducción de la descripción de Boing
  const boingDescription = language === 'es' ?
    "Bebidas Boing de 355 ml en distintos sabores, elaboradas con fruta natural. Refrescantes y perfectas para cualquier momento."
    :
    "Boing drinks of 355ml in different flavors, made with natural fruit. Refreshing and perfect for any moment.";

  return (
    <>
      <div 
        className="product-card p-3 mb-3"
        onClick={openModal}
        id={isInfantil ? "infantil" : undefined}
        style={isInfantil ? {
          background: isInfantil ? (document.body.classList.contains('dark-mode')
            ? 'linear-gradient(135deg, #a084ee 40%, #40c4ff 60%, #ff80ab 80%, #69f0ae 90%, #ffb74d 100%)'
            : 'linear-gradient(135deg, #a084ee 40%, #40c4ff 60%, #ff80ab 80%, #69f0ae 90%, #ffb74d 100%)') : undefined,
          borderRadius: 22,
          border: isInfantil ? (document.body.classList.contains('dark-mode')
            ? '3px solid #40c4ff'
            : '3px solid #ff80ab') : undefined,
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
          alt={productName}
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
          <h6 className={isInfantil ? "product-title" : "product-title fw-bold mb-1"} style={isInfantil ? {
            fontFamily: "'Fredoka One', 'Comic Sans MS', cursive, sans-serif",
            fontWeight: isInfantil ? 900 : undefined,
            fontSize: isInfantil ? '1.25rem' : undefined,
            letterSpacing: '0.01em',
            marginBottom: 2,
            textAlign: 'left',
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            color: isInfantil ? (document.body.classList.contains('dark-mode') ? '#40c4ff' : '#a084ee') : undefined
          } : {}}>
            {isInfantil ? multicolorText(productName) : productName}
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
            }}>{productDescription}</p>
          ) : (
            <p className="product-description" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{product.id === 'bebida-2' ? boingDescription : productDescription}</p>
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
                textAlign: 'center', margin: 0, fontFamily: "'Fredoka One', 'Comic Sans MS', cursive, sans-serif", fontWeight: isInfantil ? 900 : undefined, fontSize: isInfantil ? '1.35rem' : undefined, letterSpacing: '0.01em', display: 'flex', alignItems: 'center', gap: 8
              } : { textAlign: 'center', margin: 0 }}>
                {isInfantil ? multicolorText(productName) : productName}
                {isInfantil && <span style={{ fontSize: 22 }}>🍭</span>}
              </Modal.Title>
              {category.chefImage && (
                <img
                  src={`/${category.chefImage}`}
                  alt={`Chef para ${productName}`}
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
                  alt={productName}
                  className="img-fluid rounded"
                  style={isInfantil ? { width: '100%', height: 'auto', objectFit: 'cover', borderRadius: 18, border: '2px solid #ffd740', boxShadow: '0 2px 8px #ffd74033', background: '#fff' } : { width: '100%', height: 'auto', objectFit: 'cover' }}
                />
              </div>
              <div className="col-md-6">
                <h4 className="mb-3" style={isInfantil ? { fontFamily: "'Fredoka One', 'Comic Sans MS', cursive, sans-serif", fontWeight: isInfantil ? 900 : undefined, fontSize: isInfantil ? '1.18rem' : undefined, letterSpacing: isInfantil ? '0.01em' : undefined, color: document.body.classList.contains('dark-mode') ? '#ffd740' : pastelColors[1], marginBottom: 8 } : {}}>
                  {isInfantil ? multicolorText(productName) : productName}
                </h4>
                {isInfantil ? (
                  <p className="mb-4" style={{ color: document.body.classList.contains('dark-mode') ? '#ffd740' : '#7c4dff', fontWeight: 700, fontSize: '1.01em' }}>{productDescription}</p>
                ) : (
                  <p className="text-muted mb-4">{productDescription}</p>
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
                  {productPrices.map((option: PriceOption, idx: number) => {
                    return (
                      <span key={option.label + (option.price ?? option.value)} style={{ display: 'inline-block', marginBottom: 2, marginRight: 8, position: 'relative' }}>
                        {idx > 0 && <span> | </span>}
                        <span style={{ color: (document.body.classList.contains('dark-mode') ? '#ff6a00' : '#181818'), fontWeight: 700 }}>{option.label} </span>
                        <span style={{ color: (document.body.classList.contains('dark-mode') ? '#fff' : '#ff6a00'), fontWeight: 700 }}>${option.price ?? option.value}</span>
                        {option.note && option.note !== uiTranslations.friesIncluded[language] && (
                          <span style={{ display: 'block', fontSize: '0.93em', color: '#888', marginTop: 2, fontWeight: 500 }}>
                            {option.note}
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
                                {uiTranslations.friesIncluded[language]}
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
                    );
                  })}
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
                      <span>{uiTranslations.kidsMenu.upgradeShake[language as 'es' | 'en']}</span>
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
                      {language === 'es' ? '¿Agregar chilibean a tu hot dog? +$45' : 'Add chilibean to your hot dog? +$45'}
                    </span>
                    <span style={{ fontSize: 18, marginLeft: 6 }}>🌶️</span>
                  </div>
                )}
                <div style={{ display: 'flex', gap: 8, marginBottom: 10, justifyContent: 'center' }}>
                  {product.id === 'w2' && (
                    <button
                      type="button"
                      className="btn btn-outline-primary btn-sm"
                      style={{
                        borderRadius: 10,
                        fontSize: '0.8em',
                        fontWeight: 500,
                        padding: '2px 8px',
                        minWidth: 90
                      }}
                      onClick={() => setShowEquivModal(true)}
                    >
                      {t.seeEquiv[language]}
                    </button>
                  )}
                  {product.sauces && (
                    <button
                      type="button"
                      className="btn btn-outline-danger btn-sm"
                      style={{
                        borderRadius: 10,
                        fontSize: '0.8em',
                        fontWeight: 500,
                        padding: '2px 8px',
                        minWidth: 90
                      }}
                      onClick={() => setShowSauceModal(true)}
                    >
                      {t.seeSauces[language]}
                    </button>
                  )}
                </div>
                {product.id === 'bebida-1' && (
                  <button
                    onClick={() => setShowBeverageModal(true)}
                    style={{
                      background: '#ff9800',
                      color: '#fff',
                      border: 'none',
                      borderRadius: 8,
                      padding: '8px 16px',
                      cursor: 'pointer',
                      marginTop: 10
                    }}
                  >
                    {beverageButtonLabel}
                  </button>
                )}
                {product.id === 'bebida-2' && (
                  <button
                    onClick={() => setShowBoingModal(true)}
                    style={{
                      background: '#ff9800',
                      color: '#fff',
                      border: 'none',
                      borderRadius: 8,
                      padding: '8px 16px',
                      cursor: 'pointer',
                      marginTop: 10
                    }}
                  >
                    {language === 'es' ? 'Ver sabores' : 'See flavors'}
                  </button>
                )}
                <button 
                  className="btn btn-primary w-100"
                  onClick={closeModal}
                  style={{
                    marginTop: 2,
                    background: 'var(--primary-orange)',
                    border: 'none',
                    fontWeight: 700,
                    fontSize: '0.9em',
                    borderRadius: 10,
                    padding: '6px 0'
                  }}
                >
                  {t.close[language]}
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
                left: -28,
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'transparent',
                color: '#fff',
                border: 'none',
                borderRadius: '50%',
                width: 56,
                height: 56,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 1000,
                boxShadow: 'none',
                transition: 'background 0.18s, transform 0.18s',
                fontSize: 32,
                outline: 'none',
                ...(window.innerWidth < 500 ? { left: -10, width: 44, height: 44 } : {})
              }}
              onMouseOver={e => {
                e.currentTarget.style.background = 'rgba(0,0,0,0.18)';
                e.currentTarget.style.transform = 'translateY(-50%) scale(1.12)';
              }}
              onMouseOut={e => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.transform = 'translateY(-50%)';
              }}
              aria-label="Anterior"
            >
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.32))' }}>
                <circle cx="16" cy="16" r="16" fill="none" />
                <path d="M20 8L12 16L20 24" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          )}
          {onNext && currentIndex < products.length - 1 && (
            <button
              onClick={onNext}
              style={{
                position: 'absolute',
                right: -28,
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'transparent',
                color: '#fff',
                border: 'none',
                borderRadius: '50%',
                width: 56,
                height: 56,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 1000,
                boxShadow: 'none',
                transition: 'background 0.18s, transform 0.18s',
                fontSize: 32,
                outline: 'none',
                ...(window.innerWidth < 500 ? { right: -10, width: 44, height: 44 } : {})
              }}
              onMouseOver={e => {
                e.currentTarget.style.background = 'rgba(0,0,0,0.18)';
                e.currentTarget.style.transform = 'translateY(-50%) scale(1.12)';
              }}
              onMouseOut={e => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.transform = 'translateY(-50%)';
              }}
              aria-label="Siguiente"
            >
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.32))' }}>
                <circle cx="16" cy="16" r="16" fill="none" />
                <path d="M12 8L20 16L12 24" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
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
            {t.equivTitle[language]}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ background: 'var(--background-modal)', color: 'var(--text-main)', borderRadius: '0 0 16px 16px', padding: '22px 24px 18px 24px', textAlign: 'center', fontWeight: 500, fontSize: '1.08em' }}>
          <div style={{ marginBottom: 10, fontWeight: 700, color: '#ff6a00', fontSize: '1.08em' }}>
            225 gr. ≈ 8 pzas. | 515 gr. ≈ 13 pzas. | 1100 gr. ≈ 28 pzas.
          </div>
          <div style={{ fontSize: '0.97em', color: 'var(--text-muted)', fontWeight: 400 }}>
            {t.equivNote[language]}
          </div>
          <button
            className="btn btn-primary mt-4 w-100"
            style={{ borderRadius: 20, fontWeight: 700, fontSize: '1em', background: 'var(--primary-orange)', border: 'none', marginTop: 18 }}
            onClick={() => setShowEquivModal(false)}
          >
            {t.close[language]}
          </button>
        </Modal.Body>
      </Modal>

      {/* Modal de salsas */}
      <Modal
        show={showSauceModal}
        onHide={() => setShowSauceModal(false)}
        centered
        size="lg"
        contentClassName="sauce-modal-content"
        backdropClassName="sauce-modal-backdrop"
      >
        <Modal.Header closeButton style={{ border: 'none', background: 'linear-gradient(90deg, #ffe066, #ff5e57)', color: '#222', borderRadius: '16px 16px 0 0', padding: '18px 24px 12px 24px' }}>
          <Modal.Title style={{ fontWeight: 800, fontSize: '1.13em', letterSpacing: '0.01em' }}>
            {t.sauceTitle[language]}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ background: 'var(--background-modal)', color: 'var(--text-main)', borderRadius: '0 0 16px 16px', padding: '8px 12px 12px 12px', textAlign: 'center', fontWeight: 500, fontSize: '0.95em' }}>
          {/* Lista vertical de salsas con chiles */}
          <div style={{ margin: '0 auto 5px auto', maxWidth: 340, textAlign: 'left' }}>
            {product.sauces && product.sauces.map((salsa) => {
              // Normaliza el nombre para buscar la clave en sauceTranslations
              const normalizar = (str: string) => str.toLowerCase().replace(/[^a-záéíóúüñ0-9]/gi, '');
              const claves = Object.keys(sauceTranslations);
              const clave = claves.find(k => normalizar(sauceTranslations[k as keyof typeof sauceTranslations].es) === normalizar(salsa) || normalizar(sauceTranslations[k as keyof typeof sauceTranslations].en) === normalizar(salsa));
              const nombreTraducido = clave ? sauceTranslations[clave as keyof typeof sauceTranslations][language] : salsa;
              // Niveles de picor por nombre de salsa (igual que antes)
              const salsaLower = salsa.toLowerCase();
              let level = 1;
              if (salsaLower.includes('hot bbq')) level = 2;
              else if (salsaLower.includes('tamarindo')) level = 2;
              else if (salsaLower.includes('maggi')) level = 3;
              else if (salsaLower.includes('cajún') || salsaLower.includes('cajun')) level = 4;
              else if (salsaLower.includes('brava')) level = 4;
              else if (salsaLower.includes('mango habanero')) level = 5;
              else if (salsaLower.includes('requete-macho') || salsaLower.includes('super-macho')) level = 5;
              const isRequeteMacho = salsaLower.includes('requete-macho') || salsaLower.includes('super-macho');
              // Colores de fondo alternados
              const spicyColors = [
                'linear-gradient(90deg, #a8e6a8 0%, #d6e6a8 100%)', // nivel 1: verde tenue
                'linear-gradient(90deg, #d6e6a8 0%, #ffe6a8 100%)', // nivel 2: verde-amarillo tenue
                'linear-gradient(90deg, #ffe6a8 0%, #ffd6a8 100%)', // nivel 3: amarillo tenue
                'linear-gradient(90deg, #ffd6a8 0%, #ffb6a8 100%)', // nivel 4: naranja tenue
                'linear-gradient(90deg, #ffb6a8 0%, #ffa8a8 100%)', // nivel 5: rojo tenue
              ];
              const rowBg = spicyColors[level-1];
              return (
                <div key={salsa} style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  marginBottom: 2,
                  gap: 6,
                  width: '100%',
                  background: rowBg,
                  borderRadius: 8,
                  padding: '4px 6px',
                  boxShadow: '0 1px 4px #ff98001a',
                  border: '1px solid #ffd740',
                  minHeight: 28
                }}>
                  <span style={{ fontWeight: 700, color: '#333', minWidth: 80, fontSize: '0.9em', letterSpacing: '0.01em', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{nombreTraducido}</span>
                  <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 1, minWidth: 80 }}>
                    {/* Barra de picante vertical */}
                    <div style={{ width: 10, height: 32, background: '#fffbe6', borderRadius: 6, overflow: 'hidden', boxShadow: '0 1px 4px #ff980055', border: '1px solid #ffd740', position: 'relative', marginBottom: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                      <div style={{
                        width: '100%',
                        height: `${level * 20}%`,
                        borderRadius: 6,
                        background: spicyColors[level-1],
                        transition: 'height 0.4s cubic-bezier(.4,1.3,.6,1)',
                        boxShadow: '0 1px 4px #ff980055',
                        position: 'absolute',
                        left: 0,
                        bottom: 0
                      }} />
                      {level >= 4 && (
                        <span style={{ position: 'absolute', left: '50%', top: 2, transform: 'translateX(-50%)', fontSize: 13, animation: 'flame 1.2s infinite alternate' }} role="img" aria-label="fuego">🔥</span>
                      )}
                    </div>
                    <span style={{ fontSize: '0.8em', color: level >= 4 ? '#ff1744' : '#ff9800', fontWeight: 600, letterSpacing: '0.01em' }}>{uiTranslations.spicyLevels[language][level-1]}</span>
                    {isRequeteMacho && (
                      <span style={{ fontSize: 15, marginLeft: 2 }} role="img" aria-label="explosivo">🤯</span>
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
            {t.close[language]}
          </button>
        </Modal.Body>
      </Modal>

      {/* Modal de bebidas */}
      <Modal show={showBeverageModal} onHide={() => setShowBeverageModal(false)} centered>
        <Modal.Header closeButton style={{
          background: document.body.classList.contains('dark-mode') ? 'linear-gradient(135deg, #333, #555)' : 'linear-gradient(135deg, #ff9800, #ffcc80)',
          color: '#fff',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
          borderBottom: '2px solid #e65100'
        }}>
          <Modal.Title style={{
            fontWeight: 'bold',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
          }}>{language === 'es' ? 'Lista de Bebidas' : 'Soda List'}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{
          background: document.body.classList.contains('dark-mode') ? 'linear-gradient(135deg, #444, #666)' : 'linear-gradient(135deg, #fff3e0, #ffe0b2)',
          color: document.body.classList.contains('dark-mode') ? '#ddd' : '#333',
          boxShadow: 'inset 0 0 15px rgba(0, 0, 0, 0.1)',
          borderRadius: '12px',
          padding: '24px',
          transition: 'all 0.3s ease'
        }}>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {beverageList.map((drink, index) => (
              <li key={drink} style={{
                color: document.body.classList.contains('dark-mode') ? (index % 2 === 0 ? '#4caf50' : '#8bc34a') : (index % 2 === 0 ? '#1e88e5' : '#42a5f5'),
                fontWeight: 600,
                marginBottom: 10,
                textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)',
                transform: 'scale(1)',
                transition: 'transform 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                {drink}
              </li>
            ))}
          </ul>
        </Modal.Body>
        <Modal.Footer style={{
          background: document.body.classList.contains('dark-mode') ? 'linear-gradient(135deg, #555, #777)' : 'linear-gradient(135deg, #ffe0b2, #fff3e0)',
          boxShadow: '0 -2px 12px rgba(0, 0, 0, 0.2)',
          borderTop: '2px solid #e65100'
        }}>
          <button onClick={() => setShowBeverageModal(false)} style={{
            background: '#ff9800',
            color: '#fff',
            border: 'none',
            borderRadius: 8,
            padding: '10px 20px',
            cursor: 'pointer',
            boxShadow: '0 3px 6px rgba(0, 0, 0, 0.3)',
            transition: 'background 0.3s ease, transform 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#e65100';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#ff9800';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
          >
            {language === 'es' ? 'Cerrar' : 'Close'}
          </button>
        </Modal.Footer>
      </Modal>

      {/* Modal de sabores de Boing */}
      <Modal show={showBoingModal} onHide={() => setShowBoingModal(false)} centered>
        <Modal.Header closeButton style={{
          background: 'linear-gradient(135deg, #ff9800, #ffcc80)',
          color: '#fff',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
          borderBottom: '2px solid #e65100'
        }}>
          <Modal.Title style={{
            fontWeight: 'bold',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
          }}>{language === 'es' ? 'Sabores de Boing' : 'Boing Flavors'}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{
          background: document.body.classList.contains('dark-mode') ? 'linear-gradient(135deg, #444, #666)' : 'linear-gradient(135deg, #fff3e0, #ffe0b2)',
          color: document.body.classList.contains('dark-mode') ? '#ddd' : '#333',
          boxShadow: 'inset 0 0 15px rgba(0, 0, 0, 0.1)',
          borderRadius: '12px',
          padding: '24px',
          transition: 'all 0.3s ease'
        }}>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {boingFlavors.map((flavor, index) => (
              <li key={flavor} style={{
                color: document.body.classList.contains('dark-mode') ? (index % 2 === 0 ? '#ffeb3b' : '#ffc107') : (index % 2 === 0 ? '#d84315' : '#bf360c'),
                fontWeight: 600,
                marginBottom: 10,
                textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)',
                transform: 'scale(1)',
                transition: 'transform 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                {flavor}
              </li>
            ))}
          </ul>
        </Modal.Body>
        <Modal.Footer style={{
          background: 'linear-gradient(135deg, #ffe0b2, #fff3e0)',
          boxShadow: '0 -2px 12px rgba(0, 0, 0, 0.2)',
          borderTop: '2px solid #e65100'
        }}>
          <button onClick={() => setShowBoingModal(false)} style={{
            background: '#ff9800',
            color: '#fff',
            border: 'none',
            borderRadius: 8,
            padding: '10px 20px',
            cursor: 'pointer',
            boxShadow: '0 3px 6px rgba(0, 0, 0, 0.3)',
            transition: 'background 0.3s ease, transform 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#e65100';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#ff9800';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
          >
            {language === 'es' ? 'Cerrar' : 'Close'}
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProductCard;