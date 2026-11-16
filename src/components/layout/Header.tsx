"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Phone,
  Mail,
  Clock,
  Menu,
  X,
  ChevronDown,
  Wrench,
  Settings,
  Sparkles,
  Layers,
  ArrowRight,
  MessageSquare,
} from "lucide-react";
import { BrandLogo } from "@/components/common/BrandLogo";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { headerNav } from "@/config/navigation";
import { routes } from "@/config/routes";
import { cn } from "@/lib/utils/cn";

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownTriggerRef = useRef<HTMLButtonElement>(null);

  const phone = siteConfig.support.phone?.trim();
  const email = siteConfig.support.email?.trim();
  const whatsapp = siteConfig.support.whatsapp?.trim();
  const workingHours = siteConfig.support.workingHours?.trim();

  // Handle scroll effect for elevation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  // Handle outside click & escape key for dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        dropdownTriggerRef.current &&
        !dropdownTriggerRef.current.contains(event.target as Node)
      ) {
        setServicesDropdownOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setServicesDropdownOpen(false);
        setMobileMenuOpen(false);
        dropdownTriggerRef.current?.focus();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // Helper to map icons for service dropdown items
  const getServiceIcon = (label: string) => {
    switch (label) {
      case "RO Repair":
        return <Wrench className="h-4 w-4 text-brand-blue" />;
      case "RO Installation":
        return <Settings className="h-4 w-4 text-brand-blue" />;
      case "RO Maintenance":
        return <Sparkles className="h-4 w-4 text-brand-aqua" />;
      case "Filter Replacement":
        return <Layers className="h-4 w-4 text-brand-blue" />;
      case "RO Membrane Replacement":
        return <Sparkles className="h-4 w-4 text-brand-blue" />;
      default:
        return <Wrench className="h-4 w-4 text-brand-blue" />;
    }
  };

  const hasTopBarContent = Boolean(phone || email || workingHours);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        isScrolled
          ? "border-b border-brand-border bg-white/95 backdrop-blur-md shadow-card"
          : "border-b border-brand-border/60 bg-white"
      )}
    >
      {/* 1. Top Utility Bar (Only rendered if details are configured) */}
      {hasTopBarContent && (
        <div className="bg-brand-navy text-white text-xs py-2 px-4 border-b border-[#0E2C4D]">
          <Container className="flex flex-col sm:flex-row items-center justify-between gap-2">
            <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
              {workingHours && (
                <span className="inline-flex items-center gap-1.5 text-slate-300">
                  <Clock className="h-3.5 w-3.5 text-brand-aqua" />
                  <span>{workingHours}</span>
                </span>
              )}
              {email && (
                <a
                  href={`mailto:${email}`}
                  className="hidden md:inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
                  aria-label={`Send email to ${email}`}
                >
                  <Mail className="h-3.5 w-3.5 text-brand-aqua" />
                  <span>{email}</span>
                </a>
              )}
            </div>

            <div className="flex items-center gap-4 text-xs font-semibold">
              {phone && (
                <a
                  href={`tel:${phone.replace(/\s+/g, "")}`}
                  className="inline-flex items-center gap-1.5 text-white hover:text-brand-aqua transition-colors"
                  aria-label={`Call support helpline at ${phone}`}
                >
                  <Phone className="h-3.5 w-3.5 text-brand-aqua" />
                  <span>Helpline: {phone}</span>
                </a>
              )}
              {whatsapp && phone && (
                <span className="text-slate-500 hidden sm:inline">|</span>
              )}
              {whatsapp && (
                <a
                  href={`https://wa.me/${whatsapp.replace(/\D/g, "")}?text=Hi,%20I%20need%20RO%20water%20purifier%20service`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 text-brand-aqua hover:text-white transition-colors"
                  aria-label="Contact support on WhatsApp"
                >
                  <MessageSquare className="h-3.5 w-3.5" />
                  <span>WhatsApp</span>
                </a>
              )}
            </div>
          </Container>
        </div>
      )}

      {/* 2. Main Navigation Bar */}
      <div className="py-3 sm:py-3.5">
        <Container className="flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <BrandLogo
            layout="horizontal"
            size="md"
            showTagline={false}
            className="shrink-0"
          />

          {/* Desktop Navigation Links */}
          <nav
            className="hidden lg:flex items-center gap-1 xl:gap-2"
            aria-label="Main Navigation"
          >
            {headerNav.map((item) => {
              if (item.children) {
                const isServicesActive =
                  pathname.startsWith("/services") ||
                  item.children.some((child) => pathname === child.href);

                return (
                  <div
                    key={item.label}
                    className="relative group"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <button
                      ref={dropdownTriggerRef}
                      type="button"
                      onClick={() =>
                        setServicesDropdownOpen(!servicesDropdownOpen)
                      }
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setServicesDropdownOpen(!servicesDropdownOpen);
                        }
                      }}
                      className={cn(
                        "inline-flex items-center gap-1 px-3 py-2 text-sm font-semibold rounded-lg transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue",
                        isServicesActive
                          ? "text-brand-blue bg-brand-bg-light"
                          : "text-brand-text hover:text-brand-blue hover:bg-brand-bg-light/80"
                      )}
                      aria-expanded={servicesDropdownOpen}
                      aria-haspopup="true"
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform duration-200 text-brand-muted",
                          servicesDropdownOpen && "rotate-180 text-brand-blue"
                        )}
                        aria-hidden="true"
                      />
                    </button>

                    {/* Accessible Dropdown Menu (Always in DOM for SEO & Keyboard Accessibility, toggled via state & CSS) */}
                    <div
                      ref={dropdownRef}
                      className={cn(
                        "absolute left-0 top-full pt-1.5 w-72 z-50 transition-all duration-150",
                        servicesDropdownOpen
                          ? "opacity-100 pointer-events-auto translate-y-0"
                          : "opacity-0 pointer-events-none -translate-y-1 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0"
                      )}
                      role="menu"
                      aria-orientation="vertical"
                      aria-label="RO Services submenu"
                      aria-hidden={!servicesDropdownOpen}
                    >
                      <div className="rounded-xl border border-brand-border bg-white p-2 shadow-popover">
                        {item.children.map((child) => {
                          const isChildActive = pathname === child.href;

                          return (
                            <Link
                              key={child.label}
                              href={child.href}
                              role="menuitem"
                              tabIndex={servicesDropdownOpen ? 0 : -1}
                              onClick={() => setServicesDropdownOpen(false)}
                              className={cn(
                                "flex items-start gap-3 rounded-lg p-2.5 transition-colors duration-150 group/item",
                                isChildActive
                                  ? "bg-brand-bg-light text-brand-blue"
                                  : "hover:bg-brand-bg-light text-brand-text"
                              )}
                            >
                              <div
                                className={cn(
                                  "mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md border",
                                  isChildActive
                                    ? "border-brand-blue/30 bg-white text-brand-blue"
                                    : "border-brand-border bg-brand-bg-light text-brand-muted group-hover/item:border-brand-blue/30 group-hover/item:text-brand-blue group-hover/item:bg-white"
                                )}
                                aria-hidden="true"
                              >
                                {getServiceIcon(child.label)}
                              </div>
                              <div className="flex flex-col">
                                <span
                                  className={cn(
                                    "text-xs font-bold leading-snug",
                                    isChildActive
                                      ? "text-brand-blue"
                                      : "text-brand-navy group-hover/item:text-brand-blue"
                                  )}
                                >
                                  {child.label}
                                </span>
                                {child.description && (
                                  <span className="text-[11px] text-brand-muted line-clamp-1 mt-0.5">
                                    {child.description}
                                  </span>
                                )}
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }

              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "px-3 py-2 text-sm font-semibold rounded-lg transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue",
                    isActive
                      ? "text-brand-blue bg-brand-bg-light font-bold"
                      : "text-brand-text hover:text-brand-blue hover:bg-brand-bg-light/80"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Secondary CTA: Call Now (Only when phone number is configured) */}
            {phone && (
              <a
                href={`tel:${phone.replace(/\s+/g, "")}`}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-brand-navy bg-brand-bg-light hover:bg-[#EAF1F8] border border-brand-border rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
                aria-label={`Call Support at ${phone}`}
              >
                <Phone className="h-3.5 w-3.5 text-brand-blue" />
                <span>Call Now</span>
              </a>
            )}

            {/* Primary CTA: Book a Service */}
            <Link href={routes.booking}>
              <Button
                size="sm"
                variant="primary"
                rightIcon={<ArrowRight className="h-3.5 w-3.5" />}
              >
                Book a Service
              </Button>
            </Link>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-brand-navy hover:bg-brand-bg-light border border-brand-border focus:outline-none focus:ring-2 focus:ring-brand-blue transition-colors"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </Container>
      </div>

      {/* 3. Mobile Navigation Drawer & Backdrop */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="fixed inset-x-0 top-[var(--header-height,105px)] bottom-0 z-40 bg-brand-navy/30 backdrop-blur-xs lg:hidden animate-in fade-in duration-200"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="max-h-[calc(100vh-105px)] overflow-y-auto bg-white border-t border-brand-border px-5 py-6 shadow-popover animate-in slide-in-from-top-2 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col space-y-1">
              {headerNav.map((item) => {
                if (item.children) {
                  return (
                    <div
                      key={item.label}
                      className="border-b border-brand-border/60 py-2"
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setMobileServicesOpen(!mobileServicesOpen)
                        }
                        className="flex w-full items-center justify-between py-2 text-base font-semibold text-brand-navy hover:text-brand-blue"
                        aria-expanded={mobileServicesOpen}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={cn(
                            "h-5 w-5 text-brand-muted transition-transform duration-200",
                            mobileServicesOpen && "rotate-180 text-brand-blue"
                          )}
                          aria-hidden="true"
                        />
                      </button>

                      {mobileServicesOpen && (
                        <div className="mt-1 pl-3 space-y-1 pb-2 animate-in fade-in duration-150">
                          {item.children.map((child) => {
                            const isChildActive = pathname === child.href;

                            return (
                              <Link
                                key={child.label}
                                href={child.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className={cn(
                                  "flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                                  isChildActive
                                    ? "bg-brand-bg-light text-brand-blue font-bold"
                                    : "text-brand-text hover:bg-brand-bg-light hover:text-brand-blue"
                                )}
                              >
                                <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
                                <span>{child.label}</span>
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                }

                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "block border-b border-brand-border/60 py-3 text-base font-semibold transition-colors",
                      isActive
                        ? "text-brand-blue font-bold"
                        : "text-brand-navy hover:text-brand-blue"
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Drawer Action CTAs */}
            <div className="pt-6 flex flex-col gap-3">
              <Link
                href={routes.booking}
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button className="w-full" size="md">
                  Book a Service
                </Button>
              </Link>

              {phone && (
                <a
                  href={`tel:${phone.replace(/\s+/g, "")}`}
                  className="w-full"
                >
                  <Button
                    variant="outline"
                    className="w-full"
                    leftIcon={<Phone className="h-4 w-4 text-brand-blue" />}
                  >
                    Call Support: {phone}
                  </Button>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
