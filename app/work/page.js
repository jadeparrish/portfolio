import React from 'react';
import { caseStudiesList, IndexFooter, SiteFooter, IndexRow, Plate, StateLamp } from '../caseStudiesData';

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

export default function WorkIndex() {
  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#1C1C1C] font-sans antialiased selection:bg-neutral-200">

      <main className="max-w-3xl mx-auto px-6 sm:px-8 pb-24">
        <section className="pb-10 border-b border-neutral-200/80">
          <Plate className="mb-5">Selected work &middot; {caseStudiesList.length}</Plate>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal leading-[1.15] tracking-tight [text-wrap:balance] text-neutral-900 mb-6">
            The work, and what each one actually changed.
          </h1>
          <p className="text-neutral-600 text-lg sm:text-xl leading-[1.6] [text-wrap:pretty]">
            Mostly the parts people don&rsquo;t see: how data moves, where a process
            breaks, and who gets stuck when two systems disagree.
          </p>
        </section>

        {/* A legend plate per group, with the rule running out to a count.
            No boxes: a list of work is a menu, and boxes make a menu read
            as a form. */}
        {groups.map((group) => {
          const items = caseStudiesList.filter((item) => item.group === group.id);
          if (items.length === 0) return null;

          return (
            <section key={group.id} className="py-10 border-b border-neutral-200/80">
              <div className="flex items-center gap-4 mb-2">
                <Plate>{group.label}</Plate>
                <span className="flex-1 h-px bg-neutral-900/[0.14]" />
                <Plate>{String(items.length).padStart(2, '0')}</Plate>
              </div>

              {items.map((item) => (
                <IndexRow
                  key={item.slug}
                  state={item.state}
                  num={item.num}
                  title={item.title}
                  meta={item.year}
                  href={item.href}
                />
              ))}
            </section>
          );
        })}

        {/* The key, so a lamp is never the only thing explaining itself. */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border border-neutral-900/15 px-4 py-3 font-mono text-[10px] font-medium uppercase tracking-[0.18em]">
          <Plate>Status</Plate>
          <span className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <StateLamp state="shipped" />
            <StateLamp state="building" />
            <StateLamp state="upcoming" />
          </span>
        </div>

        <IndexFooter />
      </main>

      <SiteFooter />
    </div>
  );
}
