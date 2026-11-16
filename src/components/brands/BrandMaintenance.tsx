import React from "react";
import { Container } from "@/components/common/Container";
import { CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

interface BrandMaintenanceProps {
  brandName: string;
  guidance: string[];
}

export function BrandMaintenance({
  brandName,
  guidance,
}: BrandMaintenanceProps) {
  return (
    <section className="py-16 sm:py-20 bg-brand-bg-light/60 border-b border-brand-border/60">
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Heading & Context */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-[#CFE6F8] bg-[#EAF5FC] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-blue shadow-xs">
              <Sparkles className="h-3.5 w-3.5 text-brand-blue" />
              <span>PREVENTIVE CARE</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-brand-navy leading-tight">
              Maintenance Best Practices for {brandName}
            </h2>

            <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
              Simple maintenance habits to prolong the operational life of your {brandName} purifier, protect delicate RO membranes, and maintain healthy water taste.
            </p>

            <div className="pt-2">
              <div className="rounded-2xl border border-brand-border bg-white p-5 space-y-2 shadow-xs">
                <div className="flex items-center gap-2 text-xs font-bold text-brand-navy uppercase tracking-wider">
                  <ShieldCheck className="h-4 w-4 text-brand-blue" />
                  <span>Optimal Performance Tip</span>
                </div>
                <p className="text-xs text-brand-muted leading-relaxed">
                  Regular sediment pre-filter replacement every 3 to 4 months shields internal carbon and RO membrane stages from early clogging.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Guidance Cards */}
          <div className="lg:col-span-7 space-y-3.5">
            {guidance.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3.5 rounded-xl border border-brand-border bg-white p-4.5 sm:p-5 shadow-xs"
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#EAF5FC] text-brand-blue mt-0.5">
                  <CheckCircle2 className="h-4 w-4 text-brand-blue" />
                </div>
                <p className="text-xs sm:text-sm text-brand-text/85 leading-relaxed font-medium">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
