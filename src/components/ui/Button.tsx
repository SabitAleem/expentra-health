import { cn } from "@/lib/utils";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "white";
type Size = "sm" | "md" | "lg";

interface SharedProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
}

type ButtonAsButton = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<
  Variant,
  { className: string; fg: string; bg: string; hoverBg?: string }
> = {
  primary: {
    className: "shadow-sm hover:shadow-md border border-transparent hover:brightness-95",
    fg: "#ffffff",
    bg: "#2161D9",
  },
  secondary: {
    className: "shadow-sm border border-white/20 hover:brightness-[0.98]",
    fg: "#102F63",
    bg: "#ffffff",
  },
  outline: {
    className: "border border-white/70 hover:bg-white/10",
    fg: "#ffffff",
    bg: "transparent",
  },
  ghost: {
    className: "border border-transparent hover:bg-[#F2F7FD]",
    fg: "#102F63",
    bg: "transparent",
  },
  white: {
    className: "shadow-sm border border-transparent hover:bg-[#F2F7FD]",
    fg: "#2161D9",
    bg: "#ffffff",
  },
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm sm:text-base",
  lg: "px-6 py-3 text-base",
};

export function Button(props: ButtonProps) {
  const {
    children,
    variant = "primary",
    size = "md",
    className,
    ...rest
  } = props;

  const styles = variantStyles[variant];

  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2161D9]",
    "disabled:opacity-60 disabled:pointer-events-none",
    "min-h-11 touch-manipulation",
    styles.className,
    sizeClasses[size],
    className,
  );

  const cssVars = {
    "--btn-fg": styles.fg,
    "--btn-bg": styles.bg,
    color: styles.fg,
    backgroundColor: styles.bg,
  } as React.CSSProperties;

  if ("href" in props && props.href) {
    const { href, style, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a
        href={href}
        data-ui="button"
        className={classes}
        style={{ ...cssVars, ...style }}
        {...anchorRest}
      >
        {children}
      </a>
    );
  }

  const {
    style,
    type = "button",
    ...buttonRest
  } = rest as ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button
      type={type}
      data-ui="button"
      className={classes}
      style={{ ...cssVars, ...style }}
      {...buttonRest}
    >
      {children}
    </button>
  );
}
