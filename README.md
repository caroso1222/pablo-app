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

## Despliegue

El sitio vive en <https://caroso1222.github.io/pablo-app/> (repositorio público).

Se publica solo: cada push a `main` dispara `.github/workflows/deploy.yml`, que
instala dependencias, corre los tests, compila y sube `dist/` a Pages. Si los
tests fallan, no se publica. También se puede lanzar a mano desde la pestaña
*Actions* (`workflow_dispatch`).

```bash
git push origin main     # eso es todo
```

Primer despliegue de una rama nueva: ~1–2 minutos. El resto es incremental.

Notas:

- Pages usa el origen **GitHub Actions** (`build_type: workflow`), no una rama.
  No hay rama `gh-pages`.
- El sitio es público aunque el repositorio fuese privado: en Pages la
  visibilidad del repo no protege el contenido.
- Actions es gratis para repos públicos; aquí el consumo es trivial.

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
public/
  toys/                fotos de referencia de los juguetes (480×360)
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

## Añadir una foto a un juguete

Las fotos son de fabricante, usadas como referencia visual de la categoría (la
app habla de categorías, no de marcas), y viven en `public/toys/` para que
funcionen sin conexión.

1. Guarda la foto en `public/toys/<id-del-juguete>.jpg`.
2. Normalízala siempre al mismo lienzo: 480×360 (4:3), fondo blanco, producto
   centrado con ~14 px de margen. Si la foto original trae un collage de
   variantes al pie, recórtalo antes.
3. En `src/content/month-NN.ts` añade al juguete:

   ```ts
   image: "toys/t4-obal.jpg",
   imageAlt: "Pelota de rejilla flexible con huecos grandes para meter los dedos.",
   ```

4. `npm test`: falla si la ruta no existe en `public/` o si el alt es muy corto.
5. La tarjeta se encarga del resto: `loading="lazy"`, `decoding="async"`, caja
   4:3 y, si la foto falla, la esconde sin dejar hueco.

> El `imageAlt` describe la categoría, nunca la marca: la recomendación de la
> app es el tipo de objeto, no el producto de la foto.

## Criterios

- Hitos con **ventanas**, no fechas. Los checkpoints del CDC son percentil 75.
- Cada mito lleva veredicto y base de la corrección.
- No se incluye nada que no se pueda citar. Si es popular sin respaldo, se
  etiqueta como tal.
- La app no diagnostica ni sustituye al pediatra.
