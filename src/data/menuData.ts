// import { MenuItem } from "../types/menu";
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
import papasFrancesa from "/menu-images/papas-francesa.png";
import papasCurly from "/menu-images/papas-curly.png";
import papasGajo from "/menu-images/papas-gajo.png";
import cariPapas from "/menu-images/caripapas.png";
import papasWaffle from "/menu-images/papas-waffle.png";
import sensata from "/menu-images/sensata.png";
import dobleMoral from "/menu-images/doble-queso-pinia.png";
import hawaiana from "/menu-images/hawaiana.png";
import crujipollo from "/menu-images/crujipollo.png";
import pepperoniBurger from "/menu-images/peperoni.png";
import costraBurger from "/menu-images/costra-burger.png";
import ariWings from "/menu-images/alitas.png";
import boneless from "/menu-images/boneless.png";
import hotdog from "/menu-images/hot-dog.png";
import hotdogTocino from "/menu-images/hot-dog-tocino.png";
import hotdogHawaiano from "/menu-images/hot-dog-hawaiano.png";
import hotdogItalian from "/menu-images/hot-dog-italiano.png";
import costillas from "/menu-images/costilla.png";
import banderillas from "/menu-images/banderillas.png";
import paqueteBububurger from "/menu-images/paq-burger.png";
import paqueteNuggets from "/menu-images/paq-nuggets.png";
import paqueteHotdog from "/menu-images/paq-hot-dog.png";
import paqueteDeditos from "/menu-images/paq-deditos.png";

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
        description: "Ex-qui-si-ta, simplemente el mejor balance de sabor, 100 gr. de carne de res sazonada con la receta secreta de la casa, gratinada con queso manchego, tocino, y un par de deliciosos aros de cebolla con un toque de blue-cheese.",
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
          { label: "Precio", value: 120 }
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
          { label: "Precio", value: 110 }
        ],
        image: papasFrancesa,
      },
      {
        id: "p2",
        name: "PAPAS CURLY",
        description: "Deliciosas papas espiral delicadamente sazonadas y muy crujientes, acompañadas con Kétchup Heinz y queso amarillo tipo Cheddar.",
        prices: [
          { label: "Precio", value: 110 }
        ],
        image: papasCurly,
      },
      {
        id: "p3",
        name: "PAPAS GAJO",
        description: "Grandiosas papas gajo en cortes de gran tamaño, doradas por fuera y suaves por dentro, acompañadas de Kétchup Heinz y queso amarillo tipo Cheddar.",
        prices: [
          { label: "Precio", value: 110 }
        ],
        image: papasGajo,
      },
      {
        id: "p4",
        name: "CARI-PAPAS",
        description: "Simpáticas papas en forma de carita feliz esponjaditas, fritas y calientitas, acompañadas de Kétchup Heinz y queso amarillo tipo Cheddar.",
        prices: [
          { label: "Precio", value: 110 }
        ],
        image: cariPapas,
      },
      {
        id: "p5",
        name: "PAPAS WAFFLE",
        description: "Pide estas bellezas de papas en forma de Waffle, crujientes y deliciosas, acompañadas con Kétchup Heinz y queso amarillo tipo Cheddar.",
        prices: [
          { label: "Precio", value: 110 }
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
          { label: "Sencilla", value: 135 },
          { label: "Queso o Piña", value: 140 },
          { label: "Queso y Piña", value: 145 }
        ],
        image: sensata,
      },
      {
        id: "b2",
        name: "DOBLE MORAL",
        description: "Dos carnes de 100 gr. de res sazonadas con la receta secreta de la casa. Lechuga, jitomate, cebolla caramelizada, pepinillos, chiles, catsup, mostaza y mayonesa.",
        prices: [
          { label: "Queso o Piña", value: 160 },
          { label: "Queso y Piña", value: 175 }
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
          { label: "Sencilla", value: 170 },
          { label: "Doble", value: 185 }
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
        name: "HOT DOG CLÁSICO",
        description: "Salchicha de pavo de 30 cm servida en pan suave tipo hotdog, con catsup, mostaza, cebolla y chiles jalapeños. Acompañado de papas a la francesa sazonadas con polvo especial.",
        prices: [
          { label: "Salchicha de Pavo", value: 120 },
          { label: "Salchicha de Res", value: 150 }
        ],
        image: hotdog,
      },
      {
        id: "h2",
        name: "HOT DOG TOCINO",
        description: "Salchicha de pavo de 30 cm servida en pan suave tipo hotdog, con abundante tocino crujiente, catsup, mostaza, cebolla y chiles jalapeños. Acompañado de papas a la francesa sazonadas con polvo especial.",
        prices: [
          { label: "Salchicha de Pavo", value: 125 },
          { label: "Salchicha de Res", value: 155 }
        ],
        image: hotdogTocino,
      },
      {
        id: "h3",
        name: "HOT DOG HAWAIANO",
        description: "Salchicha de pavo de 30 cm servida en pan suave tipo hotdog, con jamón Virginia, piña caramelizada, queso manchego y un toque de salsa BBQ. Acompañado de papas a la francesa sazonadas con polvo especial.",
        prices: [
          { label: "Salchicha de Pavo", value: 125 },
          { label: "Salchicha de Res", value: 150 }
        ],
        image: hotdogHawaiano,
      },
      {
        id: "h4",
        name: "HOT DOG ITALIANO",
        description: "Salchicha de pavo de 30 cm servida en pan suave tipo hotdog, bañada en una abundante salsa italiana estilo boloñesa, elaborada con carne molida de res, jitomate y especias mediterráneas. Acompañado de papas a la francesa sazonadas con polvo especial.",
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
          { label: "Precio", value: 315 }
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
          { label: "Precio", value: 120 }
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
        name: "REFRESCOS",
        description: "Coca-Cola, Coca sin azúcar, Coca Light, Fanta, Delaware Punch, Sidral Mundet, Mundet rojo, Sprite, Fresca, Sangría Señorial, Agua Mineral",
        prices: [
          { label: "Precio", value: 35 }
        ],
        image: "https://images.pexels.com/photos/1187766/pexels-photo-1187766.jpeg?auto=compress&cs=tinysrgb&w=300",
      },
      {
        id: "bebida-2",
        name: "BOING",
        description: "Mango, Manzana, Guayaba, Uva, Tamarindo",
        prices: [
          { label: "Precio", value: 35 }
        ],
        image: "https://images.pexels.com/photos/1187766/pexels-photo-1187766.jpeg?auto=compress&cs=tinysrgb&w=300",
      },
      {
        id: "bebida-3",
        name: "AGUA CIEL",
        description: "Botella de agua Natural Ciel de 600ml",
        prices: [
          { label: "Precio", value: 25 }
        ],
        image: "https://images.pexels.com/photos/1187766/pexels-photo-1187766.jpeg?auto=compress&cs=tinysrgb&w=300",
      },
      {
        id: "bebida-4",
        name: "BEBIDAS PREPARADAS",
        description: "Tehuacán preparado sal y limón, Sangría Señorial preparada chile, salsa y limón, Naranjada natural o mineral, Limonada natural o mineral",
        prices: [
          { label: "Precio", value: 45 }
        ],
        image: "https://images.pexels.com/photos/1187766/pexels-photo-1187766.jpeg?auto=compress&cs=tinysrgb&w=300",
      },
      {
        id: "bebida-5",
        name: "ENERGY DRINKS",
        description: "Volt azul, Amper amarillo, Amper rojo",
        prices: [
          { label: "Precio", value: 45 }
        ],
        image: "https://images.pexels.com/photos/1187766/pexels-photo-1187766.jpeg?auto=compress&cs=tinysrgb&w=300",
      },
      {
        id: "bebida-6",
        name: "SODAS ITALIANAS 1 LT",
        description: "Limonada de Fresa Salvaje con Perlas Explosivas, Limonada de Mora Azul con Perlas Explosivas",
        prices: [
          { label: "Precio", value: 85 }
        ],
        image: "https://images.pexels.com/photos/1187766/pexels-photo-1187766.jpeg?auto=compress&cs=tinysrgb&w=300",
      },
      {
        id: "bebida-7",
        name: "BEBIDA DE PANDITAS",
        description: "Yakult, Refresco de Lima Limón y Gomitas de Panditas, Escarchado de Sabores",
        prices: [
          { label: "Precio", value: 65 }
        ],
        image: "https://images.pexels.com/photos/1187766/pexels-photo-1187766.jpeg?auto=compress&cs=tinysrgb&w=300",
      },
      {
        id: "bebida-8",
        name: "CAFÉS",
        description: "Café Americano, Con leche, Capuchino, Capuchino Vainilla, Capuchino Caramel, Con Licor de Café Kahlúa, Expreso Sencillo, Expreso Doble, Expreso Doble Cortado",
        prices: [
          { label: "Americano", value: 50 },
          { label: "Con leche", value: 55 },
          { label: "Capuchino", value: 65 },
          { label: "Capuchino Vainilla", value: 70 },
          { label: "Capuchino Caramel", value: 70 },
          { label: "Con Kahlúa", value: 15, note: "Adicional" },
          { label: "Expreso Sencillo", value: 55 },
          { label: "Expreso Doble", value: 70 },
          { label: "Expreso Doble Cortado", value: 75 }
        ],
        image: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=300",
      },
      {
        id: "bebida-9",
        name: "TISANAS FRUTALES",
        description: "Kiwi-Fresa, Maracuyá, Frutos Caribeños, Fantasía Tropical, Frutos Rojos. Pídela fría o caliente, con colar o sin colar",
        prices: [
          { label: "Precio", value: 45 }
        ],
        image: "https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=300",
      }
    ]
  },
  // 11. Bebidas Alcohólicas
  {
    id: "alcoholicas",
    name: "Bebidas Alcohólicas",
    icon: "",
    chefImage: chefPorCategoria["bubuchelas"],
    products: [
      {
        id: "a1",
        name: "DIGESTIVOS",
        description: "Carajillo to shake or not to shake, Carajillo conejito Turín, Baileys, Midori, Licor 43, Frangelico",
        prices: [
          { label: "Carajillo", value: 155 },
          { label: "Carajillo Turín", value: 185 },
          { label: "Baileys", value: 115 },
          { label: "Midori", value: 120 },
          { label: "Licor 43", value: 120 },
          { label: "Frangelico", value: 120 }
        ],
        image: "https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=300",
      },
      {
        id: "a2",
        name: "APERITIVOS",
        description: "Aperol, Campari, Anís Pernod, Jagermeister, Agavero",
        prices: [
          { label: "Aperol", value: 140 },
          { label: "Campari", value: 140 },
          { label: "Anís Pernod", value: 120 },
          { label: "Jagermeister", value: 130 },
          { label: "Agavero", value: 115 }
        ],
        image: "https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=300",
      },
      {
        id: "a3",
        name: "BUBUCHELA ARTESANAL",
        description: "Blanca: Blonde Ale con especias. Oscura: Del tipo Dubbel con notas de café",
        prices: [
          { label: "Precio", value: 85 }
        ],
        image: "https://images.pexels.com/photos/1267696/pexels-photo-1267696.jpeg?auto=compress&cs=tinysrgb&w=300",
      },
      {
        id: "a4",
        name: "CHELAS NACIONALES",
        description: "Tecate, Tecate Ligth, Indio, Corona, Victoria",
        prices: [
          { label: "Precio", value: 45 }
        ],
        image: "https://images.pexels.com/photos/52994/beer-slide-beer-glass-beer-mug-52994.jpeg?auto=compress&cs=tinysrgb&w=300",
      },
      {
        id: "a5",
        name: "CHELAS PREMIUM",
        description: "Heineken, Ultra, Bohemia Clara, Bohemia Oscura, XX Lager, XX Ámbar",
        prices: [
          { label: "Precio", value: 55 }
        ],
        image: "https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg?auto=compress&cs=tinysrgb&w=300",
      },
      {
        id: "a6",
        name: "MICHELADAS DE SABORES",
        description: "Cerveza de barril clara / Oscura con escarchado y sabor de: Mango, Tamarindo, Chamoy y Ajonjolí, Mora Azul, Sandía, Fresa, Uva, Manzana Verde",
        prices: [
          { label: "1 Litro", value: 135 },
          { label: "1/2 litro", value: 90 }
        ],
        image: "https://images.pexels.com/photos/1187766/pexels-photo-1187766.jpeg?auto=compress&cs=tinysrgb&w=300",
      },
      {
        id: "a7",
        name: "MICHELADAS TRADICIONALES",
        description: "Michelada sal y limón, Clamachela, Cubana",
        prices: [
          { label: "Michelada 1L", value: 130 },
          { label: "Michelada 1/2L", value: 85 },
          { label: "Clamachela 1L", value: 150 },
          { label: "Clamachela 1/2L", value: 95 },
          { label: "Cubana 1L", value: 135 }
        ],
        image: "https://images.pexels.com/photos/1187766/pexels-photo-1187766.jpeg?auto=compress&cs=tinysrgb&w=300",
      },
      {
        id: "a8",
        name: "TRITÓN DE 5 LITROS",
        description: "Claro / Oscuro, Colores / Mojito",
        prices: [
          { label: "Claro/Oscuro", value: 525 },
          { label: "Colores/Mojito", value: 620 }
        ],
        image: "https://images.pexels.com/photos/1187766/pexels-photo-1187766.jpeg?auto=compress&cs=tinysrgb&w=300",
      },
      {
        id: "a9",
        name: "TARROS PREPARADOS",
        description: "Michelada sal y limón, Clamatada, Cubana, Sabor",
        prices: [
          { label: "Michelada", value: 20 },
          { label: "Clamatada", value: 35 },
          { label: "Cubana", value: 25 },
          { label: "Sabor", value: 35 }
        ],
        image: "https://images.pexels.com/photos/1187766/pexels-photo-1187766.jpeg?auto=compress&cs=tinysrgb&w=300",
      },
      {
        id: "a10",
        name: "COCKTAILS COLORS",
        description: "AZULITO VODKA, ROJO VODKA DE FRUTOS ROJOS, MORADO VODKA Y JUGO DE UVA, AMARILLO BACARDÍ MANGO CHILE, ROSA BACARDÍ RASPBERRY, VERDE BACARDÍ LIMÓN, BUBBALOO XTREME DE UVA, VODKA Y CHICLES",
        prices: [
          { label: "1 Litro", value: 145 }
        ],
        image: "https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg?auto=compress&cs=tinysrgb&w=300",
      },
      {
        id: "a11",
        name: "MOJITOS",
        description: "ORIGINAL, PIÑA, GUAYABA, MARACUYÁ, LICHI, MANGO, FRESA, TAMARINDO, GUANABANA, FRUTOS ROJOS, JAMAICA, COCO, YAKULT, SANDIA, CEREZA, GROSELLA, GRANADA",
        prices: [
          { label: "1 Litro", value: 145 }
        ],
        image: "https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg?auto=compress&cs=tinysrgb&w=300",
      },
      {
        id: "a12",
        name: "DESTILADOS",
        description: "WHISKY, TEQUILA, RON, VODKA, MEZCAL, BRANDY",
        prices: [
          { label: "1 Litro", value: 145 }
        ],
        image: "https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=300",
      },
      {
        id: "a13",
        name: "STRONGBOW",
        description: "SENCILLO, PREPARADO CON FRUTOS ROJOS",
        prices: [
          { label: "Precio", value: 85 }
        ],
        image: "https://images.pexels.com/photos/1187766/pexels-photo-1187766.jpeg?auto=compress&cs=tinysrgb&w=300",
      },
      {
        id: "a14",
        name: "COCTELES ESPECIALES",
        description: "EL COSCORRÓN, EL DIABLO, LA CONGA, LA CHAQUETA, EL SUGAR DADDY, PALOMA DE FRESA, PALOMA DE MANGO, GIN DE FRUTOS ROJOS, GIN DE MANGO, LA PEPA ROSADA, MARGARITA FROZEN, WHISKY SUMMER",
        prices: [
          { label: "EL COSCORRÓN", value: 160 },
          { label: "EL DIABLO", value: 145 },
          { label: "LA CONGA", value: 145 },
          { label: "LA CHAQUETA", value: 160 },
          { label: "EL SUGAR DADDY", value: 165 },
          { label: "PALOMA DE FRESA", value: 165 },
          { label: "PALOMA DE MANGO", value: 165 },
          { label: "GIN DE FRUTOS ROJOS", value: 170 },
          { label: "GIN DE MANGO", value: 170 },
          { label: "LA PEPA ROSADA", value: 165 },
          { label: "MARGARITA FROZEN", value: 180 },
          { label: "WHISKY SUMMER", value: 180 }
        ],
        image: "https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg?auto=compress&cs=tinysrgb&w=300",
      }
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
        name: "BUBUMALTEADAS CLÁSICAS",
        description: "Preparadas con leche deslactosada, helado e ingredientes de primera calidad, servidas con un delicioso topping de crema batida y chispas de colores, chocolate, mazapán, chicle o galleta. Sabores: Oreo, Mazapán de la Rosa, Algodón de Azúcar, Chocolate, Fresa, Frutos Rojos, Vainilla, Chicle Azul, Chicle Rosa",
        prices: [
          { label: "Precio", value: 85 }
        ],
        image: "https://images.pexels.com/photos/103566/pexels-photo-103566.jpeg?auto=compress&cs=tinysrgb&w=300",
      },
      {
        id: "malteada-2",
        name: "BUBUTEMPURA OREO",
        description: "Clásicas galletas Oreo cubiertas de Tempura y acompañadas con cremoso y dulce helado del sabor de tu elección servidas con crema chantilly, chispas de sabores y una rica cereza",
        prices: [
          { label: "Precio", value: 95 }
        ],
        image: "https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&w=300",
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