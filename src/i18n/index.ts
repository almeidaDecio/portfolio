import type { Translation } from "./types";

import pt from "./pt.json";
import en from "./en.json";

const translations: Record<string, Translation> = { pt, en };

export function useTranslations(lang: string) {
  const t = translations[lang] || translations["pt"];

  return {
    t: (key: string, vars?: Record<string, string>): string => {
      const keys = key.split(".");
      let value: unknown = t;
      for (const k of keys) {
        if (value && typeof value === "object" && k in (value as Record<string, unknown>)) {
          value = (value as Record<string, unknown>)[k];
        } else {
          return key;
        }
      }
      if (typeof value !== "string") return key;
      if (vars) {
        return Object.entries(vars).reduce(
          (str, [k, v]) => str.replace(new RegExp(`\\{${k}\\}`, "g"), v),
          value
        );
      }
      return value;
    },
    lang,
    isEN: lang === "en",
  };
}

export type { Translation } from "./types";
