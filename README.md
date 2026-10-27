# Pablo, mes a mes

App web (mobile-first) con lo que suele pasar cada mes de los dos primeros años
de Pablo y cómo jugar/estimularlo en cada etapa. Todo con fuentes y nivel de
evidencia.

## Correr en local

```bash
npm install
npm run dev
```

Vite queda escuchando en la red local (`--host`). Desde el móvil, en la misma
WiFi: `http://<IP-de-tu-Mac>:5173`.

## Scripts

| Comando | Qué hace |
| --- | --- |
| `npm run dev` | Servidor de desarrollo con recarga |
| `npm run build` | Typecheck + build estático en `dist/` |
| `npm run preview` | Sirve `dist/` (incluye service worker) |
| `npm test` | Tests de contenido, edad y navegación |
| `npm run typecheck` | Solo TypeScript |
| `npm run deploy` | Compila y publica en GitHub Pages |

## Despliegue

El sitio vive en <https://caroso1222.github.io/pablo-app/> (repositorio público).

GitHub Pages sirve desde la rama `gh-pages`, que solo contiene el build. Para
publicar cambios:

```bash
npm run deploy
```

`scripts/deploy.sh` compila, copia `dist/` a una carpeta temporal, añade
`.nojekyll` y fuerza el push a `gh-pages`. Tarda ~1 minuto en verse reflejado.

Por qué no hay workflow de Actions: el token de `gh` de esta máquina no tiene el
scope `workflow`, así que GitHub rechaza subir un `.github/workflows/*.yml`.
Si algún día se quiere CI en cada push, basta con `gh auth refresh -s workflow`
y añadir el workflow oficial de Pages (`configure-pages` + `deploy-pages`).

Ojo: el sitio es público aunque el repositorio fuese privado. En Pages la
visibilidad del repo no protege el contenido.

## Estructura

```
src/
  App.tsx              rutas y layout
  router.ts            hash routing (#/mes/4?a=a4-cucu)
  baby.ts              fecha de nacimiento, edad exacta, formateo
  index.css            Tailwind v4 + tokens de diseño en @theme
  ui.ts                primitivas compartidas (card, btn, chip, badge)
  components/          tarjetas, badges, navegación
  pages/               Hoy, Meses, Mes detalle, Jugar, Fuentes
  content/
    types.ts           modelo: hito, mito, actividad, juguete, enfoque
    sources.ts         registro central de fuentes (94)
    month-03.ts        ficha completa del mes 3
    month-04.ts        ficha completa del mes 4
    month-05.ts … 12   fichas completas del mes 5 al 12
    approaches.ts      metodologías de desarrollo temprano
    index.ts           registro de meses + índices de actividades/juguetes
    content.test.ts    guardas de integridad del contenido
```

## Estilo (Tailwind v4)

- Los colores, fuentes, radios y sombras están en `@theme` (`src/index.css`):
  `bg-terra`, `text-ink-soft`, `font-serif`, `rounded-card`, `shadow-card`.
  Para añadir un color nuevo, se declara ahí y queda disponible como utilidad.
- `src/ui.ts` exporta `card`, `btn`, `chip`, `badge`, etc. para no repetir la
  misma cadena de utilidades en cada pantalla. Todo lo demás se compone con
  utilidades en el JSX.
- El ritmo vertical de una página es `space-y-3.5` en su contenedor.

## Añadir un mes

1. Copia `src/content/month-04.ts` a `month-13.ts` y ajusta `month`, `label`,
   `ageRange`.
2. Escribe los hitos con `typical: [desde, hasta]` en meses cumplidos y al menos
   una fuente de `sources.ts`.
3. Regístralo en `src/content/index.ts` (`months`).
4. Añade las fuentes nuevas a `sources.ts` (con URL y fecha de consulta real) y
   verifica que devuelvan 200.
5. `npm test` — falla si falta un área, un hito sin fuente o un id repetido.

Reglas de contenido que no están en los tests pero sí en el listón:

- Un hito solo lleva `cdcAt` si aparece literalmente en ese checklist del CDC.
- No repitas el título exacto de un hito de otro mes: describe la versión de
  este mes (qué cambia, qué consolida).
- No repitas una actividad ni un mito de otro mes con otras palabras. Si el
  tema vuelve, el ángulo tiene que ser distinto.
- Español latinoamericano con tuteo; nada de «vosotros», «coger», «zumo»,
  «coche» ni «móvil».

## Criterios

- Hitos con **ventanas**, no fechas. Los checkpoints del CDC son percentil 75.
- Cada mito lleva veredicto y base de la corrección.
- No se incluye nada que no se pueda citar. Si es popular sin respaldo, se
  etiqueta como tal.
- La app no diagnostica ni sustituye al pediatra.
