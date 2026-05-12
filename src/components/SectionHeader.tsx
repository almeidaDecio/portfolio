import { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <header
      className={
        "flex flex-col gap-4 " +
        (align === "center" ? "items-center text-center" : "items-start")
      }
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
          <span className="h-1 w-1 rounded-full bg-foreground" />
          {eyebrow}
        </span>
      )}
      <h2 className="text-pretty text-3xl font-semibold tracking-tight md:text-4xl">
        {title}
      </h2>
      {description && (
        <p
          className={
            "max-w-4xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg " +
            (align === "center" ? "mx-auto" : "")
          }
        >
          {description}
        </p>
      )}
    </header>
  );
}
