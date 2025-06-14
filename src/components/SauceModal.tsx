import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import { sauceTranslations, uiTranslations } from '../i18n/menu';

interface SauceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SauceModal: React.FC<SauceModalProps> = ({ isOpen, onClose }) => {
  const { language } = useContext(LanguageContext) as { language: 'es' | 'en' };
  const t = uiTranslations;

  if (!isOpen) return null;

  const sauces = [
    { id: 'bbqMiel', level: 1 },
    { id: 'ajoParmesano', level: 1 },
    { id: 'teriyaki', level: 1 },
    { id: 'bbq', level: 2 },
    { id: 'hotBbq', level: 2 },
    { id: 'tamarindo', level: 2 },
    { id: 'maggi', level: 2 },
    { id: 'cajun', level: 3 },
    { id: 'brava', level: 3 },
    { id: 'mangoHabanero', level: 4 },
    { id: 'requeteMacho', level: 5 }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <h2 className="text-2xl font-bold mb-4">
          {t.sauceTitle[language]}
        </h2>
        <p className="text-gray-600 mb-4">
          {t.sauceOrder[language]}
        </p>
        <div className="space-y-2">
          {sauces.map((sauce) => (
            <div key={sauce.id} className="flex items-center justify-between">
              <span>{sauceTranslations[sauce.id][language]}</span>
              <div className="flex space-x-1">
                {[...Array(sauce.level)].map((_, i) => (
                  <span key={i} className="text-red-500">🌶️</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={onClose}
          className="mt-6 w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors"
        >
          {t.close[language]}
        </button>
      </div>
    </div>
  );
}; 