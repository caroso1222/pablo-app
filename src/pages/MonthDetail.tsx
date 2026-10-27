import { useEffect } from "react";
import { availableMonths, firstMonth, lastMonth, monthByNumber } from "../content";
import { DOMAINS, type MonthContent } from "../content/types";
import { getSource } from "../content/sources";
import { ActivityCard, MythCard } from "../components/ActivityCard";
import { EvidenceBadge } from "../components/EvidenceBadge";
import { ToyCard } from "../components/ToyCard";
import { href } from "../router";
import {
  btnGhost,
  card,
  cardSoft,
  cardWarn,
  cx,
  domainDot,
  dot,
  eyebrow,
  sectionTag,
} from "../ui";

function shortOrg(org: string): string {
  return org.split(" · ")[0];
}

const CDC_CHECKPOINT: Record<number, MonthContent["sources"][number]> = {
  4: "cdc-4m",
  6: "cdc-6m",
  9: "cdc-9m",
  12: "cdc-12m",
  15: "cdc-15m",
};

function cdcSourceFor(age: number) {
  return CDC_CHECKPOINT[age];
}

function SourcePill({ id }: { id: MonthContent["sources"][number] }) {
  const source = getSource(id);
  return (
    <a
      className="border-b border-dotted border-line-strong text-[0.68rem] text-muted no-underline hover:text-terra"
      href={source.url}
      target="_blank"
      rel="noreferrer noopener"
    >
      {shortOrg(source.org)} ↗
    </a>
  );
}

const JUMP = [
  { id: "hitos", label: "Hitos" },
  { id: "consultar", label: "Consultar" },
  { id: "sueno", label: "Sueño" },
  { id: "jugar", label: "Jugar" },
  { id: "juguetes", label: "Juguetes" },
  { id: "mitos", label: "Mitos" },
  { id: "fuentes", label: "Fuentes" },
];

function scrollToId(id: string) {
  const element = document.getElementById(id);
  if (!element) return;
  const top = element.getBoundingClientRect().top + window.scrollY - 108;
  window.scrollTo({ top, behavior: "smooth" });
}

const sectionHead = "flex items-baseline justify-between gap-3";
const sectionTitle = "m-0 text-[1.16rem]";

function NotReady({ month }: { month: number }) {
  return (
    <div className="space-y-3.5 pt-3.5">
      <header className="px-0.5 pt-2.5 pb-4">
        <p className={cx(eyebrow, "mb-1.5")}>Mes {month}</p>
        <h1>Todavía no está escrito</h1>
        <p className="max-w-[60ch] text-ink-soft">
          Esta ficha todavía no existe. Por ahora están listos los meses del{" "}
          {firstMonth} al {lastMonth}. Si quieres, empieza por ahí.
        </p>
      </header>
      <div className={card}>
        <div className="flex flex-wrap gap-2">
          {availableMonths.map((available) => (
            <a className={btnGhost} key={available} href={href.month(available)}>
              Ir al mes {available}
            </a>
          ))}
          <a className={btnGhost} href={href.months}>
            Ver todos los meses
          </a>
        </div>
      </div>
    </div>
  );
}

