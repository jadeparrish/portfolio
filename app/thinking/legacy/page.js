import React from 'react';
import {
  ArticlePage,
  ArticleTitle,
  ArticleBody,
  ArticleBlock,
  ArticleHeading,
  ArticleBullets,
  PullQuote,
  Accent,
  ArticleLink,
} from '../../caseStudiesData';

export const metadata = {
  title: "Nobody wants the new feature. They just want the old one to work: Jade Parrish",
  description: 'A Service Designer on why shipping something new and keeping the old thing reliable are so hard to balance, what gets in the way, and what actually helps.',
};

export default function LegacyArticle() {
  return (
    <ArticlePage>
      <ArticleTitle
        kicker={<>Product Strategy &middot; 6 min read</>}
        title={<>Nobody wants the new feature. They just want the old one to work.</>}
        subtitle={
          <>
            Shipping something new and keeping the old thing reliable are hard to
            balance. What gets in the way, and what actually helps.
          </>
        }
      />

      <ArticleBody>
        <ArticleBlock>
          <p>
            Almost every growing organisation hits the same wall. Leadership wants to
            ship new capability to keep customers interested and win new business, but
            the service is standing on foundations that are already under strain.
          </p>
          <p>
            The natural response is to compromise: build the new thing on top of
            what&rsquo;s already fragile, whilst trying to improve the foundations too.
            In my experience that rarely works. You spend your time patching edge cases,
            delivery slows everywhere, and the experience gets worse at both ends, the
            old and the new.
          </p>
          <p>
            This tension isn&rsquo;t unique to any one company, and plenty of people have
            argued both sides of it. What I can offer is what actually happened when I
            sat on each side of that choice.
          </p>
        </ArticleBlock>

        <div>
          <ArticleHeading>Four pressures at once</ArticleHeading>
          <ArticleBlock>
            <p>
              In practice, it&rsquo;s rarely just two sides. It&rsquo;s usually four
              pressures at once:
            </p>
            <ArticleBullets
              items={[
                'Leadership pushes for innovation. New features win deals and signal momentum, so pausing to fix the foundations can feel like standing still.',
                'The foundations are already too compromised to build on. Every new thing costs more to ship and delivers less than it should, because it’s fighting the platform underneath it.',
                'At the same time, pressure to streamline and cut costs squeezes the very investment innovation needs, and management doesn’t always agree on which to prioritise.',
                'Managers don’t always stay long enough for one direction to stick, and even the ones who do can struggle to manage upwards, so priorities keep shifting either way. That pressure to show impact quickly favours starting something visible over finishing what’s already there, and that adds another layer to the pile.',
              ]}
            />
            <p>
              Any one of these on its own is manageable. Together, they&rsquo;re how a
              service ends up held together by workarounds nobody remembers agreeing to.
            </p>
            <p>
              I&rsquo;ve seen this kind of misalignment play out a few times, and once in
              a very real way. Design started working in Shape Up cycles. Engineering
              stayed in sprints, and there was never a point where both sides tried the
              same way of working at once. Neither choice was wrong on its own, but the
              result was two definitions of &ldquo;done,&rdquo; running on the same
              product at the same time. Without an agreement between the two sides, it
              didn&rsquo;t bring design and engineering closer. It added another seam
              between two teams that already needed to be closer, not further apart.
            </p>
          </ArticleBlock>
        </div>

        <div>
          <ArticleHeading>Patching versus replacing</ArticleHeading>
          <ArticleBlock>
            <p>
              On one product I worked on, the plan was to keep innovating directly on top
              of an old system. The intent was reasonable: keep moving without stopping
              to rebuild. But it meant every new feature was also a fight against the
              legacy code underneath it, and that friction showed up as delays and
              fragile releases. The funny part is that it only delayed the inevitable.
              Before I left, we overhauled the whole thing anyway.
            </p>
            <p>
              On another, at NetEDI, we took the harder route and replaced the legacy
              platform outright, rather than layering new features on top of it. That
              work is the{' '}
              <ArticleLink href="/work/netix">NetIX Redesign and Rebrand</ArticleLink>{' '}
              case study. Once the team was on a single, clean foundation, feedback came
              back faster, the core platform improved without maintaining two competing
              systems, and new features actually shipped quicker, because they
              weren&rsquo;t fighting old code to get there.
            </p>
          </ArticleBlock>
        </div>

        <div>
          <ArticleHeading>The cost never arrives all at once</ArticleHeading>
          <ArticleBlock>
            <p>
              Most conversations about this treat the cost as a series of one-off
              delays: this feature took longer, that bug took a day to trace. That
              framing makes it easy to put the fix off each time, because no single
              instance looks big enough to act on.
            </p>
            <p>
              What actually happens is that it accumulates. Every workaround left in
              place makes the next change a little harder, until something small and
              ordinary takes far more care than it should and nobody can quite explain
              why. By the time it&rsquo;s obvious enough for leadership to notice, it
              has already taken more time than fixing it early would have.
            </p>
          </ArticleBlock>
        </div>

        <div>
          <ArticleHeading>Why the invisible work rarely gets rewarded</ArticleHeading>
          <ArticleBlock>
            <p>
              There&rsquo;s a part of this that doesn&rsquo;t get said much. Even people
              who know the right call is to stabilise something rather than ship the next
              new thing are pulled toward the visible option, because that&rsquo;s what
              gets noticed, reviewed and promoted.
            </p>
            <p>
              Preventing a problem well means, from the outside, that nothing happened.
              Shipping something new is a story anyone can tell in a meeting.
              That&rsquo;s not a character problem in any one person, it&rsquo;s an
              incentive problem across the whole organisation, and it&rsquo;s a big part
              of why foundations keep losing to features even when everyone privately
              agrees they shouldn&rsquo;t.
            </p>
            <p>
              I&rsquo;ve felt this before. For a long time, saying the reporting numbers
              didn&rsquo;t line up wasn&rsquo;t enough on its own, and that&rsquo;s a
              fair position for anyone to hold: a general worry is a hard thing to act on
              without more to point to. What actually changed things was building the
              argument properly: auditing every reporting view, documenting exactly where
              and why the numbers diverged, and gathering what customers and our own
              commercial team had been telling me alongside it. Then taking all of that
              to the CTO as a proposal rather than a concern.
            </p>
            <p>
              That&rsquo;s where I think design has a specific, under-discussed job to
              do: turning an invisible risk into something leadership can actually act
              on, in terms of risk, time and outcome, rather than leaving it as a
              technical concern that never makes it into the room where the decision
              gets made.
            </p>
          </ArticleBlock>
        </div>

        <div>
          <ArticleHeading>Most of the risk lives below the screen</ArticleHeading>
          <ArticleBlock>
            <p>
              A lot of design attention stops at the interface: does this flow make
              sense, is this state clear, is this accessible. Those questions matter, but
              on their own they miss where a lot of the real risk sits, which is in the
              operational layer underneath. How data moves between systems, who gets
              affected when two tools disagree, what goes wrong quietly, weeks before
              anyone notices.
            </p>
            <p>
              That&rsquo;s the layer I keep finding myself drawn into. Mismatched refresh
              rates between two systems, in the{' '}
              <ArticleLink href="/work/stock">stock and fulfilment work</ArticleLink> and
              the reporting audit it led to, were never visible on a screen. They only
              showed up as confusion, in decks that didn&rsquo;t add up and numbers
              nobody quite trusted. I&rsquo;ve also found a commercial team working
              directly in a developer tool, because it was the only place the numbers
              they needed lived. Nothing about that tool was built for them, and it
              carried real risk every time they opened it. Noticing things like that, and
              tracing them back to the source, is as much a part of the job as anything
              you&rsquo;d see in a Figma file.
            </p>
          </ArticleBlock>
        </div>

        <div>
          <ArticleHeading>The hidden cost of &ldquo;no downtime&rdquo;</ArticleHeading>
          <ArticleBlock>
            <p>
              Refusing to invest in the foundations because there&rsquo;s no time is a
              false economy. Build on something brittle for long enough, and:
            </p>
            <ArticleBullets
              items={[
                'Delivery slows down: what should take two weeks takes two months, because the team is fighting old constraints',
                'Quality slips at both ends: new things don’t work as well as they could, and old things break in ways nobody expects',
                'Trust erodes: people don’t care about the roadmap if the tool they use every day feels unreliable',
              ]}
            />
          </ArticleBlock>
        </div>

        <div>
          <ArticleHeading>This is a service risk, not just a delivery one</ArticleHeading>
          <ArticleBlock>
            <p>
              Most of this gets measured in delivery terms: velocity, cost, how many
              sprints something took. That framing keeps the conversation inside
              engineering and product, where it&rsquo;s easiest to argue against, because
              the numbers can always be explained away by a busy quarter.
            </p>
            <p>
              Widen the frame and the same problem looks different. It&rsquo;s the
              support team fielding the same workaround-shaped ticket every week, because
              nobody ever fixed the thing underneath it. It&rsquo;s the one person the
              whole team quietly depends on to explain how a process actually works, and
              the risk that creates the day they&rsquo;re on leave, or leave for good.
              It&rsquo;s the trust a brand or a customer loses long before anyone in a
              delivery meeting notices a metric move. None of that shows up on a roadmap,
              but all of it is the service, not a side effect of it.
            </p>
          </ArticleBlock>
        </div>

        <div>
          <ArticleHeading>Finding the pragmatic middle ground</ArticleHeading>
          <ArticleBlock>
            <p>
              Leadership will rarely grant six months to rewrite everything, and usually
              they shouldn&rsquo;t. The answer is in how the foundational work gets
              framed and structured:
            </p>
            <ArticleBullets
              items={[
                'Replace, don’t layer: when a part of a system has hit its limit, replace that part properly rather than wrapping it in another workaround',
                'Agree the rules of the tech stack: which patterns the team builds with, what gets replaced and what stays, so the same decision isn’t reopened on every ticket',
                'Pick good enough over perfect: the aim isn’t the ideal architecture, it’s a solid pattern the team can actually ship',
                'Frame it in terms leadership can act on: risk, time and outcome, not just tidiness',
              ]}
            />
            <p>
              This does work in practice. At one company, before I left, engineering had
              started scheduling foundation work into every week: a small, steady amount
              rather than one big pause. That&rsquo;s the version that tends to survive
              contact with a roadmap.
            </p>
          </ArticleBlock>
        </div>

        <ArticleBlock>
          <p>
            None of the people in any of this are the problem: leadership under real
            pressure to show growth, managers trying to make a mark quickly in a new
            role, engineers protecting a rhythm that works, designers doing their best
            with what they&rsquo;ve been given. The gap is usually that nobody owns the
            whole picture end to end. That&rsquo;s the gap I like to stand in.
          </p>
          <PullQuote>
            If you want a service that feels new, you can&rsquo;t build it on{' '}
            <Accent>legacy foundations.</Accent>
          </PullQuote>
          <p>
            The real work of design and product strategy isn&rsquo;t only deciding what
            to build next. It&rsquo;s making the case for fixing what&rsquo;s already
            there, first.
          </p>
        </ArticleBlock>
      </ArticleBody>
    </ArticlePage>
  );
}
