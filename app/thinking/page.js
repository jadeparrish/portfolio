import React from 'react';
import { thinkingList, IndexFooter, SiteFooter, IndexRow, Plate, StateLamp } from '../caseStudiesData';

export const metadata = {
  title: 'Thinking: Jade Parrish',
  description:
    'Writing on design systems, why complexity is usually just missing documentation, and why fixing the foundations tends to pay for itself.',
};

export default function ThinkingIndex() {
  const live = thinkingList.filter((a) => a.state === 'live').length;

  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#1C1C1C] font-sans antialiased selection:bg-neutral-200">

      <main className="max-w-2xl mx-auto px-6 sm:px-8 pb-24">
        <section className="pb-10 border-b border-neutral-200/80">
          <Plate className="mb-5">Thinking &middot; {live} live</Plate>
          <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-normal leading-[1.15] tracking-tight [text-wrap:balance] text-neutral-900 mb-6">
            Things I keep finding, written down.
          </h1>
          <p className="text-neutral-600 text-lg sm:text-xl leading-[1.6] [text-wrap:pretty]">
            Mostly about systems: why they get confusing, how they end up
            undocumented, and what it costs not to fix the foundations. Usually written
            months later, because I&rsquo;m still overthinking it.
          </p>
        </section>

        {/* The same row component as /work. A piece that isn't finished no
            longer needs its own dimmed treatment: the amber lamp and the
            words "Being written" say exactly where it is. */}
        <div className="py-10 border-b border-neutral-200/80">
          {thinkingList.map((article) => (
            <IndexRow
              key={article.slug}
              state={article.state}
              num={article.num}
              title={article.title}
              description={article.description}
              meta={article.readTime}
              href={article.hasPage ? `/thinking/${article.slug}` : null}
            />
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border border-neutral-900/15 px-4 py-3 font-mono text-[10px] font-medium uppercase tracking-[0.18em]">
          <Plate>Status</Plate>
          <span className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <StateLamp state="live" />
            <StateLamp state="writing" />
            <StateLamp state="planned" />
          </span>
        </div>

        <IndexFooter />
      </main>

      <SiteFooter />
    </div>
  );
}