export function MonthDetailPage({
  month,
  anchor,
}: {
  month: number;
  anchor?: string;
}) {
  const content = monthByNumber.get(month);

  useEffect(() => {
    if (!anchor) return;
    const frame = requestAnimationFrame(() => scrollToId(anchor));
    return () => cancelAnimationFrame(frame);
  }, [anchor, month]);

  if (!content) return <NotReady month={month} />;

  const prev = monthByNumber.get(month - 1);
  const next = monthByNumber.get(month + 1);

  return (
    <div className="pt-3.5">
      <header className="px-0.5 pt-2 pb-3.5">
        <p className={cx(eyebrow, "mb-1")}>
          Mes {content.month} · {content.ageRange}
        </p>
        <h1 className="mt-1 max-w-[22ch] text-[clamp(1.6rem,6.5vw,2rem)]">
          {content.tagline}
        </h1>
      </header>

      <nav
        className="-mx-[18px] flex gap-1.5 overflow-x-auto border-b border-line/80 bg-cream px-[18px] pt-2 pb-2.5 shadow-[0_10px_14px_-16px_rgba(43,37,33,0.4)] [scrollbar-width:none] md:-mx-6 md:px-6 [&::-webkit-scrollbar]:hidden sticky top-[calc(54px+env(safe-area-inset-top))] z-20"
        aria-label="Secciones del mes"
      >
        {JUMP.map((item) => (
          <button
            key={item.id}
            type="button"
            className="min-h-8 cursor-pointer rounded-full border border-line bg-surface-soft/90 px-3 py-1 text-[0.72rem] whitespace-nowrap text-muted"
            onClick={() => scrollToId(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <div className="mt-2 space-y-3.5">
        <section className={cardSoft}>
          <div className={cx(sectionHead, "mb-2.5")}>
            <h2 className={sectionTitle}>En 30 segundos</h2>
          </div>
          <ul className="flex list-none flex-col gap-[9px] p-0">
            {content.tldr.map((item) => (
              <li
                key={item}
                className="relative pl-5 text-[0.95rem] text-ink-soft before:absolute before:top-[0.56em] before:left-0.5 before:size-[7px] before:rounded-full before:bg-terra/55 before:content-['']"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Qué está pasando</h2>
          {content.narrative.map((paragraph) => (
            <p
              key={paragraph.slice(0, 24)}
              className="mb-3.5 max-w-[64ch] text-ink-soft last:mb-0"
            >
              {paragraph}
            </p>
          ))}
        </section>

        <section id="hitos" className="scroll-mt-[110px]">
          <div className={cx(sectionHead, "mt-4 mb-2 px-0.5")}>
            <h2 className={sectionTitle}>Hitos del mes</h2>
            <span className={sectionTag}>
              {content.milestones.length} señales
            </span>
          </div>
          <p className="mb-3 max-w-[62ch] text-[0.9rem] text-muted">
            «Lo hace la mayoría» se refiere al 75 % de los niños a esa edad, no
            al promedio. Y el rango es la ventana real: aparecer antes o después
            no es un examen.
          </p>

          {DOMAINS.map((domain) => {
            const items = content.milestones.filter(
              (milestone) => milestone.domain === domain.id,
            );
            if (items.length === 0) return null;
            return (
              <div className="mb-[18px]" key={domain.id}>
                <h3 className="mx-0.5 mt-4 mb-2 flex items-center gap-2 text-[0.78rem] font-bold tracking-[0.08em] text-ink-soft uppercase">
                  <span
                    className={cx(dot, domainDot[domain.id])}
                    aria-hidden="true"
                  />
                  {domain.label}
                  <span className="ml-auto rounded-full bg-cream-deep px-2 text-[0.68rem] font-normal tracking-normal text-muted normal-case">
                    {items.length}
                  </span>
                </h3>
                <ul className="flex list-none flex-col gap-2.5 p-0">
                  {items.map((milestone) => {
                    const cdcSource = milestone.cdcAt
                      ? cdcSourceFor(milestone.cdcAt)
                      : undefined;
                    return (
                      <li
                        className="rounded-tile border border-line bg-surface p-[13px_14px]"
                        key={milestone.id}
                      >
                        <div className="flex items-baseline justify-between gap-2.5">
                          <h4>{milestone.title}</h4>
                          <span
                            className="shrink-0 rounded-full border border-line bg-surface-soft px-1.5 py-px text-[0.7rem] text-muted tabular-nums"
                            title="Ventana en la que aparece en la mayoría de los bebés"
                          >
                            {milestone.typical[0]}–{milestone.typical[1]} m
                          </span>
                        </div>
                        <p className="mt-1 text-[0.88rem] text-ink-soft">
                          {milestone.detail}
                        </p>
                        <div className="mt-2 flex flex-wrap items-center gap-1.5">
                          <EvidenceBadge evidence={milestone.evidence} />
                          {cdcSource ? (
                            <a
                              className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-line bg-surface-soft px-[7px] py-0.5 text-[0.66rem] leading-normal text-muted no-underline hover:border-ghost-border hover:bg-terra-soft hover:text-terra"
                              href={getSource(cdcSource).url}
                              target="_blank"
                              rel="noreferrer noopener"
                            >
                              CDC {milestone.cdcAt} m ↗
                            </a>
                          ) : milestone.sources[0] ? (
                            <SourcePill id={milestone.sources[0]} />
                          ) : null}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </section>

        <section id="consultar" className={cx(cardWarn, "scroll-mt-[110px]")}>
          <div className={cx(sectionHead, "mb-2.5")}>
            <h2 className={sectionTitle}>Cuándo consultar</h2>
          </div>
          <p className="mb-3 max-w-[62ch] text-[0.9rem] text-muted">
            No es una lista de alarma: es una lista de conversación. Si aparece
            algo de aquí, llévalo al pediatra sin esperar al próximo control.
          </p>
          <ul className="my-1 mb-2.5 flex list-none flex-col gap-2 p-0">
            {content.redFlags.map((flag) => (
              <li
                key={flag}
                className="relative pl-[22px] text-[0.88rem] text-ink-soft before:absolute before:top-[0.12em] before:left-0 before:grid before:size-[15px] before:place-items-center before:rounded-full before:bg-warn-chip before:text-[0.62rem] before:font-extrabold before:text-warn-chip-text before:content-['!']"
              >
                {flag}
              </li>
            ))}
          </ul>
          <p className="text-[0.82rem] text-muted">
            Y si algún día pierde una habilidad que ya tenía, eso sí es motivo
            de consulta inmediata.
          </p>
        </section>

        <div id="sueno" className="grid scroll-mt-[110px] gap-3 md:grid-cols-2">
          <section className={card}>
            <h2>Sueño</h2>
            <p className="text-[0.9rem] text-ink-soft">{content.sleep}</p>
          </section>
          <section className={card}>
            <h2>Alimentación</h2>
            <p className="text-[0.9rem] text-ink-soft">{content.feeding}</p>
          </section>
        </div>

        <section id="jugar" className="scroll-mt-[110px]">
          <div className={cx(sectionHead, "mt-4 mb-2 px-0.5")}>
            <h2 className={sectionTitle}>Cómo jugar este mes</h2>
            <span className={sectionTag}>
              {content.activities.length} ideas
            </span>
          </div>
          <div className="flex flex-col gap-3">
            {content.activities.map((activity) => (
              <ActivityCard key={activity.id} activity={activity} />
            ))}
          </div>
        </section>

        <section id="juguetes" className="scroll-mt-[110px]">
          <div className={cx(sectionHead, "mt-4 mb-2 px-0.5")}>
            <h2 className={sectionTitle}>Qué vale la pena comprar</h2>
          </div>
          <p className="mb-3 max-w-[62ch] text-[0.9rem] text-muted">
            Menos es más. Estas son categorías, no marcas: lo importante es el
            tamaño, la limpieza y que sea una sola pieza.
          </p>
          <div className="flex flex-col gap-3">
            {content.toys.map((toy) => (
              <ToyCard key={toy.id} toy={toy} />
            ))}
          </div>
        </section>

        <section id="mitos" className="scroll-mt-[110px]">
          <div className={cx(sectionHead, "mt-4 mb-2 px-0.5")}>
            <h2 className={sectionTitle}>Mitos del mes</h2>
          </div>
          <div className="flex flex-col gap-3">
            {content.myths.map((myth) => (
              <MythCard key={myth.id} {...myth} />
            ))}
          </div>
        </section>

        <section id="fuentes" className="scroll-mt-[110px]">
          <h2>Fuentes de este mes</h2>
          <ul className="flex list-none flex-col gap-3.5 p-0">
            {content.sources.map((id) => {
              const source = getSource(id);
              return (
                <li
                  key={id}
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
                  <p className="mt-1 text-[0.8rem] text-muted">
                    {source.what}
                  </p>
                  <span className="text-[0.68rem] tracking-[0.05em] text-muted/80 uppercase">
                    Consultado el {source.accessed}
                  </span>
                </li>
              );
            })}
          </ul>
        </section>

        {content.nextUp ? (
          <section className={cardSoft}>
            <p className={cx(eyebrow, "mb-0.5")}>Lo que viene</p>
            <p className="mt-0.5 mb-3 font-serif text-[1.02rem] text-ink-soft">
              {content.nextUp}
            </p>
          </section>
        ) : null}

        <nav
          className="mt-[26px] mb-1.5 flex justify-between gap-2.5"
          aria-label="Navegación entre meses"
        >
          {prev ? (
            <a className={btnGhost} href={href.month(prev.month)}>
              ← Mes {prev.month}
            </a>
          ) : (
            <span />
          )}
          {next ? (
            <a className={btnGhost} href={href.month(next.month)}>
              Mes {next.month} →
            </a>
          ) : (
            <a className={btnGhost} href={href.months}>
              Ver todos
            </a>
          )}
        </nav>
      </div>
    </div>
  );
}
