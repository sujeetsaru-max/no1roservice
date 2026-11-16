import React from "react";
import { Container } from "@/components/common/Container";
import {
  MessageSquareText,
  Wrench,
  Clock,
  ShieldCheck,
} from "lucide-react";

interface ServiceValue {
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const serviceValues: ServiceValue[] = [
  {
    number: "01",
    title: "Clear Communication",
    description: "Explain service requirements and recommendations clearly.",
    icon: MessageSquareText,
  },
  {
    number: "02",
    title: "Practical Solutions",
    description: "Focus on the actual needs of each purifier.",
    icon: Wrench,
  },
  {
    number: "03",
    title: "Customer Convenience",
    description: "Make service requests and coordination straightforward.",
    icon: Clock,
  },
  {
    number: "04",
    title: "Responsible Guidance",
    description: "Help customers understand routine purifier care.",
    icon: ShieldCheck,
  },
];

export function ServiceValuesSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-brand-border/60">
      <Container size="xl">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-[#CFE6F8] bg-[#EAF5FC] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-blue shadow-xs">
            <span>OUR CORE PILLARS</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-brand-navy leading-tight">
            Our Service Values
          </h2>

          <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
            The standards we uphold across every service request, inquiry and support interaction.
          </p>
        </div>

        {/* Four Value Cards */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceValues.map((val) => {
            const IconComponent = val.icon;
            return (
              <div
                key={val.title}
                className="group relative flex flex-col rounded-2xl border border-brand-border bg-white p-6 shadow-card hover:shadow-card-hover transition-all duration-200"
              >
                {/* Header: Icon & Number Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EAF5FC] border border-[#CFE6F8] text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors shadow-xs">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <span className="font-mono text-xs font-bold text-brand-muted/70 tracking-wider">
                    {val.number}
                  </span>
                </div>

                {/* Content */}
                <div className="mt-5 space-y-2 flex-1">
                  <h3 className="text-base sm:text-lg font-bold text-brand-navy group-hover:text-brand-blue transition-colors">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                    {val.description}
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
