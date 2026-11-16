import React from "react";
import Image from "next/image";
import { Container } from "@/components/common/Container";
import { CheckCircle2, Sliders, FileSearch, Shield } from "lucide-react";

export function AboutApproach() {
  const approachPoints = [
    {
      title: "Understanding The Issue",
      description: "Carefully listening to your purifier concerns before proposing service.",
      icon: FileSearch,
    },
    {
      title: "Explaining Service Options",
      description: "Sharing clear details about recommended parts, filters or tune-ups.",
      icon: Sliders,
    },
    {
      title: "Informed Decision-Making",
      description: "Empowering you to choose what is right for your purifier and budget.",
      icon: CheckCircle2,
    },
    {
      title: "Responsible Care",
      description: "Focusing on proper fittings, hygiene and safe water output.",
      icon: Shield,
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-brand-border/60">
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Image Column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative aspect-4/3 sm:aspect-5/4 rounded-2xl overflow-hidden border border-brand-border shadow-lg">
                <Image
                  src="/images/hero/hero-purification-technology.jpg"
                  alt="Multi-stage RO water purification technology and filtration system"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/30 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Accent Border Frame */}
              <div
                className="hidden sm:block absolute -top-3 -right-3 -bottom-3 -left-3 rounded-2xl border-2 border-brand-blue/15 -z-10"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-[#CFE6F8] bg-[#EAF5FC] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-blue shadow-xs">
              <span>OUR SERVICE APPROACH</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-brand-navy leading-tight">
              A Practical Approach to RO Care
            </h2>

            <p className="text-base sm:text-lg text-brand-text/85 leading-relaxed">
              Every water purifier has different service requirements. We aim to understand the reported issue, explain the available service options and help customers make informed decisions about their RO purifier care.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {approachPoints.map((point) => {
                const IconComponent = point.icon;
                return (
                  <div
                    key={point.title}
                    className="flex items-start gap-3 rounded-xl border border-brand-border/80 bg-brand-bg-light/50 p-4 transition-colors hover:bg-brand-bg-light"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white border border-brand-border text-brand-blue shadow-2xs">
                      <IconComponent className="h-4.5 w-4.5 text-brand-blue" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-brand-navy">
                        {point.title}
                      </h3>
                      <p className="mt-1 text-xs text-brand-muted leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
