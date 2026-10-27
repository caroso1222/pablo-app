import { useState } from "react";
import type { ToyPick } from "../content/types";
import { cardTight } from "../ui";

/** Respeta el `base` relativo de Vite (`./`), así sirve en raíz y en subcarpeta. */
function imageSrc(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
}

export function ToyCard({ toy }: { toy: ToyPick }) {
  const [imageFailed, setImageFailed] = useState(false);
  const showImage = Boolean(toy.image) && !imageFailed;

  return (
    <article className={cardTight}>
      {showImage ? (
        <div className="mb-3 aspect-[4/3] overflow-hidden rounded-tile border border-line bg-surface md:mx-auto md:max-w-[380px]">
          <img
            src={imageSrc(toy.image as string)}
            alt={toy.imageAlt ?? ""}
            loading="lazy"
            decoding="async"
            width={480}
            height={360}
            onError={() => setImageFailed(true)}
            className="size-full object-contain"
          />
        </div>
      ) : null}
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
