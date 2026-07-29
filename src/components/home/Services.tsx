import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { services, industries } from "@/lib/site";
import engineerAsset from "@/assets/engineer.jpg.asset.json";

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-36">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <p className="eyebrow text-muted-foreground">Core services</p>
            <h2 className="display-lg mt-7 max-w-[16ch] text-core">
              Eleven service lines. One accountable team.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Self-delivered where it matters most, integrated everywhere else — so nothing
              falls between contracts.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mt-16 overflow-x-auto pb-4 [scrollbar-width:thin]">
        <ul className="flex w-max items-stretch gap-px bg-hairline px-6 lg:px-16">
          {services.map((s, i) => (
            <li key={s.slug} className="flex">
              <Reveal delay={Math.min(i, 5) * 0.05} className="flex w-[19rem] sm:w-[22rem]">
                <a
                  href="#contact"
                  className="group flex w-full flex-col justify-between bg-background p-8 transition-colors hover:bg-core"
                >
                  <div>
                    <span className="font-display text-xs tracking-[0.18em] text-active">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-6 text-2xl leading-tight text-core transition-colors group-hover:text-white">
                      {s.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-white/65">
                      {s.summary}
                    </p>
                  </div>
                  <span className="mt-14 inline-flex items-center gap-2 text-sm font-medium text-core transition-colors group-hover:text-white">
                    Learn more
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Industries() {
  return (
    <section id="industries" className="relative overflow-hidden bg-core">
      <img
        src={engineerAsset.url}
        alt=""
        aria-hidden="true"
        width={1400}
        height={1100}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />
      <div className="shell relative py-24 lg:py-32">
        <Reveal>
          <p className="eyebrow text-white/55">Industries we serve</p>
        </Reveal>
        <div className="mt-14 grid gap-px bg-white/15 md:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind, i) => (
            <Reveal key={ind.title} delay={0.06 * i} className="bg-core p-8 lg:p-10">
              <h3 className="text-xl leading-tight text-white lg:text-2xl">{ind.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-white/60">{ind.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
