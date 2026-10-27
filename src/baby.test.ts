import { describe, expect, it } from "vitest";
import { addMonths, ageInfo, formatAge } from "./baby";
import { parseHash } from "./router";

describe("edad de Pablo", () => {
  it("el día que nace tiene 0 meses y 0 días", () => {
    const age = ageInfo(new Date(2026, 6, 7, 9, 30));
    expect(age.months).toBe(0);
    expect(age.days).toBe(0);
  });

  it("el 25 de octubre de 2026 tiene 3 meses y 18 días", () => {
    const age = ageInfo(new Date(2026, 9, 25, 12));
    expect(age.months).toBe(3);
    expect(age.days).toBe(18);
    expect(age.daysToNextMonth).toBe(13);
  });

  it("el 7 de noviembre cumple 4 meses exactos", () => {
    const age = ageInfo(new Date(2026, 10, 7, 8));
    expect(age.months).toBe(4);
    expect(age.days).toBe(0);
    expect(age.daysToNextMonth).toBe(30);
  });

  it("formatea en singular y plural", () => {
    expect(formatAge(ageInfo(new Date(2026, 9, 25)))).toBe("3 meses y 18 días");
    expect(formatAge(ageInfo(new Date(2026, 7, 7)))).toBe("1 mes");
  });

  it("recorta el día cuando el mes destino es más corto", () => {
    expect(addMonths({ year: 2026, month: 0, day: 31 }, 1)).toEqual({
      year: 2026,
      month: 1,
      day: 28,
    });
  });
});

describe("router", () => {
  it("resuelve las rutas principales", () => {
    expect(parseHash("")).toEqual({ name: "today" });
    expect(parseHash("#/")).toEqual({ name: "today" });
    expect(parseHash("#/meses")).toEqual({ name: "months" });
    expect(parseHash("#/jugar")).toEqual({ name: "play" });
    expect(parseHash("#/fuentes")).toEqual({ name: "sources" });
    expect(parseHash("#/mes/4")).toEqual({
      name: "month",
      month: 4,
      anchor: undefined,
    });
  });

  it("lee el ancla de una actividad", () => {
    expect(parseHash("#/mes/4?a=a4-cucu")).toEqual({
      name: "month",
      month: 4,
      anchor: "a4-cucu",
    });
  });

  it("cae en meses si el número no es válido", () => {
    expect(parseHash("#/mes/99")).toEqual({ name: "months" });
    expect(parseHash("#/mes/abc")).toEqual({ name: "months" });
  });
});
