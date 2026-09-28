import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { caseStudiesList, IndexFooter, SiteFooter } from '../caseStudiesData';

export const metadata = {
  title: 'Selected work: Jade Parrish',
  description:
    'Case studies in service design, systems and product: reporting, stock and fulfilment, navigation, consent, notifications and integrations.',
};

/* Grouped by the kind of problem rather than by how long each piece is,
   because somebody arrives here asking whether I have done their sort of
   work, not which of these is the longest. Order matches caseStudiesList,
   so the numbers still run straight down the page. */
const groups = [
  { id: 'service', label: 'Service design' },
  { id: 'data', label: 'Data and reporting' },
  { id: 'systems', label: 'Systems and platform' },
];

function WorkRow({ item }) {
  const inner = (
    <>
      <div className="sm:w-16 shrink-0">
        <span className="font-mono text-lg text-neutral-500">{item.num}</span>
      </div>
      <div className="flex-1">
        <p className="text-[10px] uppercase tracking-[0.15em] text-neutral-600 font-medium mb-2">
          {item.tag}
        </p>
        <h2 className="font-serif text-xl sm:text-2xl text-neutral-900 leading-snug tracking-tight [text-wrap:balance] transition-colors group-hover:text-[#8D6553]">
          {item.title}
        </h2>
        <p className="mt-3 text-neutral-700 text-[17px] sm:text-[18px] leading-[1.75] [text-wrap:pretty]">
          {item.description}
        </p>
        <p className="mt-4 inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-medium text-neutral-900">
          {item.cta}
          {item.hasPage && (
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          )}
        </p>
      </div>
    </>
  );

  const shell = 'group flex flex-col sm:flex-row gap-3 sm:gap-6 py-10 first:pt-0';

  return item.hasPage ? (
    <Link href={item.href} className={shell}>
      {inner}
    </Link>
  ) : (
    <div className={`${shell} opacity-70`}>{inner}</div>
  );
}

export default function WorkIndex() {
  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#1C1C1C] font-sans antialiased selection:bg-neutral-200">

      <main className="max-w-3xl mx-auto px-6 sm:px-8 pb-24">
        <section className="pb-10 border-b border-neutral-200/80">
          <p className="text-[11px] uppercase tracking-[0.2em] font-medium text-neutral-600 mb-5">
            Selected work
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal leading-[1.15] tracking-tight [text-wrap:balance] text-neutral-900 mb-6">
            The work, and what each one actually changed.
          </h1>
          <p className="text-neutral-600 text-lg sm:text-xl leading-[1.6] [text-wrap:pretty]">
            Mostly the parts people don&rsquo;t see: how data moves, where a process
            breaks, and who gets stuck when two systems disagree.
          </p>
        </section>

        {groups.map((group) => {
          const items = caseStudiesList.filter((item) => item.group === group.id);
          if (items.length === 0) return null;

          return (
            <section key={group.id} className="py-12 border-b border-neutral-200/80">
              <h2 className="text-[11px] uppercase tracking-[0.2em] font-medium text-neutral-600 mb-8">
                {group.label}
              </h2>
              <div className="divide-y divide-neutral-200/70">
                {items.map((item) => (
                  <WorkRow key={item.slug} item={item} />
                ))}
              </div>
            </section>
          );
        })}

        <IndexFooter />
      </main>

      <SiteFooter />
    </div>
  );
}
