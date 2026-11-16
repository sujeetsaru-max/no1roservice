import React from "react";
import { Container } from "@/components/common/Container";
import { CheckCircle2, ListChecks } from "lucide-react";

interface IncludedItem {
  title: string;
  description: string;
}

interface ServiceIncludesProps {
  heading: string;
  intro: string;
  includedItems: IncludedItem[];
}

export function ServiceIncludes({
  heading,
  intro,
  includedItems,
}: ServiceIncludesProps) {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-brand-border/60">
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Header Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-[#CFE6F8] bg-[#EAF5FC] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-blue shadow-xs">
              <ListChecks className="h-3.5 w-3.5 text-brand-blue" />
              <span>SERVICE SCOPE</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-brand-navy leading-tight">
              {heading}
            </h2>

            <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
              {intro}
            </p>

            <div className="hidden lg:block pt-4">
              <div className="rounded-2xl border border-brand-border bg-brand-bg-light/80 p-5 space-y-2">
                <p className="text-xs font-bold text-brand-navy uppercase tracking-wider">
                  Service Assurance
                </p>
                <p className="text-xs text-brand-muted leading-relaxed">
                  Every step is conducted cleanly and safely with transparent communication before and after the service.
                </p>
              </div>
            </div>
          </div>

          {/* Activities List / Cards */}
          <div className="lg:col-span-7 space-y-4">
            {includedItems.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 rounded-xl border border-brand-border bg-white p-5 shadow-xs hover:border-brand-blue/30 transition-all duration-150"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#EAF5FC] text-brand-blue font-bold text-xs">
                  0{idx + 1}
                </div>

                <div className="space-y-1">
                  <h3 className="text-sm sm:text-base font-bold text-brand-navy flex items-center gap-2">
                    <span>{item.title}</span>
                    <CheckCircle2 className="h-4 w-4 text-brand-blue/60 shrink-0" />
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
