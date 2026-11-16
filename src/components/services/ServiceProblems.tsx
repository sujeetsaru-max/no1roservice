import React from "react";
import { Container } from "@/components/common/Container";
import {
  Wrench,
  AlertTriangle,
  Volume2,
  Droplets,
  ZapOff,
  Sliders,
  ShieldAlert,
  Flame,
} from "lucide-react";

interface ProblemItem {
  title: string;
  description: string;
  iconName: "Wrench" | "AlertTriangle" | "Volume2" | "Droplets" | "ZapOff" | "Sliders" | "ShieldAlert" | "Flame";
}

interface ServiceProblemsProps {
  heading: string;
  intro: string;
  problems: ProblemItem[];
}

const iconMap = {
  Wrench,
  AlertTriangle,
  Volume2,
  Droplets,
  ZapOff,
  Sliders,
  ShieldAlert,
  Flame,
};

export function ServiceProblems({
  heading,
  intro,
  problems,
}: ServiceProblemsProps) {
  return (
    <section className="py-16 sm:py-20 bg-brand-bg-light/50 border-b border-brand-border/60">
      <Container size="xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-[#CFE6F8] bg-[#EAF5FC] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-blue shadow-xs">
            <span>TROUBLESHOOTING & ISSUES</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-brand-navy leading-tight">
            {heading}
          </h2>

          <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
            {intro}
          </p>
        </div>

        {/* Problems Grid */}
        <div className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((item, idx) => {
            const IconComponent = iconMap[item.iconName] || Wrench;

            return (
              <div
                key={idx}
                className="group relative flex flex-col rounded-2xl border border-brand-border bg-white p-6 shadow-card hover:shadow-card-hover transition-all duration-200"
              >
                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EAF5FC] border border-[#CFE6F8] text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors shadow-2xs">
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-brand-navy group-hover:text-brand-blue transition-colors">
                    {item.title}
                  </h3>
                </div>

                <div className="mt-4 pt-4 border-t border-brand-border/60 flex-1">
                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
