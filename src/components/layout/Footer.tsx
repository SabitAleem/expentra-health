import { Logo } from "@/components/ui/Logo";
import {
  CONTACT_EMAIL,
  footerCompany,
  footerServices,
} from "@/data/navigation";

export function Footer() {
  return (
    <footer className="border-t border-border bg-navy text-white">
      <div className="container-site grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12 lg:py-14">
        <div>
          <Logo variant="light" className="mb-4" />
          <p className="max-w-sm text-sm leading-relaxed text-white/75">
            US healthcare back-office support and BPO services, built around
            your revenue cycle.
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-bold tracking-wide uppercase text-white">
            Services
          </h2>
          <ul className="space-y-2.5">
            {footerServices.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-white/75 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-bold tracking-wide uppercase text-white">
            Company
          </h2>
          <ul className="space-y-2.5">
            {footerCompany.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="break-all text-sm text-white/75 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-2 py-5 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© Expentra Health. All rights reserved.</p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="transition-colors hover:text-white"
          >
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>
    </footer>
  );
}
