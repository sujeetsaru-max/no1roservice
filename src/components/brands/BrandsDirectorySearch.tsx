"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Search, ShieldCheck, Tag } from "lucide-react";
import { BrandDetail } from "@/data/brandsData";
import { routes } from "@/config/routes";

interface BrandsDirectorySearchProps {
  brands: BrandDetail[];
}

export function BrandsDirectorySearch({ brands }: BrandsDirectorySearchProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("all");

  const availableTags = useMemo(() => {
    const tags = new Set<string>();
    brands.forEach((b) => tags.add(b.badge));
    return ["all", ...Array.from(tags)];
  }, [brands]);

  const filteredBrands = useMemo(() => {
    return brands.filter((brand) => {
      const matchesSearch =
        brand.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        brand.popularModels.some((m) =>
          m.toLowerCase().includes(searchTerm.toLowerCase())
        ) ||
        brand.tagline.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesTag =
        selectedTag === "all" || brand.badge === selectedTag;

      return matchesSearch && matchesTag;
    });
  }, [brands, searchTerm, selectedTag]);

  return (
    <div className="space-y-8">
      {/* Search and Tag Filter Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 rounded-2xl border border-brand-border bg-white p-4 sm:p-5 shadow-xs">
        {/* Search Input */}
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-muted" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by brand or model (e.g. Kent, Grand, Z8)..."
            className="w-full rounded-xl border border-brand-border bg-brand-bg-light/50 py-2.5 pl-10 pr-4 text-sm text-brand-navy placeholder:text-brand-muted focus:border-brand-blue focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all"
          />
        </div>

        {/* Quick Technology Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
          {availableTags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setSelectedTag(tag)}
              className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                selectedTag === tag
                  ? "bg-brand-blue text-white shadow-xs"
                  : "bg-brand-bg-light text-brand-navy/80 hover:bg-slate-200"
              }`}
            >
              {tag === "all" ? "All Technologies" : tag}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between text-xs text-brand-muted font-medium px-1">
        <span>
          Showing <strong className="text-brand-navy">{filteredBrands.length}</strong> of{" "}
          {brands.length} supported brands
        </span>
        {searchTerm && (
          <button
            type="button"
            onClick={() => setSearchTerm("")}
            className="text-brand-blue hover:underline cursor-pointer"
          >
            Clear Search
          </button>
        )}
      </div>

      {/* Brands Cards Grid */}
      {filteredBrands.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredBrands.map((brand) => (
            <article
              key={brand.id}
              className="group flex flex-col h-full rounded-2xl border border-brand-border bg-white shadow-card hover:shadow-card-hover transition-all duration-200 overflow-hidden"
            >
              {/* Product Visual */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-brand-bg-light">
                <Image
                  src={brand.heroImage}
                  alt={brand.heroImageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 via-transparent to-transparent pointer-events-none" />
                <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs border border-brand-border px-2.5 py-1 rounded-md text-[11px] font-bold text-brand-navy shadow-xs flex items-center gap-1">
                  <Tag className="h-3 w-3 text-brand-blue" />
                  {brand.badge}
                </span>
              </div>

              {/* Card Body */}
              <div className="flex flex-col flex-1 p-6 justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-brand-navy group-hover:text-brand-blue transition-colors">
                      {brand.name}
                    </h2>
                    <span className="text-[11px] font-semibold text-brand-blue bg-[#EAF5FC] px-2.5 py-0.5 rounded-full border border-[#CFE6F8]">
                      RO Care
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed line-clamp-2">
                    {brand.tagline}
                  </p>

                  {/* Popular Models Sample */}
                  <div className="pt-1">
                    <p className="text-[11px] font-bold text-brand-navy/70 uppercase tracking-wider mb-1.5">
                      Supported Models:
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {brand.popularModels.slice(0, 3).map((m, idx) => (
                        <span
                          key={idx}
                          className="bg-brand-bg-light text-brand-navy/80 text-[10px] font-medium px-2 py-0.5 rounded border border-brand-border/60"
                        >
                          {m}
                        </span>
                      ))}
                      {brand.popularModels.length > 3 && (
                        <span className="text-[10px] font-semibold text-brand-muted px-1.5 py-0.5">
                          +{brand.popularModels.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="pt-4 border-t border-brand-border/60 flex items-center justify-between">
                  <Link
                    href={brand.href}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-brand-blue group-hover:text-brand-navy transition-colors"
                  >
                    <span>View {brand.name} Service Details</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-1" />
                  </Link>

                  <Link
                    href={routes.booking}
                    className="text-xs font-semibold text-brand-muted hover:text-brand-blue transition-colors"
                  >
                    Book
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-brand-border bg-white p-12 text-center space-y-3">
          <ShieldCheck className="h-10 w-10 text-brand-muted mx-auto" />
          <h3 className="text-lg font-bold text-brand-navy">No Matching Brands Found</h3>
          <p className="text-sm text-brand-muted max-w-md mx-auto">
            We support all major domestic and commercial water purifiers. Try searching for another brand or contact us directly.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setSearchTerm("");
                setSelectedTag("all");
              }}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue hover:underline cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
