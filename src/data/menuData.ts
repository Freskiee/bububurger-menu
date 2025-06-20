// import { MenuItem } from "../types/menu";
const olimpica = '/assets/menu-images/olimpica.png?url';
const mojitoFrutosRojos = '/assets/menu-images/mojito-fr.png?url';
const dedosQueso = '/assets/menu-images/dedos-queso.png?url';
const baconWestern = '/assets/menu-images/bacon_doble.png?url';
const diablo = '/assets/menu-images/diablo.png?url';
const jalapeños = '/assets/menu-images/jalapenios.png?url';
const nuggets = '/assets/menu-images/nuggets.png?url';
const aros = '/assets/menu-images/aros_de_cebolla.png?url';
const nachosChilibean = '/assets/menu-images/nachos.png?url';
const costillasElote = '/assets/menu-images/costillas-elote.png?url';
const eloteAsado = '/assets/menu-images/elote-asado.png?url';
const papasFrancesa = '/assets/menu-images/papas-francesa.png?url';
const papasCurly = '/assets/menu-images/papas-curly.png?url';
const papasGajo = '/assets/menu-images/papas-gajo.png?url';
const cariPapas = '/assets/menu-images/caripapas.png?url';
const papasWaffle = '/assets/menu-images/papas-waffle.png?url';
const sensata = '/assets/menu-images/sensata.png?url';
const dobleMoral = '/assets/menu-images/doble-queso-pinia.png?url';
const hawaiana = '/assets/menu-images/hawaiana.png?url';
const crujipollo = '/assets/menu-images/crujipollo.png?url';
const pepperoniBurger = '/assets/menu-images/peperoni.png?url';
const costraBurger = '/assets/menu-images/costra-burger.png?url';
const ariWings = '/assets/menu-images/alitas.png?url';
const boneless = '/assets/menu-images/boneless.png?url';
const hotdog = '/assets/menu-images/hot-dog.png?url';
const hotdogTocino = '/assets/menu-images/hot-dog-tocino.png?url';
const hotdogHawaiano = '/assets/menu-images/hot-dog-hawaiano.png?url';
const hotdogItalian = '/assets/menu-images/hot-dog-italiano.png?url';
const costillas = '/assets/menu-images/costilla.png?url';
const banderillas = '/assets/menu-images/banderillas.png?url';
const paqueteBububurger = '/assets/menu-images/paq-burger.png?url';
const paqueteNuggets = '/assets/menu-images/paq-nuggets.png?url';
const paqueteHotdog = '/assets/menu-images/paq-hot-dog.png?url';
const paqueteDeditos = '/assets/menu-images/paq-deditos.png?url';
const refrescos = '/assets/menu-images/refrescos-todos.png?url';
const boing = '/assets/menu-images/boing-todos.png?url';
const aguaCiel = '/assets/menu-images/ciel.png?url';
const bebidasPreparadas = '/assets/menu-images/bebidas-prepa.png?url';
const energizantes = '/assets/menu-images/energizantes.png?url';
const sodasItalianas = '/assets/menu-images/sida-italiana.png?url';
const bebidaPanditas = '/assets/menu-images/bebida-panditas2.png?url';
const cafes = '/assets/menu-images/cafes.png?url';
const tisanas = '/assets/menu-images/tisanas.png?url';
const digestivos = '/assets/menu-images/digestivos.png?url';
const cocteles = '/assets/menu-images/cocteles.png?url';
const aperitivos = '/assets/menu-images/aperitivos.png?url';
const malteadas = '/assets/menu-images/malteadas.png?url';
const mojitos = '/assets/menu-images/mojitoss.png?url';
const colores = '/assets/menu-images/colores.png?url';
const micheladasSabores = '/src/assets/menu-images/micheladas-sabo.png?url';
const tritones = '/src/assets/menu-images/tritones.png?url';
const tempura = '/src/assets/menu-images/tempura.png?url';
const cervezaBarril = '/src/assets/menu-images/cerveza-barril.png?url';
const strongbow = '/src/assets/menu-images/strongbow-preparado.png?url';
const bubuchelas = '/src/assets/menu-images/bubuchelas.png?url';
const tarros = '/src/assets/menu-images/tarros.png?url';
const premium = '/src/assets/menu-images/premium.png?url';
const nacionales = '/src/assets/menu-images/nacionales.png?url';
const micheladasTrad = '/src/assets/menu-images/micheladas-trad.png?url';
const destilados = '/src/assets/menu-images/destilados.png?url';



