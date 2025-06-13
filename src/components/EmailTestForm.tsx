import React from 'react';
import emailjs from '@emailjs/browser';

const EmailTestForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs.sendForm(
      'bububurger',
      'template_q75g0lf',
      e.currentTarget,
      'DeTVB4MdIKuSSP5Yk'
    )
    .then(() => alert('¡Enviado!'))
    .catch(err => alert('Error: ' + (err?.text || '')));
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: '2rem auto', background: '#fff', padding: 24, borderRadius: 12, boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
      <h3>Prueba EmailJS</h3>
      <div className="mb-3">
        <label>Nombre</label>
        <input name="name" className="form-control" required />
      </div>
      <div className="mb-3">
        <label>Correo</label>
        <input name="email" type="email" className="form-control" required />
      </div>
      <div className="mb-3">
        <label>RFC</label>
        <input name="rfc" className="form-control" />
      </div>
      <div className="mb-3">
        <label>Código Postal</label>
        <input name="postal_code" className="form-control" />
      </div>
      <div className="mb-3">
        <label>Régimen Fiscal</label>
        <input name="tax_regime" className="form-control" />
      </div>
      <div className="mb-3">
        <label>Método de Pago</label>
        <input name="payment_method" className="form-control" />
      </div>
      <div className="mb-3">
        <label>Cantidad Total</label>
        <input name="amount" className="form-control" />
      </div>
      <div className="mb-3">
        <label>Fecha de Consumo</label>
        <input name="consumption_date" type="date" className="form-control" />
      </div>
      <button type="submit" className="btn btn-primary w-100">Enviar prueba</button>
    </form>
  );
};

export default EmailTestForm; 