import React, { useState } from 'react';
import { Copy, Check, Banknote, Smartphone, CreditCard } from 'lucide-react';

interface PaymentModalProps {
  show: boolean;
  onHide: () => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ show, onHide }) => {
  const [copied, setCopied] = useState(false);
  const clabe = '012180004768342723';

  const copyClabe = async () => {
    try {
      await navigator.clipboard.writeText(clabe);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Error al copiar:', err);
    }
  };

  if (!show) return null;

  return (
    <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header modal-header-custom">
            <h5 className="modal-title fw-bold">
              <span className="me-2">💳</span>
              Métodos de Pago
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              onClick={onHide}
            ></button>
          </div>
          
          <div className="modal-body p-4">
            {/* Efectivo */}
            <div className="payment-method mb-4">
              <div className="d-flex align-items-center mb-2">
                <Banknote size={32} className="text-success me-3" />
                <h6 className="fw-bold mb-0">Efectivo</h6>
              </div>
              <p className="text-muted ms-5 small">
                Paga directamente en caja al finalizar tu consumo
              </p>
            </div>

            {/* Transferencia */}
            <div className="payment-method mb-4">
              <div className="d-flex align-items-center mb-2">
                <Smartphone size={32} className="text-primary me-3" />
                <h6 className="fw-bold mb-0">Transferencia Bancaria</h6>
              </div>
              <div className="ms-5">
                <p className="mb-1 small">
                  <strong>Titular:</strong> Ariel Alfredo Sánchez Peralta
                </p>
                <p className="mb-2 small">
                  <strong>CLABE BBVA:</strong>
                </p>
                <div className="d-flex align-items-center">
                  <code className="bg-light p-2 rounded me-2 flex-grow-1">
                    {clabe}
                  </code>
                  <button
                    className="copy-button"
                    onClick={copyClabe}
                  >
                    {copied ? <Check size={16} /> : <Copy size={16} />}
                  </button>
                </div>
                {copied && (
                  <small className="text-success mt-1 d-block">
                    ¡CLABE Copiada! 📋
                  </small>
                )}
              </div>
            </div>

            {/* Tarjetas */}
            <div className="payment-method">
              <div className="d-flex align-items-center mb-2">
                <CreditCard size={32} className="me-3" style={{ color: 'var(--primary-orange)' }} />
                <h6 className="fw-bold mb-0">Tarjetas</h6>
              </div>
              <p className="text-muted ms-5 small">
                Aceptamos tarjetas de crédito y débito Visa, Mastercard y American Express
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;