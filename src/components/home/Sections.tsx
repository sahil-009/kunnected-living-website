import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Counter } from "@/components/motion/Counter";
import { ArcPattern } from "@/components/brand/Brandmark";
import { company } from "@/lib/site";
import caseAsset from "@/assets/case-study.jpg.asset.json";
import sustainabilityAsset from "@/assets/sustainability.jpg.asset.json";

export function CaseStudy() {
  return (
    <section className="shell py-24 lg:py-36">
      <Reveal>
        <p className="eyebrow text-muted-foreground">Selected work</p>
      </Reveal>
      <Reveal delay={0.08}>
        <a href="#contact" className="group mt-10 block">
          <div className="aspect-[21/10] w-full overflow-hidden bg-surface">
            <img
              src={caseAsset.url}
              alt="A modern university residence building lit from within at blue hour"
              width={1600}
              height={1000}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
            />
          </div>
          <div className="mt-8 grid gap-6 border-t border-hairline pt-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h3 className="display-md max-w-[18ch] text-core">
                Mobilising a 1,200-bed residence in a single summer window.
              </h3>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
                Full asset capture, planned maintenance build-out and helpdesk go-live between
                the last exam and the first arrival — with zero handover snags carried into
                term.
              </p>
            </div>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-core transition-colors group-hover:text-active">
              Read the case study
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </a>
      </Reveal>
    </section>
  );
}

const green = [
  { value: 28, suffix: "%", label: "Typical energy reduction from optimised HVAC scheduling" },
  { value: 100, suffix: "%", label: "Assets on lifecycle registers before renewal planning" },
  { value: 40, suffix: "%", label: "Consumables shifted to low-impact alternatives" },
];

