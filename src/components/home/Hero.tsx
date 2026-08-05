import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowDown, Star } from "lucide-react";
import heroAsset from "@/assets/hero-campus.jpg";
import { ArcPattern } from "@/components/brand/Brandmark";
import { LineReveal } from "@/components/motion/Reveal";
import { company } from "@/lib/site";

export function Hero() {
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 900], [0, 160]);
  const fade = useTransform(scrollY, [0, 620], [1, 0]);

  return (
    <section id="top" className="relative h-dvh min-h-[42rem] w-full overflow-hidden bg-core">
      <motion.div style={reduced ? undefined : { y }} className="absolute inset-0 h-[118%]">
        <img
          src={heroAsset}
          alt="A modern university campus at golden hour with a long reflecting pool"
          width={1920}
          height={1088}
          fetchPriority="high"
          className="h-full w-full object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-[#201A57]/65" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#201A57]/95 via-transparent to-[#201A57]/50" />
      <ArcPattern className="text-[#3F80CF]" opacity={0.06} />

      <div className="shell relative flex h-full flex-col justify-end pb-20 lg:pb-28">
        <motion.p
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="eyebrow text-[#3F80CF]"
        >
          {company.purpose}
        </motion.p>

        <h1 className="display-xl mt-6 max-w-[16ch] text-white">
          <LineReveal
            delay={0.25}
            lines={["Smarter Campus", "Operations"]}
            lineClassName="text-white font-extrabold"
          />
        </h1>

        <div className="mt-10 grid gap-10 border-t border-white/10 pt-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <motion.p
            initial={reduced ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl text-lg leading-relaxed text-white/85 sm:text-xl"
          >
            {company.subheadline}
          </motion.p>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-3"
          >
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-active bg-active px-7 py-4 text-base font-semibold text-white transition-all hover:bg-active/90 hover:shadow-[0_0_20px_rgba(63,128,207,0.35)]"
            >
              Explore Services
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 text-base font-semibold text-white transition-all hover:bg-white/10"
            >
              View Our Work
            </a>
          </motion.div>
        </div>

        <motion.p
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-8 max-w-2xl text-base leading-relaxed text-white/75"
        >
          {company.tagline}
        </motion.p>
      </div>

      <motion.div
        style={reduced ? undefined : { opacity: fade }}
        className="absolute bottom-7 right-6 hidden items-center gap-2 text-[0.6875rem] tracking-[0.18em] text-white/50 uppercase lg:flex"
      >
        Scroll <ArrowDown className="h-3.5 w-3.5" />
      </motion.div>
    </section>
  );
}

export function ClientLogos() {
  return (
    <section className="border-b border-hairline bg-background py-10 relative overflow-hidden select-none">
      <div className="shell flex flex-col gap-8 md:flex-row md:items-center md:justify-between relative z-10">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#3F80CF]">
            Campus Operations &amp; Trust
          </p>
          <div className="mt-2 flex items-center gap-1 text-amber-400">
            <span className="text-xs font-bold text-white/90 mr-2">5.0 Star Rated Facilities Management</span>
            <Star className="h-3.5 w-3.5 fill-current" />
            <Star className="h-3.5 w-3.5 fill-current" />
            <Star className="h-3.5 w-3.5 fill-current" />
            <Star className="h-3.5 w-3.5 fill-current" />
            <Star className="h-3.5 w-3.5 fill-current" />
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-12 gap-y-6 opacity-75">
          <div className="flex flex-col">
            <span className="font-display text-sm font-black tracking-widest text-white">
              KHALIFA
            </span>
            <span className="text-[9px] font-bold tracking-[0.25em] text-white/40">
              UNIVERSITY
            </span>
          </div>
          <div className="h-8 w-px bg-white/10 hidden md:block" />
          <div className="flex flex-col">
            <span className="font-display text-sm font-black tracking-widest text-white">
              ADEK
            </span>
            <span className="text-[9px] font-bold tracking-[0.25em] text-white/40">
              ABU DHABI
            </span>
          </div>
          <div className="h-8 w-px bg-white/10 hidden md:block" />
          <div className="flex flex-col">
            <span className="font-display text-sm font-black tracking-widest text-white">
              MUBADALA
            </span>
            <span className="text-[9px] font-bold tracking-[0.25em] text-white/40">
              ACADEMICS
            </span>
          </div>
          <div className="h-8 w-px bg-white/10 hidden md:block" />
          <div className="flex flex-col">
            <span className="font-display text-sm font-black tracking-widest text-white">
              KU RESIDENCES
            </span>
            <span className="text-[9px] font-bold tracking-[0.25em] text-white/40">
              PORTFOLIO
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
