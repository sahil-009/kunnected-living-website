import { Reveal, Parallax } from "@/components/motion/Reveal";
import { Counter } from "@/components/motion/Counter";
import { ArcPattern } from "@/components/brand/Brandmark";
import controlAsset from "@/assets/control-room.jpg";
import studentAsset from "@/assets/student-living.jpg";

const chips = [
  { label: "Response target", value: "< 30 min" },
  { label: "Planned vs reactive", value: "80 / 20" },
  { label: "Coverage", value: "24 / 7 / 365" },
];

export function Excellence() {
  return (
    <section id="excellence" className="relative overflow-hidden bg-core text-white">
      <ArcPattern className="text-white" opacity={0.06} />
      <div className="shell relative grid gap-16 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:py-36">
        <div>
          <Reveal>
            <p className="eyebrow text-white/55">Operational excellence</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="display-lg mt-7 max-w-[14ch] text-white">
              Intelligent management, visible in real time.
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-8 max-w-lg text-base leading-relaxed text-white/65">
              Data, technology and integrated platforms monitor, optimise and improve
              performance across campus infrastructure — from chiller efficiency to a single
              flickering corridor light.
            </p>
          </Reveal>

          <div className="mt-12 flex flex-wrap gap-3">
            {chips.map((c, i) => (
              <Reveal key={c.label} delay={0.06 * i}>
                <div className="rounded-full border border-white/25 px-5 py-3">
                  <span className="text-xs tracking-[0.14em] text-white/50 uppercase">
                    {c.label}
                  </span>
                  <span className="ml-3 text-sm font-medium text-white">{c.value}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1}>
          <div className="aspect-[4/3] w-full overflow-hidden lg:aspect-[3/4]">
            <Parallax distance={36} className="h-full w-full">
              <img
                src={controlAsset}
                alt="Operators monitoring building management dashboards in a control room at night"
                width={1600}
                height={1008}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </Parallax>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function CampusExperience() {
  return (
    <section className="shell py-24 lg:py-36">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-7 lg:col-start-1">
          <div className="aspect-[16/11] w-full overflow-hidden bg-surface">
            <Parallax distance={30} className="h-full w-full">
              <img
                src={studentAsset}
                alt="Students studying in a warm, well-maintained residence common room"
                width={1408}
                height={1008}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </Parallax>
          </div>
        </Reveal>

        <div className="lg:col-span-4 lg:col-start-9 lg:self-center">
          <Reveal>
            <p className="eyebrow text-muted-foreground">Campus experience</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="display-md mt-7 text-core">
              The best facilities work is the work nobody notices.
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground lg:text-base">
              Hot water at 6am. A cool lecture theatre in August. A lift that never traps
              anyone. Every decision is shaped around the people who use the campus — students
              first, then faculty and staff.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const stats = [
  { value: 24, suffix: "/7", label: "Helpdesk and emergency cover" },
  { value: 30, suffix: " min", label: "Emergency response target" },
  { value: 11, suffix: "", label: "Integrated service lines" },
  { value: 99.5, suffix: "%", decimals: 1, label: "Critical asset availability target" },
];

export function Stats() {
  return (
    <section className="border-y border-hairline bg-surface">
      <div className="shell grid gap-px bg-hairline py-px sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={0.06 * i} className="bg-surface px-2 py-14 lg:px-6">
            <p className="font-display text-5xl leading-none font-medium tracking-[-0.04em] text-core lg:text-6xl">
              <Counter to={s.value} suffix={s.suffix} decimals={s.decimals ?? 0} />
            </p>
            <p className="mt-5 max-w-[22ch] text-sm leading-relaxed text-muted-foreground">
              {s.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
