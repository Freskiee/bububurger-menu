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
        <div className="row align-items-center">
          <div className="col-auto">
            <img 
              src={product.image} 
              alt={product.name}
              className="product-image"
            />
          </div>
          <div className="col">
            <h6 className="fw-bold mb-1">
              {product.name}
            </h6>
            <p className="text-muted mb-2 small">
              {product.description}
            </p>
            <div className="product-price">
              ${product.price}
              {product.doublePrice && (
                <span className="ms-2 text-muted">
                  | Doble: ${product.doublePrice}
                </span>
              )}
            </div>
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
                ${product.price}
                {product.doublePrice && (
                  <span className="ms-2 text-muted">
                    | Doble: ${product.doublePrice}
                  </span>
                )}
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