import { processSteps } from "@/data/content";

export function HowWeWork() {
  return (
    <section
      id="how-we-work"
      className="bg-white py-14 sm:py-16 lg:py-20"
      aria-labelledby="how-heading"
    >
      <div className="container-site">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <p className="mb-3 text-xs font-bold tracking-[0.14em] text-blue uppercase">
            How we work
          </p>
          <h2
            id="how-heading"
            className="font-bold tracking-tight text-balance text-[clamp(1.5rem,4vw,2.25rem)] leading-tight text-navy"
          >
            Getting started is simple
          </h2>
          <p className="mt-3 text-[clamp(0.95rem,2vw,1.05rem)] leading-relaxed text-text-secondary">
            A clear path from first conversation to ongoing results.
          </p>
        </div>

        {/* Mobile / tablet vertical timeline */}
        <div className="relative lg:hidden">
          <div
            className="absolute top-4 bottom-4 left-[1.15rem] w-px bg-border"
            aria-hidden="true"
          />
          <ol className="space-y-6">
            {processSteps.map((step) => (
              <li key={step.id} className="relative flex gap-4 pl-1">
                <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue text-sm font-bold text-white shadow-md">
                  {step.step}
                </span>
                <div className="rounded-2xl border border-border bg-white p-4 shadow-[var(--shadow-card)]">
                  <h3 className="mb-1.5 font-bold text-navy">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Desktop horizontal process */}
        <div className="relative hidden lg:block">
          <div
            className="absolute top-5 right-[12.5%] left-[12.5%] h-0.5 bg-border"
            aria-hidden="true"
          />
          <ol className="grid grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <li key={step.id} className="relative text-center">
                <span className="relative z-10 mx-auto mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-blue text-sm font-bold text-white shadow-md ring-4 ring-white">
                  {step.step}
                </span>
                <h3 className="mb-2 text-lg font-bold text-navy">{step.title}</h3>
                <p className="mx-auto max-w-[16rem] text-sm leading-relaxed text-text-secondary">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
