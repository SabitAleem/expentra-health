import type { ServiceItem } from "@/types";

export const services: ServiceItem[] = [
  {
    id: "appointment-scheduling",
    category: "Front office",
    title: "Appointment Scheduling",
    description:
      "Organized scheduling that keeps your calendar full and patients on time.",
  },
  {
    id: "phone-support",
    category: "Front office",
    title: "Healthcare Phone Support",
    description:
      "Patient calls answered professionally, so your staff can focus on care.",
  },
  {
    id: "verification-of-benefits",
    category: "Front office",
    title: "Verification of Benefits",
    description: "Eligibility and coverage confirmed ahead of every visit.",
  },
  {
    id: "prior-authorization",
    category: "Front office",
    title: "Prior Authorization",
    description: "Authorizations requested and tracked before care is delivered.",
  },
  {
    id: "credentialing",
    category: "Front office",
    title: "Credentialing",
    description:
      "Provider enrollment and payer credentialing handled without delays.",
  },
  {
    id: "medical-coding",
    category: "Coding & billing",
    title: "Medical Coding",
    description:
      "Clean, compliant coding so claims go out right the first time.",
  },
  {
    id: "claim-scrubbing",
    category: "Coding & billing",
    title: "Claim Scrubbing",
    description:
      "Claims reviewed for errors before submission to reduce rejections.",
  },
  {
    id: "medical-billing",
    category: "Coding & billing",
    title: "Medical Billing",
    description: "Accurate, timely claim submission and payment posting.",
  },
  {
    id: "ar-denial-management",
    category: "Collections",
    title: "AR & Denial Management",
    description:
      "Persistent follow-up on unpaid claims and appeals on denials.",
  },
];
