import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, ChevronRight, MapPin, ShieldCheck } from "lucide-react";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/Button";
import { routes } from "@/config/routes";
import { LocationRecord } from "@/data/locationsData";

interface LocationHeroProps {
  location: LocationRecord;
}

export function LocationHero({ location }: LocationHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F4F8FC] via-white to-white py-12 sm:py-16 lg:py-20 border-b border-brand-border/60">
      <Container size="xl">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-1.5 text-xs text-brand-muted flex-wrap">
            <li>
              <Link href={routes.home} className="hover:text-brand-blue transition-colors">
                Home
              </Link>
            </li>
            <li>
              <ChevronRight className="h-3.5 w-3.5 text-brand-muted/60" />
            </li>
            <li>
              <Link href={routes.locations} className="hover:text-brand-blue transition-colors">
                Locations
              </Link>
            </li>
            {location.parentSlug && (
              <>
                <li>
                  <ChevronRight className="h-3.5 w-3.5 text-brand-muted/60" />
                </li>
                <li>
                  <Link
                    href={`/locations/${location.parentSlug}`}
                    className="hover:text-brand-blue transition-colors capitalize"
                  >
                    {location.parentSlug.replace("-", " ")}
                  </Link>
                </li>
              </>
            )}
            <li>
              <ChevronRight className="h-3.5 w-3.5 text-brand-muted/60" />
            </li>
            <li className="font-semibold text-brand-navy" aria-current="page">
              {location.name}
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Content Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#CFE6F8] bg-[#EAF5FC] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-blue shadow-xs">
              <MapPin className="h-3.5 w-3.5 text-brand-blue" />
              <span>{location.serviceAvailability.label}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-brand-navy leading-tight">
              {location.h1}
            </h1>

            <p className="text-base sm:text-lg text-brand-text/80 leading-relaxed max-w-2xl">
              {location.introduction}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1 text-xs font-medium text-brand-muted">
              <span className="bg-white border border-brand-border px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-2xs font-semibold text-brand-navy">
                <ShieldCheck className="h-3.5 w-3.5 text-brand-blue" />
                Verified Service Area
              </span>
              <span className="bg-white border border-brand-border px-3 py-1.5 rounded-lg shadow-2xs">
                Domestic & Commercial RO Support
              </span>
              <span className="bg-white border border-brand-border px-3 py-1.5 rounded-lg shadow-2xs">
                All Major Brands Serviced
              </span>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Link href={routes.booking} className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto font-bold shadow-xs px-6"
                  leftIcon={<Calendar className="h-4.5 w-4.5 text-white" />}
                  rightIcon={<ArrowRight className="h-4.5 w-4.5" />}
                >
                  Book Service in {location.name}
                </Button>
              </Link>

              <Link href={routes.locations} className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto font-semibold border-brand-border bg-white text-brand-navy hover:bg-brand-bg-light"
                >
                  Explore All Locations
                </Button>
              </Link>
            </div>
          </div>

          {/* Visual Column */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative aspect-4/3 sm:aspect-5/4 rounded-2xl overflow-hidden border border-brand-border bg-white shadow-xl">
                <Image
                  src="/images/hero/hero-clean-water-glass.jpg"
                  alt={`Pure drinking water service delivery in ${location.name}`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/35 via-transparent to-transparent pointer-events-none" />
              </div>
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
