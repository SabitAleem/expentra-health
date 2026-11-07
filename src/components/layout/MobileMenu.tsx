"use client";

import { Button } from "@/components/ui/Button";
import { navigationLinks } from "@/data/navigation";
import { X } from "lucide-react";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
    >
      <button
        type="button"
        className="absolute inset-0 bg-navy/40 backdrop-blur-[2px]"
        aria-label="Close menu overlay"
        onClick={onClose}
      />
      <div className="absolute right-0 top-0 flex h-full w-[min(100%,20rem)] flex-col bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <p className="font-semibold text-navy">Menu</p>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-navy hover:bg-light-blue"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-4" aria-label="Mobile">
          {navigationLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={onClose}
              className="rounded-lg px-4 py-3 text-base font-medium text-navy transition-colors hover:bg-light-blue"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="border-t border-border p-4">
          <Button href="#contact" className="w-full" onClick={onClose}>
            Book a consultation
          </Button>
        </div>
      </div>
    </div>
  );
}
