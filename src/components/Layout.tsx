import type { ReactNode } from "react";
import type { Route } from "../router";
import { href } from "../router";
import { cx } from "../ui";

const NAV = [
  {
    route: "today",
    label: "Hoy",
    href: href.today,
    icon: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6 17 7M7 17l-1.4 1.4" />
      </>
    ),
  },
  {
    route: "months",
    label: "Meses",
    href: href.months,
    icon: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="3" />
        <path d="M3 10h18M8 3v4M16 3v4" />
      </>
    ),
  },
  {
    route: "play",
    label: "Jugar",
    href: href.play,
    icon: (
      <path d="M12 3l2.2 5.8L20 11l-5.8 2.2L12 19l-2.2-5.8L4 11l5.8-2.2z" />
    ),
  },
  {
    route: "sources",
    label: "Fuentes",
    href: href.sources,
    icon: (
      <>
        <path d="M4 5a2 2 0 0 1 2-2h6v18H6a2 2 0 0 1-2-2z" />
        <path d="M20 5a2 2 0 0 0-2-2h-6v18h6a2 2 0 0 0 2-2z" />
      </>
    ),
  },
] as const;

function isActive(routeName: Route["name"], item: string): boolean {
  if (routeName === "month") return item === "months";
  return routeName === item;
}

export function Layout({
  route,
  children,
}: {
  route: Route;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-30 border-b border-line/70 bg-cream/85 pt-[env(safe-area-inset-top)] backdrop-blur-md backdrop-saturate-150">
        <div className="mx-auto flex h-[54px] w-full max-w-[720px] items-center justify-between gap-3 px-[18px] md:px-6">
          <a
            className="inline-flex items-center gap-[9px] text-ink no-underline"
            href={href.today}
          >
            <span className="grid size-8 place-items-center rounded-[11px] bg-terra-soft text-terra">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="size-[19px] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.6]"
                aria-hidden="true"
              >
                <path d="M12 21c4.5 0 7-2.6 7-6 0-4-3-6.5-3-9 0-1.2-.4-2.4-1-3-.6 2.5-2 3.6-3.4 5.2C10 10 9 11.6 9 13.6c0 2 .8 3.4 2 4.4-2.6.2-4-1.2-4.6-2.6-.3 2.8 1.6 5.6 5.6 5.6Z" />
              </svg>
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-serif text-[1.06rem] font-semibold">
                Pablo
              </span>
              <span className="text-[0.64rem] uppercase tracking-[0.14em] text-muted">
                mes a mes
              </span>
            </span>
          </a>
          <a
            className="rounded-full border border-transparent px-2.5 py-1.5 text-[0.8rem] text-muted no-underline hover:border-line-strong hover:text-ink-soft"
            href={href.sources}
          >
            Cómo leer
          </a>
        </div>
      </header>

      <main
        className="mx-auto w-full max-w-[720px] px-[18px] pb-[calc(102px+env(safe-area-inset-bottom))] md:px-6"
        id="contenido"
      >
        {children}
      </main>

      <nav
        className="fixed inset-x-0 bottom-0 z-40 mx-auto grid w-full max-w-[720px] grid-cols-4 border-t border-line bg-surface-soft/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md backdrop-saturate-150 md:rounded-t-[18px] md:border-x"
        aria-label="Secciones"
      >
        {NAV.map((item) => {
          const active = isActive(route.name, item.route);
          return (
            <a
              key={item.route}
              href={item.href}
              className={cx(
                "relative flex h-16 flex-col items-center justify-center gap-[3px] text-[0.66rem] tracking-[0.02em] no-underline transition-colors",
                active
                  ? "font-semibold text-terra before:absolute before:top-0 before:h-[3px] before:w-[26px] before:rounded-b-[4px] before:bg-terra before:content-['']"
                  : "text-muted",
              )}
              aria-current={active ? "page" : undefined}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.7}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-[22px]"
                aria-hidden="true"
              >
                {item.icon}
              </svg>
              <span>{item.label}</span>
            </a>
          );
        })}
      </nav>
    </div>
  );
}
