export type MilestoneItem = {
  when: string;
  title: string;
  tentative: boolean;
};

export type DayMark = {
  titles: string[];
  tentative: boolean;
};

const MONTH_INDEX: Record<string, number> = { nov: 10, dic: 11 };

const SHORT_TITLE: Record<string, string> = {
  "Cierre de entregas": "Cierre",
  "Demo Day": "Demo",
};

export const PROGRAM_YEAR = 2026;

export const MONTHS = [
  { index: 10, name: "Noviembre" },
  { index: 11, name: "Diciembre" },
] as const;

export function shortTitle(title: string): string {
  return SHORT_TITLE[title] ?? title;
}

export function marksFor(items: MilestoneItem[]): Map<string, DayMark> {
  const marks = new Map<string, DayMark>();

  for (const item of items) {
    const match = /^(\d{1,2})\s+(nov|dic)$/i.exec(item.when.trim());
    if (!match) continue;

    const key = `${MONTH_INDEX[match[2].toLowerCase()]}-${Number(match[1])}`;
    const current = marks.get(key);
    if (current) {
      current.titles.push(shortTitle(item.title));
      current.tentative = current.tentative && item.tentative;
      continue;
    }

    marks.set(key, {
      titles: [shortTitle(item.title)],
      tentative: item.tentative,
    });
  }

  return marks;
}

export function monthWeeks(year: number, monthIndex: number): (number | null)[][] {
  const lead = (new Date(year, monthIndex, 1).getDay() + 6) % 7;
  const days = new Date(year, monthIndex + 1, 0).getDate();
  const cells: (number | null)[] = [
    ...Array.from({ length: lead }, () => null),
    ...Array.from({ length: days }, (_, index) => index + 1),
  ];

  while (cells.length % 7 !== 0) cells.push(null);

  return Array.from({ length: cells.length / 7 }, (_, week) =>
    cells.slice(week * 7, week * 7 + 7),
  );
}