export function Sustainability() {
  return (
    <section id="sustainability" className="border-y border-hairline bg-surface">
      <div className="shell grid gap-16 py-24 lg:grid-cols-[1fr_1fr] lg:gap-24 lg:py-36">
        <div>
          <Reveal>
            <p className="eyebrow text-muted-foreground">Sustainability</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="display-lg mt-7 max-w-[14ch] text-core">
              Efficiency is the quietest form of sustainability.
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="lede mt-8 max-w-lg">
              Green operations start with knowing exactly what an estate consumes, and when.
              Lifecycle management, calibrated plant and disciplined scheduling do more than
              any single retrofit.
            </p>
          </Reveal>

          <div className="mt-14 space-y-px">
            {green.map((g, i) => (
              <Reveal key={g.label} delay={0.06 * i}>
                <div className="grid grid-cols-[minmax(0,7rem)_1fr] items-baseline gap-6 border-t border-hairline py-6">
                  <span className="font-display text-3xl leading-none font-medium tracking-[-0.03em] text-active">
                    <Counter to={g.value} suffix={g.suffix} />
                  </span>
                  <span className="text-sm leading-relaxed text-muted-foreground">
                    {g.label}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1} className="lg:self-end">
          <div className="aspect-[5/4] w-full overflow-hidden bg-background">
            <img
              src={sustainabilityAsset.url}
              alt="Solar panels on the roof of a modern campus building"
              width={1400}
              height={1000}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const quotes = [
  {
    quote:
      "The difference is that issues get closed, not logged. Our residence team spends its time on students again.",
    name: "Head of Campus Services",
    org: "University residence portfolio",
  },
  {
    quote:
      "Mobilisation was the calmest handover we have run. Every asset was on the register before we opened the doors.",
    name: "Estates Director",
    org: "Higher education client",
  },
  {
    quote:
      "Compliance evidence arrives before we ask for it. That alone changed how we plan the academic year.",
    name: "Facilities Manager",
    org: "Student accommodation operator",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const go = (d: number) => setI((p) => (p + d + quotes.length) % quotes.length);

  return (
    <section className="shell py-24 lg:py-36">
      <div className="grid gap-12 lg:grid-cols-[auto_1fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow text-muted-foreground lg:pt-4">In their words</p>
        </Reveal>
        <div>
          <div className="relative min-h-[15rem] sm:min-h-[13rem]">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="display-md max-w-[22ch] text-core sm:max-w-[26ch]">
                  “{quotes[i].quote}”
                </p>
                <footer className="mt-8 text-sm text-muted-foreground">
                  {quotes[i].name} · {quotes[i].org}
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center gap-3 border-t border-hairline pt-8">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-hairline text-core transition-colors hover:border-active hover:text-active"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-hairline text-core transition-colors hover:border-active hover:text-active"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
            <span className="ml-3 text-xs tracking-[0.14em] text-muted-foreground">
              {String(i + 1).padStart(2, "0")} / {String(quotes.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

const articles = [
  {
    category: "Operations",
    title: "What a summer mobilisation actually costs you in September",
    read: "6 min read",
    lead: true,
  },
  { category: "Energy", title: "Chiller scheduling: the cheapest carbon you will ever save", read: "4 min read" },
  { category: "Compliance", title: "Fire safety evidence that survives an unannounced audit", read: "5 min read" },
  { category: "Student life", title: "Designing a helpdesk students will actually use", read: "3 min read" },
];

export function Insights() {
  const [lead, ...rest] = articles;
  return (
    <section id="insights" className="border-t border-hairline">
      <div className="shell py-24 lg:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <p className="eyebrow text-muted-foreground">News &amp; insights</p>
          </Reveal>
          <Reveal delay={0.06}>
            <a
              href="#insights"
              className="inline-flex items-center gap-2 text-sm font-medium text-core hover:text-active"
            >
              All articles <ArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-px bg-hairline lg:grid-cols-[1.35fr_1fr]">
          <Reveal className="bg-background">
            <a href="#insights" className="group flex h-full flex-col justify-between p-8 lg:p-12">
              <div>
                <span className="eyebrow text-active">{lead.category}</span>
                <h3 className="display-md mt-6 max-w-[16ch] text-core">{lead.title}</h3>
              </div>
              <p className="mt-12 text-xs tracking-[0.14em] text-muted-foreground uppercase">
                {lead.read}
              </p>
            </a>
          </Reveal>

          <div className="grid gap-px bg-hairline">
            {rest.map((a, i) => (
              <Reveal key={a.title} delay={0.06 * i} className="bg-background">
                <a href="#insights" className="group block p-8">
                  <span className="eyebrow text-active">{a.category}</span>
                  <h3 className="mt-4 max-w-[28ch] text-lg leading-snug text-core transition-colors group-hover:text-active">
                    {a.title}
                  </h3>
                  <p className="mt-4 text-xs tracking-[0.14em] text-muted-foreground uppercase">
                    {a.read}
                  </p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section id="contact" className="relative overflow-hidden bg-core text-white">
      <ArcPattern className="text-white" opacity={0.07} />
      <div className="shell relative py-28 lg:py-40">
        <Reveal>
          <p className="eyebrow text-white/55">{company.purpose}</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="display-xl mt-8 max-w-[14ch] text-white">
            Let’s talk about your campus.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-10 border-t border-white/20 pt-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal delay={0.12}>
            <address className="space-y-1.5 text-sm not-italic text-white/65">
              <p>
                {company.address.line1}, {company.address.line2}
              </p>
              <p>
                <a href={`tel:${company.tel.replace(/\s/g, "")}`} className="hover:text-white">
                  T {company.tel}
                </a>{" "}
                ·{" "}
                <a href={`mailto:${company.email}`} className="hover:text-white">
                  {company.email}
                </a>
              </p>
              <p>Sunday – Thursday, 08:00 – 18:00 · Emergency cover 24/7</p>
            </address>
          </Reveal>
          <Reveal delay={0.16}>
            <a
              href={`mailto:${company.email}`}
              className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-medium text-core transition-colors hover:bg-active hover:text-white"
            >
              Request a consultation
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
