import React from "react";
import Link from "next/link";
import {
  ClipboardList,
  FileText,
  Headset,
  Droplets,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/Button";
import { routes } from "@/config/routes";

interface StepItem {
  step: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const stepsData: StepItem[] = [
  {
    step: "01",
    title: "Choose Your Service",
    description:
      "Select the RO repair, installation, maintenance or replacement service you need.",
    icon: ClipboardList,
  },
  {
    step: "02",
    title: "Submit Your Request",
    description:
      "Share your contact details, address and purifier-related requirements through the booking form.",
    icon: FileText,
  },
  {
    step: "03",
    title: "Discuss Service Details",
    description:
      "Our team can review your request and coordinate the next steps with you.",
    icon: Headset,
  },
  {
    step: "04",
    title: "Get Your RO Service",
    description:
      "Proceed with the agreed service after discussing the requirements and applicable charges.",
    icon: Droplets,
  },
];

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="py-16 sm:py-20 lg:py-24 bg-brand-bg-light/60 border-t border-brand-border/60"
    >
      <Container size="xl">
        {/* Section Introduction */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-[#CFE6F8] bg-[#EAF5FC] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-blue shadow-xs">
            <span>HOW IT WORKS</span>
          </div>

          <h2
            id="how-it-works-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-brand-navy leading-tight"
          >
            Get Your RO Service in 4 Simple Steps
          </h2>

          <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
            Booking RO purifier service is simple. Share your requirements, discuss the service details and get the support your purifier needs.
          </p>
        </div>

        {/* Four Step Cards Grid */}
        <div className="mt-14 sm:mt-16 relative">
          {/* Subtle Desktop Connector Line (Behind the cards) */}
          <div
            className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-0.5 border-t-2 border-dashed border-[#CFE6F8] z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 relative z-10">
            {stepsData.map((step) => {
              const IconComponent = step.icon;

              return (
                <div
                  key={step.step}
                  className="flex flex-col h-full rounded-2xl border border-brand-border bg-white p-6 shadow-card hover:shadow-card-hover transition-all duration-200 group"
                >
                  {/* Card Header: Icon & Number Indicator */}
                  <div className="flex items-center justify-between">
                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#CFE6F8] bg-[#EAF5FC] text-brand-blue transition-colors group-hover:bg-brand-blue group-hover:text-white shadow-xs"
                      aria-hidden="true"
                    >
                      <IconComponent className="h-6 w-6" />
                    </div>

                    <span className="font-mono text-xs font-black tracking-wider text-brand-navy bg-brand-bg-light border border-brand-border px-2.5 py-1 rounded-full">
                      STEP {step.step}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="mt-5 space-y-2 flex-1">
                    <h3 className="text-base sm:text-lg font-bold text-brand-navy group-hover:text-brand-blue transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section Bottom CTA */}
        <div className="mt-14 sm:mt-16 rounded-2xl border border-brand-border bg-white p-6 sm:p-10 shadow-card text-center max-w-2xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold text-brand-navy">
            Ready to Book Your RO Service?
          </h3>
          <p className="mt-2 text-sm text-brand-muted">
            Tell us what your water purifier needs.
          </p>
          <div className="mt-6 flex justify-center">
            <Link href={routes.booking}>
              <Button
                size="md"
                className="font-bold shadow-xs px-6"
                rightIcon={<ArrowRight className="h-4 w-4" />}
              >
                Book a Service
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
