import React from 'react';
import { Clock } from 'lucide-react';
import parrillaImg from '../assets/parrilla.png';

const Header: React.FC = () => {
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
            Por las que vale la pena romper cualquier dieta
          </div>
          <p className="mb-3 opacity-90">Hamburguesas al Carbón</p>
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
              <Clock size={20} className="me-2" />
              <h6 className="mb-0 fw-bold">Horarios de Servicio</h6>
            </div>
            <div className="row text-center">
              <div className="col-6">
                <div className="mb-2">
                  <strong>Mar - Mié</strong>
                  <br />
                  <small>16:00 - 23:30</small>
                </div>
              </div>
              <div className="col-6">
                <div className="mb-2">
                  <strong>Jue - Vie - Sáb</strong>
                  <br />
                  <small>13:00 - 00:30</small>
                </div>
              </div>
              <div className="col-6">
                <div className="mb-2">
                  <strong>Dom</strong>
                  <br />
                  <small>13:00 - 23:30</small>
                </div>
              </div>
              <div className="col-6">
                <div className="mb-2">
                  <strong>Lunes</strong>
                  <br />
                  <small>Cerrado</small>
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