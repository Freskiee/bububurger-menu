export const menuTranslations = {
  favoritos: { es: "¡Los Más Pedidos! 🔥", en: "Most Popular! 🔥" },
  entradas: { es: "Entradas", en: "Starters" },
  papas: { es: "Papas", en: "Fries" },
  banderillas: { es: "Banderillas", en: "Corn Dogs" },
  bububurgers: { es: "Bububurgers", en: "Bububurgers" },
  wings: { es: "Ari-Wings y Boneless", en: "Ari-Wings & Boneless" },
  hotdog: { es: "Hot-dogs JUMBO", en: "JUMBO Hot-dogs" },
  costillas: { es: "Costillas BBQ", en: "BBQ Ribs" },
  infantil: { es: "Menú Infantil", en: "Kids Menu" },
  bebidas: { es: "Bebidas y Refrescos", en: "Drinks & Refreshments" },
  alcoholicas: { es: "Bebidas con Alcohol", en: "Alcoholic Drinks" },
  extras: { es: "Extras", en: "Extras" },
  malteadas: { es: "Malteadas y Postres", en: "Shakes & Desserts" },
  'malteadas-postres': { es: "Malteadas y Postres", en: "Shakes & Desserts" },
  bubuchelas: { es: "Bubuchelas", en: "Bubuchelas" },
  cockteles: { es: "Cócteles de Color", en: "Colorful Cocktails" },
  mojitos: { es: "Mojitos", en: "Mojitos" },
  destilados: { es: "Destilados", en: "Spirits" },
  sidras: { es: "Sidras", en: "Ciders" },
  bubucocteles: { es: "Bubu-Cócteles", en: "Bubu-Cocktails" },
  cafe: { es: "Café y Tisanas", en: "Coffee & Teas" },
  digestivos: { es: "Digestivos y Aperitivos", en: "Digestifs & Appetizers" },
  "agua-ciel": {
    es: {
      name: "Agua Ciel",
      description: "Agua Ciel embotellada de 600ml..",
      prices: [
        { label: "", price: 30, note: "" }
      ],
      sauces: []
    },
    en: {
      name: "Ciel Water",
      description: "Bottled Ciel water of 600ml.",
      prices: [
        { label: "", price: 30, note: "" }
      ],
      sauces: []
    }
  }
};

export const sauceTranslations = {
  bbqMiel: { es: "BBQ Miel", en: "Honey BBQ" },
  ajoParmesano: { es: "Ajo Parmesano", en: "Garlic Parmesan" },
  teriyaki: { es: "Teriyaki", en: "Teriyaki" },
  bbq: { es: "BBQ", en: "BBQ" },
  hotBbq: { es: "Hot BBQ", en: "Hot BBQ" },
  tamarindo: { es: "Tamarindo", en: "Tamarind" },
  maggi: { es: "Maggi", en: "Maggi" },
  cajun: { es: "Cajún", en: "Cajun" },
  brava: { es: "Brava", en: "Brava" },
  mangoHabanero: { es: "Mango Habanero", en: "Mango Habanero" },
  requeteMacho: { es: "Requete-Macho", en: "Super Spicy" }
};

export interface ProductTranslation {
  es: {
    name: string;
    description: string;
    prices: Array<{ label: string; price?: number; note?: string }>;
    sauces?: string[];
  };
  en: {
    name: string;
    description: string;
    prices: Array<{ label: string; price?: number; note?: string }>;
    sauces?: string[];
  };
}

