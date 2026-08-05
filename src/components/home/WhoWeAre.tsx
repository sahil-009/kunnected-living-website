import { motion, useReducedMotion } from "motion/react";
import { Reveal, Parallax } from "@/components/motion/Reveal";
import { company, foundations, keyStrengths, promise, vision } from "@/lib/site";
import studentAsset from "@/assets/student-living.jpg";

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

export function WhoWeAre() {
  return (
    <section id="who-we-are" className="shell py-24 lg:py-36">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <div className="lg:pt-2">
          <Reveal>
            <p className="eyebrow text-muted-foreground">About Kunnected FM</p>
            <SectionUnderline />
          </Reveal>
          <Reveal delay={0.14}>
            <div className="mt-10 aspect-[4/5] w-full ru-image bg-surface lg:max-w-md">
              <Parallax distance={34} className="h-full w-full">
                <img
                  src={studentAsset}
                  alt="A bright student accommodation lounge with natural light"
                  width={1408}
                  height={1008}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </Parallax>
            </div>
          </Reveal>
        </div>

        <div>
          <Reveal>
            <h2 className="display-lg text-white">We don&apos;t just maintain facilities. We enable experiences.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lede mt-8 max-w-2xl">{company.purposeBody}</p>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="body-secondary mt-5 max-w-2xl">{company.purposeExtended}</p>
          </Reveal>

          <div className="mt-14 grid gap-10 sm:grid-cols-2">
            <Reveal delay={0.08}>
              <div>
                <h3 className="text-xl font-bold text-white">Our Vision</h3>
                <ul className="mt-5 space-y-3">
                  {vision.map((item) => (
                    <li key={item} className="flex items-start gap-3 body-text">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-active" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div>
                <h3 className="text-xl font-bold text-white">Our Promise</h3>
                <ul className="mt-5 space-y-3">
                  {promise.map((item) => (
                    <li key={item} className="flex items-start gap-3 body-text">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-active" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {foundations.map((f, i) => (
              <Reveal key={f.n} delay={0.06 * i} className="bg-surface p-8 rounded-lg border border-hairline gold-glow">
                <span className="font-display text-sm font-semibold tracking-[0.18em] text-active">{f.n}</span>
                <h3 className="mt-4 text-xl font-bold text-white">{f.title}</h3>
                <p className="body-secondary mt-3">{f.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function WhyChooseUs() {
  return (
    <section className="border-y border-hairline bg-light-mesh relative overflow-hidden">
      {/* Floating Animated Circles */}
      <div className="blur-circle-1 -left-20 -top-20 pointer-events-none" />
      <div className="blur-circle-2 -right-40 -bottom-40 pointer-events-none" />

      <div className="shell relative z-10 py-24 lg:py-32">
        <Reveal>
          <p className="eyebrow text-slate-500">Why Choose Kunnected FM</p>
          <SectionUnderline />
        </Reveal>
        <Reveal delay={0.08}>
          <p className="lede mt-8 max-w-3xl text-slate-800">{company.usp}</p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {keyStrengths.map((r, i) => (
            <Reveal key={r.title} delay={0.08 * i}>
              <div className="h-full rounded-xl border border-slate-200/60 bg-white/70 backdrop-blur-md p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <span className="font-display text-sm font-semibold tracking-[0.18em] text-active">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-xl font-bold leading-snug text-[#201A57]">{r.title}</h3>
                <p className="mt-4 text-slate-600 text-sm leading-relaxed">{r.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
