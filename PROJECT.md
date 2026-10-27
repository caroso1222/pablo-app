# Pablo, mes a mes

## Goal

Una app web mobile-first para Carlos y Lina con dos cosas que se usan de
verdad, muchas veces a las 3 de la mañana:

1. **Qué suele pasar cada mes** en los dos primeros años de Pablo (nacido el
   7 de julio de 2026): hitos por área, banderas rojas y sueño/alimentación.
2. **Cómo jugar y estimularlo** en cada etapa, con actividades concretas,
   juguetes que valen la pena y enfoques de desarrollo temprano.

La regla del proyecto es que **cada afirmación tenga fuente y nivel de
evidencia**, y que lo popular sin respaldo se diga como tal. Carlos sospechaba
que algunas cosas que había oído («el mes 3 es brote de crecimiento», «a los 4
hay regresión del sueño», «a los 6 salen los dientes») podían ser inventadas:
la app no las repite, las clasifica.

## Stack & Decisions

- **React 18 + TypeScript strict + Vite 5 + Tailwind CSS v4** (plugin oficial
  `@tailwindcss/vite`). Sin CDN en runtime.
- **Tailwind con tokens, no hex sueltos:** los colores, tipografías, radios y
  sombras viven en `@theme` dentro de `src/index.css` y generan utilidades
  (`bg-terra`, `text-ink-soft`, `rounded-card`, `shadow-card`). Las primitivas
  que se repiten (tarjeta, botón, chip, badge) están en `src/ui.ts`; el resto
  se compone con utilidades en el JSX. Nada de CSS por componente.
- **Contenido como módulos TS tipados**, no hardcodeado en componentes:
  `src/content/month-03.ts`, `month-04.ts`. Un test falla si un mes no tiene
  las cinco áreas, un hito sin fuente o un id duplicado. El contenido es el
  80 % del proyecto, así que se trata como código.
- **Sin router de terceros:** hash routing propio (`#/`, `#/meses`, `#/mes/4`,
  `#/jugar`, `#/fuentes`) para que el build estático funcione en cualquier
  servidor sin rewrites.
- **PWA** con `vite-plugin-pwa`: instalable, service worker con precache del
  app shell y del contenido. Iconos generados localmente (PNG + SVG).
- **Navegación inferior fija** de 4 pestañas; todo pensado para el pulgar, no
  para un desktop encogido.
- **Sin estado persistente**: no hay checklist ni perfil de bebé (decisión de
  Carlos). La fecha de nacimiento es una constante en `src/baby.ts`.
- **Idioma:** español latinoamericano, tuteo, sin «vosotros» ni modismos de
  España (se corrigieron «coche» → «carro», «zumo» → «jugo»).
- **Hosting:** GitHub Pages en <https://caroso1222.github.io/pablo-app/>, repo
  público `caroso1222/pablo-app`. Publica el workflow
  `.github/workflows/deploy.yml` en cada push a `main` (origen «GitHub Actions»,
  sin rama `gh-pages`). El HTML usa `base: "./"`, así que el mismo `dist/`
  funciona en raíz o en subcarpeta sin tocar nada.

## Cómo se lee el contenido

- Cada mes cubre **meses cumplidos**: «Mes 4 · de 3 a 4 meses» es donde Pablo
  está hoy (26 oct 2026: 3 meses y 19 días).
- Los hitos usan **ventanas** (`3–4 m`), no fechas. Los checkpoints del CDC son
  el **percentil 75**: «lo hace la mayoría», no el promedio ni un examen.
- Los mitos llevan veredicto («Tiene base» / «Matizado» / «Mito») y la base de
  la corrección.
- Etiquetas de evidencia: **consenso clínico**, **evidencia moderada**,
  **popular, poco respaldo**.

## Current State

Funcional y navegable, con el primer año completo:

- **10 fichas de mes** (meses 3 a 12) con 168 hitos, 53 mitos, 71 juguetes,
  107 actividades, sueño, alimentación, 95 banderas rojas y fuentes cruzadas.
- **94 fuentes** en el registro: CDC (checkpoints 4/6/9/12/15 m), OMS (ventanas
  motoras, lactancia, pantallas), AAP y HealthyChildren, ASHA/NIDCD, AEP y
  AEPED (calendario vacunal 2026), UNICEF, Zero to Three, Harvard, NHS,
  Cleveland/Mayo, CPSC, ADA/AAPD, ESPGHAN, y estudios primarios (LEAP, EAT,
  Macknin, Kuhl, W-sitting, A-not-B, hitos del CDC 2022).
