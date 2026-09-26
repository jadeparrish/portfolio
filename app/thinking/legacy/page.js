import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { ArticleFooter, SiteFooter } from '../../caseStudiesData';

export const metadata = {
  title: "Nobody wants the new feature. They just want the old one to work: Jade Parrish",
  description: 'A service designer on why shipping something new and keeping the old thing reliable are so hard to balance, and what replacing a legacy platform taught me.',
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
            Product Strategy &middot; 7 min read
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal leading-[1.15] tracking-tight text-neutral-900 mb-6">
            Nobody wants the new feature. They just want the old one to work.
          </h1>
          <p className="text-neutral-600 text-base sm:text-lg leading-relaxed max-w-xl">
            Shipping something new and keeping the old thing reliable are hard to
            balance. Here&rsquo;s what replacing a legacy platform taught me about the
            middle ground.
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
              already fragile, whilst trying to improve the foundations too. In my
              experience that rarely works. You spend your time patching edge cases,
              delivery slows everywhere, and the experience gets worse at both ends, the
              old and the new.
            </p>
            <p>
              This tension isn&rsquo;t unique to any one company, and plenty of people have
              argued both sides of it. What I can offer is what actually happened when I sat
              on each side of that choice.
            </p>
          </div>

          <div>
            <Heading>Four pressures at once</Heading>
            <div className="space-y-4">
              <p>In practice, it&rsquo;s rarely just two sides. It&rsquo;s usually four pressures at once:</p>
              <Bullets
                items={[
                  'Leadership pushes for innovation. New features win deals and signal momentum, so pausing to fix the foundations can feel like standing still.',
                  'The foundations are already too weak to build on cleanly. Every new thing costs more to ship and delivers less than it should, because it\u2019s fighting the platform underneath it.',
                  'At the same time, pressure to streamline and cut costs squeezes the very investment innovation needs, and management doesn\u2019t always agree on which to prioritise.',
                  'Managers don\u2019t always stay long enough for one direction to stick, and even the ones who do can struggle to manage upwards, so priorities keep shifting either way. That pressure to show impact quickly favours starting something visible over finishing what\u2019s already there, and that adds another layer to the pile.',
                ]}
              />
              <p>
                Any one of these on its own is manageable. Together, they&rsquo;re how a
                service ends up held together by workarounds nobody remembers agreeing to.
              </p>
              <p>
                I&rsquo;ve seen this kind of misalignment play out a few times, and once in
                a very real way. Design started
                working in Shape Up cycles, without much training in how the method was
                meant to run. Engineering, reasonably, saw no reason to give up a rhythm
                that was already working for them and stayed in sprints. Neither choice was
                wrong on its own, but the result was two different definitions of
                &ldquo;done,&rdquo; running on the same product at the same time. Without an
                agreement between the two sides, it didn&rsquo;t bring design and
                engineering closer. It added another seam between two teams that already
                needed to be closer, not further apart.
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
                fragile releases. The funny part is that it only delayed the inevitable.
                Before I left, we overhauled the whole thing anyway, which is part of what
                led to the{' '}
                <InlineLink href="/thinking/shadcn">ShadCN work</InlineLink>.
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
            <Heading>The cost is a leak, not a bill</Heading>
            <div className="space-y-4">
              <p>
                Most conversations about this treat the cost as a series of one-off
                charges: this feature took longer, that bug took a day to trace. That
                framing makes it easy to justify each individual decision to delay the
                fix, because no single instance looks large enough to act on.
              </p>
              <p>
                The more honest comparison is a slow leak behind a wall. Every workaround
                left in place keeps quietly doing damage to everything built around it,
                until one day a small, ordinary change needs far more care than it should,
                and nobody can quite explain why. By the time the damage is visible enough
                for leadership to notice, it&rsquo;s already cost far more to reach that
                point than it would have to fix early.
              </p>
            </div>
          </div>

          <div>
            <Heading>Why the invisible work rarely gets rewarded</Heading>
            <div className="space-y-4">
              <p>
                Here&rsquo;s the part I rarely hear said out loud: even
                people who know the right call is to stabilise something rather than ship
                the next new thing are individually drawn toward the visible option,
                because that&rsquo;s what gets noticed, reviewed and promoted.
              </p>
              <p>
                Preventing a problem well means, from the outside, that nothing happened.
                Shipping something new is a story anyone can tell in a meeting. That&rsquo;s
                not a character problem in any one person, it&rsquo;s an incentive problem
                across the whole organisation, and it&rsquo;s a big part of why foundations
                keep losing to features even when everyone privately agrees they
                shouldn&rsquo;t.
              </p>
              <p>
                I felt this directly at one company. For a long time, saying the reporting
                numbers didn&rsquo;t line up wasn&rsquo;t enough on its own, and that&rsquo;s
                a fair position for anyone to hold: a general worry is a hard thing to act
                on without more to point to. What actually changed things was building the
                argument properly, auditing every reporting view and documenting exactly
                where and why the numbers diverged, then taking that to the CTO as a
                proposal rather than a concern. &ldquo;This is a mess&rdquo; only became a
                mandate to fix it once it came with the evidence attached.
              </p>
              <p>
                That&rsquo;s where I think design has a specific, under-discussed job to
                do: turning an invisible risk into something leadership can actually act
                on, in terms of risk, time and outcome, rather than leaving it as a
                technical concern that never makes it into the room where the decision
                gets made.
              </p>
            </div>
          </div>

          <div>
            <Heading>Most of the risk lives below the screen</Heading>
            <div className="space-y-4">
              <p>
                A lot of design attention stops at the interface: does this flow make
                sense, is this state clear, is this accessible. Those questions matter, but
                on their own they miss where a lot of the real risk sits, which is
                in the operational layer underneath. How data moves between systems, who
                gets affected when two tools disagree, what breaks quietly weeks before it
                breaks loudly enough for anyone to notice.
              </p>
              <p>
                That&rsquo;s the layer I keep finding myself drawn into. Mismatched refresh
                rates between two systems, in the{' '}
                <InlineLink href="/work/stock">stock and fulfilment work</InlineLink>, or
                the{' '}
                <InlineLink href="/work/reporting">reporting audit</InlineLink>{' '}
                it led to, were never visible on a screen. They only showed up as
                confusion, in decks that didn&rsquo;t add up and numbers nobody quite
                trusted. Noticing that, and tracing it back to its source, is as much a
                part of the job as anything you&rsquo;d see in a Figma file.
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
            <Heading>This is a service risk, not just a delivery one</Heading>
            <div className="space-y-4">
              <p>
                Most of this gets measured in delivery terms: velocity, cost, how many
                sprints something ate. That framing keeps the conversation inside
                engineering and product, where it&rsquo;s easiest to argue against, because
                the numbers can always be explained away by a busy quarter.
              </p>
              <p>
                Widen the frame and the same problem looks different. It&rsquo;s the support
                team fielding the same workaround-shaped ticket every week, because nobody
                ever fixed the thing underneath it. It&rsquo;s the one person the whole team
                quietly depends on to explain how a process actually works, and the risk
                that creates the day they&rsquo;re on leave, or leave for good. It&rsquo;s the
                trust a brand or a customer loses long before anyone in a delivery meeting
                notices a metric move. None of that shows up on a roadmap, but all of it is
                the service, not a side effect of it.
              </p>
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
                  'Frame it in terms leadership can act on: risk, time and outcome, not just tidiness',
                ]}
              />
            </div>
          </div>

          <div className="space-y-4">
            <p>
              None of the people in any of this are the problem: leadership under real
              pressure to show growth, managers trying to make a mark quickly in a new
              role, engineers protecting a rhythm that works, designers doing
              their best with what they&rsquo;ve been given. The gap is usually that nobody
              owns the whole picture end to end. That&rsquo;s the gap I like to stand in.
            </p>
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
