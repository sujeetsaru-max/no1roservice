import React from "react";
import { Container } from "@/components/common/Container";
import { AlertTriangle, HelpCircle } from "lucide-react";

interface ProblemItem {
  title: string;
  description: string;
  symptom: string;
}

interface BrandCommonProblemsProps {
  brandName: string;
  problems: ProblemItem[];
}

export function BrandCommonProblems({
  brandName,
  problems,
}: BrandCommonProblemsProps) {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-brand-border/60">
      <Container size="xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-[#CFE6F8] bg-[#EAF5FC] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-blue shadow-xs">
            <AlertTriangle className="h-3.5 w-3.5 text-brand-blue" />
            <span>COMMON SYMPTOMS</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-brand-navy leading-tight">
            Common {brandName} RO Issues We Address
          </h2>

          <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
            Troubleshooting for typical symptoms reported by {brandName} water purifier owners.
          </p>
        </div>

        {/* Problems List */}
        <div className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((prob, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-2xl border border-brand-border bg-brand-bg-light/40 p-6 shadow-xs hover:border-brand-blue/30 transition-all duration-150"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#EAF5FC] text-brand-blue font-bold text-xs">
                    0{idx + 1}
                  </span>
                  <h3 className="text-base font-bold text-brand-navy leading-snug">
                    {prob.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  {prob.description}
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-brand-border/70">
                <p className="text-xs font-semibold text-brand-navy/90 flex items-start gap-1.5">
                  <HelpCircle className="h-3.5 w-3.5 text-brand-blue shrink-0 mt-0.5" />
                  <span>Symptom: {prob.symptom}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
