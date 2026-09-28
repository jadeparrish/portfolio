import React from 'react';
import {
  ArticlePage,
  ArticleTitle,
  ArticleBody,
  ArticleBlock,
  ArticleHeading,
  PullQuote,
  Accent,
  ArticleLink,
} from '../../caseStudiesData';

export const metadata = {
  title: "Nobody wants the new feature. They just want the old one to work: Jade Parrish",
  description:
    'Building new capability on foundations that are already failing delays the rebuild rather than avoiding it. What I have seen on both sides of that choice.',
};

export default function LegacyArticle() {
  return (
    <ArticlePage slug="legacy">
      <ArticleTitle
        kicker={<>Product Strategy &middot; 6 min read</>}
        title={<>Nobody wants the new feature. They just want the old one to work.</>}
        subtitle={
          <>
            Building new capability on foundations that are already failing delays the
            rebuild rather than avoiding it. What I have seen on both sides of that
            choice.
          </>
        }
      />

      <ArticleBody>
        <ArticleBlock>
          <p>
            On one product I worked on, the decision was to keep shipping new features
            directly on top of a system everybody already knew was struggling. The
            thinking was reasonable enough: keep moving, don&rsquo;t stop to rebuild.
            Every new feature was a fight with the code underneath it. We paid for that
            in slipped dates and fragile releases.
          </p>
          <p>
            Before I left, we overhauled the whole thing anyway.
          </p>
        </ArticleBlock>

        <ArticleBlock>
          <p>
            At NetEDI we took the other route and{' '}
            <ArticleLink href="/work/netix">replaced the legacy platform outright</ArticleLink>{' '}
            rather than layering onto it. Once the team was working on one clean
            foundation, feedback came back faster, the core platform improved without
            anybody maintaining two competing versions of it, and new features actually
            shipped quicker, because they were no longer fighting old code to get out of
            the door.
          </p>
          <p>
            I have now sat on both sides of that decision, which is the only reason I
            have anything to add to a debate people have been having for decades.
          </p>
        </ArticleBlock>

        <div>
          <ArticleHeading>Why organisations keep choosing to patch</ArticleHeading>
          <ArticleBlock>
            <p>
              Leadership is under real pressure to ship new
              capability, because new features win deals and signal momentum, and pausing
              to repair the foundations looks from the outside like standing still. At
              the same time the foundations are already compromised enough that every new
              thing costs more and delivers less than it should. Then there is pressure
              to cut costs, which squeezes exactly the investment the new work depends on.
            </p>
            <p>
              And managers often don&rsquo;t stay long enough for one direction to stick.
              Even the ones who do can struggle to manage upwards, so priorities shift
              either way. The pressure to show impact quickly favours starting something
              visible over finishing something that already exists, and that adds another
              layer to the pile.
            </p>
            <p>
              Any one of those on its own is manageable. Together they are how a service
              ends up held together by workarounds that nobody remembers agreeing to.
            </p>
            <p>
              I watched this happen. We were all working in sprints, and then our Product
              Manager decided design should move to Shape Up cycles while engineering
              stayed where it was. Neither way of working is wrong on its own, but we
              ended up with two definitions of &ldquo;done&rdquo; running on the same
              product, and it put a seam between two teams who needed to be closer, not
              further apart.
            </p>
          </ArticleBlock>
        </div>

        <ArticleBlock>
          <p>
            The cost shows up as this feature taking longer, that bug taking a day to
            trace. Each instance is small enough to absorb, and then every workaround
            left in place makes the next change slightly harder, until something
            perfectly ordinary takes far more care than it should and nobody can really
            say why. By the time it is obvious enough for leadership to notice, it has
            already cost more than fixing it early would have.
          </p>
        </ArticleBlock>

        <ArticleBlock>
          <p>
            There is a part of this that goes unsaid. Even people who know the right call
            is to stabilise something rather than ship the next new thing are pulled
            towards the visible option, because the visible option is what gets noticed,
            reviewed and promoted.
          </p>
          <PullQuote>
            Preventing a problem well means that, from the outside,{' '}
            <Accent>nothing happened.</Accent>
          </PullQuote>
          <p>
            Shipping something new is a story anybody can tell in a meeting. That
            isn&rsquo;t a character flaw in any individual. It is an incentive problem
            across a whole organisation, and it is a large part of why foundations keep
            losing to features even where everyone privately agrees they shouldn&rsquo;t.
          </p>
        </ArticleBlock>

        <div>
          <ArticleHeading>Turning a concern into a proposal</ArticleHeading>
          <ArticleBlock>
            <p>
              I have been on the losing end of this. For a long time, saying that the
              reporting numbers didn&rsquo;t line up wasn&rsquo;t enough on its own, and
              that is a fair position for anybody to hold. A general worry is a hard thing
              to act on.
            </p>
            <p>
              What changed it was building the argument properly. I audited every
              reporting view, documented exactly where and why the numbers diverged, and
              gathered what customers and our own Commercial Team had been telling me
              alongside it. Then I took the whole thing to the CTO as a proposal rather
              than a concern. That became the{' '}
              <ArticleLink href="/work/reporting">reporting work</ArticleLink>.
            </p>
            <p>
              That is the specific job I think design has here and rarely claims: turning
              an invisible risk into something leadership can act on, in terms of risk,
              time and outcome, instead of leaving it as a technical worry that never
              reaches the room where the decision gets made.
            </p>
          </ArticleBlock>
        </div>

        <ArticleBlock>
          <p>
            Most of the risk also sits below the screen, which is the other reason it goes
            unseen. Design attention tends to stop at the interface: does this flow make
            sense, is this state clear, is this accessible. Those questions matter, and
            they miss the operational layer underneath, where data moves between systems
            and things go wrong weeks before anybody notices.
          </p>
          <p>
            Mismatched refresh rates between two systems, which I found in the{' '}
            <ArticleLink href="/work/stock">stock and fulfilment work</ArticleLink>, were
            never visible on any screen. They became decks that didn&rsquo;t add up
            and numbers nobody quite trusted. I have also found a commercial team working
            directly inside a developer tool, because it was the only place the figures
            they needed actually lived. Nothing about that tool was built for them, and
            it carried real risk every time they opened it.
          </p>
        </ArticleBlock>

        <ArticleBlock>
          <p>
            None of which means leadership should grant six months to rewrite everything.
            They rarely will, and usually they shouldn&rsquo;t. What works is smaller than
            that. When a part of a system has hit its limit, replace that part properly
            instead of wrapping it in another workaround. Agree which patterns the team
            builds with, and what gets replaced, so the same argument isn&rsquo;t reopened
            on every ticket. Aim for a solid pattern the team can actually ship rather
            than the ideal architecture. And frame all of it in terms leadership can act
            on.
          </p>
          <p>
            It does work. At one company, before I left, Engineering had started
            scheduling foundation work into every week: a small steady amount rather than
            one big pause. That is the version that survives contact with a roadmap.
          </p>
        </ArticleBlock>

        <ArticleBlock>
          <p>
            Nobody in any of this is the villain. Leadership is under real pressure to
            show growth, managers are trying to make a mark quickly in a new role,
            engineers are protecting a rhythm that works, designers are doing their best
            with what they have been handed. The gap is that nobody owns the whole picture
            end to end.
          </p>
          <p>
            That gap is where I like to stand, and the work there is less about deciding
            what to build next than about making the case for fixing what is already
            there.
          </p>
        </ArticleBlock>
      </ArticleBody>
    </ArticlePage>
  );
}
