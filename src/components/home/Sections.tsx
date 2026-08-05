import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { ArcPattern } from "@/components/brand/Brandmark";
import { company, project, projectScope } from "@/lib/site";
import { SectionUnderline } from "@/components/home/Stats";
import caseAsset from "@/assets/case-study.jpg";
import studentAsset from "@/assets/student-living.jpg";
import campusAsset from "@/assets/hero-campus.jpg";

export function CaseStudy() {
  return (
    <section id="projects" className="relative overflow-hidden bg-background py-24 lg:py-36">
      {/* Watermark background */}
      <div className="watermark-bg left-10 top-12 opacity-[0.015] pointer-events-none select-none">
        Khalifa University
      </div>

      <div className="shell relative z-10 grid gap-16 lg:grid-cols-2 lg:gap-24">
        {/* Left Side: Details & Services Grid */}
        <div>
          <Reveal>
            <p className="eyebrow text-muted-foreground">Our Projects & Operations</p>
            <SectionUnderline />
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="display-lg mt-8 text-white">
              Discover our thoughtfully managed campus estates
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="body-secondary mt-6 max-w-xl">
              {project.body}
            </p>
          </Reveal>

          <Reveal delay={0.16} className="mt-8">
            <p className="eyebrow text-active">{project.subtitle}</p>
            <p className="body-text mt-4 leading-relaxed text-white/80">{project.scope}</p>
            <p className="mt-4 text-base font-semibold text-active">{project.completion}</p>
          </Reveal>

          {/* Operational Scope Grid */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <Reveal delay={0.2}>
              <div className="h-full rounded-lg border border-hairline bg-[#121217] p-6 gold-glow">
                <h4 className="font-display text-sm font-bold tracking-wider text-active uppercase">
                  Hard Services
                </h4>
                <ul className="mt-4 space-y-2 text-xs text-muted-foreground">
                  {projectScope.hardServices.map((s) => (
                    <li key={s} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-active" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="h-full rounded-lg border border-hairline bg-[#121217] p-6 gold-glow">
                <h4 className="font-display text-sm font-bold tracking-wider text-active uppercase">
                  Soft Services
                </h4>
                <ul className="mt-4 space-y-2 text-xs text-muted-foreground">
                  {projectScope.softServices.map((s) => (
                    <li key={s} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-active" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.28}>
              <div className="h-full rounded-lg border border-hairline bg-[#121217] p-6 gold-glow">
                <h4 className="font-display text-sm font-bold tracking-wider text-active uppercase">
                  Value-Added
                </h4>
                <ul className="mt-4 space-y-2 text-xs text-muted-foreground">
                  {projectScope.valueAdded.map((s) => (
                    <li key={s} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-active" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.32}>
              <div className="h-full rounded-lg border border-hairline bg-[#121217] p-6 gold-glow">
                <h4 className="font-display text-sm font-bold tracking-wider text-active uppercase">
                  Student Welfare
                </h4>
                <ul className="mt-4 space-y-2 text-xs text-muted-foreground">
                  {projectScope.studentWelfare.map((s) => (
                    <li key={s} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-active" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Right Side: Asymmetrical Collage */}
        <div className="flex flex-col gap-6 lg:mt-20">
          <Reveal>
            <div className="aspect-[16/10] w-full ru-image bg-[#121217]">
              <img
                src={caseAsset}
                alt="Khalifa University student accommodation buildings"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
          </Reveal>
          <div className="grid grid-cols-2 gap-6">
            <Reveal delay={0.1}>
              <div className="aspect-[4/3] w-full rounded-bl-[40px] rounded-tr-[40px] overflow-hidden bg-[#121217]">
                <img
                  src={studentAsset}
                  alt="Student living space"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="aspect-[4/3] w-full rounded-br-[40px] rounded-tl-[40px] overflow-hidden bg-[#121217]">
                <img
                  src={campusAsset}
                  alt="Campus architecture"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>
        </div>
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
    <section className="border-t border-hairline bg-background">
      <div className="shell py-24 lg:py-36">
        <Reveal>
          <p className="eyebrow text-muted-foreground">What our clients say</p>
          <SectionUnderline />
        </Reveal>
        <Reveal delay={0.08}>
          <p className="lede mt-8 max-w-2xl">
            Our clients&apos; satisfaction is at the heart of everything we do. Their feedback
            reflects our commitment to exceptional facilities management and seamless service
            delivery.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[auto_1fr] lg:gap-20">
          <div className="relative min-h-[15rem] sm:min-h-[13rem] lg:col-start-2">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-center gap-1.5 mb-6 text-[#3F80CF]">
                  <Star className="h-4 w-4 fill-current animate-pulse" />
                  <Star className="h-4 w-4 fill-current animate-pulse" style={{ animationDelay: "150ms" }} />
                  <Star className="h-4 w-4 fill-current animate-pulse" style={{ animationDelay: "300ms" }} />
                  <Star className="h-4 w-4 fill-current animate-pulse" style={{ animationDelay: "450ms" }} />
                  <Star className="h-4 w-4 fill-current animate-pulse" style={{ animationDelay: "600ms" }} />
                </div>
                <p className="display-md max-w-[22ch] text-white sm:max-w-[28ch]">
                  &ldquo;{quotes[i].quote}&rdquo;
                </p>
                <footer className="body-secondary mt-8">
                  {quotes[i].name} · {quotes[i].org}
                </footer>
              </motion.blockquote>
            </AnimatePresence>

            <div className="mt-8 flex items-center gap-3 border-t border-hairline pt-8">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous testimonial"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-hairline text-white hover:text-active hover:border-active transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next testimonial"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-hairline text-white hover:text-active hover:border-active transition-colors"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
              <span className="ml-3 text-xs tracking-[0.14em] text-muted-foreground">
                {String(i + 1).padStart(2, "0")} / {String(quotes.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CtaBand() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && email.trim() && message.trim()) {
      setSubmittedName(name);
      setFormSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-background text-white border-t border-hairline">
      <ArcPattern className="text-[#3F80CF]" opacity={0.06} />
      <div className="shell relative py-24 lg:py-36">
        <Reveal>
          <p className="eyebrow text-[#3F80CF]">{company.purpose}</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="display-xl mt-8 max-w-[14ch] text-white font-extrabold">Get in Touch</h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {company.tagline}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-14 border-t border-hairline pt-10 lg:grid-cols-2">
          <Reveal delay={0.14}>
            <div className="flex flex-col justify-between h-full">
              <div>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">Contact Info</h3>
                <address className="mt-5 space-y-3 text-base not-italic text-muted-foreground">
                  <p className="leading-relaxed">
                    <strong>{company.name}</strong>
                    <br />
                    {company.address.line1}
                    <br />
                    {company.address.line2}
                  </p>
                  <p>
                    <a href={`tel:${company.tel.replace(/\s/g, "")}`} className="text-white hover:text-active transition-colors">
                      T: {company.tel}
                    </a>
                  </p>
                  <p>
                    <a
                      href={`tel:${company.mobile.replace(/\s/g, "")}`}
                      className="text-white hover:text-active transition-colors"
                    >
                      M: {company.mobile}
                    </a>
                  </p>
                  <p>
                    <a href={`mailto:${company.email}`} className="text-white hover:text-active transition-colors">
                      E: {company.email}
                    </a>
                  </p>
                  <p>
                    <a
                      href={`https://${company.web}`}
                      className="text-white hover:text-active transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      W: {company.web}
                    </a>
                  </p>
                </address>
              </div>

              <div className="mt-8 border-t border-white/5 pt-8">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-white/50">Office Hours</h4>
                <p className="mt-2 text-sm text-muted-foreground">{company.hours}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <div>
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-6">Send a Message</h3>
              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="rounded-xl border border-active/30 bg-[#14103b]/40 p-8 text-center"
                >
                  <p className="text-lg font-bold text-active">Message Sent Successfully</p>
                  <p className="mt-2 text-sm text-white/70">
                    Thank you, {submittedName || "there"}! We have received your message and our team will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-6 text-xs font-semibold text-white underline underline-offset-4 hover:text-active"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="form-name" className="block text-xs font-semibold uppercase tracking-wider text-white/75">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="form-name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. John Doe"
                      className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-base text-white placeholder-white/20 outline-none transition-all focus:border-active focus:bg-white/10"
                    />
                  </div>
                  <div>
                    <label htmlFor="form-email" className="block text-xs font-semibold uppercase tracking-wider text-white/75">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="form-email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. john@example.com"
                      className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-base text-white placeholder-white/20 outline-none transition-all focus:border-active focus:bg-white/10"
                    />
                  </div>
                  <div>
                    <label htmlFor="form-message" className="block text-xs font-semibold uppercase tracking-wider text-white/75">
                      How can we help?
                    </label>
                    <textarea
                      id="form-message"
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Describe your facilities management query..."
                      className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-base text-white placeholder-white/20 outline-none transition-all focus:border-active focus:bg-white/10 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-full bg-active px-8 py-4 text-base font-semibold text-white transition-all hover:bg-active/90 hover:shadow-[0_0_20px_rgba(63,128,207,0.35)]"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
