import { sources } from "../content/sources";
import { EVIDENCE_LABEL, type Evidence } from "../content/types";
import { EvidenceBadge } from "../components/EvidenceBadge";
import { card, cardSoft, cardWarn, cx, eyebrow, sectionTag } from "../ui";

const LEVELS: { id: Evidence; body: string }[] = [
  {
    id: "consenso",
    body:
      "Guías oficiales o consenso clínico: CDC, OMS, AAP, AEP. Si esta etiqueta aparece en un hito, es porque la mayoría de los niños lo hace o porque la recomendación está establecida.",
  },
  {
    id: "moderada",
    body:
      "Hay estudios que lo sostienen, pero no es una regla universal: el momento exacto varía mucho entre bebés y algunos estudios son pequeños. Sirve para orientarte, no para medir a Pablo.",
  },
  {
    id: "popular",
    body:
      "Se repite mucho, pero la evidencia es débil o no se pudo replicar. No significa que sea falso: significa que no lo uses para tomar decisiones ni para preocuparte.",
  },
];

export function SourcesPage() {
  const sorted = [...sources].sort((a, b) => a.org.localeCompare(b.org));

  return (
    <div className="space-y-3.5 pt-3.5">
      <header className="px-0.5 pt-2.5 pb-4">
        <p className={cx(eyebrow, "mb-1.5")}>Cómo leer esta app</p>
        <h1>De dónde sale todo esto</h1>
        <p className="max-w-[60ch] text-ink-soft">
          Cada afirmación lleva una etiqueta y una fuente. Si algo no está
          sustentado, lo dice. Esta app no diagnostica ni reemplaza al pediatra:
          ordena información para que llegues a la consulta con mejores
          preguntas.
        </p>
      </header>

      <section>
        <div className="mt-4 mb-2 px-0.5">
          <h2 className="m-0">Niveles de evidencia</h2>
        </div>
        <div className="flex flex-col gap-3">
          {LEVELS.map((level) => (
            <div className={card} key={level.id}>
              <EvidenceBadge evidence={level.id} />
              <p className="mt-2 text-ink-soft">{level.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={cx(cardSoft, "space-y-2.5")}>
        <h2>Los hitos no son un examen</h2>
        <p className="text-ink-soft">
          Desde 2022, los hitos del CDC están escritos para describir lo que
          hace <strong className="text-ink">el 75 % de los niños</strong> a una
          edad, no el promedio. Eso significa que uno de cada cuatro niños sanos
          todavía no lo hace a esa edad y no pasa nada. La OMS va más allá: para
          los hitos motores publica{" "}
          <strong className="text-ink">ventanas</strong>, no fechas. Por ejemplo,
          caminar solo tiene una ventana de 8,2 a 17,6 meses: los dos extremos
          son normales.
        </p>
        <p className="text-ink-soft">
          Por eso en esta app vas a ver rangos («4–6 meses») y no fechas
          exactas. Si un hito no aparece, la pregunta útil no es «¿está
          retrasado?» sino «¿qué otras cosas hace y qué ha cambiado desde la
          última vez?».
        </p>
      </section>

      <section className={cardWarn}>
        <h2>Lo que esta app no hace</h2>
        <ul className="mt-3 flex list-none flex-col gap-[7px] p-0">
          {[
            "No calcula percentiles de peso ni talla.",
            "No diagnostica ni sustituye una valoración pediátrica.",
            "No recomienda medicación, suplementos ni dietas.",
            "No guarda datos de Pablo: todo vive en tu navegador.",
          ].map((item) => (
            <li
              key={item}
              className="relative pl-[21px] text-[0.88rem] text-ink-soft before:absolute before:top-[0.52em] before:left-0.5 before:size-[9px] before:rounded-[3px] before:border before:border-[#c9ddcf] before:bg-sage-soft before:content-['']"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <div className="mt-4 mb-2 flex items-baseline justify-between gap-3 px-0.5">
          <h2 className="m-0">Fuentes</h2>
          <span className={sectionTag}>{sorted.length}</span>
        </div>
        <ul className="flex list-none flex-col gap-3.5 p-0">
          {sorted.map((source) => (
            <li
              key={source.id}
              className="border-b border-line pb-3 last:border-0 last:pb-0"
            >
              <a
                className="flex flex-col gap-px no-underline"
                href={source.url}
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="text-[0.78rem] font-bold text-terra">
                  {source.org}
                </span>
                <span className="text-[0.92rem] leading-[1.4] text-ink">
                  {source.title}
                </span>
              </a>
              <p className="mt-1 text-[0.8rem] text-muted">{source.what}</p>
              <span className="text-[0.68rem] tracking-[0.05em] text-muted/80 uppercase">
                Consultado el {source.accessed}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <p className="text-[0.82rem] text-muted">
        Las etiquetas de evidencia usan {EVIDENCE_LABEL.consenso.toLowerCase()},{" "}
        {EVIDENCE_LABEL.moderada.toLowerCase()} y{" "}
        {EVIDENCE_LABEL.popular.toLowerCase()}. Si encuentras un error o una
        fuente mejor, dímelo y lo corrijo.
      </p>
    </div>
  );
}
