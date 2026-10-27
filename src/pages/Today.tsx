import { ageInfo, daySeed, formatAge, formatDate } from "../baby";
import { monthByNumber, months, TOTAL_MONTHS } from "../content";
import { ActivityPreview, MythCard } from "../components/ActivityCard";
import { href } from "../router";
import {
  btnGhost,
  card,
  cardAccent,
  cardSoft,
  cx,
  eyebrow,
  sectionTag,
} from "../ui";

export function TodayPage() {
  const age = ageInfo();
  const currentMonth = Math.min(TOTAL_MONTHS, age.months + 1);
  const inProgress = monthByNumber.get(currentMonth);
  const latest = months[months.length - 1];
  const content = inProgress ?? latest;
  const seed = daySeed();

  const activity = content.activities[seed % content.activities.length];
  const myth = content.myths[Math.floor(seed / 7) % content.myths.length];

  const progress = Math.round(
    (age.days / (age.days + age.daysToNextMonth)) * 100,
  );
  const nextMonthDate = formatDate(age.nextMonthDate);

  return (
    <div className="space-y-3.5 pt-3.5">
      <section className="px-0.5 pt-1.5">
        <p className={cx(eyebrow, "mb-1")}>
          Hoy, {formatDate(new Date())}
        </p>
        <h1 className="my-0.5 mb-1.5 text-[clamp(2.3rem,11vw,3rem)] leading-none">
          Pablo
        </h1>
        <p className="font-serif text-[1.16rem] text-terra">
          {formatAge(age)}
        </p>

        <div className="my-3.5 mb-2">
          <div className="h-2 overflow-hidden rounded-full bg-track">
            <span
              className="block h-full rounded-[inherit] bg-linear-to-r from-terra to-progress-end transition-[width] duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-1 flex justify-between text-[0.7rem] tracking-[0.04em] text-muted">
            <span>Mes {currentMonth}</span>
            <span>{progress}%</span>
          </div>
        </div>
        <p className="text-[0.82rem] text-muted">
          {age.days === 0
            ? `Hoy cumple ${currentMonth} meses.`
            : `Cumple ${currentMonth} meses el ${nextMonthDate} · faltan ${
                age.daysToNextMonth
              } ${age.daysToNextMonth === 1 ? "día" : "días"}`}
        </p>
      </section>

      {!inProgress ? (
        <p className="rounded-tile border border-line bg-surface px-3.5 py-3 text-[0.86rem] text-ink-soft">
          Vas por el mes {currentMonth} y esa ficha todavía no está escrita.
          Abajo te muestro la última disponible, el mes {latest.month}. La app
          crece mes a mes, igual que Pablo.
        </p>
      ) : null}

      <section className={card}>
        <div className="mb-2.5 flex items-baseline justify-between gap-3">
          <h2 className="m-0">En 30 segundos</h2>
          <span className={sectionTag}>{content.label}</span>
        </div>
        <ul className="mb-3.5 flex list-none flex-col gap-[9px] p-0">
          {content.tldr.map((item) => (
            <li
              key={item}
              className="relative pl-5 text-[0.95rem] text-ink-soft before:absolute before:top-[0.56em] before:left-0.5 before:size-[7px] before:rounded-full before:bg-terra/55 before:content-['']"
            >
              {item}
            </li>
          ))}
        </ul>
        <a className={btnGhost} href={href.month(content.month)}>
          Ver el mes completo
        </a>
      </section>

      <section className={cardAccent}>
        <div className="mb-2.5 flex items-baseline justify-between gap-3">
          <h2 className="m-0">Para hacer hoy</h2>
          <span className={sectionTag}>{activity.minutes} min</span>
        </div>
        <ActivityPreview
          activity={activity}
          onOpen={() => {
            window.location.hash = href.month(content.month, activity.id);
          }}
        />
      </section>

      <section>
        <div className="mt-4 mb-2 px-0.5">
          <h2 className="m-0">Un mito para tachar</h2>
        </div>
        <MythCard {...myth} />
      </section>

      <section className={cardSoft}>
        <p className={cx(eyebrow, "mb-0.5")}>Lo que viene</p>
        <p className="mt-0.5 mb-3 font-serif text-[1.02rem] text-ink-soft">
          {content.nextUp}
        </p>
        {monthByNumber.has(content.month + 1) ? (
          <a className={btnGhost} href={href.month(content.month + 1)}>
            Ver el mes {content.month + 1}
          </a>
        ) : (
          <p className="text-[0.82rem] text-muted">Todavía en preparación.</p>
        )}
      </section>

      <p className="mt-[22px] border-t border-line pt-3.5 text-[0.78rem] text-muted">
        Esta app reúne información de fuentes públicas y no sustituye al
        pediatra. Si algo te preocupa, consúltalo.{" "}
        <a href={href.sources}>Cómo leerla</a>.
      </p>
    </div>
  );
}
