import { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "motion/react";
import { Reveal } from "@/components/motion/Reveal";
import { services, industries } from "@/lib/site";
import engineerAsset from "@/assets/engineer.jpg";
import controlRoomAsset from "@/assets/control-room.jpg";
import studentAsset from "@/assets/student-living.jpg";
import hvacAsset from "@/assets/hvac.jpg";
import electricalAsset from "@/assets/electrical.jpg";
import caseStudyAsset from "@/assets/case-study.jpg";
import { ArrowUpRight } from "lucide-react";

const serviceImages = {
  "control-room": controlRoomAsset,
  "student-living": studentAsset,
  hvac: hvacAsset,
  electrical: electricalAsset,
  engineer: engineerAsset,
  "case-study": caseStudyAsset,
} as const;

const categories = [
  { id: "all", label: "All Services" },
  { id: "hard", label: "Hard Services" },
  { id: "soft", label: "Soft Services" },
  { id: "mgmt", label: "Operations & Management" },
] as const;

const serviceCategories: Record<string, "hard" | "soft" | "mgmt"> = {
  "facility-management": "mgmt",
  "cleaning": "soft",
  "hvac": "hard",
  "electrical": "hard",
  "mechanical": "hard",
  "fire-safety": "hard",
  "preventive-maintenance": "mgmt",
  "asset-management": "mgmt",
  "project-management": "mgmt",
  "operations-management": "mgmt",
  "emergency-maintenance": "mgmt",
};

export function Services() {
  const reduced = useReducedMotion();
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredServices = services.filter((s) => {
    if (activeTab === "all") return true;
    return serviceCategories[s.slug] === activeTab;
  });

  return (
    <section id="services" className="py-24 lg:py-36 border-t border-hairline bg-background">
      <div className="shell">
        <Reveal>
          <p className="eyebrow text-muted-foreground">Our Services</p>
          <span className="section-underline mt-5 block" />
        </Reveal>
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <Reveal delay={0.06}>
            <h2 className="display-lg max-w-[20ch] text-white">
              Complete integrated facilities management for campus estates
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="body-secondary max-w-md">
              We deliver complete facilities management solutions for universities and student
              accommodation. Our team combines reliability, functionality, and quality
              craftsmanship to create environments that are safe, practical, and tailored to
              campus life.
            </p>
          </Reveal>
        </div>

        {/* Tab Filters */}
        <div className="mt-12 flex flex-wrap gap-2 border-b border-hairline pb-6">
          {categories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveTab(cat.id)}
                className={`relative px-6 py-3 text-sm font-semibold tracking-wide transition-all rounded-full ${
                  isActive
                    ? "text-white bg-active"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Services Grid */}
        <motion.ul
          layout
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((s, i) => (
              <motion.li
                layout
                initial={reduced ? false : { opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                key={s.slug}
              >
                <motion.a
                  href="#contact"
                  whileHover={reduced ? undefined : { y: -8 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="group block h-full overflow-hidden rounded-lg border border-hairline bg-[#121217] gold-glow"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-[#16161c] relative">
                    <motion.img
                      src={serviceImages[s.imageKey]}
                      alt={s.title}
                      width={800}
                      height={600}
                      loading="lazy"
                      whileHover={reduced ? undefined : { scale: 1.06 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="h-full w-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121217] via-transparent to-transparent opacity-60" />
                  </div>
                  <div className="p-7">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-xl font-bold leading-snug text-white transition-colors group-hover:text-active">
                        {s.title}
                      </h3>
                      <ArrowUpRight className="h-5 w-5 text-white/40 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-active" />
                    </div>
                    <p className="body-secondary mt-3 text-sm leading-relaxed">{s.summary}</p>
                  </div>
                </motion.a>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>
    </section>
  );
}

export function Industries() {
  return (
    <section id="industries" className="relative overflow-hidden border-t border-hairline bg-[#0a0a0d]">
      <img
        src={engineerAsset}
        alt=""
        aria-hidden="true"
        width={1400}
        height={1100}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-10 pointer-events-none"
      />
      <div className="shell relative py-24 lg:py-32">
        <Reveal>
          <p className="eyebrow text-muted-foreground">Industries we serve</p>
          <span className="section-underline mt-5 block" />
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="display-md mt-8 max-w-[20ch] text-white">
            Built for universities and the students who live there
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind, i) => (
            <Reveal key={ind.title} delay={0.06 * i}>
              <div className="h-full bg-[#121217] p-8 lg:p-10 border border-hairline gold-glow rounded-lg">
                <h3 className="text-xl font-bold leading-tight text-white lg:text-2xl">{ind.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{ind.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
