import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { BrandLogo } from "@/components/common/BrandLogo";
import { Container } from "@/components/common/Container";
import { CurrentYear } from "@/components/common/CurrentYear";
import { siteConfig } from "@/config/site";
import { footerQuickLinks, footerOurServices } from "@/config/navigation";
import { routes } from "@/config/routes";

export function Footer() {
  const phone = siteConfig.support.phone?.trim();
  const email = siteConfig.support.email?.trim();
  const address = siteConfig.support.address?.trim();
  const workingHours = siteConfig.support.workingHours?.trim();

  const hasContactDetails = Boolean(phone || email || address || workingHours);

  return (
    <footer className="bg-brand-navy text-slate-300 pt-16 pb-8 border-t border-[#0E2C4D]">
      <Container>
        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-[#1E4E80]">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <BrandLogo variant="light" size="md" showTagline={false} />
            <p className="text-sm font-semibold text-brand-aqua">
              {siteConfig.tagline}
            </p>
            <p className="text-xs text-slate-300 leading-relaxed pr-2">
              {siteConfig.description}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-xs">
              {footerQuickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-slate-300 hover:text-white hover:underline underline-offset-4 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Our Services
            </h3>
            <ul className="space-y-2.5 text-xs">
              {footerOurServices.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-slate-300 hover:text-white hover:underline underline-offset-4 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact (Only displays configured information) */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Contact Us
            </h3>

            {hasContactDetails ? (
              <div className="space-y-3 text-xs">
                {phone && (
                  <a
                    href={`tel:${phone.replace(/\s+/g, "")}`}
                    className="flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors"
                    aria-label={`Call customer care at ${phone}`}
                  >
                    <Phone className="h-4 w-4 text-brand-aqua shrink-0" />
                    <span>{phone}</span>
                  </a>
                )}

                {email && (
                  <a
                    href={`mailto:${email}`}
                    className="flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors"
                    aria-label={`Send email to ${email}`}
                  >
                    <Mail className="h-4 w-4 text-brand-aqua shrink-0" />
                    <span>{email}</span>
                  </a>
                )}

                {address && (
                  <div className="flex items-start gap-2.5 text-slate-300">
                    <MapPin className="h-4 w-4 text-brand-aqua shrink-0 mt-0.5" />
                    <span>{address}</span>
                  </div>
                )}

                {workingHours && (
                  <div className="flex items-start gap-2.5 text-slate-300">
                    <Clock className="h-4 w-4 text-brand-aqua shrink-0 mt-0.5" />
                    <span>{workingHours}</span>
                  </div>
                )}
              </div>
            ) : (
              <p className="text-xs text-slate-400">
                Contact information will be updated shortly. Please use the booking form.
              </p>
            )}
          </div>
        </div>

        {/* Bottom Footer Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © <CurrentYear /> {siteConfig.name} ({siteConfig.domain}). All Rights Reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href={routes.privacy}
              className="hover:text-white hover:underline underline-offset-4 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href={routes.terms}
              className="hover:text-white hover:underline underline-offset-4 transition-colors"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
