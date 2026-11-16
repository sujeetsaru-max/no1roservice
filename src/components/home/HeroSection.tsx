import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Droplets,
  Wrench,
  Settings,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/Button";
import { routes } from "@/config/routes";

export function HeroSection() {
  return (
    <section
      aria-label="Hero - Professional RO Water Purifier Services"
      className="relative overflow-hidden bg-gradient-to-b from-white via-brand-bg-light/60 to-white py-12 sm:py-16 lg:py-20"
    >
      {/* Subtle decorative background glow in approved palette */}
      <div
        className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-brand-blue/5 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 left-0 h-80 w-80 -translate-y-1/2 rounded-full bg-brand-aqua/5 blur-3xl"
        aria-hidden="true"
      />

      <Container size="xl" className="relative">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Small Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#CFE6F8] bg-[#EAF5FC] px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-blue shadow-xs">
              <Droplets className="h-3.5 w-3.5 text-brand-aqua shrink-0" />
              <span>PROFESSIONAL RO WATER PURIFIER SERVICES</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.12]">
              <span className="text-brand-navy">Pure </span>
              <span className="text-brand-blue">Water.</span>
              <br />
              <span className="text-brand-navy">Better </span>
              <span className="text-brand-aqua">Living.</span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="max-w-xl text-base text-brand-muted sm:text-lg leading-relaxed">
              Get reliable RO water purifier repair, installation and maintenance
              services. Our service solutions help keep your water purifier working
              efficiently.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
              <Link href={routes.booking} className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto font-bold shadow-md shadow-brand-blue/20"
                  rightIcon={<ArrowRight className="h-4 w-4" />}
                >
                  Book a Service
                </Button>
              </Link>

              <Link href={routes.services.index} className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto font-semibold border-brand-border bg-white text-brand-navy hover:bg-brand-bg-light"
                >
                  Explore Our Services
                </Button>
              </Link>
            </div>

            {/* Compact Service Highlights (3 Items with Lucide Icons) */}
            <div className="pt-8 border-t border-brand-border/80">
              <div className="grid grid-cols-3 gap-2.5 sm:gap-6">
                {/* 1. RO Repair */}
                <Link
                  href={routes.services.repair}
                  className="group flex items-center gap-2.5 rounded-lg p-1.5 transition-colors hover:bg-white"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#CFE6F8] bg-[#EAF5FC] text-brand-blue transition-colors group-hover:bg-brand-blue group-hover:text-white">
                    <Wrench className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <h2 className="text-xs sm:text-sm font-bold text-brand-navy transition-colors group-hover:text-brand-blue truncate">
                      RO Repair
                    </h2>
                    <p className="hidden sm:block text-[11px] text-brand-muted truncate">
                      Diagnostics &amp; Fix
                    </p>
                  </div>
                </Link>

                {/* 2. Installation */}
                <Link
                  href={routes.services.installation}
                  className="group flex items-center gap-2.5 rounded-lg p-1.5 transition-colors hover:bg-white"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#CFE6F8] bg-[#EAF5FC] text-brand-blue transition-colors group-hover:bg-brand-blue group-hover:text-white">
                    <Settings className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <h2 className="text-xs sm:text-sm font-bold text-brand-navy transition-colors group-hover:text-brand-blue truncate">
                      Installation
                    </h2>
                    <p className="hidden sm:block text-[11px] text-brand-muted truncate">
                      Mounting &amp; Setup
                    </p>
                  </div>
                </Link>

                {/* 3. Maintenance */}
                <Link
                  href={routes.services.maintenance}
                  className="group flex items-center gap-2.5 rounded-lg p-1.5 transition-colors hover:bg-white"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#B2EEF0] bg-[#E8FAF9] text-[#117C7E] transition-colors group-hover:bg-brand-aqua group-hover:text-brand-navy">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <h2 className="text-xs sm:text-sm font-bold text-brand-navy transition-colors group-hover:text-brand-blue truncate">
                      Maintenance
                    </h2>
                    <p className="hidden sm:block text-[11px] text-brand-muted truncate">
                      Filter &amp; Purity Check
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            {/* Visual Framing Container */}
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Subtle Decorative Aqua/Blue Offset Border Frame */}
              <div
                className="absolute -inset-1.5 rounded-2xl sm:rounded-3xl bg-gradient-to-tr from-brand-blue/20 via-brand-aqua/20 to-transparent opacity-80 blur-xs"
                aria-hidden="true"
              />

              {/* Main Commercial Photography Image */}
              <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-brand-border bg-white shadow-card">
                <Image
                  src="/images/hero/hero-purifier-showcase.jpg"
                  alt="Modern RO water purifier appliance dispensing pure drinking water into a crystal glass"
                  width={720}
                  height={480}
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 540px"
                  className="h-auto w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>

              {/* Floating Service Badge: RO Care & Maintenance */}
              <div className="hidden sm:flex absolute -bottom-4 -left-4 items-center gap-3 rounded-xl border border-brand-border bg-white/95 p-3 shadow-card backdrop-blur-md">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#EAF5FC] text-brand-blue border border-[#CFE6F8]">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-brand-navy">
                    RO Care &amp; Maintenance
                  </h3>
                  <p className="text-[11px] text-brand-muted">
                    Scheduled Doorstep Service
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
