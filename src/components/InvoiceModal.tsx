import React, { useState } from 'react';
import { Send, FileText } from 'lucide-react';

interface InvoiceModalProps {
  show: boolean;
  onHide: () => void;
}

const SERVICE_ID = 'service_lw135kb';
const TEMPLATE_ID = 'template_q75g0lf';
const PUBLIC_KEY = 'DeTVB4MdIKuSSP5Yk';

const InvoiceModal: React.FC<InvoiceModalProps> = ({ show, onHide }) => {
  const [formData, setFormData] = useState({
    email: '',
    rfc: '',
    fullName: '',
    taxRegime: '',
    postalCode: '',
    paymentMethod: '',
    amount: '',
    consumptionDate: ''
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  if (!show) return null;

  return (
    <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content" style={{ color: 'var(--text-main)' }}>
          <div className="modal-header modal-header-custom" style={{ color: 'var(--text-main)' }}>
            <h5 className="modal-title fw-bold">
              <span className="me-2">🧾</span>
              Solicitar Factura
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              onClick={onHide}
              aria-label="Cerrar"
              style={{ filter: 'invert(1)' }}
            ></button>
          </div>
          
          <div className="modal-body" style={{ color: 'var(--text-main)' }}>
            <div className="invoice-form">
              {sent ? (
                <div className="alert alert-success text-center">¡Factura enviada correctamente!</div>
              ) : (
                <form
                  action="https://formspree.io/f/meokgnzg"
                  method="POST"
                >
                  <div className="row">
                    <div className="col-12 mb-3">
                      <label className="form-label">Correo Electrónico *</label>
                      <input
                        name="email"
                        type="email"
                        className="form-control"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="tu@email.com"
                        required
                      />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label className="form-label">RFC *</label>
                      <input
                        name="rfc"
                        type="text"
                        className="form-control"
                        value={formData.rfc}
                        onChange={(e) => handleInputChange('rfc', e.target.value.toUpperCase())}
                        placeholder="ABCD123456EF7"
                        maxLength={13}
                        required
                      />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label className="form-label">Código Postal *</label>
                      <input
                        name="postal_code"
                        type="text"
                        className="form-control"
                        value={formData.postalCode}
                        onChange={(e) => handleInputChange('postalCode', e.target.value)}
                        placeholder="12345"
                        maxLength={5}
                        required
                      />
                    </div>

                    <div className="col-12 mb-3">
                      <label className="form-label">Nombre Completo *</label>
                      <input
                        name="name"
                        type="text"
                        className="form-control"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        placeholder="Nombre completo o razón social"
                        required
                      />
                    </div>

                    <div className="col-12 mb-3">
                      <label className="form-label">Régimen Fiscal *</label>
                      <select
                        name="tax_regime"
                        className="form-select"
                        value={formData.taxRegime}
                        onChange={(e) => handleInputChange('taxRegime', e.target.value)}
                        required
                      >
                        <option value="">Selecciona tu Régimen Fiscal</option>
                        <option value="601">601 - General de Ley Personas Morales</option>
                        <option value="603">603 - Personas Morales con Fines no Lucrativos</option>
                        <option value="605">605 - Sueldos y Salarios e Ingresos Asimilados a Salarios</option>
                        <option value="606">606 - Arrendamiento</option>
                        <option value="607">607 - Régimen de Enajenación o Adquisición de Bienes</option>
                        <option value="608">608 - Demás Ingresos</option>
                        <option value="610">610 - Residentes en el Extranjero sin Establecimiento Permanente en México</option>
                        <option value="611">611 - Ingresos por Dividendos (Socios y Accionistas)</option>
                        <option value="612">612 - Personas Físicas con Actividades Empresariales y Profesionales</option>
                        <option value="614">614 - Ingresos por Intereses</option>
                        <option value="615">615 - Régimen de los Ingresos por Obtención de Premios</option>
                        <option value="616">616 - Sin Obligaciones Fiscales</option>
                        <option value="620">620 - Sociedades Cooperativas de Producción que optan por diferir sus ingresos</option>
                        <option value="621">621 - Incorporación Fiscal</option>
                        <option value="622">622 - Actividades Agrícolas, Ganaderas, Silvícolas y Pesqueras</option>
                        <option value="623">623 - Opcional para Grupos de Sociedades</option>
                        <option value="624">624 - Coordinados</option>
                        <option value="625">625 - Régimen de las Actividades Empresariales con Ingresos a través de Plataformas Tecnológicas</option>
                        <option value="626">626 - Régimen Simplificado de Confianza</option>
                      </select>
                    </div>

                    <div className="col-md-6 mb-3">
                      <label className="form-label">Método de Pago *</label>
                      <select
                        name="payment_method"
                        className="form-select"
                        value={formData.paymentMethod}
                        onChange={(e) => handleInputChange('paymentMethod', e.target.value)}
                        required
                      >
                        <option value="">Selecciona Método de Pago</option>
                        <option value="01">01 - Efectivo</option>
                        <option value="03">03 - Transferencia Electrónica de Fondos</option>
                        <option value="04">04 - Tarjeta de Crédito</option>
                        <option value="28">28 - Tarjeta de Débito</option>
                        <option value="99">99 - Por Definir</option>
                      </select>
                    </div>

                    <div className="col-md-6 mb-3">
                      <label className="form-label">Cantidad Total *</label>
                      <input
                        name="amount"
                        type="number"
                        className="form-control"
                        value={formData.amount}
                        onChange={(e) => handleInputChange('amount', e.target.value)}
                        placeholder="0.00"
                        min="0"
                        step="0.01"
                        required
                      />
                    </div>

                    <div className="col-12 mb-4">
                      <label className="form-label">fecha de consumo *</label>
                      <input
                        name="consumption_date"
                        type="date"
                        className="form-control"
                        value={formData.consumptionDate}
                        onChange={(e) => handleInputChange('consumptionDate', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn w-100 fw-bold"
                      style={{
                        background: 'var(--primary-orange)',
                        color: 'white',
                        borderRadius: '25px'
                      }}
                    >
                      solicitar factura
                    </button>
                  </div>

                  <div className="mt-3">
                    <small className="text-muted">
                      <strong>nota:</strong> tu factura será procesada en un plazo máximo de 72 horas hábiles. 
                      Recibirás un correo de confirmación una vez que esté lista.
                    </small>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceModal;