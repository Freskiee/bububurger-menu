import React, { useState } from 'react';
import styles from './CocktailGrid.module.css';
import { Product } from '../data/menuData';
import CocktailModal from './CocktailModal';

interface CocktailGridProps {
  cocktails: Product[];
}

interface CocktailCardProps {
  cocktail: Product;
}

const COCKTAILS: Product[] = [
  {
    id: 'a4_1',
    name: 'El Coscorrón',
    description: 'Bacardí de Coco, Leche Deslactosada, Calahua y Coco Rallado.',
    prices: [{ label: 'Precio', value: 160 }],
    image: '/menu-images/coscorron.png'
  },
  {
    id: 'a4_2',
    name: 'El Diablo',
    description: 'Tequila, Agua Mineral, Limón, Jarabe Natural, Vino Tinto y Escarchado de Chamoy con Tajín.',
    prices: [{ label: 'Precio', value: 145 }],
    image: '/menu-images/diablo-coc.png'
  },
  {
    id: 'a4_3',
    name: 'La Conga',
    description: 'Ron Malibu, Jugo de Piña, Jugo de Naranja y Granadina.',
    prices: [{ label: 'Precio', value: 145 }],
    image: '/menu-images/conga.png'
  },
  {
    id: 'a4_4',
    name: 'La Chaqueta',
    description: 'Mezcal Espadín Joven, Calahua, Jugo de Piña y Granadina, Shakeado.',
    prices: [{ label: 'Precio', value: 160 }],
    image: '/menu-images/chaqueta.png'
  },
  {
    id: 'a4_5',
    name: 'El Sugar Daddy',
    description: 'Ron Bacardí Blanco, Whisky, Tequila, Ginebra, Limón, Jugo de Arándano y Escarchado de Fresa.',
    prices: [{ label: 'Precio', value: 165 }],
    image: '/menu-images/sugar-daddy.png'
  },
  {
    id: 'a4_6',
    name: 'Paloma de Fresa',
    description: 'Tequila Reposado, Jarabe de Fresa, Fresas, Refresco de Toronja, Chamoy, Tajín, Limón y Sal.',
    prices: [{ label: 'Precio', value: 165 }],
    image: '/menu-images/paloma-fresa.png'
  },
  {
    id: 'a4_7',
    name: 'Paloma de Mango',
    description: 'Tequila Reposado, Jarabe de Mango, Mango, Refresco de Toronja, Chamoy, Tajín, Limón y Sal.',
    prices: [{ label: 'Precio', value: 165 }],
    image: '/menu-images/paloma-mango.png'
  },
  {
    id: 'a4_8',
    name: 'Gin Frutos Rojos',
    description: 'Ginebra, Jarabe de Frutos Rojos, Frutos Rojos y Agua Tónica.',
    prices: [{ label: 'Precio', value: 170 }],
    image: '/menu-images/gin-frutosr.png'
  },
  {
    id: 'a4_9',
    name: 'Gin Mango',
    description: 'Ginebra, Jarabe de Mango, Mango y Agua Tónica.',
    prices: [{ label: 'Precio', value: 170 }],
    image: '/menu-images/gin-mango.png'
  },
  {
    id: 'a4_10',
    name: 'La Pepa Rosada',
    description: 'Ron Bacardí Blanco, Leche Evaporada, Leche Deslactosada, Jarabe de Cerezas, Granadina, Canela en Polvo y Cerezas.',
    prices: [{ label: 'Precio', value: 165 }],
    image: '/menu-images/pepa-rosada.png'
  },
  {
    id: 'a4_11',
    name: 'Margarita Frozen',
    description: 'Tequila, Triple Seco; de Fresa, Mango o Tamarindo, Escarchado de Tajín.',
    prices: [{ label: 'Precio', value: 180 }],
    image: '/menu-images/margarita.png'
  },
  {
    id: 'a4_12',
    name: 'Whisky Summer',
    description: 'Whisky, Jarabe Natural, Limón, Agua Mineral, Shakeado.',
    prices: [{ label: 'Precio', value: 180 }],
    image: '/menu-images/whisky-summer.png'
  }
];

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

const CocktailGrid: React.FC = () => {
  return (
    <div className={styles.cocktailGrid}>
      {COCKTAILS.map((cocktail) => (
        <CocktailCard key={cocktail.id} cocktail={cocktail} />
      ))}
    </div>
  );
};

export default CocktailGrid;
