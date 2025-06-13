import olimpica from "/menu-images/olimpica.png";
import mojitoFrutosRojos from "/menu-images/mojito-fr.png";
import dedosQueso from "/menu-images/dedos-queso.png";
import baconWestern from "/menu-images/bacon_doble.png";
import diablo from "/menu-images/diablo.png";
import jalapeños from "/menu-images/jalapenios.png";
import nuggets from "/menu-images/nuggets.png";
import aros from "/menu-images/aros_de_cebolla.png";
import nachosChilibean from "/menu-images/nachos.png";
import costillasElote from "/menu-images/costillas-elote.png";
import eloteAsado from "/menu-images/elote-asado.png";

export interface ProductPriceOption {
  label: string;
  value: number;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  prices: ProductPriceOption[];
  image: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  products: Product[];
}

export const menuCategories: Category[] = [
  {
    id: "favoritos",
    name: "¡Los Más Pedidos! 🔥",
    icon: "⭐",
    products: [
      {
        id: "f1",
        name: "BUBUBURGER OLÍMPICA",
        description: "Ex-qui-si-ta, simplemente el mejor balance de sabor, 100 gr. de carne de res sazonada con la receta secreta de la casa, gratinada con queso manchego, tocino, y un par de deliciosos aros de cebolla bañados en aderezo blue-cheese.",
        prices: [
          { label: "", value: 170 },
          { label: "Doble", value: 185 }
        ],
        image: olimpica
      },
      {
        id: "f2", 
        name: "MOJITO FRUTOS ROJOS",
        description: "Refrescante combinación de ron blanco con frutos rojos naturales, hojas de menta y un toque de limón, servido sobre hielo en vaso de litro. Ideal para quienes buscan un sabor equilibrado entre lo frutal y lo herbal.",
        prices: [
          { label: "1/2", value: 85 },
          { label: "1 Lt", value: 145 }
        ],
        image: mojitoFrutosRojos
      },
      {
        id: "f3",
        name: "BUBU-DEDOS DE QUESO",
        description: "6 Deditos de queso fritos por fuera con un toque delicado de especias y por dentro queso mozzarella derretido, acompañados con salsa tipo italiana. ¡Cuidado no te muerdas tus propios dedos, que te van a quedar cortos para pedir más!",
        prices: [
          { label: "", value: 135 }
        ],
        image: dedosQueso
      },
      {
        id: "f4",
        name: "BACON WESTERN",
        description: "Esta hamburguesa te hará sentir en el viejo Oeste por su selecto tocino bien doradito, su queso manchego y un delicado toque de salsa BBQ. ¡Así que ponte las botas, el sombrero de cowboy y prepárate para bailar el Payaso de Rodeo… ajúa! Lechuga, jitomate, cebolla caramelizada, pepinillos, chiles, catsup, mostaza y mayonesa.",
        prices: [
          { label: "", value: 170 },
          { label: "Doble", value: 185 }
        ],
        image: baconWestern
      },
      {
        id: "f5", 
        name: "EL DIABLO",
        description: "Mezcla intensa y refrescante de tequila, vino tinto y agua mineral, con un toque de limón y jarabe natural. Servida con escarchado de chamoy y tajín para un acabado picante y equilibrado.",
        prices: [
          { label: "1 Lt", value: 145 }
        ],
        image: diablo
      },
    ]
  },
  {
    id: "entradas",
    name: "Entradas",
    icon: "🍿",
    products: [
      {
        id: "e1",
        name: "BUBU-DEDOS DE QUESO",
        description: "6 Deditos de queso fritos por fuera con un toque delicado de especias y por dentro queso mozzarella derretido, acompañados con salsa tipo italiana. ¡Cuidado no te muerdas tus propios dedos, que te van a quedar cortos para pedir más!",
        prices: [
          { label: "", value: 135 }
        ],
        image: dedosQueso
      },
      {
        id: "e2",
        name: "BUBU-CHILES RELLENOS",
        description: "6 Chiles jalapeños atrevidos rellenos de queso Philadelphia y empanizados por fuera, acompañados de Ketchup Heinz y queso amarillo tipo cheddar, ¡serán el remedio para tu antojo desenfrenado!",
        prices: [
          { label: "", value: 135 }
        ],
        image: jalapeños
      },
      {
        id: "e3",
        name: "BUBU-NUGGETS",
        description: "Nuestros Nuggets de pechuga de pollo Pilgrim’s Pride (10 pzs), ¡Crujientes y dorados siempre! Acompañados de Kétchup Heinz y queso amarillo tipo Cheddar.",
        prices: [
          { label: "", value: 135 }
        ],
        image: nuggets
      },
      {
        id: "e4",
        name: "BUBU-AROS DE CEBOLLA",
        description: "Perfectos aros de cebolla fritos y crujientes (10 pzs), acompañados con aderezo de blue cheese o ranch. ¡Te aseguramos que si los aros Olímpicos tuvieran sabor, a estos sabrían!",
        prices: [
          { label: "", value: 135 }
        ],
        image: aros
      },
      {
        id: "e5",
        name: "BUBU-NACHOS CHILIBEAN",
        description: "Crujientes nachos acompañados con una deliciosa mezcla de chili bean, a base de carne molida de res, frijoles, salsa italiana, servidos con rodajas de jalapeño y abundante queso amarillo tipo Cheddar. ¡Perfectos para compartir!",
        prices: [
          { label: "", value: 220 }
        ],
        image: nachosChilibean
      },
      {
        id: "e6",
        name: "COSTILLAS DE ELOTE AMARILLO",
        description: "Estas costillitas de elote dulce amarillo, bañaditas con salsa Hot BBQ, Cajun, Tajín y un toque de perejil deshidratado con limón te harán bailar como texano. Son perfectas para compartir y calmar tus antojos, ¡así que prepárate para chuparte los dedos!",
        prices: [
          { label: "", value: 170 }
        ],
        image: costillasElote
      },
      {
        id: "e7",
        name: "ELOTE ASADO",
        description: "Elote dulce amarillo asado a la parrilla, servido con un toque de sal y especias. Perfecto para acompañar cualquier platillo o disfrutar por sí solo con su sabor ahumado y natural.",
        prices: [
          { label: "", value: 75 }
        ],
        image: eloteAsado
      }
    ]
  },
  {
    id: "papas",
    name: "Papas",
    icon: "🍟",
    products: [
      {
        id: "p1",
        name: "Papas Bubu",
        description: "Papas fritas con nuestra mezcla especial de condimentos",
        prices: [
          { label: "Precio", value: 45 }
        ],
        image: "https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?auto=compress&cs=tinysrgb&w=300"
      },
      {
        id: "p2",
        name: "Papas con Queso",
        description: "Papas fritas cubiertas con queso cheddar derretido",
        prices: [
          { label: "Precio", value: 55 }
        ],
        image: "https://images.pexels.com/photos/2271107/pexels-photo-2271107.jpeg?auto=compress&cs=tinysrgb&w=300"
      },
      {
        id: "p3",
        name: "Papas Gajo",
        description: "Papas en gajos sazonadas con hierbas y especias",
        prices: [
          { label: "Precio", value: 50 }
        ],
        image: "https://images.pexels.com/photos/1586942/pexels-photo-1586942.jpeg?auto=compress&cs=tinysrgb&w=300"
      }
    ]
  },
  {
    id: "bububurgers",
    name: "Bububurgers",
    icon: "🍔",
    products: [
      {
        id: "b1",
        name: "Bububurger Clásica",
        description: "Carne de res, queso cheddar, lechuga, tomate, cebolla y salsa bubu",
        prices: [
          { label: "Sencillo", value: 140 },
          { label: "Doble", value: 180 }
        ],
        image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=300"
      },
      {
        id: "b2",
        name: "Bububurger Doble",
        description: "Doble carne, doble queso, lechuga, tomate y salsa especial",
        prices: [
          { label: "Precio", value: 180 },
          { label: "Doble Precio", value: 220 }
        ],
        image: "https://images.pexels.com/photos/2762942/pexels-photo-2762942.jpeg?auto=compress&cs=tinysrgb&w=300"
      },
      {
        id: "b3",
        name: "Bububurger Pollo",
        description: "Pechuga de pollo empanizada, lechuga, tomate y aderezo ranch",
        prices: [
          { label: "Precio", value: 135 }
        ],
        image: "https://images.pexels.com/photos/552056/pexels-photo-552056.jpeg?auto=compress&cs=tinysrgb&w=300"
      },
      {
        id: "b4",
        name: "Bububurger Vegetariana",
        description: "Hamburguesa de lentejas, aguacate, lechuga, tomate y aderezo vegano",
        prices: [
          { label: "Precio", value: 125 }
        ],
        image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=300"
      }
    ]
  },
  {
    id: "wings",
    name: "Ari-Wings y Boneless",
    icon: "🍗",
    products: [
      {
        id: "w1",
        name: "Ari-Wings BBQ",
        description: "10 alitas bañadas en salsa BBQ casera",
        prices: [
          { label: "Precio", value: 120 },
          { label: "Doble Precio", value: 200 }
        ],
        image: "https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?auto=compress&cs=tinysrgb&w=300"
      },
      {
        id: "w2",
        name: "Ari-Wings Buffalo",
        description: "10 alitas picantes con salsa buffalo y aderezo blue cheese",
        prices: [
          { label: "Precio", value: 125 }
        ],
        image: "https://images.pexels.com/photos/2271107/pexels-photo-2271107.jpeg?auto=compress&cs=tinysrgb&w=300"
      },
      {
        id: "w3",
        name: "Boneless Mango Habanero",
        description: "Trozos de pollo sin hueso en salsa mango habanero",
        prices: [
          { label: "Precio", value: 115 }
        ],
        image: "https://images.pexels.com/photos/616354/pexels-photo-616354.jpeg?auto=compress&cs=tinysrgb&w=300"
      }
    ]
  },
  {
    id: "hotdog",
    name: "Hot-Dog Jumbo",
    icon: "🌭",
    products: [
      {
        id: "h1",
        name: "Hot-Dog Clásico Jumbo",
        description: "Salchicha jumbo con mostaza, ketchup, cebolla y pepinillos",
        prices: [
          { label: "Precio", value: 75 }
        ],
        image: "https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=300"
      },
      {
        id: "h2",
        name: "Hot-Dog Mexicano",
        description: "Salchicha jumbo envuelta en tocino, frijoles, pico de gallo y aguacate",
        prices: [
          { label: "Precio", value: 95 }
        ],
        image: "https://images.pexels.com/photos/4518844/pexels-photo-4518844.jpeg?auto=compress&cs=tinysrgb&w=300"
      },
      {
        id: "h3",
        name: "Hot-Dog Chicago",
        description: "Salchicha con pepinillos, cebolla, tomate, chile sport y mostaza",
        prices: [
          { label: "Precio", value: 85 }
        ],
        image: "https://images.pexels.com/photos/4518845/pexels-photo-4518845.jpeg?auto=compress&cs=tinysrgb&w=300"
      }
    ]
  },
  {
    id: "costillas",
    name: "Costillas BBQ",
    icon: "🥩",
    products: [
      {
        id: "c1",
        name: "Costillas a la Parrilla",
        description: "Media orden de costillas tiernas con glaseado de miel",
        prices: [
          { label: "Precio", value: 180 }
        ],
        image: "https://images.pexels.com/photos/323682/pexels-photo-323682.jpeg?auto=compress&cs=tinysrgb&w=300"
      },
      {
        id: "c2",
        name: "Costillas Completas",
        description: "Orden completa de costillas BBQ con papas y ensalada",
        prices: [
          { label: "Precio", value: 280 }
        ],
        image: "https://images.pexels.com/photos/1539688/pexels-photo-1539688.jpeg?auto=compress&cs=tinysrgb&w=300"
      },
      {
        id: "c3",
        name: "Costillas Picantes",
        description: "Costillas con salsa chipotle y especias mexicanas",
        prices: [
          { label: "Precio", value: 190 }
        ],
        image: "https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&w=300"
      }
    ]
  },
  {
    id: "infantil",
    name: "Menú Infantil",
    icon: "🧒",
    products: [
      {
        id: "i1",
        name: "Mini Bububurger",
        description: "Hamburguesa pequeña con papas y jugo natural",
        prices: [
          { label: "Precio", value: 85 }
        ],
        image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=300"
      },
      {
        id: "i2",
        name: "Nuggets de Pollo",
        description: "6 nuggets dorados con papas y salsa dulce",
        prices: [
          { label: "Precio", value: 80 }
        ],
        image: "https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?auto=compress&cs=tinysrgb&w=300"
      },
      {
        id: "i3",
        name: "Quesadilla Infantil",
        description: "Quesadilla de queso con papas y fruta",
        prices: [
          { label: "Precio", value: 70 }
        ],
        image: "https://images.pexels.com/photos/4394612/pexels-photo-4394612.jpeg?auto=compress&cs=tinysrgb&w=300"
      }
    ]
  },
  {
    id: "bebidas",
    name: "Bebidas Sin Alcohol",
    icon: "🥤",
    products: [
      {
        id: "be1",
        name: "Limonada Natural",
        description: "Limonada fresca con menta y hielo",
        prices: [
          { label: "Precio", value: 35 }
        ],
        image: "https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=300"
      },
      {
        id: "be2",
        name: "Agua Fresca de Jamaica",
        description: "Refrescante agua de jamaica endulzada naturalmente",
        prices: [
          { label: "Precio", value: 30 }
        ],
        image: "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=300"
      },
      {
        id: "be3",
        name: "Refresco de Lata",
        description: "Coca Cola, Pepsi, Sprite o Fanta",
        prices: [
          { label: "Precio", value: 25 }
        ],
        image: "https://images.pexels.com/photos/50593/coca-cola-cold-drink-soft-drink-coke-50593.jpeg?auto=compress&cs=tinysrgb&w=300"
      }
    ]
  },
  {
    id: "malteadas",
    name: "Malteadas y Postres",
    icon: "🍦",
    products: [
      {
        id: "m1",
        name: "Malteada de Vainilla",
        description: "Cremosa malteada de vainilla con chantilly",
        prices: [
          { label: "Precio", value: 65 }
        ],
        image: "https://images.pexels.com/photos/103566/pexels-photo-103566.jpeg?auto=compress&cs=tinysrgb&w=300"
      },
      {
        id: "m2",
        name: "Malteada de Chocolate",
        description: "Malteada de chocolate belga con chips de chocolate",
        prices: [
          { label: "Precio", value: 70 }
        ],
        image: "https://images.pexels.com/photos/108370/pexels-photo-108370.jpeg?auto=compress&cs=tinysrgb&w=300"
      },
      {
        id: "m3",
        name: "Cheesecake de Fresa",
        description: "Delicioso cheesecake casero con fresas frescas",
        prices: [
          { label: "Precio", value: 85 }
        ],
        image: "https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&w=300"
      }
    ]
  },
  {
    id: "cafe",
    name: "Café y Tisanas",
    icon: "☕",
    products: [
      {
        id: "ca1",
        name: "Café Americano",
        description: "Café negro de grano selecto, servido caliente",
        prices: [
          { label: "Precio", value: 25 }
        ],
        image: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=300"
      },
      {
        id: "ca2",
        name: "Cappuccino",
        description: "Espresso con leche espumada y canela",
        prices: [
          { label: "Precio", value: 45 }
        ],
        image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=300"
      },
      {
        id: "ca3",
        name: "Té de Manzanilla",
        description: "Tisana relajante de manzanilla con miel",
        prices: [
          { label: "Precio", value: 30 }
        ],
        image: "https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=300"
      }
    ]
  },
  {
    id: "digestivos",
    name: "Digestivos y Aperitivos",
    icon: "🥃",
    products: [
      {
        id: "d1",
        name: "Tequila Blanco",
        description: "Tequila 100% agave, servido solo o con sal y limón",
        prices: [
          { label: "Precio", value: 80 }
        ],
        image: "https://images.pexels.com/photos/5947041/pexels-photo-5947041.jpeg?auto=compress&cs=tinysrgb&w=300"
      },
      {
        id: "d2",
        name: "Whisky en las Rocas",
        description: "Whisky premium servido con hielo",
        prices: [
          { label: "Precio", value: 120 }
        ],
        image: "https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=300"
      },
      {
        id: "d3",
        name: "Licor de Café",
        description: "Kahlúa servido con hielo y crema",
        prices: [
          { label: "Precio", value: 90 }
        ],
        image: "https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=300"
      }
    ]
  },
  {
    id: "bubuchelas",
    name: "Bubuchelas",
    icon: "🍺",
    products: [
      {
        id: "bu1",
        name: "Corona Extra",
        description: "Cerveza mexicana ligera y refrescante",
        prices: [
          { label: "Precio", value: 40 }
        ],
        image: "https://images.pexels.com/photos/52994/beer-slide-beer-glass-beer-mug-52994.jpeg?auto=compress&cs=tinysrgb&w=300"
      },
      {
        id: "bu2",
        name: "Modelo Especial",
        description: "Cerveza dorada con sabor equilibrado",
        prices: [
          { label: "Precio", value: 45 }
        ],
        image: "https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg?auto=compress&cs=tinysrgb&w=300"
      },
      {
        id: "bu3",
        name: "Cerveza Artesanal",
        description: "Cerveza local de barril, rotatoria",
        prices: [
          { label: "Precio", value: 60 }
        ],
        image: "https://images.pexels.com/photos/1267696/pexels-photo-1267696.jpeg?auto=compress&cs=tinysrgb&w=300"
      }
    ]
  },
  {
    id: "cockteles",
    name: "Cócteles de Color",
    icon: "🍹",
    products: [
      {
        id: "co1",
        name: "Piña Colada",
        description: "Cóctel tropical con piña, coco y ron",
        prices: [
          { label: "Precio", value: 95 }
        ],
        image: "https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg?auto=compress&cs=tinysrgb&w=300"
      },
      {
        id: "co2",
        name: "Blue Lagoon",
        description: "Cóctel azul con vodka, curacao y limón",
        prices: [
          { label: "Precio", value: 90 }
        ],
        image: "https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg?auto=compress&cs=tinysrgb&w=300"
      },
      {
        id: "co3",
        name: "Tequila Sunrise",
        description: "Tequila con jugo de naranja y granadina",
        prices: [
          { label: "Precio", value: 85 }
        ],
        image: "https://images.pexels.com/photos/616836/pexels-photo-616836.jpeg?auto=compress&cs=tinysrgb&w=300"
      }
    ]
  },
  {
    id: "mojitos",
    name: "Mojitos",
    icon: "🌿",
    products: [
      {
        id: "mo1",
        name: "Mojito Clásico",
        description: "Ron blanco, menta fresca, limón y agua mineral",
        prices: [
          { label: "Precio", value: 85 }
        ],
        image: "https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg?auto=compress&cs=tinysrgb&w=300"
      },
      {
        id: "mo2",
        name: "Mojito de Fresa",
        description: "Mojito tradicional con fresas naturales",
        prices: [
          { label: "Precio", value: 90 }
        ],
        image: "https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg?auto=compress&cs=tinysrgb&w=300"
      },
      {
        id: "mo3",
        name: "Mojito de Maracuyá",
        description: "Refrescante mojito con pulpa de maracuyá",
        prices: [
          { label: "Precio", value: 95 }
        ],
        image: "https://images.pexels.com/photos/616836/pexels-photo-616836.jpeg?auto=compress&cs=tinysrgb&w=300"
      }
    ]
  },
  {
    id: "destilados",
    name: "Destilados",
    icon: "🥃",
    products: [
      {
        id: "de1",
        name: "Ron Añejo",
        description: "Ron premium envejecido, servido solo",
        prices: [
          { label: "Precio", value: 110 }
        ],
        image: "https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=300"
      },
      {
        id: "de2",
        name: "Vodka Premium",
        description: "Vodka ruso de alta calidad, servido frío",
        prices: [
          { label: "Precio", value: 100 }
        ],
        image: "https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=300"
      },
      {
        id: "de3",
        name: "Mezcal Artesanal",
        description: "Mezcal oaxaqueño 100% agave",
        prices: [
          { label: "Precio", value: 130 }
        ],
        image: "https://images.pexels.com/photos/5947041/pexels-photo-5947041.jpeg?auto=compress&cs=tinysrgb&w=300"
      }
    ]
  },
  {
    id: "sidras",
    name: "Sidras",
    icon: "🍎",
    products: [
      {
        id: "s1",
        name: "Sidra de Manzana",
        description: "Sidra dulce de manzana fermentada",
        prices: [
          { label: "Precio", value: 55 }
        ],
        image: "https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg?auto=compress&cs=tinysrgb&w=300"
      },
      {
        id: "s2",
        name: "Sidra de Pera",
        description: "Sidra aromática de pera natural",
        prices: [
          { label: "Precio", value: 60 }
        ],
        image: "https://images.pexels.com/photos/616836/pexels-photo-616836.jpeg?auto=compress&cs=tinysrgb&w=300"
      },
      {
        id: "s3",
        name: "Sidra Seca",
        description: "Sidra tradicional con bajo contenido de azúcar",
        prices: [
          { label: "Precio", value: 65 }
        ],
        image: "https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg?auto=compress&cs=tinysrgb&w=300"
      }
    ]
  },
  {
    id: "bubucocteles",
    name: "Bubu-Cócteles",
    icon: "🍸",
    products: [
      {
        id: "bc1",
        name: "Bubu Martini",
        description: "Martini especial de la casa con gin premium",
        prices: [
          { label: "Precio", value: 120 }
        ],
        image: "https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=300"
      },
      {
        id: "bc2",
        name: "Bubu Manhattan",
        description: "Manhattan con whisky bourbon y vermut dulce",
        prices: [
          { label: "Precio", value: 115 }
        ],
        image: "https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=300"
      },
      {
        id: "bc3",
        name: "Bubu Old Fashioned",
        description: "Clásico old fashioned con azúcar mascabado",
        prices: [
          { label: "Precio", value: 125 }
        ],
        image: "https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=300"
      }
    ]
  }
];