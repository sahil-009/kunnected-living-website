import { cn } from "@/lib/utils";
import kuLogo from "@/assets/ku-gpt.png";

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
      <ArcMark className="h-7 w-7 shrink-0" tone={tone} />
      <span className="font-display text-[1.0625rem] leading-none font-medium tracking-[-0.02em] whitespace-nowrap">
        KUnnected
        <span className="ml-1 font-normal opacity-60">FM</span>
      </span>
    </span>
  );
}

/** The KUnnect icon geometry: interlocking arcs = connection, flow, integrated systems. */
export function ArcMark({
  className,
  tone = "core",
}: {
  className?: string;
  tone?: "core" | "invert";
}) {
  return (
    <img
      src={kuLogo}
      alt="Kunnected Logo"
      className={cn(className, tone === "invert" && "brightness-0 invert")}
    />
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
