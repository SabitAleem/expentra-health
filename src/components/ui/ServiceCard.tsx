import type { ServiceItem } from "@/types";

interface ServiceCardProps {
  service: ServiceItem;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-border bg-white p-5 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)] sm:p-6">
      <div className="mb-4 h-1 w-12 rounded-full bg-blue transition-all duration-300 group-hover:w-16" />
      <span className="mb-3 inline-flex w-fit rounded-full bg-light-blue px-3 py-1 text-xs font-semibold text-blue">
        {service.category}
      </span>
      <h3 className="mb-2 text-lg font-bold text-navy">{service.title}</h3>
      <p className="text-sm leading-relaxed text-text-secondary sm:text-[0.95rem]">
        {service.description}
      </p>
    </article>
  );
}
