import React from 'react';
import { Star, CreditCard, FileText, ArrowUp, Settings, Moon, Sun, Globe } from 'lucide-react';
import { useContext, useState } from 'react';
import { LanguageContext } from '../App';

interface FloatingButtonsProps {
  onRateClick: () => void;
  onPaymentClick: () => void;
  onInvoiceClick: () => void;
  setDarkMode?: (fn: (prev: boolean) => boolean) => void;
  darkMode?: boolean;
}

const FloatingButtons: React.FC<FloatingButtonsProps> = ({ 
  onRateClick, 
  onPaymentClick, 
  onInvoiceClick,
  setDarkMode,
  darkMode
}) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const { language, toggleLanguage } = useContext(LanguageContext) as { language: 'es' | 'en', toggleLanguage: () => void };
  const [showConfig, setShowConfig] = useState(false);

  return (
    <div className="floating-buttons">
      <button
        className="floating-btn scroll-top"
        onClick={scrollToTop}
        title="Volver arriba"
      >
        <ArrowUp size={24} />
      </button>
      <button
        className="floating-btn rate"
        onClick={onRateClick}
        title="Califica tu experiencia"
      >
        <Star size={24} />
      </button>
      
      <button
        className="floating-btn payment"
        onClick={onPaymentClick}
        title="Métodos de pago"
      >
        <CreditCard size={24} />
      </button>

      <button
        className="floating-btn invoice"
        onClick={onInvoiceClick}
        title="Solicitar factura"
      >
        <FileText size={24} />
      </button>
      {/* Botón flotante de configuración */}
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <button
          className="floating-btn config"
          onClick={() => setShowConfig(v => !v)}
          title="Configuración"
          style={{ background: '#23243a', color: '#ffd740', zIndex: 1001 }}
        >
          <Settings size={24} />
        </button>
        {showConfig && (
          <div
            style={{
              position: 'absolute',
              bottom: 60,
              right: 0,
              background: 'rgba(30,30,30,0.97)',
              borderRadius: 16,
              boxShadow: '0 2px 12px 0 rgba(0,0,0,0.18)',
              padding: '10px 12px',
              minWidth: 120,
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
              zIndex: 1002
            }}
          >
            <button
              onClick={() => { toggleLanguage(); setShowConfig(false); }}
              style={{
                background: 'none',
                border: 'none',
                color: '#fff',
                fontSize: 18,
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                cursor: 'pointer',
                borderRadius: 8,
                padding: '6px 8px',
                transition: 'background 0.18s',
              }}
            >
              <Globe size={20} /> {language === 'es' ? 'English' : 'Español'}
            </button>
            {setDarkMode && (
              <button
                onClick={() => { setDarkMode((prev: boolean) => !prev); setShowConfig(false); }}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#fff',
                  fontSize: 18,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  cursor: 'pointer',
                  borderRadius: 8,
                  padding: '6px 8px',
                  transition: 'background 0.18s',
                }}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />} {darkMode ? 'Claro' : 'Oscuro'}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default FloatingButtons;