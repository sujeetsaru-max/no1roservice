import React from "react";
import Link from "next/link";
import { CheckCircle2, MapPin } from "lucide-react";
import { Container } from "@/components/common/Container";
import { LocationRecord } from "@/data/locationsData";

interface LocationCoverageProps {
  location: LocationRecord;
  childLocations?: LocationRecord[];
}

export function LocationCoverage({
  location,
  childLocations = [],
}: LocationCoverageProps) {
  const localities = location.coverageLocalities || [];

  if (localities.length === 0 && childLocations.length === 0) return null;

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-brand-border/60">
      <Container size="xl">
        {/* Section Header */}
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-[#CFE6F8] bg-[#EAF5FC] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-blue shadow-xs">
            <MapPin className="h-3.5 w-3.5 text-brand-blue" />
            <span>COVERAGE REACH</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-brand-navy leading-tight">
            Key Localities & Sectors Covered in {location.name}
          </h2>

          <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
            Our service network coordinates doorstep technician visits across prominent neighborhoods, housing colonies, and commercial hubs.
          </p>
        </div>

        {/* Published Sub-Pages (if any) */}
        {childLocations.length > 0 && (
          <div className="mt-8 pt-4">
            <p className="text-xs font-bold text-brand-navy uppercase tracking-wider mb-4">
              Dedicated Locality Guides:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {childLocations.map((child) => (
                <Link
                  key={child.id}
                  href={child.path}
                  className="flex items-center justify-between p-4 rounded-xl border border-brand-border bg-brand-bg-light/60 hover:bg-white hover:border-brand-blue/40 hover:shadow-card transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <MapPin className="h-4 w-4 text-brand-blue shrink-0" />
                    <span className="text-sm font-bold text-brand-navy group-hover:text-brand-blue transition-colors">
                      {child.name}
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-brand-blue">
                    View &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Covered Localities Tag Cloud */}
        {localities.length > 0 && (
          <div className="mt-8 pt-4">
            <p className="text-xs font-bold text-brand-navy uppercase tracking-wider mb-4">
              Service Areas in {location.name}:
            </p>
            <div className="flex flex-wrap gap-2.5">
              {localities.map((item, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-brand-border bg-white px-3.5 py-2 text-xs font-semibold text-brand-navy shadow-xs"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-brand-blue" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
