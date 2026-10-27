import { getSource } from "../content/sources";
import type { SourceId } from "../content/sources";

interface SourceRefsProps {
  ids: SourceId[];
  label?: string;
}

export function SourceRefs({ ids, label = "Fuentes" }: SourceRefsProps) {
  if (ids.length === 0) return null;
  const unique = Array.from(new Set(ids));

  return (
    <details className="group mt-3 border-t border-dashed border-line-strong pt-2.5">
      <summary className="flex min-h-8 cursor-pointer list-none items-center justify-between gap-2 text-[0.74rem] font-semibold uppercase tracking-[0.06em] text-muted [&::-webkit-details-marker]:hidden">
        {label}
        <span className="ml-auto mr-2 rounded-full bg-cream-deep px-1.5 text-[0.68rem]">
          {unique.length}
        </span>
        <span
          className="mr-1 size-[7px] rotate-45 border-b-[1.6px] border-r-[1.6px] border-current transition-transform group-open:rotate-[-135deg]"
          aria-hidden="true"
        />
      </summary>
      <ul className="flex list-none flex-col gap-2 p-0 pt-1.5">
        {unique.map((id) => {
          const source = getSource(id);
          return (
            <li
              key={id}
              className="flex flex-col text-[0.78rem] leading-[1.45] text-muted"
            >
              <a
                href={source.url}
                target="_blank"
                rel="noreferrer noopener"
                className="font-semibold"
              >
                {source.org}
              </a>
              <span>{source.title}</span>
            </li>
          );
        })}
      </ul>
    </details>
  );
}
