import { useMemo, useState } from "react";
import {
  allActivities,
  allToys,
  approaches,
  availableMonths,
  availableSpan,
} from "../content";
import type { Materials, Minutes, Place } from "../content/types";
import { DOMAINS, MATERIALS_LABEL, PLACE_LABEL } from "../content/types";
import { ActivityCard } from "../components/ActivityCard";
import { SourceRefs } from "../components/SourceRefs";
import { ToyCard } from "../components/ToyCard";
import { btn, card, cardBase, cardWarn, cx, eyebrow } from "../ui";

type Tab = "actividades" | "juguetes" | "enfoques";

const AREAS = [
  ...DOMAINS.map((domain) => ({ id: domain.id, label: domain.short })),
  { id: "sensorial", label: "Sensorial" },
] as const;

const MINUTES: { id: Minutes; label: string }[] = [
  { id: 2, label: "2 min" },
  { id: 5, label: "5 min" },
  { id: 15, label: "15 min" },
];

const MATERIALS: Materials[] = ["ninguno", "casa", "comprar"];
const PLACES: Place[] = ["suelo", "cuna", "baño", "carro", "parque"];

function FilterRow<T extends string | number>({
  label,
  options,
  value,
  onChange,
  wrap = false,
}: {
  label: string;
  options: { id: T; label: string; ariaLabel?: string }[];
  value: T | null;
  onChange: (next: T | null) => void;
  wrap?: boolean;
}) {
  return (
    <div>
      <span className="mb-1.5 block text-[0.66rem] font-bold tracking-[0.1em] text-muted uppercase">
        {label}
      </span>
      <div
        className={cx(
          "flex gap-1.5",
          wrap
            ? "flex-wrap"
            : "overflow-x-auto pb-0.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        )}
      >
        <button
          type="button"
          className={cx(
            "min-h-8 cursor-pointer rounded-full border px-2.5 py-1 text-[0.78rem] whitespace-nowrap",
            value === null
              ? "border-ink bg-ink text-white"
              : "border-line bg-surface text-muted",
          )}
          aria-pressed={value === null}
          onClick={() => onChange(null)}
        >
          Todos
        </button>
        {options.map((option) => (
          <button
            key={String(option.id)}
            type="button"
            className={cx(
              "min-h-8 cursor-pointer rounded-full border px-2.5 py-1 text-[0.78rem] whitespace-nowrap",
              value === option.id
                ? "border-ink bg-ink text-white"
                : "border-line bg-surface text-muted",
            )}
            aria-pressed={value === option.id}
            aria-label={option.ariaLabel}
            onClick={() => onChange(option.id)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export function PlayPage() {
  const [tab, setTab] = useState<Tab>("actividades");
  const [month, setMonth] = useState<number | null>(null);
  const [area, setArea] = useState<string | null>(null);
  const [minutes, setMinutes] = useState<Minutes | null>(null);
  const [materials, setMaterials] = useState<Materials | null>(null);
  const [place, setPlace] = useState<Place | null>(null);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const activities = useMemo(
    () =>
      allActivities.filter((activity) => {
        if (month !== null && activity.month !== month) return false;
        if (area !== null && activity.area !== area) return false;
        if (minutes !== null && activity.minutes !== minutes) return false;
        if (materials !== null && activity.materials !== materials)
          return false;
        if (place !== null && !activity.places.includes(place)) return false;
        return true;
      }),
    [month, area, minutes, materials, place],
  );

  const toys = useMemo(
    () => allToys.filter((toy) => month === null || toy.month === month),
    [month],
  );

  const activeFilters = [area, minutes, materials, place].filter(
    (value) => value !== null,
  ).length;

  function clearFilters() {
    setArea(null);
    setMinutes(null);
    setMaterials(null);
    setPlace(null);
  }

  return (
    <div className="space-y-3.5 pt-3.5">
      <header className="px-0.5 pt-2.5 pb-4">
        <p className={cx(eyebrow, "mb-1.5")}>Jugar y estimular</p>
        <h1>Ideas para hoy</h1>
        <p className="max-w-[60ch] text-ink-soft">
          Ideas concretas, con lo que ya tienes en casa. No hace falta comprar
          nada: la mitad de lo que estimula a Pablo son tus manos, tu cara y tu
          voz.
        </p>
      </header>

      <div
        className="flex gap-[3px] rounded-full bg-cream-deep p-[3px]"
        role="tablist"
        aria-label="Contenido"
      >
        {(
          [
            ["actividades", "Actividades"],
            ["juguetes", "Juguetes"],
            ["enfoques", "Enfoques"],
          ] as [Tab, string][]
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={tab === id}
            className={cx(
              "min-h-9 flex-1 cursor-pointer rounded-full border-0 text-[0.82rem] transition-colors",
              tab === id
                ? "bg-surface font-semibold text-ink shadow-sm"
                : "bg-transparent font-medium text-muted",
            )}
            onClick={() => setTab(id)}
          >
            {label}
          </button>
        ))}
      </div>

      {tab !== "enfoques" ? (
        <FilterRow
          label="Mes"
          options={availableMonths.map((value) => ({
            id: value,
            label: `${value}`,
            ariaLabel: `Mes ${value}`,
          }))}
          value={month}
          onChange={setMonth}
        />
      ) : null}

      {tab === "actividades" ? (
        <>
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              className={cx(
                "inline-flex min-h-9 items-center justify-center gap-1.5 rounded-full border px-3.5 text-[0.8rem] font-medium transition-transform active:scale-[0.985]",
                activeFilters > 0
                  ? "border-[#dbbeae] bg-terra-soft text-terra"
                  : "border-ghost-border bg-transparent text-terra hover:bg-terra-soft",
              )}
              aria-expanded={filtersOpen}
              onClick={() => setFiltersOpen((open) => !open)}
            >
              Filtros{activeFilters > 0 ? ` · ${activeFilters}` : ""}
            </button>
            <span className="text-[0.76rem] text-muted">
              {activities.length}{" "}
              {activities.length === 1 ? "actividad" : "actividades"}
            </span>
            {activeFilters > 0 ? (
              <button
                type="button"
                className="border-0 bg-transparent p-1 text-[0.82rem] text-terra underline"
                onClick={clearFilters}
              >
                Limpiar
              </button>
            ) : null}
          </div>

          {filtersOpen ? (
            <div className={cx(cardBase, "space-y-3 border-line bg-surface p-3.5")}>
              <FilterRow
                label="Área"
                options={AREAS.map((item) => ({
                  id: item.id,
                  label: item.label,
                }))}
                value={area}
                onChange={setArea}
                wrap
              />
              <FilterRow
                label="Tiempo"
                options={MINUTES}
                value={minutes}
                onChange={setMinutes}
                wrap
              />
              <FilterRow
                label="Materiales"
                options={MATERIALS.map((id) => ({
                  id,
                  label: MATERIALS_LABEL[id],
                }))}
                value={materials}
                onChange={setMaterials}
                wrap
              />
              <FilterRow
                label="Dónde"
                options={PLACES.map((id) => ({ id, label: PLACE_LABEL[id] }))}
                value={place}
                onChange={setPlace}
                wrap
              />
            </div>
          ) : null}

          {activities.length === 0 ? (
            <div className="rounded-card border border-dashed border-line-strong px-5 py-9 text-center text-[0.9rem] text-muted">
              <p>No hay actividades con esos filtros.</p>
              <button
                type="button"
                className={cx(btn, "mt-3")}
                onClick={clearFilters}
              >
                Quitar filtros
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {activities.map((activity) => (
                <ActivityCard
                  key={activity.id}
                  activity={activity}
                  monthLabel={activity.monthLabel}
                />
              ))}
            </div>
          )}

          <p className="text-[0.82rem] text-muted">
            Cada actividad dice por qué funciona. Si una no le gusta a Pablo, no
            insistas: cambia de idea y vuelve en dos semanas.
          </p>
        </>
      ) : null}

      {tab === "juguetes" ? (
        <>
          <div className={cardWarn}>
            <h2>Reglas de seguridad</h2>
            <ul className="mt-3 flex list-none flex-col gap-[7px] p-0">
              {[
                "Nada que quepa entero en un rollo de papel higiénico.",
                "Sin pilas de botón, imanes ni piezas que se desprendan.",
                "Sin andadores ni saltadores con ruedas.",
                "Sin pantallas antes de los 2 años.",
                "Revisa las costuras y los ojos de los peluches.",
              ].map((item) => (
                <li
                  key={item}
                  className="relative pl-[21px] text-[0.88rem] text-ink-soft before:absolute before:top-[0.52em] before:left-0.5 before:size-[9px] before:rounded-[3px] before:border before:border-[#c9ddcf] before:bg-sage-soft before:content-['']"
                >
                  {item}
                </li>
              ))}
            </ul>
            <SourceRefs ids={["cpsc-toys", "aap-walkers", "who-screen"]} />
          </div>

          <div className="flex flex-col gap-3">
            {toys.map((toy) => (
              <ToyCard key={toy.id} toy={toy} />
            ))}
          </div>
        </>
      ) : null}

      {tab === "enfoques" ? (
        <>
          <p className="max-w-[62ch] text-[0.9rem] text-muted">
            Metodologías y principios, no recetas. Sirven para decidir qué hacer
            cuando no sabes qué hacer.
          </p>
          <div className="flex flex-col gap-3">
            {approaches.map((approach) => (
              <article className={card} key={approach.id}>
                <p className="font-serif text-[0.8rem] text-terra italic">
                  {approach.tagline}
                </p>
                <h2 className="my-1 mb-2">{approach.name}</h2>
                <p className="text-[0.9rem] text-ink-soft">{approach.body}</p>
                <ul className="mt-3 flex list-none flex-col gap-[7px] p-0">
                  {approach.practice.map((item) => (
                    <li
                      key={item}
                      className="relative pl-[21px] text-[0.88rem] text-ink-soft before:absolute before:top-[0.52em] before:left-0.5 before:size-[9px] before:rounded-[3px] before:border before:border-[#c9ddcf] before:bg-sage-soft before:content-['']"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <SourceRefs ids={approach.sources} />
              </article>
            ))}
          </div>
        </>
      ) : null}

      {tab === "actividades" ? (
        <p className="text-[0.82rem] text-muted">
          Las {allActivities.length} actividades están escritas para los meses{" "}
          {availableSpan()}, con{" "}
          {allActivities.filter((item) => item.materials === "ninguno").length}{" "}
          que no necesitan nada.
        </p>
      ) : null}
    </div>
  );
}
