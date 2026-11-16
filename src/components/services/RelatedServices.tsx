import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Layers } from "lucide-react";
import { Container } from "@/components/common/Container";
import { servicesDataMap } from "@/data/servicesData";

interface RelatedServicesProps {
  relatedServiceIds: string[];
}

export function RelatedServices({ relatedServiceIds }: RelatedServicesProps) {
  const relatedServices = relatedServiceIds
    .map((id) => servicesDataMap[id])
    .filter(Boolean);

  if (relatedServices.length === 0) return null;

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-brand-border/60">
      <Container size="xl">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-[#CFE6F8] bg-[#EAF5FC] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-blue shadow-xs">
              <Layers className="h-3.5 w-3.5 text-brand-blue" />
              <span>EXPLORE MORE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-brand-navy">
              Related RO Services
            </h2>
            <p className="text-sm text-brand-muted">
              Other water purifier service solutions that may support your household needs.
            </p>
          </div>

          <div>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-blue hover:text-brand-navy transition-colors"
            >
              <span>View All Services</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* 3 Related Cards Grid */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {relatedServices.map((service) => (
            <article
              key={service.id}
              className="group flex flex-col h-full rounded-2xl border border-brand-border bg-white shadow-card hover:shadow-card-hover transition-all duration-200 overflow-hidden"
            >
              <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-brand-bg-light">
                <Image
                  src={service.heroImage}
                  alt={service.heroImageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/30 via-transparent to-transparent pointer-events-none" />
              </div>

              <div className="flex flex-col flex-1 p-5 sm:p-6 justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-brand-navy group-hover:text-brand-blue transition-colors">
                    {service.h1}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed line-clamp-2">
                    {service.heroDescription}
                  </p>
                </div>

                <div className="pt-3 border-t border-brand-border/60">
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-brand-blue group-hover:text-brand-navy transition-colors"
                  >
                    <span>Read Details</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
