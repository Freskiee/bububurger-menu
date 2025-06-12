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

  return (
    <div className="min-h-screen bg-light">
      <Header />
      
      <CategoryNav 
        activeCategory={activeCategory} 
        onCategoryChange={handleCategoryChange}
      />

      <main className="pb-5">
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
    </div>
  );
}

export default App;