import React from "react";
import { Container } from "@/components/common/Container";
import { CheckCircle2 } from "lucide-react";

interface ServiceOverviewProps {
  heading: string;
  paragraphs: string[];
  highlights: { label: string; value: string }[];
}

export function ServiceOverview({
  heading,
  paragraphs,
  highlights,
}: ServiceOverviewProps) {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-brand-border/60">
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Main Explanatory Content */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-[#CFE6F8] bg-[#EAF5FC] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-blue shadow-xs">
              <span>SERVICE OVERVIEW</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-brand-navy leading-tight">
              {heading}
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-brand-text/85 leading-relaxed">
              {paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>

          {/* Quick Specifications / Highlights Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-brand-border bg-brand-bg-light/60 p-6 sm:p-7 shadow-xs space-y-5">
              <h3 className="text-base sm:text-lg font-bold text-brand-navy flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-brand-blue" />
                <span>Service Parameters</span>
              </h3>

              <div className="divide-y divide-brand-border/70 border-t border-brand-border/70">
                {highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="py-3.5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-sm"
                  >
                    <span className="font-semibold text-brand-navy/80">
                      {item.label}
                    </span>
                    <span className="font-medium text-brand-blue">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="rounded-xl border border-[#CFE6F8] bg-[#EAF5FC]/80 p-3.5 text-xs text-brand-navy/90 leading-relaxed">
                <span className="font-bold text-brand-navy">Note: </span>
                Actual requirements and compatible components may vary depending on your purifier model and water conditions.
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
