import { ageInfo } from "../baby";
import {
  firstMonth,
  lastMonth,
  monthByNumber,
  TOTAL_MONTHS,
} from "../content";
import { href } from "../router";
import { cx, eyebrow } from "../ui";

function rangeFor(month: number): string {
  if (month === 0) return "Recién nacido";
  if (month === 1) return "0 a 1 mes";
  return `${month - 1} a ${month} meses`;
}

function MonthRow({ month }: { month: number }) {
  const content = monthByNumber.get(month);
  if (content) {
    return (
      <a
        className="flex items-center gap-[13px] rounded-tile border border-line bg-surface p-[13px_14px] text-ink no-underline shadow-card transition-transform hover:border-[#dcc9b6] active:scale-[0.995]"
        href={href.month(month)}
      >
        <span className="grid size-[38px] shrink-0 place-items-center rounded-xl bg-terra-soft font-serif text-base font-semibold text-terra tabular-nums">
          {month}
        </span>
        <span className="flex min-w-0 flex-col gap-px">
          <span className="flex items-baseline gap-2 text-[0.94rem] font-semibold">
            {content.label}
            <span className="text-[0.7rem] font-medium text-muted">
              {rangeFor(month)}
            </span>
          </span>
          <span className="overflow-hidden text-ellipsis whitespace-nowrap text-[0.82rem] text-muted">
            {content.tagline}
          </span>
          <span className="mt-0.5 text-[0.68rem] text-muted/85">
            {content.milestones.length} hitos · {content.activities.length}{" "}
            actividades
          </span>
        </span>
        <svg
          className="ml-auto size-[18px] shrink-0 text-terra"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          strokeLinecap="round"
          aria-hidden="true"
        >
          <path d="M9 6l6 6-6 6" />
        </svg>
      </a>
    );
  }

  return (
    <div
      className="flex items-center gap-[13px] rounded-tile border border-dashed border-line bg-surface-soft/50 p-[13px_14px] text-muted"
      aria-disabled="true"
    >
      <span className="grid size-[38px] shrink-0 place-items-center rounded-xl bg-cream-deep font-serif text-base font-semibold text-ink-soft tabular-nums">
        {month}
      </span>
      <span className="flex min-w-0 flex-col gap-px">
        <span className="flex items-baseline gap-2 text-[0.94rem] font-semibold">
          {month === 0 ? "Nacimiento" : `Mes ${month}`}
          <span className="text-[0.7rem] font-medium text-muted">
            {rangeFor(month)}
          </span>
        </span>
        <span className="text-[0.82rem] text-muted">En preparación</span>
      </span>
    </div>
  );
}

export function MonthsPage() {
  const age = ageInfo();
  const firstYear = Array.from({ length: 12 }, (_, index) => index);
  const secondYear = Array.from(
    { length: TOTAL_MONTHS - 11 },
    (_, index) => index + 12,
  );

  return (
    <div className="space-y-3.5 pt-3.5">
      <header className="px-0.5 pt-2.5 pb-4">
        <p className={cx(eyebrow, "mb-1.5")}>0 a 24 meses</p>
        <h1>Los 25 meses</h1>
        <p className="max-w-[60ch] text-ink-soft">
          Cada ficha cubre lo que suele pasar entre un cumpleaños mensual y el
          siguiente. Los hitos están anotados con el rango en el que aparecen de
          verdad, no con una fecha única.
        </p>
      </header>

      <div className="rounded-tile border border-line bg-surface px-3.5 py-3 text-[0.86rem] text-ink-soft">
        <strong className="text-ink">
          Vas por el mes {Math.min(24, age.months + 1)}…
        </strong>{" "}
        En realidad, la app calcula la edad exacta de Pablo desde su fecha de
        nacimiento. Las fichas escritas van del mes {firstMonth} al {lastMonth};
        el resto llega en las próximas entregas.
      </div>

      <section>
        <h2 className="mx-0.5 mt-1 mb-2 font-sans text-[0.76rem] font-bold tracking-[0.12em] text-muted uppercase">
          Primer año
        </h2>
        <div className="flex flex-col gap-[7px]">
          {firstYear.map((month) => (
            <MonthRow key={month} month={month} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="mx-0.5 mt-1 mb-2 font-sans text-[0.76rem] font-bold tracking-[0.12em] text-muted uppercase">
          Segundo año
        </h2>
        <div className="flex flex-col gap-[7px]">
          {secondYear.map((month) => (
            <MonthRow key={month} month={month} />
          ))}
        </div>
      </section>
    </div>
  );
}
