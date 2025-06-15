import React, { useState, useContext } from 'react';
// import { Send, FileText } from 'lucide-react';
import { LanguageContext } from '../App';
import { uiTranslations } from '../i18n/menu';

interface InvoiceModalProps {
  show: boolean;
  onHide: () => void;
}

// const SERVICE_ID = 'service_lw135kb';
// const TEMPLATE_ID = 'template_q75g0lf';
// const PUBLIC_KEY = 'DeTVB4MdIKuSSP5Yk';

const InvoiceModal: React.FC<InvoiceModalProps> = ({ show, onHide }) => {
  const [formData, setFormData] = useState({
    email: '',
    rfc: '',
    fullName: '',
    taxRegime: '',
    postalCode: '',
    paymentMethod: '',
    amount: '',
    consumptionDate: '',
    ticketFolio: ''
  });
  // const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [rfcError, setRfcError] = useState<string | null>(null);
  // const [amountFocused, setAmountFocused] = useState(false);
  const { language } = useContext(LanguageContext) as { language: 'es' | 'en' };
  const t = uiTranslations;

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    if (field === 'rfc') {
      if (value.length !== 13) {
        setRfcError('El RFC debe tener exactamente 13 caracteres.');
      } else {
        setRfcError(null);
      }
    }
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (
      !formData.fullName ||
      !formData.rfc ||
      !formData.email ||
      !formData.postalCode ||
      !formData.taxRegime ||
      !formData.paymentMethod ||
      !formData.amount ||
      !formData.consumptionDate ||
      !formData.ticketFolio
    ) {
      e.preventDefault();
      setError('Por favor, completa todos los campos.');
      return;
    }
    if (formData.rfc.length !== 13) {
      e.preventDefault();
      setRfcError('El RFC debe tener exactamente 13 caracteres.');
      return;
    }
    setError(null);
    setRfcError(null);
  };

  // Formateador de dinero
  // const formatMoney = (val: string) => {
  //   if (!val) return '';
  //   const number = Number(val.replace(/[^0-9.]/g, ''));
  //   if (isNaN(number)) return '';
  //   return number.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' });
  // };

  // Formateador de dinero tipo cajero
  const formatMoneyCajero = (val: string) => {
    if (!val) return '';
    // Elimina ceros a la izquierda
    let clean = val.replace(/^0+/, '');
    if (!clean) clean = '0';
    // Siempre al menos 3 dígitos para parsear centavos
    while (clean.length < 3) clean = '0' + clean;
    const number = Number(clean) / 100;
    return number.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' });
  };

  if (!show) return null;

  return (
    <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content" style={{ color: 'var(--text-main)' }}>
          <div className="modal-header modal-header-custom" style={{ color: 'var(--text-main)' }}>
            <h5 className="modal-title fw-bold">
              <span className="me-2">🧾</span>
              {t.invoiceTitle[language]}
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              onClick={onHide}
              aria-label={t.invoiceClose[language]}
              style={{ filter: 'invert(1)' }}
            ></button>
          </div>
          <div className="modal-body" style={{ color: 'var(--text-main)' }}>
            <div className="invoice-form">
              {sent ? (
                <div className="alert alert-success text-center">{t.invoiceSuccess[language]}</div>
              ) : (
                <form
                  action="https://formspree.io/f/meokgnzg"
                  method="POST"
                  onSubmit={handleFormSubmit}
                >
                <div className="row">
                  <div className="col-12 mb-3">
                    <label className="form-label">{t.invoiceName[language]}</label>
                    <input
                      name="name"
                      type="text"
                      className="form-control"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      placeholder={t.invoiceNamePlaceholder[language]}
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">{t.invoiceRFC[language]}</label>
                    <input
                      name="rfc"
                      type="text"
                      className="form-control"
                      value={formData.rfc}
                      onChange={(e) => handleInputChange('rfc', e.target.value.toUpperCase())}
                      placeholder={t.invoiceRFCPlaceholder[language]}
                      maxLength={13}
                      minLength={13}
                      required
                    />
                    {rfcError && <div style={{ color: '#ff1744', fontWeight: 600, fontSize: '0.97em', marginTop: 2 }}>{rfcError}</div>}
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">{t.invoiceEmail[language]}</label>
                    <input
                      name="email"
                      type="email"
                      className="form-control"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder={t.invoiceEmailPlaceholder[language]}
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">{t.invoicePostal[language]}</label>
                    <input
                      name="postal_code"
                      type="text"
                      className="form-control"
                      value={formData.postalCode}
                      onChange={(e) => handleInputChange('postalCode', e.target.value)}
                      placeholder={t.invoicePostalPlaceholder[language]}
                      maxLength={5}
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">{t.invoiceRegime[language]}</label>
                    <select
                      name="tax_regime"
                      className="form-select"
                      value={formData.taxRegime}
                      onChange={(e) => handleInputChange('taxRegime', e.target.value)}
                      required
                    >
                      {t.invoiceRegimes[language].map((option: string) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">{t.invoicePayment[language]}</label>
                    <select
                      name="payment_method"
                      className="form-select"
                      value={formData.paymentMethod}
                      onChange={(e) => handleInputChange('paymentMethod', e.target.value)}
                      required
                    >
                      {t.invoicePayments[language].map((option: string) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">{t.invoiceTicketFolio[language]}</label>
                    <input
                      name="ticket_folio"
                      type="text"
                      className="form-control"
                      value={formData.ticketFolio || ''}
                      onChange={e => handleInputChange('ticketFolio', e.target.value)}
                      placeholder="Ej: 123456"
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                      <label className="form-label">{t.invoiceAmount[language]}</label>
                      <div style={{ fontSize: '0.97em', color: '#ff9800', fontWeight: 600, marginBottom: 4 }}>
                        {t.invoiceAmountNote[language]}
                      </div>
                    <div className="input-group">
                      <span className="input-group-text" style={{ background: 'transparent', color: '#b0b0b0', fontWeight: 400, fontSize: '1em', border: 'none', boxShadow: 'none', paddingRight: 4, paddingLeft: 2 }}>$</span>
                      <input
                          name="amount"
                        type="text"
                        className="form-control"
                        value={formatMoneyCajero(formData.amount)}
                        onChange={(e) => {
                          // Solo números
                          const raw = e.target.value.replace(/[^0-9]/g, '');
                          handleInputChange('amount', raw);
                        }}
                        placeholder={t.invoiceAmountPlaceholder[language]}
                        inputMode="numeric"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-12 mb-4">
                    <label className="form-label">{t.invoiceDate[language]}</label>
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

                {error && <div className="alert alert-danger text-center mt-2">{error}</div>}

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
                    {t.invoiceButton[language]}
                  </button>
                </div>

                <div className="mt-3">
                  <small className="text-muted">
                    <strong>{t.invoiceNote[language]}</strong> {t.invoiceNoteText[language]}
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