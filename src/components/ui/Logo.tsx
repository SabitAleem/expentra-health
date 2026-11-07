import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
}

export function Logo({ className, variant = "dark" }: LogoProps) {
  const textColor = variant === "light" ? "text-white" : "text-navy";
  const crossBg = variant === "light" ? "bg-white" : "bg-blue";
  const crossFg = variant === "light" ? "bg-blue" : "bg-white";

  return (
    <a
      href="#home"
      className={cn("inline-flex items-center gap-2.5", className)}
      aria-label="Expentra Health home"
    >
      <span
        className={cn(
          "relative flex h-9 w-9 shrink-0 items-center justify-center rounded-lg",
          crossBg,
        )}
        aria-hidden="true"
      >
        <span className={cn("absolute h-5 w-1.5 rounded-sm", crossFg)} />
        <span className={cn("absolute h-1.5 w-5 rounded-sm", crossFg)} />
      </span>
      <span className={cn("text-base font-bold tracking-tight sm:text-lg", textColor)}>
        Expentra Health
      </span>
    </a>
  );
}