export const productTranslations: { [id: string]: ProductTranslation } = {
  // Sección: Los Más Pedidos
  f1: {
    es: {
      name: "BUBUBURGER OLÍMPICA",
      description: "Ex-qui-si-ta, simplemente el mejor balance de sabor, 100 gr. de carne de res sazonada con la receta secreta de la casa, gratinada con queso manchego, tocino, y un par de deliciosos aros de cebolla con un toque de blue-cheese.  Lechuga, jitomate, cebolla caramelizada, pepinillos, chiles, catsup, mostaza y mayonesa.",
      prices: [
        { label: "Sencilla", price: 170 },
        { label: "Doble", price: 185 }
      ]
    },
    en: {
      name: "BUBUBURGER OLYMPIC",
      description: "Ex-qui-site, simply the best balance of flavor. 100g of beef seasoned with the house's secret recipe, topped with manchego cheese, bacon, and a pair of delicious onion rings with a touch of blue cheese. Lettuce, tomato, caramelized onion, pickles, peppers, ketchup, mustard, and mayonnaise.",
      prices: [
        { label: "Single", price: 170 },
        { label: "Double", price: 185 }
      ]
    }
  },
  f2: {
    es: {
      name: "MOJITO FRUTOS ROJOS",
      description: "Refrescante combinación de ron blanco con frutos rojos naturales, hojas de menta y un toque de limón, servido sobre hielo en vaso de litro. Ideal para quienes buscan un sabor equilibrado entre lo frutal y lo herbal.",
      prices: [
        { label: "1/2 Lt", price: 85 },
        { label: "1 Lt", price: 145 }
      ]
    },
    en: {
      name: "RED FRUITS MOJITO",
      description: "Refreshing blend of white rum with natural red fruits, mint leaves, and a touch of lime, served over ice in a liter glass. Perfect for those seeking a balanced fruity and herbal flavor.",
      prices: [
        { label: "1/2 Lt", price: 85 },
        { label: "1 Lt", price: 145 }
      ]
    }
  },
  f3: {
    es: {
      name: "BUBU-DEDOS DE QUESO",
      description: "6 Deditos de queso fritos por fuera con un toque delicado de especias y por dentro queso mozzarella derretido, acompañados con salsa tipo italiana. ¡Cuidado no te muerdas tus propios dedos, que te van a quedar cortos para pedir más!",
      prices: [
        { label: "", price: 135 }
      ]
    },
    en: {
      name: "BUBU CHEESE FINGERS",
      description: "6 cheese sticks, crispy on the outside with a delicate touch of spices and melted mozzarella inside, served with Italian-style sauce. Careful not to bite your own fingers—you'll run out before you want to stop!",
      prices: [
        { label: "", price: 135 }
      ]
    }
  },
  f4: {
    es: {
      name: "BACON WESTERN",
      description: "Esta hamburguesa te hará sentir en el viejo Oeste por su selecto tocino bien doradito, su queso manchego y un delicado toque de salsa BBQ. ¡Así que ponte las botas, el sombrero de cowboy y prepárate para bailar el Payaso de Rodeo… ajúa! Lechuga, jitomate, cebolla caramelizada, pepinillos, chiles, catsup, mostaza y mayonesa.",
      prices: [
        { label: "Sencilla", price: 170 },
        { label: "Doble", price: 185 }
      ]
    },
    en: {
      name: "BACON WESTERN",
      description: "This burger will make you feel like you're in the Old West with its select crispy bacon, manchego cheese, and a delicate touch of BBQ sauce. So put on your boots, cowboy hat, and get ready to dance the Rodeo Clown... yeehaw! Lettuce, tomato, caramelized onion, pickles, peppers, ketchup, mustard, and mayonnaise.",
      prices: [
        { label: "Single", price: 170 },
        { label: "Double", price: 185 }
      ]
    }
  },
  f5: {
    es: {
      name: "EL DIABLO",
      description: "Mezcla intensa y refrescante de tequila, vino tinto y agua mineral, con un toque de limón y jarabe natural. Servida con escarchado de chamoy y tajín para un acabado picante y equilibrado.",
      prices: [
        { label: "1 Lt", price: 145 }
      ]
    },
    en: {
      name: "THE DEVIL",
      description: "Intense and refreshing mix of tequila, red wine, and sparkling water, with a touch of lime and natural syrup. Served with a chamoy and tajín rim for a spicy and balanced finish.",
      prices: [
        { label: "1 Lt", price: 145 }
      ]
    }
  },

  // Sección: Entradas
  e1: {
    es: {
      name: "BUBU-DEDOS DE QUESO",
      description: "6 Deditos de queso fritos por fuera con un toque delicado de especias y por dentro queso mozzarella derretido, acompañados con salsa tipo italiana. ¡Cuidado no te muerdas tus propios dedos, que te van a quedar cortos para pedir más!",
      prices: [
        { label: "", price: 135 }
      ]
    },
    en: {
      name: "BUBU CHEESE FINGERS",
      description: "6 cheese sticks, crispy on the outside with a delicate touch of spices and melted mozzarella inside, served with Italian-style sauce. Careful not to bite your own fingers—you'll run out before you want to stop!",
      prices: [
        { label: "", price: 135 }
      ]
    }
  },
  e2: {
    es: {
      name: "BUBU-CHILES RELLENOS",
      description: "6 Chiles jalapeños atrevidos rellenos de queso Philadelphia y empanizados por fuera, acompañados de Ketchup Heinz y queso amarillo tipo cheddar, ¡serán el remedio para tu antojo desenfrenado!",
      prices: [
        { label: "", price: 135 }
      ]
    },
    en: {
      name: "BUBU STUFFED PEPPERS",
      description: "6 daring jalapeño peppers stuffed with Philadelphia cheese and breaded on the outside, served with Heinz Ketchup and cheddar-style yellow cheese. The perfect cure for your wildest cravings!",
      prices: [
        { label: "", price: 135 }
      ]
    }
  },
  e3: {
    es: {
      name: "BUBU-NUGGETS",
      description: "Nuestros Nuggets de pechuga de pollo Pilgrim's Pride (10 pzs), ¡Crujientes y dorados siempre! Acompañados de Kétchup Heinz y queso amarillo tipo Cheddar.",
      prices: [
        { label: "", price: 135 }
      ]
    },
    en: {
      name: "BUBU NUGGETS",
      description: "Our Pilgrim's Pride chicken breast nuggets (10 pcs), always crispy and golden! Served with Heinz Ketchup and cheddar-style yellow cheese.",
      prices: [
        { label: "", price: 135 }
      ]
    }
  },
  e4: {
    es: {
      name: "BUBU-AROS DE CEBOLLA",
      description: "Perfectos aros de cebolla fritos y crujientes (10 pzs), acompañados con aderezo de blue cheese o ranch. ¡Te aseguramos que si los aros Olímpicos tuvieran sabor, a estos sabrían!",
      prices: [
        { label: "", price: 135 }
      ]
    },
    en: {
      name: "BUBU ONION RINGS",
      description: "Perfect fried and crispy onion rings (10 pcs), served with blue cheese or ranch dressing. We guarantee that if Olympic rings had a flavor, it would be these!",
      prices: [
        { label: "", price: 135 }
      ]
    }
  },
  e5: {
    es: {
      name: "BUBU-NACHOS CHILIBEAN",
      description: "Crujientes nachos acompañados con una deliciosa mezcla de chili bean, a base de carne molida de res, frijoles, salsa italiana, servidos con rodajas de jalapeño y abundante queso amarillo tipo Cheddar. ¡Perfectos para compartir!",
      prices: [
        { label: "", price: 220 }
      ]
    },
    en: {
      name: "BUBU CHILIBEAN NACHOS",
      description: "Crispy nachos topped with a delicious chili bean mix made with ground beef, beans, Italian sauce, jalapeño slices, and plenty of cheddar-style yellow cheese. Perfect for sharing!",
      prices: [
        { label: "", price: 220 }
      ]
    }
  },
  e6: {
    es: {
      name: "COSTILLAS DE ELOTE AMARILLO",
      description: "Estas costillitas de elote dulce amarillo, bañaditas con salsa Hot BBQ, Cajun, Tajín y un toque de perejil deshidratado con limón te harán bailar como texano. Son perfectas para compartir y calmar tus antojos, ¡así que prepárate para chuparte los dedos!",
      prices: [
        { label: "", price: 170 }
      ]
    },
    en: {
      name: "YELLOW CORN RIBS",
      description: "These sweet yellow corn ribs, bathed in Hot BBQ, Cajun, Tajín, and a touch of dried parsley with lime, will make you dance like a Texan. Perfect for sharing and satisfying your cravings—get ready to lick your fingers!",
      prices: [
        { label: "", price: 120 }
      ]
    }
  },
  e7: {
    es: {
      name: "ELOTE ASADO",
      description: "Elote dulce amarillo asado a la parrilla, untado con mantequilla y ligeramente especiado. Perfecto para acompañar cualquier platillo o disfrutar por sí solo con su sabor ahumado y natural.",
      prices: [
        { label: "", price: 75 }
      ]
    },
    en: {
      name: "GRILLED CORN",
      description: "Sweet yellow corn grilled, spread with butter and lightly seasoned. Perfect to accompany any dish or enjoy on its own with its smoky, natural flavor.",
      prices: [
        { label: "", price: 75 }
      ]
    }
  },

  // Sección: Bububurgers
  b1: {
    es: {
      name: "LA SENSATA",
      description: "100 gr. de carne de res sazonada con la receta secreta de la casa. Lechuga, jitomate, cebolla caramelizada, pepinillos, chiles, catsup, mostaza y mayonesa.",
      prices: [
        { label: "Sencilla", price: 145 },
        { label: "Queso o Piña", price: 150 },
        { label: "Queso y Piña", price: 155 }
      ]
    },
    en: {
      name: "THE SENSIBLE ONE",
      description: "100 gr. of beef seasoned with the house's secret recipe. Lettuce, tomato, caramelized onion, pickles, peppers, ketchup, mustard, and mayonnaise.",
      prices: [
        { label: "Single", price: 145 },
        { label: "Cheese or Pineapple", price: 150 },
        { label: "Cheese and Pineapple", price: 155 }
      ]
    }
  },
  b2: {
    es: {
      name: "DOBLE MORAL",
      description: "Dos carnes de 100 gr. de res sazonadas con la receta secreta de la casa. Lechuga, jitomate, cebolla caramelizada, pepinillos, chiles, catsup, mostaza y mayonesa.",
      prices: [
        { label: "Queso o Piña", price: 165 },
        { label: "Queso y Piña", price: 180 }
      ]
    },
    en: {
      name: "DOUBLE MORAL",
      description: "Two 100 gr. beef patties seasoned with the house's secret recipe. Lettuce, tomato, caramelized onion, pickles, peppers, ketchup, mustard, and mayonnaise.",
      prices: [
        { label: "Cheese or Pineapple", price: 165 },
        { label: "Cheese and Pineapple", price: 180 }
      ]
    }
  },
  b3: {
    es: {
      name: "OLÍMPICA",
      description: "Ex-qui-si-ta, simplemente el mejor balance de sabor, 100 gr. de carne de res sazonada con la receta secreta de la casa, gratinada con queso manchego, tocino, y un par de deliciosos aros de cebolla con un toque de blue-cheese. Lechuga, jitomate, cebolla caramelizada, pepinillos, chiles, catsup, mostaza y mayonesa.",
      prices: [
        { label: "Sencilla", price: 170 },
        { label: "Doble", price: 185 }
      ]
    },
    en: {
      name: "OLYMPIC",
      description: "Ex-qui-site, simply the best balance of flavor. 100g of beef seasoned with the house's secret recipe, topped with melted manchego cheese, bacon, and a couple of delicious onion rings with a touch of blue cheese. Lettuce, tomato, caramelized onion, pickles, peppers, ketchup, mustard, and mayonnaise.",
      prices: [
        { label: "Single", price: 170 },
        { label: "Double", price: 185 }
      ]
    }
  },
  b4: {
    es: {
      name: "TROPICAL - HAWAIANA",
      description: "La inconfundible hamburguesa hawaiana con su deliciosa piña tropical, asada lentamente a la parrilla, jamón Virginia, queso manchego y su tocino bien frito a la plancha. ¡Esta Bububurger te hará bailar el Waikiki! Lechuga, jitomate, cebolla caramelizada, pepinillos, chiles, catsup, mostaza y mayonesa.",
      prices: [
        { label: "Sencilla", price: 175 },
        { label: "Doble", price: 190 }
      ]
    },
    en: {
      name: "TROPICAL - HAWAIIAN",
      description: "The unmistakable Hawaiian burger with its delicious tropical pineapple, slowly grilled, Virginia ham, manchego cheese, and its perfectly fried bacon. This Bububurger will make you dance the Waikiki! Lettuce, tomato, caramelized onion, pickles, peppers, ketchup, mustard, and mayonnaise.",
      prices: [
        { label: "Single", price: 175 },
        { label: "Double", price: 190 }
      ]
    }
  },
  b5: {
    es: {
      name: "BACON WESTERN",
      description: "Esta hamburguesa te hará sentir en el viejo Oeste por su selecto tocino bien doradito, su queso manchego y un delicado toque de salsa BBQ. ¡Así que ponte las botas, el sombrero de cowboy y prepárate para bailar el Payaso de Rodeo… ajúa! Lechuga, jitomate, cebolla caramelizada, pepinillos, chiles, catsup, mostaza y mayonesa.",
      prices: [
        { label: "Sencilla", price: 170 },
        { label: "Doble", price: 185 }
      ]
    },
    en: {
      name: "BACON WESTERN",
      description: "This burger will make you feel like you're in the Old West with its select crispy bacon, manchego cheese, and a delicate touch of BBQ sauce. So put on your boots, cowboy hat, and get ready to dance the Rodeo Clown... yeehaw! Lettuce, tomato, caramelized onion, pickles, peppers, ketchup, mustard, and mayonnaise.",
      prices: [
        { label: "Single", price: 170 },
        { label: "Double", price: 185 }
      ]
    }
  },
  b6: {
    es: {
      name: "CRUJIPOLLO",
      description: "Para los fanáticos del pollo les tenemos esta maravillosa Bububurger de pollo extra crunchy, puedes pedirla al natural (Como dios la trajo al mundo) o bañadita en cualquiera de nuestras salsas de la casa, además viene con un toque de aderezo blue-cheese. Lechuga, jitomate, cebolla caramelizada, pepinillos, chiles, catsup, mostaza y mayonesa.",
      prices: [
        { label: "Natural", price: 160 },
        { label: "Bañada", price: 175 }
      ],
      sauces: [
        "bbq miel",
        "ajo parmesano",
        "teriyaki",
        "bbq",
        "hot bbq",
        "tamarindo",
        "maggi",
        "cajún",
        "brava",
        "mango habanero",
        "requete-macho"
      ]
    },
    en: {
      name: "CRUNCHY CHICKEN",
      description: "For chicken lovers, we have this wonderful extra crunchy chicken Bububurger. You can order it natural (As God brought it to the world) or coated with any of our house sauces, plus it comes with a touch of blue-cheese dressing. Lettuce, tomato, caramelized onion, pickles, peppers, ketchup, mustard, and mayonnaise.",
      prices: [
        { label: "Natural", price: 160 },
        { label: "Coated", price: 175 }
      ],
      sauces: [
        "honey bbq",
        "parmesan garlic",
        "teriyaki",
        "bbq",
        "hot bbq",
        "tamarind",
        "maggi",
        "cajun",
        "brava",
        "mango habanero",
        "super-macho"
      ]
    }
  },
  b7: {
    es: {
      name: "PEPPERONI BURGER",
      description: "La Bububurger molto Italiana! Fue especialmente diseñada para los amantes de las pipshas, te aseguramos que te hará recordar en cada bocado el rico sabor de una rebanada de pizza, lleva extra queso manchego, pepperoni y salsa italiana. buon appetito!",
      prices: [
        { label: "Sencilla", price: 170 },
        { label: "Doble", price: 185 }
      ]
    },
    en: {
      name: "PEPPERONI BURGER",
      description: "The molto Italiana Bububurger! Specially designed for pizza lovers, we guarantee that every bite will remind you of the delicious taste of a pizza slice, featuring extra manchego cheese, pepperoni, and Italian sauce. buon appetito!",
      prices: [
        { label: "Single", price: 170 },
        { label: "Double", price: 185 }
      ]
    }
  },
  b8: {
    es: {
      name: "COSTRA BURGER",
      description: "Nuestra Bububurger consentida, es una delicia por su crujiente costra de queso con tocino frito y un toque de aderezo secreto, receta de la casa. Puedes pedirla sencilla o doble, y si te animas por la doble, te espera una doble costra de queso con tocino. ¡Crunchy, crunchy!",
      prices: [
        { label: "Sencilla", price: 175 },
        { label: "Doble", price: 190 }
      ]
    },
    en: {
      name: "CRUST BURGER",
      description: "Our favorite Bububurger, it's a delight with its crispy cheese crust with fried bacon and a touch of secret house dressing. You can order it single or double, and if you go for the double, you'll get a double cheese crust with bacon. Crunchy, crunchy!",
      prices: [
        { label: "Single", price: 175 },
        { label: "Double", price: 190 }
      ]
    }
  },

  // Sección: Banderillas
  bd1: {
    es: {
      name: "BANDERILLA CLÁSICA",
      description: "Orden de 2 banderillas de queso con una porción de papas a la francesa. Orden de 5 banderillas.",
      prices: [
        { label: "2 Pzs", price: 140, note: "Incluye papas 70g" },
        { label: "5 Pzs", price: 180 }
      ]
    },
    en: {
      name: "CLASSIC CORN DOG",
      description: "Order of 2 cheese corn dogs with a portion of French fries. Order of 5 corn dogs.",
      prices: [
        { label: "2 Pcs", price: 140, note: "Includes fries 70g" },
        { label: "5 Pcs", price: 180 }
      ]
    }
  },

  // Sección: Costillas BBQ
  c1: {
    es: {
      name: "BUBU-COSTILLAS BBQ",
      description: "¡Llegaron las costillas que ni Thalía se imaginó! Jugosas Grilled Baby Back Ribs de cerdo, bien barnizadas con tu wing sauce favorita, sobre cama de lechuga fresca. Vienen acompañadas de un elotito dulce con mantequilla y nuestros polvitos mágicos que le dan el toque especial. ¿No eres de elote? Cámbialo por papitas sin costo. 😉",
      prices: [
        { label: "", price: 315 }
      ],
      sauces: [
        "bbq miel",
        "ajo parmesano",
        "teriyaki",
        "bbq",
        "hot bbq",
        "maggi",
        "cajún",
        "brava",
        "mango habanero",
        "requete-macho"
      ]
    },
    en: {
      name: "BUBU BBQ RIBS",
      description: "The ribs that even Thalía couldn't imagine! Juicy Grilled Baby Back Pork Ribs, well-coated with your favorite wing sauce, served on a bed of fresh lettuce. Comes with a sweet corn on the cob with butter and our magical seasoning that gives it that special touch. Not a corn fan? Swap it for fries at no extra cost. 😉",
      prices: [
        { label: "", price: 315 }
      ],
      sauces: [
        "honey bbq",
        "parmesan garlic",
        "teriyaki",
        "bbq",
        "hot bbq",
        "maggi",
        "cajun",
        "brava",
        "mango habanero",
        "super-macho"
      ]
    }
  },
  c2: {
    es: {
      name: "COSTILLAS DE ELOTE AMARILLO",
      description: "Estas costillitas de elote dulce amarillo, bañaditas con salsa Hot BBQ, Cajun, Tajín y un toque de perejil deshidratado con limón te harán bailar como texano. Son perfectas para compartir y calmar tus antojos, ¡así que prepárate para chuparte los dedos!",
      prices: [
        { label: "", price: 170 }
      ],
      sauces: [
        "bbq",
        "hot bbq",
        "mango habanero"
      ]
    },
    en: {
      name: "YELLOW CORN RIBS",
      description: "These sweet yellow corn ribs, bathed in Hot BBQ, Cajun, Tajín, and a touch of dried parsley with lime, will make you dance like a Texan. Perfect for sharing and satisfying your cravings—get ready to lick your fingers!",
      prices: [
        { label: "", price: 120 }
      ],
      sauces: [
        "bbq",
        "hot bbq",
        "mango habanero"
      ]
    }
  },

  // Sección: Hot-dogs JUMBO
  h1: {
    es: {
      name: "HOT DOG CLÁSICO",
      description: "Salchicha a la parrilla en pan suave. Clásico, sin ingredientes extra.",
      prices: [
        { label: "Salchicha de Pavo", price: 95 },
        { label: "Salchicha de Res", price: 120 }
      ]
    },
    en: {
      name: "CLASSIC HOT DOG",
      description: "Grilled sausage in a soft bun. Classic, no extra toppings.",
      prices: [
        { label: "Turkey Sausage", price: 95 },
        { label: "Beef Sausage", price: 120 }
      ]
    }
  },
  h2: {
    es: {
      name: "HOT DOG TOCINO",
      description: "Salchicha envuelta en tocino crujiente con queso. Simple y delicioso.",
      prices: [
        { label: "Salchicha de Pavo", price: 125 },
        { label: "Salchicha de Res", price: 155 }
      ]
    },
    en: {
      name: "BACON HOT DOG",
      description: "Sausage wrapped in crispy bacon with cheese. Simple and delicious.",
      prices: [
        { label: "Turkey Sausage", price: 125 },
        { label: "Beef Sausage", price: 155 }
      ]
    }
  },
  h3: {
    es: {
      name: "HOT DOG HAWAIANO",
      description: "Queso manchego fundido, piña jugosa y tocino dorado. Dulce y salado.",
      prices: [
        { label: "Salchicha de Pavo", price: 125 },
        { label: "Salchicha de Res", price: 150 }
      ]
    },
    en: {
      name: "HAWAIIAN HOT DOG",
      description: "Melted manchego cheese, juicy pineapple, and golden bacon. Sweet and savory.",
      prices: [
        { label: "Turkey Sausage", price: 125 },
        { label: "Beef Sausage", price: 150 }
      ]
    }
  },
  h4: {
    es: {
      name: "HOT DOG ITALIANO",
      description: "Queso manchego fundido, pepperoni y salsa italiana. Como una pizza… pero en hot dog.",
      prices: [
        { label: "Salchicha de Pavo", price: 125 },
        { label: "Salchicha de Res", price: 150 }
      ]
    },
    en: {
      name: "ITALIAN HOT DOG",
      description: "Melted manchego cheese, pepperoni, and Italian sauce. Like a pizza... but in a hot dog.",
      prices: [
        { label: "Turkey Sausage", price: 125 },
        { label: "Beef Sausage", price: 150 }
      ]
    }
  },

  // Sección: Papas
  p1: {
    es: {
      name: "PAPAS A LA FRANCESA",
      description: "Generosa porción de papas corte recto, calientitas y bien fritas; acompañadas de Kétchup Heinz y queso amarillo tipo Cheddar. ¡Obviamente sazonadas con nuestros polvos mágicos!",
      prices: [
        { label: "", price: 110 }
      ]
    },
    en: {
      name: "FRENCH FRIES",
      description: "Generous portion of straight-cut fries, hot and well-fried; served with Heinz Ketchup and cheddar cheese. Obviously seasoned with our magic powders!",
      prices: [
        { label: "", price: 110 }
      ]
    }
  },
  p2: {
    es: {
      name: "PAPAS CURLY",
      description: "Deliciosas papas espiral delicadamente sazonadas y muy crujientes, acompañadas con Kétchup Heinz y queso amarillo tipo Cheddar.",
      prices: [
        { label: "", price: 110 }
      ]
    },
    en: {
      name: "CURLY FRIES",
      description: "Delicious spiral-cut fries delicately seasoned and very crispy, served with Heinz Ketchup and cheddar cheese.",
      prices: [
        { label: "", price: 110 }
      ]
    }
  },
  p3: {
    es: {
      name: "PAPAS GAJO",
      description: "Grandiosas papas gajo en cortes de gran tamaño, doradas por fuera y suaves por dentro, acompañadas de Kétchup Heinz y queso amarillo tipo Cheddar.",
      prices: [
        { label: "", price: 110 }
      ]
    },
    en: {
      name: "WEDGE FRIES",
      description: "Great wedge-cut fries in large pieces, golden on the outside and soft on the inside, served with Heinz Ketchup and cheddar cheese.",
      prices: [
        { label: "", price: 110 }
      ]
    }
  },
  p4: {
    es: {
      name: "CARI-PAPAS",
      description: "Simpáticas papas en forma de carita feliz esponjaditas, fritas y calientitas, acompañadas de Kétchup Heinz y queso amarillo tipo Cheddar.",
      prices: [
        { label: "", price: 110 }
      ]
    },
    en: {
      name: "SMILEY FRIES",
      description: "Cute smiley face-shaped fluffy fries, fried and hot, served with Heinz Ketchup and cheddar cheese.",
      prices: [
        { label: "", price: 110 }
      ]
    }
  },
  p5: {
    es: {
      name: "PAPAS WAFFLE",
      description: "Pide estas bellezas de papas en forma de Waffle, crujientes y deliciosas, acompañadas con Kétchup Heinz y queso amarillo tipo Cheddar.",
      prices: [
        { label: "", price: 110 }
      ]
    },
    en: {
      name: "WAFFLE FRIES",
      description: "Order these beautiful waffle-shaped fries, crispy and delicious, served with Heinz Ketchup and cheddar cheese.",
      prices: [
        { label: "", price: 110 }
      ]
    }
  },

  // Sección: Mojitos
  mo1: {
    es: {
      name: "Mojito Tradicional",
      description: "Mojito clásico con ron, menta, limón y azúcar",
      prices: [
        { label: "1/2", price: 120 },
        { label: "1 Lt", price: 180 }
      ]
    },
    en: {
      name: "Traditional Mojito",
      description: "Classic mojito with rum, mint, lemon, and sugar",
      prices: [
        { label: "1/2", price: 120 },
        { label: "1 Lt", price: 180 }
      ]
    }
  },
  mo2: {
    es: {
      name: "Mojito de Fresa",
      description: "Refrescante mojito con fresas frescas",
      prices: [
        { label: "1/2", price: 120 },
        { label: "1 Lt", price: 180 }
      ]
    },
    en: {
      name: "Strawberry Mojito",
      description: "Traditional mojito with fresh strawberries",
      prices: [
        { label: "1/2", price: 120 },
        { label: "1 Lt", price: 180 }
      ]
    }
  },
  mo3: {
    es: {
      name: "Mojito de Maracuyá",
      description: "Refrescante mojito con pulpa de maracuyá",
      prices: [
        { label: "1/2", price: 120 },
        { label: "1 Lt", price: 180 }
      ]
    },
    en: {
      name: "Passion Fruit Mojito",
      description: "Refreshing mojito with passion fruit pulp",
      prices: [
        { label: "1/2", price: 120 },
        { label: "1 Lt", price: 180 }
      ]
    }
  },

  // Sección: Café y Tisanas
  ca1: {
    es: {
      name: "Café Americano",
      description: "Café negro de grano selecto, servido caliente",
      prices: [
        { label: "", price: 80 }
      ]
    },
    en: {
      name: "Americano Coffee",
      description: "Black coffee from select beans, served hot",
      prices: [
        { label: "", price: 80 }
      ]
    }
  },
  ca2: {
    es: {
      name: "Cappuccino",
      description: "Espresso con leche espumada y canela",
      prices: [
        { label: "", price: 90 }
      ]
    },
    en: {
      name: "Cappuccino",
      description: "Espresso with foamed milk and cinnamon",
      prices: [
        { label: "", price: 90 }
      ]
    }
  },
  ca3: {
    es: {
      name: "Té de Manzanilla",
      description: "Tisana relajante de manzanilla con miel",
      prices: [
        { label: "", price: 70 }
      ]
    },
    en: {
      name: "Chamomile Tea",
      description: "Relaxing chamomile tea with honey",
      prices: [
        { label: "", price: 70 }
      ]
    }
  },

  // Sección: Destilados
  de1: {
    es: {
      name: "Ron Añejo",
      description: "Ron premium envejecido, servido solo",
      prices: [
        { label: "", price: 150 }
      ]
    },
    en: {
      name: "Aged Rum",
      description: "Premium aged rum, served neat",
      prices: [
        { label: "", price: 150 }
      ]
    }
  },
  de2: {
    es: {
      name: "Vodka Premium",
      description: "Vodka ruso de alta calidad, servido frío",
      prices: [
        { label: "", price: 160 }
      ]
    },
    en: {
      name: "Premium Vodka",
      description: "High-quality Russian vodka, served cold",
      prices: [
        { label: "", price: 160 }
      ]
    }
  },
  de3: {
    es: {
      name: "Mezcal Artesanal",
      description: "Mezcal oaxaqueño 100% agave",
      prices: [
        { label: "", price: 170 }
      ]
    },
    en: {
      name: "Artisanal Mezcal",
      description: "Oaxacan mezcal 100% agave",
      prices: [
        { label: "", price: 170 }
      ]
    }
  },

  // Sección: Sidras
  s1: {
    es: {
      name: "Sidra de Manzana",
      description: "Sidra dulce de manzana fermentada",
      prices: [
        { label: "", price: 140 }
      ]
    },
    en: {
      name: "Apple Cider",
      description: "Sweet fermented apple cider",
      prices: [
        { label: "", price: 140 }
      ]
    }
  },
  s2: {
    es: {
      name: "Sidra de Pera",
      description: "Sidra aromática de pera natural",
      prices: [
        { label: "", price: 140 }
      ]
    },
    en: {
      name: "Pear Cider",
      description: "Aromatic natural pear cider",
      prices: [
        { label: "", price: 140 }
      ]
    }
  },
  s3: {
    es: {
      name: "Sidra Seca",
      description: "Sidra tradicional con bajo contenido de azúcar",
      prices: [
        { label: "", price: 140 }
      ]
    },
    en: {
      name: "Dry Cider",
      description: "Traditional cider with low sugar content",
      prices: [
        { label: "", price: 140 }
      ]
    }
  },

  // Sección: Ari-Wings y Boneless
  w1: {
    es: {
      name: "ARI-WINGS",
      description: "Muchos presumen tener las mejores alitas... pero las nuestras sí lo demuestran. Están tan grandes que parecen piernitas de pollo, bien jugosas, bien bañadas y servidas con su lechuguita y un toque de ranch o blue cheese. 🔥 Te retamos a que te comas solo una... ¡imposible!",
      prices: [
        { label: "10 Pzs", price: 220, note: "Incluye 2 salsas a elegir" },
        { label: "15 Pzs", price: 270, note: "Incluye 3 salsas a elegir" }
      ],
      sauces: [
        "bbq miel",
        "ajo parmesano",
        "teriyaki",
        "bbq",
        "hot bbq",
        "tamarindo",
        "maggi",
        "cajún",
        "brava",
        "mango habanero",
        "requete-macho"
      ]
    },
    en: {
      name: "ARI-WINGS",
      description: "Many claim to have the best wings... but ours actually prove it. They're so big they look like chicken legs, super juicy, well-coated and served with fresh lettuce and a touch of ranch or blue cheese. 🔥 We dare you to eat just one... impossible!",
      prices: [
        { label: "10 Pcs", price: 220, note: "Includes 2 sauces of your choice" },
        { label: "15 Pcs", price: 270, note: "Includes 3 sauces of your choice" }
      ],
      sauces: [
        "honey bbq",
        "parmesan garlic",
        "teriyaki",
        "bbq",
        "hot bbq",
        "tamarind",
        "maggi",
        "cajun",
        "brava",
        "mango habanero",
        "super-macho"
      ]
    }
  },
  w2: {
    es: {
      name: "CHICKEN BONELESS",
      description: "¡Sin huesos, sin excusas! Nuestros Boneless son puro placer: pollo jugoso, crujiente por fuera, bañado en la salsa que más te prende. ¿Blue cheese o ranch? Tú mandas. 💥 Advertencia: este manjar ha sido culpable de muchas lamidas de dedos… y de platos vacíos en segundos.",
      prices: [
        { label: "225 gr.", price: 235 },
        { label: "515 gr.", price: 355 },
        { label: "1100 gr.", price: 605 }
      ],
      sauces: [
        "bbq miel",
        "ajo parmesano",
        "teriyaki",
        "bbq",
        "hot bbq",
        "tamarindo",
        "maggi",
        "cajún",
        "brava",
        "mango habanero",
        "requete-macho"
      ]
    },
    en: {
      name: "CHICKEN BONELESS",
      description: "No bones, no excuses! Our Boneless are pure pleasure: juicy chicken, crispy on the outside, coated in your favorite sauce. Blue cheese or ranch? You decide. 💥 Warning: this delicacy has been guilty of many finger lickings... and empty plates in seconds.",
      prices: [
        { label: "225 gr.", price: 235 },
        { label: "515 gr.", price: 355 },
        { label: "1100 gr.", price: 605 }
      ],
      sauces: [
        "honey bbq",
        "parmesan garlic",
        "teriyaki",
        "bbq",
        "hot bbq",
        "tamarind",
        "maggi",
        "cajun",
        "brava",
        "mango habanero",
        "super-macho"
      ]
    }
  },

  // Sección: Menú Infantil
  k1: {
    es: {
      name: "PAQUETE BUBUBURGER",
      description: "Deliciosa Bububurger sencilla con queso manchego + 5 divertidas papas carita feliz y una chaparrita.",
      prices: [ { label: "", price: 160 } ]
    },
    en: {
      name: "BUBUBURGER KIDS MEAL",
      description: "A tasty Bububurger with manchego cheese, 5 fun smiley fries, and a small soda.",
      prices: [ { label: "", price: 160 } ]
    }
  },
  k2: {
    es: {
      name: "PAQUETE NUGGETS",
      description: "5 Nuggets + 5 divertidas papas carita feliz y una chaparrita.",
      prices: [ { label: "", price: 160 } ]
    },
    en: {
      name: "NUGGETS KIDS MEAL",
      description: "5 chicken nuggets, 5 smiley fries, and a small soda.",
      prices: [ { label: "", price: 160 } ]
    }
  },
  k3: {
    es: {
      name: "PAQUETE HOTDOG",
      description: "Hot Dog sencillo + 5 papas carita feliz y una chaparrita.",
      prices: [ { label: "", price: 130 } ]
    },
    en: {
      name: "HOT DOG KIDS MEAL",
      description: "A classic hot dog, 5 smiley fries, and a small soda.",
      prices: [ { label: "", price: 130 } ]
    }
  },
  k4: {
    es: {
      name: "PAQUETE DEDITOS DE QUESO",
      description: "5 Dedos de queso mozzarella + 5 papas carita feliz y una chaparrita.",
      prices: [ { label: "", price: 160 } ]
    },
    en: {
      name: "CHEESE FINGERS KIDS MEAL",
      description: "5 mozzarella cheese sticks, 5 smiley fries, and a small soda.",
      prices: [ { label: "", price: 160 } ]
    }
  },
  k5: {
    es: {
      name: "BONELESS",
      description: "4 boneless de pollo, acompañados de papas a la francesa y una bebida de 355ml.",
      prices: [
        { label: "", price: 120 }
      ]
    },
    en: {
      name: "BONELESS",
      description: "4 boneless chicken pieces, served with french fries and a 355ml drink.",
      prices: [
        { label: "", price: 120 }
      ]
    }
  },
  k6: {
    es: {
      name: "ELOTE",
      description: "Elote con mantequilla y queso, acompañado de papas a la francesa y una bebida de 355ml.",
      prices: [
        { label: "", price: 120 }
      ]
    },
    en: {
      name: "CORN ON THE COB",
      description: "Corn on the cob with butter and cheese, served with french fries and a 355ml drink.",
      prices: [
        { label: "", price: 120 }
      ]
    }
  },
  kids: {
    es: [
      { name: 'Hamburguesa Kids', description: 'Hamburguesa de res, lechuga, tomate, queso y papas fritas', prices: [{ label: '120', price: 120 }] },
      { name: 'Nuggets Kids', description: '6 piezas de pollo empanizado con papas fritas', prices: [{ label: '110', price: 110 }] },
      { name: 'Hot Dog Kids', description: 'Hot dog con papas fritas', prices: [{ label: '100', price: 100 }] }
    ],
    en: [
      { name: 'Kids Burger', description: 'Beef patty, lettuce, tomato, cheese and french fries', prices: [{ label: '120', price: 120 }] },
      { name: 'Kids Nuggets', description: '6 pieces of breaded chicken with french fries', prices: [{ label: '110', price: 110 }] },
      { name: 'Kids Hot Dog', description: 'Hot dog with french fries', prices: [{ label: '100', price: 100 }] }
    ]
  },
  // Sección: Bebidas y Refrescos
  "bebida-1": {
    es: {
      name: "Refrescos",
      description: "Refrescos de la familia Coca-Cola en presentación de 355 ml.",
      prices: [
        { label: "", price: 45, note: "" }
      ],
      sauces: []
    },
    en: {
      name: "Sodas",
      description: "Coca-Cola family soft drinks in 355ml presentation.",
      prices: [
        { label: "", price: 45, note: "" }
      ],
      sauces: []
    }
  },
  "bebida-2": {
    es: {
      name: "Boing",
      description: "Bebidas Boing de 355ml en diferentes sabores, hechas con fruta natural.",
      prices: [
        { label: "", price: 45, note: "" }
      ],
      sauces: []
    },
    en: {
      name: "Boing",
      description: "Boing drinks of 355ml in different flavors, made with natural fruit.",
      prices: [
        { label: "", price: 45, note: "" }
      ],
      sauces: []
    }
  },
  "agua-ciel": {
    es: {
      name: "Agua Ciel",
      description: "Agua Ciel embotellada de 600ml.",
      prices: [
        { label: "", price: 30, note: "" }
      ],
      sauces: []
    },
    en: {
      name: "Ciel Water",
      description: "Bottled Ciel water of 600ml.",
      prices: [
        { label: "", price: 30, note: "" }
      ],
      sauces: []
    }
  }
};

