import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Product } from '../data/menuData';

interface CocktailModalProps {
  show: boolean;
  onClose: () => void;
  cocktails: Product[];
  initialCocktailId?: string;
}

const CocktailModal: React.FC<CocktailModalProps> = ({
  show,
  onClose,
  cocktails,
  initialCocktailId
}) => {
  const [activeCocktailId, setActiveCocktailId] = useState<string | null>(initialCocktailId || null);

  const handleNextCocktail = () => {
    const currentIndex = cocktails.findIndex(c => c.id === activeCocktailId);
    if (currentIndex >= 0) {
      const nextIndex = (currentIndex + 1) % cocktails.length;
      setActiveCocktailId(cocktails[nextIndex].id);
    }
  };

  const handlePrevCocktail = () => {
    const currentIndex = cocktails.findIndex(c => c.id === activeCocktailId);
    if (currentIndex >= 0) {
      const prevIndex = (currentIndex - 1 + cocktails.length) % cocktails.length;
      setActiveCocktailId(cocktails[prevIndex].id);
    }
  };

  const activeCocktail = cocktails.find(c => c.id === activeCocktailId);

  return (
    <Modal show={show} onHide={onClose} centered size="xl" style={{
      maxHeight: '90vh'
    }}>
      <Modal.Header closeButton>
        <Modal.Title style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#ff9800' }}>
          {activeCocktail?.name || ''}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{
        padding: '0',
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '2rem',
          padding: '1rem',
          backgroundColor: '#1a1a1a',
          borderRadius: '12px',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
          border: '2px solid #ff9800',
          height: '100%'
        }}>
          <div style={{ 
            position: 'relative',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
            height: '400px',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {activeCocktail && (
              <img 
                src={activeCocktail.image} 
                alt={activeCocktail.name} 
                style={{ 
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain',
                  transition: 'transform 0.3s ease'
                }} 
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
            )}
          </div>
          <div style={{ 
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            padding: '1.5rem',
            backgroundColor: '#1e1e1e',
            borderRadius: '8px',
            boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.2)'
          }}>
            <h3 style={{ 
              color: '#fff',
              fontSize: '1.4rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Ingredientes
            </h3>
            <p style={{ 
              color: '#ff9800',
              fontSize: '1.1rem',
              lineHeight: '1.8',
              margin: 0,
              fontWeight: '500'
            }}>
              {activeCocktail?.description || ''}
            </p>
          </div>
        </div>
      </Modal.Body>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '1rem',
        padding: '1rem'
      }}>
        <button 
          onClick={handlePrevCocktail}
          style={{
            backgroundColor: '#1a1a1a',
            color: '#fff',
            border: '2px solid #ff9800',
            borderRadius: '4px',
            padding: '8px 16px',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            fontSize: '1.2rem'
          }}
        >
          ❮
        </button>
        <button 
          onClick={handleNextCocktail}
          style={{
            backgroundColor: '#1a1a1a',
            color: '#fff',
            border: '2px solid #ff9800',
            borderRadius: '4px',
            padding: '8px 16px',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            fontSize: '1.2rem'
          }}
        >
          ❯
        </button>
      </div>
    </Modal>
  );
};

export default CocktailModal;
