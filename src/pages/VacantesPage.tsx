import React, { useState } from 'react';

type VacancyKey = 'parrillero' | 'mesero' | 'bartender';

interface Vacancy {
  key: VacancyKey;
  title: string;
  img: string;
  desc: string;
}

const VACANCIES: Vacancy[] = [
  {
    key: 'parrillero',
    title: 'Parrillero',
    img: '/images/parrillero-vacante.png',
    desc: 'Prepara carnes y guarniciones a la parrilla, controlando tiempos, términos y limpieza de estación.',
  },
  {
    key: 'mesero',
    title: 'Mesero',
    img: '/images/mesero-vacante.jpg',
    desc: 'Atención al cliente en mesa, toma de pedidos, servicio cordial y manejo de cuentas.',
  },
  {
    key: 'bartender',
    title: 'Bartender',
    img: '/images/bartender-vacante.png',
    desc: 'Preparación de coctelería clásica y de autor y limpieza de barra.',
  },
];

export default function VacantesPage() {
  // Navegación segura: history.back o fallback a "/"
  const goBack = () => {
    if (window.history.length > 1) window.history.back();
    else window.location.href = '/';
  };

  const [activeVacancy, setActiveVacancy] = useState<Vacancy | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Forzar fondo oscuro en el body
  React.useEffect(() => {
    const originalBg = document.body.style.backgroundColor;
    
    document.body.style.backgroundColor = '#0a0e1a';
    document.body.style.background = 'linear-gradient(135deg, #0a0e1a 0%, #1a1f2e 50%, #0f1419 100%)';
    document.body.style.minHeight = '100vh';
    
    return () => {
      document.body.style.backgroundColor = originalBg;
      document.body.style.background = '';
      document.body.style.minHeight = '';
    };
  }, []);

  return (
    <div className="text-light w-100 min-vh-100" style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0e1a 0%, #1a1f2e 50%, #0f1419 100%)',
      backgroundColor: '#0a0e1a'
    }}>
      <div className="container-fluid" style={{ 
        maxWidth: '1200px', 
        padding: 'clamp(16px, 4vw, 32px) clamp(12px, 3vw, 24px)'
      }}>
        <header className="d-flex align-items-center justify-content-between mb-4 mb-md-5" style={{
          flexDirection: 'row',
          gap: '12px'
        }}>
          <h1 className="m-0 fw-bold" style={{ 
            fontSize: 'clamp(1.8rem, 8vw, 3.5rem)',
            color: '#ffffff',
            letterSpacing: '-0.02em',
            textShadow: '0 2px 8px rgba(0,0,0,0.5)',
            background: 'linear-gradient(135deg, #ffffff 0%, #ffd740 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Vacantes
          </h1>
          <button
            onClick={goBack}
            className="btn"
            style={{
              border: 'none',
              padding: 'clamp(10px, 2vw, 14px) clamp(16px, 4vw, 24px)',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #ffd740 0%, #ffb300 100%)',
              color: '#1a1a2e',
              cursor: 'pointer',
              boxShadow: '0 4px 16px rgba(255, 215, 64, 0.4)',
              fontWeight: '600',
              fontSize: 'clamp(0.8rem, 2.5vw, 0.95rem)',
              transition: 'all 0.3s ease',
              whiteSpace: 'nowrap',
              flexShrink: 0
            }}
            title="Regresar al menú"
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 16px rgba(255, 215, 64, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 215, 64, 0.3)';
            }}
          >
            ⟵ Regresar al menú
          </button>
        </header>

        {/* Mensaje de éxito */}
        {successMessage && (
          <div className="alert alert-success d-flex align-items-center mb-4" style={{
            background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)',
            border: 'none',
            borderRadius: '12px',
            color: '#fff',
            padding: '16px 20px',
            boxShadow: '0 4px 12px rgba(40, 167, 69, 0.3)',
            animation: 'slideInDown 0.5s ease-out'
          }}>
            <div style={{ fontSize: '1.2rem', marginRight: '12px' }}>✅</div>
            <div style={{ flex: 1, fontWeight: '500' }}>{successMessage}</div>
            <button 
              type="button" 
              className="btn-close btn-close-white ms-2"
              onClick={() => setSuccessMessage(null)}
              style={{ filter: 'brightness(0) invert(1)' }}
            ></button>
          </div>
        )}

        {/* Grid de tarjetas */}
        <div className="row g-3 g-md-4 g-lg-5" style={{ 
          padding: '0 clamp(4px, 1vw, 8px)',
          margin: '0 -clamp(4px, 1vw, 8px)'
        }}>
        {VACANCIES.map(v => (
          <div className="col-12 col-sm-6 col-lg-4" key={v.key}>
            <div className="card h-100 shadow-lg border-0" style={{
              background: 'linear-gradient(145deg, #1e2332 0%, #151823 100%)',
              borderRadius: 'clamp(12px, 2vw, 16px)',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              border: '1px solid rgba(255, 215, 64, 0.1)',
              backdropFilter: 'blur(10px)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 16px 32px rgba(0,0,0,0.5), 0 0 0 1px rgba(255, 215, 64, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.3), 0 0 0 1px rgba(255, 215, 64, 0.1)';
            }}>
              <div className="ratio ratio-16x9" style={{
                background: 'linear-gradient(135deg, #2a2f3e 0%, #1a1f2e 100%)',
                borderRadius: 'clamp(12px, 2vw, 16px) clamp(12px, 2vw, 16px) 0 0',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <img
                  src={v.img}
                  alt={v.title}
                  className="card-img-top"
                  style={{ 
                    objectFit: 'cover',
                    borderRadius: 'clamp(12px, 2vw, 16px) clamp(12px, 2vw, 16px) 0 0',
                    filter: 'brightness(0.9) contrast(1.1)'
                  }}
                  onError={(e) => { 
                    (e.currentTarget as HTMLImageElement).style.display = 'none'; 
                    (e.currentTarget.parentNode as HTMLElement).style.background='linear-gradient(135deg, #343a40 0%, #495057 100%)'; 
                  }}
                />
              </div>
              <div className="card-body d-flex flex-column text-light" style={{ 
                padding: 'clamp(16px, 4vw, 24px)',
                background: 'linear-gradient(180deg, rgba(30, 35, 50, 0.9) 0%, rgba(21, 24, 35, 0.95) 100%)'
              }}>
                <h5 className="card-title mb-3" style={{
                  fontSize: 'clamp(1.2rem, 3vw, 1.4rem)',
                  fontWeight: '700',
                  color: '#ffd740',
                  textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                }}>{v.title}</h5>
                <p className="card-text mb-4" style={{ 
                  minHeight: 'clamp(60px, 15vw, 80px)',
                  fontSize: 'clamp(0.85rem, 2.2vw, 0.95rem)',
                  lineHeight: '1.6',
                  color: 'rgba(255,255,255,0.85)'
                }}>{v.desc}</p>
                <div className="mt-auto">
                  <button
                    className="btn fw-bold w-100"
                    style={{
                      background: 'linear-gradient(135deg, #ffd740 0%, #ffb300 100%)',
                      color: '#1a1a2e',
                      border: 'none',
                      padding: 'clamp(10px, 2.5vw, 12px) clamp(16px, 4vw, 20px)',
                      borderRadius: 'clamp(8px, 2vw, 10px)',
                      fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                      fontWeight: '600',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 6px 12px rgba(255, 215, 64, 0.4)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}
                    onClick={() => setActiveVacancy(v)}
                    aria-haspopup="dialog"
                    aria-controls="applyModal"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
                      e.currentTarget.style.boxShadow = '0 8px 16px rgba(255, 215, 64, 0.5)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.boxShadow = '0 6px 12px rgba(255, 215, 64, 0.4)';
                    }}
                  >
                    Postúlate
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>

      {/* Modal de postulación */}
      {activeVacancy && (
        <ApplyModal
          vacancy={activeVacancy}
          onClose={() => setActiveVacancy(null)}
          onSubmit={(payload) => {
            // TODO: Conectar backend (email, API, etc.)
            console.log('Postulación enviada:', payload);
            const vacancyTitles = {
              parrillero: 'Parrillero',
              mesero: 'Mesero', 
              bartender: 'Bartender'
            };
            setSuccessMessage(`¡Gracias! Tu postulación para ${vacancyTitles[payload.vacancy]} fue enviada exitosamente.`);
            setActiveVacancy(null);
            
            // Auto-ocultar mensaje después de 5 segundos
            setTimeout(() => {
              setSuccessMessage(null);
            }, 5000);
          }}
        />
      )}
    </div>
  );
}

interface ApplyPayload {
  vacancy: VacancyKey;
  fullName: string;
  phone: string;
  email: string;
  address: string;
  age: string;
  availability: string;
  experienceYears: string;
  salaryExpectation: string;
  references: string;
  privacyAccepted: boolean;
}

function ApplyModal({
  vacancy,
  onClose,
  onSubmit
}: {
  vacancy: Vacancy;
  onClose: () => void;
  onSubmit: (payload: ApplyPayload) => void;
}) {
  const [fullName, setFullName] = useState('');
  const [fullNameError, setFullNameError] = useState<string|null>(null);
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState<string|null>(null);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState<string|null>(null);
  const [address, setAddress] = useState('');
  const [addressError, setAddressError] = useState<string|null>(null);
  const [age, setAge] = useState('');
  const [ageError, setAgeError] = useState<string|null>(null);
  const [availability, setAvailability] = useState('');
  const [availabilityError, setAvailabilityError] = useState<string|null>(null);
  const [experienceYears, setExperienceYears] = useState('');
  const [experienceYearsError, setExperienceYearsError] = useState<string|null>(null);
  const [salaryExpectation, setSalaryExpectation] = useState('');
  const [salaryExpectationError, setSalaryExpectationError] = useState<string|null>(null);
  const [references, setReferences] = useState('');
  const [referencesError, setReferencesError] = useState<string|null>(null);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [privacyError, setPrivacyError] = useState<string|null>(null);
  const [touched, setTouched] = useState<{[key:string]: boolean}>({});



  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    let hasError = false;
    
    // Validación campo a campo
    if (!fullName.trim()) {
      setFullNameError('El nombre es obligatorio.'); hasError = true;
    } else {
      setFullNameError(null);
    }
    const phoneClean = phone.replace(/\s+/g, '');
    const phoneOk = /^[0-9+\-()]{7,}$/.test(phoneClean);
    if (!phoneOk) {
      setPhoneError('El teléfono no es válido.'); hasError = true;
    } else {
      setPhoneError(null);
    }
    if (!salaryExpectation.trim()) {
      setSalaryExpectationError('La expectativa salarial es obligatoria.'); hasError = true;
    } else {
      setSalaryExpectationError(null);
    }
    if (!privacyAccepted) {
      setPrivacyError('Debes aceptar el aviso de privacidad.'); hasError = true;
    } else {
      setPrivacyError(null);
    }
    if (!email.trim()) { setEmailError('El correo es obligatorio.'); hasError = true; } else { setEmailError(null); }
    if (!address.trim()) { setAddressError('La dirección es obligatoria.'); hasError = true; } else { setAddressError(null); }
    if (!age.trim()) { setAgeError('La edad es obligatoria.'); hasError = true; } else { setAgeError(null); }
    if (!availability.trim()) { setAvailabilityError('La disponibilidad es obligatoria.'); hasError = true; } else { setAvailabilityError(null); }
    if (!experienceYears.trim()) { setExperienceYearsError('Los años de experiencia son obligatorios.'); hasError = true; } else { setExperienceYearsError(null); }
    if (!references.trim()) { setReferencesError('Las referencias son obligatorias.'); hasError = true; } else { setReferencesError(null); }
    
    if (hasError) {
      setTouched({fullName:true,phone:true,email:true,address:true,age:true,availability:true,experienceYears:true,salaryExpectation:true,references:true,privacyAccepted:true});
      return;
    }

    // Enviar a Formspree
    try {
      const formData = new FormData();
      formData.append('vacancy', vacancy.key);
      formData.append('vacancyTitle', vacancy.title);
      formData.append('fullName', fullName);
      formData.append('phone', phone);
      formData.append('email', email);
      formData.append('address', address);
      formData.append('age', age);
      formData.append('availability', availability);
      formData.append('experienceYears', experienceYears);
      formData.append('salaryExpectation', salaryExpectation);
      formData.append('references', references);
      formData.append('privacyAccepted', privacyAccepted ? 'Sí' : 'No');

      const response = await fetch('https://formspree.io/f/manblvnz', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        onSubmit({
          vacancy: vacancy.key,
          fullName,
          phone,
          email,
          address,
          age,
          availability,
          experienceYears,
          salaryExpectation,
          references,
          privacyAccepted
        });
      } else {
        const errorData = await response.json();
        console.error('Formspree error:', errorData);
        throw new Error('Error al enviar el formulario');
      }
    } catch (error) {
      console.error('Error:', error);
      setFullNameError('Hubo un error al enviar tu postulación. Por favor intenta de nuevo.');
    }
  };

  // Cerrar con ESC o click fuera
  React.useEffect(() => {
    const onKey = (ev: KeyboardEvent) => ev.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <>
      <style>
        {`
          @keyframes slideInDown {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          #applyModal input::placeholder,
          #applyModal select option:first-child {
            color: rgba(255, 255, 255, 0.6) !important;
            opacity: 1 !important;
          }
          #applyModal input:focus::placeholder {
            color: rgba(255, 255, 255, 0.4) !important;
          }
          #applyModal {
            max-width: 520px !important;
            overflow-x: hidden !important;
            overflow-y: auto !important;
            padding: 20px 10px !important;
          }
          #applyModal .modal-dialog {
            overflow: visible !important;
            position: static !important;
            width: 100% !important;
            max-width: 520px !important;
            margin: 20px auto !important;
          }
          #applyModal .modal-content {
            overflow: visible !important;
            position: static !important;
            width: 100% !important;
            max-width: 100% !important;
          }
          #applyModal .modal-body {
            overflow: visible !important;
            padding: 0 24px 24px !important;
          }
          #applyModal .row {
            overflow: visible !important;
            margin: 0 !important;
          }
          #applyModal .col-12 {
            padding-left: 12px !important;
            padding-right: 12px !important;
          }
          #applyModal select[name="availability"] {
            width: 100% !important;
            max-width: 100% !important;
            box-sizing: border-box !important;
            position: relative;
            z-index: 10;
          }
          #applyModal select[name="availability"] option {
            white-space: normal;
            word-wrap: break-word;
            background: #1a1a2e !important;
            color: #ffffff !important;
            border: none !important;
          }
          #applyModal .form-group {
            position: relative;
            overflow: hidden;
          }
          #applyModal .form-select {
            position: relative;
            z-index: 10;
            width: 100% !important;
            max-width: 100% !important;
          }
          #applyModal .form-select option {
            background: #1a1a2e !important;
            color: #ffffff !important;
            border: none !important;
            width: 100% !important;
            max-width: 100% !important;
          }
        `}
      </style>
      <div
        id="applyModal"
        role="dialog"
        aria-modal="true"
        className="modal fade show"
        style={{ 
          display: 'block', 
          background: 'rgba(0,0,0,0.9)', 
          minHeight: '100vh', 
          padding: 'clamp(10px, 3vw, 20px)',
          overflowY: 'auto',
          overflowX: 'hidden',
          zIndex: 1050
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
      <div className="modal-dialog modal-dialog-centered w-100 mx-auto" style={{
        maxWidth: 'clamp(300px, 90vw, 520px)',
        margin: '0 auto',
        overflow: 'visible'
      }}>
        <div className="modal-content text-light border-0 w-100" style={{
          borderRadius: '16px',
          background: 'linear-gradient(145deg, #0f1419 0%, #1a1f2e 100%)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.1)',
          overflow: 'visible',
          position: 'static'
        }}>
          <div className="modal-header text-light border-0 position-relative" style={{
            background: 'transparent',
            borderRadius: '16px 16px 0 0',
            padding: '20px 24px 16px'
          }}>
            <h5 className="modal-title m-0 fw-bold" style={{
              fontSize: '1.25rem',
              color: '#ffffff'
            }}>Postulación — {vacancy.title}</h5>
            <button 
              type="button" 
              className="position-absolute top-0 end-0 m-3"
              aria-label="Close" 
              onClick={onClose}
              style={{
                background: 'rgba(255,255,255,0.1)',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                fontSize: '18px',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              ✕
            </button>
          </div>
          <form 
            className="modal-body text-light"
            onSubmit={submit}
            style={{
              background: 'transparent',
              padding: '0 24px 24px',
              overflow: 'visible'
            }}
          >
            {/* Mensajes de error campo a campo */}
            <div className="row g-3">
              <div className="col-12 col-sm-6">
                <label className="form-label fw-semibold mb-2" style={{color: '#ffffff', fontSize: '0.95rem'}}>Nombre completo *</label>
                <input 
                  name="fullName" 
                  className={`form-control${fullNameError && (touched.fullName||touched.submit) ? ' is-invalid' : ''}`} 
                  value={fullName} 
                  onChange={e => setFullName(e.target.value)} 
                  onBlur={(e) => {
                    setTouched(t => ({...t, fullName:true}));
                    e.target.style.setProperty('--placeholder-opacity', '0.6');
                  }}
                  onFocus={(e) => e.target.style.setProperty('--placeholder-opacity', '0.4')}
                  placeholder="Ej. Juan Pérez García"
                  style={{
                    background: 'rgba(255,255,255,0.12)',
                    border: '1px solid rgba(255,255,255,0.25)',
                    borderRadius: '12px',
                    color: '#ffffff',
                    padding: '12px 16px',
                    fontSize: '0.95rem'
                  }}
                />
                {fullNameError && (touched.fullName||touched.submit) && <div className="invalid-feedback">{fullNameError}</div>}
              </div>
              <div className="col-12 col-sm-6">
                <label className="form-label fw-semibold mb-2" style={{color: '#ffffff', fontSize: '0.95rem'}}>Teléfono *</label>
                <input 
                  name="phone" 
                  className={`form-control${phoneError && (touched.phone||touched.submit) ? ' is-invalid' : ''}`} 
                  value={phone} 
                  onChange={e => setPhone(e.target.value)} 
                  onBlur={() => setTouched(t => ({...t, phone:true}))}
                  placeholder="+52 55 1234 5678"
                  style={{
                    background: 'rgba(255,255,255,0.12)',
                    border: '1px solid rgba(255,255,255,0.25)',
                    borderRadius: '12px',
                    color: '#ffffff',
                    padding: '12px 16px',
                    fontSize: '0.95rem'
                  }}
                />
                {phoneError && (touched.phone||touched.submit) && <div className="invalid-feedback">{phoneError}</div>}
              </div>

              <div className="col-12 col-sm-6">
                <label className="form-label fw-semibold mb-2" style={{color: '#ffffff', fontSize: '0.95rem'}}>Correo electrónico *</label>
                <input 
                  name="email" 
                  type="email" 
                  className={`form-control${emailError && (touched.email||touched.submit) ? ' is-invalid' : ''}`} 
                  value={email} 
                  onChange={e => setEmail(e.target.value)} 
                  onBlur={() => setTouched(t => ({...t, email:true}))}
                  placeholder="correo@ejemplo.com"
                  style={{
                    background: 'rgba(255,255,255,0.12)',
                    border: '1px solid rgba(255,255,255,0.25)',
                    borderRadius: '12px',
                    color: '#ffffff',
                    padding: '12px 16px',
                    fontSize: '0.95rem'
                  }}
                />
                {emailError && (touched.email||touched.submit) && <div className="invalid-feedback">{emailError}</div>}
              </div>
              <div className="col-12 col-sm-6">
                <label className="form-label fw-semibold mb-2" style={{color: '#ffffff', fontSize: '0.95rem'}}>Dirección *</label>
                <input 
                  name="address" 
                  className={`form-control${addressError && (touched.address||touched.submit) ? ' is-invalid' : ''}`} 
                  value={address} 
                  onChange={e => setAddress(e.target.value)} 
                  onBlur={() => setTouched(t => ({...t, address:true}))}
                  placeholder="Calle, Colonia, Ciudad"
                  style={{
                    background: 'rgba(255,255,255,0.12)',
                    border: '1px solid rgba(255,255,255,0.25)',
                    borderRadius: '12px',
                    color: '#ffffff',
                    padding: '12px 16px',
                    fontSize: '0.95rem'
                  }}
                />
                {addressError && (touched.address||touched.submit) && <div className="invalid-feedback">{addressError}</div>}
              </div>

              <div className="col-12 col-sm-4">
                <label className="form-label fw-semibold mb-2" style={{color: '#ffffff', fontSize: '0.95rem'}}>Edad *</label>
                <input 
                  name="age" 
                  type="number" 
                  className={`form-control${ageError && (touched.age||touched.submit) ? ' is-invalid' : ''}`} 
                  min={16} 
                  max={80} 
                  value={age} 
                  onChange={e => setAge(e.target.value)} 
                  onBlur={() => setTouched(t => ({...t, age:true}))}
                  placeholder="25"
                  style={{
                    background: 'rgba(255,255,255,0.12)',
                    border: '1px solid rgba(255,255,255,0.25)',
                    borderRadius: '12px',
                    color: '#ffffff',
                    padding: '12px 16px',
                    fontSize: '0.95rem'
                  }}
                />
                {ageError && (touched.age||touched.submit) && <div className="invalid-feedback">{ageError}</div>}
              </div>
              <div className="col-12">
                <label className="form-label fw-semibold mb-2" style={{color: '#ffffff', fontSize: '0.95rem'}}>Disponibilidad *</label>
                <div className="form-group">
                  <select 
                    name="availability"
                    value={availability}
                    onChange={(e) => setAvailability(e.target.value)}
                    className={`form-select ${availabilityError && (touched.availability||touched.submit) ? 'is-invalid' : ''}`}
                    style={{
                      backgroundColor: '#1a1a2e',
                      border: '1px solid rgba(255, 215, 0, 0.3)',
                      borderRadius: '8px',
                      color: '#ffffff',
                      padding: '12px 16px',
                      fontSize: '0.95rem',
                      backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 20 20\'%3e%3cpath stroke=\'%23ffffff\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'1.5\' d=\'m6 8 4 4 4-4\'/%3e%3c/svg%3e")',
                      backgroundPosition: 'right 12px center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: '16px',
                      paddingRight: '40px'
                    }}
                  >
                    <option value="" disabled style={{background: '#1a1a2e', color: '#ffffff'}}>Selecciona una opción</option>
                    <option value="tiempo-completo" style={{background: '#1a1a2e', color: '#ffffff'}}>Tiempo completo</option>
                    <option value="solo-fines-de-semana" style={{background: '#1a1a2e', color: '#ffffff'}}>Solo fines de semana</option>
                    <option value="medio-tiempo" style={{background: '#1a1a2e', color: '#ffffff'}}>Medio tiempo</option>
                  </select>
                </div>
                {availabilityError && (touched.availability||touched.submit) && <div className="invalid-feedback">{availabilityError}</div>}
              </div>
              <div className="col-12 col-sm-4">
                <label className="form-label fw-semibold mb-2" style={{color: '#ffffff', fontSize: '0.95rem'}}>Años de experiencia *</label>
                <input 
                  name="experienceYears" 
                  type="number" 
                  className={`form-control${experienceYearsError && (touched.experienceYears||touched.submit) ? ' is-invalid' : ''}`} 
                  min={0} 
                  max={40} 
                  value={experienceYears} 
                  onChange={e => setExperienceYears(e.target.value)} 
                  onBlur={() => setTouched(t => ({...t, experienceYears:true}))}
                  placeholder="2"
                  style={{
                    background: 'rgba(255,255,255,0.12)',
                    border: '1px solid rgba(255,255,255,0.25)',
                    borderRadius: '12px',
                    color: '#ffffff',
                    padding: '12px 16px',
                    fontSize: '0.95rem'
                  }}
                />
                {experienceYearsError && (touched.experienceYears||touched.submit) && <div className="invalid-feedback">{experienceYearsError}</div>}
              </div>

              <div className="col-12 col-sm-6">
                <label className="form-label fw-semibold mb-2" style={{color: '#ffffff', fontSize: '0.95rem'}}>Expectativa salarial *</label>
                <input 
                  name="salaryExpectation" 
                  className={`form-control${salaryExpectationError && (touched.salaryExpectation||touched.submit) ? ' is-invalid' : ''}`} 
                  value={salaryExpectation} 
                  onChange={e => setSalaryExpectation(e.target.value)} 
                  onBlur={() => setTouched(t => ({...t, salaryExpectation:true}))} 
                  placeholder="$8,000 MXN / mes"
                  style={{
                    background: 'rgba(255,255,255,0.12)',
                    border: '1px solid rgba(255,255,255,0.25)',
                    borderRadius: '12px',
                    color: '#ffffff',
                    padding: '12px 16px',
                    fontSize: '0.95rem'
                  }}
                />
                {salaryExpectationError && (touched.salaryExpectation||touched.submit) && <div className="invalid-feedback">{salaryExpectationError}</div>}
              </div>
              <div className="col-12 col-sm-6">
                <label className="form-label fw-semibold mb-2" style={{color: '#ffffff', fontSize: '0.95rem'}}>Referencias *</label>
                <input 
                  name="references" 
                  className={`form-control${referencesError && (touched.references||touched.submit) ? ' is-invalid' : ''}`} 
                  value={references} 
                  onChange={e => setReferences(e.target.value)} 
                  onBlur={() => setTouched(t => ({...t, references:true}))} 
                  placeholder="Juan Pérez - 55 1234 5678"
                  style={{
                    background: 'rgba(255,255,255,0.12)',
                    border: '1px solid rgba(255,255,255,0.25)',
                    borderRadius: '12px',
                    color: '#ffffff',
                    padding: '12px 16px',
                    fontSize: '0.95rem'
                  }}
                />
                {referencesError && (touched.references||touched.submit) && <div className="invalid-feedback">{referencesError}</div>}
              </div>


              <div className="col-12">
                <div className="form-check d-flex align-items-start gap-3" style={{padding: '16px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)'}}>
                  <input
                    name="privacyAccepted"
                    className="form-check-input mt-1"
                    type="checkbox"
                    id="privacyCheck"
                    checked={privacyAccepted}
                    value="true"
                    onChange={(e) => setPrivacyAccepted(e.target.checked)}
                    style={{
                      width: '20px',
                      height: '20px',
                      background: privacyAccepted ? '#ffd740' : 'rgba(255,255,255,0.1)',
                      border: privacyError && (touched.privacyAccepted||touched.submit) ? '2px solid #dc3545' : '2px solid rgba(255,255,255,0.3)',
                      borderRadius: '4px'
                    }}
                  />
                  <div className="flex-grow-1">
                    <label className="form-check-label" htmlFor="privacyCheck" style={{color: '#ffffff', fontSize: '0.95rem', lineHeight: '1.4', cursor: 'pointer'}}>
                      Acepto el aviso de privacidad y el uso de mis datos para fines de reclutamiento. *
                    </label>
                    {privacyError && (touched.privacyAccepted||touched.submit) && <div className="invalid-feedback d-block mt-1">{privacyError}</div>}
                  </div>
                </div>
              </div>
            </div>

            <div className="d-flex flex-column flex-sm-row justify-content-end gap-3 mt-4">
              <button 
                type="button" 
                className="btn btn-outline-light order-2 order-sm-1" 
                onClick={onClose}
                style={{
                  borderRadius: '12px',
                  padding: '12px 24px',
                  border: '2px solid rgba(255,255,255,0.3)',
                  background: 'transparent',
                  color: '#ffffff',
                  fontWeight: '600',
                  fontSize: '0.95rem'
                }}
              >
                Cancelar
              </button>
              <button 
                type="submit" 
                className="btn order-1 order-sm-2"
                style={{
                  background: 'linear-gradient(135deg, #ffd740 0%, #ffb300 100%)',
                  border: 'none',
                  borderRadius: '12px',
                  padding: '12px 32px',
                  color: '#1a1a2e',
                  fontWeight: '700',
                  fontSize: '0.95rem',
                  boxShadow: '0 4px 12px rgba(255, 215, 64, 0.3)'
                }}
              >
                Enviar postulación
              </button>
            </div>
          </form>
        </div>
      </div>
      </div>
    </>
  );
}
