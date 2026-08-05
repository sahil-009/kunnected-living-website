import { motion, useReducedMotion } from "motion/react";
import { ClipboardList, Layers, Settings, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { methodology } from "@/lib/site";

const icons = [ClipboardList, Layers, Settings, CheckCircle2];

function SectionUnderline() {
  const reduced = useReducedMotion();
  return (
    <motion.span
      initial={reduced ? false : { scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="section-underline"
    />
  );
}

export function Methodology() {
  const reduced = useReducedMotion();

  return (
    <section id="process" className="border-y border-hairline bg-background">
      <div className="shell py-24 lg:py-36">
        <Reveal>
          <p className="eyebrow text-muted-foreground">Our Methodology</p>
          <SectionUnderline />
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="display-lg mt-8 max-w-[20ch] text-white">
            Accomplish seamless campus operations in 4 simple steps
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="lede mt-6 max-w-3xl">
            Creating a well-managed campus should be a structured and stress-free experience.
            Our streamlined 4-step process ensures every detail is handled with care — from
            understanding your operational vision to executing with precision and handing over
            a campus ready for students.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {methodology.map((step, i) => {
            const Icon = icons[i] ?? ClipboardList;
            return (
              <Reveal key={step.step} delay={0.12 * i}>
                <motion.div
                  whileHover={reduced ? undefined : { y: -6 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="group h-full rounded-lg border border-hairline bg-[#121217] p-8 gold-glow"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display text-sm font-semibold tracking-[0.18em] text-active">
                      {step.step}
                    </span>
                    <Icon className="h-6 w-6 text-active transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold leading-snug text-white transition-colors group-hover:text-active">{step.title}</h3>
                  <p className="body-secondary mt-4">{step.body}</p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
