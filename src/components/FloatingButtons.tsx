import React from 'react';
import { Star, CreditCard, FileText, ArrowUp } from 'lucide-react';

interface FloatingButtonsProps {
  onRateClick: () => void;
  onPaymentClick: () => void;
  onInvoiceClick: () => void;
}

const FloatingButtons: React.FC<FloatingButtonsProps> = ({ 
  onRateClick, 
  onPaymentClick, 
  onInvoiceClick 
}) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="floating-buttons">
      <button
        className="floating-btn scroll-top"
        onClick={scrollToTop}
        title="Volver arriba"
      >
        <ArrowUp size={24} />
      </button>
      <button
        className="floating-btn rate"
        onClick={onRateClick}
        title="Califica tu experiencia"
      >
        <Star size={24} />
      </button>
      
      <button
        className="floating-btn payment"
        onClick={onPaymentClick}
        title="Métodos de pago"
      >
        <CreditCard size={24} />
      </button>

      <button
        className="floating-btn invoice"
        onClick={onInvoiceClick}
        title="Solicitar factura"
      >
        <FileText size={24} />
      </button>
    </div>
  );
};

export default FloatingButtons;