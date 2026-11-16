import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, MapPin, ShieldCheck } from "lucide-react";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/Button";
import { routes } from "@/config/routes";
import { getPublishedLocations } from "@/data/locationsData";
import { LocationsDirectorySearch } from "@/components/locations/LocationsDirectorySearch";
import { ServiceFaq } from "@/components/services/ServiceFaq";

export const metadata: Metadata = {
  title: "RO Water Purifier Service Areas & Locations",
  description:
    "Explore verified doorstep RO water purifier service, repair, and filter replacement coverage across Delhi, Uttar Pradesh, Noida, Ghaziabad, and key localities.",
  alternates: {
    canonical: "https://no1roservice.in/locations",
  },
  openGraph: {
    title: "RO Water Purifier Service Areas | No.1 RO Service",
    description:
      "Explore verified doorstep RO water purifier repair, installation, and maintenance coverage across our active cities and sectors.",
    url: "https://no1roservice.in/locations",
    siteName: "No.1 RO Service",
    type: "website",
  },
};

const locationDirectoryFaqs = [
  {
    question: "How do you verify whether a location has active service coverage?",
    answer:
      "We only publish location profiles where technician coverage, transport feasibility, and spare part logistics are actively confirmed. Unverified areas remain in draft status until service capacity is established.",
  },
  {
    question: "Do you provide doorstep RO service in apartment societies?",
    answer:
      "Yes, our technicians regularly visit high-rise apartments, builder floors, and gated housing societies across our active sectors and cities.",
  },
  {
    question: "Can I request service if my sector or colony is not listed on this page?",
    answer:
      "If you reside in a nearby sector within our covered cities (e.g. Delhi, Noida, Ghaziabad), you can submit a service booking with your address. Our team will verify technician availability in your neighborhood.",
  },
  {
    question: "Are your technicians equipped to handle both domestic and commercial RO units?",
    answer:
      "Yes. We support domestic wall-mounted and under-sink purifiers as well as 25 to 50 LPH commercial water purifiers in offices, clinics, and educational centers.",
  },
  {
    question: "How do I schedule an RO service appointment for my location?",
    answer:
      "Click 'Book a Service', enter your location, select your purifier brand, and describe the issue. Our support team coordinates an appointment with you.",
  },
];

export default function LocationsDirectoryPage() {
  const publishedLocations = getPublishedLocations();

  return (
    <>
      {/* 1. Directory Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F4F8FC] via-white to-white py-14 sm:py-18 lg:py-22 border-b border-brand-border/60">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#CFE6F8] bg-[#EAF5FC] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-blue shadow-xs">
                <MapPin className="h-3.5 w-3.5 text-brand-blue" />
                <span>VERIFIED SERVICE DIRECTORY</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-brand-navy leading-tight">
                RO Water Purifier{" "}
                <span className="bg-gradient-to-r from-brand-blue to-brand-aqua bg-clip-text text-transparent">
                  Service Areas
                </span>
              </h1>

              <p className="text-base sm:text-lg text-brand-text/80 leading-relaxed max-w-2xl">
                Reliable water purification care delivered to your doorstep. Explore our active service areas across Delhi NCR, Western Uttar Pradesh, and key residential sectors, with genuine local water insights and verified technician coverage.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-medium text-brand-muted">
                <span className="bg-white border border-brand-border px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-2xs font-semibold text-brand-navy">
                  <ShieldCheck className="h-3.5 w-3.5 text-brand-blue" />
                  Quality Verified Locations Only
                </span>
                <span className="bg-white border border-brand-border px-3 py-1.5 rounded-lg shadow-2xs">
                  Doorstep Technician Scheduling
                </span>
              </div>
            </div>

            {/* Visual Column */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative aspect-4/3 sm:aspect-5/4 rounded-2xl overflow-hidden border border-brand-border bg-white shadow-xl">
                  <Image
                    src="/images/services/service-ro-installation.jpg"
                    alt="Technician providing doorstep RO purifier installation and service"
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
          <LocationsDirectorySearch locations={publishedLocations} />
        </Container>
      </section>

      {/* 3. Directory FAQs */}
      <ServiceFaq faqs={locationDirectoryFaqs} serviceTitle="Location Service Coverage" />

      {/* 4. Bottom Booking Conversion Card */}
      <section className="py-16 sm:py-20 bg-brand-bg-light/80">
        <Container size="xl">
          <div className="relative overflow-hidden rounded-3xl border border-brand-border bg-gradient-to-br from-white via-brand-bg-light to-[#EAF5FC] p-8 sm:p-12 lg:p-16 shadow-lg text-center max-w-4xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-[#CFE6F8] bg-white px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-blue shadow-xs mx-auto">
              <span>SERVICE BOOKING</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-navy tracking-tight">
              Ready to Book RO Service in Your Area?
            </h2>

            <p className="text-sm sm:text-base text-brand-muted max-w-xl mx-auto leading-relaxed">
              Tell us your city or locality, select your purifier brand, and describe the service you need. Our team will coordinate your service booking.
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
