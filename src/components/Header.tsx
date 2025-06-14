import React, { useContext } from 'react';
import { Clock } from 'lucide-react';
import parrillaImg from '../assets/parrilla.png';
import { LanguageContext } from '../App';
import { uiTranslations } from '../i18n/menu';

const Header: React.FC<{ setDarkMode?: (fn: (prev: boolean) => boolean) => void, darkMode?: boolean }> = ({ setDarkMode, darkMode }) => {
  const { language, toggleLanguage } = useContext(LanguageContext) as { language: 'es' | 'en', toggleLanguage: () => void };
  const t = uiTranslations;
  const isDark = typeof darkMode === 'boolean' ? darkMode : document.body.classList.contains('dark-mode');

  return (
    <div className="header-gradient text-white" style={{
      backgroundImage: `url(${parrillaImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative',
      color: 'var(--text-main)'
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(135deg, rgba(30, 30, 30, 0.82) 0%, rgba(30, 30, 30, 0.65) 100%)',
        zIndex: 1
      }}></div>
      
      {/* Botón de idioma minimalista en la esquina superior izquierda del header */}
      <button
        onClick={toggleLanguage}
        style={{
          position: 'absolute',
          top: 18,
          left: 18,
          zIndex: 10,
          background: isDark ? 'rgba(40,40,40,0.72)' : 'rgba(255,255,255,0.88)',
          border: 'none',
          borderRadius: '50%',
          width: 38,
          height: 38,
          boxShadow: '0 2px 10px 0 rgba(0,0,0,0.13)',
          cursor: 'pointer',
          padding: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'transform 0.18s, box-shadow 0.18s, background 0.18s',
          fontSize: 24,
          outline: 'none',
          backdropFilter: 'blur(2.5px)'
        }}
        aria-label="Cambiar idioma / Change language"
        title="Cambiar idioma / Change language"
        onMouseOver={e => {
          e.currentTarget.style.transform = 'scale(1.13)';
          e.currentTarget.style.boxShadow = '0 0 14px 2px #7c4dff55';
          e.currentTarget.style.background = isDark ? 'rgba(40,40,40,0.92)' : 'rgba(255,255,255,0.98)';
        }}
        onMouseOut={e => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 2px 10px 0 rgba(0,0,0,0.13)';
          e.currentTarget.style.background = isDark ? 'rgba(40,40,40,0.72)' : 'rgba(255,255,255,0.88)';
        }}
      >
        <span role="img" aria-label="Cambiar idioma / Change language" style={{ fontSize: 26, filter: isDark ? 'drop-shadow(0 2px 4px #23243a)' : 'drop-shadow(0 2px 4px #fff)' }}>🌐</span>
      </button>
      
      {/* Botón de dark/light mode en la esquina superior derecha del header */}
      {setDarkMode && (
        <button
          onClick={() => setDarkMode((prev: boolean) => !prev)}
          style={{
            position: 'absolute',
            top: 18,
            right: 18,
            zIndex: 10,
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
            transition: 'transform 0.18s',
            outline: 'none',
          }}
          aria-label="Alternar modo oscuro / Toggle dark mode"
          title="Alternar modo oscuro / Toggle dark mode"
          onMouseOver={e => {
            e.currentTarget.style.transform = 'scale(1.13)';
          }}
          onMouseOut={e => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          {isDark ? (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ffb347" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"/></svg>
          ) : (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ffb347" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 7.07-1.41-1.41M6.34 6.34 4.93 4.93m12.02 0-1.41 1.41M6.34 17.66l-1.41 1.41"/></svg>
          )}
        </button>
      )}
      
      <div className="container-fluid py-4" style={{ position: 'relative', zIndex: 2 }}>
        {/* Logo y título */}
        <div className="text-center mb-3">
          <div className="chef-emoji mb-2 d-flex justify-content-center">
            <img 
              src="/images/izettle.png" 
              alt="Chef" 
              style={{ 
                width: '80px', 
                height: '80px', 
                objectFit: 'contain',
                display: 'block',
                margin: '0 auto'
              }} 
            />
          </div>
          <h1 className="h2 fw-bold mb-1">
            BUBUBURGER
          </h1>
          <div style={{
            fontFamily: 'Montserrat, Arial, sans-serif',
            fontSize: '1.25rem',
            color: '#fff',
            fontWeight: 900,
            marginBottom: 4,
            letterSpacing: '0.01em',
            textShadow: '0 3px 16px rgba(0,0,0,0.55), 0 1px 0 #000',
            background: 'rgba(0,0,0,0.32)',
            borderRadius: 12,
            padding: '6px 18px',
            display: 'inline-block',
            marginTop: 2
          }}>
            {t.slogan[language]}
          </div>
          <p className="mb-3 opacity-90">{t.grillBurgers[language]}</p>
        </div>

        {/* Horarios */}
        <div
          className="schedule-box"
          style={{
            backgroundImage: 'url(/images/brick-wall-orange.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#ffb347',
            borderRadius: 18,
            boxShadow: '0 6px 32px 0 rgba(255,106,0,0.18), 0 1.5px 8px 0 rgba(0,0,0,0.10) inset',
            position: 'relative',
            overflow: 'hidden',
            marginTop: 18,
            marginBottom: 18,
          }}
        >
          {/* Overlay oscuro para legibilidad */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(135deg, rgba(30,30,30,0.60) 60%, rgba(30,30,30,0.30) 100%)',
              zIndex: 1,
              borderRadius: 18,
              pointerEvents: 'none',
            }}
          />
          <div style={{ position: 'relative', zIndex: 2, color: '#fff', textShadow: '0 2px 8px rgba(0,0,0,0.35)' }}>
            <div className="d-flex align-items-center justify-content-center mb-2">
              <Clock size={26} className="me-2" style={{ color: '#fff', filter: 'drop-shadow(0 1px 4px #ff9800cc)' }} />
              <h5 className="mb-0 fw-bold" style={{ fontSize: '1.45rem', letterSpacing: '0.01em', color: '#fff', textShadow: '0 2px 8px #ff9800cc, 0 1px 0 #000' }}>{t.scheduleTitle[language]}</h5>
            </div>
            <div className="row text-center" style={{ fontSize: '1.13rem', fontWeight: 700, letterSpacing: '0.01em' }}>
              <div className="col-6 mb-2">
                <div>
                  <span style={{ fontWeight: 900, fontSize: '1.08em', color: '#ffd740', textShadow: '0 1px 4px #000' }}>{t.scheduleWeekdays[language]}</span>
                  <br />
                  <span style={{ fontWeight: 700, fontSize: '1.08em', color: '#fff', textShadow: '0 1px 4px #000' }}>16:00 - 23:30</span>
                </div>
              </div>
              <div className="col-6 mb-2">
                <div>
                  <span style={{ fontWeight: 900, fontSize: '1.08em', color: '#ffd740', textShadow: '0 1px 4px #000' }}>{t.scheduleWeekend[language]}</span>
                  <br />
                  <span style={{ fontWeight: 700, fontSize: '1.08em', color: '#fff', textShadow: '0 1px 4px #000' }}>13:00 - 00:30</span>
                </div>
              </div>
              <div className="col-6 mb-2">
                <div>
                  <span style={{ fontWeight: 900, fontSize: '1.08em', color: '#ffd740', textShadow: '0 1px 4px #000' }}>{t.scheduleSunday[language]}</span>
                  <br />
                  <span style={{ fontWeight: 700, fontSize: '1.08em', color: '#fff', textShadow: '0 1px 4px #000' }}>13:00 - 23:30</span>
                </div>
              </div>
              <div className="col-6 mb-2">
                <div>
                  <span style={{ fontWeight: 900, fontSize: '1.08em', color: '#ffd740', textShadow: '0 1px 4px #000' }}>{t.scheduleMonday[language]}</span>
                  <br />
                  <span style={{ fontWeight: 700, fontSize: '1.08em', color: '#fff', textShadow: '0 1px 4px #000' }}>{t.scheduleClosed[language]}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;