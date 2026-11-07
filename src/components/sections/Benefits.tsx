import { benefits } from "@/data/content";
import { Check } from "lucide-react";

export function Benefits() {
  return (
    <section
      className="border-b border-border bg-white"
      aria-label="Key benefits"
    >
      <div className="container-site py-6 sm:py-7">
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {benefits.map((benefit) => (
            <li key={benefit.id} className="flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-light-blue text-blue">
                <Check className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
              </span>
              <span className="text-sm font-semibold text-navy sm:text-[0.95rem]">
                {benefit.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
