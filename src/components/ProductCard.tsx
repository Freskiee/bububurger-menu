import React, { useState, useRef, useEffect, useContext } from 'react';
import { Product, Category } from '../data/menuData';
import { Modal } from 'react-bootstrap';
import CocktailGrid from './CocktailGrid';
import './CocktailGrid.module.css';
import { MalteadasModal } from './MalteadasModal';
import { productTranslations, sauceTranslations } from '../i18n/menu';
import { uiTranslations } from '../i18n/menu';
import { LanguageContext } from '../App';
import { preparedDrinksTranslations } from '../i18n/menu';

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
  titleStyle?: React.CSSProperties;
}

interface PriceOption { label: string; price?: number; value?: number; note?: string; }

const pastelColors = [
  '#ff0080', // fucsia
  '#00b0ff', // azul eléctrico
  '#ff6d00', // naranja intenso
  '#00e676', // verde lima
  '#8f00ff', // violeta
];

const malteadaColors = [
  '#ffd7e0', // rosa pastel
  '#b3e5fc', // azul pastel
  '#ffd180', // naranja pastel
  '#b9f6ca', // verde pastel
  '#e1bee7'  // morado pastel
];

function alternateColors(text: string, index: number) {
  const colors = ['#fff', '#ff6d00']; // blanco y naranja
  const color = colors[index % colors.length];
  return (
    <span style={{ color, fontWeight: 'bold' }}>{text}</span>
  );
}

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

