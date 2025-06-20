import React from 'react';
const fresa = '/menu-images/malteada-fresa.png';
const oreo = '/menu-images/malteada-oreo.png';
const mazapan = '/menu-images/malteada-mazapan.png';
const chocolate = '/menu-images/malteada-chocolate.png';
const algodon = '/menu-images/malteada-algodon.png';
const frutos = '/menu-images/malteada-frutos.png';
const vainilla = '/menu-images/malteada-vainilla.png';
const chicleAzul = '/menu-images/malteada-chicle-azul.png';
const chicleRosa = '/menu-images/malteada-chicle-rosa.png';



interface MalteadasModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Definir los tipos de las malteadas
const MALTEADA_IDS = ['OREO', 'MAZAPÁN DE LA ROSA', 'ALGODÓN DE AZÚCAR', 'CHOCOLATE', 'FRESA', 'FRUTOS ROJOS', 'VAINILLA', 'CHICLE AZUL', 'CHICLE ROSA'] as const;
type MalteadaId = typeof MALTEADA_IDS[number];

const pastelColors = [
  '#ff0080', // fucsia
  '#00b0ff', // azul eléctrico
  '#ff6d00', // naranja intenso
  '#00e676', // verde lima
  '#8f00ff'  // violeta
];

function multicolorText(text: string) {
  return (
    <span>
      {text.split('').map((char, i) => (
        <span key={i} style={{ color: pastelColors[i % pastelColors.length], fontWeight: 900 }}>
          {char}
        </span>
      ))}
    </span>
  );
}

const malteadaColors = {
  OREO: '#78634e', // oreo
  'MAZAPÁN DE LA ROSA': '#c6a271', // mazapan de la rosa
  'ALGODÓN DE AZÚCAR': '#e2a9bd', // blanco con toque de amarillo
  CHOCOLATE: '#48200f', // café
  FRESA: '#e2a9bd', // rosa claro
  'FRUTOS ROJOS': '#910024', // rojo
  VAINILLA: '#c7af74', // crema
  'CHICLE AZUL': '#0081A1', // azul
  'CHICLE ROSA': '#CE5F74' // rosa pastel
};

const malteadaImages = {
  OREO: oreo,
  'MAZAPÁN DE LA ROSA': mazapan,
  'ALGODÓN DE AZÚCAR': algodon,
  CHOCOLATE: chocolate,
  FRESA: fresa,
  'FRUTOS ROJOS': frutos,
  VAINILLA: vainilla,
  'CHICLE AZUL': chicleAzul,
  'CHICLE ROSA': chicleRosa,
};

export const MalteadasModal: React.FC<MalteadasModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const sabores: Array<{ id: MalteadaId; level: number }> = [
    { id: 'OREO', level: 1 },
    { id: 'MAZAPÁN DE LA ROSA', level: 1 },
    { id: 'ALGODÓN DE AZÚCAR', level: 1 },
    { id: 'CHOCOLATE', level: 1 },
    { id: 'FRESA', level: 1 },
    { id: 'FRUTOS ROJOS', level: 2 },
    { id: 'VAINILLA', level: 2 },
    { id: 'CHICLE AZUL', level: 3 },
    { id: 'CHICLE ROSA', level: 3 }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <div className="mb-4">
          {multicolorText('BUBUMALTEADAS 🍧')}
        </div>
        <div className="space-y-2">
          {sabores.map((sabor) => (
            <div 
              key={sabor.id} 
              className="flex items-center justify-between gap-3 p-2 rounded-md"
              style={{ backgroundColor: malteadaColors[sabor.id] }}
            >
              <span className="font-bold">
                {sabor.id}
              </span>
              <img 
                src={malteadaImages[sabor.id]} 
                alt={sabor.id} 
                className="w-8 h-8 rounded-full" 
              />
            </div>
          ))}
        </div>
        <button 
          onClick={onClose} 
          className="mt-4 w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};
