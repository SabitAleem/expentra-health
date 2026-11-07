import { CONTACT_EMAIL } from "@/data/navigation";
import { Mail } from "lucide-react";

export function TopBar() {
  return (
    <div className="bg-navy text-white">
      <div className="container-site flex flex-col gap-1 py-2 text-xs sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:text-sm">
        <p className="leading-snug text-white/90">
          US healthcare back-office support &amp; BPO services
        </p>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="inline-flex items-center gap-1.5 font-medium text-white/95 transition-colors hover:text-white"
        >
          <Mail className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          <span className="break-all">{CONTACT_EMAIL}</span>
        </a>
      </div>
    </div>
  );
}
