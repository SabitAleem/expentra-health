import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "dark",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-3 text-xs font-bold tracking-[0.14em] uppercase",
            tone === "dark" ? "text-blue" : "text-white/80",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "font-bold tracking-tight text-balance",
          "text-[clamp(1.5rem,4vw,2.25rem)] leading-tight",
          tone === "dark" ? "text-navy" : "text-white",
        )}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            "mt-3 text-[clamp(0.95rem,2vw,1.05rem)] leading-relaxed",
            tone === "dark" ? "text-text-secondary" : "text-white/85",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
