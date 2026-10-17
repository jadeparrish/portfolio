import React from 'react';
import jadePhoto from './jade-photo.jpg';
import {
  ArrowDownRight,
  ArrowRight,
  ArrowRightLeft,
  Search,
  Target,
  Users,
  Landmark,
  Stethoscope,
  GraduationCap,
  Heart,
} from 'lucide-react';
import {
  caseStudiesList,
  thinkingList,
  SiteFooter,
  Testimonial,
  IndexRow,
  Figure,
  Plate,
} from './caseStudiesData';

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
  /* The order reads as priority, so this list runs most-wanted first. Product
     work sits fourth rather than second: a genuine move up, without claiming it
     outranks the NHS and education work the site is aimed at. */
  {
    icon: Users,
    title: 'Product & Platform Teams',
    description: 'Complex digital products, data-heavy workflows and design systems.',
  },
  {
    icon: Heart,
    title: 'Charities & NFPs',
    description: 'Charities, cultural organisations and not-for-profits.',
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
        <section className="pt-4 pb-16 sm:pt-6 sm:pb-20 lg:pt-12 lg:pb-28 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
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
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2 text-xs text-[#6A6A6A] tracking-wide">
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
                className="inline-flex items-center gap-2.5 py-2 -my-2 text-xs uppercase tracking-[0.18em] font-medium text-neutral-900 hover:text-[#845D4D] hover:translate-x-0.5 transition-all"
              >
                View selected work <ArrowDownRight className="w-4 h-4 text-[#A47864]" />
              </a>
            </div>
          </div>

          {/* The hero illustration is a systems ecosystem map, so it is
              labelled as a figure rather than framed as artwork. */}
          <div className="lg:col-span-6">
            <Figure n="01" caption="Hand-drawn systems ecosystem map" />
          </div>
        </section>

        {/* About */}
        {/* py-16 lg:py-24, same as every other content section. This one was
            py-20 lg:py-28, and because it ends on a short list of small mono
            type the extra 16px read as a gap rather than as breathing room. */}
        <section id="about" className="py-16 lg:py-24">
          {/* Stacked until lg, like the hero. Side by side at tablet the text
              ran far longer than the photo and left a tall empty column beside
              it; stacked, the photo caps at max-w-xs and centres. */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-4">
              <div className="aspect-[4/5] max-h-[460px] lg:max-h-none w-full max-w-xs lg:max-w-none mx-auto bg-neutral-100 border border-neutral-200 rounded-sm overflow-hidden">
                <img
                  src={jadePhoto.src}
                  alt="Jade Parrish"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-8 space-y-8">
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
                  decision to be measured.
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
                {/* The pull quote that sat here said the SEND paragraph's last
                    line again in vaguer words, and took its landing with it.
                    Paragraph three closes the section on its own. */}
              </div>

              <div className="pt-8 border-t border-neutral-200/80">
                <Testimonial
                  quote={
                    <>
                      Jade approaches design with thoughtfulness and precision,
                      particularly across projects that demand structure and data
                      awareness. She played a key role in shaping major initiatives
                      including our ShadCN migration, Campaign Manager redesign, and early
                      reporting improvements. Her documentation and communication with
                      engineering were always clear and dependable, which helped move
                      complex work forward smoothly.
                    </>
                  }
                  name="Ade-Lee Adebiyi"
                  role="Head of Design, SoPost"
                  href="https://www.linkedin.com/in/ade-lee-adebiyi-a526a743/"
                />
              </div>

              {/* Just a labelled line of words. Boxed, with a header cell and
                  a tinted ground, it read as a table header or a row of
                  filters: a control you could press. Nothing here is
                  pressable, so nothing here should look it.

                  Each dot still travels with the label before it, so a dot
                  can never start a wrapped line. */}
              <div className="space-y-3">
                <p className="text-[11px] uppercase tracking-[0.2em] font-medium text-neutral-600">
                  Capabilities
                </p>
                <p className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[15px] text-neutral-900">
                  {[
                    'Service Design',
                    'Systems Thinking',
                    'Product Design',
                    'Accessibility',
                    'Research',
                    'Strategy',
                  ].map((label, i, all) => (
                    <span key={label} className="inline-flex items-center gap-x-5">
                      {label}
                      {i < all.length - 1 && (
                        <span className="w-[3px] h-[3px] rounded-full bg-[#A47864]" />
                      )}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How I Work */}
        <section className="py-16 lg:py-24">
          <SectionLabel>How I Work</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
            {/* Numbered rather than iconned. These three are a sequence, and
                a number says so where a magnifying glass and a target did not.
                No boxes: the section is prose, so it stays on paper. */}
            {whatIDo.map((item, i) => (
              <div key={item.title} className="space-y-3">
                <Plate>{String(i + 1).padStart(2, '0')}</Plate>
                <h3 className="font-serif text-xl font-normal text-neutral-900 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed [text-wrap:pretty]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Selected Work */}
        {/* Rows rather than cards. The cards each carried a grey placeholder
            box, so three of the site's empty states lived on the homepage
            above the fold. Rows read faster, and the state lamp says more
            than a thumbnail of nothing would. */}
        <section id="work" className="pt-16 lg:pt-24">
          <SectionLabel>Selected Work</SectionLabel>
          <div className="border-t border-neutral-900/[0.09]">
            {caseStudies.map((item) => (
              <IndexRow
                key={item.num}
                state={item.state}
                num={item.num}
                title={item.title}
                description={item.description}
                meta={item.year}
                href={item.href}
              />
            ))}
          </div>

          {/* Sits in a band between two rules, 24px either side of the link,
              the same rhythm the More work summary had. */}
          <div className="mt-12 pt-8 border-t border-neutral-200/80">
            <a
              href="/work"
              className="group inline-flex items-center gap-2 py-2 -my-2 text-xs uppercase tracking-[0.18em] font-medium text-neutral-900 hover:text-[#845D4D] transition-colors"
            >
              See all work ({caseStudiesList.length})
              <ArrowRight className="w-3.5 h-3.5 text-[#A47864] transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </section>

        {/* Where I Can Help */}
        <section className="py-16 lg:py-24">
          <SectionLabel>Where I Can Help</SectionLabel>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10">
            {whoIWorkWith.map((item) => (
              <div key={item.title} className="space-y-3">
                <item.icon className="w-5 h-5 text-neutral-600" strokeWidth={1.5} />
                <h3 className="text-sm font-medium text-neutral-900">{item.title}</h3>
                <p className="text-xs text-[#6A6A6A] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What I'm Noticing */}
        <section id="thinking" className="pt-16 lg:pt-24">
          <SectionLabel>What I&rsquo;m Noticing</SectionLabel>
          {/* The same row component as the work list. An unwritten piece no
              longer needs its own greyed-out treatment: the hollow lamp and
              the word already say where it is. */}
          <div className="border-t border-neutral-900/[0.09]">
            {thoughts.map((article) => (
              <IndexRow
                key={article.slug}
                state={article.state}
                num={article.num}
                title={article.title}
                description={article.description}
                meta={article.readTime}
                href={article.href}
              />
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-neutral-200/80">
            <a
              href="/thinking"
              className="group inline-flex py-2 -my-2 items-center gap-2 text-xs uppercase tracking-[0.18em] font-medium text-neutral-900 hover:text-[#845D4D] transition-colors"
            >
              All thinking
              <ArrowRight className="w-3.5 h-3.5 text-[#A47864] transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </section>

        {/* Contact, as the page's one readout block. The header already
            carries availability as a state; here it is an invitation, so the
            same fact is not said twice in the same words. */}
        <section id="contact" className="py-16 lg:py-24">
          <div className="border border-neutral-900/15 bg-[#F4F2EE]">
            <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 sm:px-5 py-3 border-b border-neutral-900/15 bg-neutral-900/[0.025]">
              <Plate>Contact</Plate>
              <p className="text-xs sm:text-[13px] text-[#845D4D]">
                Open to part-time roles and fractional contracts
              </p>
            </div>

            <div className="px-5 py-14 sm:py-20 text-center space-y-7">
              <h2 className="text-3xl sm:text-4xl font-serif text-neutral-900 tracking-tight [text-wrap:balance]">
                Let&rsquo;s improve something together.
              </h2>
              <a
                href="mailto:hello@jadeparrish.me"
                className="inline-block text-lg sm:text-2xl font-serif text-neutral-900 underline underline-offset-8 decoration-neutral-500 hover:decoration-[#845D4D] hover:text-[#845D4D] transition-colors"
              >
                hello@jadeparrish.me &rarr;
              </a>
            </div>

            {/* Where I am belongs next to how much of me is available: both
                are the practical questions somebody asks at the point of
                getting in touch. */}
            <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 sm:px-5 py-3 border-t border-neutral-900/[0.09]">
              <Plate>Lytham St Annes</Plate>
              <Plate>Local across Blackpool &amp; the Fylde &middot; remote anywhere else</Plate>
            </div>
          </div>
        </section>
      </main>

      {/* Footer: shared with every other page, so it can't drift. */}
      <SiteFooter wide />
    </div>
  );
}
