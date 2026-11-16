import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, ChevronRight, ShieldCheck, Tag } from "lucide-react";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/Button";
import { routes } from "@/config/routes";

interface BrandHeroProps {
  brandName: string;
  badge: string;
  tagline: string;
  heroImage: string;
  heroImageAlt: string;
}

export function BrandHero({
  brandName,
  badge,
  tagline,
  heroImage,
  heroImageAlt,
}: BrandHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F4F8FC] via-white to-white py-12 sm:py-16 lg:py-20 border-b border-brand-border/60">
      <Container size="xl">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-1.5 text-xs text-brand-muted">
            <li>
              <Link href={routes.home} className="hover:text-brand-blue transition-colors">
                Home
              </Link>
            </li>
            <li>
              <ChevronRight className="h-3.5 w-3.5 text-brand-muted/60" />
            </li>
            <li>
              <Link href={routes.brands} className="hover:text-brand-blue transition-colors">
                RO Brands
              </Link>
            </li>
            <li>
              <ChevronRight className="h-3.5 w-3.5 text-brand-muted/60" />
            </li>
            <li className="font-semibold text-brand-navy" aria-current="page">
              {brandName}
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Content Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#CFE6F8] bg-[#EAF5FC] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-blue shadow-xs">
              <ShieldCheck className="h-3.5 w-3.5 text-brand-blue" />
              <span>{brandName} RO Service & Support</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-brand-navy leading-tight">
              Expert Service & Repair for{" "}
              <span className="bg-gradient-to-r from-brand-blue to-brand-aqua bg-clip-text text-transparent">
                {brandName}
              </span>{" "}
              Water Purifiers
            </h1>

            <p className="text-base sm:text-lg text-brand-text/80 leading-relaxed max-w-2xl">
              {tagline}. Reliable diagnostics, genuine-compatible filter replacements, leak repair, and routine maintenance for domestic and commercial {brandName} purifiers.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1 text-xs font-medium text-brand-muted">
              <span className="inline-flex items-center gap-1.5 bg-brand-bg-light border border-brand-border px-3 py-1.5 rounded-lg text-brand-navy font-semibold">
                <Tag className="h-3.5 w-3.5 text-brand-blue" />
                {badge}
              </span>
              <span className="bg-white border border-brand-border px-3 py-1.5 rounded-lg">
                Multi-Stage Filtration Care
              </span>
              <span className="bg-white border border-brand-border px-3 py-1.5 rounded-lg">
                Independent Service Provider
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
                  Book {brandName} Service
                </Button>
              </Link>

              <Link href={routes.brands} className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto font-semibold border-brand-border bg-white text-brand-navy hover:bg-brand-bg-light"
                >
                  Explore All Brands
                </Button>
              </Link>
            </div>
          </div>

          {/* Image Column */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative aspect-4/3 sm:aspect-5/4 rounded-2xl overflow-hidden border border-brand-border bg-white shadow-xl">
                <Image
                  src={heroImage}
                  alt={heroImageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/35 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Decorative Frame */}
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
