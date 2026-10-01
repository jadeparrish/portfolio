import React from 'react';
import jadePhoto from './jade-photo.jpg';
import {
  ArrowDownRight,
  ArrowRight,
  ArrowRightLeft,
  Search,
  Target,
  Users,
  FileText,
  Layers,
  Wrench,
  Landmark,
  Stethoscope,
  GraduationCap,
  Heart,
  Image as ImageIcon,
} from 'lucide-react';
import { caseStudiesList, thinkingList, SiteFooter, Testimonial } from './caseStudiesData';

const whatIDo = [
  {
    icon: Search,
    title: 'Start with what exists',
    description: 'Auditing how a service actually works, including the workarounds and handoffs, before jumping into sketching.',
  },
  {
    icon: ArrowRightLeft,
    title: 'Work across the gap',
    description: 'Sitting between teams, tools and departments to fix the handoff, not just the screen.',
  },
  {
    icon: Target,
    title: 'Make the case, not just the mockup',
    description: 'Framing decisions in terms leadership can act on: risk, time and outcome, not just usability.',
  },
];

/* No href for a piece that isn't written yet: the card below already
   renders those as plain, dimmed and unclickable. */
const thoughts = thinkingList.map((a) => ({
  ...a,
  href: a.hasPage ? `/thinking/${a.slug}` : null,
}));

/* The homepage shows three. Everything else lives on /work, so the two
   don't have to be kept in step by hand. */
const caseStudies = caseStudiesList.filter((item) => item.featured);

const whoIWorkWith = [
  {
    icon: Landmark,
    title: 'Public Sector',
    description: "Councils, departments, agencies and arm’s-length bodies.",
  },
  {
    icon: Stethoscope,
    title: 'NHS & Healthcare',
    description: 'Trusts, ICSs, and the national bodies behind them.',
  },
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'Schools, colleges, trusts and education technology providers.',
  },
  {
    icon: Heart,
    title: 'Charities & NFPs',
    description: 'Charities, cultural organisations and not-for-profits.',
  },
  {
    icon: Users,
    title: 'Enterprise Teams',
    description: 'Complex product and operations teams.',
  },
];

function SectionLabel({ children }) {
  return (
    <h2 className="text-[11px] uppercase tracking-[0.2em] font-medium text-neutral-600 mb-10 lg:mb-12">
      {children}
    </h2>
  );
}

