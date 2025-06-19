import { menuCategories } from '../data/menuData';

export const getCocktails = () => {
  const alcoholicBeverages = menuCategories.find(category => category.id === 'alcoholicas');
  return alcoholicBeverages?.products || [];
};
