import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { sources } from "../content/sources";
import { months } from "../content";
import { approaches } from "../content/approaches";
import { DOMAINS, type Domain } from "../content/types";

const sourceIds = new Set(sources.map((source) => source.id));
const monthNumbers = months.map((month) => month.month);
const activityIds = new Set<string>();
const milestoneIds = new Set<string>();

describe("registro de fuentes", () => {
  it("no tiene ids duplicados", () => {
    expect(sourceIds.size).toBe(sources.length);
  });

  it("todas las fuentes son https y tienen fecha de consulta", () => {
    for (const source of sources) {
      expect(source.url.startsWith("https://"), source.id).toBe(true);
      expect(source.accessed, source.id).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(source.what.length, source.id).toBeGreaterThan(10);
    }
  });
});

describe.each(months)("mes $month", (month) => {
  it("tiene identificadores coherentes", () => {
    expect(month.label).toBe(`Mes ${month.month}`);
    expect(month.ageRange).toBe(`${month.month - 1} a ${month.month} meses`);
  });

  it("trae resumen, narrativa y fuentes", () => {
    expect(month.tldr.length).toBeGreaterThanOrEqual(3);
    expect(month.narrative.length).toBeGreaterThanOrEqual(2);
    expect(month.sources.length).toBeGreaterThanOrEqual(8);
    for (const id of month.sources) {
      expect(sourceIds.has(id), `${month.label}: fuente ${id}`).toBe(true);
    }
  });

  it("cubre las cinco áreas del desarrollo", () => {
    const present = new Set<Domain>(month.milestones.map((item) => item.domain));
    for (const domain of DOMAINS) {
      expect(present.has(domain.id), `${month.label}: ${domain.id}`).toBe(true);
    }
  });

  it("tiene hitos bien formados y con fuente", () => {
    expect(month.milestones.length).toBeGreaterThanOrEqual(8);
    for (const milestone of month.milestones) {
      expect(milestoneIds.has(milestone.id), `id ${milestone.id}`).toBe(false);
      milestoneIds.add(milestone.id);
      expect(milestone.title.length).toBeGreaterThan(5);
      expect(milestone.detail.length).toBeGreaterThan(40);
      expect(milestone.typical[0]).toBeLessThan(milestone.typical[1]);
      expect(milestone.typical[0]).toBeGreaterThanOrEqual(0);
      expect(milestone.typical[1]).toBeLessThanOrEqual(24);
      expect(milestone.sources.length).toBeGreaterThan(0);
      for (const id of milestone.sources) {
        expect(sourceIds.has(id), `${milestone.id}: ${id}`).toBe(true);
      }
      if (milestone.cdcAt !== undefined) {
        expect([2, 4, 6, 9, 12, 15, 18, 24, 30, 36]).toContain(
          milestone.cdcAt,
        );
      }
    }
  });

  it("tiene banderas rojas suficientes", () => {
    expect(month.redFlags.length).toBeGreaterThanOrEqual(6);
  });

  it("cuestiona los mitos con fuentes", () => {
    expect(month.myths.length).toBeGreaterThanOrEqual(3);
    for (const myth of month.myths) {
      expect(myth.explanation.length).toBeGreaterThan(150);
      expect(myth.sources.length).toBeGreaterThan(0);
      for (const id of myth.sources) {
        expect(sourceIds.has(id), `${myth.id}: ${id}`).toBe(true);
      }
    }
  });

  it("incluye sueño y alimentación", () => {
    expect(month.sleep.length).toBeGreaterThan(80);
    expect(month.feeding.length).toBeGreaterThan(60);
  });

  it("tiene actividades jugables y completas", () => {
    expect(month.activities.length).toBeGreaterThanOrEqual(6);
    for (const activity of month.activities) {
      expect(activityIds.has(activity.id), `id ${activity.id}`).toBe(false);
      activityIds.add(activity.id);
      expect(activity.steps.length).toBeGreaterThanOrEqual(2);
      expect(activity.summary.length).toBeGreaterThan(20);
      expect([2, 5, 15]).toContain(activity.minutes);
      expect(activity.places.length).toBeGreaterThan(0);
      expect(activity.sources.length).toBeGreaterThan(0);
      for (const id of activity.sources) {
        expect(sourceIds.has(id), `${activity.id}: ${id}`).toBe(true);
      }
    }
  });

  it("tiene juguetes con criterio de seguridad", () => {
    expect(month.toys.length).toBeGreaterThanOrEqual(4);
    for (const toy of month.toys) {
      expect(toy.months[0]).toBeLessThan(toy.months[1]);
    }
  });

  it("declara en la ficha todas las fuentes que cita", () => {
    const cited = new Set<string>();
    for (const milestone of month.milestones) {
      milestone.sources.forEach((id) => cited.add(id));
    }
    for (const myth of month.myths) {
      myth.sources.forEach((id) => cited.add(id));
    }
    for (const activity of month.activities) {
      activity.sources.forEach((id) => cited.add(id));
    }
    expect([...cited].filter((id) => !month.sources.includes(id as never))).toEqual(
      [],
    );
  });
});

