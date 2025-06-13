import React, { useState, useEffect } from 'react';
import { Send } from 'lucide-react';

interface RatingModalProps {
  show: boolean;
  onHide: () => void;
}

const BASIN_ENDPOINT = "https://usebasin.com/f/289192520763";

const RatingModal: React.FC<RatingModalProps> = ({ show, onHide }) => {
  const [service, setService] = useState(0);
  const [taste, setTaste] = useState(0);
  const [presentation, setPresentation] = useState(0);
  const [price, setPrice] = useState(0);
  const [name, setName] = useState("");
  const [comments, setComments] = useState("");
  const [enviado, setEnviado] = useState(false);
  const [sending, setSending] = useState(false);

  // Limpiar información y cerrar modal al regresar al menú o tras enviar
  useEffect(() => {
    if (!show) {
      setService(0);
      setTaste(0);
      setPresentation(0);
      setPrice(0);
      setName("");
      setComments("");
      setEnviado(false);
      setSending(false);
    }
  }, [show]);

  useEffect(() => {
    if (enviado) {
      const timeout = setTimeout(() => {
        setService(0);
        setTaste(0);
        setPresentation(0);
        setPrice(0);
        setName("");
        setComments("");
        setEnviado(false);
        setSending(false);
        onHide();
      }, 1800); // 1.8 segundos para mostrar el mensaje de éxito
      return () => clearTimeout(timeout);
    }
  }, [enviado, onHide]);

  if (!show) return null;

  const handleClose = () => {
    setService(0);
    setTaste(0);
    setPresentation(0);
    setPrice(0);
    setName("");
    setComments("");
    setEnviado(false);
    setSending(false);
    onHide();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("service", String(service));
    formData.append("taste", String(taste));
    formData.append("presentation", String(presentation));
    formData.append("price", String(price));
    formData.append("comments", comments);
    formData.append("_gotcha", "");
    try {
      await fetch(BASIN_ENDPOINT, {
        method: "POST",
        body: formData,
      });
      setEnviado(true);
    } catch {
      alert("Hubo un error al enviar tu reseña. Intenta de nuevo.");
    } finally {
      setSending(false);
    }
  };

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
            {enviado ? (
              <div className="alert alert-success text-center">¡Gracias por tu opinión! 👨‍🍳</div>
            ) : (
              <form autoComplete="off" onSubmit={handleSubmit}>
                {/* Campo honeypot para spam */}
                <input type="hidden" name="_gotcha" style={{ display: 'none' }} />
              <div className="mb-3">
                  <label className="form-label fw-medium">Tu Nombre *</label>
                <input
                  type="text"
                  className="form-control"
                    name="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                  <label className="form-label fw-medium">👥 Calidad del Servicio *</label>
                  <div className="d-flex justify-content-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className="rating-stars"
                        style={{
                          fontSize: '1.8rem',
                          cursor: 'pointer',
                          filter: star <= service ? 'none' : 'grayscale(1)',
                          transition: 'filter 0.2s',
                        }}
                        onClick={() => setService(star)}
                      >🍔</span>
                    ))}
                  </div>
              </div>
              <div className="mb-3">
                  <label className="form-label fw-medium">😋 Sabor de los Alimentos *</label>
                  <div className="d-flex justify-content-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className="rating-stars"
                        style={{
                          fontSize: '1.8rem',
                          cursor: 'pointer',
                          filter: star <= taste ? 'none' : 'grayscale(1)',
                          transition: 'filter 0.2s',
                        }}
                        onClick={() => setTaste(star)}
                      >🍔</span>
                    ))}
                  </div>
              </div>
              <div className="mb-3">
                  <label className="form-label fw-medium">🎨 Presentación *</label>
                  <div className="d-flex justify-content-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className="rating-stars"
                        style={{
                          fontSize: '1.8rem',
                          cursor: 'pointer',
                          filter: star <= presentation ? 'none' : 'grayscale(1)',
                          transition: 'filter 0.2s',
                        }}
                        onClick={() => setPresentation(star)}
                      >🍔</span>
                    ))}
                  </div>
              </div>
              <div className="mb-3">
                  <label className="form-label fw-medium">💰 Percepción del Precio *</label>
                  <div className="d-flex justify-content-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className="rating-stars"
                        style={{
                          fontSize: '1.8rem',
                          cursor: 'pointer',
                          filter: star <= price ? 'none' : 'grayscale(1)',
                          transition: 'filter 0.2s',
                        }}
                        onClick={() => setPrice(star)}
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
                    value={comments}
                    onChange={e => setComments(e.target.value)}
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
                  disabled={sending}
              >
                <Send size={20} className="me-2" />
                  {sending ? 'Enviando...' : 'Enviar Mi Reseña'}
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