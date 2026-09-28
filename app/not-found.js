import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SiteFooter } from './caseStudiesData';

/* Next.js renders this for any route that doesn't exist. It sits inside the
   root layout, so it gets the site header and the skip link for free.
   Laid out like a case study, because everything else here is one. */
export default function NotFound() {
  const glance = [
    ['Role', 'Sole designer, sole suspect'],
    ['Worked with', 'Nobody, evidently'],
    ['Focus', 'A link that goes nowhere'],
    ['Outcome', 'You, here'],
  ];

  const ways = [
    { href: '/work', label: 'Selected work' },
    { href: '/thinking', label: 'Thinking' },
    { href: '/', label: 'Home' },
  ];

  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#1C1C1C] font-sans antialiased selection:bg-neutral-200">
      <main className="max-w-2xl mx-auto px-6 sm:px-8 pb-24">
        <section className="pb-8 border-b border-neutral-200/80">
          <p className="text-[11px] uppercase tracking-[0.2em] font-medium text-neutral-600 mb-5 font-mono">
            404 &middot; Not Found
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-normal leading-[1.15] tracking-tight [text-wrap:balance] text-neutral-900">
            This page has been thoroughly researched and does not exist.
          </h1>
        </section>

        <section className="py-8 border-b border-neutral-200/80">
          <div className="grid grid-cols-2 gap-x-6 gap-y-7">
            {glance.map(([label, value]) => (
              <div key={label}>
                <p className="text-[10px] uppercase tracking-[0.15em] text-neutral-600 mb-1.5">
                  {label}
                </p>
                <p className="text-sm font-medium text-neutral-900 [text-wrap:balance]">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-12 border-b border-neutral-200/80">
          <p className="text-[11px] uppercase tracking-[0.2em] font-medium text-neutral-600 mb-6">
            Setting the Scene
          </p>
          <p className="text-neutral-700 text-[17px] sm:text-[18px] leading-[1.75] [text-wrap:pretty]">
            I spend a good deal of this website arguing that{' '}
            <Link
              href="/thinking/undocumented"
              className="underline underline-offset-4 decoration-neutral-500 hover:decoration-[#8D6553] hover:text-[#8D6553] transition-colors"
            >
              most complex systems are just undocumented ones
            </Link>
            . Somewhere on it there is a link pointing at nothing, and I have not
            written that one down either.
          </p>
        </section>

        <section className="py-12 border-b border-neutral-200/80">
          <p className="text-[11px] uppercase tracking-[0.2em] font-medium text-neutral-600 mb-6">
            Reflection
          </p>
          <p className="font-serif italic text-[24px] sm:text-[28px] text-[#8D6553] leading-[1.35] [text-wrap:balance]">
            Fix the link.
          </p>
        </section>

        <nav className="pt-10 flex flex-col sm:flex-row gap-5 sm:gap-10">
          {ways.map((way) => (
            <Link
              key={way.href}
              href={way.href}
              className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-medium text-neutral-900 hover:text-[#8D6553] transition-colors"
            >
              {way.label}
              <ArrowRight className="w-3.5 h-3.5 text-[#A47864] transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </nav>
      </main>

      <SiteFooter />
    </div>
  );
}
