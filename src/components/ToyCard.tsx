import type { ToyPick } from "../content/types";
import { cardTight } from "../ui";

export function ToyCard({ toy }: { toy: ToyPick }) {
  return (
    <article className={cardTight}>
      <div className="flex items-center justify-between gap-2.5">
        <span className="text-[0.66rem] font-bold uppercase tracking-[0.1em] text-muted">
          {toy.category}
        </span>
        <span
          className="rounded-full bg-cream-deep px-2 py-0.5 text-[0.7rem] tracking-[0.08em] text-muted"
          title="Precio orientativo: € barato, €€ medio, €€€ caro"
        >
          {toy.price}
        </span>
      </div>
      <h3 className="mt-1 mb-1">{toy.name}</h3>
      <p className="text-[0.88rem] text-ink-soft">{toy.why}</p>
      {toy.safety ? (
        <p className="mt-2.5 rounded-tile bg-[#fdf3e7] p-2.5 text-[0.87rem] text-[#6b4c10]">
          <strong>Seguridad.</strong> {toy.safety}
        </p>
      ) : null}
      <span className="mt-2 inline-block text-[0.68rem] uppercase tracking-[0.04em] text-muted">
        Para {toy.months[0]}–{toy.months[1]} meses
      </span>
    </article>
  );
}