describe("catálogo sin repetidos", () => {
  const normalize = (value: string) => value.trim().toLowerCase();

  it("no repite el título de un hito en dos meses", () => {
    const seen = new Map<string, string>();
    for (const month of months) {
      for (const milestone of month.milestones) {
        const key = normalize(milestone.title);
        const previous = seen.get(key);
        expect(previous, `${milestone.title} ya está en ${previous}`).toBe(
          undefined,
        );
        seen.set(key, month.label);
      }
    }
  });

  it("no repite el título de una actividad en dos meses", () => {
    const seen = new Map<string, string>();
    for (const month of months) {
      for (const activity of month.activities) {
        const key = normalize(activity.title);
        const previous = seen.get(key);
        expect(previous, `${activity.title} ya está en ${previous}`).toBe(
          undefined,
        );
        seen.set(key, month.label);
      }
    }
  });

  it("no repite la afirmación de un mito en dos meses", () => {
    const seen = new Map<string, string>();
    for (const month of months) {
      for (const myth of month.myths) {
        const key = normalize(myth.claim);
        const previous = seen.get(key);
        expect(previous, `${myth.claim} ya está en ${previous}`).toBe(undefined);
        seen.set(key, month.label);
      }
    }
  });
});

describe("catálogo global", () => {
  it("los meses están ordenados y sin huecos", () => {
    const sorted = [...monthNumbers].sort((a, b) => a - b);
    expect(monthNumbers).toEqual(sorted);
    for (let index = 1; index < sorted.length; index += 1) {
      expect(sorted[index] - sorted[index - 1]).toBe(1);
    }
  });

  it("los enfoques citan fuentes existentes", () => {
    expect(approaches.length).toBeGreaterThanOrEqual(5);
    for (const approach of approaches) {
      expect(approach.practice.length).toBeGreaterThanOrEqual(3);
      for (const id of approach.sources) {
        expect(sourceIds.has(id), `${approach.id}: ${id}`).toBe(true);
      }
    }
  });
});

describe("fotos de juguetes", () => {
  const withImage = months.flatMap((month) =>
    month.toys
      .filter((toy) => toy.image)
      .map((toy) => ({ month: month.label, toy })),
  );

  it("las fotos declaradas existen en public/", () => {
    for (const { month, toy } of withImage) {
      const relative = toy.image!.replace(/^\/+/, "");
      const file = resolve(process.cwd(), "public", relative);
      expect(existsSync(file), `${month} · ${toy.id}: falta ${relative}`).toBe(
        true,
      );
    }
  });

  it("cada foto trae texto alternativo descriptivo", () => {
    for (const { month, toy } of withImage) {
      expect(toy.imageAlt?.trim().length ?? 0, `${month} · ${toy.id}`)
        .toBeGreaterThan(15);
    }
  });

  it("las rutas son relativas, sin barra inicial", () => {
    for (const { month, toy } of withImage) {
      expect(toy.image!.startsWith("/"), `${month} · ${toy.id}`).toBe(false);
    }
  });
});
