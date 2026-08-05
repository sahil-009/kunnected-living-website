import { ArrowUpRight, Linkedin } from "lucide-react";
import { Brandmark } from "@/components/brand/Brandmark";
import { company, navigation, services } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-background">
      <div className="shell py-20 lg:py-28">
        <div className="flex items-start gap-5 border-b border-hairline pb-14">
          <Brandmark tone="invert" className="scale-125 origin-left" />
          <div className="min-w-0 pt-1">
            <p className="body-secondary max-w-md">{company.legalName}</p>
            <p className="body-text mt-3 max-w-lg text-muted-foreground">{company.tagline}</p>
          </div>
        </div>

        <div className="grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="eyebrow text-muted-foreground">Company</p>
            <ul className="mt-5 space-y-2.5">
              {navigation.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-base text-muted-foreground hover:text-active transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-muted-foreground">Services</p>
            <ul className="mt-5 space-y-2.5">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <a href="#services" className="text-base text-muted-foreground hover:text-active transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-muted-foreground">Get in Touch</p>
            <address className="mt-5 space-y-2.5 text-base not-italic text-muted-foreground">
              <p>
                {company.address.line1}
                <br />
                {company.address.line2}
              </p>
              <p>
                <a href={`tel:${company.tel.replace(/\s/g, "")}`} className="hover:text-active transition-colors">
                  T {company.tel}
                </a>
              </p>
              <p>
                <a href={`tel:${company.mobile.replace(/\s/g, "")}`} className="hover:text-active transition-colors">
                  M {company.mobile}
                </a>
              </p>
              <p>
                <a href={`mailto:${company.email}`} className="hover:text-active transition-colors">
                  E {company.email}
                </a>
              </p>
              <p>
                <a
                  href={`https://${company.web}`}
                  className="hover:text-active transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  W {company.web}
                </a>
              </p>
            </address>
          </div>

          <div>
            <p className="eyebrow text-muted-foreground">Connect</p>
            <p className="body-secondary mt-5">
              Follow Kunnected FM for campus operations updates and industry insights.
            </p>
            <a
              href="https://www.linkedin.com"
              className="mt-8 inline-flex h-11 w-11 items-center justify-center rounded-full border border-hairline text-white hover:border-active hover:text-active transition-colors"
              aria-label="Kunnected FM on LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 text-base font-medium text-white hover:text-active transition-colors"
            >
              Contact Us <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-hairline pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
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
