import type { Activity, Approach, MonthContent, ToyPick } from "./types";
import { month03 } from "./month-03";
import { month04 } from "./month-04";
import { month05 } from "./month-05";
import { month06 } from "./month-06";
import { month07 } from "./month-07";
import { month08 } from "./month-08";
import { month09 } from "./month-09";
import { month10 } from "./month-10";
import { month11 } from "./month-11";
import { month12 } from "./month-12";
import { approaches } from "./approaches";

export const months: MonthContent[] = [
  month03,
  month04,
  month05,
  month06,
  month07,
  month08,
  month09,
  month10,
  month11,
  month12,
];

export const monthByNumber = new Map<number, MonthContent>(
  months.map((month) => [month.month, month]),
);

export const availableMonths = months.map((month) => month.month);

export const TOTAL_MONTHS = 24;

export const firstMonth = Math.min(...availableMonths);
export const lastMonth = Math.max(...availableMonths);

/** "3 a 12", para textos que resumen qué fichas hay escritas. */
export function availableSpan(): string {
  return `${firstMonth} a ${lastMonth}`;
}

export interface ActivityWithMonth extends Activity {
  month: number;
  monthLabel: string;
}

export const allActivities: ActivityWithMonth[] = months.flatMap((month) =>
  month.activities.map((activity) => ({
    ...activity,
    month: month.month,
    monthLabel: month.label,
  })),
);

export interface ToyWithMonth extends ToyPick {
  month: number;
  monthLabel: string;
}

export const allToys: ToyWithMonth[] = months.flatMap((month) =>
  month.toys.map((toy) => ({
    ...toy,
    month: month.month,
    monthLabel: month.label,
  })),
);

export { approaches };
export type { Approach, MonthContent };