- **Pantalla Hoy** con edad exacta, progreso del mes, actividad del día y mito
  de la semana (rotación determinista por fecha, sin aleatoriedad).
- **Buscador de actividades** con filtros por mes, área, tiempo, materiales y
  lugar (107 actividades indexadas).
- **Enfoques**: serve and return, Montessori, RIE, movimiento libre (Pikler),
  juego libre vs. guiado, lectura en voz alta, pantallas.
- **PWA** verificada: service worker activo y controlando la página.
- **115 tests** (contenido + edad) y `tsc -b` limpio.
- Sin errores de consola en las 13 rutas.

## Next Steps

1. **Meses 13 a 24**, donde cambian los hitos de lenguaje y aparece el juego
   simbólico; el mes 13 arranca con la revisión de los 15 meses como referencia.
2. Revisión de tono por Carlos y Lina con la app en el móvil.
3. Evaluar si hace falta una ficha de **mes 0–2** con más detalle semanal.

## Open Questions / Blockers

- ¿La sección de sueño debe crecer a «qué esperar esta semana» en los meses de
  cambio (4, 8–10, 18)? Hoy es un párrafo por mes.
- La alimentación complementaria vive dentro de cada mes (6 a 12); si crece
  mucho, habría que decidir si se convierte en pestaña propia.
- Las actividades con el mismo nombre en meses lejanos se eliminaron para no
  duplicar el catálogo (ver *Non-obvious Context*). Falta decidir si el buscador
  necesita un «más de lo mismo en otro mes» explícito.

## Non-obvious Context

- **Fecha de nacimiento**: 7 de julio de 2026. `ageInfo()` calcula meses
  cumplidos y días con aritmética de calendario (no con 30 días), recortando el
  día cuando el mes destino es más corto.
- **Mes en curso** = meses cumplidos + 1. Si Pablo tiene 3 meses y 18 días,
  está viviendo el mes 4.
- **Los checkpoints del CDC no existen a los 3 meses** (son 2, 4, 6, 9, 12, 15,
  18, 24). Por eso el mes 3 se construye con la ventana 2–4 y la OMS, no con un
  checklist propio.
- **El chip «CDC X m» se resuelve por checkpoint**, no por edad del mes: un hito
  de 9 meses dentro del mes 8 abre el checklist de 9 meses, no el de 6. El mapa
  está en `CDC_CHECKPOINT` (`MonthDetail.tsx`).
- **Los hitos que persisten se repiten con otro ángulo, no con otro texto.** Un
  bebé de 9 meses sigue pasándose cosas de mano; lo que cambia es la precisión.
  Cada mes describe la versión de ese mes y evita copiar el título del anterior.
- **Duplicados eliminados a propósito:** al escribir 5–12 aparecieron circuitos,
  trasvases y juegos de pelota repetidos en meses contiguos; se quedó la versión
  del mes donde el hito nace y se borraron las copias (el catálogo pasó de 113 a
  107 actividades). Menos tarjetas repetidas, mismo contenido útil.
- **Vocabulario colombiano:** «jugo» (no zumo), «carro» (no coche), «maní» (no
  cacahuate), «banano», «celular», «agarrar» (nunca «coger»). Hay un grep de
  control en el flujo de revisión.
- **La «regresión» del sueño de los 4 meses** se trata como maduración de la
  arquitectura del sueño, no como regresión real. El calendario de Wonder Weeks
  se cita como marco popular sin replicación, no como evidencia.
- **La dentición no causa fiebre ≥38 °C**; el estudio prospectivo de Macknin
  (Pediatrics 2000) es la referencia.
- Los **andadores** se marcan como «no» con la posición de la AAP (pide
  prohibirlos) y el antecedente de Canadá.
- Los **iconos PWA** se generaron con Pillow (`make_icons.py`, ya eliminado);
  si cambia la marca hay que regenerar `public/icon-*.png` y
  `apple-touch-icon.png`.
- **`base: "./"`** en Vite: imprescindible para que el build funcione en
  subcarpetas de Pages o detrás de un proxy sin tocar rutas.
- **Ritmo vertical centralizado:** cada página usa `space-y-3.5` (14 px) en su
  contenedor. Los márgenes entre hermanos colapsan, así que no hay que añadir
  `gap` a cada sección ni preocuparse por duplicar espacio. Si un bloque
  necesita más aire, se le pone `mt-*` propio (p. ej. `mt-[26px]` en la
  navegación entre meses).
