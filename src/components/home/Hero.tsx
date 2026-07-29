import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight, ArrowDown } from "lucide-react";
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

      <div className="absolute inset-0 bg-core/58" />
      <div className="absolute inset-0 bg-gradient-to-t from-core/80 via-transparent to-core/45" />
      <ArcPattern className="text-white" opacity={0.07} />

      <div className="shell relative flex h-full flex-col justify-end pb-20 lg:pb-28">
        <motion.p
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="eyebrow text-white/60"
        >
          {company.purpose}
        </motion.p>

        <h1 className="display-xl mt-6 max-w-[19ch] text-white">
          <LineReveal
            delay={0.25}
            lines={["Campuses that", "never miss", "a beat."]}
            lineClassName="text-white"
          />
        </h1>

        <div className="mt-10 grid gap-10 border-t border-white/20 pt-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <motion.p
            initial={reduced ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl text-base leading-relaxed text-white/75 sm:text-lg"
          >
            Integrated facilities management for universities and student accommodation —
            engineered around uptime, safety and the daily experience of the people who live
            and learn here.
          </motion.p>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-3"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-core transition-colors hover:bg-active hover:text-white"
            >
              Request a consultation
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#services"
              className="glass-cta inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white/20"
            >
              Explore services
            </a>
          </motion.div>
        </div>
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
