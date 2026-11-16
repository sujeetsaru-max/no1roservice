import React from "react";
import { Container } from "@/components/common/Container";
import { AlertCircle, Building, Droplets, Home, Wrench } from "lucide-react";
import { LocationRecord } from "@/data/locationsData";

interface LocationOverviewProps {
  location: LocationRecord;
}

export function LocationOverview({ location }: LocationOverviewProps) {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-brand-border/60">
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Main Context Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-[#CFE6F8] bg-[#EAF5FC] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-blue shadow-xs">
              <Droplets className="h-3.5 w-3.5 text-brand-blue" />
              <span>LOCAL WATER CONDITIONS & DEMANDS</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-brand-navy leading-tight">
              Water Quality & Purification Needs in {location.name}
            </h2>

            {/* Factual Water Quality Guidance Box */}
            <div className="rounded-2xl border border-brand-border bg-brand-bg-light/60 p-6 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-brand-navy uppercase tracking-wider">
                <AlertCircle className="h-4 w-4 text-brand-blue" />
                <span>Water Profile Assessment</span>
              </div>
              <p className="text-xs sm:text-sm text-brand-text/85 leading-relaxed">
                {location.waterQualityNote}
              </p>
            </div>

            {/* Residential vs Commercial Context Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="rounded-2xl border border-brand-border bg-white p-5 space-y-2 shadow-xs">
                <div className="flex items-center gap-2 text-xs font-bold text-brand-navy">
                  <Home className="h-4 w-4 text-brand-blue" />
                  <span>Residential Applications</span>
                </div>
                <p className="text-xs text-brand-muted leading-relaxed">
                  {location.localContext.residentialNeeds}
                </p>
              </div>

              <div className="rounded-2xl border border-brand-border bg-white p-5 space-y-2 shadow-xs">
                <div className="flex items-center gap-2 text-xs font-bold text-brand-navy">
                  <Building className="h-4 w-4 text-brand-blue" />
                  <span>Commercial & Workplace</span>
                </div>
                <p className="text-xs text-brand-muted leading-relaxed">
                  {location.localContext.commercialNeeds}
                </p>
              </div>
            </div>
          </div>

          {/* Quick Details Specification Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-brand-border bg-brand-bg-light/60 p-6 sm:p-7 shadow-xs space-y-5">
              <h3 className="text-base sm:text-lg font-bold text-brand-navy flex items-center gap-2">
                <Wrench className="h-5 w-5 text-brand-blue" />
                <span>Location Profile Summary</span>
              </h3>

              <div className="divide-y divide-brand-border/70 border-t border-brand-border/70 text-xs sm:text-sm">
                <div className="py-3 flex justify-between gap-2">
                  <span className="font-semibold text-brand-navy">Location:</span>
                  <span className="text-brand-text/80 text-right">{location.name}</span>
                </div>
                <div className="py-3 flex justify-between gap-2">
                  <span className="font-semibold text-brand-navy">Region Type:</span>
                  <span className="text-brand-text/80 text-right capitalize">{location.type.replace("-", " ")}</span>
                </div>
                <div className="py-3 flex justify-between gap-2">
                  <span className="font-semibold text-brand-navy">State / UT:</span>
                  <span className="text-brand-text/80 text-right">{location.stateName}</span>
                </div>
                {location.cityName && (
                  <div className="py-3 flex justify-between gap-2">
                    <span className="font-semibold text-brand-navy">City:</span>
                    <span className="text-brand-text/80 text-right">{location.cityName}</span>
                  </div>
                )}
                <div className="py-3 flex justify-between gap-2">
                  <span className="font-semibold text-brand-navy">Common Systems:</span>
                  <span className="text-brand-text/80 text-right max-w-[200px]">{location.localContext.commonPurifierTypes}</span>
                </div>
                <div className="py-3 flex justify-between gap-2">
                  <span className="font-semibold text-brand-navy">Last Reviewed:</span>
                  <span className="text-brand-text/80 text-right">{location.lastReviewedDate}</span>
                </div>
              </div>

              <div className="rounded-xl border border-[#CFE6F8] bg-[#EAF5FC]/80 p-3.5 text-xs text-brand-navy/90 leading-relaxed">
                <span className="font-bold text-brand-navy">Verification Notice: </span>
                Service in {location.name} is coordinated through mobile service technicians based on service booking requests. We do not operate walk-in retail counters at every residential sector.
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