export interface ProductPriceOption {
  label: string;
  value: number;
  note?: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  prices: ProductPriceOption[];
  image: string;
  comment?: string;
  sauces?: string[];
  flavors?: string[];
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  products: Product[];
  chefImage?: string;
}

// Asignación de chefs por tipo de categoría
const chefPorCategoria: Record<string, string> = {
  favoritos: 'chefcitos/chef-burger.png',
  entradas: 'chefcitos/chef-principal.png',
  papas: 'chefcitos/chef-fry.png',
  bububurgers: 'chefcitos/chef-cook.png',
  wings: 'chefcitos/chef-cartoon-fry.png',
  hotdog: 'chefcitos/chef-cartoon-cook.png',
  costillas: 'chefcitos/chef-cook.png',
  infantil: 'chefcitos/chef-fiesta.png',
  bebidas: 'chefcitos/chef-bar.png',
  malteadas: 'chefcitos/chef-fiesta.png',
  cafe: 'chefcitos/chef-ok.png',
  digestivos: 'chefcitos/chef-zombi.png',
  bubuchelas: 'chefcitos/chef-cartoon-bar.png',
  cockteles: 'chefcitos/chef-bar.png',
  mojitos: 'chefcitos/chef-bar.png',
  destilados: 'chefcitos/chef-cartoon-bar.png',
  bubucocteles: 'chefcitos/chef-cartoon-bar.png',
  sidras: 'chefcitos/chef-cartoon-bar.png',
};

