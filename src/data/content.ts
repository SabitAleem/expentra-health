import type {
  BenefitItem,
  FeatureItem,
  ProcessStep,
  RcmStage,
} from "@/types";

export const benefits: BenefitItem[] = [
  { id: "us-healthcare", label: "Focused on US healthcare" },
  { id: "full-or-partial", label: "Full RCM or individual services" },
  { id: "dedicated-support", label: "Dedicated support team" },
  { id: "reporting", label: "Clear, regular reporting" },
];

export const features: FeatureItem[] = [
  {
    id: "accuracy",
    title: "Accuracy first",
    description:
      "Careful coding and scrubbing to get claims right the first time.",
    icon: "accuracy",
  },
  {
    id: "transparent",
    title: "Transparent",
    description:
      "Regular reporting so you always know where your revenue stands.",
    icon: "transparent",
  },
  {
    id: "dedicated",
    title: "Dedicated team",
    description: "People who learn your practice, not a rotating queue.",
    icon: "dedicated",
  },
  {
    id: "flexible",
    title: "Flexible",
    description: "Take the full cycle or just the services you need.",
    icon: "flexible",
  },
];

export const processSteps: ProcessStep[] = [
  {
    id: "discovery",
    step: 1,
    title: "Discovery call",
    description: "We learn about your practice, systems and goals.",
  },
  {
    id: "onboarding",
    step: 2,
    title: "Onboarding",
    description:
      "We set up access, workflows and reporting around your needs.",
  },
  {
    id: "execution",
    step: 3,
    title: "Execution",
    description: "Your dedicated team takes over the agreed services.",
  },
  {
    id: "reporting",
    step: 4,
    title: "Reporting",
    description:
      "You get regular updates and we keep improving the process.",
  },
];

/** Angles in degrees for circular RCM diagram (12 o'clock = -90) */
export const rcmStages: RcmStage[] = [
  { id: "scheduling", number: 1, label: "Scheduling", angle: -90 },
  { id: "benefits", number: 2, label: "Benefits & auth", angle: -30 },
  { id: "coding", number: 3, label: "Coding", angle: 30 },
  { id: "scrubbing", number: 4, label: "Claim scrubbing", angle: 90 },
  { id: "billing", number: 5, label: "Billing", angle: 150 },
  { id: "ar", number: 6, label: "AR & denials", angle: 210 },
];
