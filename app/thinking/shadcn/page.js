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
  title: "The hard part of adopting ShadCN wasn't technical: Jade Parrish",
  description: 'A Senior Product Designer on co-leading a ShadCN rollout, and why aligning design and code from day one saves real time.',
};

export default function ShadcnArticle() {
  return (
    <ArticlePage>
      <ArticleTitle
        kicker={<>Design systems &middot; 4 min read</>}
        title={<>The hard part of adopting ShadCN wasn&rsquo;t technical.</>}
        subtitle={
          <>
            A Senior Product Designer on co-leading a ShadCN rollout, and what it taught
            me about aligning design and code from day one.
          </>
        }
      />

      <ArticleBody>
        <ArticleBlock>
          <p>
            I&rsquo;ve worked with both structured, token-driven design systems and
            newer, developer-first tools. I&rsquo;ve taken the same approach to two
            different component frameworks at two companies, one of them ShadCN,
            co-leading each with a Senior Engineer to align design and code from day
            one. So this isn&rsquo;t a technical comparison. It&rsquo;s what I&rsquo;ve
            learned about how teams actually work when they&rsquo;re balancing speed,
            quality and limited time.
          </p>
          <p>
            None of this is a new tension. Every small team scaling past a handful of
            components eventually asks whether more structure is worth the overhead. What
            I can offer is what actually happened when I worked through it twice.
          </p>
          <p>
            The clearest win was practical: one shared set of styles between design and
            engineering meant a single update instead of a dozen.
          </p>
        </ArticleBlock>

        <div>
          <ArticleHeading>Start with how the engineers already work</ArticleHeading>
          <ArticleBlock>
            <p>
              Before changing anything in Figma, I audited how the engineers were
              building and styling their CSS, then aligned those conventions with
              ShadCN. That mattered more than any component choice. It meant design and
              code started from the same place, and gave us a common language. I also
              wrote the documentation that went with it.
            </p>
            <p>
              The codebase felt accessible rather than imposed. Developers could work
              without friction, and I could update Figma components and tokens without
              breaking anyone&rsquo;s flow. The result was genuine alignment between
              design and engineering, not through meetings or handoffs, but through
              shared ownership.
            </p>
          </ArticleBlock>
        </div>

        <div>
          <ArticleHeading>The hard part was cultural</ArticleHeading>
          <ArticleBlock>
            <p>
              ShadCN gives designers flexibility, but it can also feel intimidating.
              The framework is developer-first, so it&rsquo;s easy to assume you need to
              read code to have a say, or that design decisions are being made in the
              codebase before anyone has looked at them properly.
            </p>
            <p>
              The truth is the opposite. ShadCN increases the need for design
              leadership. Someone has to define hierarchy, accessibility, interaction
              standards and naming conventions. Without that direction, it turns into a
              collection of part-styled buttons.
            </p>
            <p>
              There&rsquo;s a second reason design belongs in this. How something works
              is a design question, not only an engineering one, and it should be treated
              that way every time. Someone has to turn the decisions living in the
              codebase into a story the rest of the team can follow. That&rsquo;s true
              of{' '}
              <ArticleLink href="/thinking/undocumented">any system</ArticleLink>, not
              just this one.
            </p>
            <p>
              So the challenge isn&rsquo;t technical adoption. It&rsquo;s confidence.
              Designers have to see it not as automation, but as a shared foundation
              they help shape.
            </p>
          </ArticleBlock>
        </div>

        <div>
          <ArticleHeading>What traditional systems cost</ArticleHeading>
          <ArticleBlock>
            <p>
              Traditional design systems get framed as the grown-up option: shared
              tokens, locked-down components, a formal contribution model. That does
              create consistency, and there&rsquo;s a point where consistency is worth
              paying for.
            </p>
            <p>
              I&rsquo;m less sure size is the deciding factor, though. A central system
              can become its own bottleneck at any scale, where every update turns into a
              governance decision and the gap between design intent and what gets built
              quietly widens. What really decides it is how much variation between
              products you can live with, and how much time you&rsquo;re willing to spend
              maintaining the process rather than improving the experience.
            </p>
            <p>
              The friction isn&rsquo;t always the system itself. I&rsquo;ve worked on
              teams where design input was welcome in principle but arrived too late to
              change much in practice, and no amount of tooling fixes that on its own.
              What this approach did was make the shared ground literal: the same
              conventions, the same tokens, the same source. It&rsquo;s much harder to
              keep design at arm&rsquo;s length when you&rsquo;re both editing the same
              thing.
            </p>
          </ArticleBlock>
        </div>

        <div>
          <ArticleHeading>What ShadCN gives you instead</ArticleHeading>
          <ArticleBlock>
            <p>
              ShadCN is built for movement. It&rsquo;s copy-and-own by design, so teams
              can adapt components, align them to the brand and evolve the system without
              waiting on releases or dependency updates. It isn&rsquo;t a design system
              in the formal sense. It&rsquo;s a starting point that grows into what you
              need, rather than something you inherit with a hundred rules you&rsquo;re
              scared to break. It&rsquo;s pragmatic rather than perfect, and it
              doesn&rsquo;t limit designers or developers.
            </p>
          </ArticleBlock>
        </div>

        <div>
          <ArticleHeading>Finding the balance</ArticleHeading>
          <ArticleBlock>
            <p>
              The most successful teams I&rsquo;ve seen treat ShadCN as a flexible base,
              then layer on system thinking as the product matures:
            </p>
            <ArticleBullets
              items={[
                'Start with ShadCN components to move quickly',
                'Introduce tokens, spacing scales and semantic colours once patterns stabilise',
                'Document what matters, not everything',
                'Keep accessibility and naming consistent from the start',
              ]}
            />
            <p>
              That way the system stays flexible but grounded. It grows with the product
              rather than ahead of it.
            </p>
          </ArticleBlock>
        </div>

        <ArticleBlock>
          <PullQuote>
            Traditional systems can end up protecting the status quo.{' '}
            <Accent>
              Used well, ShadCN protects consistency and momentum at the same time.
            </Accent>
          </PullQuote>
          <p>
            When your team is five people trying to build something that feels bigger,
            momentum is everything. But the reason I&rsquo;d do this again isn&rsquo;t a
            feeling, it&rsquo;s the maths. Before this, a colour or spacing change meant
            updating it separately in Figma, in the CSS, and in however many components
            had drifted from both. Afterwards, it meant updating one shared source and
            watching it propagate. One change, not a dozen, every time.
          </p>
        </ArticleBlock>
      </ArticleBody>
    </ArticlePage>
  );
}
