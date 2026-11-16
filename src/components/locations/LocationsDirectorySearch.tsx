"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowRight, MapPin, Search, ShieldCheck } from "lucide-react";
import { LocationRecord } from "@/data/locationsData";

interface LocationsDirectorySearchProps {
  locations: LocationRecord[];
}

export function LocationsDirectorySearch({
  locations,
}: LocationsDirectorySearchProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState<string>("all");

  const filteredLocations = useMemo(() => {
    return locations.filter((loc) => {
      // Safety: Only published locations
      if (loc.status !== "published") return false;

      const matchesSearch =
        loc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        loc.stateName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (loc.cityName &&
          loc.cityName.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (loc.coverageLocalities &&
          loc.coverageLocalities.some((cov) =>
            cov.toLowerCase().includes(searchTerm.toLowerCase())
          ));

      const matchesType =
        selectedType === "all" ||
        (selectedType === "state-ut" &&
          (loc.type === "state" || loc.type === "union-territory")) ||
        (selectedType === "city" && loc.type === "city") ||
        (selectedType === "locality" && loc.type === "locality");

      return matchesSearch && matchesType;
    });
  }, [locations, searchTerm, selectedType]);

  return (
    <div className="space-y-8">
      {/* Search Bar & Filters */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 rounded-2xl border border-brand-border bg-white p-4 sm:p-5 shadow-xs">
        {/* Search Input */}
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-muted" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by city, sector or locality (e.g. Noida, Hauz Khas)..."
            className="w-full rounded-xl border border-brand-border bg-brand-bg-light/50 py-2.5 pl-10 pr-4 text-sm text-brand-navy placeholder:text-brand-muted focus:border-brand-blue focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          <button
            type="button"
            onClick={() => setSelectedType("all")}
            className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
              selectedType === "all"
                ? "bg-brand-blue text-white shadow-xs"
                : "bg-brand-bg-light text-brand-navy/80 hover:bg-slate-200"
            }`}
          >
            All Locations
          </button>
          <button
            type="button"
            onClick={() => setSelectedType("city")}
            className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
              selectedType === "city"
                ? "bg-brand-blue text-white shadow-xs"
                : "bg-brand-bg-light text-brand-navy/80 hover:bg-slate-200"
            }`}
          >
            Cities
          </button>
          <button
            type="button"
            onClick={() => setSelectedType("locality")}
            className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
              selectedType === "locality"
                ? "bg-brand-blue text-white shadow-xs"
                : "bg-brand-bg-light text-brand-navy/80 hover:bg-slate-200"
            }`}
          >
            Localities & Sectors
          </button>
          <button
            type="button"
            onClick={() => setSelectedType("state-ut")}
            className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
              selectedType === "state-ut"
                ? "bg-brand-blue text-white shadow-xs"
                : "bg-brand-bg-light text-brand-navy/80 hover:bg-slate-200"
            }`}
          >
            States & UTs
          </button>
        </div>
      </div>

      {/* Results Count Header */}
      <div className="flex items-center justify-between text-xs text-brand-muted font-medium px-1">
        <span>
          Showing <strong className="text-brand-navy">{filteredLocations.length}</strong> verified published service areas
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

      {/* Grid of Verified Published Locations */}
      {filteredLocations.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredLocations.map((loc) => (
            <article
              key={loc.id}
              className="group flex flex-col justify-between rounded-2xl border border-brand-border bg-white p-6 shadow-card hover:shadow-card-hover transition-all duration-200"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-brand-blue bg-[#EAF5FC] px-2.5 py-1 rounded-md border border-[#CFE6F8] uppercase tracking-wider">
                    <MapPin className="h-3 w-3" />
                    {loc.type.replace("-", " ")}
                  </span>
                  <span className="text-xs font-medium text-brand-muted">
                    {loc.stateName}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-brand-navy group-hover:text-brand-blue transition-colors">
                  {loc.name}
                </h2>

                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed line-clamp-3">
                  {loc.introduction}
                </p>

                {/* Localities Count or Sample Tag */}
                {loc.coverageLocalities && loc.coverageLocalities.length > 0 && (
                  <div className="pt-2">
                    <p className="text-[11px] font-semibold text-brand-navy/80 mb-1">
                      Key Sectors & Hubs:
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {loc.coverageLocalities.slice(0, 3).map((cov, idx) => (
                        <span
                          key={idx}
                          className="bg-brand-bg-light text-brand-navy/80 text-[10px] font-medium px-2 py-0.5 rounded border border-brand-border/60"
                        >
                          {cov}
                        </span>
                      ))}
                      {loc.coverageLocalities.length > 3 && (
                        <span className="text-[10px] font-semibold text-brand-muted px-1.5 py-0.5">
                          +{loc.coverageLocalities.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Link */}
              <div className="pt-4 mt-4 border-t border-brand-border/60 flex items-center justify-between">
                <Link
                  href={loc.path}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-brand-blue group-hover:text-brand-navy transition-colors"
                >
                  <span>Explore {loc.name} Service Details</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-brand-border bg-white p-12 text-center space-y-3">
          <ShieldCheck className="h-10 w-10 text-brand-muted mx-auto" />
          <h3 className="text-lg font-bold text-brand-navy">No Service Areas Found</h3>
          <p className="text-sm text-brand-muted max-w-md mx-auto">
            We currently publish only verified service locations with confirmed technician coverage.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setSearchTerm("");
                setSelectedType("all");
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
