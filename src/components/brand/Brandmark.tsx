import { cn } from "@/lib/utils";
import kuLogo from "@/assets/ku-gpt.png";

/**
 * KUnnected FM brand lockup using approved logo artwork.
 * White-background variant preferred per client brief.
 */
export function Brandmark({
  className,
  tone = "core",
}: {
  className?: string;
  tone?: "core" | "invert";
}) {
  return (
    <span className={cn("inline-flex items-center gap-3 select-none", className)}>
      <ArcMark className="h-9 w-auto min-w-[2.25rem] shrink-0" tone={tone} />
      <span
        className={cn(
          "font-display text-[1.125rem] leading-none font-semibold tracking-[-0.02em] whitespace-nowrap",
          tone === "invert" ? "text-white" : "text-core",
        )}
      >
        KUnnected
        <span className={cn("ml-1 font-normal", tone === "invert" ? "text-white/70" : "text-core/60")}>
          FM
        </span>
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
      alt="Kunnected FM logo"
      width={180}
      height={48}
      className={cn(
        "h-9 w-auto object-contain",
        tone === "invert" && "brightness-0 invert",
        className,
      )}
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
