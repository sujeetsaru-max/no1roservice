"use client";

import React, { useEffect } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/Button";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="flex-1 flex items-center justify-center py-24 bg-brand-bg-light">
      <Container size="sm" className="text-center space-y-6">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-rose-50 text-rose-600 border border-rose-200 shadow-card">
          <AlertTriangle className="h-8 w-8" />
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-brand-navy">
            Something went wrong
          </h1>
          <p className="text-sm text-brand-muted max-w-md mx-auto">
            An unexpected error occurred while loading this page. Our technical team has been notified.
          </p>
        </div>
        <div className="flex justify-center">
          <Button
            onClick={() => reset()}
            leftIcon={<RefreshCw className="h-4 w-4" />}
          >
            Try Again
          </Button>
        </div>
      </Container>
    </div>
  );
}
