import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Layers, ShieldCheck } from "lucide-react";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/Button";
import { routes } from "@/config/routes";
import { brandsDataMap } from "@/data/brandsData";
import { BrandsDirectorySearch } from "@/components/brands/BrandsDirectorySearch";
import { ServiceFaq } from "@/components/services/ServiceFaq";

export const metadata: Metadata = {
  title: "RO Water Purifier Brands We Cover",
  description:
    "Explore independent service, repair, and filter replacement support for Kent, Aquaguard, Pureit, Livpure, AO Smith, Blue Star, LG, Havells, Whirlpool, and Panasonic water purifiers.",
  alternates: {
    canonical: "https://no1roservice.in/brands",
  },
  openGraph: {
    title: "RO Water Purifier Brands We Cover | No.1 RO Service",
    description:
      "Explore independent service, repair, and filter replacement support across all leading domestic and commercial RO water purifier brands.",
    url: "https://no1roservice.in/brands",
    siteName: "No.1 RO Service",
    type: "website",
  },
};

const directoryFaqs = [
  {
    question: "Do you provide service for all major water purifier brands?",
    answer:
      "Yes. We support all leading residential and commercial RO water purifier brands, including Kent, Aquaguard, Pureit, Livpure, AO Smith, Blue Star, LG, Havells, Whirlpool, and Panasonic.",
  },
  {
    question: "Are your replacement filters compatible with proprietary brand purifiers?",
    answer:
      "We provide premium, certified food-grade compatible filter cartridges, sediment candles, and RO membranes engineered to match the flow, dimensions, and filtration standards of your specific brand and model.",
  },
  {
    question: "Are you an authorized service center for these manufacturers?",
    answer:
      "No. No.1 RO Service is an independent RO service provider. We are not officially affiliated with or authorized by any of the listed manufacturers. All brand trademarks belong to their respective owners.",
  },
  {
    question: "Can you fix error codes or alarm beeps on digital purifiers?",
    answer:
      "Yes. Our technicians are experienced in diagnosing electronic alarm buzzers, UV fail alerts, filter-life warning codes, and touch panel issues across multiple brands.",
  },
  {
    question: "How do I book service for my specific purifier model?",
    answer:
      "Simply click 'Book a Service', select your brand and reported issue, and share your contact details. Our team coordinates service options suited to your purifier model.",
  },
];

export default function BrandsDirectoryPage() {
  const brandsList = Object.values(brandsDataMap);

  return (
    <>
      {/* 1. Directory Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F4F8FC] via-white to-white py-14 sm:py-18 lg:py-22 border-b border-brand-border/60">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#CFE6F8] bg-[#EAF5FC] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-blue shadow-xs">
                <Layers className="h-3.5 w-3.5 text-brand-blue" />
                <span>BRAND DIRECTORY</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-brand-navy leading-tight">
                RO Water Purifier{" "}
                <span className="bg-gradient-to-r from-brand-blue to-brand-aqua bg-clip-text text-transparent">
                  Brands We Cover
                </span>
              </h1>

              <p className="text-base sm:text-lg text-brand-text/80 leading-relaxed max-w-2xl">
                Every water purifier brand utilizes distinct filtration technologies, from mineral retention valves and active copper infusion to high-recovery Green RO membranes. Explore brand-specific service support, troubleshooting guides, and compatible filter solutions.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-medium text-brand-muted">
                <span className="bg-white border border-brand-border px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-2xs">
                  <ShieldCheck className="h-3.5 w-3.5 text-brand-blue" />
                  Independent Multi-Brand Care
                </span>
                <span className="bg-white border border-brand-border px-3 py-1.5 rounded-lg shadow-2xs">
                  10+ Leading Brands Supported
                </span>
              </div>
            </div>

            {/* Visual Column */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative aspect-4/3 sm:aspect-5/4 rounded-2xl overflow-hidden border border-brand-border bg-white shadow-xl">
                  <Image
                    src="/images/hero/hero-purifier-showcase.jpg"
                    alt="Multi-brand domestic and commercial RO water purifiers inspected in modern kitchen"
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

      {/* 2. Interactive Searchable Directory Section */}
      <section className="py-16 sm:py-20 bg-brand-bg-light/40 border-b border-brand-border/60">
        <Container size="xl">
          <BrandsDirectorySearch brands={brandsList} />
        </Container>
      </section>

      {/* 3. Brands Directory FAQ Section */}
      <ServiceFaq faqs={directoryFaqs} serviceTitle="RO Purifier Brands" />

      {/* 4. Bottom Booking Conversion Card */}
      <section className="py-16 sm:py-20 bg-brand-bg-light/80">
        <Container size="xl">
          <div className="relative overflow-hidden rounded-3xl border border-brand-border bg-gradient-to-br from-white via-brand-bg-light to-[#EAF5FC] p-8 sm:p-12 lg:p-16 shadow-lg text-center max-w-4xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-[#CFE6F8] bg-white px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-blue shadow-xs mx-auto">
              <span>SERVICE BOOKING</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-navy tracking-tight">
              Ready to Book Service for Your Water Purifier?
            </h2>

            <p className="text-sm sm:text-base text-brand-muted max-w-xl mx-auto leading-relaxed">
              Tell us about your purifier brand and the service you need. Our team will coordinate your service booking.
            </p>

            <div className="pt-4 flex justify-center">
              <Link href={routes.booking}>
                <Button
                  size="lg"
                  className="font-bold shadow-xs px-8"
                  leftIcon={<Calendar className="h-4.5 w-4.5 text-white" />}
                  rightIcon={<ArrowRight className="h-4.5 w-4.5" />}
                >
                  Book a Service
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
