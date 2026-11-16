import React from "react";
import Link from "next/link";
import { ArrowRight, Calendar, PhoneCall } from "lucide-react";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/Button";
import { routes } from "@/config/routes";
import { siteConfig } from "@/config/site";

interface LocationCtaProps {
  locationName: string;
}

export function LocationCta({ locationName }: LocationCtaProps) {
  const phone = siteConfig.support.phone?.trim();

  return (
    <section className="py-16 sm:py-20 bg-brand-bg-light/80">
      <Container size="xl">
        <div className="relative overflow-hidden rounded-3xl border border-brand-border bg-gradient-to-br from-white via-brand-bg-light to-[#EAF5FC] p-8 sm:p-12 lg:p-16 shadow-lg text-center max-w-4xl mx-auto">
          {/* Subtle Glows */}
          <div
            className="absolute top-0 right-0 -mr-16 -mt-16 h-48 w-48 rounded-full bg-brand-blue/5 blur-2xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 left-0 -ml-16 -mb-16 h-48 w-48 rounded-full bg-brand-aqua/10 blur-2xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 space-y-4">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-[#CFE6F8] bg-white px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-blue shadow-xs mx-auto">
              <span>DOORSTEP SERVICE BOOKING</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-navy tracking-tight">
              Need Water Purifier Service in {locationName}?
            </h2>

            <p className="text-sm sm:text-base text-brand-muted max-w-xl mx-auto leading-relaxed">
              Tell us about your purifier brand, locality and the service you need. Our team will coordinate your service booking.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href={routes.booking} className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto font-bold shadow-xs px-8"
                  leftIcon={<Calendar className="h-4.5 w-4.5 text-white" />}
                  rightIcon={<ArrowRight className="h-4.5 w-4.5" />}
                >
                  Book Service in {locationName}
                </Button>
              </Link>

              {phone && (
                <a href={`tel:${phone.replace(/\s+/g, "")}`} className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto font-semibold border-brand-border bg-white text-brand-navy hover:bg-brand-bg-light"
                    leftIcon={<PhoneCall className="h-4.5 w-4.5 text-brand-blue" />}
                  >
                    Call {phone}
                  </Button>
                </a>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
