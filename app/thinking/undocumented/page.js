import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { ArticleFooter, SiteFooter } from '../../caseStudiesData';

export const metadata = {
  title: "Most \"complex\" systems are just undocumented ones: Jade Parrish",
  description: 'A Service Designer on why complexity gets mistaken for expertise, and why the real craft is simplifying and telling a clear story.',
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

export default function UndocumentedArticle() {
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
            Systems Thinking &middot; 2 min read
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal leading-[1.15] tracking-tight text-neutral-900 mb-6">
            Most &ldquo;complex&rdquo; systems are just undocumented ones.
          </h1>
          <p className="text-neutral-600 text-base sm:text-lg leading-relaxed max-w-xl">
            Why complexity gets mistaken for expertise, and why the real craft is
            simplifying a service and telling a clear story about how it works.
          </p>
        </section>

        {/* Body */}
        <article className="py-12 border-b border-neutral-200/80 space-y-12 text-neutral-700 text-base leading-relaxed">
          <div className="space-y-4">
            <p>
              Ask almost any team how their service actually works, and they&rsquo;ll
              describe a maze: exceptions, workarounds, and a process map that only makes
              sense to the person walking you through it. There&rsquo;s a quiet temptation
              to read that maze as sophistication, to treat a service as complex because
              it&rsquo;s hard to explain.
            </p>
            <p>
              In my experience auditing services and internal tools, that&rsquo;s rarely
              true. What looks like complexity is usually a series of reasonable decisions,
              made under pressure, that were never written down or joined up. The
              workarounds became &ldquo;standard practice&rdquo; long before anyone
              stepped back to ask why, which is exactly what I found mapping{' '}
              <InlineLink href="/work/netix">NetIX&rsquo;s workflows</InlineLink> before
              its rebuild, and again auditing{' '}
              <InlineLink href="/work/stock">stock and reporting data</InlineLink>{' '}
              at another company.
            </p>
            <p>
              None of this is a new observation. Technical debt and legibility have been
              written about for years. What I can add is that it&rsquo;s been true every
              time I&rsquo;ve looked.
            </p>
          </div>

          <div>
            <Heading>The trap of adding without mapping</Heading>
            <div className="space-y-4">
              <p>
                It&rsquo;s easy to make a service more complicated. Anyone can add another
                exception, another spreadsheet, another handoff to solve a problem in front
                of them today. When teams are under pressure, these additions pile up
                without anyone owning the whole picture.
              </p>
              <p>The result isn&rsquo;t true complexity. It&rsquo;s just noise:</p>
              <Bullets
                items={[
                  'Simple rules get buried under exceptions built for one-off cases',
                  'The reasoning behind a decision lives only in one person\u2019s head',
                  'Every change feels risky, because no one can see how the parts connect',
                ]}
              />
              <p>
                Making something intricate takes very little effort. Making it
                understandable takes real skill.
              </p>
            </div>
          </div>

          <div>
            <Heading>Cleverness is simplification</Heading>
            <div className="space-y-4">
              <p>
                The best designers and engineers I&rsquo;ve worked with aren&rsquo;t the
                ones who produce the most intricate solution. They&rsquo;re the ones who
                can take a tangle of edge cases, distil it to its core logic, and explain
                it to a room of stakeholders in five minutes.
              </p>
              <p>Cleverness looks like:</p>
              <Bullets
                items={[
                  'Choosing the shared, boring pattern over the bespoke one, because it lowers the load on everyone else',
                  'Turning a process only one person understands into a map anyone on the team can follow',
                  'Accepting that if you can\u2019t sketch how a service works on a napkin, you probably don\u2019t understand it yet',
                ]}
              />
            </div>
          </div>

          <div>
            <Heading>Systems are stories</Heading>
            <div className="space-y-4">
              <p>
                A process tells people what to do. Documentation and structure tell people
                why it matters. When a service has no clear story, every new person joining
                has to become a detective, piecing it together from old tickets,
                half-remembered decisions and whoever happens to still be around.
              </p>
              <p>Treat documentation and structure as storytelling, and things change:</p>
              <Bullets
                items={[
                  'Intent becomes obvious: someone new can follow a request end to end without a guided tour',
                  'Boundaries become clear: teams know exactly where a new piece of work belongs',
                  'Maintenance becomes routine: people spend less time working out how something functions, and more time making it better',
                ]}
              />
            </div>
          </div>

          <div className="space-y-4">
            <p className="font-serif text-2xl text-neutral-900 leading-snug">
              Complexity is easy.{' '}
              <span className="text-[#A47864] italic">Clarity takes discipline.</span>
            </p>
            <p>
              Give a team shared structure, and encourage them to tell the story of how
              their service actually works, and the &ldquo;complex&rdquo; system tends to
              disappear. What&rsquo;s left is something clear and reliable, and the real
              cleverness of the people who made it that way.
            </p>
          </div>
        </article>

        <ArticleFooter />
      </main>

      <SiteFooter />
    </div>
  );
}
