import { Reveal } from "@/components/motion/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faq } from "@/lib/site";
import { SectionUnderline } from "@/components/home/Stats";

export function Faq() {
  return (
    <section id="faq" className="border-t border-hairline bg-light-mesh relative overflow-hidden">
      {/* Floating Animated Circles */}
      <div className="blur-circle-1 -right-20 -top-20 pointer-events-none" />
      <div className="blur-circle-2 -left-40 -bottom-40 pointer-events-none" />

      <div className="shell relative z-10 py-24 lg:py-36">
        <Reveal>
          <p className="eyebrow text-slate-500">Frequently Asked Questions</p>
          <SectionUnderline />
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="display-lg mt-8 max-w-[18ch] text-[#201A57]">Common questions about our services</h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="lede mt-6 max-w-2xl text-slate-700">
            Clear answers about how Kunnected FM delivers integrated facilities management for
            universities and student accommodation across Abu Dhabi.
          </p>
        </Reveal>

        <Reveal delay={0.16} className="mt-14 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faq.map((item, i) => (
              <AccordionItem key={item.question} value={`item-${i}`} className="border-slate-200/80">
                <AccordionTrigger className="py-5 text-left text-base font-bold text-[#201A57] hover:text-active hover:no-underline lg:text-lg transition-colors">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-base text-slate-600 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
