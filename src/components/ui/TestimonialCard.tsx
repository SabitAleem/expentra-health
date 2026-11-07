import type { Testimonial } from "@/types";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]">
      <Quote
        className="mb-4 h-8 w-8 text-blue/30"
        aria-hidden="true"
        strokeWidth={1.5}
      />
      <blockquote className="mb-6 flex-1 text-[0.95rem] leading-relaxed text-navy">
        “{testimonial.quote}”
      </blockquote>
      <footer>
        <p className="font-semibold text-navy">
          {testimonial.name}, {testimonial.role}
        </p>
        <p className="mt-0.5 text-sm text-text-secondary">
          {testimonial.practice}
        </p>
      </footer>
    </article>
  );
}
