import type { FeatureItem } from "@/types";
import {
  CheckCircle2,
  Eye,
  RefreshCw,
  Users,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<FeatureItem["icon"], LucideIcon> = {
  accuracy: CheckCircle2,
  transparent: Eye,
  dedicated: Users,
  flexible: RefreshCw,
};

interface FeatureCardProps {
  feature: FeatureItem;
}

export function FeatureCard({ feature }: FeatureCardProps) {
  const Icon = iconMap[feature.icon];

  return (
    <article className="rounded-2xl border border-border bg-white p-5 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card-hover)] sm:p-6">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-light-blue text-blue">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <h3 className="mb-2 text-base font-bold text-navy sm:text-lg">
        {feature.title}
      </h3>
      <p className="text-sm leading-relaxed text-text-secondary">
        {feature.description}
      </p>
    </article>
  );
}
