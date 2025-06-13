import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import CategoryNav from './components/CategoryNav';
import MenuSection from './components/MenuSection';
import FloatingButtons from './components/FloatingButtons';
import RatingModal from './components/RatingModal';
import PaymentModal from './components/PaymentModal';
import InvoiceModal from './components/InvoiceModal';
import { menuCategories } from './data/menuData';

function App() {
  const [activeCategory, setActiveCategory] = useState('favoritos');
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showInvoiceModal, setShowInvoiceModal] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    // Scroll suave hacia la sección
    const element = document.getElementById(`section-${categoryId}`);
    if (element) {
      const headerHeight = 120; // Altura aproximada del header + nav
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  // Detectar scroll para cambiar categoría activa
  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = 120;
      const sections = menuCategories.map(cat => ({
        id: cat.id,
        element: document.getElementById(`section-${cat.id}`)
      }));

      const currentSection = sections.find(section => {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          return rect.top <= headerHeight + 50 && rect.bottom >= headerHeight + 50;
        }
        return false;
      });

      if (currentSection && currentSection.id !== activeCategory) {
        setActiveCategory(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeCategory]);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  return (
    <div
      className="min-h-screen"
      style={{
        background: 'var(--background-main)',
        color: 'var(--text-main)',
        minHeight: '100vh',
      }}
    >
      <button
        onClick={() => setDarkMode((prev) => !prev)}
        style={{
          position: 'fixed',
          top: 14,
          right: 14,
          zIndex: 1040,
          background: 'transparent',
          border: 'none',
          borderRadius: '50%',
          width: 36,
          height: 36,
          boxShadow: 'none',
          cursor: 'pointer',
          padding: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        aria-label="Alternar modo oscuro"
        title="Alternar modo oscuro"
      >
        {darkMode ? (
          // Luna SVG
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ffb347" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"/></svg>
        ) : (
          // Sol SVG
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ffb347" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 7.07-1.41-1.41M6.34 6.34 4.93 4.93m12.02 0-1.41 1.41M6.34 17.66l-1.41 1.41"/></svg>
        )}
      </button>
      <Header />
      
      <CategoryNav 
        activeCategory={activeCategory} 
        onCategoryChange={handleCategoryChange}
      />

      <main className="pb-2">
        {menuCategories.map((category) => (
          <div key={category.id} id={`section-${category.id}`}>
            <MenuSection 
              category={category} 
              isFavorites={category.id === 'favoritos'}
            />
          </div>
        ))}
      </main>

      <FloatingButtons
        onRateClick={() => setShowRatingModal(true)}
        onPaymentClick={() => setShowPaymentModal(true)}
        onInvoiceClick={() => setShowInvoiceModal(true)}
      />

      <RatingModal
        show={showRatingModal}
        onHide={() => setShowRatingModal(false)}
      />

      <PaymentModal
        show={showPaymentModal}
        onHide={() => setShowPaymentModal(false)}
      />

      <InvoiceModal
        show={showInvoiceModal}
        onHide={() => setShowInvoiceModal(false)}
      />

      <div className="main-end-gradient" />
    </div>
  );
}

export default App;