export default function PortfolioHomepage() {
  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#1C1C1C] font-sans antialiased selection:bg-neutral-200">

      <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Hero */}
        {/* Two columns only from lg. At md the hero column was half a 12-column
            grid, about 330px, which is too narrow for 48px display type: the
            headline broke into four ragged lines. Stacked, it gets the full
            width and the illustration sits under it. */}
        <section className="pt-4 pb-16 sm:pt-6 sm:pb-20 lg:pt-12 lg:pb-28 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center border-b border-neutral-200/80">
          <div className="lg:col-span-6 space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal leading-[1.12] tracking-tight text-neutral-900">
              {/* The designed break only works once the column is wide enough to
                  hold "Better systems" on one line. Below lg the hero column is
                  half a 12-column grid, so forcing it there gives four ragged
                  lines. Hidden means no break at all, so the text just flows. */}
              Better systems <br className="hidden lg:inline" />
              create better <span className="italic text-[#A47864]">lives.</span>
            </h1>
            <div className="space-y-5 text-neutral-600 text-[17px] sm:text-[18px] leading-[1.75] max-w-lg font-normal">
              <p>Every day, people rely on services they didn&rsquo;t choose.</p>
              <p>
                I help organisations redesign services, products and processes so they
                work better for the people who depend on them.
              </p>
            </div>

            {/* Each dot travels with the label before it. As separate flex
                children they could wrap onto a new line on their own, which
                put a stray dot at the start of a row at tablet width. */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2 text-xs text-neutral-500 tracking-wide">
              {['Public Sector', 'Healthcare', 'Education', 'Complex Digital Products'].map(
                (label, i, all) => (
                  <span key={label} className="inline-flex items-center gap-x-6">
                    {label}
                    {i < all.length - 1 && (
                      <span className="w-1 h-1 rounded-full bg-neutral-300" />
                    )}
                  </span>
                )
              )}
            </div>

            <div className="pt-2">
              <a
                href="#work"
                className="inline-flex items-center gap-2.5 text-xs uppercase tracking-[0.18em] font-medium text-neutral-900 hover:text-[#8D6553] hover:translate-x-0.5 transition-all"
              >
                View selected work <ArrowDownRight className="w-4 h-4 text-[#A47864]" />
              </a>
            </div>
          </div>

          {/* Hero illustration placeholder */}
          <div className="lg:col-span-6">
            <div className="aspect-[4/3] w-full max-h-[320px] lg:max-h-none rounded-sm border border-dashed border-neutral-300 bg-white/60 flex flex-col items-center justify-center gap-3 text-center px-8">
              <ImageIcon className="w-6 h-6 text-neutral-300" strokeWidth={1.5} />
              <p className="text-xs uppercase tracking-[0.15em] text-neutral-600 font-medium">
                Hero illustration: coming soon
              </p>
              <p className="text-xs text-neutral-600 max-w-[220px]">
                Hand-drawn systems ecosystem map
              </p>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-20 lg:py-28 border-b border-neutral-200/80">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-10 lg:gap-16 items-start">
            <div className="md:col-span-4">
              <div className="aspect-[4/5] max-h-[460px] md:max-h-none w-full max-w-xs md:max-w-none mx-auto bg-neutral-100 border border-neutral-200 rounded-sm overflow-hidden">
                <img
                  src={jadePhoto.src}
                  alt="Jade Parrish"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="md:col-span-8 space-y-8">
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] font-medium text-neutral-600 mb-3">
                  About
                </p>
                <h2 className="text-2xl sm:text-3xl font-serif text-neutral-900 leading-snug">
                  I&rsquo;m a human-centred service and systems designer.
                </h2>
              </div>

              <div className="space-y-5 text-neutral-600 text-[17px] sm:text-[18px] leading-[1.75] max-w-2xl font-normal">
                <p>
                  Over 15 years I&rsquo;ve moved from graphic design, through web, into
                  senior product design, picking up service design and systems thinking
                  along the way. In the web years I was at Rentalcars.com, designing and
                  building A/B tests, which is where I learned to expect a design
                  decision to be measured. If there&rsquo;s a thread through all of it,
                  it&rsquo;s that I can&rsquo;t leave a complex process alone. I have to
                  understand why it&rsquo;s confusing, and then I want to fix it.
                </p>
                <p>
                  My work usually ends up spanning teams, touchpoints and organisational
                  boundaries, because that&rsquo;s where things break. I look past
                  the screen to the wider system: where a handoff gets lost, where
                  complexity gets quietly handed to a person instead of being designed away,
                  and where a bit of structure would make everyone&rsquo;s day easier.
                </p>
                <p>
                  None of this is abstract to me. I&rsquo;m a parent to two children with
                  SEND, and I know first-hand what that means in practice: because the
                  systems around you don&rsquo;t talk to each other, the person with
                  parental responsibility ends up being the project manager,
                  chasing every service and holding the whole picture together. I bring
                  that same instinct to my work: build
                  the joined-up system, so nobody has to become the project manager just to
                  get through their day.
                </p>
                <blockquote className="border-l-2 border-neutral-300 pl-4 py-1 italic font-serif text-neutral-800 text-lg">
                  &ldquo;I want the systems people depend on to actually work for
                  them, not against them.&rdquo;
                </blockquote>
              </div>

              <div className="pt-8 border-t border-neutral-200/80">
                <Testimonial
                  quote={
                    <>
                      She played a key role in shaping major initiatives including our
                      ShadCN migration, Campaign Manager redesign, and early reporting
                      improvements. Her documentation and communication with engineering
                      were always clear and dependable, which helped move complex work
                      forward smoothly.
                    </>
                  }
                  name="Ade-Lee Adebiyi"
                  role="Head of Design, SoPost"
                  href="https://www.linkedin.com/in/ade-lee-adebiyi-a526a743/"
                />
              </div>

              <div className="pt-8 border-t border-neutral-200/80">
                <p className="text-[11px] uppercase tracking-[0.2em] font-medium text-neutral-600 mb-3">
                  Capabilities
                </p>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs sm:text-sm text-neutral-800 font-mono tracking-wider">
                  <span>Service Design</span>
                  <span className="w-1 h-1 rounded-full bg-neutral-400 translate-y-[3px]" />
                  <span>Systems Thinking</span>
                  <span className="w-1 h-1 rounded-full bg-neutral-400 translate-y-[3px]" />
                  <span>Product Design</span>
                  <span className="w-1 h-1 rounded-full bg-neutral-400 translate-y-[3px]" />
                  <span>Accessibility</span>
                  <span className="w-1 h-1 rounded-full bg-neutral-400 translate-y-[3px]" />
                  <span>Research</span>
                  <span className="w-1 h-1 rounded-full bg-neutral-400 translate-y-[3px]" />
                  <span>Strategy</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How I Work */}
        <section className="py-16 lg:py-24 border-b border-neutral-200/80">
          <SectionLabel>How I Work</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
            {whatIDo.map((item) => (
              <div key={item.title} className="space-y-4">
                <item.icon className="w-5 h-5 text-neutral-600" strokeWidth={1.5} />
                <h3 className="font-serif text-xl font-normal text-neutral-900">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Selected Work */}
        <section id="work" className="pt-16 lg:pt-24">
          <SectionLabel>Selected Work</SectionLabel>
          <div className="divide-y divide-neutral-200/70">
            {caseStudies.map((item) => (
              <div
                key={item.num}
                className="group grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8 items-start md:items-center py-10 lg:py-12 first:pt-0 last:pb-0"
              >
                <div className="md:col-span-1 lg:col-span-3">
                  <div
                    className={`aspect-[4/3] max-h-[240px] md:max-h-none rounded-sm border border-neutral-200/80 ${item.tint} flex flex-col items-center justify-center gap-1`}
                  >
                    <span className="font-mono text-xl text-neutral-500">{item.num}</span>
                    <span className="text-[10px] uppercase tracking-[0.15em] text-neutral-600">
                      Visual coming soon
                    </span>
                  </div>
                </div>

                <div className="md:col-span-1 lg:col-span-9 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
                  <div className="space-y-2 lg:max-w-lg">
                    <p className="text-[10px] uppercase tracking-[0.15em] text-neutral-600 font-medium">
                      {item.tag}
                      {item.year && <> &middot; {item.year}</>}
                    </p>
                    <h3 className="font-serif text-xl sm:text-2xl text-neutral-900 leading-snug transition-colors group-hover:text-[#8D6553]">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="shrink-0 lg:pt-1 lg:text-right">
                    {item.href ? (
                      <a
                        href={item.href}
                        className="inline-flex items-center gap-1.5 text-xs text-neutral-900 font-medium tracking-wider uppercase hover:text-[#8D6553] group-hover:translate-x-1 transition-all"
                      >
                        {item.cta} <ArrowRight className="w-3.5 h-3.5 text-neutral-600 group-hover:text-[#8D6553] transition-colors" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-xs text-neutral-600 font-medium tracking-wider uppercase">
                        {item.cta}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sits in a band between two rules, 24px either side of the link,
              the same rhythm the More work summary had. */}
          <div className="mt-12 py-6 border-y border-neutral-200/80">
            <a
              href="/work"
              className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-medium text-neutral-900 hover:text-[#8D6553] transition-colors"
            >
              See all work ({caseStudiesList.length})
              <ArrowRight className="w-3.5 h-3.5 text-[#A47864] transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </section>

        {/* Where I Can Help */}
        <section className="py-16 lg:py-24 border-b border-neutral-200/80">
          <SectionLabel>Where I Can Help</SectionLabel>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10">
            {whoIWorkWith.map((item) => (
              <div key={item.title} className="space-y-3">
                <item.icon className="w-5 h-5 text-neutral-600" strokeWidth={1.5} />
                <h3 className="text-sm font-medium text-neutral-900">{item.title}</h3>
                <p className="text-xs text-neutral-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What I'm Noticing */}
        <section id="thinking" className="pt-16 lg:pt-24">
          <SectionLabel>What I&rsquo;m Noticing</SectionLabel>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
            {thoughts.map((article) => {
              const inner = (
                <>
                  <article.icon
                    className={`w-5 h-5 ${article.href ? 'text-[#A47864]' : 'text-neutral-300'}`}
                    strokeWidth={1.5}
                  />
                  {/* A piece that isn't written yet sits back. #6E6E6E is
                      4.8:1 on paper, so it reads as greyed out and still
                      clears AA for small text. neutral-500 misses at 4.47. */}
                  <h3
                    className={`font-serif text-lg leading-snug ${
                      article.href
                        ? 'text-neutral-900 transition-colors group-hover:text-[#8D6553] group-hover:underline underline-offset-4 decoration-neutral-500'
                        : 'text-[#6E6E6E]'
                    }`}
                  >
                    {article.title}
                  </h3>
                  {article.description && (
                    <p
                      className={`text-xs sm:text-sm leading-relaxed ${
                        article.href ? 'text-neutral-600' : 'text-[#6E6E6E]'
                      }`}
                    >
                      {article.description}
                    </p>
                  )}
                  <p
                    className={`text-[11px] font-mono ${
                      article.href ? 'text-neutral-600' : 'text-[#6E6E6E]'
                    }`}
                  >
                    {article.readTime}
                  </p>
                </>
              );
              return article.href ? (
                <a
                  key={article.title}
                  href={article.href}
                  className="group block border-t border-neutral-200/60 hover:border-[#A47864]/50 transition-colors pt-5 space-y-3"
                >
                  {inner}
                </a>
              ) : (
                <div key={article.title} className="border-t border-neutral-200/60 pt-5 space-y-3">
                  {inner}
                </div>
              );
            })}
          </div>

          <div className="mt-12 py-6 border-y border-neutral-200/80">
            <a
              href="/thinking"
              className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-medium text-neutral-900 hover:text-[#8D6553] transition-colors"
            >
              All thinking
              <ArrowRight className="w-3.5 h-3.5 text-[#A47864] transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-24 lg:py-32 text-center space-y-8">
          <div className="inline-block px-4 py-1.5 bg-[#A47864]/10 border border-[#A47864]/30 text-[#8D6553] rounded-full text-xs font-mono tracking-wide">
            Open to Part-Time Roles &amp; Fractional Contracts (2&ndash;3 days/week)
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-neutral-900 tracking-tight">
            Let&rsquo;s improve something together.
          </h2>
          <div className="pt-2">
            <a
              href="mailto:hello@jadeparrish.me"
              className="text-lg sm:text-2xl font-serif text-neutral-900 underline underline-offset-8 decoration-neutral-500 hover:decoration-[#8D6553] transition-colors"
            >
              hello@jadeparrish.me &rarr;
            </a>
          </div>
          {/* Where I am belongs next to how much of me is available: both are
              the practical questions somebody asks at the point of getting in
              touch. #6E6E6E is 4.8:1 on paper, so it still clears AA. */}
          <p className="text-sm text-[#6E6E6E]">
            Based in Lytham St Annes. Local work across Blackpool and the Fylde,
            remote anywhere else.
          </p>
        </section>
      </main>

      {/* Footer: shared with every other page, so it can't drift. */}
      <SiteFooter wide />
    </div>
  );
}
