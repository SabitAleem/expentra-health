import { Button } from "@/components/ui/Button";
import { CONTACT_EMAIL } from "@/data/navigation";
import { Mail } from "lucide-react";

export function ContactCTA() {
  return (
    <section
      id="contact"
      className="bg-white py-14 sm:py-16 lg:py-20"
      aria-labelledby="contact-heading"
    >
      <div className="container-site">
        <div className="gradient-cta relative overflow-hidden rounded-2xl px-6 py-10 text-center text-white shadow-xl sm:px-10 sm:py-12 lg:px-16 lg:py-14">
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            aria-hidden="true"
            style={{
              backgroundImage:
                "radial-gradient(circle at 15% 20%, rgba(255,255,255,0.2), transparent 35%), radial-gradient(circle at 85% 80%, rgba(255,255,255,0.15), transparent 40%)",
            }}
          />
          <div className="relative mx-auto max-w-2xl">
            <h2
              id="contact-heading"
              className="mb-4 font-bold tracking-tight text-balance text-[clamp(1.5rem,4vw,2.25rem)]"
            >
              Ready to simplify your back office?
            </h2>
            <p className="mb-8 text-sm leading-relaxed text-white/85 sm:text-base">
              Tell us what you need and we will show you how Expentra Health can
              help.
            </p>
            <Button
              href={`mailto:${CONTACT_EMAIL}`}
              variant="white"
              size="lg"
              className="mx-auto"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {CONTACT_EMAIL}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
