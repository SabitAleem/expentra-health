import { RcmDiagram } from "@/components/sections/RcmDiagram";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section
      id="home"
      className="gradient-hero relative overflow-hidden text-white"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.18), transparent 40%), radial-gradient(circle at 80% 60%, rgba(255,255,255,0.12), transparent 35%)",
        }}
      />

      <div className="container-site relative grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-2 lg:gap-12 lg:py-20">
        <div className="animate-fade-up max-w-xl">
          <span className="mb-5 inline-flex rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-[0.7rem] font-bold tracking-[0.12em] text-white/95 uppercase backdrop-blur-sm">
            Revenue Cycle Management
          </span>

          <h1
            id="hero-heading"
            className="mb-5 font-bold tracking-tight text-balance text-[clamp(1.75rem,5vw,3.15rem)] leading-[1.15]"
          >
            Your revenue cycle, handled from first call to final payment.
          </h1>

          <p className="mb-8 max-w-lg text-[clamp(0.95rem,2.2vw,1.1rem)] leading-relaxed text-white/85">
            Expentra Health is a dedicated back-office partner for US healthcare
            providers. We take on the billing, coding, authorizations and
            follow-up so your team can focus on patients.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="#contact" variant="secondary" size="lg">
              Book a consultation
            </Button>
            <Button href="#services" variant="outline" size="lg">
              Explore services
            </Button>
          </div>
        </div>

        <div className="animate-fade-up [animation-delay:120ms]">
          <RcmDiagram />
        </div>
      </div>
    </section>
  );
}