const ProductCard: React.FC<ProductCardProps> = ({ product, category, products, currentIndex, showModal, onClose, onPrev, onNext, enableModal, titleStyle }) => {
  const [internalShowModal, setInternalShowModal] = useState(false);
  const [showEquivModal, setShowEquivModal] = useState(false);
  const [showSauceModal, setShowSauceModal] = useState(false);
  const [showFriesInfo, setShowFriesInfo] = useState(false);
  const [showCocktailColorsModal, setShowCocktailColorsModal] = useState(false);
  const [showMalteadasModal, setShowMalteadasModal] = useState(false);
  const [showDigestivosModal, setShowDigestivosModal] = useState(false);
  const [showBeverageModal, setShowBeverageModal] = useState(false);
  const [showBoingModal, setShowBoingModal] = useState(false);
  const [showItalianSodasModal, setShowItalianSodasModal] = useState(false);
  const [showPreparedDrinksModal, setShowPreparedDrinksModal] = useState(false);
  const [showCocktailsModal, setShowCocktailsModal] = useState(false);
  const [showCafeModal, setShowCafeModal] = useState(false);
  const [showTisanasModal, setShowTisanasModal] = useState(false);
  const [showAperitivosModal, setShowAperitivosModal] = useState(false);
  const [showMojitoFlavorsModal, setShowMojitoFlavorsModal] = useState(false);
  const popoverRef = useRef<HTMLDivElement | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const isInfantil = category.id === 'infantil';

  const modalOpen = enableModal ? (showModal ?? false) : internalShowModal;
  const openModal = () => {
    if (enableModal) return;
    setInternalShowModal(true);
  };
  const closeModal = () => {
    if (enableModal && onClose) onClose();
    else setInternalShowModal(false);
  };

  const openAperitivosModal = () => setShowAperitivosModal(true);
  const closeAperitivosModal = () => setShowAperitivosModal(false);
  const openCocktailsModal = () => setShowCocktailsModal(true);
  const closeCocktailsModal = () => setShowCocktailsModal(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length > 1) return; // Detectar zoom y no iniciar swipe
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (e.changedTouches.length > 1) return; // Detectar zoom y no finalizar swipe
    touchEndX.current = e.changedTouches[0].clientX;
    if (touchStartX.current !== null && touchEndX.current !== null) {
        const diff = touchEndX.current - touchStartX.current;
        if (diff > 150 && onPrev) { // Aumentar la distancia mínima de deslizamiento
            onPrev();
        } else if (diff < -150 && onNext) { // Aumentar la distancia mínima de deslizamiento
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

  const { language } = useContext(LanguageContext) as { language: 'es' | 'en' };
  const t = uiTranslations;
  const translated = productTranslations[product.id]?.[language as 'es' | 'en'];
  let productName = productTranslations[product.id]?.[language]?.name || product.name;
  let productDescription = productTranslations[product.id]?.[language]?.description || product.description;
  const productPrices = translated?.prices || product.prices;

  if (product.id === 'agua-ciel') {
    productName = productTranslations['agua-ciel'][language].name;
    productDescription = productTranslations['agua-ciel'][language].description;
  }

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

  const boingDescription = language === 'es' ?
    "Bebidas Boing de 355 ml en distintos sabores, elaboradas con fruta natural. Refrescantes y perfectas para cualquier momento."
    :
    "Boing drinks of 355ml in different flavors, made with natural fruit. Refreshing and perfect for any moment.";

  const preparedDrinksList = preparedDrinksTranslations[language];

  const preparedDrinksTitle = language === 'es' ? 'Bebidas preparadas' : 'Prepared drinks';

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
            color: isInfantil ? (document.body.classList.contains('dark-mode') ? '#40c4ff' : '#a084ee') : undefined,
            backgroundColor: '#f0f0f00',
            padding: '5px',
            borderRadius: '5px'
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
                <h4 style={titleStyle}>{productName}</h4>
                {isInfantil ? (
                  <p className="mb-4" style={{ color: document.body.classList.contains('dark-mode') ? '#ffd740' : '#7c4dff', fontWeight: 700, fontSize: '1.01em' }}>{productDescription}</p>
                ) : (
                  <p className="text-muted mb-4">{productDescription}</p>
                )}
                {product.id === 'a1' && (
                  <div style={{ marginTop: '10px', marginBottom: '10px' }}>
                    <button onClick={openAperitivosModal} style={{
                      padding: '5px 10px',
                      backgroundColor: '#ff9500',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer',
                      width: 'fit-content'
                    }}>
                      Ver aperitivos
                    </button>
                  </div>
                )}
                {product.id === 'a2' && (
                  <div style={{ marginTop: '10px', marginBottom: '10px' }}>
                    <button onClick={openCocktailsModal} style={{
                      padding: '5px 10px',
                      backgroundColor: '#ff9500',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer',
                      width: 'fit-content'
                    }}>
                      Ver cocteles
                    </button>
                  </div>
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
                        {product.id && product.id.startsWith('bd') && option.label.includes('2') && (
                          <span style={{ position: 'relative', display: 'inline-block' }}>
                            <span
                              style={{ cursor: 'pointer', marginLeft: 6, fontSize: 18, verticalAlign: 'middle' }}
                              onClick={() => setShowFriesInfo((prev) => !prev)}
                              title="¿Qué incluye?"
                            >🍟</span>
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
                  <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                    <button
                      className="btn btn-primary"
                      onClick={() => setShowBeverageModal(true)}
                      style={{
                        padding: '8px 16px',
                        backgroundColor: '#ff9800',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        minWidth: '120px'
                      }}
                    >
                      {language === 'es' ? 'Ver refrescos' : 'See sodas'}
                    </button>
                  </div>
                )}
                {showBeverageModal && product.id === 'bebida-1' && (
                  <Modal show={showBeverageModal} onHide={() => setShowBeverageModal(false)} centered>
                    <Modal.Header closeButton style={{ backgroundColor: '#1e1e1e', color: '#ff9800', borderBottom: '1px solid #ff9800' }}>
                      <Modal.Title style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Refrescos</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ backgroundColor: '#2c2c2c', color: '#fff', padding: '20px' }}>
                      <ul style={{ listStyleType: 'none', padding: 0 }}>
                        {beverageList.map((beverage, index) => (
                          <li key={index} style={{ marginBottom: '10px', fontSize: '1.2rem' }}>{beverage}</li>
                        ))}
                      </ul>
                    </Modal.Body>
                    <Modal.Footer style={{ backgroundColor: '#1e1e1e', borderTop: '1px solid #ff9800' }}>
                      <button className="btn btn-secondary" onClick={() => setShowBeverageModal(false)} style={{ backgroundColor: '#ff9800', color: '#fff', fontWeight: 'bold' }}>
                        Cerrar
                      </button>
                    </Modal.Footer>
                  </Modal>
                )}
                {product.id === 'bebida-4' && (
                  <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                    <button
                      className="btn btn-primary"
                      onClick={() => setShowPreparedDrinksModal(true)}
                      style={{
                        padding: '8px 16px',
                        backgroundColor: '#ff9800',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        minWidth: '120px'
                      }}
                    >
                      {language === 'es' ? 'Ver bebidas' : 'See drinks'}
                    </button>
                  </div>
                )}
                {product.id === 'a4' && (
                  <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                    <button
                      className="btn btn-primary"
                      onClick={() => setShowMojitoFlavorsModal(true)}
                      style={{
                        padding: '8px 16px',
                        backgroundColor: '#ff9800',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        minWidth: '120px'
                      }}
                    >
                      {language === 'es' ? 'Ver sabores' : 'See flavors'}
                    </button>
                  </div>
                )}
                {showPreparedDrinksModal && product.id === 'bebida-4' && (
                  <Modal show={showPreparedDrinksModal} onHide={() => setShowPreparedDrinksModal(false)} centered>
                    <Modal.Header closeButton style={{ backgroundColor: '#1e1e1e', color: '#ff9800', borderBottom: '1px solid #ff9800' }}>
                      <Modal.Title style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>{preparedDrinksTitle}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ backgroundColor: '#2c2c2c', color: '#fff', padding: '20px' }}>
                      <ul style={{ listStyleType: 'none', padding: 0 }}>
                        {preparedDrinksList.map((drink, index) => (
                          <li key={index} style={{ marginBottom: '10px', fontSize: '1.2rem' }}>{drink}</li>
                        ))}
                      </ul>
                    </Modal.Body>
                    <Modal.Footer style={{ 
                      backgroundColor: '#1e1e1e', 
                      borderTop: '1px solid #ff9800',
                      padding: '10px'
                    }}>
                      <button 
                        onClick={() => setShowPreparedDrinksModal(false)} 
                        style={{
                          padding: '8px 16px',
                          backgroundColor: '#ff9800',
                          color: '#fff',
                          border: 'none',
                          borderRadius: '5px',
                          cursor: 'pointer',
                          marginLeft: 'auto',
                          fontWeight: 'bold'
                        }}
                      >
                        Cerrar
                      </button>
                    </Modal.Footer>
                  </Modal>
                )}
                {product.id === 'bebida-2' && (
                  <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                    <button
                      onClick={() => setShowBoingModal(true)}
                      style={{
                        background: '#ff9800',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '5px',
                        padding: '8px 16px',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        minWidth: '120px'
                      }}
                    >
                      {language === 'es' ? 'Ver sabores' : 'See flavors'}
                    </button>
                  </div>
                )}
                {showBoingModal && product.id === 'bebida-2' && (
                  <Modal show={showBoingModal} onHide={() => setShowBoingModal(false)} centered>
                    <Modal.Header closeButton style={{ backgroundColor: '#1e1e1e', color: '#ff9800', borderBottom: '1px solid #ff9800' }}>
                      <Modal.Title style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Boing</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ backgroundColor: '#2c2c2c', color: '#fff', padding: '20px' }}>
                      <ul style={{ listStyleType: 'none', padding: 0 }}>
                        {boingFlavors.map((flavor, index) => (
                          <li key={index} style={{ marginBottom: '10px', fontSize: '1.2rem' }}>{flavor}</li>
                        ))}
                      </ul>
                    </Modal.Body>
                    <Modal.Footer style={{ 
                      backgroundColor: '#1e1e1e', 
                      borderTop: '1px solid #ff9800',
                      padding: '10px'
                    }}>
                      <button 
                        onClick={() => setShowBoingModal(false)} 
                        style={{
                          padding: '8px 16px',
                          backgroundColor: '#ff9800',
                          color: '#fff',
                          border: 'none',
                          borderRadius: '5px',
                          cursor: 'pointer',
                          marginLeft: 'auto',
                          fontWeight: 'bold'
                        }}
                      >
                        Cerrar
                      </button>
                    </Modal.Footer>
                  </Modal>
                )}
                {product.id === 'bebida-6' && (
                  <div style={{ marginBottom: '20px' }}>
                    <button
                      className="btn btn-primary"
                      onClick={() => setShowItalianSodasModal(true)}
                      style={{
                        padding: '10px 20px',
                        fontSize: '1.05rem',
                        minWidth: '140px'
                      }}
                    >
                      Ver Sabores
                    </button>
                  </div>
                )}
                {product.id === 'bebida-8' && (
                  <div style={{ marginBottom: '20px' }}>
                    <button onClick={() => setShowCafeModal(true)} style={{
                      padding: '10px 20px',
                      backgroundColor: '#ff9800',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer',
                      fontSize: '1.05rem',
                      minWidth: '140px'
                    }}>
                      Ver más
                    </button>
                  </div>
                )}
                {product.id === 'a11' && (
                  <div style={{ marginBottom: '20px' }}>
                    <button onClick={() => setShowCocktailColorsModal(true)} style={{
                      padding: '10px 20px',
                      backgroundColor: '#ff9800',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer',
                      fontSize: '1.05rem',
                      minWidth: '140px'
                    }}>
                      Ver colores
                    </button>
                  </div>
                )}
                {showCocktailColorsModal && product.id === 'a11' && (
                  <Modal show={showCocktailColorsModal} onHide={() => setShowCocktailColorsModal(false)} centered>
                    <Modal.Header closeButton style={{ backgroundColor: '#1e1e1e', color: '#ff9800', borderBottom: '1px solid #ff9800' }}>
                      <Modal.Title style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Colores de Cocktail</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ backgroundColor: '#2c2c2c', color: '#fff', padding: '20px' }}>
                      <ul style={{ listStyleType: 'none', padding: 0 }}>
                        {['AZULITO VODKA',
                          'ROJO VODKA DE FRUTOS ROJOS',
                          'MORADO VODKA Y JUGO DE UVA',
                          'AMARILLO BACARDÍ MANGO CHILE',
                          'ROSA BACARDÍ RASPBERRY',
                          'VERDE BACARDÍ LIMÓN',
                          'BUBBALOO XTREME DE UVA, VODKA Y CHICLES'].map((color, index) => (
                            <li key={index} style={{ marginBottom: '10px', fontSize: '1.2rem' }}>
                              <span style={{ color: pastelColors[index % pastelColors.length], fontWeight: 'bold' }}>{color}</span>
                            </li>
                          ))}
                      </ul>
                    </Modal.Body>
                    <Modal.Footer style={{ 
                      backgroundColor: '#1e1e1e', 
                      borderTop: '1px solid #ff9800',
                      padding: '10px'
                    }}>
                      <button 
                        onClick={() => setShowCocktailColorsModal(false)} 
                        style={{
                          padding: '8px 16px',
                          backgroundColor: '#ff9800',
                          color: '#fff',
                          border: 'none',
                          borderRadius: '5px',
                          cursor: 'pointer',
                          marginLeft: 'auto',
                          fontWeight: 'bold'
                        }}
                      >
                        Cerrar
                      </button>
                    </Modal.Footer>
                  </Modal>
                )}
                {product.id === 'bebida-9' && (
                  <div style={{ marginBottom: '20px' }}>
                    <button onClick={() => setShowTisanasModal(true)} style={{
                      padding: '10px 20px',
                      backgroundColor: '#ff9800',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer',
                      fontSize: '1.05rem',
                      minWidth: '140px'
                    }}>
                      Ver Sabores
                    </button>
                  </div>
                )}
                {product.id === 'a15' && (
                  <div style={{ marginBottom: '20px' }}>
                    <button onClick={() => setShowDigestivosModal(true)} style={{
                      padding: '10px 20px',
                      backgroundColor: '#ff9800',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer',
                      fontSize: '1.05rem',
                      minWidth: '140px'
                    }}>
                      Ver digestivos
                    </button>
                  </div>
                )}
                {showDigestivosModal && product.id === 'a15' && (
                  <Modal show={showDigestivosModal} onHide={() => setShowDigestivosModal(false)} centered>
                    <Modal.Header closeButton style={{ backgroundColor: '#1e1e1e', color: '#ff9800', borderBottom: '1px solid #ff9800' }}>
                      <Modal.Title style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Digestivos</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ backgroundColor: '#2c2c2c', color: '#fff', padding: '20px' }}>
                      <ul style={{ listStyleType: 'none', padding: 0 }}>
                        {['WHISKY',
                          'TEQUILA',
                          'RON',
                          'VODKA',
                          'MEZCAL',
                          'BRANDY',
                          'MIDORI',
                          'LICOR 43',
                          'FRANGELICO'].map((digestivo, index) => {
                            const prices: Record<string, number> = {
                              'WHISKY': 155,
                              'TEQUILA': 155,
                              'RON': 155,
                              'VODKA': 155,
                              'MEZCAL': 155,
                              'BRANDY': 155,
                              'MIDORI': 120,
                              'LICOR 43': 120,
                              'FRANGELICO': 120
                            };
                            return (
                              <li key={index} style={{ marginBottom: '10px', fontSize: '1.2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                {alternateColors(digestivo, index)}
                                <span style={{ color: '#ffd740', fontWeight: 'bold' }}>${prices[digestivo]}</span>
                              </li>
                            );
                          })}
                      </ul>
                    </Modal.Body>
                    <Modal.Footer style={{ 
                      backgroundColor: '#1e1e1e', 
                      borderTop: '1px solid #ff9800',
                      padding: '10px'
                    }}>
                      <button 
                        onClick={() => setShowDigestivosModal(false)} 
                        style={{
                          padding: '8px 16px',
                          backgroundColor: '#ff9800',
                          color: '#fff',
                          border: 'none',
                          borderRadius: '5px',
                          cursor: 'pointer',
                          marginLeft: 'auto',
                          fontWeight: 'bold'
                        }}
                      >
                        Cerrar
                      </button>
                    </Modal.Footer>
                  </Modal>
                )}
                {product.id === 'malteada-1' && (
                  <div style={{ marginBottom: '20px' }}>
                    <button onClick={() => setShowMalteadasModal(true)} style={{
                      padding: '10px 20px',
                      backgroundColor: '#ff9800',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer',
                      fontSize: '1.05rem',
                      minWidth: '140px'
                    }}>
                      Ver sabores
                    </button>
                  </div>
                )}
                {showMalteadasModal && product.id === 'malteada-1' && (
                  <MalteadasModal isOpen={showMalteadasModal} onClose={() => setShowMalteadasModal(false)} />
                )}
                <button
                  className="btn btn-primary w-100"
                  onClick={closeModal}
                  style={{
                    marginTop: '20px',
                    background: 'var(--primary-orange)',
                    border: 'none',
                    fontWeight: 700,
                    fontSize: '1.05rem',
                    borderRadius: 10,
                    padding: '8px 0'
                  }}
                >
                  {t.close[language]}
                </button>
              </div>
            </div>
          </Modal.Body>
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
                <path d="M20 8L12 16L20 24" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
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
                <path d="M12 8L20 16L12 24" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          )}
        </Modal>
      )}

      <Modal show={showCocktailsModal} onHide={closeCocktailsModal} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{product.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CocktailGrid />
        </Modal.Body>
        <Modal.Footer>
          <button onClick={closeCocktailsModal} style={{ padding: '5px 10px', backgroundColor: '#ff9800', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Cerrar</button>
        </Modal.Footer>
      </Modal>

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
          <div style={{ margin: '0 auto 5px auto', maxWidth: 340, textAlign: 'left' }}>
            {product.sauces && product.sauces.map((salsa) => {
              const normalizar = (str: string) => str.toLowerCase().replace(/[^a-záéíóúüñ0-9]/gi, '');
              const claves = Object.keys(sauceTranslations);
              const clave = claves.find(k => normalizar(sauceTranslations[k as keyof typeof sauceTranslations].es) === normalizar(salsa) || normalizar(sauceTranslations[k as keyof typeof sauceTranslations].en) === normalizar(salsa));
              const nombreTraducido = clave ? sauceTranslations[clave as keyof typeof sauceTranslations][language] : salsa;
              let level = 1;
              if (salsa.toLowerCase().includes('hot bbq')) level = 2;
              else if (salsa.toLowerCase().includes('tamarindo')) level = 2;
              else if (salsa.toLowerCase().includes('maggi')) level = 3;
              else if (salsa.toLowerCase().includes('cajún') || salsa.toLowerCase().includes('cajun')) level = 4;
              else if (salsa.toLowerCase().includes('brava')) level = 4;
              else if (salsa.toLowerCase().includes('mango habanero')) level = 5;
              else if (salsa.toLowerCase().includes('requete-macho') || salsa.toLowerCase().includes('super-macho')) level = 5;
              const isRequeteMacho = salsa.toLowerCase().includes('requete-macho') || salsa.toLowerCase().includes('super-macho');
              const spicyColors = [
                'linear-gradient(90deg, #a8e6a8 0%, #d6e6a8 100%)', // nivel 1: verde tenue
                'linear-gradient(90deg, #d6e6a8 0%, #ffe6a8 100%)', // nivel 2: verde-amarillo tenue
                'linear-gradient(90deg, #ffe6a8 0%, #ffd6a8 100%)', // nivel 3: amarillo tenue
                'linear-gradient(90deg, #ffd6a8 0%, #ffb6a8 100%)', // nivel 4: naranja tenue
                'linear-gradient(90deg, #ffb6a8 0%, #ffa8a8 100%)', // nivel 5: rojo tenue
              ];
              const rowBg = spicyColors[level - 1];
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
                    <div style={{ width: 10, height: 32, background: '#fffbe6', borderRadius: 6, overflow: 'hidden', boxShadow: '0 1px 4px #ff980055', border: '1px solid #ffd740', position: 'relative', marginBottom: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                      <div style={{
                        width: '100%',
                        height: `${level * 20}%`,
                        borderRadius: 6,
                        background: spicyColors[level - 1],
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
                    <span style={{ fontSize: '0.8em', color: level >= 4 ? '#ff1744' : '#ff9800', fontWeight: 600, letterSpacing: '0.01em' }}>{uiTranslations.spicyLevels[language][level - 1]}</span>
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

      <Modal show={showItalianSodasModal} onHide={() => setShowItalianSodasModal(false)} centered size="lg">
        <Modal.Header closeButton style={{ backgroundColor: '#1e1e1e', color: '#ff9800', borderBottom: '1px solid #ff9800' }}>
          <Modal.Title style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Sodas Italianas</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: '#2c2c2c', color: '#fff', padding: '20px' }}>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li style={{ marginBottom: '15px', fontSize: '1.3rem' }}>
              <span>Limonada de Fresa Salvaje con Perlas Explosivas</span>
              <hr style={{ margin: '12px 0', borderTop: '1px solid #ff9800' }} />
            </li>
            <li style={{ marginBottom: '15px', fontSize: '1.3rem' }}>
              <span>Limonada de Mora Azul con Perlas Explosivas</span>
              <hr style={{ margin: '12px 0', borderTop: '1px solid #ff9800' }} />
            </li>
          </ul>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: '#1e1e1e', borderTop: '1px solid #ff9800' }}>
          {product.id === 'a1' && (
            <button onClick={openAperitivosModal} style={{ 
              padding: '8px 16px', 
              backgroundColor: '#ff9800', 
              color: '#fff', 
              border: 'none', 
              borderRadius: '5px', 
              cursor: 'pointer', 
              marginRight: '12px',
              fontWeight: 'bold'
            }}>
              Ver aperitivos
            </button>
          )}
          <button onClick={() => setShowItalianSodasModal(false)} style={{ 
            padding: '8px 16px', 
            backgroundColor: '#ff9800', 
            color: '#fff', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer',
            fontWeight: 'bold'
          }}>
            Cerrar
          </button>
        </Modal.Footer>
      </Modal>

      <Modal show={showCafeModal} onHide={() => setShowCafeModal(false)} centered size="lg">
        <Modal.Header closeButton style={{ backgroundColor: '#1e1e1e', color: '#ff9800', borderBottom: '1px solid #ff9800' }}>
          <Modal.Title style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>{product.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: '#2c2c2c', color: '#fff', padding: '20px' }}>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li style={{ marginBottom: '10px', fontSize: '1.2rem' }}>
              Café Americano
              <span style={{ fontSize: '1.3rem', color: '#ff9800', float: 'right' }}>$50</span>
              <hr style={{ margin: '10px 0', borderTop: '1px solid #ff9800' }} />
            </li>
            <li style={{ marginBottom: '10px', fontSize: '1.2rem' }}>
              Con leche
              <span style={{ fontSize: '1.3rem', color: '#ff9800', float: 'right' }}>$55</span>
              <hr style={{ margin: '10px 0', borderTop: '1px solid #ff9800' }} />
            </li>
            <li style={{ marginBottom: '10px', fontSize: '1.2rem' }}>
              Capuchino
              <span style={{ fontSize: '1.3rem', color: '#ff9800', float: 'right' }}>$65</span>
              <hr style={{ margin: '10px 0', borderTop: '1px solid #ff9800' }} />
            </li>
            <li style={{ marginBottom: '10px', fontSize: '1.2rem' }}>
              Capuchino Vainilla
              <span style={{ fontSize: '1.3rem', color: '#ff9800', float: 'right' }}>$70</span>
              <hr style={{ margin: '10px 0', borderTop: '1px solid #ff9800' }} />
            </li>
            <li style={{ marginBottom: '10px', fontSize: '1.2rem' }}>
              Capuchino Caramel
              <span style={{ fontSize: '1.3rem', color: '#ff9800', float: 'right' }}>$70</span>
              <hr style={{ margin: '10px 0', borderTop: '1px solid #ff9800' }} />
            </li>
            <li style={{ marginBottom: '10px', fontSize: '1.2rem' }}>
              Con Licor de Café Kahlúa
              <span style={{ fontSize: '1.3rem', color: '#ff9800', float: 'right' }}>$+ 15</span>
              <hr style={{ margin: '10px 0', borderTop: '1px solid #ff9800' }} />
            </li>
            <li style={{ marginBottom: '10px', fontSize: '1.2rem' }}>
              Expreso Sencillo
              <span style={{ fontSize: '1.3rem', color: '#ff9800', float: 'right' }}>$55</span>
              <hr style={{ margin: '10px 0', borderTop: '1px solid #ff9800' }} />
            </li>
            <li style={{ marginBottom: '10px', fontSize: '1.2rem' }}>
              Expreso Doble
              <span style={{ fontSize: '1.3rem', color: '#ff9800', float: 'right' }}>$70</span>
              <hr style={{ margin: '10px 0', borderTop: '1px solid #ff9800' }} />
            </li>
            <li style={{ marginBottom: '10px', fontSize: '1.2rem' }}>
              Expreso Doble Cortado
              <span style={{ fontSize: '1.3rem', color: '#ff9800', float: 'right' }}>$75</span>
              <hr style={{ margin: '10px 0', borderTop: '1px solid #ff9800' }} />
            </li>
          </ul>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: '#1e1e1e', borderTop: '1px solid #ff9800' }}>
          {product.id === 'a1' && (
            <button onClick={openAperitivosModal} style={{ 
              padding: '8px 16px', 
              backgroundColor: '#ff9800', 
              color: '#fff', 
              border: 'none', 
              borderRadius: '5px', 
              cursor: 'pointer', 
              marginRight: '12px',
              fontWeight: 'bold'
            }}>
              Ver aperitivos
            </button>
          )}
          <button onClick={() => setShowCafeModal(false)} style={{ 
            padding: '8px 16px', 
            backgroundColor: '#ff9800', 
            color: '#fff', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer',
            fontWeight: 'bold'
          }}>
            Cerrar
          </button>
        </Modal.Footer>
      </Modal>

      {/* Modal de sabores de tisanas */}
      <Modal show={showTisanasModal} onHide={() => setShowTisanasModal(false)} centered size="lg">
        <Modal.Header closeButton style={{ backgroundColor: '#1e1e1e', color: '#ff9800', borderBottom: '1px solid #ff9800' }}>
          <Modal.Title style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>{product.name} - Sabores</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: '#2c2c2c', color: '#fff', padding: '20px' }}>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {product.flavors?.map((flavor, index) => (
              <li key={index} style={{ marginBottom: '15px', fontSize: '1.3rem' }}>
                {flavor}
                <hr style={{ margin: '12px 0', borderTop: '1px solid #ff9800' }} />
              </li>
            ))}
          </ul>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: '#1e1e1e', borderTop: '1px solid #ff9800' }}>
          {product.id === 'a1' && (
            <button onClick={openAperitivosModal} style={{ 
              padding: '8px 16px', 
              backgroundColor: '#ff9800', 
              color: '#fff', 
              border: 'none', 
              borderRadius: '5px', 
              cursor: 'pointer', 
              marginRight: '12px',
              fontWeight: 'bold'
            }}>
              Ver aperitivos
            </button>
          )}
          <button onClick={() => setShowTisanasModal(false)} style={{ 
            padding: '8px 16px', 
            backgroundColor: '#ff9800', 
            color: '#fff', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer',
            fontWeight: 'bold'
          }}>
            Cerrar
          </button>
        </Modal.Footer>
      </Modal>

      {/* Modal de refrescos */}
      <Modal show={showBeverageModal} onHide={() => setShowBeverageModal(false)} centered size="lg">
        <Modal.Header closeButton style={{ backgroundColor: '#1e1e1e', color: '#ff9800', borderBottom: '1px solid #ff9800' }}>
          <Modal.Title style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Refrescos</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: '#2c2c2c', color: '#fff', padding: '20px' }}>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {beverageList.map((beverage, index) => (
              <li key={index} style={{ marginBottom: '15px', fontSize: '1.3rem' }}>
                <span>{beverage}</span>
                <hr style={{ margin: '12px 0', borderTop: '1px solid #ff9800' }} />
              </li>
            ))}
          </ul>
        </Modal.Body>
        <Modal.Footer style={{ 
          backgroundColor: '#1e1e1e', 
          borderTop: '1px solid #ff9800',
          padding: '10px'
        }}>
          {product.id === 'a1' && (
            <button onClick={openAperitivosModal} style={{ 
              padding: '8px 16px', 
              backgroundColor: '#ff9800', 
              color: '#fff', 
              border: 'none', 
              borderRadius: '5px', 
              cursor: 'pointer', 
              marginLeft: 'auto',
              marginRight: '20px',
              fontWeight: 'bold'
            }}>
              Ver aperitivos
            </button>
          )}
          <button onClick={() => setShowBeverageModal(false)} style={{ 
            padding: '8px 16px', 
            backgroundColor: '#ff9800', 
            color: '#fff', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer',
            marginLeft: 'auto',
            fontWeight: 'bold'
          }}>
            Cerrar
          </button>
        </Modal.Footer>
      </Modal>

      {/* Modal de Boing */}
      <Modal show={showBoingModal} onHide={() => setShowBoingModal(false)} centered size="lg">
        <Modal.Header closeButton style={{ backgroundColor: '#1e1e1e', color: '#ff9800', borderBottom: '1px solid #ff9800' }}>
          <Modal.Title style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Sabores Boing</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: '#2c2c2c', color: '#fff', padding: '20px' }}>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {product.prices.map((price, index) => (
              <li key={index} style={{ 
                marginBottom: '10px',
                fontSize: '1.2rem'
              }}>
                {product.name}
                <span style={{ 
                  fontSize: '1.3rem',
                  color: '#ff9800',
                  float: 'right'
                }}>${price.value}</span>
                <hr style={{ margin: '10px 0', borderTop: '1px solid #ff9800' }} />
              </li>
            ))}
          </ul>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: '#1e1e1e', borderTop: '1px solid #ff9800' }}>
          {product.id === 'a1' && (
            <button onClick={openAperitivosModal} style={{ 
              padding: '8px 16px', 
              backgroundColor: '#ff9800', 
              color: '#fff', 
              border: 'none', 
              borderRadius: '5px', 
              cursor: 'pointer', 
              marginRight: '12px',
              fontWeight: 'bold'
            }}>
              Ver aperitivos
            </button>
          )}
          <button onClick={() => setShowBoingModal(false)} style={{ 
            padding: '8px 16px', 
            backgroundColor: '#ff9800', 
            color: '#fff', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer',
            fontWeight: 'bold'
          }}>
            Cerrar
          </button>
        </Modal.Footer>
      </Modal>

      {/* Modal de bebidas preparadas */}
      <Modal show={showPreparedDrinksModal} onHide={() => setShowPreparedDrinksModal(false)} centered size="lg">
        <Modal.Header closeButton style={{ backgroundColor: '#1e1e1e', color: '#ff9800', borderBottom: '1px solid #ff9800' }}>
          <Modal.Title style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>{preparedDrinksTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: '#2c2c2c', color: '#fff', padding: '20px' }}>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {preparedDrinksList.map((drink, index) => (
              <li key={index} style={{ marginBottom: '15px', fontSize: '1.3rem' }}>
                <span>{drink}</span>
                <hr style={{ margin: '12px 0', borderTop: '1px solid #ff9800' }} />
              </li>
            ))}
          </ul>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: '#1e1e1e', borderTop: '1px solid #ff9800' }}>
          {product.id === 'a1' && (
            <button onClick={openAperitivosModal} style={{ 
              padding: '8px 16px', 
              backgroundColor: '#ff9800', 
              color: '#fff', 
              border: 'none', 
              borderRadius: '5px', 
              cursor: 'pointer', 
              marginRight: '12px',
              fontWeight: 'bold'
            }}>
              Ver aperitivos
            </button>
          )}
          <button onClick={() => setShowPreparedDrinksModal(false)} style={{ 
            padding: '8px 16px', 
            backgroundColor: '#ff9800', 
            color: '#fff', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer',
            fontWeight: 'bold'
          }}>
            Cerrar
          </button>
        </Modal.Footer>
      </Modal>

      {/* Modal de opciones de aperitivos */}
      <Modal show={showAperitivosModal} onHide={closeAperitivosModal} centered size="lg">
        <Modal.Header closeButton style={{ backgroundColor: '#1e1e1e', color: '#ff9800', borderBottom: '1px solid #ff9800' }}>
          <Modal.Title style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>{product.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: '#2c2c2c', color: '#fff', padding: '20px' }}>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li style={{ marginBottom: '10px', fontSize: '1.2rem' }}>
              Aperol
              <span style={{ fontSize: '1.3rem', color: '#ff9800', float: 'right' }}>$140</span>
              <hr style={{ margin: '10px 0', borderTop: '1px solid #ff9800' }} />
            </li>
            <li style={{ marginBottom: '10px', fontSize: '1.2rem' }}>
              Campari
              <span style={{ fontSize: '1.3rem', color: '#ff9800', float: 'right' }}>$140</span>
              <hr style={{ margin: '10px 0', borderTop: '1px solid #ff9800' }} />
            </li>
            <li style={{ marginBottom: '10px', fontSize: '1.2rem' }}>
              Anís Pernod
              <span style={{ fontSize: '1.3rem', color: '#ff9800', float: 'right' }}>$120</span>
              <hr style={{ margin: '10px 0', borderTop: '1px solid #ff9800' }} />
            </li>
            <li style={{ marginBottom: '10px', fontSize: '1.2rem' }}>
              Jagermeister
              <span style={{ fontSize: '1.3rem', color: '#ff9800', float: 'right' }}>$130</span>
              <hr style={{ margin: '10px 0', borderTop: '1px solid #ff9800' }} />
            </li>
            <li style={{ marginBottom: '10px', fontSize: '1.2rem' }}>
              Agavero
              <span style={{ fontSize: '1.3rem', color: '#ff9800', float: 'right' }}>$115</span>
              <hr style={{ margin: '10px 0', borderTop: '1px solid #ff9800' }} />
            </li>
          </ul>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: '#1e1e1e', borderTop: '1px solid #ff9800' }}>
          <button className="btn btn-secondary" onClick={closeAperitivosModal} style={{ backgroundColor: '#ff9800', color: '#fff', fontWeight: 'bold' }}>
            Cerrar
          </button>
        </Modal.Footer>
      </Modal>

      {/* Modal de sabores de mojitos */}
      <Modal show={showMojitoFlavorsModal} onHide={() => setShowMojitoFlavorsModal(false)} centered size="lg">
        <Modal.Header closeButton style={{ backgroundColor: '#1e1e1e', color: '#ff9800', borderBottom: '1px solid #ff9800' }}>
          <Modal.Title style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Sabores de Mojitos</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: '#2c2c2c', color: '#fff', padding: '20px' }}>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li style={{ marginBottom: '15px', fontSize: '1.3rem' }}>
              <span>Original</span>
              <hr style={{ margin: '12px 0', borderTop: '1px solid #ff9800' }} />
            </li>
            <li style={{ marginBottom: '15px', fontSize: '1.3rem' }}>
              <span>Piña</span>
              <hr style={{ margin: '12px 0', borderTop: '1px solid #ff9800' }} />
            </li>
            <li style={{ marginBottom: '15px', fontSize: '1.3rem' }}>
              <span>Guayaba</span>
              <hr style={{ margin: '12px 0', borderTop: '1px solid #ff9800' }} />
            </li>
            <li style={{ marginBottom: '15px', fontSize: '1.3rem' }}>
              <span>Maracuyá</span>
              <hr style={{ margin: '12px 0', borderTop: '1px solid #ff9800' }} />
            </li>
            <li style={{ marginBottom: '15px', fontSize: '1.3rem' }}>
              <span>Lichi</span>
              <hr style={{ margin: '12px 0', borderTop: '1px solid #ff9800' }} />
            </li>
            <li style={{ marginBottom: '15px', fontSize: '1.3rem' }}>
              <span>Mango</span>
              <hr style={{ margin: '12px 0', borderTop: '1px solid #ff9800' }} />
            </li>
            <li style={{ marginBottom: '15px', fontSize: '1.3rem' }}>
              <span>Fresa</span>
              <hr style={{ margin: '12px 0', borderTop: '1px solid #ff9800' }} />
            </li>
            <li style={{ marginBottom: '15px', fontSize: '1.3rem' }}>
              <span>Tamarindo</span>
              <hr style={{ margin: '12px 0', borderTop: '1px solid #ff9800' }} />
            </li>
            <li style={{ marginBottom: '15px', fontSize: '1.3rem' }}>
              <span>Guanábana</span>
              <hr style={{ margin: '12px 0', borderTop: '1px solid #ff9800' }} />
            </li>
            <li style={{ marginBottom: '15px', fontSize: '1.3rem' }}>
              <span>Frutos Rojos</span>
              <hr style={{ margin: '12px 0', borderTop: '1px solid #ff9800' }} />
            </li>
            <li style={{ marginBottom: '15px', fontSize: '1.3rem' }}>
              <span>Jamaica</span>
              <hr style={{ margin: '12px 0', borderTop: '1px solid #ff9800' }} />
            </li>
            <li style={{ marginBottom: '15px', fontSize: '1.3rem' }}>
              <span>Coco</span>
              <hr style={{ margin: '12px 0', borderTop: '1px solid #ff9800' }} />
            </li>
            <li style={{ marginBottom: '15px', fontSize: '1.3rem' }}>
              <span>Yakult</span>
              <hr style={{ margin: '12px 0', borderTop: '1px solid #ff9800' }} />
            </li>
            <li style={{ marginBottom: '15px', fontSize: '1.3rem' }}>
              <span>Sandía</span>
              <hr style={{ margin: '12px 0', borderTop: '1px solid #ff9800' }} />
            </li>
            <li style={{ marginBottom: '15px', fontSize: '1.3rem' }}>
              <span>Cereza</span>
              <hr style={{ margin: '12px 0', borderTop: '1px solid #ff9800' }} />
            </li>
            <li style={{ marginBottom: '15px', fontSize: '1.3rem' }}>
              <span>Grosella</span>
              <hr style={{ margin: '12px 0', borderTop: '1px solid #ff9800' }} />
            </li>
            <li style={{ marginBottom: '15px', fontSize: '1.3rem' }}>
              <span>Granada</span>
              <hr style={{ margin: '12px 0', borderTop: '1px solid #ff9800' }} />
            </li>
          </ul>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: '#1e1e1e', borderTop: '1px solid #ff9800' }}>
          <button onClick={() => setShowMojitoFlavorsModal(false)} style={{ 
            padding: '8px 16px', 
            backgroundColor: '#ff9800', 
            color: '#fff', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer',
            fontWeight: 'bold'
          }}>
            Cerrar
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProductCard;