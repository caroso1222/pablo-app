import { EVIDENCE_LABEL, type Evidence } from "../content/types";
import { badge, cx } from "../ui";

const TONE: Record<Evidence, string> = {
  consenso: "border-[#d3e4d8] bg-sage-soft text-sage",
  moderada: "border-[#eedcb9] bg-honey-soft text-honey",
  popular: "border-dashed border-line-strong bg-transparent text-muted",
};

export function EvidenceBadge({ evidence }: { evidence: Evidence }) {
  return (
    <span
      className={cx(badge, TONE[evidence])}
      title={EVIDENCE_LABEL[evidence]}
    >
      <span className="size-[5px] rounded-full bg-current" aria-hidden="true" />
      {EVIDENCE_LABEL[evidence]}
    </span>
  );
}
