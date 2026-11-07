import { FeedbackForm } from "@/components/sections/FeedbackForm";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section
      id="reviews"
      className="bg-light-blue py-14 sm:py-16 lg:py-20"
      aria-labelledby="reviews-heading"
    >
      <div className="container-site">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="mb-3 text-xs font-bold tracking-[0.14em] text-blue uppercase">
            Client feedback
          </p>
          <h2
            id="reviews-heading"
            className="font-bold tracking-tight text-balance text-[clamp(1.5rem,4vw,2.25rem)] leading-tight text-navy"
          >
            What our clients say
          </h2>
          <p className="mt-3 text-[clamp(0.95rem,2vw,1.05rem)] leading-relaxed text-text-secondary">
            Feedback from the practices we support.
          </p>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:mb-14 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        <FeedbackForm />
      </div>
    </section>
  );
}
