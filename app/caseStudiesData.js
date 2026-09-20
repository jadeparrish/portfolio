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
    title: 'Giving a scattered platform a navigation that scales',
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
    hasPage: false,
  },
  {
    num: '08',
    slug: 'notifications',
    title: 'Designing notifications that scale beyond a single alert',
    tag: 'Product Design & Systems',
    hasPage: false,
  },
  {
    num: '09',
    slug: 'integrations',
    title: 'Turning a technical bottleneck into a guided setup',
    tag: 'Product Design',
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
      {/* Contact CTA: 48px below, 40px above. The heading's line-height adds ~8px of
          invisible space above its letters, so pt-10 makes the gaps look equal. */}
      <section className="pt-10 pb-12 border-b border-neutral-200/80 text-center space-y-6">
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
