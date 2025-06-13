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
        description: "Ex-qui-si-ta, simplemente el mejor balance de sabor, 100 gr. de carne de res sazonada con la receta secreta de la casa, gratinada con queso manchego, tocino, y un par de deliciosos aros de cebolla bañados en aderezo blue-cheese.",
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
        id: "b1",
        name: "Banderilla Clásica",
        description: "Salchichas empanizadas con masa dorada y crujiente, montadas en palillos de madera. Fritas al momento para lograr una textura ligera y perfectamente dorada. Servidas listas para acompañar con tus salsas favoritas.",
        prices: [
          { label: "2 Pzs", value: 140 },
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
        description: "100 gr. De carne de res sazonada con la receta secreta de la casa. Lechuga, jitomate, cebolla caramelizada, pepinillos, chiles, catsup, mostaza y mayonesa.",
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
        description: "Ex-qui-si-ta, simplemente el mejor balance de sabor, 100 gr. de carne de res sazonada con la receta secreta de la casa, gratinada con queso manchego, tocino, y un par de deliciosos aros de cebolla bañados en aderezo blue-cheese. Lechuga, jitomate, cebolla caramelizada, pepinillos, chiles, catsup, mostaza y mayonesa.",
        prices: [
          { label: "Sencilla", value: 170 },
          { label: "Doble", value: 185 },
        ],
        image: olimpica,
      },
      {
        id: "b4",
        name: "TROPICAL - HAWAIANA",
        description: "La inconfundible hamburguesa hawaiana con su deliciosa piña tropical, asada lentamente a la parrilla, jamón Virginia, queso manchego y su tocino bien frito a la plancha. ¡Esta Bububurger te hará bailar el Waikiki! Lechuga, jitomate, cebolla caramelizada, pepinillos, chiles, catsup, mostaza y mayonesa.",
        prices: [
          { label: "Sencilla", value: 170 },
          { label: "Doble", value: 185 },
        ],
        image: hawaiana,
      },
      {
        id: "b5",
        name: "BACON WESTERN",
        description: "Esta hamburguesa te hará sentir en el viejo Oeste por su selecto tocino bien doradito, su queso manchego y un delicado toque de salsa BBQ. ¡Así que ponte las botas, el sombrero de cowboy y prepárate para bailar el Payaso de Rodeo… ajúa! Lechuga, jitomate, cebolla caramelizada, pepinillos, chiles, catsup, mostaza y mayonesa.",
        prices: [
          { label: "Sencilla", value: 170 },
          { label: "Doble", value: 185 },
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
          { label: "Doble", value: 185 },
        ],
        image: pepperoniBurger,
      },
      {
        id: "b8",
        name: "COSTRA BURGER",
        description: "Nuestra Bububurger consentida, es una delicia por su crujiente costra de queso con tocino frito y un toque de aderezo secreto, receta de la casa. Puedes pedirla sencilla o doble, y si te animas por la doble, te espera una doble costra de queso con tocino. ¡Crunchy, crunchy!",
        prices: [
          { label: "Sencilla", value: 175 },
          { label: "Doble", value: 190 },
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
        name: "Ari-Wings",
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
          { label: "225 gr.", value: 235 },
          { label: "515 gr.", value: 355 },
          { label: "1100 gr.", value: 605 }
        ],
        image: boneless,
        comment: "225 gr. ≈ 8 pzas. | 515 gr. ≈ 13 pzas. | 1100 gr. ≈ 28 pzas.",
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
  // 7. Hot-Dog Jumbo
  {
    id: "hotdog",
    name: "Hot-dogs JUMBO",
    icon: "",
    chefImage: chefPorCategoria["hotdog"],
    products: [
      {
        id: "h1",
        name: "SENCILLITO Y SIN RODEOS",
        description: "30 cm. De salchicha de pavo, deliciosamente frita, acompañado de 70 gr. de papas a la francesa sazonadas con polvos mágicos, jitomate, cebolla, chiles picados, mostaza, mayonesa y catsup.  ¡Un deleite!",
        prices: [
          { label: "Salchicha de Pavo", value: 95 },
          { label: "Salchicha de Res", value: 120 }
        ],
        image: hotdog,
      },
      {
        id: "h2",
        name: "CON TOCINO",
        description: "Salchicha de pavo de 30 cm perfectamente dorada, envuelta en tiras crujientes de tocino, servida sobre pan suave tipo hotdog. Acompañado con jitomate, cebolla, chiles picados y un toque de mostaza, mayonesa y catsup. Incluye una porción de papas a la francesa con sazonador especial.",
        prices: [
          { label: "Salchicha de Pavo", value: 110 },
          { label: "Salchicha de Res", value: 135 }
        ],
        image: hotdogTocino,
      },
      {
        id: "h3",
        name: "HAWAIANO",
        description: "Salchicha de pavo de 30 cm, envuelta en tocino crujiente, servida en pan suave tipo hotdog. Cubierto con trozos de piña natural y queso derretido, creando el balance perfecto entre lo salado y lo dulce. Acompañado de papas a la francesa con sazonador especial.",
        prices: [
          { label: "Salchicha de Pavo", value: 125 },
          { label: "Salchicha de Res", value: 150 }
        ],
        image: hotdogHawaiano,
      },
      {
        id: "h4",
        name: "ITALIANO",
        description: "Salchicha de pavo de 30 cm servida en pan suave tipo hotdog, bañada en una abundante salsa italiana estilo boloñesa, elaborada con carne molida de res, jitomate y especias mediterráneas. Acompañado de papas a la francesa sazonadas con polvo especial.",
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
        id: "c4",
        name: "COSTILLAS DE ELOTE AMARILLO",
        description: "Estas costillitas de elote dulce amarillo, bañaditas con salsa Hot BBQ, Cajun, Tajín y un toque de perejil deshidratado con limón te harán bailar como texano. Son perfectas para compartir y calmar tus antojos, ¡así que prepárate para chuparte los dedos!",
        prices: [
          { label: "Precio", value: 120 }
        ],
        image: costillasElote,
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
        id: "i1",
        name: "PAQUETE BUBUBURGER",
        description: "Deliciosa Bububurger sencilla con queso manchego + 5 divertidas papas carita feliz y una chaparrita.",
        prices: [
          { label: "", value: 160 }
        ],
        image: paqueteBububurger,
      },
      {
        id: "i2",
        name: "PAQUETE NUGGETS",
        description: "5 Nuggets + 5 divertidas papas carita feliz y una chaparrita.",
        prices: [
          { label: "", value: 160 }
        ],
        image: paqueteNuggets,
      },
      {
        id: "i3",
        name: "PAQUETE HOTDOG",
        description: "Hot Dog sencillo + 5 papas carita feliz y una chaparrita. ",
        prices: [
          { label: "", value: 130 }
        ],
        image: paqueteHotdog,
      },
      {
        id: "i4",
        name: "PAQUETE DEDITOS DE QUESO",
        description: "5 Dedos de queso mozzarella + 5 papas carita feliz y una chaparrita.",
        prices: [
          { label: "", value: 160 }
        ],
        image: paqueteDeditos,
      },
    ]
  },
  // 10. Extras
  {
    id: "extras",
    name: "Extras",
    icon: "",
    chefImage: chefPorCategoria["cafe"],
    products: [
      {
        id: "e1",
        name: "Extra Queso",
        description: "Porción adicional de queso manchego derretido.",
        prices: [{ label: "", value: 20 }],
        image: "/menu-images/extra-queso.png"
      },
      {
        id: "e2",
        name: "Extra Tocino",
        description: "Porción extra de tocino crujiente.",
        prices: [{ label: "", value: 25 }],
        image: "/menu-images/extra-tocino.png"
      },
      {
        id: "e3",
        name: "Papas Extra",
        description: "Porción adicional de papas a la francesa.",
        prices: [{ label: "", value: 35 }],
        image: "/menu-images/extra-papas.png"
      }
    ]
  },
  // 11. Malteadas y Postres
  {
    id: "malteadas",
    name: "Malteadas y Postres",
    icon: "",
    chefImage: chefPorCategoria["malteadas"],
    products: [
      {
        id: "m1",
        name: "Malteada de Vainilla",
        description: "Cremosa malteada de vainilla con chantilly",
        prices: [
          { label: "Precio", value: 65 }
        ],
        image: "https://images.pexels.com/photos/103566/pexels-photo-103566.jpeg?auto=compress&cs=tinysrgb&w=300",
      },
      {
        id: "m2",
        name: "Malteada de Chocolate",
        description: "Malteada de chocolate belga con chips de chocolate",
        prices: [
          { label: "Precio", value: 70 }
        ],
        image: "https://images.pexels.com/photos/108370/pexels-photo-108370.jpeg?auto=compress&cs=tinysrgb&w=300",
      },
      {
        id: "m3",
        name: "Cheesecake de Fresa",
        description: "Delicioso cheesecake casero con fresas frescas",
        prices: [
          { label: "Precio", value: 85 }
        ],
        image: "https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&w=300",
      },
    ]
  },
  // 12. Bebidas Sin Alcohol
  {
    id: "bebidas",
    name: "Bebidas Sin Alcohol",
    icon: "",
    chefImage: chefPorCategoria["bebidas"],
    products: [
      {
        id: "be1",
        name: "Limonada Natural",
        description: "Limonada fresca con menta y hielo",
        prices: [
          { label: "Precio", value: 35 }
        ],
        image: "https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=300",
      },
      {
        id: "be2",
        name: "Agua Fresca de Jamaica",
        description: "Refrescante agua de jamaica endulzada naturalmente",
        prices: [
          { label: "Precio", value: 30 }
        ],
        image: "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=300",
      },
      {
        id: "be3",
        name: "Refresco de Lata",
        description: "Coca Cola, Pepsi, Sprite o Fanta",
        prices: [
          { label: "Precio", value: 25 }
        ],
        image: "https://images.pexels.com/photos/50593/coca-cola-cold-drink-soft-drink-coke-50593.jpeg?auto=compress&cs=tinysrgb&w=300",
      },
    ]
  },
  // 13. Bubuchelas
  {
    id: "bubuchelas",
    name: "Bubuchelas",
    icon: "",
    chefImage: chefPorCategoria["bubuchelas"],
    products: [
      {
        id: "bu1",
        name: "Corona Extra",
        description: "Cerveza mexicana ligera y refrescante",
        prices: [
          { label: "Precio", value: 40 }
        ],
        image: "https://images.pexels.com/photos/52994/beer-slide-beer-glass-beer-mug-52994.jpeg?auto=compress&cs=tinysrgb&w=300",
      },
      {
        id: "bu2",
        name: "Modelo Especial",
        description: "Cerveza dorada con sabor equilibrado",
        prices: [
          { label: "Precio", value: 45 }
        ],
        image: "https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg?auto=compress&cs=tinysrgb&w=300",
      },
      {
        id: "bu3",
        name: "Cerveza Artesanal",
        description: "Cerveza local de barril, rotatoria",
        prices: [
          { label: "Precio", value: 60 }
        ],
        image: "https://images.pexels.com/photos/1267696/pexels-photo-1267696.jpeg?auto=compress&cs=tinysrgb&w=300",
      },
    ]
  },
  // 14. Cócteles de Color
  {
    id: "cockteles",
    name: "Cócteles de Color",
    icon: "",
    chefImage: chefPorCategoria["cockteles"],
    products: [
      {
        id: "co1",
        name: "Piña Colada",
        description: "Cóctel tropical con piña, coco y ron",
        prices: [
          { label: "Precio", value: 95 }
        ],
        image: "https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg?auto=compress&cs=tinysrgb&w=300",
      },
      {
        id: "co2",
        name: "Blue Lagoon",
        description: "Cóctel azul con vodka, curacao y limón",
        prices: [
          { label: "Precio", value: 90 }
        ],
        image: "https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg?auto=compress&cs=tinysrgb&w=300",
      },
      {
        id: "co3",
        name: "Tequila Sunrise",
        description: "Tequila con jugo de naranja y granadina",
        prices: [
          { label: "Precio", value: 85 }
        ],
        image: "https://images.pexels.com/photos/616836/pexels-photo-616836.jpeg?auto=compress&cs=tinysrgb&w=300",
      },
    ]
  },
  // 15. Mojitos
  {
    id: "mojitos",
    name: "Mojitos",
    icon: "",
    chefImage: chefPorCategoria["mojitos"],
    products: [
      {
        id: "mo1",
        name: "Mojito Clásico",
        description: "Ron blanco, menta fresca, limón y agua mineral",
        prices: [
          { label: "Precio", value: 85 }
        ],
        image: "https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg?auto=compress&cs=tinysrgb&w=300",
      },
      {
        id: "mo2",
        name: "Mojito de Fresa",
        description: "Mojito tradicional con fresas naturales",
        prices: [
          { label: "Precio", value: 90 }
        ],
        image: "https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg?auto=compress&cs=tinysrgb&w=300",
      },
      {
        id: "mo3",
        name: "Mojito de Maracuyá",
        description: "Refrescante mojito con pulpa de maracuyá",
        prices: [
          { label: "Precio", value: 95 }
        ],
        image: "https://images.pexels.com/photos/616836/pexels-photo-616836.jpeg?auto=compress&cs=tinysrgb&w=300",
      },
    ]
  },
  // 16. Destilados
  {
    id: "destilados",
    name: "Destilados",
    icon: "",
    chefImage: chefPorCategoria["destilados"],
    products: [
      {
        id: "de1",
        name: "Ron Añejo",
        description: "Ron premium envejecido, servido solo",
        prices: [
          { label: "Precio", value: 110 }
        ],
        image: "https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=300",
      },
      {
        id: "de2",
        name: "Vodka Premium",
        description: "Vodka ruso de alta calidad, servido frío",
        prices: [
          { label: "Precio", value: 100 }
        ],
        image: "https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=300",
      },
      {
        id: "de3",
        name: "Mezcal Artesanal",
        description: "Mezcal oaxaqueño 100% agave",
        prices: [
          { label: "Precio", value: 130 }
        ],
        image: "https://images.pexels.com/photos/5947041/pexels-photo-5947041.jpeg?auto=compress&cs=tinysrgb&w=300",
      },
    ]
  },
  // 17. Sidras
  {
    id: "sidras",
    name: "Sidras",
    icon: "",
    chefImage: chefPorCategoria["sidras"],
    products: [
      {
        id: "s1",
        name: "Sidra de Manzana",
        description: "Sidra dulce de manzana fermentada",
        prices: [
          { label: "Precio", value: 55 }
        ],
        image: "https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg?auto=compress&cs=tinysrgb&w=300",
      },
      {
        id: "s2",
        name: "Sidra de Pera",
        description: "Sidra aromática de pera natural",
        prices: [
          { label: "Precio", value: 60 }
        ],
        image: "https://images.pexels.com/photos/616836/pexels-photo-616836.jpeg?auto=compress&cs=tinysrgb&w=300",
      },
      {
        id: "s3",
        name: "Sidra Seca",
        description: "Sidra tradicional con bajo contenido de azúcar",
        prices: [
          { label: "Precio", value: 65 }
        ],
        image: "https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg?auto=compress&cs=tinysrgb&w=300",
      },
    ]
  },
  // 18. Bubu-Cócteles
  {
    id: "bubucocteles",
    name: "Bubu-Cócteles",
    icon: "",
    chefImage: chefPorCategoria["bubucocteles"],
    products: [
      {
        id: "bc1",
        name: "Bubu Martini",
        description: "Martini especial de la casa con gin premium",
        prices: [
          { label: "Precio", value: 120 }
        ],
        image: "https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=300",
      },
      {
        id: "bc2",
        name: "Bubu Manhattan",
        description: "Manhattan con whisky bourbon y vermut dulce",
        prices: [
          { label: "Precio", value: 115 }
        ],
        image: "https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=300",
      },
      {
        id: "bc3",
        name: "Bubu Old Fashioned",
        description: "Clásico old fashioned con azúcar mascabado",
        prices: [
          { label: "Precio", value: 125 }
        ],
        image: "https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=300",
      },
    ]
  },
  // 19. Café y Tisanas
  {
    id: "cafe",
    name: "Café y Tisanas",
    icon: "",
    chefImage: chefPorCategoria["cafe"],
    products: [
      {
        id: "ca1",
        name: "Café Americano",
        description: "Café negro de grano selecto, servido caliente",
        prices: [
          { label: "Precio", value: 25 }
        ],
        image: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=300",
      },
      {
        id: "ca2",
        name: "Cappuccino",
        description: "Espresso con leche espumada y canela",
        prices: [
          { label: "Precio", value: 45 }
        ],
        image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=300",
      },
      {
        id: "ca3",
        name: "Té de Manzanilla",
        description: "Tisana relajante de manzanilla con miel",
        prices: [
          { label: "Precio", value: 30 }
        ],
        image: "https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=300",
      },
    ]
  },
  // 20. Digestivos y Aperitivos
  {
    id: "digestivos",
    name: "Digestivos y Aperitivos",
    icon: "",
    chefImage: chefPorCategoria["digestivos"],
    products: [
      {
        id: "d1",
        name: "Tequila Blanco",
        description: "Tequila 100% agave, servido solo o con sal y limón",
        prices: [
          { label: "Precio", value: 80 }
        ],
        image: "https://images.pexels.com/photos/5947041/pexels-photo-5947041.jpeg?auto=compress&cs=tinysrgb&w=300",
      },
      {
        id: "d2",
        name: "Whisky en las Rocas",
        description: "Whisky premium servido con hielo",
        prices: [
          { label: "Precio", value: 120 }
        ],
        image: "https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=300",
      },
      {
        id: "d3",
        name: "Licor de Café",
        description: "Kahlúa servido con hielo y crema",
        prices: [
          { label: "Precio", value: 90 }
        ],
        image: "https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=300",
      },
    ]
  },
];