import React, { useState, useEffect, createContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import CategoryNav from './components/CategoryNav';
import MenuSection from './components/MenuSection';
import FloatingButtons from './components/FloatingButtons';
import RatingModal from './components/RatingModal';
import PaymentModal from './components/PaymentModal';
import InvoiceModal from './components/InvoiceModal';
import HamburgerMenu from './components/HamburgerMenu';
import { menuCategories } from './data/menuData';

// Asegurar que la exportación de LanguageContext sea consistente.

export const LanguageContext = createContext({
  language: 'es',
  toggleLanguage: () => {},
});

function App() {
  const [activeCategory, setActiveCategory] = useState('favoritos');
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showInvoiceModal, setShowInvoiceModal] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'es';
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

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const newLang = prev === 'es' ? 'en' : 'es';
      // console.log('Cambiando idioma a:', newLang);
      localStorage.setItem('language', newLang);
      return newLang;
    });
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      <div
        className="min-h-screen"
        style={{
          background: 'var(--background-main)',
          color: 'var(--text-main)',
          minHeight: '100vh',
        }}
      >
        <Header setDarkMode={setDarkMode} darkMode={darkMode} />
        <HamburgerMenu setDarkMode={setDarkMode} darkMode={darkMode} />
        
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
          setDarkMode={setDarkMode}
          darkMode={darkMode}
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
    </LanguageContext.Provider>
  );
}

export default App;