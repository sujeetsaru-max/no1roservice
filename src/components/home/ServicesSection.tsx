import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Wrench,
  Settings,
  ClipboardCheck,
  Filter,
  Droplets,
  Building2,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/Button";
import { routes } from "@/config/routes";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
}

const servicesData: ServiceItem[] = [
  {
    id: "ro-repair",
    title: "RO Repair",
    description:
      "Get assistance with common RO purifier issues, including water leakage, low water flow, unusual noise and pump-related problems.",
    image: "/images/services/service-ro-repair.jpg",
    alt: "Skilled technician repairing domestic RO water purifier pump and components",
    icon: Wrench,
    href: routes.services.repair,
  },
  {
    id: "ro-installation",
    title: "RO Installation",
    description:
      "Get help with installing your new water purifier, including mounting, connections and initial setup.",
    image: "/images/services/service-ro-installation.jpg",
    alt: "Technician mounting and installing an RO water purifier onto kitchen tiles",
    icon: Settings,
    href: routes.services.installation,
  },
  {
    id: "ro-maintenance",
    title: "RO Maintenance",
    description:
      "Regular maintenance helps maintain purifier performance and identify potential issues.",
    image: "/images/hero/hero-purification-technology.jpg",
    alt: "Multi-stage RO purification technology inspection and periodic maintenance",
    icon: ClipboardCheck,
    href: routes.services.maintenance,
  },
  {
    id: "filter-replacement",
    title: "Filter Replacement",
    description:
      "Replace worn or clogged sediment and carbon filters to support effective water purification.",
    image: "/images/services/service-filter-replacement.jpg",
    alt: "Replacement of cylindrical sediment and activated carbon water filter candles",
    icon: Filter,
    href: routes.services.filterReplacement,
  },
  {
    id: "membrane-replacement",
    title: "RO Membrane Replacement",
    description:
      "Get assistance with checking and replacing RO membranes when required.",
    image: "/images/services/service-membrane-replacement.jpg",
    alt: "Inserting high-grade thin-film composite RO membrane cartridge",
    icon: Droplets,
    href: routes.services.membraneReplacement,
  },
  {
    id: "commercial-ro",
    title: "Commercial RO Solutions",
    description:
      "Explore water purification and maintenance solutions for commercial and higher-capacity requirements.",
    image: "/images/hero/hero-clean-water-glass.jpg",
    alt: "Pure water solutions for commercial establishments and high-capacity facilities",
    icon: Building2,
    href: routes.services.index,
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-16 sm:py-20 lg:py-24 bg-brand-bg-light/50 border-t border-brand-border/60"
    >
      <Container size="xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-[#CFE6F8] bg-[#EAF5FC] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-blue shadow-xs">
            <span>WHAT WE OFFER</span>
          </div>

          <h2
            id="services-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-brand-navy leading-tight"
          >
            Complete RO Water Purifier Services
          </h2>

          <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
            From installation and repairs to regular maintenance, explore
            service solutions to help keep your RO water purifier working
            efficiently.
          </p>
        </div>

        {/* Services Cards Grid: 3 cols desktop, 2 cols tablet, 1 col mobile */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service) => {
            const IconComponent = service.icon;

            return (
              <article
                key={service.id}
                className="group flex flex-col h-full rounded-2xl border border-brand-border bg-white shadow-card hover:shadow-card-hover transition-all duration-200 overflow-hidden"
              >
                {/* Top Image Showcase */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-brand-bg-light">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Floating Icon Badge */}
                  <div
                    className="absolute top-3 left-3 flex h-9 w-9 items-center justify-center rounded-lg bg-white/95 backdrop-blur-xs text-brand-blue border border-brand-border shadow-xs transition-colors group-hover:bg-brand-blue group-hover:text-white"
                    aria-hidden="true"
                  >
                    <IconComponent className="h-4.5 w-4.5" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="flex flex-col flex-1 p-5 sm:p-6 justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-bold text-brand-navy group-hover:text-brand-blue transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-brand-muted leading-relaxed line-clamp-3">
                      {service.description}
                    </p>
                  </div>

                  {/* Card Footer Link */}
                  <div className="pt-4 border-t border-brand-border/60">
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-brand-blue group-hover:text-brand-navy transition-colors focus:outline-none focus-visible:underline"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Section Bottom CTA Banner */}
        <div className="mt-14 sm:mt-16 rounded-2xl border border-brand-border bg-white p-6 sm:p-10 shadow-card text-center max-w-3xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold text-brand-navy">
            Need Help With Your RO Water Purifier?
          </h3>
          <p className="mt-2 text-sm text-brand-muted max-w-xl mx-auto">
            Explore our services or get started with a service booking.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href={routes.booking} className="w-full sm:w-auto">
              <Button
                size="md"
                className="w-full sm:w-auto font-bold shadow-xs"
                rightIcon={<ArrowRight className="h-4 w-4" />}
              >
                Book a Service
              </Button>
            </Link>

            <Link href={routes.services.index} className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="md"
                className="w-full sm:w-auto font-semibold border-brand-border bg-white text-brand-navy hover:bg-brand-bg-light"
              >
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
