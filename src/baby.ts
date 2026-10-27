const BIRTH = { year: 2026, month: 6, day: 7 }; // 7 de julio de 2026 (mes 0-indexado)

const MS_PER_DAY = 86_400_000;

export interface Age {
  months: number;
  days: number;
  totalDays: number;
  /** Fecha (día) del próximo cumpleaños mensual. */
  nextMonthDate: Date;
  daysToNextMonth: number;
  /** Día del mes en que nació. */
  birthDay: number;
}

function dayNumber(year: number, month: number, day: number): number {
  return Math.floor(Date.UTC(year, month, day) / MS_PER_DAY);
}

function daysInMonth(year: number, month: number): number {
  return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
}

/** Suma meses respetando el día, con recorte si el mes destino es más corto. */
export function addMonths(
  date: { year: number; month: number; day: number },
  count: number,
): { year: number; month: number; day: number } {
  const total = date.year * 12 + date.month + count;
  const year = Math.floor(total / 12);
  const month = ((total % 12) + 12) % 12;
  const day = Math.min(date.day, daysInMonth(year, month));
  return { year, month, day };
}

export function ageInfo(now: Date = new Date()): Age {
  const today = dayNumber(now.getFullYear(), now.getMonth(), now.getDate());
  const birth = dayNumber(BIRTH.year, BIRTH.month, BIRTH.day);

  let months =
    (now.getFullYear() - BIRTH.year) * 12 + (now.getMonth() - BIRTH.month);
  if (now.getDate() < BIRTH.day) months -= 1;

  const anchor = addMonths(BIRTH, months);
  const anchorDay = dayNumber(anchor.year, anchor.month, anchor.day);
  const next = addMonths(BIRTH, months + 1);
  const nextDay = dayNumber(next.year, next.month, next.day);

  return {
    months,
    days: today - anchorDay,
    totalDays: today - birth,
    nextMonthDate: new Date(next.year, next.month, next.day),
    daysToNextMonth: nextDay - today,
    birthDay: BIRTH.day,
  };
}

export function formatAge(age: Age): string {
  const monthPart =
    age.months === 0
      ? "recién nacido"
      : age.months === 1
        ? "1 mes"
        : `${age.months} meses`;
  if (age.months === 0) return monthPart;
  if (age.days === 0) return monthPart;
  const dayPart = age.days === 1 ? "1 día" : `${age.days} días`;
  return `${monthPart} y ${dayPart}`;
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("es-ES", {
    day: "numeric",
    month: "long",
  }).format(date);
}

export function formatLongDate(date: Date): string {
  return new Intl.DateTimeFormat("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

/** Día estable del año, para rotar contenido sin aleatoriedad. */
export function daySeed(now: Date = new Date()): number {
  return Math.floor(
    Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()) / MS_PER_DAY,
  );
}
