import React from "react";
import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex-1 min-h-[50vh] flex flex-col items-center justify-center gap-3">
      <Loader2 className="h-8 w-8 animate-spin text-brand-blue" />
      <span className="text-xs font-semibold uppercase tracking-wider text-brand-muted">
        Loading No.1 RO Service...
      </span>
    </div>
  );
}
