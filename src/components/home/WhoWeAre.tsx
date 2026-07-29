import { Reveal, Parallax } from "@/components/motion/Reveal";
import { foundations, values, company } from "@/lib/site";
import studentAsset from "@/assets/student-living.jpg";

export function WhoWeAre() {
  return (
    <section id="who-we-are" className="shell py-24 lg:py-36">
      <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
        <div className="lg:pt-2">
          <Reveal>
            <p className="eyebrow text-muted-foreground">Who we are</p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
              {values.map((v) => (
                <span key={v} className="text-sm font-medium text-active">
                  {v}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.14}>
            <div className="mt-10 aspect-[4/5] w-full overflow-hidden bg-surface lg:max-w-sm">
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
            <p className="display-lg text-core">
              We don’t just maintain facilities. We enable experiences.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lede mt-8 max-w-2xl">
              Kunnected FM operates with a clear purpose — to ensure every space across campus
              functions seamlessly, efficiently and reliably. Through integrated systems,
              proactive management and continuous improvement, we create an environment where
              people can focus, perform and thrive.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-px bg-hairline sm:grid-cols-2">
            {foundations.map((f, i) => (
              <Reveal key={f.n} delay={0.06 * i} className="bg-background p-8">
                <span className="font-display text-xs tracking-[0.18em] text-active">
                  {f.n}
                </span>
                <h3 className="mt-5 text-xl text-core">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <p className="mt-14 max-w-xl border-l-2 border-active pl-6 font-display text-lg leading-snug tracking-tight text-core">
              {company.tagline}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const reasons = [
  {
    n: "01",
    title: "24/7 response, not 24/7 promises",
    body: "A staffed helpdesk with defined escalation paths and resolution commitments — measured, reported, reviewed.",
  },
  {
    n: "02",
    title: "Preventive by default",
    body: "Planned maintenance regimes retire failures before they reach a student’s room, a lecture theatre or an exam week.",
  },
  {
    n: "03",
    title: "Student satisfaction as the metric",
    body: "Our performance is judged where it matters — fewer complaints, faster fixes, calmer campuses, reassured parents.",
  },
  {
    n: "04",
    title: "Compliance without chasing",
    body: "Fire, electrical and mechanical statutory regimes tracked centrally, with evidence ready before anyone asks.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="border-y border-hairline bg-surface">
      <div className="shell py-24 lg:py-32">
        <Reveal>
          <p className="eyebrow text-muted-foreground">Why Kunnected FM</p>
        </Reveal>
        <div className="mt-14 space-y-px">
          {reasons.map((r, i) => (
            <Reveal key={r.n} delay={0.05 * i}>
              <div className="grid items-baseline gap-4 border-t border-hairline py-9 lg:grid-cols-[6rem_1fr_1.1fr] lg:gap-10">
                <span className="font-display text-sm tracking-[0.18em] text-active">
                  {r.n}
                </span>
                <h3 className="display-md text-core lg:pr-8">{r.title}</h3>
                <p className="max-w-xl text-sm leading-relaxed text-muted-foreground lg:text-base">
                  {r.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
