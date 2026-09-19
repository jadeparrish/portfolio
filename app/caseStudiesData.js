import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

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
    slug: 'warehouse',
    title: 'Making complex warehouse operations easier to navigate',
    tag: 'Operations & Service Design',
    hasPage: false,
  },
  {
    num: '03',
    slug: 'commercial-value',
    title: 'Helping commercial teams see the value they create',
    tag: 'Commercial Product',
    hasPage: false,
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
    slug: 'netix',
    title: 'Making a legacy platform simple, accessible and built to scale',
    tag: 'Enterprise Product & Rebrand',
    hasPage: true,
  },
  {
    num: '06',
    slug: 'cm-navigation',
    title: 'Making a scattered platform navigable at scale',
    tag: 'Product Design & Information Architecture',
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
          <Link href={`/work/${next.slug}`} className="group block">
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

export function CaseStudyFooter({ currentSlug }) {
  return (
    <>
      {/* Contact CTA: owns its own 48px above and below, with a rule underneath */}
      <section className="py-12 border-b border-neutral-200/80 text-center space-y-6">
        <h2 className="text-2xl sm:text-3xl font-serif text-neutral-900 tracking-tight">
          Let&rsquo;s improve something together.
        </h2>
        <div>
          <a
            href="mailto:hello@jadeparrish.me"
            className="text-base sm:text-lg font-serif text-neutral-900 underline underline-offset-8 decoration-neutral-300 hover:decoration-[#A47864] transition-colors"
          >
            hello@jadeparrish.me &rarr;
          </a>
        </div>
      </section>

      {/* Previous / Next */}
      <CaseStudyNav currentSlug={currentSlug} />

      <div className="text-center pt-4">
        <Link
          href="/#work"
          className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.15em] font-medium text-neutral-600 hover:text-[#A47864] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to selected work
        </Link>
      </div>
    </>
  );
}