export const menuCategories: Category[] = [
  // 1. ¡Los Más Pedidos! 🔥
  {
    id: "favoritos",
    name: "¡Los Más Pedidos! 🔥",
    icon: "",
    chefImage: chefPorCategoria["favoritos"],
    products: [
      {
        id: "f1",
        name: "BUBUBURGER OLÍMPICA",
        description: "Ex-qui-si-ta, simplemente el mejor balance de sabor, 100 gr. de carne de res sazonada con la receta secreta de la casa, gratinada con queso manchego, tocino, y un par de deliciosos aros de cebolla con un toque de blue-cheese. Lechuga, jitomate, cebolla caramelizada, pepinillos, chiles, catsup, mostaza y mayonesa.",
        prices: [
          { label: "", value: 170 },
          { label: "Doble", value: 185 }
        ],
        image: olimpica,
      },
      {
        id: "f2", 
        name: "MOJITO FRUTOS ROJOS",
        description: "Refrescante combinación de ron blanco con frutos rojos naturales, hojas de menta y un toque de limón, servido sobre hielo en vaso de litro. Ideal para quienes buscan un sabor equilibrado entre lo frutal y lo herbal.",
        prices: [
          { label: "1/2", value: 85 },
          { label: "1 Lt", value: 145 }
        ],
        image: mojitoFrutosRojos,
      },
      {
        id: "f3",
        name: "BUBU-DEDOS DE QUESO",
        description: "6 Deditos de queso fritos por fuera con un toque delicado de especias y por dentro queso mozzarella derretido, acompañados con salsa tipo italiana. ¡Cuidado no te muerdas tus propios dedos, que te van a quedar cortos para pedir más!",
        prices: [
          { label: "", value: 135 }
        ],
        image: dedosQueso,
      },
      {
        id: "f4",
        name: "BACON WESTERN",
        description: "Esta hamburguesa te hará sentir en el viejo Oeste por su selecto tocino bien doradito, su queso manchego y un delicado toque de salsa BBQ. ¡Así que ponte las botas, el sombrero de cowboy y prepárate para bailar el Payaso de Rodeo… ajúa! Lechuga, jitomate, cebolla caramelizada, pepinillos, chiles, catsup, mostaza y mayonesa.",
        prices: [
          { label: "", value: 170 },
          { label: "Doble", value: 185 }
        ],
        image: baconWestern,
      },
      {
        id: "f5", 
        name: "EL DIABLO",
        description: "Mezcla intensa y refrescante de tequila, vino tinto y agua mineral, con un toque de limón y jarabe natural. Servida con escarchado de chamoy y tajín para un acabado picante y equilibrado.",
        prices: [
          { label: "1 Lt", value: 145 }
        ],
        image: diablo,
      },
    ]
  },
  // 2. Entradas
  {
    id: "entradas",
    name: "Entradas",
    icon: "",
    chefImage: chefPorCategoria["entradas"],
    products: [
      {
        id: "e1",
        name: "BUBU-DEDOS DE QUESO",
        description: "6 Deditos de queso fritos por fuera con un toque delicado de especias y por dentro queso mozzarella derretido, acompañados con salsa tipo italiana. ¡Cuidado no te muerdas tus propios dedos, que te van a quedar cortos para pedir más!",
        prices: [
          { label: "", value: 135 }
        ],
        image: dedosQueso,
      },
      {
        id: "e2",
        name: "BUBU-CHILES RELLENOS",
        description: "6 Chiles jalapeños atrevidos rellenos de queso Philadelphia y empanizados por fuera, acompañados de Ketchup Heinz y queso amarillo tipo cheddar, ¡serán el remedio para tu antojo desenfrenado!",
        prices: [
          { label: "", value: 135 }
        ],
        image: jalapeños,
      },
      {
        id: "e3",
        name: "BUBU-NUGGETS",
        description: "Nuestros Nuggets de pechuga de pollo Pilgrim's Pride (10 pzs), ¡Crujientes y dorados siempre! Acompañados de Kétchup Heinz y queso amarillo tipo Cheddar.",
        prices: [
          { label: "", value: 135 }
        ],
        image: nuggets,
      },
      {
        id: "e4",
        name: "BUBU-AROS DE CEBOLLA",
        description: "Perfectos aros de cebolla fritos y crujientes (10 pzs), acompañados con aderezo de blue cheese o ranch. ¡Te aseguramos que si los aros Olímpicos tuvieran sabor, a estos sabrían!",
        prices: [
          { label: "", value: 135 }
        ],
        image: aros,
      },
      {
        id: "e5",
        name: "BUBU-NACHOS CHILIBEAN",
        description: "Crujientes nachos acompañados con una deliciosa mezcla de chili bean, a base de carne molida de res, frijoles, salsa italiana, servidos con rodajas de jalapeño y abundante queso amarillo tipo Cheddar. ¡Perfectos para compartir!",
        prices: [
          { label: "", value: 220 }
        ],
        image: nachosChilibean,
      },
      {
        id: "e6",
        name: "COSTILLAS DE ELOTE AMARILLO",
        description: "Estas costillitas de elote dulce amarillo, bañaditas con salsa Hot BBQ, Cajun, Tajín y un toque de perejil deshidratado con limón te harán bailar como texano. Son perfectas para compartir y calmar tus antojos, ¡así que prepárate para chuparte los dedos!",
        prices: [
          { label: "", value: 170 }
        ],
        image: costillasElote,
        sauces: [
          "bbq",
          "hot bbq",
          "mango habanero",
        ],
      },
      {
        id: "e7",
        name: "ELOTE ASADO",
        description: "Elote dulce amarillo asado a la parrilla, servido con un toque de sal y especias. Perfecto para acompañar cualquier platillo o disfrutar por sí solo con su sabor ahumado y natural.",
        prices: [
          { label: "", value: 75 }
        ],
        image: eloteAsado,
      }
    ]
  },
  // 3. Papas
  {
    id: "papas",
    name: "Papas",
    icon: "",
    chefImage: chefPorCategoria["papas"],
    products: [
      {
        id: "p1",
        name: "PAPAS A LA FRANCESA",
        description: "Generosa porción de papas corte recto, calientitas y bien fritas; acompañadas de Kétchup Heinz y queso amarillo tipo Cheddar. ¡Obviamente sazonadas con nuestros polvos mágicos!",
        prices: [
          { label: "", value: 110 }
        ],
        image: papasFrancesa,
      },
      {
        id: "p2",
        name: "PAPAS CURLY",
        description: "Deliciosas papas espiral delicadamente sazonadas y muy crujientes, acompañadas con Kétchup Heinz y queso amarillo tipo Cheddar.",
        prices: [
          { label: "", value: 110 }
        ],
        image: papasCurly,
      },
      {
        id: "p3",
        name: "PAPAS GAJO",
        description: "Grandiosas papas gajo en cortes de gran tamaño, doradas por fuera y suaves por dentro, acompañadas de Kétchup Heinz y queso amarillo tipo Cheddar.",
        prices: [
          { label: "", value: 110 }
        ],
        image: papasGajo,
      },
      {
        id: "p4",
        name: "CARI-PAPAS",
        description: "Simpáticas papas en forma de carita feliz esponjaditas, fritas y calientitas, acompañadas de Kétchup Heinz y queso amarillo tipo Cheddar.",
        prices: [
          { label: "", value: 110 }
        ],
        image: cariPapas,
      },
      {
        id: "p5",
        name: "PAPAS WAFFLE",
        description: "Pide estas bellezas de papas en forma de Waffle, crujientes y deliciosas, acompañadas con Kétchup Heinz y queso amarillo tipo Cheddar.",
        prices: [
          { label: "", value: 110 }
        ],
        image: papasWaffle,
      }
    ]
  },
  // 4. Banderillas
  {
    id: "banderillas",
    name: "Banderillas",
    icon: "",
    chefImage: chefPorCategoria["entradas"],
    products: [
      {
        id: "bd1",
        name: "BANDERILLA CLÁSICA",
        description: "Salchichas empanizadas con masa dorada y crujiente, montadas en palillos de madera. Fritas al momento para lograr una textura ligera y perfectamente dorada. Servidas listas para acompañar con tus salsas favoritas.",
        prices: [
          { label: "2 Pzs", value: 140, note: "Incluye papas 70g" },
          { label: "5 Pzs", value: 180 }
        ],
        image: banderillas,
      }
    ]
  },
  // 5. Bububurgers
  {
    id: "bububurgers",
    name: "Bububurgers",
    icon: "",
    chefImage: chefPorCategoria["bububurgers"],
    products: [
      {
        id: "b1",
        name: "LA SENSATA",
        description: "100 gr. de carne de res sazonada con la receta secreta de la casa. Lechuga, jitomate, cebolla caramelizada, pepinillos, chiles, catsup, mostaza y mayonesa.",
        prices: [
          { label: "Sencilla", value: 145 },
          { label: "Queso o Piña", value: 150 },
          { label: "Queso y Piña", value: 155 }
        ],
        image: sensata,
      },
      {
        id: "b2",
        name: "DOBLE MORAL",
        description: "Dos carnes de 100 gr. de res sazonadas con la receta secreta de la casa. Lechuga, jitomate, cebolla caramelizada, pepinillos, chiles, catsup, mostaza y mayonesa.",
        prices: [
          { label: "Queso o Piña", value: 165 },
          { label: "Queso y Piña", value: 180 }
        ],
        image: dobleMoral,
      },
      {
        id: "b3",
        name: "OLÍMPICA",
        description: "Ex-qui-si-ta, simplemente el mejor balance de sabor, 100 gr. de carne de res sazonada con la receta secreta de la casa, gratinada con queso manchego, tocino, y un par de deliciosos aros de cebolla con un toque de blue-cheese. Lechuga, jitomate, cebolla caramelizada, pepinillos, chiles, catsup, mostaza y mayonesa.",
        prices: [
          { label: "Sencilla", value: 170 },
          { label: "Doble", value: 185 }
        ],
        image: olimpica,
      },
      {
        id: "b4",
        name: "TROPICAL - HAWAIANA",
        description: "La inconfundible hamburguesa hawaiana con su deliciosa piña tropical, asada lentamente a la parrilla, jamón Virginia, queso manchego y su tocino bien frito a la plancha. ¡Esta Bububurger te hará bailar el Waikiki! Lechuga, jitomate, cebolla caramelizada, pepinillos, chiles, catsup, mostaza y mayonesa.",
        prices: [
          { label: "Sencilla", value: 175 },
          { label: "Doble", value: 190 }
        ],
        image: hawaiana,
      },
      {
        id: "b5",
        name: "BACON WESTERN",
        description: "Esta hamburguesa te hará sentir en el viejo Oeste por su selecto tocino bien doradito, su queso manchego y un delicado toque de salsa BBQ. ¡Así que ponte las botas, el sombrero de cowboy y prepárate para bailar el Payaso de Rodeo… ajúa! Lechuga, jitomate, cebolla caramelizada, pepinillos, chiles, catsup, mostaza y mayonesa.",
        prices: [
          { label: "Sencilla", value: 170 },
          { label: "Doble", value: 185 }
        ],
        image: baconWestern,
      },
      {
        id: "b6",
        name: "CRUJIPOLLO",
        description: "Para los fanáticos del pollo les tenemos esta maravillosa Bububurger de pollo extra crunchy, puedes pedirla al natural (Como dios la trajo al mundo) o bañadita en cualquiera de nuestras salsas de la casa, además viene con un toque de aderezo blue-cheese. Lechuga, jitomate, cebolla caramelizada, pepinillos, chiles, catsup, mostaza y mayonesa.",
        prices: [
          { label: "Natural", value: 160 },
          { label: "Bañada", value: 175 }
        ],
        image: crujipollo,
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
        ],
      },
      {
        id: "b7",
        name: "PEPPERONI BURGER",
        description: "La Bububurger molto Italiana! Fue especialmente diseñada para los amantes de las pipshas, te aseguramos que te hará recordar en cada bocado el rico sabor de una rebanada de pizza, lleva extra queso manchego, pepperoni y salsa italiana. buon appetito!",
        prices: [
          { label: "Sencilla", value: 170 },
          { label: "Doble", value: 185 }
        ],
        image: pepperoniBurger,
      },
      {
        id: "b8",
        name: "COSTRA BURGER",
        description: "Nuestra Bububurger consentida, es una delicia por su crujiente costra de queso con tocino frito y un toque de aderezo secreto, receta de la casa. Puedes pedirla sencilla o doble, y si te animas por la doble, te espera una doble costra de queso con tocino. ¡Crunchy, crunchy!",
        prices: [
          { label: "Sencilla", value: 175 },
          { label: "Doble", value: 190 }
        ],
        image: costraBurger,
      },
    ]
  },
  // 6. Ari-Wings y Boneless
  {
    id: "wings",
    name: "Ari-Wings y Boneless",
    icon: "",
    chefImage: chefPorCategoria["wings"],
    products: [
      {
        id: "w1",
        name: "ARI-WINGS",
        description: "Muchos presumen tener las mejores alitas... pero las nuestras sí lo demuestran. Están tan grandes que parecen piernitas de pollo, bien jugosas, bien bañadas y servidas con su lechuguita y un toque de ranch o blue cheese. 🔥 Te retamos a que te comas solo una... ¡imposible!",
        prices: [
          { label: "10 Pzs", value: 220, note: "Incluye 2 salsas a elegir" },
          { label: "15 Pzs", value: 270, note: "Incluye 3 salsas a elegir" }
        ],
        image: ariWings,
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
        ],
      },
      {
        id: "w2",
        name: "CHICKEN BONELESS",
        description: "¡Sin huesos, sin excusas! Nuestros Boneless son puro placer: pollo jugoso, crujiente por fuera, bañado en la salsa que más te prende. ¿Blue cheese o ranch? Tú mandas. 💥 Advertencia: este manjar ha sido culpable de muchas lamidas de dedos… y de platos vacíos en segundos.",
        prices: [
          { label: "225 gr.", value: 235, note: "225 gr. ≈ 8 pzas. | 515 gr. ≈ 13 pzas. | 1100 gr. ≈ 28 pzas." },
          { label: "515 gr.", value: 355 },
          { label: "1100 gr.", value: 605 }
        ],
        image: boneless,
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
        ],
      },
    ]
  },
  // 7. Hot-dogs JUMBO
  {
    id: "hotdog",
    name: "Hot-dogs JUMBO",
    icon: "",
    chefImage: chefPorCategoria["hotdog"],
    products: [
      {
        id: "h1",
        name: "SENCILLITO Y SIN RODEOS",
        description: "Salchicha de 30 cm servida en pan suave tipo hotdog, con catsup, mostaza, cebolla y chiles jalapeños. Acompañado de papas a la francesa sazonadas con polvo especial.",
        prices: [
          { label: "Salchicha de Pavo", value: 95 },
          { label: "Salchicha de Res", value: 120 }
        ],
        image: hotdog,
      },
      {
        id: "h2",
        name: "HOT DOG TOCINO",
        description: "Salchicha de 30 cm servida en pan suave tipo hotdog, con abundante tocino crujiente, catsup, mostaza, cebolla y chiles jalapeños. Acompañado de papas a la francesa sazonadas con polvo especial.",
        prices: [
          { label: "Salchicha de Pavo", value: 110 },
          { label: "Salchicha de Res", value: 135 }
        ],
        image: hotdogTocino,
      },
      {
        id: "h3",
        name: "HOT DOG HAWAIANO",
        description: "Salchicha de 30 cm servida en pan suave tipo hotdog, con tocino, piña, queso manchego. Acompañado de papas a la francesa sazonadas con polvo especial.",
        prices: [
          { label: "Salchicha de Pavo", value: 125 },
          { label: "Salchicha de Res", value: 150 }
        ],
        image: hotdogHawaiano,
      },
      {
        id: "h4",
        name: "HOT DOG ITALIANO",
        description: "Salchicha de 30 cm servida en pan suave tipo hotdog, con quesomanchego, salsa italiana y pepperoni.",
        prices: [
          { label: "Salchicha de Pavo", value: 125 },
          { label: "Salchicha de Res", value: 150 }
        ],
        image: hotdogItalian,
      }
    ]
  },
  // 8. Costillas BBQ
  {
    id: "costillas",
    name: "Costillas BBQ",
    icon: "",
    chefImage: chefPorCategoria["costillas"],
    products: [
      {
        id: "c1",
        name: "BUBU-COSTILLAS BBQ",
        description: "¡Llegaron las costillas que ni Thalía se imaginó! Jugosas Grilled Baby Back Ribs de cerdo, bien barnizadas con tu wing sauce favorita, sobre cama de lechuga fresca. Vienen acompañadas de un elotito dulce con mantequilla y nuestros polvitos mágicos que le dan el toque especial. ¿No eres de elote? Cámbialo por papitas sin costo. 😉",
        prices: [
          { label: "", value: 315 }
        ],
        image: costillas,
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
        ],
      },
      {
        id: "c2",
        name: "COSTILLAS DE ELOTE AMARILLO",
        description: "Estas costillitas de elote dulce amarillo, bañaditas con salsa Hot BBQ, Cajun, Tajín y un toque de perejil deshidratado con limón te harán bailar como texano. Son perfectas para compartir y calmar tus antojos, ¡así que prepárate para chuparte los dedos!",
        prices: [
          { label: "", value: 170 }
        ],
        image: costillasElote,
        sauces: [
          "bbq",
          "hot bbq",
          "mango habanero"
        ]
      }
    ]
  },
  // 9. Menú Infantil
  {
    id: "infantil",
    name: "Menú Infantil",
    icon: "",
    chefImage: chefPorCategoria["infantil"],
    products: [
      {
        id: "k1",
        name: "PAQUETE BUBUBURGER",
        description: "Deliciosa Bububurger sencilla con queso manchego + 5 divertidas papas carita feliz y una chaparrita.",
        prices: [
          { label: "", value: 160 }
        ],
        image: paqueteBububurger,
      },
      {
        id: "k2",
        name: "PAQUETE NUGGETS",
        description: "5 Nuggets + 5 divertidas papas carita feliz y una chaparrita.",
        prices: [
          { label: "", value: 160 }
        ],
        image: paqueteNuggets,
      },
      {
        id: "k3",
        name: "PAQUETE HOTDOG",
        description: "Hot Dog sencillo + 5 papas carita feliz y una chaparrita. ",
        prices: [
          { label: "", value: 130 }
        ],
        image: paqueteHotdog,
      },
      {
        id: "k4",
        name: "PAQUETE DEDITOS DE QUESO",
        description: "5 Dedos de queso mozzarella + 5 papas carita feliz y una chaparrita.",
        prices: [
          { label: "", value: 160 }
        ],
        image: paqueteDeditos,
      }
    ]
  },
  // 10. Bebidas y Refrescos
  {
    id: "bebidas",
    name: "Bebidas y Refrescos",
    icon: "",
    chefImage: chefPorCategoria["bebidas"],
    products: [
      {
        id: "bebida-1",
        name: "SODAS",
        description: "Refrescos de la familia Coca-Cola en presentación de 355 ml.",
        prices: [
          { label: "", value: 45 }
        ],
        image: refrescos,
      },
      {
        id: "bebida-2",
        name: "BOING",
        description: "Bebidas Boing de 355 ml en distintos sabores, elaboradas con fruta natural.",
        prices: [
          { label: "", value: 45 }
        ],
        image: boing,
      },
      {
        id: "agua-ciel",
        name: "AGUA CIEL",
        description: "Agua Ciel embotellada de 600ml.",
        prices: [
          { label: "", value: 30 }
        ],
        image: aguaCiel,
      },
      {
        id: "bebida-4",
        name: "BEBIDAS PREPARADAS",
        description: "Explosión de sabor en cada sorbo. Refrescos clásicos como Sangría Señorial o Tehuacán, elevados con limón, sal, salsas y chiles. Ideales para quienes buscan un toque picosito y refrescante al mismo tiempo.",
        prices: [
          { label: "", value: 65 }
        ],
        image: bebidasPreparadas,
      },
      {
        id: "bebida-5",
        name: "BEBIDAS ENERGIZANTES",
        description: "Activa tus sentidos con nuestras bebidas energizantes disponibles en dos sabores: guaraná y mora azul. Ideales para recargar energía y disfrutar de un sabor intenso y refrescante.",
        prices: [
          { label: "", value: 65 }
        ],
        image: energizantes,
      },
      {
        id: "bebida-6",
        name: "SODAS ITALIANAS 1 LT",
        description: "Refrescantes y burbujeantes, nuestras sodas italianas combinan agua mineral con jarabes de sabores frutales para ofrecerte una bebida ligera, colorida y llena de sabor.",
        prices: [
          { label: "", value: 120 }
        ],
        image: sodasItalianas,
      },
      {
        id: "bebida-7",
        name: "BEBIDA DE PANDITAS",
        description: "Yakult, Refresco de Lima Limón y Gomitas de Panditas, Escarchado de Sabores.",
        prices: [
          { label: "", value: 80 }
        ],
        image: bebidaPanditas,
      },
      {
        id: "bebida-8",
        name: "CAFÉS",
        description: "Cafés de la casa, con leche, capuchino, expreso, americano, etc.",
        prices: [
        ],
        image: cafes,
      },
      {
        id: "bebida-9",
        name: "TISANAS NATURALES",
        description: "Infusión de frutas y hierbas seleccionadas, ideal para cualquier momento del día. Disfrútala fría o caliente, con colar o sin colar, según tu preferencia. Refrescante, reconfortante y llena de sabor.",
        flavors: ["Kiwi-Fresa", "Maracuyá", "Frutos Caribeños", "Fantasía Tropical", "Frutos Rojos"],
        prices: [
          { label: "", value: 80 }
        ],
        image: tisanas,
      },
    ]
  },
  // 11. Bebidas Alcohólicas
  {
    id: "alcoholicas",
    name: "BEBIDAS CON ALCOHOL",
    icon: "",
    chefImage: chefPorCategoria["bubuchelas"],
    products: [
      {
        id: "a1",
        name: "APERITIVOS",
        description: "Para empezar con el pie derecho. Estos traguitos son ideales para ir calentando motores antes de la comida. Ligeros, sabrosos y con ese toque que te abre el apetito. ¡El preámbulo perfecto para lo que viene!",
        prices: [
        ],
        image: aperitivos,
      },
      {
        id: "a2",
        name: "COCTELES ESPECIALES",
        description: "Una selección de cocteles únicos y elaborados, cada uno con su propia historia y combinación perfecta de sabores. Desde clásicos con un toque especial hasta creaciones exclusivas de nuestra casa.",
        prices: [          
        ],
        image: cocteles
      },
      {
        id: "a4",
        name: "MOJITOS",
        description: "Refresca tu día con nuestros mojitos artesanales, preparados al momento con frutas naturales, hierbabuena fresca, limón y mucho hielo.",
        prices: [
          { label: "1 Litro", value: 145 },
          { label: "1/2 Litro", value: 85 }
        ],
        image: mojitos,
      },
      {
        id: "a11",
        name: "COLORES",
        description: "Un arcoíris de sabor, deliciosas bebidas para el pre perfecto. ¡Salud!",
        prices: [
          { label: "1 Litro", value: 140 },
          { label: "1/2 Litro", value: 80 }
        ],
        image: colores,
      },
      {
        id: "a5",
        name: "CHELAS PREMIUM",
        description: "Heineken, Ultra, Bohemia Clara, Bohemia Oscura, XX Lager, XX Ámbar",
        prices: [
          { label: "", value: 70 }
        ],
        image: premium,
      },
      {
        id: "a6",
        name: "CHELAS NACIONALES",
        description: "Tecate, Tecate Ligth, Indio, Corona, Victoria",
        prices: [
          { label: "", value: 60 }
        ],
        image: nacionales,
      },
      {
        id: "a7",
        name: "CERVEZA DE BARRIL",
        description: "Clara u oscura, siempre bien fría, tirada directo de la torre. Espumosa, refrescante y con el sabor auténtico que se disfruta hasta el último trago.",
        prices: [
          { label: "1/2 Litro", value: 75 },
          { label: "1 Litro", value: 120 }
        ],
        image: cervezaBarril,
      },
      {
        id: "a8",
        name: "TARROS PREPARADOS",
        description: "Michelada sal y limón, Clamatada, Cubana, Sabor",
        prices: [
          { label: "Sal y Limón", value: 20 },
          { label: "Clamatada", value: 35 },
          { label: "Cubana", value: 25 },
          { label: "Sabor", value: 35 }
        ],
        image: tarros,
      },
      {
        id: "a9",
        name: "MICHELADAS TRADICIONALES",
        description: "Michelada sal y limón, Clamachela, Cubana",
        prices: [
          { label: "Michelada 1L", value: 130 },
          { label: "Michelada 1/2L", value: 85 },
          { label: "Clamachela 1L", value: 150 },
          { label: "Clamachela 1/2L", value: 95 },
          { label: "Cubana 1L", value: 135 },
          { label: "Cubana 1/2L", value: 90 }
        ],
        image: micheladasTrad,
      },
      {
        id: "a10",
        name: "MICHELADAS DE SABORES",
        description: "Cerveza de barril clara / Oscura con escarchado y sabor de: Mango, Tamarindo, Chamoy y Ajonjolí, Mora Azul, Sandía, Fresa, Uva, Manzana Verde",
        prices: [
          { label: "1 Litro", value: 135 },
          { label: "1/2 litro", value: 90 }
        ],
        image: micheladasSabores,
      },
      {
        id: "a17",
        name: "TRITÓN DE 5 LITROS",
        description: "Claro / Oscuro, Colores / Mojito",
        prices: [
          { label: "Claro/Oscuro", value: 525 },
          { label: "Colores/Mojito", value: 620 }
        ],
        image: tritones,
      },
      {
        id: "a12",
        name: "BUBUCHELA ARTESANAL",
        description: "Blanca: Blonde Ale con especias. Oscura: Del tipo Dubbel con notas de café",
        prices: [
          { label: "", value: 130 }
        ],
        image: bubuchelas,
      },
      {
        id: "a13",
        name: "STRONGBOW",
        description: "SENCILLO O PREPARADO CON FRUTOS ROJOS",
        prices: [
          { label: "Sencillo", value: 90 },
          { label: "Preparado", value: 105 }
        ],
        image: strongbow,
      },
      {
        id: "a14",
        name: "DESTILADOS",
        description: "WHISKY, TEQUILA, RON, VODKA, MEZCAL, BRANDY",
        prices: [
          { label: "1 Litro", value: 145 },
          { label: "1/2 Litro", value: 85 }
        ],
        image: destilados,
      },
      {
        id: "a15",
        name: "DIGESTIVOS",
        description: "El final perfecto para tu comida. Disfruta de nuestra selección de licores suaves y aromáticos, ideales para acompañar el postre o cerrar con broche de oro.",
        prices: [
        ],
        image: digestivos,
      },
    ]
  },
  // 12. Malteadas y Postres
  {
    id: "malteadas-postres",
    name: "Malteadas y Postres",
    icon: "",
    chefImage: chefPorCategoria["malteadas"],
    products: [
      {
        id: "malteada-1",
        name: "BUBUMALTEADAS",
        description: "Preparamos cada malteada con leche deslactosada y helado cremoso de la mejor calidad. Las acompañamos con crema batida, chispas de colores y ese toque especial que las hace únicas: ya sea chocolate derretido, mazapán, galleta, chicle o tu topping favorito. ¡Son el antojo perfecto para consentirte a cualquier hora!",
        prices: [
          { label: "", value: 130 }
        ],
        image: malteadas,
      },
      {
        id: "malteada-2",
        name: "BUBUTEMPURA OREO",
        description: "Crujientes galletas Oreo cubiertas con una deliciosa capa de tempura dorada, acompañadas de una bola de cremoso helado del sabor que elijas. Servidas con un toque de crema chantilly, chispas de colores y coronadas con una jugosa cereza. ¡Un postre irresistible que combina textura y dulzura en cada bocado!",
        prices: [
          { label: "", value: 160 }
        ],
        image: tempura,
      }
    ]
  },
  // 13. Extras
  {
    id: "extras",
    name: "Extras",
    icon: "",
    chefImage: chefPorCategoria["cafe"],
    products: []
  }
];