import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface RatingModalProps {
  show: boolean;
  onHide: () => void;
}

const FORMSPREE_URL = "https://formspree.io/f/meqybwqg"; // Cambia este endpoint si tienes uno diferente

const RatingModal: React.FC<RatingModalProps> = ({ show, onHide }) => {
  const [formData, setFormData] = useState({
    name: '',
    service: 0,
    taste: 0,
    presentation: 0,
    price: 0,
    comments: ''
  });
  const [sent, setSent] = useState(false);

  const handleRatingClick = (field: string, rating: number) => {
    setFormData({ ...formData, [field]: rating });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  // Reiniciar formulario al cerrar
  const handleClose = () => {
    setSent(false);
    setFormData({
      name: '',
      service: 0,
      taste: 0,
      presentation: 0,
      price: 0,
      comments: ''
    });
    onHide();
  };

  const renderStars = (field: string, current: number) => {
    return (
      <div className="d-flex justify-content-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`rating-stars ${star <= current ? 'text-warning' : 'text-muted'}`}
            onClick={() => handleRatingClick(field, star)}
            style={{ fontSize: '1.8rem', cursor: 'pointer' }}
          >
            🍔
          </span>
        ))}
      </div>
    );
  };

  if (!show) return null;

  return (
    <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header modal-header-custom">
            <h5 className="modal-title fw-bold">
              <span className="me-2">🍔</span>
              Califica Tu Experiencia
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              onClick={handleClose}
              aria-label="Cerrar"
              style={{ filter: 'invert(1)' }}
            ></button>
          </div>
          <div className="modal-body">
            {sent ? (
              <div className="alert alert-success text-center">¡Gracias por tu opinión! 👨‍🍳</div>
            ) : (
              <form
                action={FORMSPREE_URL}
                method="POST"
                onSubmit={() => setSent(true)}
              >
                <input type="hidden" name="_subject" value="Nueva reseña de cliente Bububurger" />
                <div className="mb-3">
                  <label className="form-label fw-medium">Tu Nombre *</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={formData.name}
                    onChange={e => handleInputChange('name', e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-medium">👥 Calidad del Servicio *</label>
                  <input type="hidden" name="service" value={formData.service} />
                  {renderStars('service', formData.service)}
                </div>
                <div className="mb-3">
                  <label className="form-label fw-medium">😋 Sabor de los Alimentos *</label>
                  <input type="hidden" name="taste" value={formData.taste} />
                  {renderStars('taste', formData.taste)}
                </div>
                <div className="mb-3">
                  <label className="form-label fw-medium">🎨 Presentación *</label>
                  <input type="hidden" name="presentation" value={formData.presentation} />
                  {renderStars('presentation', formData.presentation)}
                </div>
                <div className="mb-3">
                  <label className="form-label fw-medium">💰 Percepción del Precio *</label>
                  <input type="hidden" name="price" value={formData.price} />
                  {renderStars('price', formData.price)}
                </div>
                <div className="mb-3">
                  <label className="form-label fw-medium">Comentarios Adicionales</label>
                  <textarea
                    className="form-control"
                    rows={3}
                    name="comments"
                    value={formData.comments}
                    onChange={e => handleInputChange('comments', e.target.value)}
                    placeholder="Cuéntanos más sobre tu experiencia..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn w-100 fw-bold"
                  style={{
                    background: 'var(--primary-orange)',
                    color: 'white',
                    borderRadius: '25px'
                  }}
                >
                  <Send size={20} className="me-2" />
                  Enviar Mi Reseña
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingModal;