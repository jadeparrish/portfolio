import Link from 'next/link';
import { ArrowLeft, ArrowRight, ArrowUp, Layers, FileText, Wrench, Sparkles } from 'lucide-react';

/* Ordered by theme, because /work groups them that way. The two-digit
   number is derived from position, so reordering or inserting a piece
   can never leave a gap or a duplicate. */
const work = [
  {
    slug: 'send',
    year: '2026 to 2027',
    group: 'service',
    title: 'Making SEND journeys easier for families to navigate',
    tag: 'Service Design',
    description:
      'A self-initiated project exploring how families and professionals experience SEND services across organisations, and where joined-up design could reduce friction.',
    cta: 'Coming soon',
    href: null,
    tint: 'bg-[#EDEAE4]',
    hasPage: false,
    featured: false,
  },
  {
    slug: 'consent',
    year: '2025',
    group: 'service',
    title: 'Turning a compliance risk into a simple first step',
    tag: 'Compliance & Service Design',
    description:
      'Led a cross-functional review of how feedback journeys captured consent, then designed one global pattern that protects users and brands without adding friction.',
    cta: 'View case study',
    href: '/work/consent',
    tint: 'bg-[#E6E2E9]',
    hasPage: true,
    featured: false,
  },
  {
    slug: 'stock',
    year: '2024 to 2025',
    group: 'service',
    title: 'Bringing stock and fulfilment data into one clear view',
    tag: 'Operations & Service Design',
    description:
      'Untangled shared stock pools into a consistent view of stock health and fulfilment status, carrying the same clarity into Campaign Manager reporting.',
    cta: 'View case study',
    href: '/work/stock',
    tint: 'bg-[#E3E6E1]',
    hasPage: true,
    featured: true,
  },
  {
    slug: 'crm-review',
    year: '2016 to 2017',
    group: 'service',
    title: 'Rebuilding a customer review around the people doing it',
    tag: 'Workflow & Service Design',
    description:
      'Joined an in-house transformation team to rebuild the software staff used for customer reviews, running workshops with the people doing the job and designing the workflow before the interface.',
    cta: 'View case study',
    href: '/work/crm-review',
    tint: 'bg-[#E5E1DB]',
    hasPage: true,
    featured: false,
  },
  {
    slug: 'debt-advice',
    year: '2014 to 2017',
    group: 'service',
    title: 'Turning a debt enquiry into something people could act on',
    tag: 'Research & Service Design',
    description:
      'Designed a debt diagnostic and a personalised report for people who were struggling to repay their debts, researched by listening to the calls, then defined the template every debt brand after it was built from.',
    cta: 'View case study',
    href: '/work/debt-advice',
    tint: 'bg-[#E1E5E4]',
    hasPage: true,
    featured: false,
  },
  {
    slug: 'commercial-value',
    year: '2025',
    group: 'data',
    title: 'Helping commercial teams see the value they create',
    tag: 'Commercial Product',
    description:
      'Designed a way to show the long-term value of a campaign, plus comparison tables that put results side by side, so our Commercial Team could demonstrate impact to brands instead of defending it.',
    cta: 'View case study',
    href: '/work/commercial-value',
    tint: 'bg-[#E7E2DC]',
    hasPage: true,
    featured: false,
  },
  {
    slug: 'reporting',
    year: '2024 to 2025',
    group: 'data',
    title: 'Turning disconnected data into clearer decisions',
    tag: 'Data & Service Design',
    description:
      'Audited reporting scattered across spreadsheets, standalone dashboards and two disconnected systems, then rebuilt it all into a single hub, cutting reporting time by over 50% and giving teams a shared, trusted view for decisions.',
    cta: 'View case study',
    href: '/work/reporting',
    tint: 'bg-[#DDE3E6]',
    hasPage: true,
    featured: true,
  },
  {
    slug: 'cm-navigation',
    year: '2025',
    group: 'systems',
    title: 'Giving a siloed platform a navigation that scales',
    tag: 'Information Architecture',
    description:
      'Rebuilt a SaaS platform’s navigation, mapping actions by user intent rather than department. Introduced a three-tier hierarchy that let the product grow without needing to be restructured again.',
    cta: 'View case study',
    href: '/work/cm-navigation',
    tint: 'bg-[#E4E1E8]',
    hasPage: true,
    featured: false,
  },
  {
    slug: 'integrations',
    year: '2025',
    group: 'systems',
    title: 'Turning a technical bottleneck into a guided setup',
    tag: 'Integrations & Service Design',
    description:
      'Turned seven separate integration setups into one guided, self-serve flow, so teams could connect platforms such as Meta and Klaviyo without Engineering.',
    cta: 'View case study',
    href: '/work/integrations',
    tint: 'bg-[#E8E4DF]',
    hasPage: true,
    featured: false,
  },
  {
    slug: 'notifications',
    year: '2024 to 2025',
    group: 'systems',
    title: 'Designing notifications that scale beyond a single alert',
    tag: 'Systems Design',
    description:
      'Defined a notification framework that began with low-stock alerts for CSMs and now extends across data lifecycle and comments, saving hours of manual checking.',
    cta: 'View case study',
    href: '/work/notifications',
    tint: 'bg-[#E2E6E4]',
    hasPage: true,
    featured: false,
  },
  {
    slug: 'netix',
    year: '2018 to 2022',
    group: 'systems',
    title: 'Making a legacy platform simple, accessible and built to scale',
    tag: 'Enterprise Product & Rebrand',
    description:
      'Took full ownership of an outdated enterprise platform end-to-end, cutting process creation time by over 40%. Carried it through a rebrand across UK and French teams, then white-labelled it for La-Z-Boy and an IKEA bid, while advocating for WCAG 2.1 AA accessibility.',
    cta: 'View case study',
    href: '/work/netix',
    tint: 'bg-[#E9E4DE]',
    hasPage: true,
    featured: true,
  },
];

export const caseStudiesList = work.map((item, i) => ({
  ...item,
  num: String(i + 1).padStart(2, '0'),
}));


/* The thinking pieces, in the same order as the homepage. Adding a new
   piece here puts it into every article's "Read next" automatically.
   hasPage: false renders it as Coming soon and keeps it out of Read next,
   so nothing ever links to a page that isn't there. */
export const thinkingList = [
  {
    slug: 'shadcn',
    icon: Layers,
    kicker: 'Design Systems',
    readTime: '3 min read',
    title: 'The hard part of adopting ShadCN wasn’t technical.',
    description:
      'It looks like something you’d need to code to have a say in. You don’t.',
    hasPage: true,
  },
  {
    slug: 'undocumented',
    icon: FileText,
    kicker: 'Systems Thinking',
    readTime: '3 min read',
    title: 'Most “complex” systems are just undocumented ones.',
    description:
      'Most systems aren’t complex. They’re full of sensible decisions nobody ever wrote down.',
    hasPage: true,
  },
  {
    slug: 'legacy',
    icon: Wrench,
    kicker: 'Product Strategy',
    readTime: '6 min read',
    title: 'Nobody wants the new feature. They just want the old one to work.',
    description:
      'The four pressures that quietly wear a product down, and how to make the case for fixing the foundations first.',
    hasPage: true,
  },
  {
    slug: 'cheap-screens',
    icon: Sparkles,
    kicker: 'Design & AI',
    readTime: 'Coming soon',
    title: 'The prototype was never the expensive part.',
    description:
      'A working screen is the cheap bit now. Knowing which screen to build still takes the same research it always did.',
    hasPage: false,
  },
];

export function CaseStudyNav({ currentSlug }) {
  const currentIndex = caseStudiesList.findIndex((cs) => cs.slug === currentSlug);

  let prev = null;
  for (let i = currentIndex - 1; i >= 0; i--) {
    if (caseStudiesList[i].hasPage) {
      prev = caseStudiesList[i];
      break;
    }
  }

  let next = null;
  for (let i = currentIndex + 1; i < caseStudiesList.length; i++) {
    if (caseStudiesList[i].hasPage) {
      next = caseStudiesList[i];
      break;
    }
  }

  if (!prev && !next) return null;

  return (
    <div className="grid grid-cols-2 gap-6 py-12">
      <div>
        {prev && (
          <Link href={`/work/${prev.slug}`} className="group block">
            <p className="text-[10px] uppercase tracking-[0.15em] text-neutral-600 mb-2 flex items-center gap-1.5">
              <ArrowLeft className="w-3 h-3 transition-transform group-hover:-translate-x-1" /> Previous
            </p>
            <p className="text-sm font-serif text-neutral-800 group-hover:text-[#8D6553] transition-colors">
              {prev.title}
            </p>
          </Link>
        )}
      </div>
      <div className="text-right">
        {next && (
          <Link href={`/work/${next.slug}`} className="group block">
            <p className="text-[10px] uppercase tracking-[0.15em] text-neutral-600 mb-2 flex items-center justify-end gap-1.5">
              Next <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
            </p>
            <p className="text-sm font-serif text-neutral-800 group-hover:text-[#8D6553] transition-colors">
              {next.title}
            </p>
          </Link>
        )}
      </div>
    </div>
  );
}

function ContactCTA() {
  return (
    <>
      {/* Contact CTA: 48px below, 40px above. The heading's line-height adds ~8px of
          invisible space above its letters, so pt-10 makes the gaps look equal. */}
      <section className="pt-10 pb-12 border-b border-neutral-200/80 text-center space-y-6">
        <h2 className="text-2xl sm:text-3xl font-serif text-neutral-900 tracking-tight">
          Let&rsquo;s improve something together.
        </h2>
        <div>
          <a
            href="mailto:hello@jadeparrish.me"
            className="group text-base sm:text-lg font-serif text-neutral-900 underline underline-offset-8 decoration-neutral-500 hover:decoration-[#8D6553] transition-colors"
          >
            hello@jadeparrish.me{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1">
              &rarr;
            </span>
          </a>
        </div>
      </section>
    </>
  );
}

/* Read next: the pieces that follow this one, wrapping back to the start.
   Someone who has just finished reading is the warmest reader there is.
   Laid out like the case study Previous/Next: one left, one right, so the
   pair reads as a balanced spread rather than a stacked list. */
function ArticleNavCard({ article }) {
  return (
    <Link href={`/thinking/${article.slug}`} className="group block">
      <p className="text-[10px] uppercase tracking-[0.15em] text-neutral-600 mb-2">
        {article.kicker} &middot; {article.readTime}
      </p>
      <p className="text-sm font-serif text-neutral-800 leading-snug group-hover:text-[#8D6553] transition-colors">
        {article.title}
      </p>
    </Link>
  );
}

export function ArticleNav({ currentSlug }) {
  /* Only pieces that exist, so Read next can never point at a 404. */
  const published = thinkingList.filter((a) => a.hasPage);
  const i = published.findIndex((a) => a.slug === currentSlug);
  if (i === -1) return null;

  const others = [...published.slice(i + 1), ...published.slice(0, i)].slice(0, 2);
  if (others.length === 0) return null;

  const [left, right] = others;

  return (
    <div className="py-16">
      <p className="text-[10px] uppercase tracking-[0.2em] font-medium text-neutral-600 mb-10 text-center">
        Read next
      </p>
      <div className="grid grid-cols-2 gap-10">
        <div>{left && <ArticleNavCard article={left} />}</div>
        <div className="text-right">{right && <ArticleNavCard article={right} />}</div>
      </div>
    </div>
  );
}

export function ArticleFooter({ currentSlug }) {
  return (
    <>
      <ContactCTA />

      {/* Read next */}
      <ArticleNav currentSlug={currentSlug} />

      <div className="text-center pt-4">
        <Link
          href="/thinking"
          className="group inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.15em] font-medium text-neutral-600 hover:text-[#8D6553] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" /> Back to thinking
        </Link>
      </div>
    </>
  );
}

/* Footer for the index pages: the contact CTA and a way back home. */
export function IndexFooter() {
  return (
    <>
      <ContactCTA />
      <div className="text-center pt-4">
        <Link
          href="/"
          className="group inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.15em] font-medium text-neutral-600 hover:text-[#8D6553] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" /> Back to home
        </Link>
      </div>
    </>
  );
}

export function CaseStudyFooter({ currentSlug }) {
  return (
    <>
      <ContactCTA />

      {/* Previous / Next */}
      <CaseStudyNav currentSlug={currentSlug} />

      <div className="text-center pt-4">
        <Link
          href="/work"
          className="group inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.15em] font-medium text-neutral-600 hover:text-[#8D6553] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" /> Back to selected work
        </Link>
      </div>
    </>
  );
}

/* ------------------------------------------------------------------
   Thinking pieces: shared layout and typography.

   Every style decision for the articles lives here, so the three pages
   can't drift apart and a change only has to be made once.

   Measure: max-w-2xl (672px) gives roughly 68 characters per line at
   the body size, which is the comfortable range for long reading.
   The case study pages stay wider; they're scanned, not read straight
   through.
------------------------------------------------------------------- */

export function ArticlePage({ slug, children }) {
  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#1C1C1C] font-sans antialiased selection:bg-neutral-200">

      <main className="max-w-2xl mx-auto px-6 sm:px-8 pb-24">
        {children}
        <ArticleFooter currentSlug={slug} />
      </main>

      <SiteFooter />
    </div>
  );
}

export function ArticleTitle({ kicker, title, subtitle, illustration }) {
  return (
    <section className="pb-10 border-b border-neutral-200/80">
      <p className="text-[11px] uppercase tracking-[0.2em] font-medium text-neutral-600 mb-5">
        {kicker}
      </p>
      <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-normal leading-[1.15] tracking-tight [text-wrap:balance] text-neutral-900 mb-6">
        {title}
      </h1>
      {/* The standfirst was 20px against 18px body, barely a step up. At 22px
          it reads as a tier of its own without competing with the h1. */}
      <p className="text-neutral-600 text-xl sm:text-[22px] leading-[1.55] [text-wrap:pretty]">
        {subtitle}
      </p>
      {/* Illustration slot: pass one in and it sits under the standfirst. */}
      {illustration && <div className="mt-10">{illustration}</div>}
    </section>
  );
}

export function ArticleBody({ children }) {
  return (
    <article className="py-12 border-b border-neutral-200/80 space-y-7 text-neutral-700 text-[17px] sm:text-[18px] leading-[1.75] [text-wrap:pretty]">
      {children}
    </article>
  );
}

/* One gap, 28px, between every paragraph in the piece, whether or not
   they sit in the same block. An unmarked bigger gap reads as a mistake
   rather than as a pause, so only a heading breaks the flow now. Blocks
   still exist to group paragraphs with a heading, not to space them. */
export function ArticleBlock({ children }) {
  return <div className="space-y-7">{children}</div>;
}

export function ArticleHeading({ children }) {
  return (
    <h2 className="text-2xl sm:text-[28px] font-serif font-normal text-neutral-900 tracking-tight leading-[1.3] [text-wrap:balance] mt-6 mb-5">
      {children}
    </h2>
  );
}

export function ArticleBullets({ items }) {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span aria-hidden="true" className="text-[#A47864]">&middot;</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/* Somebody else's words about the work, placed next to the claim they
   support. Deliberately a different species from PullQuote: upright and
   near-black rather than italic mocha, so a reader can tell at a glance
   which voice they are in. */
export function Testimonial({ quote, name, role }) {
  /* Pass an array when the quote runs to more than one paragraph, so nothing
     has to be spliced together to fit. Quote marks open on the first and
     close on the last. */
  const paragraphs = Array.isArray(quote) ? quote : [quote];

  return (
    <figure>
      <blockquote className="font-serif text-xl sm:text-[22px] text-neutral-900 leading-[1.5] [text-wrap:pretty] space-y-5">
        {paragraphs.map((paragraph, i) => (
          <p key={i}>
            {i === 0 && <>&ldquo;</>}
            {paragraph}
            {i === paragraphs.length - 1 && <>&rdquo;</>}
          </p>
        ))}
      </blockquote>
      <figcaption className="mt-5 text-[11px] uppercase tracking-[0.15em] font-medium text-neutral-600">
        <span className="text-neutral-800">{name}</span> &middot; {role}
      </figcaption>
    </figure>
  );
}

/* Level with the section heading at 28px, not above it. A pull quote is
   emphasis; it shouldn't outrank the structure. */
export function PullQuote({ children }) {
  return (
    <p className="font-serif italic text-[24px] sm:text-[28px] text-[#8D6553] leading-[1.35] [text-wrap:balance] py-6">
      {children}
    </p>
  );
}

export function Accent({ children }) {
  return <span className="text-[#A47864] italic">{children}</span>;
}

export function ArticleLink({ href, children }) {
  return (
    <Link
      href={href}
      className="underline underline-offset-4 decoration-neutral-500 hover:decoration-[#8D6553] hover:text-[#8D6553] transition-colors"
    >
      {children}
    </Link>
  );
}

/* One footer for the whole site. `wide` matches the homepage's wider
   layout; everything else uses the narrower column. */
export function SiteFooter({ wide }) {
  return (
    <footer className="border-t border-neutral-200/80 py-10 text-xs text-neutral-500 font-normal">
      <div
        className={`${
          wide ? 'max-w-7xl lg:px-12' : 'max-w-3xl'
        } mx-auto px-6 sm:px-8 flex flex-col sm:flex-row justify-between items-center gap-4`}
      >
        <p>&copy; {new Date().getFullYear()} Jade Parrish. Built with care.</p>
        <div className="flex gap-8 tracking-wider uppercase text-[11px] items-center">
          <a
            href="https://www.linkedin.com/in/jade-parrish/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#8D6553] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:hello@jadeparrish.me"
            className="hover:text-[#8D6553] transition-colors"
          >
            Email
          </a>
          {/* "#top" scrolls to the top of any document without needing an
              anchor element, so this works on every page with no JavaScript. */}
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 hover:text-[#8D6553] transition-colors"
          >
            <ArrowUp className="w-3 h-3" /> Top
          </a>
        </div>
      </div>
    </footer>
  );
}
