import React, { useState, useContext } from 'react';
import { LanguageContext } from '../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

const HamburgerMenu = ({ setDarkMode, darkMode }: { setDarkMode: (fn: (prev: boolean) => boolean) => void, darkMode: boolean }) => {
  const [open, setOpen] = useState(false);
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <>
      {/* Botón hamburguesa */}
      <button
        onClick={() => setOpen(true)}
        style={{
          position: 'fixed',
          top: 18,
          right: 18,
          zIndex: 1000,
          background: darkMode ? 'rgba(30,30,30,0.85)' : 'rgba(255,255,255,0.85)',
          border: 'none',
          borderRadius: 12,
          width: 48,
          height: 48,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 24,
          color: darkMode ? '#ffd740' : '#333',
          boxShadow: '0 2px 12px 0 rgba(0,0,0,0.18)',
          cursor: 'pointer'
        }}
        aria-label={language === 'es' ? "Abrir menú" : "Open menu"}
      >
        🍔
      </button>

      {/* Menú lateral */}
      {open && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            right: 0,
            width: '100%',
            maxWidth: 320,
            height: 'auto',
            background: darkMode ? 'rgba(30,30,30,0.97)' : 'rgba(255,255,255,0.97)',
            zIndex: 2100,
            boxShadow: '-2px 0 16px 0 rgba(0,0,0,0.18)',
            display: 'flex',
            flexDirection: 'column',
            padding: '32px 18px 18px 18px',
            transition: 'right 0.2s'
          }}
        >
          {/* Botón cerrar */}
          <button
            onClick={() => setOpen(false)}
            style={{
              position: 'absolute',
              top: 12,
              right: 12,
              background: 'none',
              border: 'none',
              color: darkMode ? '#ffd740' : '#333',
              fontSize: 28,
              cursor: 'pointer'
            }}
            aria-label={language === 'es' ? "Cerrar menú" : "Close menu"}
          >
            ×
          </button>

          {/* Logo */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginBottom: 24 }}>
            <img src="/images/izettle.png" alt="Logo" style={{ width: 60, marginBottom: 8 }} />
            <div style={{ color: darkMode ? '#ffd740' : '#333', fontWeight: 700, fontSize: 18, textTransform: 'uppercase' }}>BUBUBURGER</div>
          </div>

          {/* Opciones y Redes sociales */}
          <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, padding: '20px' }}>
            <button
              onClick={() => { setDarkMode((prev) => !prev); }}
              style={{
                background: 'none',
                border: 'none',
                color: darkMode ? '#fff' : '#333',
                fontSize: 20,
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                cursor: 'pointer',
                transition: 'color 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = darkMode ? '#ffd740' : '#555'}
              onMouseLeave={(e) => e.currentTarget.style.color = darkMode ? '#fff' : '#333'}
            >
              {darkMode ? '☀️ Modo claro' : '🌙 Modo oscuro'}
            </button>
            <button
              onClick={() => { toggleLanguage(); }}
              style={{
                background: 'none',
                border: 'none',
                color: darkMode ? '#fff' : '#333',
                fontSize: 20,
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                cursor: 'pointer',
                transition: 'color 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = darkMode ? '#ffd740' : '#555'}
              onMouseLeave={(e) => e.currentTarget.style.color = darkMode ? '#fff' : '#333'}
            >
              🌐 {language === 'es' ? 'English' : 'Español'}
            </button>
            <button
              onClick={() => window.open('https://www.facebook.com/bububurgeralcarbon', '_blank')}
              style={{
                background: 'none',
                border: 'none',
                color: darkMode ? '#fff' : '#333',
                fontSize: 20,
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                cursor: 'pointer',
                transition: 'color 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#555'}
              onMouseLeave={(e) => e.currentTarget.style.color = darkMode ? '#fff' : '#333'}
            >
              <FontAwesomeIcon icon={faFacebookF} /> {language === 'es' ? 'Facebook' : 'Facebook'}
            </button>
            <button
              onClick={() => window.open('https://www.instagram.com/bububurger01', '_blank')}
              style={{
                background: 'none',
                border: 'none',
                color: darkMode ? '#fff' : '#333',
                fontSize: 20,
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                cursor: 'pointer',
                transition: 'color 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#555'}
              onMouseLeave={(e) => e.currentTarget.style.color = darkMode ? '#fff' : '#333'}
            >
              <FontAwesomeIcon icon={faInstagram} /> {language === 'es' ? 'Instagram' : 'Instagram'}
            </button>
            <button
              onClick={() => window.open('https://bubu-proximamente.netlify.app/', '_blank')}
              style={{
                background: 'none',
                border: 'none',
                color: darkMode ? '#fff' : '#333',
                fontSize: 20,
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                cursor: 'pointer',
                transition: 'color 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#555'}
              onMouseLeave={(e) => e.currentTarget.style.color = darkMode ? '#fff' : '#333'}
            >
              🌐 {language === 'es' ? 'Bububur-Web' : 'Bububur-Web'}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default HamburgerMenu; 