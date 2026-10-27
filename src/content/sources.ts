export interface Source {
  id: string;
  org: string;
  title: string;
  url: string;
  /** Fecha de consulta, ISO. */
  accessed: string;
  /** Qué sostiene exactamente esta fuente en la app. */
  what: string;
}

export const sources = [
  {
    id: "cdc-4m",
    org: "CDC · Learn the Signs. Act Early.",
    title: "Milestones by 4 Months",
    url: "https://www.cdc.gov/act-early/milestones/4-months.html",
    accessed: "2026-10-25",
    what: "Lista oficial de hitos a los 4 meses y actividades sugeridas.",
  },
  {
    id: "cdc-6m",
    org: "CDC · Learn the Signs. Act Early.",
    title: "Milestones by 6 Months",
    url: "https://www.cdc.gov/act-early/milestones/6-months.html",
    accessed: "2026-10-25",
    what: "Hitos a los 6 meses: rodar, sostén al sentarse, balbuceo, destete de la lengua. Contexto para lo que empieza en el mes 4.",
  },
  {
    id: "cdc-milestones",
    org: "CDC · Learn the Signs. Act Early.",
    title: "CDC's Developmental Milestones",
    url: "https://www.cdc.gov/act-early/milestones/index.html",
    accessed: "2026-10-25",
    what: "Marco general: los hitos describen lo que el 75 % de los niños ya hace a esa edad, no el promedio ni un examen.",
  },
  {
    id: "cdc-concerned",
    org: "CDC · Learn the Signs. Act Early.",
    title: "Concerned About Your Child's Development?",
    url: "https://www.cdc.gov/act-early/families/concerned.html",
    accessed: "2026-10-25",
    what: "Qué hacer y a quién consultar cuando un hito no aparece o se pierde una habilidad.",
  },
  {
    id: "aap-2022-milestones",
    org: "American Academy of Pediatrics · Pediatrics",
    title:
      "Evidence-Informed Milestones for Developmental Surveillance Tools (2022)",
    url: "https://publications.aap.org/pediatrics/article/149/3/e2021052138/1847486/Evidence-Informed-Milestones-for-Developmental",
    accessed: "2026-10-25",
    what: "Estudio detrás de los hitos del CDC de 2022: por qué se movieron a percentil 75 y por qué se eliminaron hitos ambiguos.",
  },
  {
    id: "who-motor",
    org: "Organización Mundial de la Salud",
    title: "Motor development milestones · windows of achievement",
    url: "https://www.who.int/tools/child-growth-standards/standards/motor-development-milestones",
    accessed: "2026-10-25",
    what: "Ventanas reales de 6 hitos motores gruesos en 5 países: sentarse, gatear, pararse y caminar.",
  },
  {
    id: "who-motor-pdf",
    org: "OMS · Acta Paediatrica (2006)",
    title: "Windows of achievement for six gross motor milestones (tabla)",
    url: "https://cdn.who.int/media/docs/default-source/child-growth/child-growth-standards/indicators/motor-development-milestones/mm_windows_table.pdf",
    accessed: "2026-10-25",
    what: "Percentiles 1 y 99 exactos: sentarse sin apoyo 3,8–9,2 meses; caminar solo 8,2–17,6 meses.",
  },
  {
    id: "who-screen",
    org: "Organización Mundial de la Salud (2019)",
    title:
      "Guidelines on physical activity, sedentary behaviour and sleep for children under 5",
    url: "https://www.who.int/news/item/24-04-2019-to-grow-up-healthy-children-need-to-sit-less-and-play-more",
    accessed: "2026-10-25",
    what: "Pantallas no recomendadas antes de los 2 años; 14–17 h de sueño de 0 a 3 meses; 12–16 h de 4 a 11; 30 min de tiempo boca abajo.",
  },
  {
    id: "who-cf",
    org: "Organización Mundial de la Salud",
    title: "Alimentación del lactante y del niño pequeño",
    url: "https://www.who.int/es/news-room/fact-sheets/detail/infant-and-young-child-feeding",
    accessed: "2026-10-25",
    what: "Lactancia exclusiva hasta los 6 meses e introducción de complementarios alrededor de esa edad.",
  },
  {
    id: "asha",
    org: "American Speech-Language-Hearing Association",
    title: "Communication Milestones: Birth to 1 Year",
    url: "https://www.asha.org/public/developmental-milestones/communication-milestones-birth-to-1-year",
    accessed: "2026-10-25",
    what: "Hitos de comunicación por trimestre: gorjeo, risa, balbuceo, turnos de sonidos.",
  },
  {
    id: "nidcd",
    org: "NIH · NIDCD",
    title: "Speech and Language Developmental Milestones",
    url: "https://www.nidcd.nih.gov/health/speech-and-language",
    accessed: "2026-10-25",
    what: "Checklist de audición y comunicación de 0 a 6 meses.",
  },
  {
    id: "aep-2-4",
    org: "Asociación Española de Pediatría · En Familia",
    title: "Bebé de 2 a 4 meses",
    url: "https://www.aeped.es/enfamilia/salud-en-familia/bebe-2-4-meses",
    accessed: "2026-10-25",
    what: "Referencia española para el contexto del pediatra en Madrid: desarrollo, alimentación y señales de alarma en esta etapa.",
  },
  {
    id: "aep-ac",
    org: "AEP · Comité de Lactancia Materna y Nutrición (2018)",
    title: "Recomendaciones sobre alimentación complementaria",
    url: "https://static.aeped.es/recomendaciones_aep_sobre_alimentacio_n_complementaria_nov2018_v3_final_0d83dbbd5a.pdf",
    accessed: "2026-10-25",
    what: "Lactancia exclusiva 6 meses, nunca alimentación complementaria antes del cuarto mes.",
  },
  {
    id: "unicef-4m",
    org: "UNICEF Parenting",
    title: "Desarrollo de tu bebé a los 4 meses",
    url: "https://www.unicef.org/parenting/es/desarrollo-infantil/etapas-desarrollo-bebe-4-meses",
    accessed: "2026-10-25",
    what: "Hitos sociales, cognitivos y motores a los 4 meses en español.",
  },
  {
    id: "aap-tummy",
    org: "AAP · HealthyChildren.org",
    title: "Back to Sleep, Tummy to Play",
    url: "https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/Back-to-Sleep-Tummy-to-Play.aspx",
    accessed: "2026-10-25",
    what: "Tiempo boca abajo desde el primer día, 15–30 min diarios y progresión; prevención de plagiocefalia.",
  },
  {
    id: "aap-walkers",
    org: "AAP · HealthyChildren.org",
    title: "Baby Walkers: A Dangerous Choice",
    url: "https://www.healthychildren.org/English/safety-prevention/at-home/Pages/Baby-Walkers-A-Dangerous-Choice.aspx",
    accessed: "2026-10-25",
    what: "Los andadores no enseñan a caminar, retrasan la marcha y causan lesiones; la AAP pide prohibirlos.",
  },
  {
    id: "aap-safe-sleep",
    org: "AAP · Pediatrics (2022)",
    title: "Evidence Base for 2022 Updated Recommendations for a Safe Infant Sleeping Environment",
    url: "https://publications.aap.org/pediatrics/article/150/1/e2022057991/188305/Evidence-Base-for-2022-Updated-Recommendations-for",
    accessed: "2026-10-25",
    what: "Colecho en la misma habitación 6–12 meses, superficie firme, sin almohadas ni mantas sueltas.",
  },
  {
    id: "harvard-serve",
    org: "Harvard · Center on the Developing Child",
    title: "Serve and Return",
    url: "https://developingchild.harvard.edu/key-concept/serve-and-return",
    accessed: "2026-10-25",
    what: "Las interacciones de ida y vuelta construyen la arquitectura cerebral; base de casi todas las actividades de la app.",
  },
  {
    id: "harvard-5",
    org: "Harvard · Center on the Developing Child",
    title: "5 Steps for Brain-Building Serve and Return",
    url: "https://developingchild.harvard.edu/resources/5-steps-for-brain-building-serve-and-return",
    accessed: "2026-10-25",
    what: "Los cinco pasos concretos: notar, devolver, nombrar, turnarse y esperar.",
  },
  {
    id: "aap-play",
    org: "AAP · Pediatrics (2018)",
    title: "The Power of Play: A Clinical Report",
    url: "https://publications.aap.org/pediatrics/article/142/3/e20182058/38649/The-Power-of-Play-A-Clinical-Report",
    accessed: "2026-10-25",
    what: "El juego no estructurado es esencial para el cerebro y el vínculo; el juego guiado potencia el aprendizaje.",
  },
  {
    id: "aap-reading",
    org: "AAP · Pediatrics (2014)",
    title: "Literacy Promotion: An Essential Component of Primary Care Pediatric Practice",
    url: "https://publications.aap.org/pediatrics/article/134/2/404/32951/Literacy-Promotion-An-Essential-Component-of",
    accessed: "2026-10-25",
    what: "Leer en voz alta desde el nacimiento, aunque el bebé no entienda.",
  },
  {
    id: "amshq",
    org: "American Montessori Society",
    title: "Montessori for Infants & Toddlers",
    url: "https://amshq.org/about-us/inside-the-montessori-classroom/infant-and-toddler",
    accessed: "2026-10-25",
    what: "Ambiente preparado, materiales a la altura del bebé y autoaprendizaje en los primeros 18 meses.",
  },
  {
    id: "rie",
    org: "Resources for Infant Educarers (RIE)",
    title: "The Educaring Approach",
    url: "https://rie.org/",
    accessed: "2026-10-25",
    what: "Respeto, observación y juego ininterrumpido: hablarle antes de cargarlo y no interrumpir su concentración.",
  },
  {
    id: "magdagerber",
    org: "Magda Gerber Legacy",
    title: "Magda Gerber's Basic RIE Principles",
    url: "https://magdagerber.org/magdas-writings/magda-gerbers-basic-rie-basic-principles",
    accessed: "2026-10-25",
    what: "Los principios RIE en palabras de Gerber y la idea de que el bebé es iniciador, explorador y autoaprendiz.",
  },
  {
    id: "pikler",
    org: "The Pikler Institute",
    title: "Pikler Approach · free movement",
    url: "https://www.pikler.org/",
    accessed: "2026-10-25",
    what: "Desarrollo motor autónomo: no sentar, no parar ni llevar de las manos antes de que el bebé lo haga solo.",
  },
  {
    id: "macknin-teething",
    org: "AAP · Pediatrics (Macknin et al., 2000)",
    title: "Symptoms Associated With Infant Teething: A Prospective Study",
    url: "https://publications.aap.org/pediatrics/article/105/4/747/65718/Symptoms-Associated-With-Infant-Teething-A",
    accessed: "2026-10-25",
    what: "Estudio prospectivo con 475 erupciones dentales: los síntomas son leves y la fiebre alta no se asocia a la dentición.",
  },
  {
    id: "mayo-teething",
    org: "Mayo Clinic",
    title: "Teething: Tips for soothing sore gums",
    url: "https://www.mayoclinic.org/healthy-lifestyle/infant-and-toddler-health/in-depth/teething/art-20046378",
    accessed: "2026-10-25",
    what: "Síntomas típicos y cómo aliviar las encías sin medicación innecesaria.",
  },
  {
    id: "nhs-teething",
    org: "NHS",
    title: "Baby teething symptoms",
    url: "https://www.nhs.uk/baby/babys-development/teething/baby-teething-symptoms",
    accessed: "2026-10-25",
    what: "Rango normal del primer diente y señales que no son dentición.",
  },
  {
    id: "cleveland-teething",
    org: "Cleveland Clinic",
    title: "Teething Doesn't Cause Fevers — and Other Myths",
    url: "https://health.clevelandclinic.org/teething-signs-and-symptoms",
    accessed: "2026-10-25",
    what: "La dentición no produce fiebre de 38 °C o más; una fiebre es siempre otra cosa hasta que se demuestre lo contrario.",
  },
  {
    id: "sleepfoundation-4m",
    org: "Sleep Foundation",
    title: "4-Month Sleep Regression",
    url: "https://www.sleepfoundation.org/baby-sleep/4-month-sleep-regression",
    accessed: "2026-10-25",
    what: "Qué cambia en el sueño a los 3–4 meses y por qué 'regresión' es un nombre engañoso.",
  },
  {
    id: "cleveland-4m",
    org: "Cleveland Clinic",
    title: "The 4-Month Sleep Regression: What Parents Need to Know",
    url: "https://health.clevelandclinic.org/the-4-month-sleep-regression-what-parents-need-to-know",
    accessed: "2026-10-25",
    what: "Explicación pediátrica del cambio de arquitectura del sueño y expectativas realistas.",
  },
  {
    id: "texas-childrens-wonder",
    org: "Texas Children's Hospital",
    title: "Taking 'The Wonder Weeks' with a grain of salt",
    url: "https://www.texaschildrens.org/content/wellness/taking-wonder-weeks-grain-salt",
    accessed: "2026-10-25",
    what: "Lectura pediátrica crítica del calendario de 'saltos' de Wonder Weeks.",
  },
  {
    id: "todaysparent-wonder",
    org: "Today's Parent",
    title: "What is all the fuss about the Wonder Weeks?",
    url: "https://www.todaysparent.com/baby/baby-development/what-is-all-the-fuss-about-the-wonder-weeks/",
    accessed: "2026-10-25",
    what: "Intentos de replicación que no encontraron los saltos descritos por Wonder Weeks.",
  },
  {
    id: "cpsc-toys",
    org: "U.S. Consumer Product Safety Commission",
    title: "Toy Safety Guides",
    url: "https://www.cpsc.gov/Safety-Education/Safety-Guides/Toys",
    accessed: "2026-10-25",
    what: "Criterios de seguridad de juguetes: piezas pequeñas, baterías de botón, imanes y edades recomendadas.",
  },
  {
    id: "aap-allergens",
    org: "AAP · HealthyChildren.org",
    title:
      "When to Introduce Egg, Peanut Butter & Other Common Food Allergens to a Baby",
    url:
      "https://www.healthychildren.org/English/healthy-living/nutrition/Pages/when-to-introduce-egg-peanut-butter-and-other-common-food-allergens-to-your-baby-food-allergy-prevention-tips.aspx",
    accessed: "2026-10-25",
    what:
      "Los alérgenos se introducen alrededor de los 6 meses y se mantienen en la dieta; dosis seguras de crema de maní y huevo; quién necesita valoración previa por eccema grave o reacción previa.",
  },
  {
    id: "aap-bottle-cup",
    org: "AAP · HealthyChildren.org",
    title: "From Bottle to Cup: Helping Your Child Make a Healthy Transition",
    url:
      "https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Discontinuing-the-Bottle.aspx",
    accessed: "2026-10-25",
    what:
      "Transición del biberón al vaso entre los 12 y los 18 meses, caries del biberón por tomas nocturnas y por qué el vaso abierto es mejor que el de válvula.",
  },
  {
    id: "aap-button-battery",
    org: "AAP · HealthyChildren.org",
    title:
      "What Parents Need to Know about Button Batteries and Lithium Coin Batteries",
    url:
      "https://www.healthychildren.org/English/safety-prevention/at-home/Pages/what-parents-need-to-know-about-button-and-lithium-coin-batteries.aspx",
    accessed: "2026-10-25",
    what:
      "Pilas de botón y de litio: una de 20 mm tiene el tamaño del esófago de un niño y puede quemarlo en menos de 2 horas; dónde están en casa y cómo asegurarlas.",
  },
  {
    id: "aap-choking",
    org: "AAP · HealthyChildren.org",
    title: "Choking Prevention for Babies & Children",
    url:
      "https://www.healthychildren.org/English/health-issues/injuries-emergencies/Pages/Choking-Prevention.aspx",
    accessed: "2026-10-25",
    what:
      "Cortar la comida en trozos de menos de 1,3 cm, comer sentado y supervisado, y evitar frutos secos, uvas enteras, palomitas, zanahoria cruda y piezas pequeñas.",
  },
  {
    id: "aap-cognitive-8-12",
    org: "AAP · HealthyChildren.org",
    title: "Cognitive Development in Infants: 8 to 12 Months",
    url:
      "https://www.healthychildren.org/English/ages-stages/baby/Pages/Cognitive-Development-8-to-12-Months.aspx",
    accessed: "2026-10-25",
    what:
      "Permanencia del objeto entre los 8 y los 10 meses, experimentos con objetos (tirar, meter, sacar) y primeras imitaciones de uso cotidiano.",
  },
  {
    id: "aap-drinks",
    org: "AAP · HealthyChildren.org",
    title: "Recommended Drinks for Children Age 5 & Younger",
    url:
      "https://www.healthychildren.org/English/healthy-living/nutrition/Pages/recommended-drinks-for-young-children-ages-0-5.aspx",
    accessed: "2026-10-25",
    what:
      "Leche de vaca entera desde los 12 meses y unos 16 oz al día entre 12 y 24 meses; nada de jugo antes del año; azúcares añadidos evitados antes de los 2.",
  },
  {
    id: "aap-poisons",
    org: "AAP · HealthyChildren.org",
    title: "Childproofing Your Home for Poisons",
    url:
      "https://www.healthychildren.org/English/safety-prevention/at-home/Pages/Childproofing-Your-Home.aspx",
    accessed: "2026-10-25",
    what:
      "Qué revisar en cada habitación cuando empieza a gatear: productos de limpieza, detergentes, medicamentos y otras sustancias que deben quedar fuera de la vista y bajo llave.",
  },
  {
    id: "aap-sample-menu",
    org: "AAP · HealthyChildren.org",
    title: "Sample Menu for a Baby 8 to 12 Months Old",
    url:
      "https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Sample-One-Day-Menu-for-an-8-to-12-Month-Old.aspx",
    accessed: "2026-10-25",
    what:
      "Menú de referencia de 8 a 12 meses: tres comidas y dos meriendas, texturas con grumos y unos 720 ml de leche al día.",
  },
  {
    id: "aap-separation",
    org: "AAP · HealthyChildren.org",
    title: "How to Ease Your Child's Separation Anxiety",
    url:
      "https://www.healthychildren.org/English/ages-stages/toddler/Pages/Soothing-Your-Childs-Separation-Anxiety.aspx",
    accessed: "2026-10-25",
    what:
      "La angustia por separación se intensifica hacia los 9 meses y depende de la permanencia del objeto; despedidas cortas, rituales y promesas que se cumplen.",
  },
  {
    id: "aap-shoes",
    org: "AAP · HealthyChildren.org",
    title: "Shoes for Active Toddlers",
    url:
      "https://www.healthychildren.org/English/ages-stages/toddler/Pages/Shoes-for-Active-Toddlers.aspx",
    accessed: "2026-10-25",
    what:
      "Los pies se desarrollan mejor sin zapatos; el calzado protege cuando camina en la calle, con suela antideslizante y revisión mensual de talla.",
  },
  {
    id: "aap-skip-crawling",
    org: "AAP · HealthyChildren.org",
    title:
      "I've heard that if a baby skips crawling, they may have trouble reading later. Is this true?",
    url:
      "https://www.healthychildren.org/English/tips-tools/ask-the-pediatrician/Pages/if-a-baby-skips-crawling-trouble-reading.aspx",
    accessed: "2026-10-25",
    what:
      "Desmonta el mito gateo-lectura: saltarse un hito no es señal de alarma y esa teoría fue refutada hace años.",
  },
  {
    id: "aap-solids",
    org: "AAP · HealthyChildren.org",
    title: "When Can Babies Start Solid Foods? Readiness & Feeding Tips",
    url:
      "https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Starting-Solid-Foods.aspx",
    accessed: "2026-10-25",
    what:
      "Alimentos ricos en hierro y zinc desde el inicio, alimentación con las manos cuando se sienta y lleva objetos a la boca, lista de atragantamientos y nada de jugo antes de los 12 meses.",
  },
  {
    id: "aap-tantrums",
    org: "AAP · HealthyChildren.org",
    title: "Top Tips for Surviving Tantrums",
    url:
      "https://www.healthychildren.org/English/family-life/family-dynamics/communication-discipline/Pages/Temper-Tantrums.aspx",
    accessed: "2026-10-25",
    what:
      "Las rabietas son parte normal del desarrollo y se concentran entre el año y los tres; qué hacer y qué no hacer en plena explosión.",
  },
  {
    id: "aap-tipovers",
    org: "AAP · HealthyChildren.org",
    title: "Preventing Furniture and TV Tip-Overs",
    url:
      "https://www.healthychildren.org/English/safety-prevention/at-home/Pages/Preventing-Furniture-and-TV-Tip-Overs.aspx",
    accessed: "2026-10-25",
    what:
      "Vuelcos de muebles y televisores: un niño llega a urgencias por esta causa al menos una vez cada hora, el 77 % de las muertes son de menores de seis años y la solución es anclar a la pared.",
  },
  {
    id: "aap-tv",
    org: "AAP · HealthyChildren.org",
    title: "Why to Avoid TV for Infants & Toddlers",
    url:
      "https://www.healthychildren.org/English/family-life/Media/Pages/Why-to-Avoid-TV-Before-Age-2.aspx",
    accessed: "2026-10-25",
    what:
      "Por qué un video no enseña nada antes de los 2 años: los símbolos de la pantalla no significan nada hasta los 18 meses y la pantalla interrumpe el intercambio con el adulto.",
  },
  {
    id: "aap-vitd-iron",
    org: "AAP · HealthyChildren.org",
    title: "Where We Stand: Vitamin D & Iron Supplements for Babies",
    url:
      "https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Vitamin-Iron-Supplements.aspx",
    accessed: "2026-10-25",
    what:
      "Vitamina D 400 UI hasta el año y hierro 1 mg/kg/día desde los 4 meses en bebés amamantados, hasta que la alimentación complementaria cubre el aporte.",
  },
  {
    id: "healthychildren-9m-checkup",
    org: "AAP · HealthyChildren.org",
    title: "Checkup Checklist: 9 Months Old",
    url:
      "https://www.healthychildren.org/English/ages-stages/Your-Childs-Checkups/Pages/Your-Checkup-Checklist-9-Months-Old.aspx",
    accessed: "2026-10-25",
    what:
      "Qué se revisa en la consulta de los 9 meses: cribado de desarrollo, ¿puede ponerse de pie?, ansiedad por separación, retirada del biberón, rutina de noche, seguridad de muebles y televisores anclados, juguetes y barniz de flúor en el primer diente.",
  },
  {
    id: "healthychildren-emotional",
    org: "AAP · HealthyChildren.org",
    title: "Emotional and Social Development: 8 to 12 Months",
    url:
      "https://www.healthychildren.org/English/ages-stages/baby/Pages/Emotional-and-Social-Development-8-12-Months.aspx",
    accessed: "2026-10-25",
    what:
      "Inicio de la ansiedad por separación, con un pico entre los 10 y los 18 meses, y el mecanismo: el bebé ya sabe que hay una sola persona que lo cuida y no tiene noción del tiempo.",
  },
  {
    id: "healthychildren-movement",
    org: "AAP · HealthyChildren.org",
    title: "Movement Milestones in Babies 8 to 12 Months Old",
    url:
      "https://www.healthychildren.org/English/ages-stages/baby/Pages/Movement-8-to-12-Months.aspx",
    accessed: "2026-10-25",
    what:
      "Sentarse sin apoyo (consultar si no lo hace a los 9 meses), gatear entre los 7 y los 10 meses, ponerse de pie, cruzar muebles y enseñarle a bajar doblando las rodillas.",
  },
  {
    id: "aep-calendar-2026",
    org: "AEP · Comité Asesor de Vacunas",
    title: "Calendario de vacunaciones e inmunizaciones de la AEP 2026",
    url:
      "https://vacunasaep.org/profesionales/calendario-de-vacunaciones-e-inmunizaciones-aep-2026",
    accessed: "2026-10-25",
    what:
      "Qué toca a los 12 meses en España: primera dosis de triple vírica, refuerzo de MenACWY (Madrid lo adelanta a los 12 meses), refuerzo de MenB y cuarta dosis de hexavalente y neumococo; hepatitis A a los 12–15 meses.",
  },
  {
    id: "aapd-dental",
    org: "American Academy of Pediatric Dentistry",
    title: "Frequently Asked Questions · parent resources",
    url: "https://www.aapd.org/resources/parent/faq",
    accessed: "2026-10-25",
    what:
      "Primera visita al dentista al salir el primer diente o a más tardar en el primer cumpleaños, y nada que no sea agua en el biberón de la noche.",
  },
  {
    id: "ada-baby-teeth",
    org: "American Dental Association · MouthHealthy",
    title: "Baby Teeth",
    url: "https://www.mouthhealthy.org/all-topics-a-z/baby-teeth",
    accessed: "2026-10-25",
    what:
      "Por qué importan los dientes de leche, cepillado con pasta fluorada del tamaño de un grano de arroz y primera visita al dentista antes del primer cumpleaños.",
  },
  {
    id: "aep-8-12",
    org: "Asociación Española de Pediatría · En Familia",
    title: "Bebé de 8-12 meses",
    url: "https://www.aeped.es/enfamilia/salud-en-familia/bebe-8-12-meses",
    accessed: "2026-10-25",
    what:
      "Desarrollo de 8 a 12 meses en español: se para y cruza, permanencia del objeto, pinza, angustia de separación, primeras rabietas y balbuceo con entonación.",
  },
  {
    id: "aep-alimentacion-complementaria",
    org: "Asociación Española de Pediatría · En Familia",
    title: "Alimentación complementaria",
    url:
      "https://www.aeped.es/enfamilia/salud-en-familia/alimentacion-complementaria-0",
    accessed: "2026-10-25",
    what:
      "Leche materna como alimento principal entre los 6 y los 12 meses, alimentos ricos en hierro a diario, texturas grumosas antes de los 8–9 meses, agua en vaso y nada de sal, azúcar ni zumos.",
  },
  {
    id: "bmc-walking-onset",
    org: "BMC Pediatrics (2021)",
    title:
      "Walking onset: a poor predictor for motor and cognitive skills in healthy preschool children",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8393818/",
    accessed: "2026-10-25",
    what:
      "Estudio con 555 niños: la edad de la marcha predice poco y de forma débil algunas habilidades concretas años después; sus autores lo llaman mal predictor.",
  },
  {
    id: "infantbotulism-prevention",
    org:
      "California Department of Public Health · Infant Botulism Treatment and Prevention Program",
    title: "Prevention · Honey and Infant Botulism",
    url: "https://www.infantbotulism.org/parent/prevention",
    accessed: "2026-10-25",
    what:
      "Prohibido dar miel ni productos con miel antes de los 12 meses: es la única fuente evitable de esporas de Clostridium botulinum asociada al botulismo infantil.",
  },
  {
    id: "cdc-botulism",
    org: "CDC · Botulism",
    title: "Botulism Prevention",
    url: "https://www.cdc.gov/botulism/prevention/index.html",
    accessed: "2026-10-25",
    what:
      "Botulismo infantil: no dar miel ni productos con miel, incluidos chupetes con miel, a menores de 1 año.",
  },
  {
    id: "cdc-choking",
    org: "CDC · Infant and Toddler Nutrition",
    title: "Choking Hazards",
    url:
      "https://www.cdc.gov/nutrition/infantandtoddlernutrition/foods-and-drinks/choking-hazards.html",
    accessed: "2026-10-25",
    what:
      "Alimentos de riesgo (uvas enteras, frutos secos, palomitas, salchichas, verduras crudas) y reglas: sentado, sin distracciones y siempre vigilado.",
  },
  {
    id: "cdc-cows-milk",
    org: "CDC · Infant and Toddler Nutrition",
    title: "Cow's Milk and Milk Alternatives",
    url:
      "https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/cows-milk-and-milk-alternatives.html",
    accessed: "2026-10-25",
    what:
      "Por qué la leche de vaca no se ofrece como bebida antes de los 12 meses (sangrado intestinal, carga para el riñón, nutrientes inadecuados) y cuántos lácteos necesita entre 12 y 23 meses.",
  },
  {
    id: "cdc-iron",
    org: "CDC · Infant and Toddler Nutrition",
    title: "Iron",
    url:
      "https://www.cdc.gov/infant-toddler-nutrition/vitamins-minerals/iron.html",
    accessed: "2026-10-25",
    what:
      "Hierro: alimentos ricos en hierro desde los 6 meses, combinar con vitamina C y la analítica de anemia alrededor de los 12 meses.",
  },
  {
    id: "cdc-12m",
    org: "CDC · Learn the Signs. Act Early.",
    title: "Milestones by 1 Year",
    url: "https://www.cdc.gov/act-early/milestones/1-year.html",
    accessed: "2026-10-25",
    what:
      "Checkpoint oficial del año: se pone de pie, camina con apoyo, pinza fina, mete objetos en un recipiente, busca lo escondido, saluda, dice «mamá», entiende el «no», juega a juegos de turnos y bebe de una taza abierta con ayuda.",
  },
  {
    id: "cdc-15m",
    org: "CDC · Learn the Signs. Act Early.",
    title: "Milestones by 15 Months",
    url: "https://www.cdc.gov/act-early/milestones/15-months.html",
    accessed: "2026-10-25",
    what:
      "Lo que el CDC pide a los 15 meses y no a los 12: pasos solo, apilar dos objetos, señalar para pedir, seguir instrucciones con gesto y decir una o dos palabras. También fija 11–14 h de sueño de 1 a 2 años.",
  },
  {
    id: "cdc-9m",
    org: "CDC · Learn the Signs. Act Early.",
    title: "Milestones by 9 Months",
    url: "https://www.cdc.gov/act-early/milestones/9-months.html",
    accessed: "2026-10-25",
    what:
      "Hitos oficiales a los 9 meses: se sienta solo, rastrilla la comida, balbucea cadenas largas, levanta los brazos, busca lo que se cae y se pone tímido con extraños.",
  },
  {
    id: "choc-fine-motor",
    org: "CHOC · Children's Hospital of Orange County (Rehabilitación)",
    title: "Developmental Milestones: Fine Motor Skills and Visual Motor Skills",
    url:
      "https://www.choc.org/userfiles/file/Rehab-Developmental%20Milestones%20final.pdf",
    accessed: "2026-10-25",
    what:
      "Secuencia fina mes a mes: pinza inferior con las yemas hacia los 7–8 meses, empujar con el índice a los 8, pinza a los 9, soltar en la mano del adulto a los 10 y meter objetos en un recipiente a los 11.",
  },
  {
    id: "cleveland-cows-milk",
    org: "Cleveland Clinic",
    title: "When Can Your Baby Have Cow's Milk?",
    url:
      "https://health.clevelandclinic.org/when-is-it-safe-to-give-cows-milk-to-my-baby",
    accessed: "2026-10-25",
    what:
      "Antes de los 12 meses la leche de vaca como bebida no es segura: microsangrados digestivos, exceso de proteína y minerales para el riñón y poco hierro. Yogur y queso sí antes del año.",
  },
  {
    id: "cleveland-crawl",
    org: "Cleveland Clinic",
    title: "When Do Babies Start To Crawl?",
    url: "https://health.clevelandclinic.org/when-do-babies-crawl",
    accessed: "2026-10-25",
    what:
      "La mayoría gatea entre los 7 y los 10 meses; estilos distintos y por qué gatear más tarde también puede ser normal.",
  },
  {
    id: "cleveland-milestones",
    org: "Cleveland Clinic",
    title: "Baby Developmental Milestones (Infant Milestones)",
    url:
      "https://my.clevelandclinic.org/health/articles/22063-baby-development-milestones-safety",
    accessed: "2026-10-25",
    what:
      "Lista de hitos por mes alineada con el CDC de 2022, con la versión de 9 meses del traslado de objetos entre manos y el miedo a los extraños; además, seguridad básica del primer año.",
  },
  {
    id: "cleveland-pincer",
    org: "Cleveland Clinic",
    title: "Finger to Thumb: What To Know About the Pincer Grasp",
    url: "https://health.clevelandclinic.org/pincer-grasp",
    accessed: "2026-10-25",
    what:
      "Secuencia del agarre: rastrillo hacia los 6 meses, agarre radial hacia los 9, pinza inferior con las yemas antes del año y pinza fina punta con punta hacia los 12 meses.",
  },
  {
    id: "cleveland-sleep-1y",
    org: "Cleveland Clinic",
    title: "Sleep in Your Baby's First Year",
    url:
      "https://my.clevelandclinic.org/health/articles/14300-sleep-in-your-babys-first-year",
    accessed: "2026-10-25",
    what:
      "12–16 horas de sueño entre los 4 y los 12 meses, despertares normales y cambios de patrón; rutina de 20–30 minutos y habitación a 20–22 °C.",
  },
  {
    id: "espghan-ycf",
    org: "ESPGHAN · Infant Feeding Campaign",
    title: "Guidance Summary: complementary feeding and young child formula",
    url:
      "https://www.espghan.org/dam/jcr:ea5c9b57-9315-44b7-b9a0-149511b96654/ESPGHAN%20Infant%20Feeding%20Campaign%20-%20Guidance%20Summary.pdf",
    accessed: "2026-10-25",
    what:
      "Las fórmulas de crecimiento no son necesarias de forma rutinaria entre 1 y 3 años; pueden apoyar hierro, vitamina D y omega-3, pero no sustituyen la comida.",
  },
  {
    id: "pmc-social-referencing",
    org: "Infant Behavior and Development · Mireault et al. (2014), vía PMC",
    title:
      "Social Looking, Social Referencing and Humor Perception in 6- and 12-month-old Infants",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4262602/",
    accessed: "2026-10-25",
    what:
      "A los 6 meses ya hay miradas de consulta a la cara del cuidador; la referencia social clásica se consolida hacia los 8 meses.",
  },
  {
    id: "perkin-sleep",
    org: "JAMA Pediatrics (Perkin et al., 2018)",
    title: "Association of Early Introduction of Solids With Infant Sleep",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6142923/",
    accessed: "2026-10-25",
    what:
      "Análisis secundario del ensayo EAT con 1303 bebés: empezar sólidos antes se asoció con 16,6 minutos más de sueño a los 6 meses y 1,74 despertares frente a 2,01; 7,3 minutos de media.",
  },
  {
    id: "medlineplus-6m",
    org: "MedlinePlus · Biblioteca Nacional de Medicina de EE. UU.",
    title: "Developmental milestones record – 6 months",
    url: "https://medlineplus.gov/ency/article/002008.htm",
    accessed: "2026-10-25",
    what:
      "Hitos clínicos hacia los 6 meses: sostiene casi todo el peso de pie con apoyo, pasa objetos de una mano a otra, rueda de espaldas a barriga hacia los 7 meses, empieza a temer a los desconocidos.",
  },
  {
    id: "nhs-drinks-cups",
    org: "NHS",
    title: "Drinks and cups for babies and young children",
    url:
      "https://www.nhs.uk/conditions/baby/weaning-and-feeding/drinks-and-cups-for-babies-and-young-children/",
    accessed: "2026-10-25",
    what:
      "Vaso abierto o de flujo libre desde los 6 meses, sorbos de agua con las comidas, nada de jugo antes del año y leche de vaca como bebida solo después de los 12 meses.",
  },
  {
    id: "nhs-foods-avoid",
    org: "NHS",
    title: "Foods to avoid giving babies and young children",
    url:
      "https://www.nhs.uk/conditions/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
    accessed: "2026-10-25",
    what:
      "Sin sal añadida, sin azúcar ni edulcorantes en los primeros años, sin miel antes del año y sin frutos secos enteros por riesgo de atragantamiento.",
  },
  {
    id: "nhs-myths",
    org: "NHS · Best Start in Life",
    title: "Baby myths and facts",
    url:
      "https://www.nhs.uk/best-start-in-life/baby/baby-basics/baby-myths-and-facts/",
    accessed: "2026-10-25",
    what:
      "Desmonta los mitos de malcriar con brazos y de dejar llorar para que se calme solo; los despertares nocturnos como algo normal.",
  },
  {
    id: "nhs-gagging",
    org: "NHS · Better Health",
    title: "Choking and gagging on food",
    url:
      "https://www.nhs.uk/best-start-in-life/baby/weaning/safe-weaning/choking-and-gagging-on-food/",
    accessed: "2026-10-25",
    what:
      "Diferencia clínica entre arcada y atragantamiento: la arcada es ruidosa y normal, el atragantamiento es silencioso; signos de cada uno y qué hacer.",
  },
  {
    id: "pmc-anotb",
    org: "NIH · PMC (Developmental Science, 2019)",
    title: "Investigating the social environment of the A-not-B search task",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7187186/",
    accessed: "2026-10-25",
    what:
      "A los 9 meses buscan correctamente en un solo escondite pero perseveran en el primero cuando el objeto cambia de sitio; la mirada anticipa lo que la mano todavía no resuelve.",
  },
  {
    id: "pmc-pointing",
    org:
      "NIH · PMC (International Journal of Environmental Research and Public Health, 2022)",
    title:
      "Developmental Paths of Pointing for Various Motives in Infants with and without Language Delay",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9104230/",
    accessed: "2026-10-25",
    what:
      "Las primeras formas de señalar aparecen entre los 9 y los 12 meses; la señal canónica con índice se generaliza hacia los 12 y es más frecuente con vocalización.",
  },
  {
    id: "pmc-nightwaking",
    org: "NIH · PMC (Journal of Developmental & Behavioral Pediatrics, 2001)",
    title:
      "Night Waking, Sleep-Wake Organization, and Self-Soothing in the First Year of Life",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC1201414/",
    accessed: "2026-10-25",
    what:
      "Estudio con videopolisomnografía en 80 bebés: casi todos se despiertan de noche, hay una interrupción leve hacia los 9 meses y el 50 % de los de 12 meses aún necesitan a un adulto para volver a dormirse.",
  },
  {
    id: "nature-sleep-dev",
    org: "Pediatric Research · O'Connor et al. (2026)",
    title: "Sleep and infant development in the first year",
    url: "https://www.nature.com/articles/s41390-026-04780-4",
    accessed: "2026-10-25",
    what:
      "Revisión del sueño en el primer año: los despertares aumentan al adquirir hitos motores; los bebés con menos de un mes gateando duermen menos y se despiertan más, y lo mismo ocurre al empezar a sentarse, caminar de lado y caminar.",
  },
  {
    id: "w-sitting-review",
    org: "PMC · Acta Ortopédica Brasileira (2025)",
    title: "W-Sitting in Childhood: A Systematic Review",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11723520/",
    accessed: "2026-10-25",
    what:
      "Revisión sistemática de 7 estudios: no hay evidencia de que sentarse en W cause displasia de cadera ni deformidades, y la activación muscular del tronco no cambia.",
  },
  {
    id: "pubmed-kuhl-2003",
    org: "PNAS · Kuhl, Tsao & Liu (2003), vía PubMed",
    title:
      "Foreign-language experience in infancy: effects of short-term exposure and social interaction on phonetic learning",
    url: "https://pubmed.ncbi.nlm.nih.gov/12861072/",
    accessed: "2026-10-25",
    what:
      "Bebés de 9–10 meses aprendieron fonemas de mandarín con hablantes en vivo y no con el mismo material en video o audio: la interacción social es la diferencia.",
  },
  {
    id: "aep-nutricion-2a",
    org: "SEPEAP · Pediatría Integral (2025)",
    title: "Alimentación en el niño hasta los dos años de edad",
    url:
      "https://www.pediatriaintegral.es/publicacion-2025-03/alimentacion-en-el-nino-hasta-los-dos-anos-de-edad/",
    accessed: "2026-10-25",
    what:
      "Revisión española de atención primaria: ventana de 4–6 meses (ESPGHAN, 17 semanas mínimo), hierro 1 mg/kg/día, texturas, alérgenos, agua desde los 6 meses y el debate BLW/BLISS.",
  },
  {
    id: "sleep-naps-meta",
    org: "Sleep Medicine Reviews (2019)",
    title:
      "Many naps, one nap, none: a systematic review and meta-analysis of napping patterns in children 0–12 years",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9704850/",
    accessed: "2026-10-25",
    what:
      "Revisión sistemática y metaanálisis: el paso de dos o más siestas a una se concentra entre los 12 y los 18 meses.",
  },
  {
    id: "zerotothree-play",
    org: "ZERO TO THREE",
    title: "Stages of Play From 12–24 Months: Young Toddlers Are Problem Solvers",
    url:
      "https://www.zerotothree.org/resource/stages-of-play-from-12-24-months-young-toddlers-are-problem-solvers",
    accessed: "2026-10-25",
    what:
      "Juego de 12 a 24 meses: llenar y vaciar, apilar, encajar, imitar rutinas, pedidos de un paso, pelota con turnos y primeras imitaciones.",
  },
  {
    id: "zerotothree-responsive",
    org: "ZERO TO THREE",
    title:
      "The Importance of Responsive Parenting: Building Strong Emotional Bonds From Birth",
    url:
      "https://www.zerotothree.org/resource/the-importance-of-responsive-parenting-building-strong-emotional-bonds-from-birth/",
    accessed: "2026-10-25",
    what:
      "La crianza responsiva construye apego seguro y desmiente el mito de que cargar mucho a un bebé lo malcría; la sensibilidad a sus señales predice seguridad emocional.",
  },
  {
    id: "zerotothree-separation",
    org: "ZERO TO THREE",
    title: "Separation Anxiety",
    url: "https://www.zerotothree.org/resource/separation-anxiety/",
    accessed: "2026-10-25",
    what:
      "Por qué aparece entre los 7 y los 9 meses, qué entiende el bebé cuando te vas y cómo despedirse sin desaparecer a escondidas.",
  },
  {
    id: "zerotothree-thinking",
    org: "ZERO TO THREE",
    title: "Developing Thinking Skills From Birth to 12 Months",
    url:
      "https://www.zerotothree.org/resource/developing-thinking-skills-from-birth-to-12-months/",
    accessed: "2026-10-25",
    what:
      "El juego de esconder y reaparecer como base de la permanencia del objeto, y la exploración con la boca como forma de aprender causa-efecto.",
  },
  {
    id: "ztt-12-24",
    org: "ZERO TO THREE",
    title: "12-24 Months: Social-Emotional Development",
    url:
      "https://www.zerotothree.org/resource/12-24-months-social-emotional-development/",
    accessed: "2026-10-25",
    what:
      "Autonomía y sentido de sí mismo en el segundo año: berrinches, juego de turnos, el adulto como base segura y rutinas predecibles.",
  },
] as const satisfies readonly Source[];

export type SourceId = (typeof sources)[number]["id"];

export const sourceById = new Map<string, Source>(
  sources.map((source) => [source.id, source]),
);

export function getSource(id: SourceId): Source {
  const source = sourceById.get(id);
  if (!source) throw new Error(`Fuente desconocida: ${id}`);
  return source;
}
