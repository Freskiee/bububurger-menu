import React, { useState, useContext } from 'react';
import { Send, FileText } from 'lucide-react';
import { LanguageContext } from '../App';
import { uiTranslations } from '../i18n/menu';

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
  const { language } = useContext(LanguageContext) as { language: 'es' | 'en' };
  const t = uiTranslations;

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
                >
                <div className="row">
                  <div className="col-12 mb-3">
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
                      <label className="form-label">{t.invoiceRFC[language]}</label>
                    <input
                        name="rfc"
                      type="text"
                      className="form-control"
                      value={formData.rfc}
                      onChange={(e) => handleInputChange('rfc', e.target.value.toUpperCase())}
                      placeholder={t.invoiceRFCPlaceholder[language]}
                      maxLength={13}
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

                  <div className="col-12 mb-3">
                      <label className="form-label">{t.invoiceRegime[language]}</label>
                    <select
                        name="tax_regime"
                      className="form-select"
                      value={formData.taxRegime}
                      onChange={(e) => handleInputChange('taxRegime', e.target.value)}
                      required
                    >
                        {t.invoiceRegimes[language].map((option: string, idx: number) => (
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
                        {t.invoicePayments[language].map((option: string, idx: number) => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                  </div>

                  <div className="col-md-6 mb-3">
                      <label className="form-label">{t.invoiceAmount[language]}</label>
                    <input
                        name="amount"
                      type="number"
                      className="form-control"
                      value={formData.amount}
                      onChange={(e) => handleInputChange('amount', e.target.value)}
                      placeholder={t.invoiceAmountPlaceholder[language]}
                      min="0"
                      step="0.01"
                      required
                    />
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