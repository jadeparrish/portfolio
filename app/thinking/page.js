import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { thinkingList, IndexFooter, SiteFooter } from '../caseStudiesData';

export const metadata = {
  title: 'Thinking: Jade Parrish',
  description:
    'Writing on design systems, why complexity is usually just missing documentation, and why fixing the foundations tends to pay for itself.',
};

export default function ThinkingIndex() {
  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#1C1C1C] font-sans antialiased selection:bg-neutral-200">
      <header className="max-w-2xl mx-auto px-6 sm:px-8 py-8 sm:py-10">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-neutral-500 hover:text-[#8D6553] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" /> Back to home
        </Link>
      </header>

      <main className="max-w-2xl mx-auto px-6 sm:px-8 pb-24">
        <section className="pb-10 border-b border-neutral-200/80">
          <p className="text-[11px] uppercase tracking-[0.2em] font-medium text-neutral-600 mb-5">
            Thinking
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-normal leading-[1.15] tracking-tight [text-wrap:balance] text-neutral-900 mb-6">
            Things I keep running into, written down.
          </h1>
          <p className="text-neutral-600 text-lg sm:text-xl leading-[1.6] [text-wrap:pretty]">
            Mostly about systems: why they get tangled, why the tangle is usually
            undocumented rather than complex, and what it costs to leave it alone.
          </p>
        </section>

        <div className="py-12 border-b border-neutral-200/80 divide-y divide-neutral-200/70">
          {thinkingList.map((article) => (
            <Link
              key={article.slug}
              href={`/thinking/${article.slug}`}
              className="group flex gap-5 py-10 first:pt-0"
            >
              <article.icon
                className="w-5 h-5 shrink-0 mt-1 text-[#A47864]"
                strokeWidth={1.5}
              />
              <div className="flex-1">
                <p className="text-[10px] uppercase tracking-[0.15em] text-neutral-600 font-medium mb-2">
                  {article.kicker} &middot; {article.readTime}
                </p>
                <h2 className="font-serif text-xl sm:text-2xl text-neutral-900 leading-snug tracking-tight [text-wrap:balance] transition-colors group-hover:text-[#8D6553]">
                  {article.title}
                </h2>
                <p className="mt-3 text-neutral-700 text-[17px] sm:text-[18px] leading-[1.75] [text-wrap:pretty]">
                  {article.description}
                </p>
                <p className="mt-4 inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-medium text-neutral-900">
                  Read it
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </p>
              </div>
            </Link>
          ))}
        </div>

        <IndexFooter />
      </main>

      <SiteFooter />
    </div>
  );
}
