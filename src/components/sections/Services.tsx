import { Button } from "@/components/ui/Button";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { services } from "@/data/services";

export function Services() {
  return (
    <section
      id="services"
      className="bg-white py-14 sm:py-16 lg:py-20"
      aria-labelledby="services-heading"
    >
      <div className="container-site">
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-bold tracking-[0.14em] text-blue uppercase">
            Our services
          </p>
          <h2
            id="services-heading"
            className="font-bold tracking-tight text-balance text-[clamp(1.5rem,4vw,2.25rem)] leading-tight text-navy"
          >
            One partner for the whole revenue cycle
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-[clamp(0.95rem,2vw,1.05rem)] leading-relaxed text-text-secondary">
            Hand over the entire cycle, or just the pieces that slow your
            practice down.
          </p>
        </div>

        <div className="gradient-cta mb-8 rounded-2xl p-6 text-white shadow-lg sm:mb-10 sm:p-8 lg:p-10">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
            <div className="max-w-2xl">
              <h3 className="mb-3 text-2xl font-bold tracking-tight sm:text-3xl">
                Complete RCM
              </h3>
              <p className="text-sm leading-relaxed text-white/85 sm:text-base">
                End-to-end revenue cycle management, from patient access and
                coding through billing, AR follow-up and denial recovery, all
                under one team.
              </p>
            </div>
            <Button
              href="#contact"
              variant="white"
              size="lg"
              className="shrink-0 self-start lg:self-center"
            >
              Talk to us
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
