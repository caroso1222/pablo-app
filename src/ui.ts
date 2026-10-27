export function cx(
  ...parts: Array<string | false | null | undefined>
): string {
  return parts.filter(Boolean).join(" ");
}

/**
 * Primitivas compartidas.
 *
 * Regla de oro: una primitiva nunca incluye una utilidad que una variante
 * vaya a querer sobrescribir (color, fondo, padding). Tailwind resuelve por
 * orden del CSS generado, no por orden de las clases, así que `cx("p-4",
 * "p-2")` no garantiza `p-2`. Por eso `cardBase` no lleva padding ni fondo y
 * cada variante los declara completos.
 */
const cardBase = "rounded-card border shadow-card";

export const card = cx(cardBase, "border-line bg-surface p-[18px]");

export const cardTight = cx(cardBase, "border-line bg-surface p-[15px_16px]");

export const cardSoft = cx(
  cardBase,
  "border-line bg-linear-to-b from-surface-soft to-cream-soft p-[18px]",
);

export const cardAccent = cx(
  cardBase,
  "border-accent-border bg-linear-to-b from-accent-from to-accent-to p-[18px]",
);

export const cardWarn = cx(cardBase, "border-warn-border bg-warn-bg p-[18px]");

export { cardBase };

export const btn =
  "inline-flex min-h-[42px] items-center justify-center gap-1.5 rounded-full border border-terra bg-terra px-4 text-[0.88rem] font-semibold text-white no-underline transition-transform active:scale-[0.985]";

export const btnGhost =
  "inline-flex min-h-[42px] items-center justify-center gap-1.5 rounded-full border border-ghost-border bg-transparent px-4 text-[0.88rem] font-medium text-terra no-underline transition-transform active:scale-[0.985] hover:bg-terra-soft";

export const chipBase =
  "inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border px-2.5 py-1 text-[0.72rem] leading-normal";

export const chip = cx(chipBase, "border-line bg-surface-soft text-muted");

export const badgeBase =
  "inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border px-2 py-0.5 text-[0.66rem] font-semibold uppercase tracking-[0.03em]";

export const badge = badgeBase;

export const verdict =
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-[0.66rem] font-bold uppercase tracking-[0.04em]";

export const eyebrow =
  "text-[0.68rem] font-semibold uppercase tracking-[0.13em] text-muted";

export const sectionTag =
  "shrink-0 rounded-full bg-cream-deep px-2.5 py-1 text-[0.7rem] uppercase tracking-[0.06em] text-muted";

export const dot = "size-[9px] shrink-0 rounded-full";

export const domainDot: Record<string, string> = {
  "motor-grueso": "bg-terra",
  "motor-fino": "bg-fino",
  lenguaje: "bg-sky",
  cognitivo: "bg-sage",
  socioemocional: "bg-rose",
  sensorial: "bg-sensorial",
};
