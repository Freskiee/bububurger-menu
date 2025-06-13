import React from 'react';
import { Clock } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <div className="header-gradient text-white" style={{
      backgroundImage: 'url("https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
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
        background: 'linear-gradient(135deg, rgba(255, 106, 0, 0.7) 0%, rgba(255, 133, 51, 0.259) 50%, rgba(255, 106, 0, 0.7) 100%)',
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
          <p className="mb-3 opacity-90">Hamburguesas al Carbón</p>
        </div>

        {/* Horarios */}
        <div className="schedule-box">
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
  );
};

export default Header;