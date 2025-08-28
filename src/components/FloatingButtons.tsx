import React, { useState, useEffect, useRef, useContext } from 'react';
import { Star, CreditCard, FileText, ArrowUp, Settings, Moon, Sun, Globe, Users, Briefcase } from 'lucide-react';
import { LanguageContext } from '../App';

let navigate: ((path: string) => void) | null = null;
try {
  // @ts-ignore
  const { useNavigate } = require('react-router-dom');
  // @ts-ignore
  navigate = useNavigate();
} catch {}

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
  const { language, toggleLanguage } = useContext(LanguageContext) as { language: 'es' | 'en', toggleLanguage: () => void };

  const fabStackRef = useRef<HTMLDivElement | null>(null);
  const recruitWrapRef = useRef<HTMLDivElement | null>(null);

  const [showConfig, setShowConfig] = useState(false);
  const [showRecruit, setShowRecruit] = useState(false);
  const [closingRecruit, setClosingRecruit] = useState(false);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const toggleRecruitMini = () => {
    if (showRecruit) {
      setClosingRecruit(true);
      setTimeout(() => { setShowRecruit(false); setClosingRecruit(false); }, 160);
    } else {
      setShowRecruit(true);
    }
  };

  // Click-outside global (cierra mini y config)
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      const t = e.target as Node;

      // recruit
      if (showRecruit && recruitWrapRef.current && !recruitWrapRef.current.contains(t)) {
        setClosingRecruit(true);
        setTimeout(() => { setShowRecruit(false); setClosingRecruit(false); }, 160);
      }

      // config
      const configPanel = document.querySelector('[data-config-panel="true"]');
      const configBtn = document.querySelector('.floating-btn.config');
      const insidePanel = !!(configPanel && configPanel.contains(t));
      const onButton = !!(configBtn && configBtn.contains(t));
      if (showConfig && !insidePanel && !onButton) setShowConfig(false);
    };

    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, [showRecruit, showConfig]);

  return (
    <div className="floating-buttons">
      {/* FAB izquierdo (arriba) */}
      <button
        className="floating-btn scroll-top"
        onClick={scrollToTop}
        title="Volver arriba"
        style={{ left: 20, bottom: 20, position: 'fixed' }}
      >
        <ArrowUp size={24} />
      </button>

      {/* Stack derecho: usar SIEMPRE este único contenedor */}
      <div className="fab-stack-right" ref={fabStackRef}>
        {/* DOM en orden de ARRIBA a ABAJO, porque usamos column-reverse en CSS */}
        {/* 4) Vacantes (nuevo) */}
        <div className="fab-with-mini" ref={recruitWrapRef}>
        <button
  className="floating-btn recruit"
  onClick={() => setShowRecruit(v => !v)}
  title="Únete al equipo"
>
  <Briefcase size={24} />
</button>
          {showRecruit && (
            <button
              id="recruit-mini"
              className={`floating-mini-btn recruit-mini ${closingRecruit ? 'closing' : ''}`}
              onClick={() => { navigate ? navigate('/vacantes') : (window.location.href = '/vacantes'); }}
              title="Únete al equipo"
            >
              Únete al equipo
            </button>
          )}
        </div>

        {/* 3) Métodos de pago */}
        <button className="floating-btn payment" onClick={onPaymentClick} title="Métodos de pago">
          <CreditCard size={24} />
        </button>

        {/* 2) Calificación */}
        <button className="floating-btn rate" onClick={onRateClick} title="Califica tu experiencia">
          <Star size={24} />
        </button>

        {/* 1) Facturas */}
        <button className="floating-btn invoice" onClick={onInvoiceClick} title="Solicitar factura">
          <FileText size={24} />
        </button>
      </div>

      {/* Config */}
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
            data-config-panel="true"
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
