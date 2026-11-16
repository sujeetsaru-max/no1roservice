import React from "react";
import Link from "next/link";
import { ArrowRight, Wrench } from "lucide-react";
import { Container } from "@/components/common/Container";

interface ServiceItem {
  title: string;
  description: string;
  href: string;
}

interface LocationServicesProps {
  locationName: string;
  services: ServiceItem[];
}

export function LocationServices({
  locationName,
  services,
}: LocationServicesProps) {
  if (!services || services.length === 0) return null;

  return (
    <section className="py-16 sm:py-20 bg-brand-bg-light/50 border-b border-brand-border/60">
      <Container size="xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-[#CFE6F8] bg-[#EAF5FC] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-blue shadow-xs">
            <Wrench className="h-3.5 w-3.5 text-brand-blue" />
            <span>SOLUTIONS OFFERED</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-brand-navy leading-tight">
            RO Services Available in {locationName}
          </h2>

          <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
            From sudden pressure drops and persistent leaks to scheduled cartridge replacements and relocation assistance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-12 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, idx) => (
            <div
              key={idx}
              className="group flex flex-col rounded-2xl border border-brand-border bg-white p-6 shadow-card hover:shadow-card-hover transition-all duration-200"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EAF5FC] border border-[#CFE6F8] text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors shadow-2xs">
                <Wrench className="h-5 w-5" />
              </div>

              <div className="mt-5 space-y-2 flex-1">
                <h3 className="text-base font-bold text-brand-navy group-hover:text-brand-blue transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-brand-border/60">
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue group-hover:text-brand-navy transition-colors"
                >
                  <span>Explore Service</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
