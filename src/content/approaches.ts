import type { Approach } from "./types";

export const approaches: Approach[] = [
  {
    id: "serve-return",
    name: "Serve and return",
    tagline: "Todo empieza con devolverle el turno.",
    body:
      "Es el nombre que usa Harvard para la interacción más simple y más potente que existe: el bebé hace algo —mira, gorjea, señala, patalea—, tú lo notas, lo devuelves y esperas. Ese ida y vuelta construye los circuitos del lenguaje y de la autorregulación. No requiere juguetes ni sesiones: requiere que estés disponible y que no llenes cada silencio.",
    practice: [
      "Nota a qué está mirando antes de hablar.",
      "Devuelve lo que hizo: repite el sonido, imita la cara.",
      "Ponle nombre: «eso es un perro», «estás cansado».",
      "Espera de verdad. Cuenta dos o tres segundos.",
    ],
    sources: ["harvard-serve", "harvard-5"],
  },
  {
    id: "montessori",
    name: "Montessori en casa",
    tagline: "Un ambiente preparado, no un bebé entretenido.",
    body:
      "Montessori no empieza a los 3 años: en el primer año se trata de un espacio seguro, ordenado y accesible, con pocos objetos y bien elegidos, para que el bebé pueda concentrarse. En la práctica se traduce en una manta de juego en el suelo, dos o tres materiales a la vista en vez de veinte, y un adulto que observa más de lo que dirige.",
    practice: [
      "Una zona de suelo fija, segura y sin pantallas cerca.",
      "Pocos objetos rotados: dos o tres por semana.",
      "Materiales reales y simples: madera, tela, metal.",
      "Deja que lo use como quiera; no le demuestres «la forma correcta».",
    ],
    sources: ["amshq", "aap-play"],
  },
  {
    id: "rie",
    name: "RIE · Educaring",
    tagline: "Hablarle como a una persona, antes de cargarlo.",
    body:
      "La propuesta de Magda Gerber es incómodamente simple: el bebé es un iniciador competente, no un receptor pasivo. Se le avisa antes de tocarlo («te voy a levantar»), se le da tiempo a responder, se respeta su juego sin interrumpirlo y se lo involucra en el cuidado —el cambio de pañal, el baño— en vez de hacerle cosas por encima. El resultado es un bebé más concentrado y un adulto más tranquilo.",
    practice: [
      "Narra lo que vas a hacer antes de hacerlo.",
      "Espera su respuesta: no es un monólogo.",
      "No interrumpas su juego para enseñarle otra cosa.",
      "En el cuidado, pide su colaboración: «levanta el brazo».",
    ],
    sources: ["rie", "magdagerber"],
  },
  {
    id: "pikler",
    name: "Movimiento libre · Pikler",
    tagline: "No lo sientes, no lo pares, no lo lleves de las manos.",
    body:
      "Emmi Pikler observó que los bebés a los que se deja moverse por su cuenta desarrollan el movimiento de forma más armoniosa y segura. La regla es sencilla y difícil de cumplir: no adelantes etapas. Si todavía no se sienta, no lo sientes; si no se para, no lo pongas de pie. El suelo, la ropa cómoda y el tiempo son los mejores maestros. Esto no contradice el juego guiado: la restricción aplica a las posturas que el cuerpo todavía no conquistó.",
    practice: [
      "Ropa que permita moverse: sin zapatos, sin capas rígidas.",
      "Suelo firme y seguro, con Libertad de movimiento.",
      "Si se queda atascado, ayúdalo mínimamente.",
      "Confía en su secuencia: no todos gatean, y está bien.",
    ],
    sources: ["pikler", "who-motor"],
  },
  {
    id: "juego-guiado",
    name: "Juego libre y juego guiado",
    tagline: "Los dos, no uno u otro.",
    body:
      "La AAP lo dice claro: el juego es el trabajo del bebé y es esencial para el cerebro. El juego libre —sin instrucciones, sin juguetes que hablen solos— es donde aparece la iniciativa. El juego guiado —tú propones, él responde— es donde se aprende más rápido. La proporción sana en el primer año es muchísimo libre y ráfagas cortas de guiado, no al revés.",
    practice: [
      "20–30 minutos de juego libre al día en el suelo, sin dirigirlo.",
      "Ráfagas de 2–5 minutos de juego guiado, varias veces.",
      "Termina cuando él desvía la mirada, no cuando tú te aburres.",
      "Menos juguetes y más rotación.",
    ],
    sources: ["aap-play", "harvard-serve"],
  },
  {
    id: "leer",
    name: "Leer en voz alta desde el día 1",
    tagline: "No entiende las palabras: entiende tu voz.",
    body:
      "La AAP recomienda leerle desde el nacimiento. A los 3–4 meses el libro es un objeto para mirar, tocar y morder, y el texto es una excusa para hablarle con ritmo, vocabulario variado y pausas. No hace falta una biblioteca: seis libros buenos y repetidos funcionan mejor que veinte que se hojean una vez.",
    practice: [
      "Un libro de contraste y uno de tela para esta etapa.",
      "Lee despacio, señalando y nombrando.",
      "No hace falta terminarlo: el interés manda.",
      "Que te vea leyendo a ti también.",
    ],
    sources: ["aap-reading", "cdc-4m"],
  },
  {
    id: "pantallas",
    name: "Pantallas: cero antes de los 2",
    tagline: "La OMS no lo deja como sugerencia.",
    body:
      "Las guías de la OMS para menores de 5 años no recomiendan tiempo de pantalla antes de los 2 años, salvo videollamadas con personas queridas. No es una postura moral: a esta edad el aprendizaje ocurre en interacción social contingente, y un video no responde. Si en casa la tele está de fondo, también cuenta: reduce la cantidad de palabras que el bebé escucha.",
    practice: [
      "Videollamadas sí; videos, no.",
      "Apaga la tele de fondo cuando jueguen.",
      "Nada de pantallas durante las tomas.",
      "Si necesitas una pausa, mejor una manta y un espejo que un video.",
    ],
    sources: ["who-screen", "aap-play"],
  },
];
