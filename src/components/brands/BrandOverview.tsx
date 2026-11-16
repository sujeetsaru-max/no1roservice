import React from "react";
import { Container } from "@/components/common/Container";
import { CheckCircle2, Cpu, Filter } from "lucide-react";

interface BrandOverviewProps {
  brandName: string;
  overview: string[];
  popularModels: string[];
  filterSpecs: {
    preFilter: string;
    sediment: string;
    carbon: string;
    membrane: string;
    postCarbon: string;
  };
}

export function BrandOverview({
  brandName,
  overview,
  popularModels,
  filterSpecs,
}: BrandOverviewProps) {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-brand-border/60">
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Main Explanatory Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-[#CFE6F8] bg-[#EAF5FC] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-blue shadow-xs">
              <span>SYSTEM ARCHITECTURE</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-brand-navy leading-tight">
              Understanding {brandName} Water Purifier Technology & Care
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-brand-text/85 leading-relaxed">
              {overview.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Popular Models Covered */}
            <div className="pt-4 space-y-3">
              <h3 className="text-sm font-bold text-brand-navy uppercase tracking-wider flex items-center gap-2">
                <Cpu className="h-4 w-4 text-brand-blue" />
                <span>Popular {brandName} Models Supported</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {popularModels.map((model, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-brand-border bg-brand-bg-light/60 px-3 py-1.5 text-xs font-semibold text-brand-navy"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-brand-blue" />
                    {model}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Filter & Component Specifications */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-brand-border bg-brand-bg-light/60 p-6 sm:p-7 shadow-xs space-y-5">
              <h3 className="text-base sm:text-lg font-bold text-brand-navy flex items-center gap-2">
                <Filter className="h-5 w-5 text-brand-blue" />
                <span>Compatible Filtration Stages</span>
              </h3>

              <div className="divide-y divide-brand-border/70 border-t border-brand-border/70 text-xs sm:text-sm">
                <div className="py-3 flex justify-between gap-2">
                  <span className="font-semibold text-brand-navy">External Pre-Filter:</span>
                  <span className="text-brand-text/80 text-right">{filterSpecs.preFilter}</span>
                </div>
                <div className="py-3 flex justify-between gap-2">
                  <span className="font-semibold text-brand-navy">Sediment Stage:</span>
                  <span className="text-brand-text/80 text-right">{filterSpecs.sediment}</span>
                </div>
                <div className="py-3 flex justify-between gap-2">
                  <span className="font-semibold text-brand-navy">Carbon Block:</span>
                  <span className="text-brand-text/80 text-right">{filterSpecs.carbon}</span>
                </div>
                <div className="py-3 flex justify-between gap-2">
                  <span className="font-semibold text-brand-navy">RO Membrane:</span>
                  <span className="text-brand-text/80 text-right">{filterSpecs.membrane}</span>
                </div>
                <div className="py-3 flex justify-between gap-2">
                  <span className="font-semibold text-brand-navy">Post-Filter / Polisher:</span>
                  <span className="text-brand-text/80 text-right">{filterSpecs.postCarbon}</span>
                </div>
              </div>

              <div className="rounded-xl border border-[#CFE6F8] bg-[#EAF5FC]/80 p-3.5 text-xs text-brand-navy/90 leading-relaxed">
                <span className="font-bold text-brand-navy">Disclaimer: </span>
                No.1 RO Service is an independent service provider and is not officially affiliated with or authorized by {brandName}. Brand names and trademarks belong to their respective owners and are used purely for identification purposes.
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
