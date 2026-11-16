import React from "react";
import { Container } from "@/components/common/Container";
import { Clock, HelpCircle } from "lucide-react";

interface SignItem {
  title: string;
  description: string;
}

interface ServiceWhenNeededProps {
  heading: string;
  intro: string;
  signs: SignItem[];
}

export function ServiceWhenNeeded({
  heading,
  intro,
  signs,
}: ServiceWhenNeededProps) {
  return (
    <section className="py-16 sm:py-20 bg-brand-bg-light/60 border-b border-brand-border/60">
      <Container size="xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-[#CFE6F8] bg-[#EAF5FC] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-blue shadow-xs">
            <HelpCircle className="h-3.5 w-3.5 text-brand-blue" />
            <span>WHEN TO CALL</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-brand-navy leading-tight">
            {heading}
          </h2>

          <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
            {intro}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-12 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {signs.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col rounded-2xl border border-brand-border bg-white p-6 shadow-card hover:shadow-card-hover transition-all duration-200"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EAF5FC] text-brand-blue border border-[#CFE6F8]">
                  <Clock className="h-5 w-5" />
                </div>
                <span className="font-mono text-xs font-bold text-brand-muted/70">
                  Indicator {idx + 1}
                </span>
              </div>

              <div className="mt-4 pt-4 border-t border-brand-border/60 flex-1 space-y-2">
                <h3 className="text-base font-bold text-brand-navy">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
