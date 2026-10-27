export type Domain =
  | "motor-grueso"
  | "motor-fino"
  | "lenguaje"
  | "cognitivo"
  | "socioemocional";

export type Evidence = "consenso" | "moderada" | "popular";

export type Materials = "ninguno" | "casa" | "comprar";

export type Place =
  | "suelo"
  | "cuna"
  | "baño"
  | "carro"
  | "parque"
  | "cualquiera";

export type Minutes = 2 | 5 | 15;

export type Verdict = "real" | "matizado" | "mito";

import type { SourceId } from "./sources";

export type { SourceId } from "./sources";

export interface Milestone {
  id: string;
  domain: Domain;
  title: string;
  detail: string;
  /** Ventana real en meses cumplidos: [desde, hasta]. */
  typical: [number, number];
  /** Checkpoint oficial del CDC donde aparece, si existe. */
  cdcAt?: number;
  evidence: Evidence;
  sources: SourceId[];
}

export interface Myth {
  id: string;
  claim: string;
  verdict: Verdict;
  explanation: string;
  evidence: Evidence;
  sources: SourceId[];
}

export interface Activity {
  id: string;
  title: string;
  summary: string;
  minutes: Minutes;
  area: Domain | "sensorial";
  materials: Materials;
  materialsNote?: string;
  places: Place[];
  steps: string[];
  why: string;
  safety?: string;
  sources: SourceId[];
}

export interface ToyPick {
  id: string;
  name: string;
  category: string;
  why: string;
  months: [number, number];
  price: "€" | "€€" | "€€€";
  safety?: string;
  /** Foto de referencia, relativa a `public/`. Opcional. */
  image?: string;
  /** Texto alternativo. Describe la categoría, nunca la marca. */
  imageAlt?: string;
}

export interface Approach {
  id: string;
  name: string;
  tagline: string;
  body: string;
  practice: string[];
  sources: SourceId[];
}

export interface MonthContent {
  /** Mes cumplido: 3 = "de 2 a 3 meses". */
  month: number;
  label: string;
  ageRange: string;
  tagline: string;
  /** Resumen de 30 segundos. */
  tldr: string[];
  narrative: string[];
  milestones: Milestone[];
  redFlags: string[];
  myths: Myth[];
  sleep: string;
  feeding: string;
  activities: Activity[];
  toys: ToyPick[];
  sources: SourceId[];
  nextUp: string;
}

export const DOMAINS: { id: Domain; label: string; short: string }[] = [
  { id: "motor-grueso", label: "Movimiento grande", short: "Motor grueso" },
  { id: "motor-fino", label: "Manos y dedos", short: "Motor fino" },
  { id: "lenguaje", label: "Lenguaje y comunicación", short: "Lenguaje" },
  { id: "cognitivo", label: "Aprender y pensar", short: "Cognitivo" },
  { id: "socioemocional", label: "Vínculo y emoción", short: "Socioemocional" },
];

export function domainLabel(id: Domain | "sensorial"): string {
  if (id === "sensorial") return "Sensorial";
  return DOMAINS.find((domain) => domain.id === id)?.short ?? id;
}

export const EVIDENCE_LABEL: Record<Evidence, string> = {
  consenso: "Consenso clínico",
  moderada: "Evidencia moderada",
  popular: "Popular, poco respaldo",
};

export const VERDICT_LABEL: Record<Verdict, string> = {
  real: "Tiene base",
  matizado: "Matizado",
  mito: "Mito",
};

export const MATERIALS_LABEL: Record<Materials, string> = {
  ninguno: "Sin nada",
  casa: "Cosas de casa",
  comprar: "Hay que comprar",
};

export const PLACE_LABEL: Record<Place, string> = {
  suelo: "En el suelo",
  cuna: "En la cuna",
  baño: "En el baño",
  carro: "En el carro",
  parque: "En la calle",
  cualquiera: "Donde sea",
};
