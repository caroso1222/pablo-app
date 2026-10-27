import { useEffect, useState } from "react";

export type Route =
  | { name: "today" }
  | { name: "months" }
  | { name: "month"; month: number; anchor?: string }
  | { name: "play" }
  | { name: "sources" };

export function parseHash(hash: string): Route {
  const clean = hash.replace(/^#\/?/, "").replace(/\/+$/, "");
  if (!clean) return { name: "today" };

  const [path, query] = clean.split("?");
  const params = new URLSearchParams(query ?? "");
  const [head, tail] = path.split("/");

  if (head === "meses") return { name: "months" };
  if (head === "jugar") return { name: "play" };
  if (head === "fuentes") return { name: "sources" };
  if (head === "mes") {
    const month = Number(tail);
    if (Number.isInteger(month) && month >= 0 && month <= 24) {
      return { name: "month", month, anchor: params.get("a") ?? undefined };
    }
    return { name: "months" };
  }
  return { name: "today" };
}

export const href = {
  today: "#/",
  months: "#/meses",
  month: (month: number, anchor?: string) =>
    `#/mes/${month}${anchor ? `?a=${anchor}` : ""}`,
  play: "#/jugar",
  sources: "#/fuentes",
};

export function useRoute(): Route {
  const [hash, setHash] = useState(() => window.location.hash);

  useEffect(() => {
    const onChange = () => {
      setHash(window.location.hash);
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    };
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  return parseHash(hash);
}
