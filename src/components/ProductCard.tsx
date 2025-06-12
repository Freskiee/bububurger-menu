import React, { useState } from 'react';
import { Product } from '../data/menuData';
import Modal from 'react-bootstrap/Modal';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div 
        className="product-card p-3 mb-3"
        onClick={() => setShowModal(true)}
        style={{ cursor: 'pointer' }}
      >
        <img 
          src={product.image} 
          alt={product.name}
          className="product-image"
        />
        <div className="product-content">
          <h6 className="product-title">
            {product.name}
          </h6>
          <p className="product-description">
            {product.description}
          </p>
          <div className="product-price">
            {product.prices.map((option, idx) => (
              <span key={option.label}>
                {idx > 0 && <span> | </span>}
                {option.label
                  ? <span style={{ color: 'var(--primary-orange)', fontWeight: 700 }}>{option.label}: </span>
                  : null}
                <span style={{ color: 'var(--primary-orange)', fontWeight: 700 }}>${option.value}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        size="lg"
        className="product-modal"
      >
        <Modal.Header closeButton className="modal-header-custom">
          <Modal.Title className="fw-bold">
            {product.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-6">
              <img 
                src={product.image} 
                alt={product.name}
                className="img-fluid rounded"
                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
              />
            </div>
            <div className="col-md-6">
              <h4 className="mb-3">{product.name}</h4>
              <p className="text-muted mb-4">{product.description}</p>
              <div className="product-price mb-4">
                {product.prices.map((option, idx) => (
                  <span key={option.label}>
                    {idx > 0 && <span> | </span>}
                    {option.label
                      ? <span style={{ color: 'var(--primary-orange)', fontWeight: 700 }}>{option.label}: </span>
                      : null}
                    <span style={{ color: 'var(--primary-orange)', fontWeight: 700 }}>${option.value}</span>
                  </span>
                ))}
              </div>
              <button 
                className="btn btn-primary w-100"
                onClick={() => setShowModal(false)}
              >
                Cerrar
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProductCard;