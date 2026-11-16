"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { Container } from "@/components/common/Container";
import { cn } from "@/lib/utils/cn";

interface FaqItem {
  question: string;
  answer: string;
}

interface LocationFaqProps {
  locationName: string;
  faqs: FaqItem[];
}

export function LocationFaq({ locationName, faqs }: LocationFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!faqs || faqs.length === 0) return null;

  const toggleFaq = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="py-16 sm:py-20 bg-brand-bg-light/50 border-b border-brand-border/60">
      <Container size="xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-[#CFE6F8] bg-[#EAF5FC] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-blue shadow-xs">
            <HelpCircle className="h-3.5 w-3.5 text-brand-blue" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-brand-navy leading-tight">
            Frequently Asked Questions – {locationName}
          </h2>

          <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
            Helpful answers to common RO service and booking questions in {locationName}.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="mt-12 sm:mt-14 max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={cn(
                  "rounded-2xl border transition-all duration-200 overflow-hidden bg-white",
                  isOpen
                    ? "border-brand-blue/40 shadow-card"
                    : "border-brand-border shadow-xs hover:border-brand-border"
                )}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-brand-navy pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={cn(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-transform duration-200",
                      isOpen
                        ? "bg-[#EAF5FC] text-brand-blue rotate-180"
                        : "bg-brand-bg-light text-brand-muted rotate-0"
                    )}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 border-t border-brand-border/40">
                    <p className="mt-3 text-xs sm:text-sm text-brand-text/80 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
