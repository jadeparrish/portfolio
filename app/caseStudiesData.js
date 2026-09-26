import Link from 'next/link';
import { ArrowLeft, ArrowRight, ArrowUp } from 'lucide-react';

/* Keyboard focus. Every link in this file uses it, so someone tabbing
   through the site always sees where they are. */
const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A47864] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F9F8F6] rounded-sm';

export const caseStudiesList = [
  {
    num: '01',
    slug: 'send',
    title: 'Making SEND journeys easier for families to navigate',
    tag: 'Service Design',
    hasPage: false,
  },
  {
    num: '02',
    slug: 'commercial-value',
    title: 'Helping commercial teams see the value they create',
    tag: 'Commercial Product',
    hasPage: true,
  },
  {
    num: '03',
    slug: 'stock',
    title: 'Bringing stock and fulfilment data into one clear view',
    tag: 'Operations & Service Design',
    hasPage: true,
  },
  {
    num: '04',
    slug: 'reporting',
    title: 'Turning disconnected data into clearer decisions',
    tag: 'Internal Platform',
    hasPage: true,
  },
  {
    num: '05',
    slug: 'cm-navigation',
    title: 'Giving a siloed platform a navigation that scales',
    tag: 'Product Design & Information Architecture',
    hasPage: true,
  },
  {
    num: '06',
    slug: 'netix',
    title: 'Making a legacy platform simple, accessible and built to scale',
    tag: 'Enterprise Product & Rebrand',
    hasPage: true,
  },
  {
    num: '07',
    slug: 'consent',
    title: 'Turning a compliance risk into a simple first step',
    tag: 'Compliance & Service Design',
    hasPage: true,
  },
  {
    num: '08',
    slug: 'notifications',
    title: 'Designing notifications that scale beyond a single alert',
    tag: 'Product Design & Systems',
    hasPage: true,
  },
  {
    num: '09',
    slug: 'integrations',
    title: 'Turning a technical bottleneck into a guided setup',
    tag: 'Product Design',
    hasPage: true,
  },
];

/* The thinking pieces, in the same order as the homepage. Adding a new
   piece here puts it into every article's "Read next" automatically. */
export const thinkingList = [
  {
    slug: 'shadcn',
    kicker: 'Design systems',
    readTime: '4 min read',
    title: 'The hard part of adopting ShadCN wasn’t technical.',
  },
  {
    slug: 'undocumented',
    kicker: 'Systems Thinking',
    readTime: '2 min read',
    title: 'Most “complex” systems are just undocumented ones.',
  },
  {
    slug: 'legacy',
    kicker: 'Product Strategy',
    readTime: '6 min read',
    title: 'Nobody wants the new feature. They just want the old one to work.',
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
          <Link href={`/work/${prev.slug}`} className={`group block ${focusRing}`}>
            <p className="text-[10px] uppercase tracking-[0.15em] text-neutral-400 mb-2 flex items-center gap-1.5">
              <ArrowLeft className="w-3 h-3" /> Previous
            </p>
            <p className="text-sm font-serif text-neutral-800 group-hover:text-[#A47864] transition-colors">
              {prev.title}
            </p>
          </Link>
        )}
      </div>
      <div className="text-right">
        {next && (
          <Link href={`/work/${next.slug}`} className={`group block ${focusRing}`}>
            <p className="text-[10px] uppercase tracking-[0.15em] text-neutral-400 mb-2 flex items-center justify-end gap-1.5">
              Next <ArrowRight className="w-3 h-3" />
            </p>
            <p className="text-sm font-serif text-neutral-800 group-hover:text-[#A47864] transition-colors">
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
            className={`text-base sm:text-lg font-serif text-neutral-900 underline underline-offset-8 decoration-neutral-300 hover:decoration-[#A47864] transition-colors ${focusRing}`}
          >
            hello@jadeparrish.me &rarr;
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
    <Link href={`/thinking/${article.slug}`} className={`group block ${focusRing}`}>
      <p className="text-[10px] uppercase tracking-[0.15em] text-neutral-400 mb-2">
        {article.kicker} &middot; {article.readTime}
      </p>
      <p className="text-sm font-serif text-neutral-800 leading-snug group-hover:text-[#A47864] transition-colors">
        {article.title}
      </p>
    </Link>
  );
}

export function ArticleNav({ currentSlug }) {
  const i = thinkingList.findIndex((a) => a.slug === currentSlug);
  if (i === -1) return null;

  const others = [...thinkingList.slice(i + 1), ...thinkingList.slice(0, i)].slice(0, 2);
  if (others.length === 0) return null;

  const [left, right] = others;

  return (
    <div className="py-16">
      <p className="text-[10px] uppercase tracking-[0.2em] font-medium text-neutral-400 mb-10 text-center">
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
          href="/#thinking"
          className={`inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.15em] font-medium text-neutral-600 hover:text-[#A47864] transition-colors ${focusRing}`}
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to thinking
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
          href="/#work"
          className={`inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.15em] font-medium text-neutral-600 hover:text-[#A47864] transition-colors ${focusRing}`}
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to selected work
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
      <header className="max-w-2xl mx-auto px-6 sm:px-8 py-8 sm:py-10">
        <Link
          href="/#thinking"
          className={`inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-neutral-500 hover:text-[#A47864] transition-colors ${focusRing}`}
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to thinking
        </Link>
      </header>

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
      <p className="text-[11px] uppercase tracking-[0.2em] font-medium text-neutral-400 mb-5">
        {kicker}
      </p>
      <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-normal leading-[1.15] tracking-tight [text-wrap:balance] text-neutral-900 mb-6">
        {title}
      </h1>
      <p className="text-neutral-600 text-lg sm:text-xl leading-[1.6] [text-wrap:pretty]">
        {subtitle}
      </p>
      {/* Illustration slot: pass one in and it sits under the standfirst. */}
      {illustration && <div className="mt-10">{illustration}</div>}
    </section>
  );
}

export function ArticleBody({ children }) {
  return (
    <article className="py-12 border-b border-neutral-200/80 space-y-14 text-neutral-700 text-[17px] sm:text-[18px] leading-[1.75] [text-wrap:pretty]">
      {children}
    </article>
  );
}

export function ArticleBlock({ children }) {
  return <div className="space-y-5">{children}</div>;
}

export function ArticleHeading({ children }) {
  return (
    <h2 className="text-2xl sm:text-[28px] font-serif font-normal text-neutral-900 tracking-tight leading-[1.3] [text-wrap:balance] mb-5">
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

export function PullQuote({ children }) {
  return (
    <p className="font-serif text-[26px] sm:text-[30px] text-neutral-900 leading-[1.35] [text-wrap:balance] py-6">
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
      className={`underline underline-offset-4 decoration-neutral-300 hover:decoration-[#A47864] hover:text-[#A47864] transition-colors ${focusRing}`}
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
            className={`hover:text-[#A47864] transition-colors ${focusRing}`}
          >
            LinkedIn
          </a>
          <a
            href="mailto:hello@jadeparrish.me"
            className={`hover:text-[#A47864] transition-colors ${focusRing}`}
          >
            Email
          </a>
          {/* "#top" scrolls to the top of any document without needing an
              anchor element, so this works on every page with no JavaScript. */}
          <a
            href="#top"
            className={`inline-flex items-center gap-1.5 hover:text-[#A47864] transition-colors ${focusRing}`}
          >
            <ArrowUp className="w-3 h-3" /> Top
          </a>
        </div>
      </div>
    </footer>
  );
}
