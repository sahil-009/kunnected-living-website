import { cn } from "@/lib/utils";

/**
 * Typographic stand-in for the KUnnected FM lockup.
 * Swap the mark + wordmark here when the licensed artwork arrives —
 * clearspace and the 180px minimum digital width are already honoured.
 */
export function Brandmark({
  className,
  tone = "core",
}: {
  className?: string;
  tone?: "core" | "invert";
}) {
  const ink = tone === "invert" ? "text-white" : "text-core";
  return (
    <span className={cn("inline-flex items-center gap-2.5 select-none", ink, className)}>
      <ArcMark className="h-7 w-7 shrink-0" />
      <span className="font-display text-[1.0625rem] leading-none font-medium tracking-[-0.02em] whitespace-nowrap">
        KUnnected
        <span className="ml-1 font-normal opacity-60">FM</span>
      </span>
    </span>
  );
}

/** The KUnnect icon geometry: interlocking arcs = connection, flow, integrated systems. */
export function ArcMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className={className}>
      <path
        d="M24 4a20 20 0 0 1 0 40"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M24 14a10 10 0 0 0 0 20"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        opacity="0.55"
      />
      <circle cx="24" cy="24" r="2.6" fill="currentColor" />
    </svg>
  );
}

/** Pattern 1 / Pattern 2 from the brand book, as a tileable background. */
export function ArcPattern({
  className,
  opacity = 0.08,
}: {
  className?: string;
  opacity?: number;
}) {
  return (
    <svg
      className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
      aria-hidden="true"
      style={{ opacity }}
    >
      <defs>
        <pattern id="kufm-arcs" width="280" height="280" patternUnits="userSpaceOnUse">
          <g fill="none" stroke="currentColor" strokeWidth="1.25">
            <path d="M0 280a280 280 0 0 1 280-280" />
            <path d="M0 280a210 210 0 0 1 210-210" />
            <path d="M0 280a140 140 0 0 1 140-140" />
            <path d="M0 280a70 70 0 0 1 70-70" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#kufm-arcs)" />
    </svg>
  );
}
