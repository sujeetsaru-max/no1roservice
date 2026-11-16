import React from "react";
import Image from "next/image";
import { Container } from "@/components/common/Container";
import { Droplet, Sparkles } from "lucide-react";

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F4F8FC] via-white to-white py-16 sm:py-20 lg:py-24 border-b border-brand-border/60">
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#CFE6F8] bg-[#EAF5FC] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-blue shadow-xs">
              <Droplet className="h-3.5 w-3.5 fill-brand-blue text-brand-blue" />
              <span>ABOUT NO.1 RO SERVICE</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-brand-navy leading-tight">
              Helping You Make{" "}
              <span className="bg-gradient-to-r from-brand-blue to-brand-aqua bg-clip-text text-transparent">
                Every Drop Count
              </span>
            </h1>

            <p className="text-base sm:text-lg text-brand-text/80 leading-relaxed max-w-2xl">
              At No.1 RO Service, we focus on practical water purifier solutions, from installation and repair to maintenance and replacement services. Our aim is to make RO care easier to understand and convenient to access.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs sm:text-sm font-medium text-brand-muted">
              <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-lg border border-brand-border shadow-xs">
                <Sparkles className="h-4 w-4 text-brand-aqua" />
                <span>Domestic & Commercial RO Care</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-lg border border-brand-border shadow-xs">
                <Droplet className="h-4 w-4 text-brand-blue" />
                <span>Multi-Stage Purification Support</span>
              </div>
            </div>
          </div>

          {/* Right Column: Imagery */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative aspect-4/3 sm:aspect-5/4 rounded-2xl overflow-hidden border border-brand-border bg-white shadow-xl">
                <Image
                  src="/images/hero/hero-clean-water-glass.jpg"
                  alt="Clear glass of pure water from an RO water purifier"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/30 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Decorative Floating Badge */}
              <div className="absolute -bottom-4 -left-4 sm:bottom-4 sm:-left-6 rounded-xl border border-brand-border bg-white p-3.5 sm:p-4 shadow-lg backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue">
                    <Droplet className="h-5 w-5 fill-brand-blue" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-brand-muted uppercase tracking-wider">
                      Water Purifier Care
                    </p>
                    <p className="text-sm font-bold text-brand-navy">
                      Pure & Clean Water Focus
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
