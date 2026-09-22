import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { ArticleFooter, SiteFooter } from '../../caseStudiesData';

export const metadata = {
  title: "Nobody wants the new feature. They want the old one to work: Jade Parrish",
  description: 'A service designer on the pull between shipping something new and making the old thing reliable, and what replacing a legacy platform taught me.',
};

function Heading({ children }) {
  return (
    <h2 className="text-2xl font-serif text-neutral-900 tracking-tight mb-4">{children}</h2>
  );
}

function Bullets({ items }) {
  return (
    <ul className="space-y-2.5 text-sm mb-4">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="text-[#A47864]">&middot;</span> {item}
        </li>
      ))}
    </ul>
  );
}

function InlineLink({ href, children }) {
  return (
    <Link
      href={href}
      className="underline underline-offset-4 decoration-neutral-300 hover:decoration-[#A47864] hover:text-[#A47864] transition-colors"
    >
      {children}
    </Link>
  );
}

export default function LegacyArticle() {
  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#1C1C1C] font-sans antialiased selection:bg-neutral-200">
      {/* Top Navigation */}
      <header className="max-w-3xl mx-auto px-6 sm:px-8 py-8 sm:py-10">
        <Link
          href="/#thinking"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-neutral-500 hover:text-[#A47864] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to thinking
        </Link>
      </header>

      <main className="max-w-3xl mx-auto px-6 sm:px-8 pb-24">
        {/* Title */}
        <section className="pb-8 border-b border-neutral-200/80">
          <p className="text-[11px] uppercase tracking-[0.2em] font-medium text-neutral-400 mb-4">
            Product Strategy &middot; 2 min read
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal leading-[1.15] tracking-tight text-neutral-900 mb-6">
            Nobody wants the new feature. They want the old one to work.
          </h1>
          <p className="text-neutral-600 text-base sm:text-lg leading-relaxed max-w-xl">
            On the pull between shipping something new and making the old thing reliable,
            and what replacing a legacy platform taught me about the middle ground.
          </p>
        </section>

        {/* Body */}
        <article className="py-12 border-b border-neutral-200/80 space-y-12 text-neutral-700 text-base leading-relaxed">
          <div className="space-y-4">
            <p>
              Almost every growing organisation hits the same wall. Leadership wants to
              ship new capability to keep customers interested and win new business, but
              the service is standing on foundations that can barely support what&rsquo;s
              already there.
            </p>
            <p>
              The natural response is to compromise: build the new thing on top of what&rsquo;s
              already fragile. In my experience that rarely works. You spend your time
              patching edge cases, delivery slows everywhere, and the experience gets worse
              at both ends, the old and the new.
            </p>
            <p>
              This tension isn&rsquo;t unique to any one company, and plenty of people have
              argued both sides of it. What I can offer is what actually happened when I sat
              on each side of that choice.
            </p>
          </div>

          <div>
            <Heading>The pull in three directions</Heading>
            <div className="space-y-4">
              <p>The tension usually comes down to three groups pulling against each other:</p>
              <Bullets
                items={[
                  'Leadership sees speed and growth. New features win deals and signal momentum, so pausing to fix the foundations can feel like standing still.',
                  'Product and design carry the daily friction. They want to ship something good, but old technology turns a simple change into a complicated one.',
                  'Engineering can get stuck between two right answers. Even when everyone agrees the foundation needs work, it\u2019s easy for a team to spend weeks debating the ideal architecture instead of picking a workable one and building it.',
                ]}
              />
              <p>
                When leadership pushes for innovation without allowing time to fix the
                base, and the team gets stuck debating the ideal fix, what&rsquo;s left is
                a pile of mismatched pieces held together by workarounds.
              </p>
            </div>
          </div>

          <div>
            <Heading>Patching versus replacing</Heading>
            <div className="space-y-4">
              <p>
                On one product I worked on, the plan was to keep innovating directly on top
                of an old system. The intent was reasonable: keep moving without stopping
                to rebuild. But it meant every new feature was also a fight against the
                legacy code underneath it, and that friction showed up as delays and
                fragile releases.
              </p>
              <p>
                On another, at NetEDI, we took the harder route and replaced the legacy
                platform outright, rather than layering new features on top of it. That
                work is the{' '}
                <InlineLink href="/work/netix">NetIX Redesign and Rebrand</InlineLink>{' '}
                case study. Once the team was on a single, clean foundation, feedback came
                back faster, the core platform improved without maintaining two competing
                systems, and new features actually shipped quicker, because they
                weren&rsquo;t fighting old code to get there.
              </p>
            </div>
          </div>

          <div>
            <Heading>The hidden cost of &ldquo;no downtime&rdquo;</Heading>
            <div className="space-y-4">
              <p>
                Refusing to invest in the foundations because there&rsquo;s no time is a
                false economy. Build on something brittle for long enough, and:
              </p>
              <Bullets
                items={[
                  'Delivery slows down: what should take two weeks takes two months, because the team is fighting old constraints',
                  'Quality slips at both ends: new things don\u2019t work as well as they could, and old things break in ways nobody expects',
                  'Trust erodes: people don\u2019t care about the roadmap if the tool they use every day feels unreliable',
                ]}
              />
            </div>
          </div>

          <div>
            <Heading>Finding the pragmatic middle ground</Heading>
            <div className="space-y-4">
              <p>
                Leadership will rarely grant six months to rewrite everything, and usually
                they shouldn&rsquo;t. The answer is in how the foundational work gets
                framed and structured:
              </p>
              <Bullets
                items={[
                  'Replace, don\u2019t layer: when a part of a system has hit its limit, replace that part properly rather than wrapping it in another workaround',
                  'Pick good enough over perfect: the aim isn\u2019t the ideal architecture, it\u2019s a solid pattern the team can actually ship',
                  'Frame it in terms leadership can act on: cost, risk and outcome, not just tidiness',
                ]}
              />
            </div>
          </div>

          <div className="space-y-4">
            <p className="font-serif text-2xl text-neutral-900 leading-snug">
              If you want a service that feels new, you can&rsquo;t build it on
              foundations that are{' '}
              <span className="text-[#A47864] italic">falling apart.</span>
            </p>
            <p>
              The real work of design and product strategy isn&rsquo;t only deciding what
              to build next. It&rsquo;s making the case for fixing what&rsquo;s already
              there, first.
            </p>
          </div>
        </article>

        <ArticleFooter />
      </main>

      <SiteFooter />
    </div>
  );
}
