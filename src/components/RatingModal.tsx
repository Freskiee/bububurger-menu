import React from 'react';
import { Send } from 'lucide-react';

interface RatingModalProps {
  show: boolean;
  onHide: () => void;
}

const RatingModal: React.FC<RatingModalProps> = ({ show, onHide }) => {
  if (!show) return null;

  // Mostrar mensaje de éxito si la URL contiene ?success (Getform puede redirigir a una página de gracias)
  const urlParams = new URLSearchParams(window.location.search);
  const enviado = urlParams.has('success');

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
              onClick={onHide}
              aria-label="Cerrar"
              style={{ filter: 'invert(1)' }}
            ></button>
          </div>
          <div className="modal-body">
            {enviado ? (
              <div className="alert alert-success text-center">¡Gracias por tu opinión! 👨‍🍳</div>
            ) : (
              <form
                action="https://getform.io/f/ajjodxpa"
                method="POST"
                autoComplete="off"
              >
                {/* Campo honeypot para spam */}
                <input type="hidden" name="_gotcha" style={{ display: 'none' }} />
                <div className="mb-3">
                  <label className="form-label fw-medium">Tu Nombre *</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-medium">👥 Calidad del Servicio *</label>
                  <input type="hidden" name="service" id="service" />
                  <div className="d-flex justify-content-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className="rating-stars text-warning"
                        style={{ fontSize: '1.8rem', cursor: 'pointer' }}
                        onClick={() => {
                          const input = document.getElementById('service') as HTMLInputElement;
                          if (input) input.value = String(star);
                        }}
                      >🍔</span>
                    ))}
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label fw-medium">😋 Sabor de los Alimentos *</label>
                  <input type="hidden" name="taste" id="taste" />
                  <div className="d-flex justify-content-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className="rating-stars text-warning"
                        style={{ fontSize: '1.8rem', cursor: 'pointer' }}
                        onClick={() => {
                          const input = document.getElementById('taste') as HTMLInputElement;
                          if (input) input.value = String(star);
                        }}
                      >🍔</span>
                    ))}
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label fw-medium">🎨 Presentación *</label>
                  <input type="hidden" name="presentation" id="presentation" />
                  <div className="d-flex justify-content-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className="rating-stars text-warning"
                        style={{ fontSize: '1.8rem', cursor: 'pointer' }}
                        onClick={() => {
                          const input = document.getElementById('presentation') as HTMLInputElement;
                          if (input) input.value = String(star);
                        }}
                      >🍔</span>
                    ))}
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label fw-medium">💰 Percepción del Precio *</label>
                  <input type="hidden" name="price" id="price" />
                  <div className="d-flex justify-content-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className="rating-stars text-warning"
                        style={{ fontSize: '1.8rem', cursor: 'pointer' }}
                        onClick={() => {
                          const input = document.getElementById('price') as HTMLInputElement;
                          if (input) input.value = String(star);
                        }}
                      >🍔</span>
                    ))}
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label fw-medium">Comentarios Adicionales</label>
                  <textarea
                    className="form-control"
                    rows={3}
                    name="comments"
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