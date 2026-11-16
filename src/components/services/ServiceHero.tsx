import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Compass, ShieldCheck } from "lucide-react";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/Button";
import { routes } from "@/config/routes";

interface ServiceHeroProps {
  eyebrow: string;
  h1: string;
  description: string;
  image: string;
  imageAlt: string;
}

export function ServiceHero({
  eyebrow,
  h1,
  description,
  image,
  imageAlt,
}: ServiceHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F4F8FC] via-white to-white py-14 sm:py-18 lg:py-22 border-b border-brand-border/60">
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Content Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#CFE6F8] bg-[#EAF5FC] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-blue shadow-xs">
              <ShieldCheck className="h-3.5 w-3.5 text-brand-blue" />
              <span>{eyebrow}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-brand-navy leading-tight">
              {h1}
            </h1>

            <p className="text-base sm:text-lg text-brand-text/80 leading-relaxed max-w-2xl">
              {description}
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Link href={routes.booking} className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto font-bold shadow-xs px-6"
                  leftIcon={<Calendar className="h-4.5 w-4.5 text-white" />}
                  rightIcon={<ArrowRight className="h-4.5 w-4.5" />}
                >
                  Book a Service
                </Button>
              </Link>

              <Link href={routes.services.index} className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto font-semibold border-brand-border bg-white text-brand-navy hover:bg-brand-bg-light"
                  leftIcon={<Compass className="h-4.5 w-4.5 text-brand-blue" />}
                >
                  Explore Other Services
                </Button>
              </Link>
            </div>
          </div>

          {/* Image Column */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative aspect-4/3 sm:aspect-5/4 rounded-2xl overflow-hidden border border-brand-border bg-white shadow-xl">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/35 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Decorative Subtle Frame */}
              <div
                className="hidden sm:block absolute -top-3 -right-3 -bottom-3 -left-3 rounded-2xl border-2 border-brand-blue/15 -z-10"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
