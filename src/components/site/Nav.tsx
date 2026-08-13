import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Search, X, Menu, ArrowUpRight } from "lucide-react";
import { Brandmark } from "@/components/brand/Brandmark";
import { navigation, services } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mega, setMega] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobile ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobile]);

  const solid = scrolled || mega;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-500",
          solid
            ? "border-b border-hairline bg-background/90 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent",
        )}
        onMouseLeave={() => setMega(false)}
      >
        <div className="shell flex h-20 items-center justify-between gap-6">
          <a href="#top" aria-label="Kunnected FM home" className="shrink-0">
            <Brandmark tone="invert" />
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
            {navigation.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onMouseEnter={() => setMega(Boolean("mega" in l && l.mega))}
                onFocus={() => setMega(Boolean("mega" in l && l.mega))}
                className="relative py-2 text-[0.9375rem] font-medium tracking-tight text-white/85 transition-colors hover:text-active"
              >
                {l.label}
                {"mega" in l && l.mega && mega && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-0 -bottom-px h-px bg-active"
                  />
                )}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Search the site"
              className={cn(
                "hidden h-11 w-11 items-center justify-center rounded-full transition-colors sm:inline-flex",
                solid ? "text-white hover:bg-white/10" : "text-white hover:bg-white/10",
              )}
            >
              <Search className="h-[1.05rem] w-[1.05rem]" />
            </button>

            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMobile(true)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full text-white lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mega && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="hidden border-t border-hairline bg-[#121217] lg:block"
            >
              <div className="shell grid grid-cols-[1.6fr_1fr] gap-16 py-12">
                <div>
                  <p className="eyebrow text-muted-foreground">Service lines</p>
                  <ul className="mt-6 grid grid-cols-3 gap-x-10 gap-y-1">
                    {services.map((s) => (
                      <li key={s.slug}>
                        <a
                          href="#services"
                          className="group flex items-baseline justify-between gap-3 border-b border-hairline py-3 text-base text-white/85 transition-colors hover:text-active"
                        >
                          {s.title}
                          <ArrowUpRight className="h-3.5 w-3.5 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-[#16161c] border border-hairline p-8 text-white">
                  <p className="eyebrow text-white/60">Always on</p>
                  <p className="mt-6 font-display text-2xl leading-tight font-semibold tracking-tight">
                    A 24/7 operations desk sits behind every service line.
                  </p>
                  <p className="mt-4 text-base leading-relaxed text-white/75">
                    One helpdesk, one escalation path, one accountable team across the entire
                    student accommodation estate.
                  </p>
                  <a
                    href="#process"
                    className="mt-8 inline-flex items-center gap-2 text-base font-medium text-white hover:text-active underline underline-offset-4"
                  >
                    How we operate <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <AnimatePresence>
        {mobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-background text-white lg:hidden"
          >
            <div className="shell flex h-20 items-center justify-between">
              <Brandmark tone="invert" />
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setMobile(false)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full text-white hover:text-active"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav aria-label="Mobile" className="shell mt-6 flex flex-col pb-10">
              {navigation.map((l, i) => (
                <motion.a
                  key={l.label}
                  href={l.href}
                  onClick={() => setMobile(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="border-b border-white/15 py-5 font-display text-3xl font-semibold tracking-tight hover:text-active transition-colors"
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
