import React from "react";
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex-1 flex items-center justify-center py-24 bg-brand-bg-light">
      <Container size="sm" className="text-center space-y-6">
        <div className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-[#EAF5FC] text-brand-blue font-black text-3xl shadow-card">
          404
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">
            Page Not Found
          </h1>
          <p className="text-sm text-brand-muted max-w-md mx-auto">
            The page you are looking for might have been moved, removed, or is temporarily unavailable.
          </p>
        </div>
        <div className="flex items-center justify-center gap-3">
          <Link href="/">
            <Button leftIcon={<Home className="h-4 w-4" />}>
              Back to Home
            </Button>
          </Link>
          <Link href="/services">
            <Button variant="outline" leftIcon={<ArrowLeft className="h-4 w-4" />}>
              View RO Services
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}
