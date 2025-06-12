export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
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
    name: "Favoritos del Restaurante",
    icon: "⭐",
    products: [
      {
        id: "f1",
        name: "Bububurger Clásica",
        description: "Carne de res, queso cheddar, lechuga, tomate, cebolla y salsa bubu especial",
        price: 140,
        image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=300"
      },
      {
        id: "f2", 
        name: "Ari-Wings BBQ",
        description: "10 alitas bañadas en salsa BBQ casera, acompañadas de aderezo ranch",
        price: 120,
        image: "https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?auto=compress&cs=tinysrgb&w=300"
      },
      {
        id: "f3",
        name: "Costillas a la Parrilla",
        description: "Media orden de costillas tiernas con glaseado de miel y especias",
        price: 180,
        image: "https://images.pexels.com/photos/323682/pexels-photo-323682.jpeg?auto=compress&cs=tinysrgb&w=300"
      }
    ]
  },
  {
    id: "entradas",
    name: "Entradas",
    icon: "🥗",
    products: [
      {
        id: "e1",
        name: "Nachos Supremos",
        description: "Tortillas crujientes con queso derretido, jalapeños, guacamole y crema",
        price: 95,
        image: "https://images.pexels.com/photos/2741458/pexels-photo-2741458.jpeg?auto=compress&cs=tinysrgb&w=300"
      },
      {
        id: "e2",
        name: "Dedos de Queso",
        description: "Bastones de queso mozzarella empanizados, servidos con salsa marinara",
        price: 85,
        image: "https://images.pexels.com/photos/4394612/pexels-photo-4394612.jpeg?auto=compress&cs=tinysrgb&w=300"
      },
      {
        id: "e3",
        name: "Aros de Cebolla",
        description: "Crujientes aros de cebolla dorados, perfectos para compartir",
        price: 70,
        image: "https://images.pexels.com/photos/2271107/pexels-photo-2271107.jpeg?auto=compress&cs=tinysrgb&w=300"
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
        price: 45,
        image: "https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?auto=compress&cs=tinysrgb&w=300"
      },
      {
        id: "p2",
        name: "Papas con Queso",
        description: "Papas fritas cubiertas con queso cheddar derretido",
        price: 55,
        image: "https://images.pexels.com/photos/2271107/pexels-photo-2271107.jpeg?auto=compress&cs=tinysrgb&w=300"
      },
      {
        id: "p3",
        name: "Papas Gajo",
        description: "Papas en gajos sazonadas con hierbas y especias",
        price: 50,
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
        price: 140,
        image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=300"
      },
      {
        id: "b2",
        name: "Bububurger Doble",
        description: "Doble carne, doble queso, lechuga, tomate y salsa especial",
        price: 180,
        image: "https://images.pexels.com/photos/2762942/pexels-photo-2762942.jpeg?auto=compress&cs=tinysrgb&w=300"
      },
      {
        id: "b3",
        name: "Bububurger Pollo",
        description: "Pechuga de pollo empanizada, lechuga, tomate y aderezo ranch",
        price: 135,
        image: "https://images.pexels.com/photos/552056/pexels-photo-552056.jpeg?auto=compress&cs=tinysrgb&w=300"
      },
      {
        id: "b4",
        name: "Bububurger Vegetariana",
        description: "Hamburguesa de lentejas, aguacate, lechuga, tomate y aderezo vegano",
        price: 125,
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
        price: 120,
        image: "https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?auto=compress&cs=tinysrgb&w=300"
      },
      {
        id: "w2",
        name: "Ari-Wings Buffalo",
        description: "10 alitas picantes con salsa buffalo y aderezo blue cheese",
        price: 125,
        image: "https://images.pexels.com/photos/2271107/pexels-photo-2271107.jpeg?auto=compress&cs=tinysrgb&w=300"
      },
      {
        id: "w3",
        name: "Boneless Mango Habanero",
        description: "Trozos de pollo sin hueso en salsa mango habanero",
        price: 115,
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
        price: 75,
        image: "https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=300"
      },
      {
        id: "h2",
        name: "Hot-Dog Mexicano",
        description: "Salchicha jumbo envuelta en tocino, frijoles, pico de gallo y aguacate",
        price: 95,
        image: "https://images.pexels.com/photos/4518844/pexels-photo-4518844.jpeg?auto=compress&cs=tinysrgb&w=300"
      },
      {
        id: "h3",
        name: "Hot-Dog Chicago",
        description: "Salchicha con pepinillos, cebolla, tomate, chile sport y mostaza",
        price: 85,
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
        price: 180,
        image: "https://images.pexels.com/photos/323682/pexels-photo-323682.jpeg?auto=compress&cs=tinysrgb&w=300"
      },
      {
        id: "c2",
        name: "Costillas Completas",
        description: "Orden completa de costillas BBQ con papas y ensalada",
        price: 280,
        image: "https://images.pexels.com/photos/1539688/pexels-photo-1539688.jpeg?auto=compress&cs=tinysrgb&w=300"
      },
      {
        id: "c3",
        name: "Costillas Picantes",
        description: "Costillas con salsa chipotle y especias mexicanas",
        price: 190,
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
        price: 85,
        image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=300"
      },
      {
        id: "i2",
        name: "Nuggets de Pollo",
        description: "6 nuggets dorados con papas y salsa dulce",
        price: 80,
        image: "https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?auto=compress&cs=tinysrgb&w=300"
      },
      {
        id: "i3",
        name: "Quesadilla Infantil",
        description: "Quesadilla de queso con papas y fruta",
        price: 70,
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
        price: 35,
        image: "https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=300"
      },
      {
        id: "be2",
        name: "Agua Fresca de Jamaica",
        description: "Refrescante agua de jamaica endulzada naturalmente",
        price: 30,
        image: "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=300"
      },
      {
        id: "be3",
        name: "Refresco de Lata",
        description: "Coca Cola, Pepsi, Sprite o Fanta",
        price: 25,
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
        price: 65,
        image: "https://images.pexels.com/photos/103566/pexels-photo-103566.jpeg?auto=compress&cs=tinysrgb&w=300"
      },
      {
        id: "m2",
        name: "Malteada de Chocolate",
        description: "Malteada de chocolate belga con chips de chocolate",
        price: 70,
        image: "https://images.pexels.com/photos/108370/pexels-photo-108370.jpeg?auto=compress&cs=tinysrgb&w=300"
      },
      {
        id: "m3",
        name: "Cheesecake de Fresa",
        description: "Delicioso cheesecake casero con fresas frescas",
        price: 85,
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
        price: 25,
        image: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=300"
      },
      {
        id: "ca2",
        name: "Cappuccino",
        description: "Espresso con leche espumada y canela",
        price: 45,
        image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=300"
      },
      {
        id: "ca3",
        name: "Té de Manzanilla",
        description: "Tisana relajante de manzanilla con miel",
        price: 30,
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
        price: 80,
        image: "https://images.pexels.com/photos/5947041/pexels-photo-5947041.jpeg?auto=compress&cs=tinysrgb&w=300"
      },
      {
        id: "d2",
        name: "Whisky en las Rocas",
        description: "Whisky premium servido con hielo",
        price: 120,
        image: "https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=300"
      },
      {
        id: "d3",
        name: "Licor de Café",
        description: "Kahlúa servido con hielo y crema",
        price: 90,
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
        price: 40,
        image: "https://images.pexels.com/photos/52994/beer-slide-beer-glass-beer-mug-52994.jpeg?auto=compress&cs=tinysrgb&w=300"
      },
      {
        id: "bu2",
        name: "Modelo Especial",
        description: "Cerveza dorada con sabor equilibrado",
        price: 45,
        image: "https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg?auto=compress&cs=tinysrgb&w=300"
      },
      {
        id: "bu3",
        name: "Cerveza Artesanal",
        description: "Cerveza local de barril, rotatoria",
        price: 60,
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
        price: 95,
        image: "https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg?auto=compress&cs=tinysrgb&w=300"
      },
      {
        id: "co2",
        name: "Blue Lagoon",
        description: "Cóctel azul con vodka, curacao y limón",
        price: 90,
        image: "https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg?auto=compress&cs=tinysrgb&w=300"
      },
      {
        id: "co3",
        name: "Tequila Sunrise",
        description: "Tequila con jugo de naranja y granadina",
        price: 85,
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
        price: 85,
        image: "https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg?auto=compress&cs=tinysrgb&w=300"
      },
      {
        id: "mo2",
        name: "Mojito de Fresa",
        description: "Mojito tradicional con fresas naturales",
        price: 90,
        image: "https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg?auto=compress&cs=tinysrgb&w=300"
      },
      {
        id: "mo3",
        name: "Mojito de Maracuyá",
        description: "Refrescante mojito con pulpa de maracuyá",
        price: 95,
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
        price: 110,
        image: "https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=300"
      },
      {
        id: "de2",
        name: "Vodka Premium",
        description: "Vodka ruso de alta calidad, servido frío",
        price: 100,
        image: "https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=300"
      },
      {
        id: "de3",
        name: "Mezcal Artesanal",
        description: "Mezcal oaxaqueño 100% agave",
        price: 130,
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
        price: 55,
        image: "https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg?auto=compress&cs=tinysrgb&w=300"
      },
      {
        id: "s2",
        name: "Sidra de Pera",
        description: "Sidra aromática de pera natural",
        price: 60,
        image: "https://images.pexels.com/photos/616836/pexels-photo-616836.jpeg?auto=compress&cs=tinysrgb&w=300"
      },
      {
        id: "s3",
        name: "Sidra Seca",
        description: "Sidra tradicional con bajo contenido de azúcar",
        price: 65,
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
        price: 120,
        image: "https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=300"
      },
      {
        id: "bc2",
        name: "Bubu Manhattan",
        description: "Manhattan con whisky bourbon y vermut dulce",
        price: 115,
        image: "https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=300"
      },
      {
        id: "bc3",
        name: "Bubu Old Fashioned",
        description: "Clásico old fashioned con azúcar mascabado",
        price: 125,
        image: "https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=300"
      }
    ]
  }
];