import React from "react";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { Container } from "@/components/common/Container";
import { LocationRecord, getLocationById } from "@/data/locationsData";
import { routes } from "@/config/routes";

interface RelatedLocationsProps {
  relatedLocationIds: string[];
}

export function RelatedLocations({
  relatedLocationIds,
}: RelatedLocationsProps) {
  const relatedLocations = relatedLocationIds
    .map((id) => getLocationById(id))
    .filter((loc): loc is LocationRecord => Boolean(loc && loc.status === "published"));

  if (relatedLocations.length === 0) return null;

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-brand-border/60">
      <Container size="xl">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-[#CFE6F8] bg-[#EAF5FC] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-blue shadow-xs">
              <MapPin className="h-3.5 w-3.5 text-brand-blue" />
              <span>NEARBY LOCATIONS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-brand-navy">
              Explore Nearby Service Areas
            </h2>
            <p className="text-sm text-brand-muted">
              We coordinate professional RO services across connected metropolitan and regional territories.
            </p>
          </div>

          <div>
            <Link
              href={routes.locations}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-blue hover:text-brand-navy transition-colors"
            >
              <span>All Service Areas</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* 3 Related Cards Grid */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {relatedLocations.map((loc) => (
            <article
              key={loc.id}
              className="group flex flex-col justify-between rounded-2xl border border-brand-border bg-white p-6 shadow-card hover:shadow-card-hover transition-all duration-200"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-brand-blue uppercase tracking-wider bg-[#EAF5FC] px-2.5 py-1 rounded-md border border-[#CFE6F8]">
                    {loc.type.replace("-", " ")}
                  </span>
                  <span className="text-xs text-brand-muted">{loc.stateName}</span>
                </div>

                <h3 className="text-lg font-bold text-brand-navy group-hover:text-brand-blue transition-colors">
                  {loc.name}
                </h3>

                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed line-clamp-3">
                  {loc.introduction}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-brand-border/60">
                <Link
                  href={loc.path}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-brand-blue group-hover:text-brand-navy transition-colors"
                >
                  <span>View {loc.name} Service Details</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
