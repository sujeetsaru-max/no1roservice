import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Wrench,
  MessageCircle,
  CalendarCheck,
  Droplets,
  ClipboardCheck,
  HeartHandshake,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
} from "lucide-react";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/Button";
import { routes } from "@/config/routes";

interface FeatureCardItem {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const featureCards: FeatureCardItem[] = [
  {
    id: "service-focused",
    title: "Service-Focused Solutions",
    description:
      "Solutions for common RO purifier issues, installation requirements and regular maintenance.",
    icon: Wrench,
  },
  {
    id: "clear-communication",
    title: "Clear Communication",
    description:
      "Understand the reported purifier issue and the recommended service before proceeding.",
    icon: MessageCircle,
  },
  {
    id: "convenient-booking",
    title: "Convenient Booking",
    description:
      "An easy way to submit your RO service requirements through our booking process.",
    icon: CalendarCheck,
  },
  {
    id: "multiple-needs",
    title: "Multiple RO Service Needs",
    description:
      "Support for repair, installation, filter replacement, membrane replacement and maintenance requirements.",
    icon: Droplets,
  },
  {
    id: "maintenance-guidance",
    title: "Maintenance Guidance",
    description:
      "Helpful guidance on routine purifier care, filter changes and maintenance requirements.",
    icon: ClipboardCheck,
  },
  {
    id: "customer-focused",
    title: "Customer-Focused Approach",
    description:
      "We aim to make the RO service experience straightforward, helpful and convenient.",
    icon: HeartHandshake,
  },
];

export function WhyChooseUsSection() {
  return (
    <section
      id="why-choose-us"
      aria-labelledby="why-choose-us-heading"
      className="py-16 sm:py-20 lg:py-24 bg-white border-t border-brand-border/60"
    >
      <Container size="xl">
        {/* Main Split Layout: Left Content & Cards / Right Visual */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Heading, Intro & 6 Feature Cards */}
          <div className="lg:col-span-7 space-y-6">
            {/* Section Introduction */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-[#CFE6F8] bg-[#EAF5FC] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-blue shadow-xs">
                <span>WHY CHOOSE NO.1 RO SERVICE</span>
              </div>

              <h2
                id="why-choose-us-heading"
                className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-brand-navy leading-tight"
              >
                RO Care You Can Rely On
              </h2>

              <p className="text-sm sm:text-base text-brand-muted leading-relaxed max-w-xl">
                We focus on practical service solutions, clear communication and
                convenient support to help keep your water purifier running
                smoothly.
              </p>
            </div>

            {/* Six Feature Cards in Clean 2-Column Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 pt-2">
              {featureCards.map((card) => {
                const IconComponent = card.icon;

                return (
                  <div
                    key={card.id}
                    className="flex flex-col justify-between rounded-xl border border-brand-border bg-brand-bg-light/50 p-4 sm:p-5 transition-all duration-200 hover:bg-white hover:border-brand-blue/30 hover:shadow-card"
                  >
                    <div className="flex items-start gap-3.5">
                      <div
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#CFE6F8] bg-white text-brand-blue shadow-xs"
                        aria-hidden="true"
                      >
                        <IconComponent className="h-4.5 w-4.5" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-sm sm:text-base font-bold text-brand-navy">
                          {card.title}
                        </h3>
                        <p className="text-xs text-brand-muted leading-relaxed">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Visual Composition with Existing Photography */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Subtle ambient decorative backdrop glow */}
              <div
                className="absolute -inset-1.5 rounded-2xl sm:rounded-3xl bg-gradient-to-tr from-brand-blue/15 via-brand-aqua/15 to-transparent opacity-80 blur-xs"
                aria-hidden="true"
              />

              {/* Main Visual Image */}
              <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-brand-border bg-white shadow-card">
                <Image
                  src="/images/hero/hero-indian-family-pure-water.jpg"
                  alt="Family in a modern kitchen enjoying reliable pure drinking water from an RO purifier"
                  width={680}
                  height={540}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 480px"
                  className="h-auto w-full object-cover"
                />
              </div>

              {/* Floating Visual Label: Complete RO Care */}
              <div className="hidden sm:flex absolute -bottom-4 -left-4 items-center gap-2.5 rounded-xl border border-brand-border bg-white/95 p-3 shadow-card backdrop-blur-md">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#EAF5FC] border border-[#CFE6F8] text-brand-blue">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-brand-navy">
                    Complete RO Care
                  </span>
                  <span className="block text-[11px] text-brand-muted">
                    Dependable Service Solutions
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5. Brand Promise Strip (Horizontal with 3 Core Principles) */}
        <div className="mt-16 pt-10 border-t border-brand-border/80">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {/* Principle 1 */}
            <div className="flex flex-col items-center p-3 md:border-r border-brand-border/80">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF5FC] text-brand-blue border border-[#CFE6F8] mb-3">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-bold text-brand-navy">
                Clear Service Communication
              </h3>
              <p className="mt-1 text-xs text-brand-muted max-w-xs">
                Transparent issue explanation and straightforward service recommendations.
              </p>
            </div>

            {/* Principle 2 */}
            <div className="flex flex-col items-center p-3 md:border-r border-brand-border/80">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E8FAF9] text-[#117C7E] border border-[#B2EEF0] mb-3">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-bold text-brand-navy">
                Practical RO Care
              </h3>
              <p className="mt-1 text-xs text-brand-muted max-w-xs">
                Solutions designed to maintain water purity and purifier performance.
              </p>
            </div>

            {/* Principle 3 */}
            <div className="flex flex-col items-center p-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF5FC] text-brand-blue border border-[#CFE6F8] mb-3">
                <Clock className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-bold text-brand-navy">
                Customer Convenience
              </h3>
              <p className="mt-1 text-xs text-brand-muted max-w-xs">
                Convenient doorstep scheduling and supportive customer assistance.
              </p>
            </div>
          </div>
        </div>

        {/* 6. Compact CTA Section */}
        <div className="mt-12 rounded-2xl border border-brand-border bg-brand-bg-light/60 p-6 sm:p-8 text-center max-w-2xl mx-auto shadow-card">
          <h3 className="text-xl sm:text-2xl font-bold text-brand-navy">
            Looking for Reliable RO Service?
          </h3>
          <p className="mt-2 text-sm text-brand-muted max-w-xl mx-auto">
            Explore our service options and find the right solution for your water
            purifier.
          </p>
          <div className="mt-5 flex justify-center">
            <Link href={routes.booking}>
              <Button
                size="md"
                className="font-bold shadow-xs"
                rightIcon={<ArrowRight className="h-4 w-4" />}
              >
                Book a Service
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
