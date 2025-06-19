import React, { useState } from 'react';
import { useState } from 'react';
import { Product } from '../data/menuData';
import styles from './CocktailCard.module.css';
import CocktailModal from './CocktailModal';
import { getCocktails } from '../utils/cocktails';

const COCKTAILS = getCocktails();

interface CocktailCardProps {
  cocktail: Product;
}

const CocktailCard: React.FC<CocktailCardProps> = ({ cocktail }) => {
  const [showImageModal, setShowImageModal] = useState(false);

  const handleImageClick = () => setShowImageModal(true);
  const handleClose = () => setShowImageModal(false);

  return (
    <div className={styles.cocktailCard}>
      <div className={styles.cocktailImage} onClick={handleImageClick}>
        <img src={cocktail.image} alt={cocktail.name} />
      </div>
      <div className={styles.cocktailContent}>
        <div className={styles.cocktailInfo}>
          <h3>{cocktail.name}</h3>
          <p className={styles.price}>${cocktail.prices[0].value}</p>
        </div>
        <p className={styles.ingredients} onClick={handleImageClick}>{cocktail.description}</p>
      </div>
      <CocktailModal 
        show={showImageModal} 
        onClose={handleClose} 
        cocktails={COCKTAILS} 
        initialCocktailId={cocktail.id}
      />
    </div>
  );
};

export default CocktailCard;

interface CocktailCardProps {
  cocktail: Product;
}

const CocktailCard: React.FC<CocktailCardProps> = ({ cocktail }) => {
  const [showImageModal, setShowImageModal] = useState(false);

  const handleImageClick = () => setShowImageModal(true);
  const handleClose = () => setShowImageModal(false);

  return (
    <div className={styles.cocktailCard}>
      <div className={styles.cocktailImage} onClick={handleImageClick}>
        <img src={cocktail.image} alt={cocktail.name} />
      </div>
      <div className={styles.cocktailContent}>
        <div className={styles.cocktailInfo}>
          <h3>{cocktail.name}</h3>
          <p className={styles.price}>${cocktail.prices[0].value}</p>
        </div>
        <p className={styles.ingredients} onClick={handleImageClick}>{cocktail.description}</p>
      </div>
      <CocktailModal 
        show={showImageModal} 
        onClose={handleClose} 
        cocktails={COCKTAILS} 
        initialCocktailId={cocktail.id}
      />
    </div>
  );
};

export default CocktailCard;
