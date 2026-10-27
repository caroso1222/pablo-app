import type {
  Activity,
  Evidence,
  SourceId,
  Verdict,
} from "../content/types";
import {
  EVIDENCE_LABEL,
  MATERIALS_LABEL,
  PLACE_LABEL,
  domainLabel,
} from "../content/types";
import { SourceRefs } from "./SourceRefs";
import {
  card,
  chip,
  chipBase,
  cx,
  domainDot,
  dot,
  verdict as verdictBase,
} from "../ui";

const MATERIALS_TONE: Record<Activity["materials"], string> = {
  ninguno: "border-[#d5e5d9] bg-sage-soft text-sage",
  casa: "border-line bg-surface-soft text-muted",
  comprar: "border-[#efdcb8] bg-honey-soft text-honey",
};

const VERDICT_TONE: Record<Verdict, string> = {
  real: "bg-sage-soft text-sage",
  matizado: "bg-honey-soft text-honey",
  mito: "bg-rose-soft text-rose",
};

const VERDICT_LABEL: Record<Verdict, string> = {
  real: "Tiene base",
  matizado: "Matizado",
  mito: "Mito",
};

const MYTH_EDGE: Record<Verdict, string> = {
  real: "before:bg-[#b9d5c1]",
  matizado: "before:bg-[#e6cd9d]",
  mito: "before:bg-[#e0b4bb]",
};

const chevron =
  "mr-1 size-[7px] rotate-45 border-b-[1.6px] border-r-[1.6px] border-current transition-transform group-open:rotate-[-135deg]";

interface ActivityCardProps {
  activity: Activity;
  monthLabel?: string;
}

export function ActivityCard({ activity, monthLabel }: ActivityCardProps) {
  return (
    <article className={card} id={activity.id}>
      <div className="flex items-center gap-[7px]">
        <span
          className={cx(dot, domainDot[activity.area])}
          aria-hidden="true"
        />
        <span className="text-[0.7rem] font-semibold uppercase tracking-[0.04em] text-muted">
          {domainLabel(activity.area)} · {activity.minutes} min
          {monthLabel ? ` · ${monthLabel}` : ""}
        </span>
      </div>
      <h3 className="mt-1.5 mb-1.5">{activity.title}</h3>
      <p className="text-[0.92rem] text-ink-soft">{activity.summary}</p>

      <div className="mt-2.5 mb-0.5 flex flex-wrap gap-1.5">
        <span
          className={cx(chipBase, MATERIALS_TONE[activity.materials])}
        >
          {MATERIALS_LABEL[activity.materials]}
        </span>
        {activity.places.slice(0, 3).map((place) => (
          <span className={chip} key={place}>
            {PLACE_LABEL[place]}
          </span>
        ))}
      </div>

      <details className="group mt-3 border-t border-dashed border-line-strong pt-2.5">
        <summary className="flex min-h-8 cursor-pointer list-none items-center justify-between gap-2 text-[0.82rem] font-semibold text-terra [&::-webkit-details-marker]:hidden">
          Cómo se hace
          <span className={chevron} aria-hidden="true" />
        </summary>
        <div className="pt-1">
          <ol className="my-1.5 mb-3 flex list-decimal flex-col gap-[7px] pl-[1.1rem] text-[0.9rem] text-ink-soft marker:font-bold marker:text-terra">
            {activity.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
          {activity.materialsNote ? (
            <p className="text-[0.82rem] text-muted">
              <strong>Necesitas:</strong> {activity.materialsNote}
            </p>
          ) : null}
          <p className="mt-2.5 rounded-tile bg-cream p-2.5 text-[0.87rem] text-ink-soft">
            <strong className="text-ink">Por qué funciona.</strong>{" "}
            {activity.why}
          </p>
          {activity.safety ? (
            <p className="mt-2.5 rounded-tile bg-[#fdf3e7] p-2.5 text-[0.87rem] text-[#6b4c10]">
              <strong>Ojo.</strong> {activity.safety}
            </p>
          ) : null}
          <SourceRefs ids={activity.sources} />
        </div>
      </details>
    </article>
  );
}

export function ActivityPreview({
  activity,
  onOpen,
}: {
  activity: Activity;
  onOpen: () => void;
}) {
  return (
    <div>
      <div className="flex items-center gap-[7px]">
        <span
          className={cx(dot, domainDot[activity.area])}
          aria-hidden="true"
        />
        <span className="text-[0.7rem] font-semibold uppercase tracking-[0.04em] text-muted">
          {domainLabel(activity.area)} · {activity.minutes} min
        </span>
      </div>
      <h3 className="mt-1.5 mb-1">{activity.title}</h3>
      <p className="text-[0.92rem] text-ink-soft">{activity.summary}</p>
      <button
        type="button"
        className="mt-2.5 inline-flex min-h-[42px] items-center justify-center gap-1.5 rounded-full border border-ghost-border bg-transparent px-4 text-[0.88rem] font-medium text-terra transition-transform active:scale-[0.985] hover:bg-terra-soft"
        onClick={onOpen}
      >
        Ver cómo se hace
      </button>
    </div>
  );
}

export function MythCard({
  claim,
  verdict,
  explanation,
  evidence,
  sources,
}: {
  claim: string;
  verdict: Verdict;
  explanation: string;
  evidence: Evidence;
  sources: SourceId[];
}) {
  return (
    <article
      className={cx(
        card,
        "relative overflow-hidden before:absolute before:inset-y-0 before:left-0 before:w-[3px] before:content-['']",
        MYTH_EDGE[verdict],
      )}
    >
      <div className="mb-2 flex flex-wrap items-center gap-[7px]">
        <span className={cx(verdictBase, VERDICT_TONE[verdict])}>
          {VERDICT_LABEL[verdict]}
        </span>
        <span className="text-[0.68rem] tracking-[0.01em] text-muted">
          Base de la corrección: {EVIDENCE_LABEL[evidence].toLowerCase()}
        </span>
      </div>
      <h3 className="mb-1.5 font-serif text-[1.03rem] font-semibold">
        {claim}
      </h3>
      <p className="text-[0.9rem] text-ink-soft">{explanation}</p>
      <SourceRefs ids={sources} />
    </article>
  );
}
