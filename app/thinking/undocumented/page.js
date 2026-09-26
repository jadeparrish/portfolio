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
  title: "Most \"complex\" systems are just undocumented ones: Jade Parrish",
  description: 'A Service Designer on why complexity gets mistaken for expertise, and why the real craft is simplifying and telling a clear story.',
};

export default function UndocumentedArticle() {
  return (
    <ArticlePage slug="undocumented">
      <ArticleTitle
        kicker={<>Systems Thinking &middot; 2 min read</>}
        title={<>Most &ldquo;complex&rdquo; systems are just undocumented ones.</>}
        subtitle={
          <>
            Why complexity gets mistaken for expertise, and why the real craft is
            simplifying a service and telling a clear story about how it works.
          </>
        }
      />

      <ArticleBody>
        <ArticleBlock>
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
            <ArticleLink href="/work/netix">NetIX&rsquo;s workflows</ArticleLink> before
            its rebuild, and again auditing{' '}
            <ArticleLink href="/work/stock">stock and reporting data</ArticleLink>{' '}
            at another company.
          </p>
          <p>
            None of this is a new observation. Technical debt and legibility have been
            written about for years. What I can add is that it&rsquo;s been true every
            time I&rsquo;ve looked.
          </p>
        </ArticleBlock>

        <div>
          <ArticleHeading>The trap of adding without mapping</ArticleHeading>
          <ArticleBlock>
            <p>
              It&rsquo;s easy to make a service more complicated. Anyone can add another
              exception, another spreadsheet, another handoff to solve a problem in front
              of them today. When teams are under pressure, these additions pile up
              without anyone owning the whole picture.
            </p>
            <p>The result isn&rsquo;t true complexity. It&rsquo;s just noise:</p>
            <ArticleBullets
              items={[
                'Simple rules get buried under exceptions built for one-off cases',
                'The reasoning behind a decision lives only in one person’s head',
                'Every change feels risky, because no one can see how the parts connect',
              ]}
            />
            <p>
              Making something intricate takes very little effort. Making it
              understandable takes real skill.
            </p>
          </ArticleBlock>
        </div>

        <div>
          <ArticleHeading>Cleverness is simplification</ArticleHeading>
          <ArticleBlock>
            <p>
              The best designers and engineers I&rsquo;ve worked with aren&rsquo;t the
              ones who produce the most intricate solution. They&rsquo;re the ones who
              can take a tangle of edge cases, distil it to its core logic, and explain
              it to a room of stakeholders in five minutes.
            </p>
            <p>Cleverness looks like:</p>
            <ArticleBullets
              items={[
                'Choosing the shared, boring pattern over the bespoke one, because it lowers the load on everyone else',
                'Turning a process only one person understands into a map anyone on the team can follow',
                'Accepting that if you can’t sketch how a service works on a napkin, you probably don’t understand it yet',
              ]}
            />
          </ArticleBlock>
        </div>

        <div>
          <ArticleHeading>Systems are stories</ArticleHeading>
          <ArticleBlock>
            <p>
              A process tells people what to do. Documentation and structure tell people
              why it matters. When a service has no clear story, every new person joining
              has to become a detective, piecing it together from old tickets,
              half-remembered decisions and whoever happens to still be around.
            </p>
            <p>Treat documentation and structure as storytelling, and things change:</p>
            <ArticleBullets
              items={[
                'Intent becomes obvious: someone new can follow a request end to end without a guided tour',
                'Boundaries become clear: teams know exactly where a new piece of work belongs',
                'Maintenance becomes routine: people spend less time working out how something functions, and more time making it better',
              ]}
            />
            <p>
              That last one matters more than it sounds. A team that understands its own
              system spends its time improving it rather than working around it, which
              is the same reason{' '}
              <ArticleLink href="/thinking/legacy">
                fixing the foundations
              </ArticleLink>{' '}
              tends to pay for itself.
            </p>
          </ArticleBlock>
        </div>

        <ArticleBlock>
          <PullQuote>
            Complexity is easy. <Accent>Clarity takes discipline.</Accent>
          </PullQuote>
          <p>
            Give a team shared structure, and encourage them to tell the story of how
            their service actually works, and the &ldquo;complex&rdquo; system tends to
            disappear. What&rsquo;s left is something clear and reliable, and the real
            cleverness of the people who made it that way.
          </p>
        </ArticleBlock>
      </ArticleBody>
    </ArticlePage>
  );
}
