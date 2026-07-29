import { ArrowUpRight, Linkedin } from "lucide-react";
import { ArcMark } from "@/components/brand/Brandmark";
import { company, services, industries } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-background">
      <div className="shell py-20 lg:py-28">
        <div className="flex items-start gap-5 border-b border-hairline pb-14">
          <ArcMark className="h-16 w-16 shrink-0 text-core" />
          <div className="min-w-0">
            <p className="font-display text-4xl leading-none font-medium tracking-[-0.035em] text-core sm:text-6xl">
              KUnnected <span className="font-normal opacity-50">FM</span>
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              {company.legalName}
            </p>
          </div>
        </div>

        <div className="grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="eyebrow text-muted-foreground">Services</p>
            <ul className="mt-5 space-y-2.5">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <a href="#services" className="text-sm text-core/75 hover:text-active">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-muted-foreground">Industries</p>
            <ul className="mt-5 space-y-2.5">
              {industries.map((i) => (
                <li key={i.title}>
                  <a href="#industries" className="text-sm text-core/75 hover:text-active">
                    {i.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-muted-foreground">Office</p>
            <address className="mt-5 space-y-2.5 text-sm not-italic text-core/75">
              <p>
                {company.address.line1}
                <br />
                {company.address.line2}
              </p>
              <p>
                <a href={`tel:${company.tel.replace(/\s/g, "")}`} className="hover:text-active">
                  T {company.tel}
                </a>
              </p>
              <p>
                <a href={`tel:${company.mobile.replace(/\s/g, "")}`} className="hover:text-active">
                  M {company.mobile}
                </a>
              </p>
              <p>
                <a href={`mailto:${company.email}`} className="hover:text-active">
                  {company.email}
                </a>
              </p>
            </address>
          </div>

          <div>
            <p className="eyebrow text-muted-foreground">Newsletter</p>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Campus operations thinking, a few times a year.
            </p>
            <form
              className="mt-5 flex items-center gap-2 border-b border-core/25 pb-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="Email address"
                className="min-w-0 flex-1 bg-transparent text-sm text-core outline-none placeholder:text-muted-foreground"
              />
              <button
                type="submit"
                aria-label="Subscribe to the newsletter"
                className="shrink-0 text-core transition-colors hover:text-active"
              >
                <ArrowUpRight className="h-5 w-5" />
              </button>
            </form>
            <a
              href="https://www.linkedin.com"
              className="mt-8 inline-flex h-11 w-11 items-center justify-center rounded-full border border-hairline text-core transition-colors hover:border-active hover:text-active"
              aria-label="Kunnected FM on LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-hairline pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {company.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-6">
            <a href="#top" className="hover:text-active">
              Privacy Policy
            </a>
            <a href="#top" className="hover:text-active">
              Terms &amp; Conditions
            </a>
            <span>{company.web}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
