import React from "react";
import { Container } from "@/components/common/Container";
import { Target, Eye } from "lucide-react";

export function MissionVisionSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-brand-bg-light/60 border-b border-brand-border/60">
      <Container size="xl">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-[#CFE6F8] bg-[#EAF5FC] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-blue shadow-xs">
            <span>PURPOSE & DIRECTION</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-brand-navy leading-tight">
            Our Mission & Vision
          </h2>

          <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
            The principles that guide our daily operations and our long-term commitment to water purification care.
          </p>
        </div>

        {/* Two Cards: Mission and Vision */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {/* Mission Card */}
          <div className="relative flex flex-col rounded-2xl border border-brand-border bg-white p-7 sm:p-9 shadow-card hover:shadow-card-hover transition-all duration-200">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#EAF5FC] border border-[#CFE6F8] text-brand-blue shadow-xs">
                <Target className="h-7 w-7 text-brand-blue" />
              </div>
              <div>
                <span className="text-xs font-bold tracking-wider text-brand-blue uppercase">
                  Purpose
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-brand-navy">
                  Our Mission
                </h3>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-brand-border/70 flex-1">
              <p className="text-sm sm:text-base text-brand-text/85 leading-relaxed">
                To make RO purifier repair, installation and maintenance services easier to access through clear communication, practical solutions and a customer-focused approach.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="relative flex flex-col rounded-2xl border border-brand-border bg-white p-7 sm:p-9 shadow-card hover:shadow-card-hover transition-all duration-200">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#E6F8F8] border border-[#BCEBEC] text-brand-aqua shadow-xs">
                <Eye className="h-7 w-7 text-[#1AA6A8]" />
              </div>
              <div>
                <span className="text-xs font-bold tracking-wider text-[#1AA6A8] uppercase">
                  Direction
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-brand-navy">
                  Our Vision
                </h3>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-brand-border/70 flex-1">
              <p className="text-sm sm:text-base text-brand-text/85 leading-relaxed">
                To build a trusted service brand that helps households and businesses maintain their water purification systems with confidence and convenience.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
