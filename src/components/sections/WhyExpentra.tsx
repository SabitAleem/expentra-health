import { Button } from "@/components/ui/Button";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { features } from "@/data/content";

export function WhyExpentra() {
  return (
    <section
      id="why"
      className="bg-light-blue py-14 sm:py-16 lg:py-20"
      aria-labelledby="why-heading"
    >
      <div className="container-site grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <p className="mb-3 text-xs font-bold tracking-[0.14em] text-blue uppercase">
            Why Expentra Health
          </p>
          <h2
            id="why-heading"
            className="mb-5 font-bold tracking-tight text-balance text-[clamp(1.5rem,4vw,2.35rem)] leading-tight text-navy"
          >
            The back office your practice doesn&apos;t have to build
          </h2>
          <div className="mb-8 space-y-4 text-[0.95rem] leading-relaxed text-text-secondary sm:text-base">
            <p>
              We exist to take administrative weight off healthcare providers.
              Our team works inside your workflows, follows up on what others
              let slide, and keeps you informed at every step.
            </p>
            <p>
              Whether you run a solo practice or a multi-provider group, you get
              a partner focused on one thing: getting you paid accurately and on
              time.
            </p>
          </div>
          <Button href="#contact" size="lg">
            Start a conversation
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
