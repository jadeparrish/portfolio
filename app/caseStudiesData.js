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
    <div className="grid grid-cols-2 gap-6 py-10 border-t border-neutral-200/80 mt-10">
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
