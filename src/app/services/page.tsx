import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Wrench, ShieldCheck, Calendar } from "lucide-react";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/Button";
import { routes } from "@/config/routes";
import { servicesDataMap } from "@/data/servicesData";

export const metadata: Metadata = {
  title: "RO Water Purifier Services",
  description:
    "Explore our complete range of RO water purifier services: repair, installation, maintenance, filter replacement, and RO membrane replacement.",
  alternates: {
    canonical: "https://no1roservice.in/services",
  },
  openGraph: {
    title: "RO Water Purifier Services | No.1 RO Service",
    description:
      "Explore professional RO water purifier repair, installation, maintenance, filter replacement, and membrane replacement services.",
    url: "https://no1roservice.in/services",
    siteName: "No.1 RO Service",
    type: "website",
  },
};

export default function ServicesIndexPage() {
  const servicesList = Object.values(servicesDataMap);

  return (
    <>
      {/* Services Directory Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F4F8FC] via-white to-white py-16 sm:py-20 border-b border-brand-border/60">
        <Container size="xl">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#CFE6F8] bg-[#EAF5FC] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-blue shadow-xs">
              <ShieldCheck className="h-3.5 w-3.5 text-brand-blue" />
              <span>OUR SERVICES</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-brand-navy leading-tight">
              Complete RO Water Purifier Services
            </h1>

            <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
              From troubleshooting sudden leaks and routine filter changes to full system installations and membrane replacements, explore our dedicated services for pure, safe drinking water.
            </p>
          </div>
        </Container>
      </section>

      {/* Services Cards Listing */}
      <section className="py-16 sm:py-20 bg-brand-bg-light/40">
        <Container size="xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {servicesList.map((service) => (
              <article
                key={service.id}
                className="group flex flex-col h-full rounded-2xl border border-brand-border bg-white shadow-card hover:shadow-card-hover transition-all duration-200 overflow-hidden"
              >
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-brand-bg-light">
                  <Image
                    src={service.heroImage}
                    alt={service.heroImageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/35 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="flex flex-col flex-1 p-6 justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-brand-blue tracking-wider uppercase">
                      {service.eyebrow}
                    </span>
                    <h2 className="text-xl font-bold text-brand-navy group-hover:text-brand-blue transition-colors">
                      {service.h1}
                    </h2>
                    <p className="text-sm text-brand-muted leading-relaxed line-clamp-3">
                      {service.heroDescription}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-brand-border/60 flex items-center justify-between">
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-blue group-hover:text-brand-navy transition-colors"
                    >
                      <span>Explore Service</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-1" />
                    </Link>

                    <Link href={routes.booking}>
                      <span className="text-xs font-semibold text-brand-muted hover:text-brand-blue transition-colors">
                        Book
                      </span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Bottom Conversion Card */}
          <div className="mt-14 sm:mt-16 rounded-3xl border border-brand-border bg-white p-8 sm:p-12 shadow-card text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">
              Need Help With Your RO Water Purifier?
            </h2>
            <p className="text-sm sm:text-base text-brand-muted max-w-xl mx-auto">
              Tell us about your purifier and the service you need. Our team will coordinate your service request.
            </p>
            <div className="pt-2 flex justify-center">
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