export const uiTranslations = {
  close: { es: "Cerrar", en: "Close" },
  seeSauces: { es: "Ver Salsas", en: "View Sauces" },
  seeEquiv: { es: "Ver Equivalencias", en: "View Equivalents" },
  addToCart: { es: "Agregar al carrito", en: "Add to cart" },
  comment: { es: "Comentario", en: "Comment" },
  // Menú de reseña
  reviewTitle: { es: "Califica Tu Experiencia", en: "Rate Your Experience" },
  reviewClose: { es: "Cerrar", en: "Close" },
  reviewThanks: { es: "¡Gracias por tu opinión! 👨‍🍳", en: "Thank you for your feedback! 👨‍🍳" },
  reviewName: { es: "Tu Nombre *", en: "Your Name *" },
  reviewService: { es: "👥 Calidad del Servicio *", en: "👥 Service Quality *" },
  reviewTaste: { es: "😋 Sabor de los Alimentos *", en: "😋 Food Taste *" },
  reviewPresentation: { es: "🎨 Presentación *", en: "🎨 Presentation *" },
  reviewPrice: { es: "💰 Percepción del Precio *", en: "💰 Price Perception *" },
  reviewComments: { es: "Comentarios Adicionales", en: "Additional Comments" },
  reviewCommentsPlaceholder: { es: "Cuéntanos más sobre tu experiencia...", en: "Tell us more about your experience..." },
  reviewSend: { es: "Enviar Mi Reseña", en: "Send My Review" },
  reviewSending: { es: "Enviando...", en: "Sending..." },
  reviewError: { es: "Hubo un error al enviar tu reseña. Intenta de nuevo.", en: "There was an error sending your review. Please try again." },
  // Menú de factura
  invoiceTitle: { es: "Solicitar Factura", en: "Request Invoice" },
  invoiceClose: { es: "Cerrar", en: "Close" },
  invoiceSuccess: { es: "¡Factura enviada correctamente!", en: "Invoice sent successfully!" },
  invoiceEmail: { es: "Correo Electrónico *", en: "Email *" },
  invoiceEmailPlaceholder: { es: "tu@email.com", en: "your@email.com" },
  invoiceRFC: { es: "RFC *", en: "Tax ID *" },
  invoiceRFCPlaceholder: { es: "ABCD123456EF7", en: "ABCD123456EF7" },
  invoicePostal: { es: "Código Postal *", en: "Postal Code *" },
  invoicePostalPlaceholder: { es: "12345", en: "12345" },
  invoiceName: { es: "Nombre Completo *", en: "Full Name *" },
  invoiceNamePlaceholder: { es: "Nombre completo o razón social", en: "Full name or business name" },
  invoiceRegime: { es: "Régimen Fiscal *", en: "Tax Regime *" },
  invoiceRegimeSelect: { es: "Selecciona tu Régimen Fiscal", en: "Select your Tax Regime" },
  invoicePayment: { es: "Método de Pago *", en: "Payment Method *" },
  invoicePaymentSelect: { es: "Selecciona Método de Pago", en: "Select Payment Method" },
  invoiceAmount: { es: "Cantidad Total *", en: "Total Amount *" },
  invoiceAmountPlaceholder: { es: "0.00", en: "0.00" },
  invoiceAmountNote: {
    es: "El total capturado debe ser exactamente igual al del ticket, incluyendo centavos.",
    en: "The amount entered must match the ticket total exactly, including cents."
  },
  invoiceTicketFolio: {
    es: "Folio del ticket *",
    en: "Ticket number *"
  },
  invoiceDate: { es: "Fecha de consumo *", en: "Consumption date *" },
  invoiceSend: { es: "Enviar Factura", en: "Send Invoice" },
  invoiceButton: { es: "solicitar factura", en: "request invoice" },
  invoiceNote: { es: "nota:", en: "note:" },
  invoiceNoteText: { es: "tu factura será procesada en un plazo máximo de 72 horas hábiles. Recibirás un correo de confirmación una vez que esté lista.", en: "your invoice will be processed within a maximum of 72 business hours. You will receive a confirmation email once it is ready." },
  // Opciones de régimen fiscal y métodos de pago
  invoiceRegimes: {
    es: [
      "Selecciona tu Régimen Fiscal",
      "601 - General de Ley Personas Morales",
      "603 - Personas Morales con Fines no Lucrativos",
      "605 - Sueldos y Salarios e Ingresos Asimilados a Salarios",
      "606 - Arrendamiento",
      "607 - Régimen de Enajenación o Adquisición de Bienes",
      "608 - Demás Ingresos",
      "610 - Residentes en el Extranjero sin Establecimiento Permanente en México",
      "611 - Ingresos por Dividendos (Socios y Accionistas)",
      "612 - Personas Físicas con Actividades Empresariales y Profesionales",
      "614 - Ingresos por Intereses",
      "615 - Régimen de los Ingresos por Obtención de Premios",
      "616 - Sin Obligaciones Fiscales",
      "620 - Sociedades Cooperativas de Producción que optan por diferir sus ingresos",
      "621 - Incorporación Fiscal",
      "622 - Actividades Agrícolas, Ganaderas, Silvícolas y Pesqueras",
      "623 - Opcional para Grupos de Sociedades",
      "624 - Coordinados",
      "625 - Régimen de las Actividades Empresariales con Ingresos a través de Plataformas Tecnológicas",
      "626 - Régimen Simplificado de Confianza"
    ],
    en: [
      "Select your Tax Regime",
      "601 - General Law for Legal Entities",
      "603 - Non-Profit Legal Entities",
      "605 - Salaries and Income Assimilated to Salaries",
      "606 - Leasing",
      "607 - Regime for Sale or Acquisition of Goods",
      "608 - Other Income",
      "610 - Foreign Residents without Permanent Establishment in Mexico",
      "611 - Dividend Income (Partners and Shareholders)",
      "612 - Individuals with Business and Professional Activities",
      "614 - Interest Income",
      "615 - Regime for Income from Prizes",
      "616 - No Tax Obligations",
      "620 - Cooperative Production Societies opting to defer income",
      "621 - Fiscal Incorporation",
      "622 - Agricultural, Livestock, Forestry and Fisheries Activities",
      "623 - Optional for Corporate Groups",
      "624 - Coordinated",
      "625 - Regime for Business Activities with Income through Technological Platforms",
      "626 - Simplified Trust Regime"
    ]
  },
  invoicePayments: {
    es: [
      "Selecciona Método de Pago",
      "01 - Efectivo",
      "03 - Transferencia Electrónica de Fondos",
      "04 - Tarjeta de Crédito",
      "28 - Tarjeta de Débito",
      "99 - Por Definir"
    ],
    en: [
      "Select Payment Method",
      "01 - Cash",
      "03 - Electronic Funds Transfer",
      "04 - Credit Card",
      "28 - Debit Card",
      "99 - To Be Defined"
    ]
  },
  // Métodos de pago
  paymentTitle: { es: "Métodos de Pago", en: "Payment Methods" },
  paymentCash: { es: "Efectivo", en: "Cash" },
  paymentCashDesc: { es: "Paga directamente en caja al finalizar tu consumo", en: "Pay directly at the register after your meal" },
  paymentTransfer: { es: "Transferencia Bancaria", en: "Bank Transfer" },
  paymentTransferDesc: { es: "Realiza una transferencia bancaria a la siguiente cuenta:", en: "Make a bank transfer to the following account:" },
  paymentHolder: { es: "Titular", en: "Account Holder" },
  paymentClabe: { es: "CLABE BBVA", en: "BBVA CLABE" },
  paymentCopy: { es: "¡CLABE Copiada! 📋", en: "Bank Code Copied! 📋" },
  paymentCard: { es: "Tarjetas", en: "Cards" },
  paymentCardDesc: { es: "Aceptamos tarjetas de crédito y débito Visa, Mastercard y American Express", en: "We accept Visa, Mastercard and American Express credit and debit cards" },
  // Horarios
  scheduleTitle: { es: "Horarios", en: "Opening Hours" },
  scheduleWeekdays: { es: "Mar - Mié", en: "Tue - Wed" },
  scheduleWeekend: { es: "Jue - Vie - Sáb", en: "Thu - Fri - Sat" },
  scheduleSunday: { es: "Dom", en: "Sun" },
  scheduleMonday: { es: "Lunes", en: "Monday" },
  scheduleClosed: { es: "Cerrado", en: "Closed" },
  // Slogan
  slogan: { es: "Por las que vale la pena romper cualquier dieta", en: "For the ones worth breaking any diet" },
  // Menú Infantil
  kidsMenu: {
    bububurgerTitle: {
      es: "PAQUETE BUBUBURGER",
      en: "BUBUBURGER KIDS MEAL"
    },
    nuggetsTitle: {
      es: "PAQUETE NUGGETS",
      en: "NUGGETS KIDS MEAL"
    },
    hotdogTitle: {
      es: "PAQUETE HOT DOG",
      en: "HOT DOG KIDS MEAL"
    },
    cheeseFingersTitle: {
      es: "PAQUETE DEDITOS DE QUESO",
      en: "CHEESE FINGERS KIDS MEAL"
    },
    bububurger: { 
      es: "Deliciosa Bububurger sencilla con queso manchego + 5 divertidas papas carita feliz y una chaparrita.",
      en: "A tasty Bububurger with manchego cheese, 5 fun smiley fries, and a small soda."
    },
    nuggets: { 
      es: "5 Nuggets + 5 divertidas papas carita feliz y una chaparrita.",
      en: "5 chicken nuggets, 5 smiley fries, and a small soda."
    },
    hotdog: { 
      es: "Hot Dog sencillo + 5 papas carita feliz y una chaparrita.",
      en: "A classic hot dog, 5 smiley fries, and a small soda."
    },
    cheeseFingers: { 
      es: "5 Dedos de queso mozzarella + 5 papas carita feliz y una chaparrita.",
      en: "5 mozzarella cheese sticks, 5 smiley fries, and a small soda."
    },
    upgradeShake: { 
      es: "+ $95 Cambia tu bebida por una malteada", 
      en: "+ $95 Upgrade your drink to a milkshake" 
    }
  },
  // Salsas y extras
  sauceTitle: { es: "Salsas disponibles y nivel de picante", en: "Available sauces and spice level" },
  sauceOrder: { es: "El orden es de menos a más picante.", en: "Ordered from least to most spicy." },
  // Etiquetas de precios
  priceLabels: {
    single: { es: "Sencilla", en: "Single" },
    double: { es: "Doble", en: "Double" },
    cheese: { es: "Queso", en: "Cheese" },
    pineapple: { es: "Piña", en: "Pineapple" },
    cheesePineapple: { es: "Queso y Piña", en: "Cheese and Pineapple" },
    natural: { es: "Natural", en: "Natural" },
    coated: { es: "Bañada", en: "Coated" }
  },
  // Equivalencias
  equivTitle: { es: "Equivalencia aproximada de piezas por gramaje", en: "Approximate piece equivalence by weight" },
  equivNote: { es: "Las piezas son aproximadas.", en: "The pieces are approximate." },
  friesIncluded: { es: "Incluye papas 70g", en: "Includes fries 70g" },
  grillBurgers: { es: "Hamburguesas al Carbón", en: "Charcoal-grilled Burgers" },
  spicyLevels: {
    es: ['Suave', 'Ligero', 'Medio', 'Picante', '¡Explosivo!'],
    en: ['Mild', 'Light', 'Medium', 'Spicy', 'Explosive!']
  }
};

export const preparedDrinksTranslations = {
  es: [
    'Tehuacán con sal y limón',
    'Sangría Señorial preparada con chile, salsa y limón',
    'Naranjada elaborada al momento, disponible con agua natural o mineral',
    'Limonada elaborada al momento, disponible con agua natural o mineral'
  ],
  en: [
    'Tehuacán with salt and lime',
    'Sangría Señorial prepared with chili, sauce, and lime',
    'Freshly made orangeade, available with still or sparkling water',
    'Freshly made lemonade, available with still or sparkling water'
  ]
}; 